import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';

interface ProviderIntakeProps {
  lang: Language;
  requirePassword?: boolean;
}

const apiBase = ((import.meta as any).env?.VITE_ADMIN_API_URL || '').toString().replace(/\/$/, '');
const PASSWORD_HELP_WHATSAPP = '212665646754';

type ProfessionGroup = 'medical' | 'paramedical';
type VisibilityOption = 'standard' | 'exclusive';

const PRICE_TABLE: Record<ProfessionGroup, Record<VisibilityOption, number>> = {
  medical: {
    standard: 700,
    exclusive: 1500
  },
  paramedical: {
    standard: 500,
    exclusive: 800
  }
};

const CITY_DISTRICTS: Record<string, string[]> = {
  Casablanca: [
    'Sbata',
    'Ain Chock',
    'Sidi Othmane',
    'Maarif',
    'Hay Hassani',
    'Anfa',
    'Oasis',
    'Californie',
    'Sidi Maarouf',
    'Ain Sebaa',
    'Hay Mohammadi',
    'Bourgogne',
    'Mers Sultan',
    'Derb Sultan'
  ],
  Rabat: ['Agdal', 'Hay Riad', 'Yacoub El Mansour', 'Akkari', 'Ocean', 'Souissi', 'Temara'],
  Sale: ['Tabriquet', 'Bettana', 'Hay Salam', 'Sidi Moussa', 'Laayayda'],
  Marrakech: ['Guelliz', 'Hivernage', 'Sidi Youssef Ben Ali', 'Daoudiate', 'Massira', 'Targa'],
  Fes: ['Agdal', 'Narjiss', 'Saiss', 'Bensouda', 'Zouagha'],
  Tanger: ['Malabata', 'Iberia', 'Marshan', 'Branes', 'Beni Makada'],
  Agadir: ['Talborjt', 'Dakhla', 'Hay Mohammadi', 'Founty', 'Bensergao'],
  Meknes: ['Hamria', 'Bassatine', 'Sidi Baba', 'Marjane'],
  Oujda: ['Hay Al Qods', 'Hay Al Massira', 'Lazaret', 'Sidi Yahya'],
  Kenitra: ['Mimosas', 'Ville Haute', 'Saknia', 'Val Fleuri'],
  Tetouan: ['Martil', 'Mdiq', 'Avenue Mohammed V', 'El Ensanche'],
  El Jadida: ['Centre', 'Sidi Moussa', 'Hay Salam', 'Hay Hassani'],
  Nador: ['Centre', 'Hay Al Matar', 'Beni Ansar', 'Selouane']
};

const ADDITIONAL_CITIES = [
  'Benslimane',
  'Settat',
  'Berrechid',
  'Safi',
  'Essaouira',
  'Khouribga',
  'Beni Mellal',
  'Taza',
  'Sefrou',
  'Larache',
  'Ksar El Kebir',
  'Taroudant',
  'Ouarzazate',
  'Errachidia',
  'Dakhla',
  'Ifrane',
  'Azrou',
  'Chefchaouen',
  'Tinghir',
  'Guelmim'
];

const ALL_CITIES = Array.from(new Set([...Object.keys(CITY_DISTRICTS), ...ADDITIONAL_CITIES])).sort((a, b) => a.localeCompare(b));

