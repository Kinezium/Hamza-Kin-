import React, { useMemo, useState } from 'react';
import { Language } from '../types';

interface ProviderIntakeProps {
  lang: Language;
}

const apiBase = ((import.meta as any).env?.VITE_ADMIN_API_URL || '').toString().replace(/\/$/, '');
const PASSWORD_HELP_WHATSAPP = '212665646754';

const formatDatePassword = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const ProviderIntake: React.FC<ProviderIntakeProps> = ({ lang }) => {
  const expectedPassword = useMemo(() => formatDatePassword(new Date()), []);
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const [form, setForm] = useState({
    ownerName: '',
    centerName: '',
    profileType: 'center',
    specialty: 'kinesitherapie',
    city: '',
    district: '',
    phone: '',
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
        fail: 'Envoi impossible pour le moment.'
      }
    : {
        passwordLabel: 'كلمة المرور',
        unlock: 'فتح الاستمارة',
        noPassword: 'ليس لديك كلمة المرور؟',
        badPassword: 'كلمة المرور غير صحيحة.',
        submit: 'ارسال الملف',
        sending: 'جار الارسال...',
        ok: 'شكرا، تم ارسال الملف الى فريق Clinaxis.',
        fail: 'تعذر الارسال حاليا.'
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

    try {
      const response = await fetch(`${apiBase}/api/leads/provider-profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          lang,
          pageUrl: window.location.href,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Provider lead failed');
      }

      setFeedback(t.ok);
      setForm({
        ownerName: '',
        centerName: '',
        profileType: 'center',
        specialty: 'kinesitherapie',
        city: '',
        district: '',
        phone: '',
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
              {lang === 'fr' ? 'Specialite' : 'التخصص'}
              <input required value={form.specialty} onChange={(event) => onChange('specialty', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              {lang === 'fr' ? 'Ville' : 'المدينة'}
              <input required value={form.city} onChange={(event) => onChange('city', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              {lang === 'fr' ? 'Quartier' : 'الحي'}
              <input required value={form.district} onChange={(event) => onChange('district', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              {lang === 'fr' ? 'Telephone' : 'الهاتف'}
              <input required value={form.phone} onChange={(event) => onChange('phone', event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
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
              {lang === 'fr' ? 'Liens galerie (6 photos, separes par virgule)' : 'روابط المعرض (6 صور مفصولة بفاصلة)'}
              <textarea value={form.galleryUrls} onChange={(event) => onChange('galleryUrls', event.target.value)} rows={2} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
            </label>

            <div className="md:col-span-2 flex items-center justify-between gap-3">
              <button type="submit" disabled={isSubmitting} className="rounded-xl bg-emerald-600 px-5 py-2.5 font-semibold text-white hover:bg-emerald-700 transition disabled:opacity-60">
                {isSubmitting ? t.sending : t.submit}
              </button>
            </div>
          </form>
        )}

        {feedback && (
          <p className="mt-4 rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-700">{feedback}</p>
        )}
      </div>
    </div>
  );
};

export default ProviderIntake;
