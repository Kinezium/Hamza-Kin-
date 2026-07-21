import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import nodemailer from 'nodemailer';

const app = express();
const port = Number(process.env.PORT || 8787);
const jwtSecret = process.env.JWT_SECRET || 'change-this-secret';
const adminUser = process.env.ADMIN_USER || 'H@mza';
const adminPassword = process.env.ADMIN_PASSWORD || 'Chn!d3r';
const corsOrigin = process.env.CORS_ORIGIN || '*';
const leadEmailTo = process.env.LEAD_EMAIL_TO || 'hamza.chnider@gmail.com';
const providerLeadEmailTo = process.env.PROVIDER_LEAD_EMAIL_TO || 'hamza.chnider@gmail.com';
const smtpUrl = process.env.SMTP_URL || '';
const smtpHost = process.env.SMTP_HOST || '';
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER || '';
const smtpPass = process.env.SMTP_PASS || '';
const smtpFrom = process.env.SMTP_FROM || leadEmailTo;
const isSmtpSecure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true' || smtpPort === 465;

const dataDir = path.resolve('data');
const uploadsDir = path.resolve('uploads');
const configPath = path.join(dataDir, 'config.json');
const providerSignupsPath = path.join(dataDir, 'provider-signups.json');

const TRACKED_PROVIDER_SLOTS = [
  { city: 'Casablanca', district: 'Sbata', capacity: 1 },
  { city: 'Casablanca', district: 'Maarif', capacity: 2 },
  { city: 'Rabat', district: 'Agdal', capacity: 2 },
  { city: 'Marrakech', district: 'Guelliz', capacity: 2 }
];

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

app.use(cors({ origin: corsOrigin === '*' ? true : corsOrigin }));
app.use(express.json({ limit: '4mb' }));
app.use('/uploads', express.static(uploadsDir));

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, uploadsDir),
  filename: (_, file, cb) => {
    const ext = path.extname(file.originalname || '.jpg').toLowerCase();
    cb(null, `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`);
  }
});
const upload = multer({ storage });
const leadRequestLog = new Map();

const getMailer = () => {
  if (smtpUrl) {
    return nodemailer.createTransport(smtpUrl);
  }

  if (!smtpHost || !smtpUser || !smtpPass) {
    return null;
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: isSmtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });
};

const readConfig = () => {
  if (!fs.existsSync(configPath)) return {};
  try {
    const raw = fs.readFileSync(configPath, 'utf8');
    return JSON.parse(raw || '{}');
  } catch {
    return {};
  }
};

const saveConfig = (config) => {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
};

const readProviderSignups = () => {
  if (!fs.existsSync(providerSignupsPath)) return [];
  try {
    const raw = fs.readFileSync(providerSignupsPath, 'utf8');
    const parsed = JSON.parse(raw || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const saveProviderSignups = (records) => {
  fs.writeFileSync(providerSignupsPath, JSON.stringify(records, null, 2), 'utf8');
};

const signToken = (username) => jwt.sign({ username }, jwtSecret, { expiresIn: '8h' });

const auth = (req, res, next) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!token) return res.status(401).send('Token manquant.');
  try {
    jwt.verify(token, jwtSecret);
    next();
  } catch {
    return res.status(401).send('Token invalide ou expire.');
  }
};

const comparePassword = async (password, stored) => {
  if (!stored) return false;
  if (stored.startsWith('$2')) return bcrypt.compare(password, stored);
  return password === stored;
};

app.get('/api/health', (_, res) => {
  res.json({ ok: true, service: 'ltm-admin-api' });
});

app.get('/api/provider-slots', (_, res) => {
  const signups = readProviderSignups();
  const exclusiveSignups = signups.filter((item) => String(item?.visibilityOption || '') === 'exclusive');

  const rows = TRACKED_PROVIDER_SLOTS.map((slot) => {
    const used = exclusiveSignups.filter(
      (item) => String(item?.city || '') === slot.city && String(item?.district || '') === slot.district
    ).length;

    const remaining = Math.max(0, slot.capacity - used);

    return {
      city: slot.city,
      district: slot.district,
      capacity: slot.capacity,
      used,
      remaining
    };
  });

  return res.json({
    ok: true,
    rows,
    totalSignups: signups.length,
    totalExclusiveSignups: exclusiveSignups.length,
    updatedAt: new Date().toISOString()
  });
});

app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body || {};
  const config = readConfig();
  const configuredUser = config?.credentials?.username || adminUser;
  const configuredPassword = config?.credentials?.password || adminPassword;

  const userOk = username === configuredUser;
  const passOk = await comparePassword(password || '', configuredPassword);

  if (!userOk || !passOk) {
    return res.status(401).send('Identifiants invalides.');
  }

  const token = signToken(username);
  return res.json({ token });
});

app.get('/api/config', auth, (req, res) => {
  return res.json(readConfig());
});

app.put('/api/config', auth, async (req, res) => {
  const nextConfig = req.body || {};

  if (nextConfig?.credentials?.password && !nextConfig.credentials.password.startsWith('$2')) {
    const hashed = await bcrypt.hash(nextConfig.credentials.password, 10);
    nextConfig.credentials.password = hashed;
  }

  saveConfig(nextConfig);
  return res.json({ ok: true });
});

app.post('/api/upload', auth, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).send('Aucun fichier upload.');
  const url = `/uploads/${req.file.filename}`;
  return res.json({ url });
});

app.post('/api/leads/home-therapy', async (req, res) => {
  const phone = String(req.body?.phone || '').trim();
  const lang = String(req.body?.lang || 'fr').trim();
  const pageUrl = String(req.body?.pageUrl || '').trim();
  const pageTitle = String(req.body?.pageTitle || '').trim();
  const source = String(req.body?.source || 'site').trim();
  const requesterKey = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown').toString();
  const now = Date.now();
  const lastSeen = leadRequestLog.get(requesterKey) || 0;

  if (now - lastSeen < 60_000) {
    return res.status(429).send(lang === 'ar' ? 'الرجاء الانتظار قبل إعادة المحاولة.' : 'Veuillez patienter avant de renvoyer une demande.');
  }

  if (!/^\+?[\d\s().-]{9,20}$/.test(phone)) {
    return res.status(400).send(lang === 'ar' ? 'رقم الهاتف غير صالح.' : 'Numéro de téléphone invalide.');
  }

  const mailer = getMailer();
  if (!mailer) {
    return res.status(503).send(lang === 'ar' ? 'خدمة البريد غير مفعلة.' : 'Service e-mail non configuré.');
  }

  const submittedAt = new Date().toISOString();
  const subject = lang === 'ar'
    ? `طلب جديد للترويض المنزلي - ${phone}`
    : `Nouveau lead kinésithérapie à domicile - ${phone}`;
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="margin-bottom: 16px;">${lang === 'ar' ? 'طلب جديد من الموقع' : 'Nouvelle demande depuis le site'}</h2>
      <p><strong>${lang === 'ar' ? 'Numéro' : 'Téléphone'} :</strong> ${phone}</p>
      <p><strong>Langue :</strong> ${lang}</p>
      <p><strong>Source :</strong> ${source}</p>
      <p><strong>${lang === 'ar' ? 'عنوان الصفحة' : 'Titre de la page'} :</strong> ${pageTitle || '-'}</p>
      <p><strong>URL :</strong> ${pageUrl || '-'}</p>
      <p><strong>${lang === 'ar' ? 'Date' : 'Date'} :</strong> ${submittedAt}</p>
    </div>
  `;

  await mailer.sendMail({
    from: smtpFrom,
    to: leadEmailTo,
    replyTo: smtpFrom,
    subject,
    text: [
      lang === 'ar' ? 'طلب جديد من الموقع' : 'Nouvelle demande depuis le site',
      `Téléphone: ${phone}`,
      `Langue: ${lang}`,
      `Source: ${source}`,
      `Page: ${pageTitle || '-'}`,
      `URL: ${pageUrl || '-'}`,
      `Date: ${submittedAt}`
    ].join('\n'),
    html
  });

  const signups = readProviderSignups();
  signups.push({
    ownerName,
    centerName,
    profileType,
    professionGroup,
    visibilityOption,
    computedPrice,
    specialty,
    city,
    district,
    phone,
    whatsappUrl,
    email,
    hours,
    services,
    description,
    address,
    mapUrl,
    logoUrl,
    galleryUrls,
    promptForDirectory,
    pageUrl,
    submittedAt
  });
  saveProviderSignups(signups);

  leadRequestLog.set(requesterKey, now);
  return res.json({ ok: true });
});

app.post('/api/leads/provider-profile', async (req, res) => {
  const lang = String(req.body?.lang || 'fr').trim();
  const ownerName = String(req.body?.ownerName || '').trim();
  const centerName = String(req.body?.centerName || '').trim();
  const profileType = String(req.body?.profileType || 'center').trim();
  const professionGroup = String(req.body?.professionGroup || '').trim();
  const visibilityOption = String(req.body?.visibilityOption || '').trim();
  const computedPrice = String(req.body?.computedPrice || '').trim();
  const specialty = String(req.body?.specialty || '').trim();
  const city = String(req.body?.city || '').trim();
  const district = String(req.body?.district || '').trim();
  const phone = String(req.body?.phone || '').trim();
  const whatsappUrl = String(req.body?.whatsappUrl || '').trim();
  const email = String(req.body?.email || '').trim();
  const hours = String(req.body?.hours || '').trim();
  const services = String(req.body?.services || '').trim();
  const description = String(req.body?.description || '').trim();
  const address = String(req.body?.address || '').trim();
  const mapUrl = String(req.body?.mapUrl || '').trim();
  const logoUrl = String(req.body?.logoUrl || '').trim();
  const galleryUrls = String(req.body?.galleryUrls || '').trim();
  const promptForDirectory = String(req.body?.promptForDirectory || '').trim();
  const pageUrl = String(req.body?.pageUrl || '').trim();
  const submittedAt = String(req.body?.submittedAt || new Date().toISOString()).trim();
  const requesterKey = `provider:${(req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown').toString()}`;
  const now = Date.now();
  const lastSeen = leadRequestLog.get(requesterKey) || 0;

  if (now - lastSeen < 60_000) {
    return res.status(429).send(lang === 'ar' ? 'الرجاء الانتظار قبل إعادة المحاولة.' : 'Veuillez patienter avant de renvoyer une demande.');
  }

  if (!ownerName || !centerName || !specialty || !city || !district || !phone || !email || !services || !description || !address) {
    return res.status(400).send(lang === 'ar' ? 'يرجى إكمال الحقول المطلوبة.' : 'Veuillez remplir les champs obligatoires.');
  }

  const mailer = getMailer();
  if (!mailer) {
    return res.status(503).send(lang === 'ar' ? 'خدمة البريد غير مفعلة.' : 'Service e-mail non configuré.');
  }

  const subject = lang === 'ar'
    ? `طلب إضافة ملف مهني - ${centerName}`
    : `Demande d'ajout de profil praticien - ${centerName}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="margin-bottom: 16px;">${lang === 'ar' ? 'طلب ملف جديد من استمارة الممارس' : 'Nouvelle demande profil praticien'}</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 760px;">
        <tbody>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'اسم الممارس' : 'Praticien'}</strong></td><td>${ownerName}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'اسم المركز' : 'Centre/Cabinet'}</strong></td><td>${centerName}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'نوع الملف' : 'Type de profil'}</strong></td><td>${profileType}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'فئة المهنة' : 'Famille profession'}</strong></td><td>${professionGroup || '-'}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'خيار الحي' : 'Option quartier'}</strong></td><td>${visibilityOption || '-'}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'السعر' : 'Tarif estime'}</strong></td><td>${computedPrice ? `${computedPrice} DH` : '-'}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'التخصص' : 'Specialite'}</strong></td><td>${specialty}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'المدينة' : 'Ville'}</strong></td><td>${city}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'الحي' : 'Quartier'}</strong></td><td>${district}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'الهاتف' : 'Telephone'}</strong></td><td>${phone}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>WhatsApp</strong></td><td>${whatsappUrl || '-'}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'المواعيد' : 'Horaires'}</strong></td><td>${hours || '-'}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'الخدمات' : 'Services'}</strong></td><td>${services}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'الوصف' : 'Description'}</strong></td><td>${description}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'العنوان' : 'Adresse'}</strong></td><td>${address}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Google Maps</strong></td><td>${mapUrl || '-'}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'رابط الشعار' : 'Logo'}</strong></td><td>${logoUrl || '-'}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'روابط المعرض' : 'Galerie (liens)'}</strong></td><td>${galleryUrls || '-'}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>URL</strong></td><td>${pageUrl || '-'}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>${lang === 'ar' ? 'التاريخ' : 'Date'}</strong></td><td>${submittedAt}</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top: 20px;">${lang === 'ar' ? 'بلوك جاهز للنسخ (إضافة الدليل)' : 'Bloc pret a copier (ajout annuaire)'}</h3>
      <pre style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:12px; padding:12px; white-space:pre-wrap; font-family:Consolas, monospace;">${promptForDirectory || '-'}</pre>
    </div>
  `;

  await mailer.sendMail({
    from: smtpFrom,
    to: providerLeadEmailTo,
    replyTo: email || smtpFrom,
    subject,
    text: [
      lang === 'ar' ? 'طلب ملف جديد' : 'Nouvelle demande profil praticien',
      `Praticien: ${ownerName}`,
      `Centre: ${centerName}`,
      `Type: ${profileType}`,
      `Famille profession: ${professionGroup || '-'}`,
      `Option quartier: ${visibilityOption || '-'}`,
      `Tarif estime: ${computedPrice ? `${computedPrice} DH` : '-'}`,
      `Specialite: ${specialty}`,
      `Ville: ${city}`,
      `Quartier: ${district}`,
      `Telephone: ${phone}`,
      `WhatsApp: ${whatsappUrl || '-'}`,
      `Email: ${email}`,
      `Horaires: ${hours || '-'}`,
      `Services: ${services}`,
      `Description: ${description}`,
      `Adresse: ${address}`,
      `Maps: ${mapUrl || '-'}`,
      `Logo: ${logoUrl || '-'}`,
      `Galerie: ${galleryUrls || '-'}`,
      '',
      'Prompt annuaire:',
      promptForDirectory || '-',
      `URL: ${pageUrl || '-'}`,
      `Date: ${submittedAt}`
    ].join('\n'),
    html
  });

  leadRequestLog.set(requesterKey, now);
  return res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`LTM Admin API running on http://localhost:${port}`);
});
