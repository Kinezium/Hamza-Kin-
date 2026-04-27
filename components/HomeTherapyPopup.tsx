import React, { useEffect, useMemo, useState } from 'react';
import { Home, MessageCircle, Phone, Send, X } from 'lucide-react';
import { Language } from '../types';
import { makeWhatsAppLink, useAdminConfig } from '../src/adminConfig';

interface HomeTherapyPopupProps {
  lang: Language;
}

const DISMISS_KEY = 'chnider-home-therapy-popup-dismissed-at';
const SUBMIT_KEY = 'chnider-home-therapy-popup-submitted-at';
const REAPPEAR_DELAY_MS = 24 * 60 * 60 * 1000;
const apiBase = ((import.meta as any).env?.VITE_ADMIN_API_URL || '').toString().replace(/\/$/, '');

const HomeTherapyPopup: React.FC<HomeTherapyPopupProps> = ({ lang }) => {
  const config = useAdminConfig();
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<'success' | 'error' | null>(null);

  const t = useMemo(
    () => lang === 'fr'
      ? {
          badge: 'Kiné à domicile',
          title: 'Besoin d’une séance de kinésithérapie à domicile ?',
          text: 'Laissez votre numéro et nous vous recontactons rapidement. Vous pouvez aussi nous écrire directement sur WhatsApp.',
          inputLabel: 'Votre numéro de téléphone',
          inputPlaceholder: 'Ex: 06 12 34 56 78',
          submit: 'Envoyer mon numéro',
          whatsapp: 'Nous contacter sur WhatsApp',
          close: 'Fermer',
          success: 'Merci. Votre demande a bien été envoyée.',
          invalid: 'Veuillez saisir un numéro de téléphone valide.',
          error: 'Envoi impossible pour le moment. Un e-mail prérempli va s’ouvrir.',
          legal: 'En envoyant votre numéro, vous acceptez d’être rappelé pour une demande de kinésithérapie à domicile.'
        }
      : {
          badge: 'ترويض منزلي',
          title: 'هل تحتاجون إلى حصص ترويض طبي في المنزل؟',
          text: 'اتركوا رقم الهاتف وسنتواصل معكم بسرعة. ويمكنكم أيضا مراسلتنا مباشرة عبر واتساب.',
          inputLabel: 'رقم الهاتف',
          inputPlaceholder: 'مثال: 06 12 34 56 78',
          submit: 'إرسال الرقم',
          whatsapp: 'التواصل عبر واتساب',
          close: 'إغلاق',
          success: 'شكرا لكم. تم إرسال طلبكم بنجاح.',
          invalid: 'يرجى إدخال رقم هاتف صحيح.',
          error: 'تعذر الإرسال حاليا. سيتم فتح رسالة بريد جاهزة.',
          legal: 'بإرسال رقمكم، أنتم توافقون على أن نتواصل معكم بخصوص طلب الترويض الطبي في المنزل.'
        },
    [lang]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const now = Date.now();
    const lastDismissed = Number(window.localStorage.getItem(DISMISS_KEY) || '0');
    const lastSubmitted = Number(window.localStorage.getItem(SUBMIT_KEY) || '0');

    if (now - lastDismissed < REAPPEAR_DELAY_MS || now - lastSubmitted < REAPPEAR_DELAY_MS) {
      return;
    }

    const delay = 10000 + Math.floor(Math.random() * 5000);
    const timer = window.setTimeout(() => setIsOpen(true), delay);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const remember = (key: string) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, Date.now().toString());
    }
  };

  const closePopup = () => {
    remember(DISMISS_KEY);
    setIsOpen(false);
  };

  const isValidPhone = (value: string) => {
    const normalized = value.replace(/[^\d+]/g, '');
    return normalized.length >= 9;
  };

  const openMailFallback = () => {
    const subject = lang === 'fr'
      ? 'Lead kinésithérapie à domicile'
      : 'طلب ترويض طبي منزلي';
    const body = lang === 'fr'
      ? `Bonjour,%0D%0A%0D%0AUn visiteur a laissé ce numéro pour la kinésithérapie à domicile : ${encodeURIComponent(phone)}%0D%0AURL : ${encodeURIComponent(window.location.href)}`
      : `السلام عليكم،%0D%0A%0D%0Aقام أحد الزوار بترك هذا الرقم لطلب الترويض الطبي في المنزل: ${encodeURIComponent(phone)}%0D%0Aالرابط: ${encodeURIComponent(window.location.href)}`;
    window.location.href = `mailto:hamza.chnider@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const submitLead = async () => {
    if (!isValidPhone(phone)) {
      setFeedbackType('error');
      setFeedback(t.invalid);
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);
    setFeedbackType(null);

    try {
      const response = await fetch(`${apiBase}/api/leads/home-therapy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone,
          lang,
          pageUrl: window.location.href,
          pageTitle: document.title,
          source: 'timed-popup'
        })
      });

      if (!response.ok) {
        throw new Error('Lead request failed');
      }

      remember(SUBMIT_KEY);
      setFeedbackType('success');
      setFeedback(t.success);
      setPhone('');
      window.setTimeout(() => setIsOpen(false), 1800);
    } catch {
      setFeedbackType('error');
      setFeedback(t.error);
      openMailFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/55 p-4 sm:items-center">
      <div
        className={`relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl ${lang === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        role="dialog"
        aria-modal="true"
        aria-labelledby="home-therapy-popup-title"
      >
        <button
          type="button"
          onClick={closePopup}
          className="absolute end-4 top-4 rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200"
          aria-label={t.close}
        >
          <X size={18} />
        </button>

        <div className="bg-gradient-to-br from-sky-700 via-cyan-700 to-emerald-600 px-6 pb-8 pt-7 text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">
            <Home size={16} />
            <span>{t.badge}</span>
          </div>
          <h2 id="home-therapy-popup-title" className="max-w-md text-2xl font-bold leading-tight">
            {t.title}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-cyan-50">
            {t.text}
          </p>
        </div>

        <div className="space-y-4 px-6 py-6">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-800">{t.inputLabel}</span>
            <div className="relative">
              <Phone size={18} className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder={t.inputPlaceholder}
                className="w-full rounded-2xl border border-slate-200 px-12 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </div>
          </label>

          {feedback && (
            <p className={`rounded-2xl px-4 py-3 text-sm ${feedbackType === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
              {feedback}
            </p>
          )}

          <button
            type="button"
            onClick={submitLead}
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-700 px-4 py-3 font-semibold text-white transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send size={18} />
            <span>{isSubmitting ? '...' : t.submit}</span>
          </button>

          <a
            href={makeWhatsAppLink(lang, config.contact.whatsappNumber, 'Popup kiné à domicile')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-100"
          >
            <MessageCircle size={18} />
            <span>{t.whatsapp}</span>
          </a>

          <p className="text-xs leading-5 text-slate-500">{t.legal}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeTherapyPopup;