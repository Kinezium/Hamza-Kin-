import React from 'react';
import { Brain, HeartHandshake, Stethoscope } from 'lucide-react';
import { createTrendArticle } from './TrendArticleFactory';

const article = createTrendArticle({
  slug: 'avc-orthophonie-soins-domicile-casablanca',
  titleFr: 'Après un AVC : orthophonie, déglutition et soins à domicile',
  titleAr: 'بعد السكتة الدماغية: تقويم النطق والبلع والرعاية المنزلية',
  descriptionFr: 'Après un AVC à Casablanca, comprendre le rôle de l’orthophoniste, du kinésithérapeute et de l’équipe de soins pour préparer un retour à domicile coordonné.',
  descriptionAr: 'بعد السكتة الدماغية في الدار البيضاء: دور أخصائي النطق والترويض والفريق الصحي في تنظيم العودة إلى المنزل.',
  keywordsFr: 'orthophoniste après AVC Casablanca, rééducation AVC à domicile Maroc, aphasie et AVC, troubles de déglutition AVC, kiné domicile Casablanca, soins infirmiers à domicile',
  keywordsAr: 'أخصائي النطق بعد السكتة الدار البيضاء, إعادة التأهيل بعد الجلطة في المنزل, الحبسة, صعوبة البلع, الترويض المنزلي, التمريض المنزلي',
  imageSeed: 'stroke-speech-home-rehab-casablanca',
  readTime: '7',
  specialty: 'rééducation après AVC',
  specialtyAr: 'إعادة التأهيل بعد السكتة الدماغية',
  bodyFr: (
    <>
      <section>
        <h2 className="text-2xl font-bold mb-3">Après l’hôpital, les difficultés ne sont pas uniquement motrices</h2>
        <p>Un AVC peut affecter la marche et l’équilibre, mais aussi la parole, la compréhension, la mémoire ou la déglutition. Les besoins varient selon la personne : le plan de retour à domicile se prépare avec l’équipe médicale et les professionnels concernés, sans supposer que chaque patient aura les mêmes troubles.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">Quel professionnel pour quel besoin ?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Le médecin</strong> suit l’état de santé, les traitements et les complications, et oriente vers les évaluations nécessaires.</li>
          <li><strong>Le kinésithérapeute</strong> évalue les transferts, la mobilité, l’équilibre et la marche, puis adapte la rééducation aux capacités du patient.</li>
          <li><strong>L’orthophoniste</strong> évalue et accompagne les troubles de la communication et, selon sa compétence, les difficultés de déglutition.</li>
          <li><strong>L’infirmier</strong> peut contribuer aux soins prescrits et au suivi à domicile selon les besoins et le cadre de prise en charge.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">Prudence en cas de difficulté à avaler</h2>
        <p>Une toux pendant les repas, une voix devenue « mouillée », des épisodes d’étouffement ou des infections respiratoires répétées doivent être signalés à l’équipe soignante. Ne modifiez pas seul la texture des aliments, les boissons ou les médicaments : demandez une évaluation professionnelle. Si la difficulté respiratoire est soudaine ou sévère, appelez les services d’urgence.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">Organiser une prise en charge à domicile à Casablanca</h2>
        <p>Avant le retour, notez les consignes, les rendez-vous, les aides techniques nécessaires et les signes qui doivent conduire à recontacter l’équipe. Un échange entre proches, médecin et rééducateurs facilite la continuité du parcours. Pour rechercher un <a href="https://ssd.clinaxis.ma/" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-800 underline">orthophoniste, kinésithérapeute, médecin ou infirmier à domicile à Casablanca</a>, consultez les services de santé à domicile.</p>
        <p className="mt-3">Consultez également notre article sur <a href="/blog/readaptation-post-avc" className="text-medical-700 underline font-semibold">la réadaptation après un AVC</a> et les repères sur <a href="/blog/avc-signes-alerte-reeducation-precoce" className="text-medical-700 underline font-semibold">les signes d’alerte de l’AVC</a>.</p>
      </section>
      <p className="rounded-lg bg-amber-50 p-5 text-amber-950">Une apparition soudaine d’un visage asymétrique, d’une faiblesse d’un bras ou d’un trouble de la parole est une urgence : appelez immédiatement les secours. Cet article ne remplace pas un diagnostic ni un plan de soins individualisé.</p>
    </>
  ),
  bodyAr: (
    <>
      <section>
        <h2 className="text-2xl font-bold mb-3">بعد المستشفى، قد تظهر احتياجات غير حركية</h2>
        <p>قد تؤثر السكتة الدماغية على المشي والتوازن، وكذلك الكلام أو الفهم أو الذاكرة أو البلع. تختلف الاحتياجات من شخص لآخر؛ لذلك يتم التخطيط للعودة إلى المنزل مع الفريق الطبي والمختصين، دون افتراض أن جميع المرضى لديهم المشكلات نفسها.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">دور كل مختص</h2>
        <ul className="list-disc pr-6 space-y-2">
          <li><strong>الطبيب:</strong> متابعة الحالة والعلاج والمضاعفات وتحديد التقييمات المطلوبة.</li>
          <li><strong>اختصاصي الترويض:</strong> تقييم الانتقال والحركة والتوازن والمشي وتكييف التأهيل مع قدرات المريض.</li>
          <li><strong>أخصائي تقويم النطق:</strong> تقييم ومواكبة اضطرابات التواصل، وقد يقيّم صعوبات البلع ضمن اختصاصه.</li>
          <li><strong>الممرض:</strong> المساهمة في العناية الموصوفة والمتابعة المنزلية حسب الحاجة وإطار الرعاية.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">الحذر عند وجود صعوبة في البلع</h2>
        <p>السعال أثناء الأكل أو تغير الصوت بعد الشرب أو الاختناق أو التهابات الجهاز التنفسي المتكررة يجب إبلاغ الفريق الصحي بها. لا تغيروا قوام الطعام أو الشراب أو الأدوية بأنفسكم؛ اطلبوا تقييماً مختصاً. صعوبة التنفس المفاجئة أو الشديدة تستدعي الاتصال بالإسعاف.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">تنظيم الرعاية المنزلية في الدار البيضاء</h2>
        <p>قبل العودة، دوّنوا التعليمات والمواعيد والوسائل المساعدة والعلامات التي تتطلب التواصل مع الفريق. التنسيق بين الأسرة والطبيب ومختصي التأهيل يدعم استمرارية الرعاية. للعثور على <a href="https://ssd.clinaxis.ma/" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-800 underline">أخصائي نطق أو ترويض أو طبيب أو ممرض في المنزل بالدار البيضاء</a>، اكتشفوا خدمات الرعاية المنزلية.</p>
        <p className="mt-3">اقرؤوا أيضاً <a href="/ar/blog/readaptation-post-avc" className="text-medical-700 underline font-semibold">دليل إعادة التأهيل بعد السكتة</a> و<a href="/ar/blog/avc-signes-alerte-reeducation-precoce" className="text-medical-700 underline font-semibold">علامات الإنذار المبكرة</a>.</p>
      </section>
      <p className="rounded-lg bg-amber-50 p-5 text-amber-950">ظهور مفاجئ لاعوجاج الوجه أو ضعف الذراع أو اضطراب الكلام حالة طارئة: اتصلوا بالإسعاف فوراً. هذا المقال لا يعوض التشخيص أو خطة الرعاية الفردية.</p>
    </>
  ),
  sources: [
    { label: 'American Stroke Association — Communication Problems After Stroke', url: 'https://www.stroke.org/en/about-stroke/effects-of-stroke/communication-and-aphasia' },
    { label: 'OMS — Rehabilitation', url: 'https://www.who.int/news-room/fact-sheets/detail/rehabilitation' }
  ],
  relatedArticles: [
    { slug: 'readaptation-post-avc', titleFr: 'Réadaptation après un AVC', titleAr: 'إعادة التأهيل بعد السكتة', icon: <Brain size={20} /> },
    { slug: 'avc-signes-alerte-reeducation-precoce', titleFr: 'AVC : signes d’alerte', titleAr: 'علامات الإنذار للسكتة', icon: <HeartHandshake size={20} /> },
    { slug: 'spasticite-definition-traitement-indications', titleFr: 'Spasticité après un AVC', titleAr: 'التشنج بعد السكتة', icon: <Stethoscope size={20} /> }
  ]
});

export default article;
