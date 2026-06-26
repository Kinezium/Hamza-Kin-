import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Stethoscope, CheckCircle, AlertTriangle, Activity, Zap } from 'lucide-react';

const article = createArticle({
  slug: 'choisir-chaussures-running',
  titleFr: 'Comment Choisir ses Chaussures de Running: Guide Complet',
  titleAr: 'كيف تختار حذاء الركض: الدليل الشامل',
  descriptionFr: 'Pronation, supination, type de foulée, drop, amorti: comment choisir les bonnes chaussures de course pour éviter les blessures. Guide du kiné pour les coureurs.',
  descriptionAr: 'التكوير الداخلي، الخارجي، نمط الخطو، الارتفاع، التخميد: كيف تختار الحذاء الصحيح للركض لتجنب الإصابات. دليل المعالج الفيزيائي للعدّاءين.',
  keywordsFr: 'choisir chaussures running, chaussures course pied, pronation supination, drop chaussure course, blessures running chaussures',
  keywordsAr: 'اختيار حذاء ركض, حذاء عدو, pronation supination القدم, drop الحذاء, إصابات الركض والحذاء',
  imageFr: 'https://picsum.photos/seed/chaussures-running-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/chaussures-running-chnider/1600/900',
  readTimeFr: '8 min de lecture',
  readTimeAr: '8 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-orange-600" size={26} />
          <h2 className="text-2xl font-bold text-orange-900">La chaussure: première cause de blessure chez le coureur</h2>
        </div>
        <p className="text-orange-900 leading-relaxed">
          Une mauvaise chaussure de running est responsable de <strong>30-40% des blessures</strong> chez les coureurs amateurs.
          Syndrome de l'essuie-glace, périostite tibiale, douleur au genou, fasciite plantaire...
          La plupart auraient pu être évitées avec le bon chaussant.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Comprendre sa foulée: pronation, supination, neutre</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-blue-800">Foulée neutre (la plus commune, ~40% des coureurs)</h3>
            <p className="text-blue-900 text-sm">L'amortissement se répartit uniformément. L'usure de la semelle est régulière. → Chaussure "neutre" standard.</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-800">Pronation excessive (pied qui s'effondre vers l'intérieur)</h3>
            <p className="text-red-900 text-sm">Usure plus importante du côté interne de la semelle. Risques: tendinopathie tibiale postérieure, douleur interne du genou, fasciite plantaire. → Chaussure de "contrôle de mouvement" ou "stabilité".</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <h3 className="font-bold text-amber-800">Supination / sous-pronation (pied qui roule vers l'extérieur)</h3>
            <p className="text-amber-900 text-sm">Moins fréquente (~10% des coureurs). Usure du côté externe. Risques: entorse de cheville, syndrome bandelette ilio-tibiale, douleur externe genou. → Chaussure "cushioning" (très amortissante).</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-purple-600" size={24} />
          <h2 className="text-2xl font-bold">Les critères clés de choix</h2>
        </div>
        <div className="space-y-3">
          {[
            {
              critere: '1. Le drop (différence talon-avant pied)',
              explication: 'Drop élevé (8-12mm): recommandé aux coureurs avec tendinopathie d\'Achille ou douleurs postérieures. Drop faible (0-4mm): pour foulée avant-pied. Transition très progressive si vous changez de drop!',
            },
            {
              critere: '2. L\'amorti',
              explication: 'Léger (minimaliste): sensation de sol, proprioception maximale. Idéal pour coureurs légers et expérimentés. Maximaliste: protection maximale pour longues distances et pieds fragiles. Standard: polyvalent, recommandé débutants.',
            },
            {
              critere: '3. La largeur de l\'avant-pied',
              explication: 'Un avant-pied trop serré = hallux valgus, cors, névrome de Morton. Idéalement: un doigt d\'espace entre l\'orteil et le bout de la chaussure. La pointure doit souvent être 0,5 à 1 taille au-dessus de la chaussure de ville (les pieds gonflent à l\'effort).',
            },
            {
              critere: '4. Le type de sol',
              explication: 'Route: semelle lisse, amorti. Trail: crampons, protection latérale. Piste: légèreté maximale, semelle plate.',
            },
            {
              critere: '5. Le poids corporel',
              explication: 'Plus le coureur est lourd, plus il a besoin d\'amorti. Les chaussures minimalistes ne conviennent pas aux coureurs de plus de 80-90 kg débutants.',
            },
          ].map(({ critere, explication }) => (
            <div key={critere} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-medical-800 mb-1">{critere}</h3>
              <p className="text-gray-700 text-sm">{explication}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold">Les erreurs classiques à éviter</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li>❌ Choisir "la même marque que le champion" sans analyse de foulée</li>
          <li>❌ Acheter en ligne sans essai — la sensation est critique</li>
          <li>❌ Garder ses chaussures au-delà de 600-800 km (l'amorti s'use sans que la semelle s'use visuellement)</li>
          <li>❌ Transitionner trop vite vers chaussure minimaliste</li>
          <li>❌ Ignorer la douleur en pensant que "la chaussure va se faire"</li>
          <li>❌ Courir avec des chaussures de sport casual (Adidas Superstar, Nike Air Force) — elles ne sont pas faites pour ça</li>
        </ul>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">Rôle primordial de la kinésithérapie</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>Analyse de foulée:</strong> le kiné évalue la pronation/supination, le contact initial, la symétrie du pas.</li>
          <li><strong>Bilan biomécanique:</strong> raideurs de cheville, valgus de genou, déséquibres musculaires — qui déterminent souvent le type de chaussure.</li>
          <li><strong>Semelles orthopédiques:</strong> quand la chaussure seule ne suffit pas, une semelle sur mesure compense les défauts anatomiques.</li>
          <li><strong>Travail musculaire complémentaire:</strong> renforcement des intrinsèques du pied, stabilisateurs de cheville — pour que le pied lui-même soit plus robuste.</li>
          <li><strong>Conseil personnalisé:</strong> le kiné connaît votre pied, votre pratique, votre historique de blessures. Son conseil vaut mieux que celui du vendeur en magasin.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">La meilleure chaussure du monde ne compense pas un pied faible, une foulée défaillante ou un programme d'entraînement inadapté. Le travail du kiné commence là où la chaussure s'arrête.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-orange-50 border-r-4 border-orange-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-orange-600" size={26} />
          <h2 className="text-2xl font-bold text-orange-900">الحذاء: السبب الأول للإصابة عند العدّاءين</h2>
        </div>
        <p className="text-orange-900 leading-relaxed">
          الحذاء الخاطئ للركض مسؤول عن <strong>30-40% من الإصابات</strong> عند العدّاءين الهواة.
          الغالبية كانت يمكن تجنبها بالاختيار الصحيح للحذاء.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">فهم خطوتك: التكوير الداخلي والخارجي والمحايد</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-blue-800">خطوة محايدة (~40% من العدّاءين)</h3>
            <p className="text-blue-900 text-sm">توزيع التخميد بالتساوي. تآكل منتظم للنعل. → حذاء "محايد" معياري.</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-800">التكوير الداخلي المفرط (Pronation - القدم تنهار للداخل)</h3>
            <p className="text-red-900 text-sm">تآكل أكبر من الجانب الداخلي. مخاطر: التهاب الوتر الظنبوبي الخلفي، ألم داخلي في الركبة، التهاب اللفافة الخضعية. → حذاء "تحكم في الحركة" أو "استقرار".</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <h3 className="font-bold text-amber-800">التكوير الخارجي (Supination - القدم تميل للخارج)</h3>
            <p className="text-amber-900 text-sm">أقل شيوعًا (~10%). تآكل من الجانب الخارجي. مخاطر: التواء الكاحل، ألم خارجي في الركبة. → حذاء "تخميد عالٍ".</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-purple-600" size={24} />
          <h2 className="text-2xl font-bold">معايير الاختيار الأساسية</h2>
        </div>
        <div className="space-y-3">
          {[
            { critere: '1. الفارق الارتفاعي (Drop)', explication: 'مرتفع (8-12mm): مُوصى به لمن يعانون من التهاب وتر أخيل. منخفض (0-4mm): للجري على مقدمة القدم. الانتقال يجب أن يكون تدريجيًا جدًا!' },
            { critere: '2. التخميد', explication: 'خفيف (مينيمالي): إحساس بالأرض، حس عميق أقصى. للعدّاءين الخفيفين والمتمرسين. أقصى تخميد: حماية قصوى للمسافات الطويلة والأقدام الهشة.' },
            { critere: '3. عرض مقدمة الحذاء', explication: 'مقدمة ضيقة جدًا = hallux valgus، كالو، عقدة مورتون. المثالي: مسافة إصبع بين أطراف الأصابع وطرف الحذاء. الحجم كثيرًا ما يكون 0.5-1 أكبر من حذاء الشارع (القدمان تنتفخان بالجهد).' },
            { critere: '4. نوع السطح', explication: 'طريق مُعبّد: نعل أملس، تخميد. ترايل: مشابك، حماية جانبية. مضمار: خفة قصوى، نعل مسطح.' },
            { critere: '5. الوزن الجسماني', explication: 'كلما كان العدّاء أثقل، احتاج تخميدًا أكبر. الأحذية المينيمالية لا تناسب المبتدئين فوق 80-90 كغ.' },
          ].map(({ critere, explication }) => (
            <div key={critere} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-medical-800 mb-1">{critere}</h3>
              <p className="text-gray-700 text-sm">{explication}</p>
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
          <li><strong>تحليل نمط الخطو:</strong> المعالج يُقيّم التكوير والتصادم الأولي وتناسق الخطوة.</li>
          <li><strong>تقييم ميكانيكي حيوي:</strong> تصلب الكاحل، انفراج الركبة، اختلالات عضلية — تُحدد نوع الحذاء المناسب.</li>
          <li><strong>نعال بيوميكانيكية:</strong> حين الحذاء وحده لا يكفي، نعل مخصص يُعوّض العيوب التشريحية.</li>
          <li><strong>تقوية عضلات القدم:</strong> تقوية العضلات الداخلية للقدم ومثبتات الكاحل — لتكون القدم ذاتها أكثر صلابة.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">أفضل حذاء في العالم لا يُعوّض قدمًا ضعيفة أو خطوة معيبة أو برنامج تدريب غير مناسب. عمل المعالج يبدأ من حيث ينتهي الحذاء.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'deformation-pieds', titleFr: 'Déformations des pieds', titleAr: 'تشوهات القدمين', icon: <Stethoscope size={20} className="text-medical-600" /> },
    { slug: 'chaussures-douleur-genou', titleFr: 'Chaussures et douleur au genou', titleAr: 'الأحذية وألم الركبة', icon: <Zap size={20} className="text-medical-600" /> },
    { slug: 'epine-calcanienne-sans-ondes-de-choc', titleFr: 'Épine calcanéenne sans ondes de choc', titleAr: 'الشوكة العقبية بدون موجات صوتية', icon: <Activity size={20} className="text-medical-600" /> }
  ]
});

export default article;
