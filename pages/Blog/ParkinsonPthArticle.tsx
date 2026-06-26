import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Brain, AlertTriangle, CheckCircle, Stethoscope, Activity } from 'lucide-react';

const article = createArticle({
  slug: 'parkinson-prothese-hanche-pth',
  titleFr: 'Parkinson et Prothèse de Hanche (PTH): Un Défi Particulier',
  titleAr: 'باركنسون وبدلة الورك الكاملة (PTH): تحدٍّ خاص',
  descriptionFr: 'Quand un patient parkinsonien reçoit une prothèse totale de hanche: spécificités du suivi, risques particuliers, précautions et rôle crucial de la kinésithérapie.',
  descriptionAr: 'حين يتلقى مريض باركنسون بدلة ورك كاملة: خصوصيات المتابعة والمخاطر الخاصة والاحتياطات والدور الحاسم للترويض الطبي.',
  keywordsFr: 'Parkinson prothèse hanche, PTH Parkinson kinésithérapie, rééducation marche Parkinson PTH, risque chute Parkinson prothèse hanche',
  keywordsAr: 'باركنسون بدلة ورك, PTH باركنسون ترويض, تأهيل مشي باركنسون PTH, خطر سقوط باركنسون بدلة ورك',
  imageFr: 'https://picsum.photos/seed/parkinson-pth-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/parkinson-pth-chnider/1600/900',
  readTimeFr: '9 min de lecture',
  readTimeAr: '9 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="text-purple-600" size={26} />
          <h2 className="text-2xl font-bold text-purple-900">Deux pathologies, une seule personne: un défi complexe</h2>
        </div>
        <p className="text-purple-900 leading-relaxed">
          La maladie de Parkinson touche 1% des personnes de plus de 60 ans. Avec le vieillissement de la population,
          de nombreux patients parkinsoniens développent aussi une <strong>coxarthrose</strong> (arthrose de la hanche)
          nécessitant une <strong>PTH (Prothèse Totale de Hanche)</strong>. La combinaison de ces deux conditions
          crée un défi réel pour la rééducation: les protocoles standard ne s'appliquent pas directement.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Brain className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Rappel: La maladie de Parkinson et ses impacts sur la rééducation</h2>
        </div>
        <p className="mb-3">La maladie de Parkinson est une maladie neurodégénérative affectant principalement le contrôle moteur:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="font-bold text-purple-800 mb-2">Symptômes moteurs qui compliquent la PTH</h3>
            <ul className="list-disc pl-4 space-y-1 text-purple-900 text-sm">
              <li>Rigidité musculaire (hypertonie extrapyramidale)</li>
              <li>Bradykinésie (lenteur des mouvements)</li>
              <li>Tremblements de repos</li>
              <li>Instabilité posturale (risque de chute élevé)</li>
              <li>Festination (petits pas rapides incontrôlables)</li>
              <li>Blocages à la marche (freezing of gait)</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-800 mb-2">Impact sur la rééducation PTH</h3>
            <ul className="list-disc pl-4 space-y-1 text-red-900 text-sm">
              <li>Risque de luxation PTH augmenté par rigidité et instabilité</li>
              <li>Apprentissage moteur ralenti (bradykinésie + troubles cognitifs)</li>
              <li>Fatigue plus rapide pendant les séances</li>
              <li>Difficulté à respecter les précautions post-op</li>
              <li>Médication dopaminergique à synchroniser avec la kiné</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">Risques spécifiques Parkinson + PTH</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-red-50 border border-red-300 rounded-lg p-4">
            <h3 className="font-bold text-red-800 mb-1">🔴 Luxation de prothèse</h3>
            <p className="text-red-900 text-sm">La rigidité musculaire et les mouvements involontaires augmentent le risque de luxation (dislocation de la prothèse). La voie d'abord chirurgicale détermine les précautions:</p>
            <ul className="list-disc pl-4 mt-1 text-red-900 text-sm">
              <li>Voie postérieure: ne pas fléchir la hanche &gt; 90°, pas d'adduction, pas de rotation interne</li>
              <li>Voie antérieure: moins de restrictions, mais précautions d'hyperextension</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
            <h3 className="font-bold text-amber-800 mb-1">🟡 Chute post-opératoire</h3>
            <p className="text-amber-900 text-sm">Le risque de chute chez le parkinsonien est 10× plus élevé que dans la population générale. Une chute post-PTH peut fracturer le cotyle ou luxer la prothèse. La gestion du freezing est prioritaire.</p>
          </div>
          <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-1">🔵 Surcharge des membres sains</h3>
            <p className="text-blue-900 text-sm">La compensation de la boiterie parkinsonienne sur l'autre membre peut accélérer l'arthrose controlatérale et créer des douleurs au rachis.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Principes de rééducation adaptée Parkinson + PTH</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Synchroniser avec la médication:</strong> programmer les séances de kiné dans la fenêtre "ON" de la lévodopa (1-3h après la prise). La rigidité est moindre, l'apprentissage moteur est meilleur.
          </li>
          <li>
            <strong>Séances courtes et fréquentes:</strong> 30 min × 2/jour plutôt qu'une heure × 1/jour. La fatigue cognitive et physique du patient parkinsonien s'installe vite.
          </li>
          <li>
            <strong>Indices visuels et auditifs (cueing):</strong> raies au sol, métronome, comptage vocal — indispensables pour contourner le freezing et améliorer le patron de marche.
          </li>
          <li>
            <strong>Travail de l'équilibre en priorité:</strong> avant même le renforcement, stabiliser le patient debout pour sécuriser les transferts.
          </li>
          <li>
            <strong>Éducation des aidants:</strong> comment aider lors des transferts, comment gérer un épisode de freezing, précautions à la maison.
          </li>
          <li>
            <strong>Double-tâche progressive:</strong> marcher + parler, marcher + porter un verre — le patient parkinsonien perd facilement la coordination en situation de double-tâche.
          </li>
        </ol>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">Rôle primordial de la kinésithérapie</h2>
        </div>
        <p className="mb-3 text-emerald-900 font-medium">Dans cette situation complexe, la kinésithérapie n'est pas optionnelle — elle est le cœur du traitement:</p>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>Phase hospitalière:</strong> mobilisation précoce J1, apprentissage des précautions anti-luxation, premiers transferts sécurisés.</li>
          <li><strong>Rééducation orthopédique:</strong> renforcement du quadriceps et des abducteurs, amplitude articulaire, cicatrisation.</li>
          <li><strong>Rééducation neurologique:</strong> travail du patron de marche parkinsonien, équilibre, gestion du freezing, cueing.</li>
          <li><strong>Coordination pluridisciplinaire:</strong> travail avec neurologue, médecin MPR, ergothérapeute pour l'adaptation du domicile.</li>
          <li><strong>Suivi long terme:</strong> la maladie de Parkinson est évolutive — la kiné accompagne sur le long terme, pas seulement les 3 premiers mois post-op.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">Le kiné qui accompagne un patient Parkinson + PTH doit avoir des connaissances en rééducation neurologique ET orthopédique. C'est une prise en charge transversale qui exige expérience et formation continue.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-purple-50 border-r-4 border-purple-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="text-purple-600" size={26} />
          <h2 className="text-2xl font-bold text-purple-900">مرضان في شخص واحد: تحدٍّ مركّب</h2>
        </div>
        <p className="text-purple-900 leading-relaxed">
          مرض باركنسون يُصيب 1% من الأشخاص فوق 60 سنة. مع تقدم العمر، كثير من مرضى باركنسون يطورون أيضًا
          <strong> التهابًا مزمنًا في مفصل الورك</strong> يستلزم <strong>بدلة ورك كاملة (PTH)</strong>.
          الجمع بين هذين الحالتين يُشكّل تحديًا حقيقيًا للتأهيل: البروتوكولات المعيارية لا تنطبق مباشرة.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">المخاطر الخاصة لباركنسون + بدلة الورك</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-red-50 border border-red-300 rounded-lg p-4">
            <h3 className="font-bold text-red-800 mb-1">🔴 خلع البدلة</h3>
            <p className="text-red-900 text-sm">التصلب العضلي والحركات اللاإرادية تزيد خطر خلع البدلة. الاحتياطات حسب منهج الجراحة:</p>
            <ul className="list-disc pl-4 mt-1 text-red-900 text-sm">
              <li>المنهج الخلفي: لا ثني للورك &gt; 90°، لا تقريب، لا دوران داخلي</li>
              <li>المنهج الأمامي: قيود أقل، لكن احتياطات فرط الامتداد</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
            <h3 className="font-bold text-amber-800 mb-1">🟡 السقوط بعد العملية</h3>
            <p className="text-amber-900 text-sm">خطر السقوط عند مريض باركنسون أعلى 10 أضعاف من عموم السكان. السقطة بعد PTH قد تكسر الكوب أو تُخلع البدلة. إدارة التجمد الحركي أولوية.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">مبادئ التأهيل المكيّف باركنسون + بدلة الورك</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>التزامن مع الدواء:</strong> جدولة جلسات الترويض في نافذة "ON" للإيفودوبا (1-3 ساعة بعد الجرعة). التصلب أقل، التعلم الحركي أفضل.
          </li>
          <li>
            <strong>جلسات قصيرة ومتكررة:</strong> 30 دقيقة × مرتين يوميًا بدلًا من ساعة واحدة. التعب المعرفي والجسدي لمريض باركنسون يظهر بسرعة.
          </li>
          <li>
            <strong>الإشارات البصرية والسمعية (Cueing):</strong> خطوط على الأرض، ميترونوم، عدّ صوتي — لا غنى عنها لتجاوز التجمد وتحسين نمط المشي.
          </li>
          <li>
            <strong>تدريب التوازن أولًا:</strong> قبل التقوية، استقرار المريض واقفًا لتأمين التنقلات.
          </li>
          <li>
            <strong>تعليم المرافقين:</strong> كيفية المساعدة في التنقلات، إدارة نوبات التجمد، الاحتياطات في المنزل.
          </li>
        </ol>
      </section>

      <section className="bg-emerald-50 border-r-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">الدور المحوري للترويض الطبي</h2>
        </div>
        <p className="mb-3 text-emerald-900 font-medium">في هذا الوضع المركّب، الترويض الطبي ليس اختياريًا — إنه قلب العلاج:</p>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>المرحلة المستشفوية:</strong> تحريك مبكر من اليوم الأول، تعلم احتياطات منع الخلع، أول انتقالات آمنة.</li>
          <li><strong>التأهيل العظمي:</strong> تقوية عضلة رباعية الرؤوس ومبعدات الورك، نطاق الحركة، الالتئام.</li>
          <li><strong>التأهيل العصبي:</strong> نمط مشي باركنسون، توازن، إدارة التجمد، تقنيات الإشارة.</li>
          <li><strong>تنسيق متعدد الاختصاصات:</strong> مع طبيب الأعصاب وطبيب التأهيل والمعالج الوظيفي.</li>
          <li><strong>متابعة طويلة الأمد:</strong> مرض باركنسون تطوري — الترويض يرافق على المدى البعيد.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">المعالج الذي يتابع مريض باركنسون + بدلة ورك يجب أن يتقن التأهيل العصبي والعظمي معًا. متابعة متقاطعة تستلزم خبرة وتكوينًا مستمرًا.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'readaptation-post-avc', titleFr: 'Réadaptation Post-AVC', titleAr: 'إعادة التأهيل ما بعد الجلطة', icon: <Brain size={20} className="text-medical-600" /> },
    { slug: 'spasticite-definition-traitement-indications', titleFr: 'Spasticité: traitement', titleAr: 'التشنج العضلي: العلاج', icon: <Activity size={20} className="text-medical-600" /> },
    { slug: 'urgence-kine-parents-seniors', titleFr: 'Kiné pour les seniors', titleAr: 'الترويض لكبار السن', icon: <CheckCircle size={20} className="text-medical-600" /> }
  ]
});

export default article;
