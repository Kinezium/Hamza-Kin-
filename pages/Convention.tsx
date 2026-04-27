import React from 'react';
import { Link } from 'react-router-dom';
import {
  ADDRESS,
  GOOGLE_MAPS_CENTER_URL,
  LOGO_TEXT_URL,
  PHONE_NUMBER,
  WHATSAPP_NUMBER
} from '../constants';
import SEOHead from '../components/SEOHead';
import { Language } from '../types';
import { Building2, CheckCircle2, FileText, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { getManagedSeo, useAdminConfig } from '../src/adminConfig';

interface ConventionProps {
  lang: Language;
}

const Convention: React.FC<ConventionProps> = ({ lang }) => {
  const prefix = lang === 'ar' ? '/ar' : '';
  const config = useAdminConfig();
  const content = lang === 'fr'
    ? {
        title: 'Convention assurance et mutuelle avec Centre Chnider',
        description:
          'Page dédiée aux compagnies d’assurance, mutuelles et organismes souhaitant mettre en place une convention avec notre centre de kinésithérapie à Casablanca.',
        keywords:
          'convention assurance kinésithérapie, convention mutuelle kiné Casablanca, partenariat assurance centre kiné, CNSS CNOPS kinésithérapie Casablanca, convention centre de kinésithérapie, الترويض الطبي, الدار البيضاء',
        heroEyebrow: 'Espace convention',
        heroTitle: 'Demande de convention pour assurances, mutuelles et organismes partenaires',
        heroText:
          'Le Centre Chnider étudie les demandes de convention pour la prise en charge de la kinésithérapie, de la rééducation fonctionnelle et des soins à domicile à Casablanca.',
        heroBadge: 'Centre de kinésithérapie à Casablanca',
        primaryCta: 'Échanger sur WhatsApp',
        secondaryCta: 'Voir la localisation du centre',
        introTitle: 'Une collaboration structurée, rapide à déployer',
        introText:
          'Nous accompagnons les assureurs et mutuelles qui souhaitent orienter leurs assurés vers un centre sérieux, identifiable localement et capable d’assurer un suivi clair des dossiers.',
        highlights: [
          'Prise en charge au cabinet et à domicile selon le profil du patient',
          'Documents administratifs remis pour CNSS, CNOPS et assurances privées',
          'Organisation des rendez-vous et suivi patient centralisés',
          'Centre implanté à Sbata, Casablanca, facilement accessible'
        ],
        strengthsTitle: 'Pourquoi conventionner avec notre centre',
        strengths: [
          {
            title: 'Couverture des besoins courants',
            text: 'Rééducation fonctionnelle, traumatologie, douleurs du rachis, réadaptation post-opératoire, prise en charge à domicile et accompagnement de différentes tranches d’âge.'
          },
          {
            title: 'Cadre administratif clair',
            text: 'Factures, feuilles de soins et éléments de suivi sont préparés avec une logique de dossier exploitable pour vos processus internes.'
          },
          {
            title: 'Accessibilité terrain',
            text: 'Le centre est situé à Casablanca et sert également plusieurs quartiers proches pour faciliter l’orientation de vos assurés.'
          }
        ],
        processTitle: 'Informations utiles pour une étude de convention',
        process: [
          'Présentation du centre et de ses domaines de prise en charge',
          'Coordonnées du centre et localisation Google Maps',
          'Modalités de facturation et de remise des documents administratifs',
          'Canal direct pour organiser un échange rapide avec notre équipe'
        ],
        contactTitle: 'Coordonnées du centre',
        contactText:
          'Pour initier une demande de convention, vous pouvez nous contacter directement. Nous partagerons les éléments nécessaires pour l’étude du partenariat.',
        callLabel: 'Appeler le centre',
        mapLabel: 'Ouvrir Google Maps',
        footerText: 'Cette page est destinée à l’indexation et aux prises de contact professionnelles. Elle n’est pas affichée dans la navigation principale du site.',
        siteLinkLabel: 'Retour au site principal'
      }
    : {
        title: 'اتفاقية مع شركات التأمين والتعاضديات مع مركز شنيدر',
        description:
          'صفحة مخصصة لشركات التأمين والتعاضديات والهيئات الراغبة في إبرام اتفاقية مع مركزنا للترويض الطبي بالدار البيضاء.',
        keywords:
          'اتفاقية تأمين ترويض طبي, اتفاقية تعاضدية مع مركز ترويض, شراكة تأمين مع مركز شنيدر, الترويض الطبي الدار البيضاء, CNSS CNOPS, kinésithérapie casablanca, centre chnider',
        heroEyebrow: 'فضاء الاتفاقيات',
        heroTitle: 'طلب اتفاقية مع شركات التأمين والتعاضديات والهيئات الشريكة',
        heroText:
          'يدرس مركز شنيدر طلبات الاتفاقيات الخاصة بالترويض الطبي وإعادة التأهيل الوظيفي والعلاج المنزلي بالدار البيضاء.',
        heroBadge: 'مركز ترويض طبي بالدار البيضاء',
        primaryCta: 'التواصل عبر واتساب',
        secondaryCta: 'عرض موقع المركز',
        introTitle: 'شراكة مهنية واضحة وسريعة التنفيذ',
        introText:
          'نواكب شركات التأمين والتعاضديات التي ترغب في توجيه منخرطيها نحو مركز مهني، واضح التموقع، وقادر على تتبع الملفات بطريقة منظمة.',
        highlights: [
          'التكفل بالحالات داخل المركز أو في المنزل حسب وضعية المريض',
          'تسليم الوثائق الإدارية الخاصة بـ CNSS وCNOPS والتأمينات الخاصة',
          'تنظيم المواعيد وتتبع الملفات بشكل مركزي',
          'مركز متواجد بسباتة، الدار البيضاء، مع سهولة الولوج'
        ],
        strengthsTitle: 'لماذا التعاقد مع مركزنا',
        strengths: [
          {
            title: 'تغطية احتياجات علاجية متعددة',
            text: 'إعادة التأهيل الوظيفي، الإصابات، آلام الظهر والرقبة، ما بعد الجراحة، العلاج المنزلي، ومواكبة فئات عمرية مختلفة.'
          },
          {
            title: 'إطار إداري منظم',
            text: 'الفواتير وأوراق العلاج وعناصر المتابعة يتم إعدادها بشكل يسهل معالجتها داخل مساطر مؤسستكم.'
          },
          {
            title: 'قرب جغرافي وخدمة ميدانية',
            text: 'المركز يوجد بالدار البيضاء ويغطي أيضا أحياء مجاورة لتسهيل توجيه المؤمن لهم.'
          }
        ],
        processTitle: 'المعطيات المتاحة لدراسة الاتفاقية',
        process: [
          'تقديم المركز ومجالات التكفل العلاجي',
          'بيانات التواصل مع المركز ورابط الموقع على Google Maps',
          'كيفية الفوترة وتسليم الوثائق الإدارية',
          'قناة مباشرة لترتيب تواصل سريع مع فريق المركز'
        ],
        contactTitle: 'معلومات التواصل',
        contactText:
          'لبدء طلب اتفاقية، يمكنكم التواصل معنا مباشرة وسنشارك معكم العناصر الأساسية اللازمة لدراسة الشراكة.',
        callLabel: 'الاتصال بالمركز',
        mapLabel: 'فتح Google Maps',
        footerText: 'هذه الصفحة مخصصة للفهرسة وللتواصل المهني، وهي غير ظاهرة ضمن التنقل الرئيسي للموقع.',
        siteLinkLabel: 'العودة إلى الموقع الرئيسي'
      };

  const whatsappMessage = lang === 'fr'
    ? 'Bonjour Centre Chnider, nous souhaitons échanger au sujet d\'une convention avec votre centre de kinesitherapie.'
    : 'السلام عليكم مركز شنيدر، نرغب في مناقشة اتفاقية شراكة مع مركزكم للترويض الطبي.';
  const whatsappHref = `https://wa.me/${config.contact.whatsappNumber || WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
  const seo = getManagedSeo(config, 'convention', lang, {
    title: content.title,
    description: content.description,
    keywords: content.keywords
  });

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} keywords={seo.keywords} />

      <div className="bg-[radial-gradient(circle_at_top_left,_rgba(14,116,144,0.18),_transparent_35%),linear-gradient(135deg,#eff6ff_0%,#ffffff_45%,#ecfeff_100%)]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <span className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-800 shadow-sm">
                  {content.heroEyebrow}
                </span>
                <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                  {content.heroTitle}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                  {content.heroText}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-bold text-white shadow-lg shadow-green-200 transition hover:bg-green-700"
                  >
                    <MessageCircle size={18} />
                    {content.primaryCta}
                  </a>
                  <a
                    href={config.contact.mapsLink || GOOGLE_MAPS_CENTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-6 py-3 font-bold text-sky-900 transition hover:border-sky-300 hover:bg-sky-50"
                  >
                    <MapPin size={18} />
                    {content.secondaryCta}
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
                  <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">{content.heroBadge}</span>
                  <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">CNSS • CNOPS • Assurances</span>
                </div>
              </div>

              <div className="rounded-[2rem] border border-sky-100 bg-white p-8 shadow-2xl shadow-sky-100/70">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 ring-1 ring-sky-100">
                    <img src={LOGO_TEXT_URL} alt="Centre Chnider" className="h-12 w-12 object-contain" loading="lazy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Centre Chnider</p>
                    <p className="text-xl font-bold text-slate-900">Convention & partenariat</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="mt-1 text-sky-700" size={20} />
                      <div>
                        <p className="font-bold text-slate-900">{content.introTitle}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{content.introText}</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-sky-950 p-5 text-white">
                    <p className="text-sm uppercase tracking-[0.18em] text-sky-200">{content.contactTitle}</p>
                    <div className="mt-4 space-y-3 text-sm">
                      <a href={`tel:${config.contact.phone || PHONE_NUMBER}`} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 hover:bg-white/15">
                        <Phone size={17} />
                        <span dir="ltr">{config.contact.phone || PHONE_NUMBER}</span>
                      </a>
                      <a href={config.contact.mapsLink || GOOGLE_MAPS_CENTER_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3 hover:bg-white/15">
                        <MapPin size={17} className="mt-0.5 shrink-0" />
                        <span>{config.contact.address || ADDRESS}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {content.highlights.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <CheckCircle2 className="text-green-600" size={22} />
                  <p className="mt-4 text-base font-semibold leading-7 text-slate-800">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <div className="flex items-center gap-3">
                  <Building2 className="text-sky-700" size={22} />
                  <h2 className="text-2xl font-black text-slate-950 md:text-3xl">{content.strengthsTitle}</h2>
                </div>
                <div className="mt-8 space-y-6">
                  {content.strengths.map((item) => (
                    <article key={item.title} className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-100">
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] bg-gradient-to-br from-sky-900 via-cyan-900 to-slate-950 p-8 text-white shadow-xl md:p-10">
                <div className="flex items-center gap-3">
                  <FileText className="text-cyan-200" size={22} />
                  <h2 className="text-2xl font-black md:text-3xl">{content.processTitle}</h2>
                </div>
                <div className="mt-8 space-y-4">
                  {content.process.map((item, index) => (
                    <div key={item} className="flex gap-4 rounded-3xl bg-white/10 p-5 backdrop-blur-sm">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sky-900 font-black">
                        {index + 1}
                      </div>
                      <p className="leading-7 text-sky-50">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="mt-16 rounded-[2rem] border border-sky-100 bg-white p-8 shadow-xl shadow-sky-100/60 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="text-2xl font-black text-slate-950 md:text-3xl">{content.contactTitle}</h2>
                  <p className="mt-4 max-w-3xl leading-7 text-slate-700">{content.contactText}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 font-bold text-slate-900 hover:bg-slate-50"
                  >
                    <Phone size={18} />
                    {content.callLabel}
                  </a>
                  <a
                    href={GOOGLE_MAPS_CENTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-sky-200 px-5 py-3 font-bold text-sky-900 hover:bg-sky-50"
                  >
                    <MapPin size={18} />
                    {content.mapLabel}
                  </a>
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-slate-50 p-6 text-sm leading-7 text-slate-600">
                <p>{content.footerText}</p>
                <Link to={prefix || '/'} className="mt-4 inline-flex font-bold text-sky-800 hover:underline">
                  {content.siteLinkLabel}
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Convention;