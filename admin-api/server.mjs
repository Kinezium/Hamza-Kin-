import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';

const app = express();
const port = Number(process.env.PORT || 8787);
const jwtSecret = process.env.JWT_SECRET || 'change-this-secret';
const adminUser = process.env.ADMIN_USER || 'H@mza';
const adminPassword = process.env.ADMIN_PASSWORD || 'Chn!d3r';
const corsOrigin = process.env.CORS_ORIGIN || '*';

const dataDir = path.resolve('data');
const uploadsDir = path.resolve('uploads');
const configPath = path.join(dataDir, 'config.json');

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

app.listen(port, () => {
  console.log(`LTM Admin API running on http://localhost:${port}`);
});
