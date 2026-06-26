import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Bone, AlertTriangle, CheckCircle, Stethoscope, Activity } from 'lucide-react';

const article = createArticle({
  slug: 'deformation-pieds',
  titleFr: 'Déformations des Pieds: Types, Causes et Traitement',
  titleAr: 'تشوهات القدمين: الأنواع والأسباب والعلاج',
  descriptionFr: 'Pied plat, pied creux, hallux valgus, pied bot, déformations des orteils: causes, conséquences sur la marche et rôle de la kinésithérapie et de la podologie.',
  descriptionAr: 'القدم المسطحة، القدم المجوفة، إبهام القدم الأعرج، القدم الحنفاء، تشوهات الأصابع: الأسباب والتأثيرات على المشي ودور الترويض الطبي وطب القدم.',
  keywordsFr: 'déformation pied, pied plat traitement, pied creux douleur, hallux valgus, orteils en griffe marteau, semelles orthopédiques',
  keywordsAr: 'تشوه القدم, قدم مسطحة علاج, قدم مجوفة ألم, إبهام أعرج hallux valgus, أصابع مخلبية, نعال بيوميكانيكية',
  imageFr: 'https://picsum.photos/seed/deformation-pied-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/deformation-pied-chnider/1600/900',
  readTimeFr: '9 min de lecture',
  readTimeAr: '9 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Bone className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">Le pied: une architecture complexe et fragile</h2>
        </div>
        <p className="text-blue-900 leading-relaxed">
          Le pied contient <strong>26 os, 33 articulations et plus de 100 muscles, tendons et ligaments</strong>.
          Il supporte en moyenne 3-5× le poids du corps à la marche et jusqu'à 8× à la course.
          Une déformation du pied, même légère, peut entraîner des douleurs remontant jusqu'au genou, à la hanche et au dos.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">Les principales déformations</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              nom: 'Pied plat (valgus du pied)',
              desc: 'L\'arche interne (voûte plantaire) est effondrée. Le talon dévie vers l\'extérieur. Très fréquent chez l\'enfant (normal avant 3 ans). Chez l\'adulte: souvent secondaire à l\'obésité, grossesse, insuffisance musculaire.',
              symptomes: 'Douleur interne de la cheville, fatigue du pied, genoux en valgus ("genoux en X").',
              traitement: 'Renforcement des intrinsèques, semelles orthopédiques, kiné.',
              color: 'blue'
            },
            {
              nom: 'Pied creux (cavus)',
              desc: 'Voûte plantaire très marquée, souvent héréditaire. Les orteils "griffent". Le pied supine à la marche.',
              symptomes: 'Douleur du métatarse, métatarsalgies, cors, entorses de cheville à répétition, syndrome IT band.',
              traitement: 'Semelles sur mesure, chaussure cushioning, étirements des fascias, kiné.',
              color: 'purple'
            },
            {
              nom: 'Hallux valgus (oignon)',
              desc: 'Déviation du gros orteil vers les autres. Bosse osseuse douloureuse sur le côté interne du pied. Favorisé par chaussures étroites, hauts talons, hérédité.',
              symptomes: 'Douleur, inflammation de la bourse, difficultés à chausser.',
              traitement: 'Semelles, orthèses inter-orteils, kiné, chirurgie si sévère.',
              color: 'red'
            },
            {
              nom: 'Orteils en marteau / en griffe',
              desc: 'Déformation en flexion d\'un ou plusieurs orteils. Souvent associé à pied creux ou chaussures trop courtes.',
              symptomes: 'Cors sur le dessus des orteils, douleur au bout du pied.',
              traitement: 'Orthèses correctrices, chaussage adapté, kinésithérapie, chirurgie si rigide.',
              color: 'amber'
            },
            {
              nom: 'Métatarsalgie',
              desc: 'Douleur sous l\'avant-pied, souvent sous les métatarses. Liée à une mauvaise répartition des pressions.',
              symptomes: 'Douleur brûlante sous le pied, augmentant à la marche prolongée.',
              traitement: 'Semelles à retrocapital, chaussage adapté, kiné pour muscles intrinsèques.',
              color: 'green'
            },
          ].map(({ nom, desc, symptomes, traitement, color }) => (
            <div key={nom} className={`border-l-4 border-${color}-400 bg-${color}-50 rounded-lg p-4`}>
              <h3 className={`font-bold text-${color}-900 text-lg mb-1`}>{nom}</h3>
              <p className={`text-${color}-900 text-sm mb-1`}><strong>Description:</strong> {desc}</p>
              <p className={`text-${color}-900 text-sm mb-1`}><strong>Symptômes:</strong> {symptomes}</p>
              <p className={`text-${color}-900 text-sm`}><strong>Traitement:</strong> {traitement}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Impact sur tout le corps: la chaîne biomécanique</h2>
        </div>
        <p className="mb-3">Le pied est la fondation du corps. Une déformation du pied peut créer une cascade de problèmes:</p>
        <div className="bg-slate-50 rounded-lg p-4">
          <p className="font-medium text-center mb-3 text-gray-700">⬇️ Chaîne d'impact du pied plat/valgus:</p>
          <div className="space-y-1 text-center text-sm">
            {['Pied plat/valgus', '↓', 'Rotation interne du tibia', '↓', 'Genou en valgus ("genou qui rentre")', '↓', 'Rotation du fémur', '↓', 'Bascule du bassin', '↓', 'Douleurs lombaires'].map((item) => (
              <p key={item} className={item === '↓' ? 'text-gray-400' : 'font-medium text-gray-800'}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">Rôle primordial de la kinésithérapie</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>Bilan podologique fonctionnel:</strong> analyse de la marche, mesure des pressions plantaires, évaluation de la chaîne biomécanique.</li>
          <li><strong>Renforcement des muscles intrinsèques:</strong> exercices du pied (serviette avec les orteils, billes, pointes, talons).</li>
          <li><strong>Étirements spécifiques:</strong> fascia plantaire, soléaire, tendon d'Achille — selon le type de déformation.</li>
          <li><strong>Travail proprioceptif:</strong> améliorer le contrôle neuromusculaire du pied.</li>
          <li><strong>Correction des compensations:</strong> traiter aussi le genou, la hanche et le dos souvent impactés.</li>
          <li><strong>Collaboration avec podologue:</strong> prescription de semelles sur mesure quand nécessaire.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">Une déformation des pieds n'est pas une fatalité — avec le bon programme de kiné et le bon chaussage, on peut considérablement améliorer la fonction et réduire la douleur.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Bone className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">القدم: هندسة معقدة وحساسة</h2>
        </div>
        <p className="text-blue-900 leading-relaxed">
          القدم تحتوي على <strong>26 عظمة، 33 مفصلًا، وأكثر من 100 عضلة ووتر ورباط</strong>.
          تتحمل في المتوسط 3-5 أضعاف وزن الجسم عند المشي وحتى 8 أضعاف عند الركض.
          تشوه القدم، حتى الطفيف منه، قد يُسبب آلامًا تمتد إلى الركبة والورك وأسفل الظهر.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">التشوهات الرئيسية</h2>
        </div>
        <div className="space-y-4">
          {[
            { nom: 'القدم المسطحة (الانهيار الوسطي)', desc: 'القوس الداخلي منهار. الكعب ينحرف للخارج. شائع جدًا عند الأطفال (طبيعي قبل 3 سنوات). عند البالغين: غالبًا بسبب السمنة أو الحمل أو ضعف العضلات.', symptomes: 'ألم داخلي في الكاحل، تعب القدم، ركبتان منفرجتان للخارج.', traitement: 'تقوية العضلات الداخلية، نعال بيوميكانيكية، ترويض طبي.', color: 'blue' },
            { nom: 'القدم المجوفة (Cavus)', desc: 'قوس خضعي شديد، كثيرًا ما يكون وراثيًا. الأصابع "تتمخلب". القدم تميل للخارج في المشي.', symptomes: 'ألم بين مشطيات القدم، التواءات متكررة، كالو.', traitement: 'نعال مخصصة، حذاء بتخميد عالٍ، ترويض طبي.', color: 'purple' },
            { nom: 'إبهام أعرج (Hallux valgus)', desc: 'انحراف إبهام القدم نحو الأصابع الأخرى. نتوء عظمي مؤلم في الجانب الداخلي. يُحرّضه الحذاء الضيق والكعب العالي والوراثة.', symptomes: 'ألم، التهاب الجراب، صعوبة اختيار الحذاء.', traitement: 'نعال، أدوات تصحيحية، ترويض، جراحة إن كان شديدًا.', color: 'red' },
            { nom: 'أصابع مخلبية أو مطرقية', desc: 'تشوه انثناء إصبع أو أكثر. غالبًا مصحوب بقدم مجوفة أو حذاء قصير.', symptomes: 'كالو على ظهر الأصابع، ألم في طرف القدم.', traitement: 'أدوات تصحيحية، حذاء مناسب، ترويض طبي، جراحة إن كان صلبًا.', color: 'amber' },
          ].map(({ nom, desc, symptomes, traitement, color }) => (
            <div key={nom} className={`border-r-4 border-${color}-400 bg-${color}-50 rounded-lg p-4`}>
              <h3 className={`font-bold text-${color}-900 text-lg mb-1`}>{nom}</h3>
              <p className={`text-${color}-900 text-sm mb-1`}><strong>الوصف:</strong> {desc}</p>
              <p className={`text-${color}-900 text-sm mb-1`}><strong>الأعراض:</strong> {symptomes}</p>
              <p className={`text-${color}-900 text-sm`}><strong>العلاج:</strong> {traitement}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50 border-r-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">الدور المحوري للترويض الطبي</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>تقييم وظيفي للقدم:</strong> تحليل المشي، قياس الضغوط الخضعية، تقييم السلسلة الميكانيكية الحيوية.</li>
          <li><strong>تقوية العضلات الداخلية للقدم:</strong> تمارين خاصة (منشفة بالأصابع، رخام، مشي على الأصابع).</li>
          <li><strong>تمطيط نوعي:</strong> اللفافة الخضعية، النعل، وتر أخيل — حسب نوع التشوه.</li>
          <li><strong>تصحيح التعويضات:</strong> معالجة الركبة والورك وأسفل الظهر كذلك.</li>
          <li><strong>تعاون مع طبيب القدم:</strong> وصف نعال مخصصة عند الحاجة.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">تشوه القدم ليس قدرًا محتومًا — ببرنامج ترويض صحيح وحذاء مناسب، يمكن تحسين الوظيفة بشكل كبير وتقليل الألم.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'hallux-valgus-kinesitherapie', titleFr: 'Hallux valgus: traitement', titleAr: 'إبهام القدم الأعرج: العلاج', icon: <Bone size={20} className="text-medical-600" /> },
    { slug: 'choisir-chaussures-running', titleFr: 'Choisir ses chaussures de running', titleAr: 'اختيار حذاء الركض', icon: <Activity size={20} className="text-medical-600" /> },
    { slug: 'epine-calcanienne-sans-ondes-de-choc', titleFr: 'Épine calcanéenne', titleAr: 'الشوكة العقبية', icon: <CheckCircle size={20} className="text-medical-600" /> }
  ]
});

export default article;
