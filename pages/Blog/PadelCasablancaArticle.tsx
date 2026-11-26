import React from 'react';
import { Activity, Dumbbell, ShieldCheck } from 'lucide-react';
import { createTrendArticle } from './TrendArticleFactory';

const article = createTrendArticle({
  slug: 'padel-blessures-prevention-casablanca',
  titleFr: 'Padel à Casablanca : prévenir les blessures et bien reprendre',
  titleAr: 'البادل في الدار البيضاء: الوقاية من الإصابات والعودة الآمنة',
  descriptionFr: 'Padel à Casablanca : échauffement, douleurs du coude ou de la cheville, reprise progressive et signes qui justifient un avis médical.',
  descriptionAr: 'دليل البادل في الدار البيضاء: الإحماء، آلام المرفق والكاحل، العودة التدريجية ومتى يجب استشارة الطبيب.',
  keywordsFr: 'padel Casablanca, blessure padel Maroc, douleur coude padel, entorse cheville padel, kinésithérapie sport Casablanca, reprise sport après blessure',
  keywordsAr: 'البادل الدار البيضاء, إصابات البادل المغرب, ألم المرفق, التواء الكاحل, الترويض الرياضي الدار البيضاء, العودة للرياضة بعد الإصابة',
  imageSeed: 'padel-injury-prevention-casablanca',
  readTime: '6',
  specialty: 'kinésithérapie du sport',
  specialtyAr: 'الترويض الرياضي',
  bodyFr: (
    <>
      <section>
        <h2 className="text-2xl font-bold mb-3">Pourquoi le padel peut-il réveiller une douleur ?</h2>
        <p>Les démarrages, freinages, changements de direction et gestes répétés au-dessus de l’épaule sollicitent le corps différemment d’une marche tranquille. Une douleur au coude, à l’épaule, au mollet ou à la cheville peut apparaître quand la charge augmente plus vite que l’habitude, sans qu’il soit possible d’en déterminer la cause à distance.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">Avant une partie à Casablanca : les bons réflexes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Commencez par quelques minutes de marche active et des mouvements progressifs des chevilles, hanches, épaules et poignets.</li>
          <li>Augmentez graduellement la durée et l’intensité, surtout après une période sans sport.</li>
          <li>Choisissez des chaussures adaptées au terrain et prévoyez de l’eau, notamment par temps chaud.</li>
          <li>Ne cherchez pas à « jouer à travers » une douleur vive ou qui modifie votre façon de courir.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">Que faire si une gêne apparaît ?</h2>
        <p>Réduisez ou arrêtez l’activité qui déclenche la douleur et observez son évolution. Une douleur importante, un gonflement marqué, une déformation ou l’impossibilité de prendre appui justifie une évaluation médicale rapide. Après une entorse ou une blessure, le retour au padel se décide selon les symptômes, la mobilité, la force et les exigences du jeu — pas uniquement selon le nombre de jours écoulés.</p>
        <p className="mt-3">Un kinésithérapeute peut évaluer les limitations et accompagner une reprise progressive. Consultez aussi notre guide sur <a href="/blog/entorse-cheville-kinesitherapie" className="text-medical-700 underline font-semibold">la rééducation après une entorse de cheville</a> et les conseils de <a href="/blog/recuperation-sportive-prevention-blessures" className="text-medical-700 underline font-semibold">récupération sportive</a>.</p>
      </section>
      <section className="rounded-lg bg-slate-50 p-5">
        <h2 className="text-xl font-bold mb-2">À retenir</h2>
        <p>Il n’existe pas d’échauffement qui garantisse l’absence de blessure. La progression, le repos entre les séances et une évaluation adaptée en cas de douleur persistante sont des repères plus sûrs que l’autodiagnostic.</p>
      </section>
      <p className="rounded-lg border border-teal-200 bg-teal-50 p-5">
        À Casablanca, si une blessure limite vos déplacements, découvrez les <a href="https://ssd.clinaxis.ma/" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-800 underline">services de kinésithérapie et de santé à domicile</a>.
      </p>
    </>
  ),
  bodyAr: (
    <>
      <section>
        <h2 className="text-2xl font-bold mb-3">لماذا قد تظهر الآلام أثناء البادل؟</h2>
        <p>الانطلاق والتوقف وتغيير الاتجاه والضربات المتكررة فوق مستوى الكتف تفرض مجهوداً مختلفاً عن المشي الهادئ. قد يظهر ألم المرفق أو الكتف أو الساق أو الكاحل عند زيادة التدريب بسرعة، لكن لا يمكن تحديد سبب الألم عن بعد.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">قبل اللعب في الدار البيضاء</h2>
        <ul className="list-disc pr-6 space-y-2">
          <li>ابدؤوا بمشي نشيط وحركات تدريجية للكاحلين والوركين والكتفين والمعصمين.</li>
          <li>ارفعوا مدة وشدة اللعب تدريجياً، خصوصاً بعد الانقطاع.</li>
          <li>اختاروا حذاء مناسباً للملعب واحملوا الماء، خاصة في الطقس الحار.</li>
          <li>لا تواصلوا اللعب مع ألم حاد أو ألم يغير طريقة المشي والجري.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">ماذا تفعلون عند ظهور الألم؟</h2>
        <p>خففوا أو أوقفوا الحركة التي تسبب الألم وراقبوا تطوره. الألم الشديد أو التورم الكبير أو التشوه أو عدم القدرة على تحميل الوزن يستدعي تقييماً طبياً سريعاً. بعد الإصابة، تعتمد العودة للبادل على الألم والحركة والقوة ومتطلبات اللعب، وليس على عدد الأيام فقط.</p>
        <p className="mt-3">يمكن لاختصاصي الترويض تقييم الحركة ومرافقة العودة التدريجية. اقرأوا أيضاً <a href="/ar/blog/entorse-cheville-kinesitherapie" className="text-medical-700 underline font-semibold">دليل إعادة التأهيل بعد التواء الكاحل</a> و<a href="/ar/blog/recuperation-sportive-prevention-blessures" className="text-medical-700 underline font-semibold">نصائح التعافي الرياضي</a>.</p>
      </section>
      <section className="rounded-lg bg-slate-50 p-5">
        <h2 className="text-xl font-bold mb-2">الخلاصة</h2>
        <p>لا يوجد إحماء يضمن منع جميع الإصابات. التدرج والراحة والتقييم المهني عند استمرار الألم أفضل من التشخيص الذاتي.</p>
      </section>
      <p className="rounded-lg border border-teal-200 bg-teal-50 p-5">
        إذا حدّت الإصابة من التنقل في الدار البيضاء، اكتشفوا <a href="https://ssd.clinaxis.ma/" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-800 underline">خدمات الترويض والرعاية الصحية المنزلية</a>.
      </p>
    </>
  ),
  sources: [
    { label: 'OMS — Activité physique', url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity' },
    { label: 'NHS — Sprains and strains', url: 'https://www.nhs.uk/conditions/sprains-and-strains/' }
  ],
  relatedArticles: [
    { slug: 'entorse-cheville-kinesitherapie', titleFr: 'Entorse de cheville : rééducation', titleAr: 'إعادة التأهيل بعد التواء الكاحل', icon: <ShieldCheck size={20} /> },
    { slug: 'recuperation-sportive-prevention-blessures', titleFr: 'Récupération sportive', titleAr: 'التعافي الرياضي', icon: <Activity size={20} /> },
    { slug: 'traumatologie-sport', titleFr: 'Traumatologie du sport', titleAr: 'الإصابات الرياضية', icon: <Dumbbell size={20} /> }
  ]
});

export default article;
