import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Brain, Activity, AlertTriangle, CheckCircle, XCircle, Stethoscope, BarChart3, BookOpen } from 'lucide-react';

const article = createArticle({
  slug: 'spasticite-definition-traitement-indications',
  titleFr: 'Spasticite: Definition, Causes, Traitement et Contre-indications',
  titleAr: 'التشنج العضلي: التعريف، الأسباب، العلاج وموانع العلاج',
  descriptionFr:
    'Comprendre la spasticite en detail: comment elle s installe, pourquoi elle apparait, indications et contre-indications des traitements, statistiques cles et sources medicales fiables.',
  descriptionAr:
    'دليل مفصل حول التشنج العضلي: كيف يظهر ولماذا، مؤشرات العلاج وموانعه، ارقام واحصائيات مهمة ومصادر طبية موثوقة.',
  keywordsFr:
    'spasticite, hypertonie spastique, AVC et spasticite, SEP spasticite, paralysie cerebrale, traitement spasticite, kinésithérapie neurologique',
  keywordsAr:
    'التشنج العضلي, فرط التوتر التشنجي, التشنج بعد الجلطة, التصلب المتعدد والتشنج, الشلل الدماغي, علاج التشنج العضلي, الترويض العصبي',
  imageFr: 'https://picsum.photos/seed/spasticite-neuro-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/spasticite-neuro-chnider/1600/900',
  readTimeFr: '9 min de lecture',
  readTimeAr: '9 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">Definition simple de la spasticite</h2>
        </div>
        <p className="text-blue-900 leading-relaxed">
          La <strong>spasticite</strong> est une augmentation anormale du tonus musculaire liee a une lesion du systeme nerveux central
          (cerveau ou moelle epiniere). Les muscles deviennent raides, resistent au mouvement passif et peuvent provoquer des
          spasmes involontaires. Cette raideur est souvent variable: elle augmente avec la fatigue, la douleur, le stress,
          une infection ou des mouvements rapides.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Comment la spasticite s installe</h2>
        </div>
        <p className="mb-3">
          En neurologie, la spasticite apparait quand les voies inhibitrices descendantes (notamment corticospinales)
          controlent moins bien les reflexes medullaires. Resultat: les reflexes deviennent hyperactifs.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Phase initiale:</strong> apres AVC, SEP, traumatisme medullaire ou paralysie cerebrale, le tonus peut d abord etre faible.</li>
          <li><strong>Phase de reorganisation:</strong> sur quelques semaines/mois, les circuits reflexes s hyperexcitent.</li>
          <li><strong>Phase chronique:</strong> raideur persistante, raccourcissement musculaire, risque de retractions et limitations fonctionnelles.</li>
        </ol>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">Pourquoi elle apparait: causes frequentes</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>AVC:</strong> cause tres frequente chez l adulte.</li>
          <li><strong>Sclerose en plaques:</strong> atteinte des voies motrices avec episodes fluctuants.</li>
          <li><strong>Traumatisme cranien ou medullaire:</strong> perturbation durable des commandes motrices.</li>
          <li><strong>Paralysie cerebrale:</strong> spasticite presente des l enfance.</li>
          <li><strong>Autres causes:</strong> tumeurs, anoxie cerebrale, pathologies neurodegeneratives.</li>
        </ul>
      </section>

      <section className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <BarChart3 className="text-indigo-700" size={24} />
          <h2 className="text-2xl font-bold text-indigo-900">Statistiques utiles (ordre de grandeur)</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-indigo-900">
          <li>Apres AVC, la spasticite peut concerner environ <strong>20% a 40%</strong> des patients dans la premiere annee selon les cohortes.</li>
          <li>En SEP, les etudes rapportent une prevalence de spasticite souvent autour de <strong>40% a 80%</strong> selon la severite et les criteres utilises.</li>
          <li>Apres lesion medullaire, la spasticite est frequente et peut toucher plus de <strong>60%</strong> des patients au long cours.</li>
          <li>Dans la paralysie cerebrale, la forme spastique est la plus courante (majoritaire parmi les phenotypes moteurs).</li>
        </ul>
        <p className="mt-3 text-sm text-indigo-800">
          Ces chiffres varient selon la definition de spasticite, l echelle d evaluation (Ashworth/Modified Ashworth, Tardieu),
          le delai depuis la lesion et le type de population etudie.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold text-green-800">Indications de traitement</h2>
        </div>
        <p className="mb-3">On traite la spasticite quand elle gene la fonction ou expose a des complications:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Douleur, spasmes nocturnes, fatigue importante.</li>
          <li>Difficulte a marcher, a se transferer, a s habiller, a se laver.</li>
          <li>Risque de retractions musculaires, deformations articulaires, escarres.</li>
          <li>Difficulte de soins (hygiene perineale, mise au fauteuil, installation au lit).</li>
          <li>Objectif fonctionnel clair: ameliorer la marche, la prehension, le confort ou l autonomie.</li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold text-red-800">Contre-indications et precautions</h2>
        </div>
        <p className="mb-3">La prise en charge doit etre personnalisee. Quelques points de vigilance:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ne pas supprimer une spasticite utile:</strong> parfois elle aide temporairement a la station debout ou au transfert.</li>
          <li><strong>Medicaments antispastiques oraux:</strong> prudence si somnolence, hypotension, insuffisance hepatique/renale selon molecule.</li>
          <li><strong>Toxine botulique:</strong> contre-indiquee en cas d infection locale, d hypersensibilite connue, prudence pendant grossesse/allaitement selon avis medical.</li>
          <li><strong>Pompe a baclofene intrathecal:</strong> indication specialisee; surveillance stricte des risques de sevrage/surdosage.</li>
          <li><strong>Chirurgie orthopedique ou neurochirurgie:</strong> reservee aux cas selectionnes apres echec des traitements conservateurs.</li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-medical-700" size={24} />
          <h2 className="text-2xl font-bold">Traitement: approche en plusieurs niveaux</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Kinesitherapie et reeducation neurologique</strong>
            <p>Etirements prolonges, mobilisations, travail moteur actif, renforcement selectif, entrainement a la marche, ortheses, education des proches.</p>
          </li>
          <li>
            <strong>Traitement des facteurs aggravants</strong>
            <p>Douleur, infection urinaire, constipation, escarre, mauvais chaussage, troubles du sommeil.</p>
          </li>
          <li>
            <strong>Traitements medicamenteux</strong>
            <p>Baclofene, tizanidine, dantrolene ou autres selon indication medicale et tolerance.</p>
          </li>
          <li>
            <strong>Toxine botulique focale</strong>
            <p>Utile pour des groupes musculaires cibles, toujours associee a la reeducation pour maximiser le resultat.</p>
          </li>
          <li>
            <strong>Options avancees</strong>
            <p>Pompe a baclofene intrathecal, gestes chirurgicaux orthopediques/neurochirurgicaux en centre expert.</p>
          </li>
        </ol>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="text-slate-700" size={24} />
          <h2 className="text-2xl font-bold text-slate-900">Sources de l information</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-slate-800">
          <li>Lance JW. The control of muscle tone, reflexes, and movement. Neurology. 1980.</li>
          <li>Pandyan AD et al. Spasticity: clinical perceptions and neurological realities. Clin Rehabil. 2005.</li>
          <li>Royal College of Physicians: Adult spasticity management guidance.</li>
          <li>American Academy of Neurology: guidance on botulinum toxin in adult spasticity.</li>
          <li>Cochrane Reviews on post-stroke spasticity interventions.</li>
          <li>European consensus papers on post-stroke spasticity treatment.</li>
          <li>Resources for SCI epidemiology and spasticity management (MSKTC and related clinical references).</li>
        </ul>
        <p className="mt-3 text-sm text-slate-700">
          Note: les donnees epidemiologiques sont presentees comme fourchettes car elles dependent des methodes d evaluation et des populations.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">تعريف بسيط للتشنج العضلي</h2>
        </div>
        <p className="text-blue-900 leading-relaxed">
          <strong>التشنج العضلي</strong> هو ارتفاع غير طبيعي في توتر العضلات بسبب اصابة في الجهاز العصبي المركزي
          (الدماغ او النخاع الشوكي). تصبح العضلات قاسية وتقاوم الحركة السلبية وقد تظهر تقلصات لا ارادية.
          هذه القساوة قد تزيد مع التعب، الالم، التوتر، الالتهاب او الحركات السريعة.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">كيف يتشكل التشنج العضلي</h2>
        </div>
        <p className="mb-3">
          يحدث التشنج عندما تضعف المسارات العصبية المثبطة القادمة من الدماغ، فتزداد انعكاسات الحبل الشوكي
          بشكل مفرط وتصبح العضلة شديدة الاستجابة للتمدد.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>مرحلة مبكرة:</strong> بعد الجلطة او الاصابة العصبية قد يظهر ضعف في التوتر اولاً.</li>
          <li><strong>مرحلة اعادة التنظيم:</strong> خلال اسابيع او اشهر تصبح الدوائر الانعكاسية مفرطة الاستثارة.</li>
          <li><strong>مرحلة مزمنة:</strong> تيبس مستمر، قصر عضلي، واحتمال تقلصات وتشوهات مفصلية.</li>
        </ol>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">لماذا يظهر: الاسباب الاكثر شيوعاً</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>السكتة الدماغية:</strong> سبب شائع عند البالغين.</li>
          <li><strong>التصلب المتعدد:</strong> اصابة المسارات الحركية مع تقلبات في الشدة.</li>
          <li><strong>اصابة الدماغ او النخاع الشوكي:</strong> تغير دائم في التحكم الحركي.</li>
          <li><strong>الشلل الدماغي:</strong> التشنج يكون غالباً موجوداً منذ الطفولة.</li>
          <li><strong>اسباب اخرى:</strong> نقص الاكسجة الدماغية، اورام، وبعض الامراض التنكسية.</li>
        </ul>
      </section>

      <section className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <BarChart3 className="text-indigo-700" size={24} />
          <h2 className="text-2xl font-bold text-indigo-900">احصائيات مهمة (تقريبية)</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-indigo-900">
          <li>بعد الجلطة الدماغية قد يظهر التشنج العضلي لدى نحو <strong>20% الى 40%</strong> خلال السنة الاولى.</li>
          <li>في التصلب المتعدد، تتراوح النسب غالباً بين <strong>40% و80%</strong> حسب شدة المرض وطريقة القياس.</li>
          <li>بعد اصابات النخاع الشوكي، التشنج شائع وقد يتجاوز <strong>60%</strong> في المتابعة الطويلة.</li>
          <li>في الشلل الدماغي، النمط التشنجي هو الاكثر شيوعاً بين الانماط الحركية.</li>
        </ul>
        <p className="mt-3 text-sm text-indigo-800">
          تختلف النسب حسب تعريف التشنج، سلم التقييم المستخدم، ومدة المتابعة.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold text-green-800">مؤشرات العلاج</h2>
        </div>
        <p className="mb-3">يُعالج التشنج عندما يسبب عجزاً وظيفياً او مضاعفات:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>الم، تقلصات ليلية، ارهاق شديد.</li>
          <li>صعوبة المشي، الانتقال، اللباس، النظافة.</li>
          <li>خطر القصر العضلي والتشوهات المفصلية وقرحات الضغط.</li>
          <li>صعوبة الرعاية اليومية (نظافة، جلوس، تموضع).</li>
          <li>وجود هدف واضح: تحسين الوظيفة، الراحة، الاستقلالية.</li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold text-red-800">موانع العلاج والاحتياطات</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>عدم الغاء تشنج مفيد وظيفياً:</strong> احياناً يساعد مؤقتاً في الوقوف او الانتقال.</li>
          <li><strong>الادوية الفموية:</strong> الحذر عند النعاس، انخفاض الضغط، او مشاكل الكبد/الكلى حسب الدواء.</li>
          <li><strong>البوتوكس العضلي:</strong> يُتجنب عند وجود التهاب موضعي او حساسية معروفة، والحذر في الحمل/الرضاعة حسب القرار الطبي.</li>
          <li><strong>مضخة باكلوفين داخل السائل النخاعي:</strong> خيار تخصصي مع متابعة دقيقة لاحتمال فرط الجرعة او الانقطاع المفاجئ.</li>
          <li><strong>الجراحة:</strong> للحالات المنتقاة بعد فشل العلاج المحافظ.</li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-medical-700" size={24} />
          <h2 className="text-2xl font-bold">العلاج: مقاربة متعددة المستويات</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>الترويض الطبي العصبي</strong>
            <p>تمطيط طويل، تحريك مفصلي، تدريب حركي وظيفي، تقوية انتقائية، تدريب مشي، جبائر، وتعليم الاسرة.</p>
          </li>
          <li>
            <strong>معالجة العوامل التي تزيد التشنج</strong>
            <p>الالم، الالتهابات البولية، الامساك، قرحات الضغط، سوء النوم.</p>
          </li>
          <li>
            <strong>العلاج الدوائي</strong>
            <p>مثل باكلوفين وتيزانيدين ودانترولين حسب تقييم الطبيب وتحمل المريض.</p>
          </li>
          <li>
            <strong>حقن البوتوكس</strong>
            <p>مفيد في مجموعات عضلية محددة مع ضرورة دمجه بالترويض للحصول على نتائج افضل.</p>
          </li>
          <li>
            <strong>خيارات متقدمة</strong>
            <p>مضخة باكلوفين داخل السائل النخاعي او تدخلات جراحية مختارة في مراكز متخصصة.</p>
          </li>
        </ol>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="text-slate-700" size={24} />
          <h2 className="text-2xl font-bold text-slate-900">مصادر المعلومات</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-slate-800">
          <li>Lance JW. The control of muscle tone, reflexes, and movement. Neurology. 1980.</li>
          <li>Pandyan AD et al. Spasticity: clinical perceptions and neurological realities. Clin Rehabil. 2005.</li>
          <li>Royal College of Physicians: Adult spasticity management guidance.</li>
          <li>American Academy of Neurology: guidance on botulinum toxin in adult spasticity.</li>
          <li>Cochrane Reviews on post-stroke spasticity interventions.</li>
          <li>European consensus papers on post-stroke spasticity treatment.</li>
          <li>Resources for SCI epidemiology and spasticity management (MSKTC and related clinical references).</li>
        </ul>
        <p className="mt-3 text-sm text-slate-700">
          ملاحظة: تم عرض الاحصائيات على شكل نطاقات تقريبية لان النتائج تختلف حسب المنهجية والسكان المدروسين.
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
      slug: 'sclerose-en-plaque-kinesitherapie',
      titleFr: 'Sclérose en Plaque et Kiné',
      titleAr: 'التصلب المتعدد والترويض الطبي',
      icon: <Activity size={20} className="text-medical-600" />
    },
    {
      slug: 'posture-ergonomie',
      titleFr: 'Posture & Ergonomie',
      titleAr: 'الوضعية والإرغونوميا',
      icon: <Stethoscope size={20} className="text-medical-600" />
    }
  ]
});

export default article;