const formatDatePassword = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const ProviderIntake: React.FC<ProviderIntakeProps> = ({ lang, requirePassword = true }) => {
  const expectedPassword = useMemo(() => formatDatePassword(new Date()), []);
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(!requirePassword);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const [form, setForm] = useState({
    ownerName: '',
    centerName: '',
    profileType: 'center',
    professionGroup: 'medical' as ProfessionGroup,
    visibilityOption: 'standard' as VisibilityOption,
    specialty: 'kinesitherapie',
    city: '',
    district: '',
    phone: '',
    whatsappUrl: '',
    email: '',
    hours: '',
    services: '',
    description: '',
    address: '',
    mapUrl: '',
    logoUrl: '',
    galleryUrls: ''
  });

  const t = lang === 'fr'
    ? {
        passwordLabel: 'Mot de passe',
        unlock: 'Debloquer le formulaire',
        noPassword: 'Vous n avez pas le mot de passe ?'
        ,
        badPassword: 'Mot de passe incorrect.',
        submit: 'Envoyer le profil',
        sending: 'Envoi en cours...',
        ok: 'Merci, le profil a ete envoye a l equipe Clinaxis.',
        fail: 'Envoi impossible pour le moment.',
        invalidGallery: 'Veuillez ajouter au maximum 4 liens photo dans la galerie.',
        pricingTitle: 'Tarifs inscription annuaire',
        pricingMedical: 'Medecins, cliniques, laboratoires, radiologie: 700 DH',
        pricingMedicalExclusive: 'Option exclusivite quartier (seul de votre quartier): 1500 DH',
        pricingParamed: 'Kine, orthophonie, psychomotricite (paramedical): 500 DH',
        pricingParamedExclusive: 'Option exclusivite quartier (seul de votre quartier): 800 DH',
        estimatedPrice: 'Tarif estime',
        generatedPrompt: 'Prompt pret a copier',
        copyHint: 'Copiez ce bloc et collez-le directement pour ajouter ce client dans l annuaire.',
        cityHint: 'Villes principales + petites villes du Maroc disponibles.',
        districtHint: 'Choisissez ou saisissez le quartier cible.',
        viewPartnerBenefits: 'Voir tous les avantages partenaires'
      }
    : {
        passwordLabel: 'كلمة المرور',
        unlock: 'فتح الاستمارة',
        noPassword: 'ليس لديك كلمة المرور؟',
        badPassword: 'كلمة المرور غير صحيحة.',
        submit: 'ارسال الملف',
        sending: 'جار الارسال...',
        ok: 'شكرا، تم ارسال الملف الى فريق Clinaxis.',
        fail: 'تعذر الارسال حاليا.',
        invalidGallery: 'يرجى إضافة 4 روابط صور كحد أقصى في المعرض.',
        pricingTitle: 'أسعار التسجيل في الدليل',
        pricingMedical: 'أطباء، مصحات، مختبرات، أشعة: 700 درهم',
        pricingMedicalExclusive: 'خيار الحصرية في الحي (الوحيد في الحي): 1500 درهم',
        pricingParamed: 'كينيزيثيرابي، أرطوفونيا، بسيخوموتريسيتي (شبه طبي): 500 درهم',
        pricingParamedExclusive: 'خيار الحصرية في الحي (الوحيد في الحي): 800 درهم',
        estimatedPrice: 'السعر التقديري',
        generatedPrompt: 'نص جاهز للنسخ',
        copyHint: 'انسخ هذا النص والصقه مباشرة لإضافة العميل في الدليل.',
        cityHint: 'مدن كبرى + مدن صغرى مغربية متاحة.',
        districtHint: 'اختر أو اكتب الحي المستهدف.',
        viewPartnerBenefits: 'عرض جميع مزايا الشركاء'
      };

  const computedPrice = PRICE_TABLE[form.professionGroup][form.visibilityOption];
  const districtOptions = useMemo(() => CITY_DISTRICTS[form.city] || [], [form.city]);
  const benefitsPath = lang === 'ar' ? '/ar/annuaire-partenaires' : '/annuaire-partenaires';

  const buildDirectoryPrompt = () => {
    const visibilityLabel = form.visibilityOption === 'exclusive'
      ? (lang === 'fr' ? 'Exclusif quartier' : 'حصري في الحي')
      : (lang === 'fr' ? 'Standard' : 'عادي');

    return [
      '### AJOUT ANNUAIRE SANTE',
      `Nom praticien: ${form.ownerName}`,
      `Etablissement: ${form.centerName}`,
      `Type profil: ${form.profileType}`,
      `Famille profession: ${form.professionGroup}`,
      `Specialite: ${form.specialty}`,
      `Ville: ${form.city}`,
      `Quartier: ${form.district}`,
      `Offre: ${visibilityLabel}`,
      `Tarif: ${computedPrice} DH`,
      `Telephone: ${form.phone}`,
      `WhatsApp: ${form.whatsappUrl || '-'}`,
      `Email: ${form.email}`,
      `Horaires: ${form.hours}`,
      `Adresse: ${form.address}`,
      `Google Maps: ${form.mapUrl || '-'}`,
      `Services: ${form.services}`,
      `Description: ${form.description}`,
      `Logo: ${form.logoUrl || '-'}`,
      `Galerie (max 4): ${form.galleryUrls || '-'}`
    ].join('\n');
  };

  const openWhatsAppPasswordRequest = () => {
    const message = lang === 'fr'
      ? 'Bonjour, je n ai pas le mot de passe de la page praticien. Pouvez-vous me l envoyer ?'
      : 'السلام عليكم، ليس لدي كلمة مرور صفحة الممارس. هل يمكن ارسالها؟';
    window.open(`https://wa.me/${PASSWORD_HELP_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  React.useEffect(() => {
    document.title = lang === 'fr' ? 'Espace praticien prive' : 'فضاء الممارسين الخاص';

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'noindex, nofollow, noarchive, nosnippet');
  }, [lang]);

  const onUnlock = () => {
    if (password.trim() !== expectedPassword) {
      setFeedback(t.badPassword);
      return;
    }
    setFeedback(null);
    setIsUnlocked(true);
  };

  const onChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const galleryList = form.galleryUrls
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    if (galleryList.length > 4) {
      setIsSubmitting(false);
      setFeedback(t.invalidGallery);
      return;
    }

    try {
      const response = await fetch(`${apiBase}/api/leads/provider-profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          computedPrice,
          promptForDirectory: buildDirectoryPrompt(),
          lang,
          pageUrl: window.location.href,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Provider lead failed');
      }

      setFeedback(t.ok);
      setGeneratedPrompt(buildDirectoryPrompt());
      setForm({
        ownerName: '',
        centerName: '',
        profileType: 'center',
        professionGroup: 'medical',
        visibilityOption: 'standard',
        specialty: 'kinesitherapie',
        city: '',
        district: '',
        phone: '',
        whatsappUrl: '',
        email: '',
        hours: '',
        services: '',
        description: '',
        address: '',
        mapUrl: '',
        logoUrl: '',
        galleryUrls: ''
      });
    } catch {
      setFeedback(t.fail);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-14" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

        {!requirePassword && (
          <div className="mb-4">
            <Link
              to={benefitsPath}
              className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-100 transition"
            >
              {t.viewPartnerBenefits}
            </Link>
          </div>
        )}

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">{t.pricingTitle}</p>
          <ul className="mt-2 space-y-1">
            <li>• {t.pricingMedical}</li>
            <li>• {t.pricingMedicalExclusive}</li>
            <li>• {t.pricingParamed}</li>
            <li>• {t.pricingParamedExclusive}</li>
          </ul>
        </div>

        {!isUnlocked && (
          <div className="mt-6 space-y-3">
            <label className="block text-sm font-medium text-slate-700">
              {t.passwordLabel}
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
              />
            </label>
            <button type="button" onClick={onUnlock} className="rounded-xl bg-sky-700 px-4 py-2 text-white font-semibold hover:bg-sky-800 transition">
              {t.unlock}
            </button>
            <button
              type="button"
              onClick={openWhatsAppPasswordRequest}
              className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2 text-emerald-700 font-semibold hover:bg-emerald-100 transition"
            >
              {t.noPassword}
            </button>
          </div>
        )}

        {isUnlocked && (
          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="text-sm font-medium text-slate-700">
              {lang === 'fr' ? 'Nom du praticien' : 'اسم الممارس'}
              <input required value={form.ownerName} onChange={(event) => onChange('ownerName', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              {lang === 'fr' ? 'Nom du centre / cabinet' : 'اسم المركز / العيادة'}
              <input required value={form.centerName} onChange={(event) => onChange('centerName', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              {lang === 'fr' ? 'Type de profil' : 'نوع الملف'}
              <select value={form.profileType} onChange={(event) => onChange('profileType', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2">
                <option value="center">{lang === 'fr' ? 'Centre / cabinet' : 'مركز / عيادة'}</option>
                <option value="home">{lang === 'fr' ? 'Praticien a domicile' : 'ممارس منزلي'}</option>
              </select>
            </label>
            <label className="text-sm font-medium text-slate-700">
              {lang === 'fr' ? 'Famille de profession' : 'فئة المهنة'}
              <select value={form.professionGroup} onChange={(event) => onChange('professionGroup', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2">
                <option value="medical">{lang === 'fr' ? 'Medical (medecin, clinique, labo, radiologie)' : 'طبي (طبيب، مصحة، مختبر، أشعة)'}</option>
                <option value="paramedical">{lang === 'fr' ? 'Paramedical (kine, orthophonie, psychomotricite)' : 'شبه طبي (كيني، أرطوفونيا، بسيخوموتريسيتي)'}</option>
              </select>
            </label>
            <label className="text-sm font-medium text-slate-700">
              {lang === 'fr' ? 'Visibilite quartier' : 'الظهور في الحي'}
              <select value={form.visibilityOption} onChange={(event) => onChange('visibilityOption', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2">
                <option value="standard">{lang === 'fr' ? 'Standard' : 'عادي'}</option>
                <option value="exclusive">{lang === 'fr' ? 'Je veux etre le seul de mon quartier' : 'أريد أن أكون الوحيد في الحي'}</option>
              </select>
            </label>
            <label className="text-sm font-medium text-slate-700">
              {lang === 'fr' ? 'Specialite' : 'التخصص'}
              <input required value={form.specialty} onChange={(event) => onChange('specialty', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              {lang === 'fr' ? 'Ville' : 'المدينة'}
              <input
                list="provider-cities"
                required
                value={form.city}
                onChange={(event) => {
                  const nextCity = event.target.value;
                  const nextDistrictOptions = CITY_DISTRICTS[nextCity] || [];
                  const keepDistrict = nextDistrictOptions.length === 0 || nextDistrictOptions.includes(form.district);
                  setForm((prev) => ({
                    ...prev,
                    city: nextCity,
                    district: keepDistrict ? prev.district : ''
                  }));
                }}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
              />
              <datalist id="provider-cities">
                {ALL_CITIES.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
              <p className="mt-1 text-xs text-slate-500">{t.cityHint}</p>
            </label>
            <label className="text-sm font-medium text-slate-700">
              {lang === 'fr' ? 'Quartier' : 'الحي'}
              <input
                list="provider-districts"
                required
                value={form.district}
                onChange={(event) => onChange('district', event.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
              />
              <datalist id="provider-districts">
                {districtOptions.map((district) => (
                  <option key={district} value={district} />
                ))}
              </datalist>
              <p className="mt-1 text-xs text-slate-500">{t.districtHint}</p>
            </label>
            <label className="text-sm font-medium text-slate-700">
              {lang === 'fr' ? 'Telephone' : 'الهاتف'}
              <input required value={form.phone} onChange={(event) => onChange('phone', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              WhatsApp
              <input value={form.whatsappUrl} onChange={(event) => onChange('whatsappUrl', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="https://wa.me/212..." />
            </label>
            <label className="text-sm font-medium text-slate-700">
              {lang === 'fr' ? 'Email' : 'البريد الالكتروني'}
              <input type="email" required value={form.email} onChange={(event) => onChange('email', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm font-medium text-slate-700 md:col-span-2">
              {lang === 'fr' ? 'Horaires' : 'مواعيد العمل'}
              <input required value={form.hours} onChange={(event) => onChange('hours', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm font-medium text-slate-700 md:col-span-2">
              {lang === 'fr' ? 'Services (separes par virgule)' : 'الخدمات (مفصولة بفاصلة)'}
              <textarea required value={form.services} onChange={(event) => onChange('services', event.target.value)} rows={2} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm font-medium text-slate-700 md:col-span-2">
              {lang === 'fr' ? 'Description' : 'الوصف'}
              <textarea required value={form.description} onChange={(event) => onChange('description', event.target.value)} rows={3} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm font-medium text-slate-700 md:col-span-2">
              {lang === 'fr' ? 'Adresse' : 'العنوان'}
              <input required value={form.address} onChange={(event) => onChange('address', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm font-medium text-slate-700 md:col-span-2">
              {lang === 'fr' ? 'Lien de localisation (Google Maps)' : 'رابط الموقع (خرائط غوغل)'}
              <input value={form.mapUrl} onChange={(event) => onChange('mapUrl', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm font-medium text-slate-700 md:col-span-2">
              {lang === 'fr' ? 'Lien logo / photo profil' : 'رابط الشعار / صورة الملف'}
              <input value={form.logoUrl} onChange={(event) => onChange('logoUrl', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm font-medium text-slate-700 md:col-span-2">
              {lang === 'fr' ? 'Liens galerie (4 photos max, separees par virgule)' : 'روابط المعرض (4 صور كحد أقصى مفصولة بفاصلة)'}
              <textarea value={form.galleryUrls} onChange={(event) => onChange('galleryUrls', event.target.value)} rows={2} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="https://... , https://... , https://... , https://..." />
            </label>

            <div className="md:col-span-2 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-700">{t.estimatedPrice}: {computedPrice} DH</p>
              <button type="submit" disabled={isSubmitting} className="rounded-xl bg-emerald-600 px-5 py-2.5 font-semibold text-white hover:bg-emerald-700 transition disabled:opacity-60">
                {isSubmitting ? t.sending : t.submit}
              </button>
            </div>
          </form>
        )}

        {feedback && (
          <p className="mt-4 rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-700">{feedback}</p>
        )}

        {generatedPrompt && (
          <div className="mt-4 rounded-2xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">{t.generatedPrompt}</p>
            <p className="mt-1 text-xs text-sky-700">{t.copyHint}</p>
            <textarea
              readOnly
              value={generatedPrompt}
              rows={14}
              className="mt-3 w-full rounded-xl border border-sky-200 bg-white px-3 py-2 text-xs text-slate-800"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderIntake;
