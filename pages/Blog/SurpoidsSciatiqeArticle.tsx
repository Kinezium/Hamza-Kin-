import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Scale, CheckCircle, XCircle, Activity, Dumbbell, AlertTriangle, Heart, ArrowUpDown } from 'lucide-react';

const DoCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-start gap-3 bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
    <CheckCircle className="text-green-600 mt-0.5 shrink-0" size={20} />
    <span className="text-green-900">{children}</span>
  </div>
);

const DontCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-start gap-3 bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
    <XCircle className="text-red-500 mt-0.5 shrink-0" size={20} />
    <span className="text-red-900">{children}</span>
  </div>
);

const article = createArticle({
  slug: 'surpoids-et-sciatique',
  titleFr: 'Surpoids et Sciatique : Le Lien Que Vous Ignorez',
  titleAr: 'الوزن الزائد وعرق النسا: العلاقة التي تجهلها',
  descriptionFr:
    'Le surpoids est un facteur aggravant majeur de la sciatique. Découvrez pourquoi les kilos en trop compressent le nerf sciatique et comment la kinésithérapie et la perte de poids soulagent la douleur.',
  descriptionAr:
    'الوزن الزائد عامل مُفاقِم رئيسي لعرق النسا. اكتشف لماذا الكيلوغرامات الزائدة تضغط على العصب الوركي وكيف يُساعد الترويض الطبي وإنقاص الوزن على تخفيف الألم.',
  keywordsFr:
    'surpoids sciatique, obésité nerf sciatique, kiné sciatique, perte de poids sciatique, hernie discale poids, douleur dos jambe poids',
  keywordsAr:
    'الوزن الزائد عرق النسا, السمنة والعصب الوركي, ترويض طبي عرق النسا, إنقاص الوزن عرق النسا, الفتق الغضروفي الوزن',
  imageFr: 'https://picsum.photos/seed/poids-sciatique-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/poids-sciatique-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Scale className="text-yellow-600" size={28} />
          <h2 className="text-2xl font-bold text-yellow-900">La sciatique et le poids : un lien souvent sous-estimé</h2>
        </div>
        <p className="text-yellow-800 leading-relaxed">
          La <strong>sciatique</strong> est une douleur qui irradie du bas du dos jusqu'au pied, suivant le trajet du nerf sciatique.
          Si elle peut toucher des personnes minces, le <strong>surpoids et l'obésité multiplient considérablement le risque</strong> de souffrir de sciatique
          et aggravent la douleur chez ceux qui en souffrent déjà. Comprendre ce lien est la première étape pour mieux se soigner.
        </p>
      </section>

      {/* How weight affects sciatica */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-500" size={24} />
          <h2 className="text-2xl font-bold">Comment le surpoids provoque ou aggrave la sciatique</h2>
        </div>
        <div className="space-y-3">
          {[
            { step: '1', color: 'bg-yellow-100', title: 'Pression accrue sur les disques vertébraux', desc: 'Le surpoids augmente la charge sur les disques lombaires L4-L5 et L5-S1, les plus exposés à la sciatique. Cette pression chronique favorise les hernies discales qui compriment le nerf sciatique.' },
            { step: '2', color: 'bg-orange-100', title: 'Accentuation de la lordose lombaire', desc: 'Les personnes en surpoids développent souvent une cambrure excessive du bas du dos (hyperlordose). Cela rétrécit le canal rachidien et augmente la pression sur les racines nerveuses.' },
            { step: '3', color: 'bg-red-100', title: 'Inflammation systémique', desc: 'Le tissu adipeux en excès libère des cytokines inflammatoires qui augmentent l\'inflammation autour des nerfs et des disques.' },
            { step: '4', color: 'bg-purple-100', title: 'Faiblesse du centre (core)', desc: 'Le surpoids s\'accompagne souvent d\'une faiblesse des muscles abdominaux profonds, qui sont les stabilisateurs naturels de la colonne. Sans eux, la colonne est moins protégée.' },
          ].map(item => (
            <div key={item.step} className={`flex gap-4 p-4 rounded-lg ${item.color}`}>
              <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold shrink-0">{item.step}</div>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">📊 Ce que disent les études</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { number: '2×', label: 'Plus de risque de hernie discale chez les personnes obèses' },
            { number: '35%', label: 'Des sciatiques chroniques s\'améliorent avec la seule perte de poids' },
            { number: 'IMC ≥30', label: 'Corrèle avec une récupération plus lente après une sciatique aiguë' },
          ].map((item, i) => (
            <div key={i} className="text-center bg-white rounded-lg p-4 shadow-sm">
              <p className="text-3xl font-bold text-medical-600">{item.number}</p>
              <p className="text-gray-600 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to DO */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={28} />
          <h2 className="text-2xl font-bold text-green-800">✅ Ce qu'il faut FAIRE</h2>
        </div>
        <div className="space-y-3">
          <DoCard>
            <strong>Commencez par marcher :</strong> La marche douce est le premier exercice recommandé lors d'une sciatique. Elle mobilise le nerf sciatique en douceur et combat le surpoids sans traumatiser les disques.
          </DoCard>
          <DoCard>
            <strong>Renforcez les muscles profonds du dos et du ventre :</strong> Gainage, exercices de Pilates ou de McKenzie renforcent le "corset musculaire" qui protège la colonne et réduit la pression sur les disques.
          </DoCard>
          <DoCard>
            <strong>Perdez du poids progressivement avec l'aide d'un nutritionniste :</strong> Même une perte de 5 % du poids corporel réduit significativement la pression discale lombaire.
          </DoCard>
          <DoCard>
            <strong>Consultez un kinésithérapeute :</strong> Les techniques McKenzie, la thérapie manuelle et les exercices spécialisés permettent de soulager la sciatique même chez les personnes en surpoids.
          </DoCard>
          <DoCard>
            <strong>Pratiquez la natation :</strong> Dans l'eau, la colonne est déchargée de 80 % du poids corporel. La natation est l'exercice idéal pour perdre du poids sans aggraver la sciatique.
          </DoCard>
          <DoCard>
            <strong>Adoptez des positions antalgiques :</strong> Pour dormir, la position fœtale avec un coussin entre les genoux décomprime le nerf sciatique. Pour s'asseoir, choisissez une chaise ergonomique avec soutien lombaire.
          </DoCard>
        </div>
      </section>

      {/* What NOT to do */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-500" size={28} />
          <h2 className="text-2xl font-bold text-red-700">❌ Ce qu'il faut ÉVITER</h2>
        </div>
        <div className="space-y-3">
          <DontCard>
            <strong>Évitez les exercices en flexion du tronc avec surpoids :</strong> Les abdominaux classiques, les courbures en avant sous charge — ils augmentent la pression discale et peuvent aggraver la hernie responsable de la sciatique.
          </DontCard>
          <DontCard>
            <strong>Ne restez pas assis trop longtemps :</strong> La position assise prolongée comprime les disques lombaires. Levez-vous toutes les 30-45 minutes.
          </DontCard>
          <DontCard>
            <strong>Évitez les régimes à jeun ou très restrictifs :</strong> Ils entraînent une perte musculaire qui aggrave la faiblesse du dos. Préférez une alimentation saine et équilibrée.
          </DontCard>
          <DontCard>
            <strong>Ne dormez pas sur le ventre :</strong> Cette position accentue la lordose lombaire et comprime davantage les racines nerveuses lombaires.
          </DontCard>
          <DontCard>
            <strong>Évitez les sports à fort impact :</strong> Course à pied, saut, sports de combat — augmentent la pression discale et le risque de rupture de hernie.
          </DontCard>
          <DontCard>
            <strong>Ne prenez pas de médicaments à long terme sans suivi :</strong> Les anti-inflammatoires soulagent mais ne traitent pas la cause. Un traitement de fond en kinésithérapie est indispensable.
          </DontCard>
        </div>
      </section>

      {/* Diet tips */}
      <section className="bg-green-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-green-900 mb-4">🥗 Alimentation anti-inflammatoire pour la sciatique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: '🐟', text: 'Saumon, sardines, maquereau : riches en oméga-3 anti-inflammatoires' },
            { icon: '🫐', text: 'Myrtilles, cerises : antioxydants naturels qui réduisent l\'inflammation' },
            { icon: '🫚', text: 'Huile d\'olive extra-vierge : source d\'oléocanthal, anti-douleur naturel' },
            { icon: '🌿', text: 'Curcuma avec poivre noir : puissant anti-inflammatoire naturel' },
            { icon: '🥦', text: 'Brocoli, épinards : réduisent l\'inflammation et renforcent les os' },
            { icon: '🚫', text: 'Évitez sucres, fast-food, alcool : pro-inflammatoires aggravant la douleur' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-3 text-sm">
              <span className="text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-medical-50 border-l-4 border-medical-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-xl font-bold text-medical-900">Le message clé</h2>
        </div>
        <p className="text-medical-800 leading-relaxed">
          La sciatique et le surpoids forment un cercle vicieux : la douleur empêche de bouger, l'inactivité favorise la prise de poids, et le poids aggrave la sciatique. Briser ce cycle avec l'aide d'un kinésithérapeute et d'une alimentation adaptée est tout à fait possible, même quand la douleur semble insurmontable. Au Centre Chnider, nous proposons des protocoles adaptés aux patients en surpoids souffrant de sciatique.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-yellow-50 border-r-4 border-yellow-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Scale className="text-yellow-600" size={28} />
          <h2 className="text-2xl font-bold text-yellow-900">عرق النسا والوزن: علاقة مُقلِّلة من شأنها كثيراً</h2>
        </div>
        <p className="text-yellow-800 leading-relaxed">
          <strong>عرق النسا</strong> هو ألم يمتد من أسفل الظهر حتى القدم، تبعاً لمسار العصب الوركي.
          رغم أنه يمكن أن يُصيب أشخاصاً نحيلين، إلا أن <strong>الوزن الزائد والسمنة يُضاعفان خطر الإصابة</strong> بعرق النسا
          ويُفاقمان الألم لدى من يعانون منه مسبقاً. فهم هذه العلاقة هو الخطوة الأولى نحو علاج أفضل.
        </p>
      </section>

      {/* How weight affects sciatica */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-500" size={24} />
          <h2 className="text-2xl font-bold">كيف يُسبب الوزن الزائد أو يُفاقم عرق النسا</h2>
        </div>
        <div className="space-y-3">
          {[
            { step: '1', color: 'bg-yellow-100', title: 'ضغط متزايد على الأقراص الفقرية', desc: 'يزيد الوزن الزائد الحمل على الأقراص القطنية L4-L5 وL5-S1، الأكثر عرضة لعرق النسا. هذا الضغط المزمن يُعزز الفتوق الغضروفية التي تضغط على العصب الوركي.' },
            { step: '2', color: 'bg-orange-100', title: 'تضخيم التقعر القطني', desc: 'يُطور الأشخاص ذوو الوزن الزائد في الغالب تقعراً مفرطاً لأسفل الظهر. يُضيّق هذا القناة الفقرية ويزيد الضغط على جذور الأعصاب.' },
            { step: '3', color: 'bg-red-100', title: 'الالتهاب الجهازي', desc: 'الأنسجة الدهنية الزائدة تُطلق سيتوكينات مُلهِبة تزيد الالتهاب حول الأعصاب والأقراص.' },
            { step: '4', color: 'bg-purple-100', title: 'ضعف مركز الجسم', desc: 'الوزن الزائد يترافق في الغالب مع ضعف عضلات البطن العميقة، المُثبِّتات الطبيعية للعمود الفقري. بدونها، العمود الفقري أقل حماية.' },
          ].map(item => (
            <div key={item.step} className={`flex gap-4 p-4 rounded-lg ${item.color}`}>
              <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold shrink-0">{item.step}</div>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to DO */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={28} />
          <h2 className="text-2xl font-bold text-green-800">✅ ما يجب فعله</h2>
        </div>
        <div className="space-y-3">
          <DoCard>
            <strong>ابدأ بالمشي:</strong> المشي الخفيف هو أول تمرين يُوصى به أثناء عرق النسا. يُحرّك العصب الوركي بلطف ويُحارب الوزن الزائد دون إجهاد الأقراص.
          </DoCard>
          <DoCard>
            <strong>قوّي عضلات الظهر والبطن العميقة:</strong> البلانك، تمارين بيلاتيس أو ماكنزي تُقوي "الكورسيه العضلي" الواقي للعمود وتُقلل الضغط على الأقراص.
          </DoCard>
          <DoCard>
            <strong>أنقص وزنك تدريجياً بمساعدة اختصاصي تغذية:</strong> حتى فقدان 5% من وزن الجسم يُقلل بشكل ملحوظ الضغط على الأقراص القطنية.
          </DoCard>
          <DoCard>
            <strong>استشر معالجاً فيزيائياً:</strong> تقنيات ماكنزي، العلاج اليدوي والتمارين المتخصصة تُخفف عرق النسا حتى لدى الأشخاص ذوي الوزن الزائد.
          </DoCard>
          <DoCard>
            <strong>مارس السباحة:</strong> في الماء، العمود الفقري محمّل بـ 80% أقل من وزن الجسم. السباحة هي التمرين المثالي لإنقاص الوزن دون تفاقم عرق النسا.
          </DoCard>
          <DoCard>
            <strong>اعتمد وضعيات مخففة للألم:</strong> للنوم، الوضعية الجنينية مع وسادة بين الركبتين تُفكّ ضغط العصب الوركي. للجلوس، اختر كرسي مريح مع دعامة قطنية.
          </DoCard>
        </div>
      </section>

      {/* What NOT to do */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-500" size={28} />
          <h2 className="text-2xl font-bold text-red-700">❌ ما يجب تجنبه</h2>
        </div>
        <div className="space-y-3">
          <DontCard>
            <strong>تجنب تمارين ثني الجذع مع زيادة الوزن:</strong> تمارين البطن الكلاسيكية، الانحناءات للأمام تحت حمل — تزيد ضغط الأقراص وقد تُفاقم الفتق المسبب لعرق النسا.
          </DontCard>
          <DontCard>
            <strong>لا تبقَ جالساً فترة طويلة:</strong> الجلوس المطوّل يضغط على الأقراص القطنية. قم كل 30-45 دقيقة.
          </DontCard>
          <DontCard>
            <strong>تجنب الحميات القاسية أو الصيام المفاجئ:</strong> تسبب فقداناً عضلياً يُفاقم ضعف الظهر. فضّل التغذية الصحية المتوازنة.
          </DontCard>
          <DontCard>
            <strong>لا تنَم على بطنك:</strong> هذه الوضعية تُفاقم التقعر القطني وتضغط أكثر على الجذور العصبية القطنية.
          </DontCard>
          <DontCard>
            <strong>تجنب الرياضات عالية التأثير:</strong> الجري، القفز، الرياضات القتالية — تزيد ضغط الأقراص وخطر تمزق الفتق.
          </DontCard>
          <DontCard>
            <strong>لا تعتمد على المسكنات طويلاً دون متابعة:</strong> المضادات للالتهاب تُخفف لكن لا تُعالج السبب. علاج جذري بالترويض الطبي ضروري.
          </DontCard>
        </div>
      </section>

      {/* Diet tips */}
      <section className="bg-green-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-green-900 mb-4">🥗 التغذية المضادة للالتهاب لعرق النسا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: '🐟', text: 'سالمون، سردين، ماكريل: غنية بأوميغا-3 المضادة للالتهاب' },
            { icon: '🫐', text: 'توت أزرق، كرز: مضادات أكسدة طبيعية تُقلل الالتهاب' },
            { icon: '🫚', text: 'زيت زيتون بكر ممتاز: مصدر أوليوكانثال، مُسكن ألم طبيعي' },
            { icon: '🌿', text: 'كركم مع فلفل أسود: مضاد التهاب طبيعي قوي' },
            { icon: '🥦', text: 'بروكلي، سبانخ: يُقللان الالتهاب ويُقوّيان العظام' },
            { icon: '🚫', text: 'تجنب السكريات، الوجبات السريعة، الكحول: مُعززات الالتهاب' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-3 text-sm">
              <span className="text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-medical-50 border-r-4 border-medical-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-xl font-bold text-medical-900">الرسالة الأساسية</h2>
        </div>
        <p className="text-medical-800 leading-relaxed">
          عرق النسا والوزن الزائد يُشكّلان حلقة مفرغة: الألم يمنع الحركة، الخمول يُعزز زيادة الوزن، والوزن يُفاقم عرق النسا. كسر هذه الحلقة بمساعدة معالج فيزيائي وتغذية مناسبة ممكن تماماً، حتى حين يبدو الألم لا يُحتمل. في مركز شنيدر، نقدم بروتوكولات مكيّفة للمرضى ذوي الوزن الزائد المصابين بعرق النسا.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'sciatique-hernie-discale',
      titleFr: 'Sciatique & Hernie Discale',
      titleAr: 'عرق النسا والانزلاق الغضروفي',
      icon: <ArrowUpDown size={20} className="text-medical-600" />
    },
    {
      slug: 'surpoids-douleurs-genou',
      titleFr: 'Surpoids et Genou',
      titleAr: 'الوزن الزائد والركبة',
      icon: <Scale size={20} className="text-medical-600" />
    },
    {
      slug: 'mal-de-dos-bons-gestes-a-eviter',
      titleFr: 'Mal de Dos : À Faire et À Éviter',
      titleAr: 'آلام الظهر: ما يجب فعله وتجنبه',
      icon: <Dumbbell size={20} className="text-medical-600" />
    }
  ]
});

export default article;
