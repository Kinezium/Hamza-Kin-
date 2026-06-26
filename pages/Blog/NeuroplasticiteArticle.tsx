import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Brain, Activity, CheckCircle, Stethoscope } from 'lucide-react';

const article = createArticle({
  slug: 'neuroplasticite-miracle-cerveau-kine',
  titleFr: 'La Neuroplasticité: Le Miracle du Cerveau et le Rôle de la Kiné',
  titleAr: 'المرونة العصبية: معجزة الدماغ ودور الترويض الطبي',
  descriptionFr: 'Qu est-ce que la neuroplasticité, comment la stimuler, quand elle est la plus active, et pourquoi la kinésithérapie est essentielle après AVC, traumatisme ou maladie neurologique.',
  descriptionAr: 'ما هي المرونة العصبية، كيف نحفزها، متى تكون أقوى، ولماذا الترويض الطبي أساسي بعد الجلطة أو الإصابات أو الأمراض العصبية.',
  keywordsFr: 'neuroplasticité, cerveau et rééducation, kinésithérapie neurologique, stimulation cérébrale naturelle, récupération après AVC',
  keywordsAr: 'المرونة العصبية, الدماغ وإعادة التأهيل, الترويض الطبي العصبي, تحفيز الدماغ, التعافي بعد الجلطة',
  imageFr: 'https://picsum.photos/seed/neuroplasticite-kine-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/neuroplasticite-kine-chnider/1600/900',
  readTimeFr: '9 min de lecture',
  readTimeAr: '9 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="text-indigo-600" size={26} />
          <h2 className="text-2xl font-bold text-indigo-900">La neuroplasticité: c est quoi exactement?</h2>
        </div>
        <p className="text-indigo-900 leading-relaxed">
          La <strong>neuroplasticité</strong> est la capacité du cerveau à se modifier et à se réorganiser. Pendant longtemps,
          on pensait que le cerveau adulte ne changeait presque plus. Aujourd hui, les preuves scientifiques montrent
          l inverse: le cerveau crée de nouvelles connexions, renforce des circuits utiles et peut compenser certaines
          zones lésées. C est ce qui explique pourquoi un patient peut récupérer après un <strong>AVC</strong>, un traumatisme
          crânien ou une maladie neurologique.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Comment la kiné stimule la neuroplasticité?</h2>
        </div>
        <p className="mb-4">
          La neuroplasticité ne se déclenche pas par la magie. Elle répond à des stimulations répétées,
          précises et progressives. La kinésithérapie neurologique est justement construite sur ce principe.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">Ce qui active le cerveau</h3>
            <ul className="list-disc pl-5 space-y-1 text-green-900 text-sm">
              <li>Répétition de mouvements fonctionnels ciblés</li>
              <li>Exercices orientés vers un objectif concret</li>
              <li>Feedback sensoriel et correction en temps réel</li>
              <li>Progression régulière de la difficulté</li>
              <li>Entraînement de l équilibre, de la marche et de la coordination</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <h3 className="font-bold text-amber-800 mb-2">Ce qui freine la récupération</h3>
            <ul className="list-disc pl-5 space-y-1 text-amber-900 text-sm">
              <li>Repos excessif sans stimulation motrice</li>
              <li>Exercices irréguliers ou arrêt précoce</li>
              <li>Mouvements compensatoires non corrigés</li>
              <li>Douleur non prise en charge</li>
              <li>Objectifs flous sans suivi</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Quand la neuroplasticité est-elle la plus forte?</h2>
        </div>
        <p className="mb-3">
          La plasticité existe à tout âge, mais certaines périodes sont stratégiques:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Phase précoce (semaines après la lésion):</strong> fenêtre d opportunité très importante.</li>
          <li><strong>Phase subaiguë (1 à 6 mois):</strong> période idéale pour des gains rapides si le programme est intensif.</li>
          <li><strong>Phase chronique:</strong> les progrès restent possibles, mais demandent plus de régularité et de précision.</li>
        </ol>
        <p className="mt-4 text-gray-700">
          Message essentiel: il n est <strong>jamais trop tard</strong> pour commencer, mais il est toujours préférable de commencer tôt.
        </p>
      </section>

      <section className="bg-medical-50 border-l-4 border-medical-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-medical-700" size={24} />
          <h2 className="text-2xl font-bold text-medical-900">Le rôle primordial de la kinésithérapie</h2>
        </div>
        <p className="text-medical-900 mb-3">
          La kinésithérapie transforme la théorie de la neuroplasticité en résultats réels dans la vie du patient.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-medical-900">
          <li>Évaluation précise des déficits moteurs, sensitifs et posturaux.</li>
          <li>Programme personnalisé pour restaurer marche, équilibre et autonomie.</li>
          <li>Prévention des complications: spasticité, douleurs, chutes, déconditionnement.</li>
          <li>Éducation du patient et de la famille pour prolonger les effets en dehors du cabinet.</li>
          <li>Suivi longitudinal pour adapter le plan selon les progrès.</li>
        </ul>
        <p className="mt-4 text-medical-900 font-semibold italic">
          La kiné stimule la récupération, mais elle n agit pas seule: l engagement du patient, la répétition quotidienne
          et la constance font toute la différence.
        </p>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-3">Un miracle du cerveau qui rappelle la grandeur de Dieu</h2>
        <p className="leading-relaxed text-slate-700">
          Voir un patient retrouver un geste, un pas, ou une parole après une lésion neurologique est souvent bouleversant.
          La neuroplasticité montre une intelligence profonde de la création: le cerveau se réorganise, apprend et se reconstruit.
          Pour beaucoup de familles, cela renforce la foi et rappelle la grandeur de Dieu. Notre rôle de soignants est d utiliser
          les meilleures preuves scientifiques, avec humilité, pour accompagner ce processus.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-indigo-50 border-r-4 border-indigo-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="text-indigo-600" size={26} />
          <h2 className="text-2xl font-bold text-indigo-900">ما هي المرونة العصبية بالضبط؟</h2>
        </div>
        <p className="text-indigo-900 leading-relaxed">
          <strong>المرونة العصبية</strong> هي قدرة الدماغ على التغير وإعادة تنظيم نفسه. في السابق كان الاعتقاد أن دماغ البالغ لا يتغير كثيرًا،
          لكن الأدلة العلمية أثبتت العكس: الدماغ يُنشئ وصلات جديدة، ويقوي المسارات المفيدة، وقد يعوض بعض المناطق المتضررة.
          لهذا يمكن للمريض أن يتحسن بعد <strong>السكتة الدماغية</strong> أو إصابة دماغية أو مرض عصبي.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">كيف يحفز الترويض الطبي المرونة العصبية؟</h2>
        </div>
        <p className="mb-4">
          المرونة العصبية لا تحدث تلقائيًا. هي تستجيب لتحفيز متكرر، دقيق، ومتدرج. وهذا هو أساس التأهيل العصبي في الترويض.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">ما الذي ينشط الدماغ؟</h3>
            <ul className="list-disc pl-5 space-y-1 text-green-900 text-sm">
              <li>تكرار الحركات الوظيفية الموجهة</li>
              <li>تمارين مرتبطة بهدف عملي واضح</li>
              <li>تغذية راجعة حسية وتصحيح مباشر</li>
              <li>زيادة تدريجية في صعوبة التمارين</li>
              <li>تدريب التوازن والمشي والتناسق الحركي</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <h3 className="font-bold text-amber-800 mb-2">ما الذي يبطئ التحسن؟</h3>
            <ul className="list-disc pl-5 space-y-1 text-amber-900 text-sm">
              <li>الراحة المفرطة دون تحفيز حركي</li>
              <li>تمارين غير منتظمة أو انقطاع مبكر</li>
              <li>حركات تعويضية خاطئة بلا تصحيح</li>
              <li>ألم غير مضبوط يعيق التدريب</li>
              <li>أهداف غير واضحة دون متابعة</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">متى تكون المرونة العصبية أقوى؟</h2>
        </div>
        <p className="mb-3">المرونة العصبية موجودة في كل عمر، لكن هناك فترات أكثر أهمية:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>المرحلة المبكرة بعد الإصابة:</strong> نافذة ذهبية للتحسن السريع.</li>
          <li><strong>المرحلة تحت الحادة (1 إلى 6 أشهر):</strong> أفضل وقت لمكاسب كبيرة إذا كان البرنامج مكثفًا.</li>
          <li><strong>المرحلة المزمنة:</strong> التحسن ممكن أيضًا لكنه يحتاج انتظامًا وصبرًا أكبر.</li>
        </ol>
        <p className="mt-4 text-gray-700">
          الخلاصة: ليس هناك وقت متأخر لبدء التأهيل، لكن البدء المبكر أفضل دائمًا.
        </p>
      </section>

      <section className="bg-medical-50 border-r-4 border-medical-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-medical-700" size={24} />
          <h2 className="text-2xl font-bold text-medical-900">الدور المحوري للترويض الطبي</h2>
        </div>
        <p className="text-medical-900 mb-3">
          الترويض الطبي يحول مفهوم المرونة العصبية من فكرة علمية إلى نتائج ملموسة في حياة المريض.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-medical-900">
          <li>تقييم دقيق لنقاط الضعف الحركية والحسية والوضعية.</li>
          <li>برنامج شخصي لاسترجاع المشي والتوازن والاستقلالية.</li>
          <li>الوقاية من المضاعفات: التشنج، الألم، السقوط، وضعف اللياقة.</li>
          <li>تثقيف المريض والعائلة لضمان الاستمرارية خارج العيادة.</li>
          <li>متابعة طويلة المدى وتعديل الخطة حسب التقدم.</li>
        </ul>
        <p className="mt-4 text-medical-900 font-semibold italic">
          الترويض يساعد بقوة على التحسن، لكنه يحتاج التزام المريض والتكرار اليومي والانضباط.
        </p>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-3">معجزة في الدماغ تُظهر عظمة الله</h2>
        <p className="leading-relaxed text-slate-700">
          رؤية مريض يسترجع حركة أو خطوة أو كلامًا بعد إصابة عصبية أمر مؤثر جدًا. المرونة العصبية تُظهر دقة الخلق:
          الدماغ يعيد ترتيب نفسه ويتعلم من جديد. هذا المشهد يزيد يقين كثير من العائلات بعظمة الله.
          دورنا كمعالجين هو الأخذ بالأسباب العلمية الصحيحة، بتواضع، لخدمة المريض ومساعدته على أفضل تعافٍ ممكن.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'readaptation-post-avc',
      titleFr: 'Réadaptation Post-AVC',
      titleAr: 'إعادة التأهيل ما بعد الجلطة',
      icon: <Brain size={20} className="text-medical-600" />
    },
    {
      slug: 'spasticite-definition-traitement-indications',
      titleFr: 'Spasticité: définition et traitement',
      titleAr: 'التشنج العضلي: التعريف والعلاج',
      icon: <Activity size={20} className="text-medical-600" />
    },
    {
      slug: 'parkinson-prothese-hanche-pth',
      titleFr: 'Parkinson et prothèse de hanche',
      titleAr: 'باركنسون وبدلة الورك',
      icon: <CheckCircle size={20} className="text-medical-600" />
    }
  ]
});

export default article;
