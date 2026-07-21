import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Building2, Globe2, MapPin, MessageCircle, PhoneCall, Search, Sparkles, Target } from 'lucide-react';
import { Language } from '../types';
import SEOHead from '../components/SEOHead';
import { makeWhatsAppLink, useAdminConfig } from '../src/adminConfig';

interface PartnerDirectoryLandingProps {
  lang: Language;
}

const MAJOR_CITIES = [
  'Casablanca',
  'Rabat',
  'Sale',
  'Marrakech',
  'Fes',
  'Tanger',
  'Agadir',
  'Meknes',
  'Oujda',
  'Kenitra',
  'Tetouan',
  'El Jadida',
  'Nador'
];

const SMALL_CITIES = [
  'Settat',
  'Berrechid',
  'Benslimane',
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
  'Ifrane',
  'Azrou',
  'Chefchaouen',
  'Tinghir',
  'Guelmim',
  'Dakhla'
];

const PartnerDirectoryLanding: React.FC<PartnerDirectoryLandingProps> = ({ lang }) => {
  const prefix = lang === 'ar' ? '/ar' : '';
  const config = useAdminConfig();

  const t = lang === 'fr'
    ? {
        title: 'Rejoignez-nous: reservez votre place et devenez visible dans votre quartier',
        subtitle: 'Une landing annuaire sante orientee resultats: plus de messages WhatsApp, plus d appels cibles, et une visibilite locale qui travaille pour votre etablissement 24/7.',
        ctaPrimary: 'Reserver mon espace maintenant',
        ctaSecondary: 'Parler a un conseiller',
        trust: 'Prix imbattable. Meilleur rapport qualite/prix.',
        sectionValueTitle: 'Pourquoi cet annuaire est strategique pour votre etablissement',
        sectionValueText: 'Le referencement local est devenu un chiffre cle dans la croissance des structures de sante. Quand un patient cherche un praticien dans sa ville ou son quartier, votre presence dans un annuaire local structure augmente fortement vos chances d etre contacte.',
        cards: [
          {
            title: 'Clients ultra cibles',
            text: 'Des patients qui cherchent deja votre specialite dans votre zone geographique.',
            icon: Target
          },
          {
            title: 'Trafic local SEO',
            text: 'Chaque fiche optimisee renforce votre presence sur les recherches locales et Google Maps.',
            icon: Search
          },
          {
            title: 'Conversion directe',
            text: 'Les prospects sont rediriges vers votre telephone et votre WhatsApp sans friction.',
            icon: PhoneCall
          }
        ],
        pricingTitle: 'Tarifs annuaire 2026',
        howTitle: 'Comment ca marche',
        howSteps: [
          'Vous remplissez vos infos: specialite, ville, quartier, services, horaires, localisation.',
          'Nous validons et placons votre fiche dans la bonne categorie de votre ville.',
          'Les clients interesses par vos services vous contactent directement via appel et WhatsApp.'
        ],
        reserveTitle: 'Reserver votre espace',
        reserveText: 'Votre fiche inclut la localisation, vos coordonnees, vos services, votre logo et vos photos. L objectif: transformer la visibilite locale en demandes concretes.',
        majorCitiesTitle: 'Grandes villes couvertes',
        smallCitiesTitle: 'Villes marocaines ajoutees (petites et moyennes)',
        pricingMedical: 'Medecins, cliniques, laboratoires, radiologie: 700 DH',
        pricingMedicalExclusive: 'Option exclusivite quartier (seul de votre quartier): 1500 DH',
        pricingParamed: 'Kine, orthophonie, psychomotricite (paramedical): 500 DH',
        pricingParamedExclusive: 'Option exclusivite quartier (seul de votre quartier): 800 DH',
        finalCtaTitle: 'Inscrivez-vous maintenant et commencez a recevoir des clients cibles de votre region',
        finalCtaText: 'La page d inscription est prete. Votre demande est envoyee par e-mail pour traitement rapide.',
        finalCtaButton: 'Aller au formulaire d inscription'
      }
    : {
        title: 'انضموا الينا: احجزوا مكانكم وكونوا ظاهرين في حيكم',
        subtitle: 'صفحة دليل صحي موجهة للنتائج: رسائل واتساب اكثر، مكالمات اكثر، وظهور محلي قوي لمؤسستكم.',
        ctaPrimary: 'احجز مساحتي الان',
        ctaSecondary: 'تحدث مع مستشار',
        trust: 'سعر لا يقارن. افضل قيمة مقابل السعر.',
        sectionValueTitle: 'لماذا هذا الدليل مهم لمؤسستكم',
        sectionValueText: 'التموقع المحلي اصبح رقما حاسما في نمو مؤسسات الصحة. عندما يبحث المريض عن متخصص في مدينته او حيه، وجودكم في دليل محلي منظم يرفع فرص التواصل بشكل واضح.',
        cards: [
          {
            title: 'عملاء مستهدفون جدا',
            text: 'مرضى يبحثون بالفعل عن تخصصكم داخل منطقتكم.',
            icon: Target
          },
          {
            title: 'قوة في SEO المحلي',
            text: 'كل صفحة مهيكلة تقوي ظهوركم في البحث المحلي وخرائط غوغل.',
            icon: Search
          },
          {
            title: 'تواصل مباشر',
            text: 'المهتمون بخدماتكم يتواصلون مباشرة عبر الهاتف وواتساب.',
            icon: PhoneCall
          }
        ],
        pricingTitle: 'اسعار الدليل 2026',
        howTitle: 'كيف يعمل',
        howSteps: [
          'تملؤون معلوماتكم: التخصص، المدينة، الحي، الخدمات، التوقيت، الموقع.',
          'نقوم بالمراجعة ووضع الصفحة في التصنيف الصحيح داخل مدينتكم.',
          'العملاء المهتمون بخدماتكم يتصلون بكم مباشرة عبر الهاتف وواتساب.'
        ],
        reserveTitle: 'احجزوا فضاءكم',
        reserveText: 'صفحتكم تتضمن الموقع، معلومات التواصل، الخدمات، الشعار والصور. الهدف: تحويل الظهور المحلي الى طلبات فعلية.',
        majorCitiesTitle: 'المدن الكبرى المغطاة',
        smallCitiesTitle: 'مدن مغربية مضافة (صغيرة ومتوسطة)',
        pricingMedical: 'اطباء، مصحات، مختبرات، اشعة: 700 درهم',
        pricingMedicalExclusive: 'خيار الحصرية في الحي (الوحيد في الحي): 1500 درهم',
        pricingParamed: 'كينيزيثيرابي، ارطوفونيا، بسيخوموتريسيتي (شبه طبي): 500 درهم',
        pricingParamedExclusive: 'خيار الحصرية في الحي (الوحيد في الحي): 800 درهم',
        finalCtaTitle: 'سجلوا الان وابدؤوا في استقبال عملاء مستهدفين من منطقتكم',
        finalCtaText: 'صفحة التسجيل جاهزة. يتم ارسال طلبكم عبر البريد للمعالجة السريعة.',
        finalCtaButton: 'الذهاب لاستمارة التسجيل'
      };

  return (
    <>
      <SEOHead
        title={lang === 'fr' ? 'Annuaire Sante Maroc | Rejoignez-nous pour etre visible localement' : 'دليل صحي المغرب | انضموا لظهور محلي اقوى'}
        description={lang === 'fr'
          ? 'Landing page annuaire pour professionnels et etablissements de sante au Maroc: visibilite locale, appels cibles, messages WhatsApp et ROI concret.'
          : 'صفحة دليل للصحة بالمغرب: ظهور محلي، مكالمات مستهدفة، رسائل واتساب ونمو فعلي.'}
        keywords={lang === 'fr'
          ? 'annuaire sante maroc, referencement local clinique, inscription medecin quartier, annuaire paramedical maroc, visibilite locale etablissement sante'
          : 'دليل صحي المغرب, تسجيل طبيب في الدليل, ظهور محلي للمصحات, سيو محلي للصحة'}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.35),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(34,197,94,0.28),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.22),transparent_40%)]" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              <Sparkles size={16} /> {t.trust}
            </span>
            <h1 className="mt-6 text-3xl md:text-5xl font-black leading-tight">{t.title}</h1>
            <p className="mt-6 text-lg text-slate-200 max-w-3xl">{t.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={`${prefix}/inscription-annuaire`}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-bold text-slate-900 hover:bg-emerald-300 transition"
              >
                {t.ctaPrimary} <ArrowRight size={18} />
              </Link>
              <a
                href={makeWhatsAppLink(lang, config.contact.whatsappNumber, 'Annuaire partenaire')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/15 transition"
              >
                <MessageCircle size={18} /> {t.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-slate-900">{t.sectionValueTitle}</h2>
        <p className="mt-4 max-w-4xl text-slate-700 leading-relaxed">{t.sectionValueText}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {t.cards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-slate-600">{card.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900">{t.pricingTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 text-sky-700 font-semibold">
                <Building2 size={18} /> Medical
              </div>
              <p className="mt-3 text-slate-800 font-semibold">{t.pricingMedical}</p>
              <p className="mt-1 text-slate-600">{t.pricingMedicalExclusive}</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold">
                <BadgeCheck size={18} /> Paramedical
              </div>
              <p className="mt-3 text-slate-800 font-semibold">{t.pricingParamed}</p>
              <p className="mt-1 text-slate-600">{t.pricingParamedExclusive}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-slate-900">{t.howTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {t.howSteps.map((step, idx) => (
            <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white font-bold">{idx + 1}</span>
              <p className="mt-4 text-slate-700 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900">{t.reserveTitle}</h2>
          <p className="mt-3 max-w-4xl text-slate-700">{t.reserveText}</p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 inline-flex items-center gap-2">
                <Globe2 size={20} className="text-sky-700" /> {t.majorCitiesTitle}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {MAJOR_CITIES.map((city) => (
                  <span key={city} className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-sky-800">{city}</span>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 inline-flex items-center gap-2">
                <MapPin size={20} className="text-emerald-700" /> {t.smallCitiesTitle}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {SMALL_CITIES.map((city) => (
                  <span key={city} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-800">{city}</span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white md:p-10">
          <h2 className="text-2xl md:text-3xl font-black">{t.finalCtaTitle}</h2>
          <p className="mt-3 text-slate-200">{t.finalCtaText}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={`${prefix}/inscription-annuaire`}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-bold text-slate-900 hover:bg-emerald-300 transition"
            >
              {t.finalCtaButton} <ArrowRight size={18} />
            </Link>
            <a
              href={makeWhatsAppLink(lang, config.contact.whatsappNumber, 'Demande annuaire partenaire')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold hover:bg-white/15 transition"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerDirectoryLanding;
