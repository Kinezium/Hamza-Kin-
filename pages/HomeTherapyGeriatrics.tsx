import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, CheckCircle2, HeartHandshake, ShieldCheck, Smartphone, Timer } from 'lucide-react';
import { Language } from '../types';
import SEOHead from '../components/SEOHead';
import { getManagedSeo, makeWhatsAppLink, useAdminConfig } from '../src/adminConfig';

interface HomeTherapyGeriatricsProps {
  lang: Language;
}

type FAQItem = {
  q: string;
  a: string;
};

const HomeTherapyGeriatrics: React.FC<HomeTherapyGeriatricsProps> = ({ lang }) => {
  const config = useAdminConfig();
  const prefix = lang === 'ar' ? '/ar' : '';
  const whatsappLink = makeWhatsAppLink(lang, config.contact.whatsappNumber, lang === 'fr' ? 'Geriatrie domicile Casablanca' : 'ترويض منزلي للمسنين الدار البيضاء');

  const seo = getManagedSeo(config, 'homeTherapyGeriatrics', lang, {
    title: lang === 'fr'
      ? 'Kine a domicile Casablanca | Geriatrie & prevention chute'
      : 'ترويض منزلي بالدار البيضاء | علاج وتأهيل المسنين',
    description: lang === 'fr'
      ? 'Kine a domicile Casablanca en geriatrie: mobilite, Parkinson, prothese hanche/genou, prevention des chutes et autonomie. Reponse rapide sur WhatsApp direct.'
      : 'ترويض منزلي للمسنين بالدار البيضاء: تحسين الحركة، باركنسون، تأهيل بعد عمليات الورك والركبة، والوقاية من السقوط مع تواصل سريع عبر واتساب.',
    keywords: lang === 'fr'
      ? 'kine a domicile Casablanca, kinesitherapie geriatrique, kine personne agee Casablanca, reeducation a domicile Casablanca, Parkinson kine, reeducation prothese hanche, reeducation prothese genou, prevention chute personne agee'
      : 'ترويض منزلي الدار البيضاء, ترويض المسنين, إعادة التأهيل المنزلي, باركنسون علاج طبيعي, تأهيل بعد عملية الورك, تأهيل بعد عملية الركبة, الوقاية من السقوط عند كبار السن'
  });

  const frFaq: FAQItem[] = [
    {
      q: 'Combien coute une seance de kine a domicile a Casablanca ?',
      a: 'Le prix depend du bilan initial, de la distance et du type de reeducation. Nous vous donnons un tarif clair avant de commencer.'
    },
    {
      q: 'Combien de seances faut-il apres une prothese de hanche ou de genou ?',
      a: 'En moyenne, plusieurs semaines sont necessaires. Le nombre exact depend de l age, de l etat general et de l objectif de recuperation.'
    },
    {
      q: 'La kinesitherapie a domicile est-elle remboursee ?',
      a: 'Selon votre couverture, une partie peut etre remboursee. Nous preparons les documents utiles pour faciliter vos demarches.'
    },
    {
      q: 'Intervenez-vous dans tous les quartiers de Casablanca ?',
      a: 'Nous couvrons une grande partie de Casablanca. Contactez-nous sur WhatsApp pour confirmer rapidement votre quartier.'
    },
    {
      q: 'Comment prendre rendez-vous rapidement ?',
      a: 'Le plus simple est WhatsApp. Vous envoyez votre besoin, nous vous repondons vite avec une proposition de creneau.'
    },
    {
      q: 'Est-ce utile meme avant une chute ou une maladie ?',
      a: 'Oui. Commencer tot permet de renforcer les muscles, de travailler l equilibre et d eviter une perte d autonomie future.'
    }
  ];

  const arFaq: FAQItem[] = [
    {
      q: 'شحال ثمن حصة الترويض المنزلي فالدار البيضاء؟',
      a: 'الثمن كيتحدد حسب التقييم الأولي، المسافة، ونوع إعادة التأهيل. كنوضحوه ليكم بوضوح قبل البداية.'
    },
    {
      q: 'شحال من حصة كتكون ضرورية من بعد عملية الورك أو الركبة؟',
      a: 'غالبا كنحتاجو عدة أسابيع. العدد الدقيق كيتبدل حسب السن، الحالة الصحية، والهدف ديال الاسترجاع.'
    },
    {
      q: 'واش الترويض المنزلي كيتعوض من طرف التغطية الصحية؟',
      a: 'حسب التغطية ديالكم ممكن يكون تعويض جزئي. كنساعدوكم بالوثائق باش تسهل المساطر.'
    },
    {
      q: 'واش كتخدمو فجميع أحياء الدار البيضاء؟',
      a: 'كنغطيوا بزاف ديال المناطق فالدار البيضاء. تواصل معنا فواتساب ونعطيوك الجواب بسرعة على الحي ديالك.'
    },
    {
      q: 'كيفاش ناخد موعد بسرعة؟',
      a: 'أسهل طريقة هي واتساب. كتبعت الحالة ديالك وكنجاوبوك بسرعة بموعد مناسب.'
    },
    {
      q: 'واش الترويض مفيد حتى قبل السقوط أو المرض؟',
      a: 'أكيد. البدء بكري كيعاون نقويو العضلات والتوازن ونحافظو على الاستقلالية ديال الوالدين.'
    }
  ];

  const faq = lang === 'fr' ? frFaq : arFaq;

  const ctaPrimary = lang === 'fr' ? 'Prendre rendez-vous sur WhatsApp' : 'احجز موعدك على واتساب';
  const ctaFast = lang === 'fr' ? 'Reponse rapide' : 'رد سريع';
  const ctaNow = lang === 'fr' ? 'Contact immediat' : 'تواصل فوري';

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} keywords={seo.keywords} />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.2),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.14),transparent_40%)]" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
              <HeartHandshake size={16} />
              {lang === 'fr' ? 'Geriatrie a domicile - Casablanca' : 'ترويض منزلي للمسنين - الدار البيضاء'}
            </span>
            <h1 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
              {lang === 'fr'
                ? 'Kine a domicile Casablanca: geriatrie, autonomie et prevention des chutes'
                : 'كيني à domicile Casablanca: ترويض المسنين، الاستقلالية والوقاية من السقوط'}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-100 md:text-xl">
              {lang === 'fr'
                ? 'La kine a domicile Casablanca aide vos parents a bouger sans douleur, a garder leur autonomie et a vivre en securite chez eux. Plus on commence tot, plus on evite les complications.'
                : 'خدمة kine a domicile Casablanca كتعاون الوالدين يتحركو بلا ألم، يحافظو على الاستقلالية، ويعيشو بأمان فالدار. كلما بدينا بكري، كلما نقصنا المضاعفات.'}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-bold text-slate-900 transition hover:bg-emerald-300"
              >
                <Smartphone size={18} /> {ctaPrimary}
              </a>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">{ctaFast}</span>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">{ctaNow}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-red-100 bg-red-50/80 p-6 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl font-bold text-slate-900">
              {lang === 'fr' ? 'Quand on attend trop, les risques augmentent' : 'منين كنتسناو بزاف، المخاطر كتزاد'}
            </h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• {lang === 'fr' ? 'Perte d autonomie progressive' : 'فقدان تدريجي للاستقلالية'}</li>
              <li>• {lang === 'fr' ? 'Douleurs qui deviennent chroniques' : 'آلام كتولي مزمنة'}</li>
              <li>• {lang === 'fr' ? 'Difficulte a se lever, marcher et monter les escaliers' : 'صعوبة فالوقوف والمشي وطلوع الدروج'}</li>
              <li>• {lang === 'fr' ? 'Risque de chute et fracture' : 'خطر السقوط والكسور'}</li>
              <li>• {lang === 'fr' ? 'Isolement, baisse du moral et peur de bouger' : 'العزلة، نقص المعنويات والخوف من الحركة'}</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-6 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl font-bold text-slate-900">
              {lang === 'fr' ? 'Ce que la kinesitherapie geriatrique change vraiment' : 'شنو كتبدل فعلا الكينيزيثيرابي للمسنين'}
            </h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• {lang === 'fr' ? 'Retrouver des gestes simples du quotidien' : 'استرجاع الحركات البسيطة فاليوم'}</li>
              <li>• {lang === 'fr' ? 'Marcher avec plus de confiance' : 'المشي بثقة أكبر'}</li>
              <li>• {lang === 'fr' ? 'Diminuer la douleur sans surcharger les medicaments' : 'نقصان الألم بلا إفراط فالأدوية'}</li>
              <li>• {lang === 'fr' ? 'Rassurer la famille avec un plan clair' : 'طمأنة العائلة بخطة علاج واضحة'}</li>
              <li>• {lang === 'fr' ? 'Aider les medecins avec un suivi serieux a domicile' : 'مساعدة الأطباء بمتابعة دقيقة فالمنزل'}</li>
            </ul>
          </article>
        </div>

        <div className="mt-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-medical-600 px-6 py-3 font-bold text-white transition hover:bg-medical-700"
          >
            {ctaPrimary} <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            {lang === 'fr' ? 'Pourquoi choisir la kine a domicile Casablanca en geriatrie ?' : 'علاش تختار kine a domicile Casablanca فالترويض ديال كبار السن؟'}
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ShieldCheck className="text-medical-600" size={26} />
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{lang === 'fr' ? 'Securite' : 'الأمان'}</h3>
              <p className="mt-2 text-slate-700">
                {lang === 'fr'
                  ? 'Moins de deplacements fatigants, moins de stress, et un environnement connu pour la personne agee.'
                  : 'تنقل أقل، توتر أقل، وبيئة مألوفة للمسن داخل المنزل.'}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Timer className="text-medical-600" size={26} />
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{lang === 'fr' ? 'Efficacite' : 'الفعالية'}</h3>
              <p className="mt-2 text-slate-700">
                {lang === 'fr'
                  ? 'Exercices adaptes au vrai quotidien du patient: lit, salon, escaliers et habitudes de vie.'
                  : 'تمارين مناسبة للحياة اليومية الحقيقية: السرير، الصالون، الدروج والعادات اليومية.'}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <HeartHandshake className="text-medical-600" size={26} />
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{lang === 'fr' ? 'Confort humain' : 'راحة إنسانية'}</h3>
              <p className="mt-2 text-slate-700">
                {lang === 'fr'
                  ? 'Le parent est plus serein, la famille participe, et le medecin peut suivre une prise en charge bien structuree.'
                  : 'المسن كيكون مرتاح، العائلة كتشارك، والطبيب كيتابع مسار علاجي منظم.'}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-bold text-white transition hover:bg-emerald-600"
            >
              {ctaFast}
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-slate-900">
          {lang === 'fr' ? 'Pathologies traitees en kinesitherapie geriatrique a domicile' : 'الحالات اللي كنعالجو فالترويض المنزلي للمسنين'}
        </h2>

        <div className="mt-6 space-y-5">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">{lang === 'fr' ? 'Kine Parkinson a domicile' : 'ترويض باركنسون فالمنزل'}</h3>
            <p className="mt-2 text-slate-700">
              {lang === 'fr'
                ? 'Travail de l equilibre, de la marche, des transferts et de la coordination pour limiter les blocages et maintenir l autonomie.'
                : 'كنخدمو على التوازن، المشي، الانتقالات بين الحركات والتنسيق باش نخففو التصلب ونحافظو على الاستقلالية.'}
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">{lang === 'fr' ? 'Reeducation apres prothese de hanche (PTH)' : 'إعادة التأهيل بعد عملية مفصل الورك الاصطناعي'}</h3>
            <p className="mt-2 text-slate-700">
              {lang === 'fr'
                ? 'Reapprendre a marcher, recuperer la stabilite, diminuer la douleur et prevenir les compensations qui usent les autres articulations.'
                : 'كنعاودو نتعلمو المشي بطريقة صحيحة، نسترجعو الثبات، ونخففو الألم باش مايتأثروش مفاصل أخرى.'}
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">{lang === 'fr' ? 'Reeducation apres prothese du genou (PTG)' : 'إعادة التأهيل بعد عملية مفصل الركبة الاصطناعي'}</h3>
            <p className="mt-2 text-slate-700">
              {lang === 'fr'
                ? 'Recuperer la flexion, reduire les raideurs, renforcer la cuisse et retrouver les activites du quotidien sans apprehension.'
                : 'كنركزو على ثني الركبة، تقليل التصلب، تقوية عضلات الفخذ والرجوع للأنشطة اليومية بثقة.'}
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">{lang === 'fr' ? 'Prevention des chutes chez la personne agee' : 'الوقاية من السقوط عند كبار السن'}</h3>
            <p className="mt-2 text-slate-700">
              {lang === 'fr'
                ? 'Exercices d equilibre, renforcement, conseils d amenagement a la maison et education familiale pour reduire le risque de chute.'
                : 'تمارين التوازن والقوة، تعديل بيئة المنزل، وتوجيه العائلة باش نقللو خطر السقوط.'}
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">{lang === 'fr' ? 'Sarcopenie et perte musculaire' : 'الساركوبينيا وضعف الكتلة العضلية'}</h3>
            <p className="mt-2 text-slate-700">
              {lang === 'fr'
                ? 'Programme progressif pour restaurer la force, l endurance et la confiance, meme chez les personnes tres deconditionnees.'
                : 'برنامج تدريجي لاسترجاع القوة والتحمل والثقة حتى عند الناس اللي نقص النشاط عندهم بزاف.'}
            </p>
          </article>
        </div>

        <div className="mt-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-medical-600 px-6 py-3 font-bold text-white transition hover:bg-medical-700"
          >
            {ctaNow}
          </a>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-cyan-50 py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            {lang === 'fr' ? 'Benefices concrets pour le patient et sa famille' : 'فوائد عملية للمريض والعائلة'}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              lang === 'fr' ? 'Ameliorer la mobilite et la marche' : 'تحسين الحركة والمشي',
              lang === 'fr' ? 'Reduire la douleur au quotidien' : 'تخفيف الألم اليومي',
              lang === 'fr' ? 'Retrouver plus d autonomie a la maison' : 'استرجاع الاستقلالية فالدار',
              lang === 'fr' ? 'Eviter les complications apres hospitalisation' : 'تجنب المضاعفات بعد الاستشفاء',
              lang === 'fr' ? 'Baisser le risque de rechute et de nouvelle chute' : 'تقليل خطر الانتكاسة أو السقوط من جديد',
              lang === 'fr' ? 'Mieux vivre son age avec dignite' : 'العيش بكرامة أكثر مع التقدم فالسن'
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-cyan-100 bg-white p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={20} />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-bold text-white transition hover:bg-emerald-600"
            >
              {ctaPrimary}
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-slate-900">
          {lang === 'fr' ? 'Activite physique adaptee: meme 15 minutes changent tout' : 'نشاط بدني مناسب: حتى 15 دقيقة كتفرق بزاف'}
        </h2>
        <p className="mt-4 max-w-4xl text-slate-700">
          {lang === 'fr'
            ? 'A cet age, ne pas bouger assez accelere la perte musculaire et la perte d equilibre. Des exercices simples et reguliers evitent une grande partie des problemes futurs, meme avant de tomber malade.'
            : 'فهاد العمر، قلة الحركة كتسرع ضعف العضلات والتوازن. تمارين بسيطة ومنتظمة كتمنع بزاف ديال المشاكل حتى قبل ما يبان المرض.'}
        </p>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="text-xl font-semibold text-amber-900">{lang === 'fr' ? 'Conseil du kine' : 'نصيحة الكيني'}</h3>
          <p className="mt-2 text-amber-900">
            {lang === 'fr'
              ? 'Marchez un peu chaque jour, travaillez l appui sur une jambe avec support, et faites 5 levers de chaise matin et soir. Petit effort, grand impact.'
              : 'المشي اليومي ولو قليل، تمارين توازن بسيطة مع دعم، و5 مرات الجلوس والوقوف صباح ومساء. مجهود صغير بنتيجة كبيرة.'}
          </p>
        </div>

        <div className="mt-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-medical-600 px-6 py-3 font-bold text-white transition hover:bg-medical-700"
          >
            {ctaFast}
          </a>
        </div>
      </section>

      <section className="bg-slate-900 py-14 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold">
            {lang === 'fr' ? 'Conseils pratiques a la maison' : 'نصائح عملية فالدار'}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <p className="rounded-xl border border-white/20 bg-white/5 p-4">• {lang === 'fr' ? 'Degager les tapis glissants et les obstacles au sol.' : 'حيّدوا الزرابي الزلقة والعوائق من الأرض.'}</p>
            <p className="rounded-xl border border-white/20 bg-white/5 p-4">• {lang === 'fr' ? 'Ajouter un bon eclairage la nuit (couloir, toilette).' : 'زيدوا إضاءة مزيانة فالليل خاصة الممر والحمام.'}</p>
            <p className="rounded-xl border border-white/20 bg-white/5 p-4">• {lang === 'fr' ? 'Verifier les chaussures: semelle stable, anti-glisse.' : 'راقبوا الصبّاط: نعل ثابت وما يزلقش.'}</p>
            <p className="rounded-xl border border-white/20 bg-white/5 p-4">• {lang === 'fr' ? 'Faire une routine simple tous les jours, meme courte.' : 'ديروا روتين بسيط كل نهار حتى لو قصير.'}</p>
          </div>
          <div className="mt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-bold text-slate-900 transition hover:bg-emerald-300"
            >
              {ctaNow}
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-slate-900">
          {lang === 'fr' ? 'Pourquoi nous choisir a Casablanca ?' : 'علاش تختارونا فالدار البيضاء؟'}
        </h2>
        <ul className="mt-6 space-y-3 text-slate-700">
          <li>• {lang === 'fr' ? 'Prise en charge humaine, claire et orientee resultats.' : 'متابعة إنسانية واضحة وموجهة للنتائج.'}</li>
          <li>• {lang === 'fr' ? 'Experience des profils geriatriques complexes.' : 'خبرة مع حالات المسنين المعقدة.'}</li>
          <li>• {lang === 'fr' ? 'Communication fluide avec la famille et le medecin traitant.' : 'تواصل سلس مع العائلة والطبيب المعالج.'}</li>
          <li>• {lang === 'fr' ? 'Intervention rapide sur Casablanca selon disponibilite.' : 'تدخل سريع فالدار البيضاء حسب التوفر.'}</li>
        </ul>

        <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="flex items-center gap-2 text-2xl font-bold text-red-800">
            <AlertTriangle size={22} /> {lang === 'fr' ? 'Urgence' : 'حالة مستعجلة'}
          </h3>
          <p className="mt-3 text-red-800">
            {lang === 'fr'
              ? 'Plus vous attendez, plus la recuperation est difficile. N attendez pas la chute ou l aggravation des douleurs pour agir.'
              : 'كلما تأخرتوا، كلما صعب الاسترجاع. ما تسناوش حتى يوقع السقوط أو تزيد الآلام.'}
          </p>
        </div>

        <div className="mt-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-medical-600 px-6 py-3 font-bold text-white transition hover:bg-medical-700"
          >
            {ctaPrimary}
          </a>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
          <div className="mt-6 space-y-4">
            {faq.map((item) => (
              <article key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-2 text-slate-700">{item.a}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-medical-100 bg-white p-6">
            <h3 className="text-xl font-bold text-slate-900">
              {lang === 'fr' ? 'Liens utiles (maillage interne)' : 'روابط مفيدة داخل الموقع'}
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <Link to={`${prefix}/a-domicile`} className="rounded-xl border border-slate-200 px-4 py-3 font-semibold text-medical-700 hover:bg-medical-50">
                {lang === 'fr' ? 'Page principale: kine a domicile' : 'الصفحة الرئيسية: الترويض المنزلي'}
              </Link>
              <Link to={`${prefix}/services`} className="rounded-xl border border-slate-200 px-4 py-3 font-semibold text-medical-700 hover:bg-medical-50">
                {lang === 'fr' ? 'Nos autres services de kinesitherapie' : 'باقي خدمات الترويض الطبي'}
              </Link>
              <Link to={`${prefix}/pathologies`} className="rounded-xl border border-slate-200 px-4 py-3 font-semibold text-medical-700 hover:bg-medical-50">
                {lang === 'fr' ? 'Pathologies traitees' : 'الأمراض المعالجة'}
              </Link>
              <Link to={`${prefix}/contact`} className="rounded-xl border border-slate-200 px-4 py-3 font-semibold text-medical-700 hover:bg-medical-50">
                {lang === 'fr' ? 'Contact et prise de rendez-vous' : 'التواصل وحجز الموعد'}
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <p className="max-w-4xl text-slate-700">
              {lang === 'fr'
                ? 'Conclusion: la kine a domicile Casablanca en geriatrie est une solution humaine, locale et efficace pour proteger l autonomie de nos parents. Ils meritent un accompagnement serieux, meme avant la maladie.'
                : 'الخلاصة: kine a domicile Casablanca فالترويض ديال المسنين حل إنساني، محلي وفعّال باش نحافظو على استقلالية الوالدين. كيستاهلو مواكبة جدية حتى قبل المرض.'}
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 font-bold text-white transition hover:bg-emerald-600"
            >
              {ctaPrimary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTherapyGeriatrics;
