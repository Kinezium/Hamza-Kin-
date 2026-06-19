import React from 'react';
import { createArticle } from './ArticleTemplate';
import { CheckCircle, XCircle, Activity, Bone, AlertTriangle, Heart, Dumbbell, Scale } from 'lucide-react';

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
  slug: 'chaussures-douleur-genou',
  titleFr: 'Chaussures et Genou : L\'Impact Méconnu sur la Douleur',
  titleAr: 'الأحذية وألم الركبة: التأثير الخفي على مفاصلك',
  descriptionFr:
    'Vos chaussures influencent directement la santé de vos genoux. Découvrez quels types de chaussures protègent le genou, lesquels l\'aggravent et comment bien choisir sa chaussure pour éviter la douleur.',
  descriptionAr:
    'أحذيتك تؤثر مباشرة على صحة ركبتيك. اكتشف أي أنواع الأحذية تحمي الركبة وأيها يُفاقمها وكيف تختار الحذاء الصحيح لتجنب الألم.',
  keywordsFr:
    'chaussures genou, douleur genou chaussures, semelles genou, chaussures arthrose genou, kiné genou, protection genou',
  keywordsAr:
    'الأحذية والركبة, آلام الركبة الأحذية, نعل الحذاء الركبة, أحذية مناسبة للركبة, ترويض طبي ركبة, خشونة الركبة أحذية',
  imageFr: 'https://picsum.photos/seed/chaussures-genou-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/chaussures-genou-chnider/1600/900',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Activity className="text-indigo-600" size={28} />
          <h2 className="text-2xl font-bold text-indigo-900">Vos chaussures, premiers responsables ?</h2>
        </div>
        <p className="text-indigo-800 leading-relaxed">
          La plupart des gens ne font pas le lien entre leurs chaussures et leurs douleurs de genoux.
          Pourtant, <strong>le pied est la fondation du corps</strong>. Une mauvaise chaussure modifie l'alignement du genou,
          augmente les contraintes sur le cartilage et peut, à long terme, précipiter ou aggraver l'arthrose.
          À l'inverse, la bonne chaussure peut considérablement soulager un genou douloureux.
        </p>
      </section>

      {/* How shoes affect the knee */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Bone className="text-gray-600" size={24} />
          <h2 className="text-2xl font-bold">Comment vos chaussures affectent vos genoux</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: '📐', title: 'Alignement en chaîne', desc: 'Le pied, la cheville, le genou et la hanche forment une chaîne. Une mauvaise orientation du pied (pronation ou supination) modifie l\'angle du genou à chaque pas.' },
            { icon: '💥', title: 'Absorption des chocs', desc: 'Le genou absorbe les impacts à la marche. Une semelle sans amorti transmet tous ces chocs directement au cartilage.' },
            { icon: '⚖️', title: 'Distribution du poids', desc: 'Certaines chaussures déplacent le centre de gravité et surchargent l\'un des compartiments du genou (interne ou externe).' },
            { icon: '🦶', title: 'Posture du pied', desc: 'Un pied plat ou creux mal soutenu entraîne des compensations dans le genou, la hanche et le dos.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shoe types */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🔍 Quels types de chaussures pour quels effets sur le genou ?</h2>
        <div className="space-y-3">
          {[
            { type: 'Talons hauts (>5 cm)', effect: '❌ Dangereux', color: 'bg-red-50 border-red-300', desc: 'Augmentent la contrainte sur la rotule et les ligaments croisés. À port régulier, accélèrent l\'arthrose fémoro-patellaire.' },
            { type: 'Semelles plates rigides (certaines ballerines)', effect: '⚠️ À risque', color: 'bg-orange-50 border-orange-300', desc: 'Aucun amorti = tous les impacts transmis au genou. À éviter pour la marche prolongée.' },
            { type: 'Chaussures de running avec bon amorti', effect: '✅ Recommandées', color: 'bg-green-50 border-green-300', desc: 'Absorbent les chocs et guident le pied. Idéales pour protéger les genoux lors de l\'activité physique.' },
            { type: 'Chaussures à semelles compensées latérales', effect: '✅ Thérapeutiques', color: 'bg-blue-50 border-blue-300', desc: 'Prescrites pour décharger un compartiment du genou lors d\'arthrose médiale ou latérale.' },
            { type: 'Tongs et sandales sans soutien', effect: '⚠️ Déconseillées au quotidien', color: 'bg-orange-50 border-orange-300', desc: 'Aucun soutien de la voûte plantaire. Acceptable ponctuellement mais pas pour de longues distances.' },
            { type: 'Chaussures de marche avec soutien de la voûte', effect: '✅ Idéales au quotidien', color: 'bg-green-50 border-green-300', desc: 'Soutien de la voûte, amorti des talons, semelle stable — la combinaison gagnante pour les genoux sensibles.' },
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded-lg border ${item.color}`}>
              <div className="flex justify-between items-start mb-1">
                <p className="font-semibold text-gray-900">{item.type}</p>
                <span className="text-sm font-medium">{item.effect}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to DO */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={28} />
          <h2 className="text-2xl font-bold text-green-800">✅ Ce qu'il faut FAIRE pour vos genoux</h2>
        </div>
        <div className="space-y-3">
          <DoCard>
            <strong>Faites mesurer votre pied correctement :</strong> La taille des pieds change avec l'âge. Une mesure récente (longueur ET largeur) permet de choisir la bonne pointure — ni trop serrée, ni trop large.
          </DoCard>
          <DoCard>
            <strong>Essayez les chaussures en fin de journée :</strong> Les pieds gonflent légèrement durant la journée. Les chaussures achetées le matin peuvent être trop serrées le soir.
          </DoCard>
          <DoCard>
            <strong>Investissez dans des semelles orthopédiques sur mesure :</strong> Un podologue ou kinésithérapeute peut vous prescrire des semelles adaptées à votre morphologie pour corriger l'appui du pied et soulager le genou.
          </DoCard>
          <DoCard>
            <strong>Variez vos chaussures :</strong> Porter les mêmes chaussures tous les jours crée des contraintes répétitives. Alternez entre 2-3 paires confortables.
          </DoCard>
          <DoCard>
            <strong>Choisissez des chaussures avec bonne rigidité au milieu :</strong> Pliez la chaussure en deux — si elle plie facilement au milieu, elle ne soutient pas assez la voûte plantaire.
          </DoCard>
          <DoCard>
            <strong>Consultez un kinésithérapeute :</strong> En cas de douleur au genou, un bilan postural complet permettra d'identifier si vos chaussures (et votre posture du pied) contribuent à la douleur.
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
            <strong>Évitez les talons hauts au quotidien :</strong> Réservez-les aux occasions spéciales. Au quotidien, ils fatiguent les genoux, les mollets et le bas du dos.
          </DontCard>
          <DontCard>
            <strong>N'achetez pas de chaussures "juste parce qu'elles sont belles" :</strong> La mode ne doit pas primer sur le confort et le soutien, surtout si vous marchez beaucoup.
          </DontCard>
          <DontCard>
            <strong>Évitez de courir avec de vieilles chaussures :</strong> L'amorti des chaussures de sport se dégrade après 500-700 km. Des chaussures usées ne protègent plus les genoux.
          </DontCard>
          <DontCard>
            <strong>N'ignorez pas la douleur après l'achat :</strong> Si une chaussure neuve provoque une douleur au genou, ne l'attendez pas "qu'elle se fasse". Rapportez-la ou consultez.
          </DontCard>
          <DontCard>
            <strong>Évitez les tongs comme seule chaussure de marche :</strong> Sans soutien de voûte ni amorti, elles aggravent les pieds plats et transmettent les chocs directement aux genoux.
          </DontCard>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-medical-50 border-l-4 border-medical-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-xl font-bold text-medical-900">Le bon investissement pour vos genoux</h2>
        </div>
        <p className="text-medical-800 leading-relaxed">
          Une bonne paire de chaussures — ou des semelles orthopédiques bien adaptées — peut faire une différence remarquable sur les douleurs de genoux. C'est souvent le premier changement à faire avant même de commencer les exercices. Au Centre Chnider, nous évaluons votre posture et votre appui plantaire pour vous orienter vers les meilleures solutions pour vos genoux.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-indigo-50 border-r-4 border-indigo-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Activity className="text-indigo-600" size={28} />
          <h2 className="text-2xl font-bold text-indigo-900">أحذيتك، المسؤول الأول؟</h2>
        </div>
        <p className="text-indigo-800 leading-relaxed">
          معظم الناس لا يربطون بين أحذيتهم وآلام ركبتهم.
          لكن <strong>القدم هي أساس الجسم</strong>. الحذاء الخاطئ يُغير محاذاة الركبة،
          يزيد الضغط على الغضروف ويمكن على المدى الطويل تسريع أو تفاقم الخشونة.
          في المقابل، الحذاء الصحيح يمكنه تخفيف ركبة مؤلمة بشكل ملحوظ.
        </p>
      </section>

      {/* How shoes affect the knee */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Bone className="text-gray-600" size={24} />
          <h2 className="text-2xl font-bold">كيف تؤثر أحذيتك على ركبتيك</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: '📐', title: 'المحاذاة المتسلسلة', desc: 'القدم، الكاحل، الركبة والورك تُشكل سلسلة. توجيه خاطئ للقدم يُغير زاوية الركبة في كل خطوة.' },
            { icon: '💥', title: 'امتصاص الصدمات', desc: 'الركبة تمتص الارتطامات عند المشي. نعل بدون تخميد ينقل كل هذه الصدمات مباشرة للغضروف.' },
            { icon: '⚖️', title: 'توزيع الوزن', desc: 'بعض الأحذية تُزيح مركز الثقل وتُثقّل أحد حيّزي الركبة (الداخلي أو الخارجي).' },
            { icon: '🦶', title: 'وضعية القدم', desc: 'قدم مسطحة أو معقوفة غير مدعومة تسبب تعويضات في الركبة والورك والظهر.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shoe types */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🔍 أنواع الأحذية وتأثيرها على الركبة</h2>
        <div className="space-y-3">
          {[
            { type: 'الكعب العالي (أكثر من 5 سم)', effect: '❌ خطير', color: 'bg-red-50 border-red-300', desc: 'يزيد الضغط على الرضفة والأربطة المتقاطعة. مع الاستخدام المنتظم، يُسرّع خشونة الركبة الرضفية الفخذية.' },
            { type: 'النعل المسطح الصلب (بعض البالرينا)', effect: '⚠️ محفوف بالمخاطر', color: 'bg-orange-50 border-orange-300', desc: 'لا تخميد = كل الصدمات تنتقل للركبة. تجنبه للمشي الطويل.' },
            { type: 'أحذية الجري بتخميد جيد', effect: '✅ موصى بها', color: 'bg-green-50 border-green-300', desc: 'تمتص الصدمات وتوجه القدم. مثالية لحماية الركبتين أثناء النشاط البدني.' },
            { type: 'أحذية بنعل مُعوَّض جانبياً', effect: '✅ علاجية', color: 'bg-blue-50 border-blue-300', desc: 'تُوصف لتفريغ أحد حيّزي الركبة في حالة خشونة داخلية أو خارجية.' },
            { type: 'الشبشب والصندل بدون دعم', effect: '⚠️ غير موصى به يومياً', color: 'bg-orange-50 border-orange-300', desc: 'لا دعم للقبة الأخمصية. مقبول أحياناً لكن ليس للمسافات الطويلة.' },
            { type: 'أحذية مشي بدعم القبة الأخمصية', effect: '✅ مثالية يومياً', color: 'bg-green-50 border-green-300', desc: 'دعم للقبة، تخميد الكعب، نعل ثابت — المزيج الفائز للركبتين الحساستين.' },
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded-lg border ${item.color}`}>
              <div className="flex justify-between items-start mb-1">
                <p className="font-semibold text-gray-900">{item.type}</p>
                <span className="text-sm font-medium">{item.effect}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to DO */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={28} />
          <h2 className="text-2xl font-bold text-green-800">✅ ما يجب فعله لحماية ركبتيك</h2>
        </div>
        <div className="space-y-3">
          <DoCard>
            <strong>قِس قدمك بشكل صحيح:</strong> يتغير حجم القدم مع العمر. قياس حديث (الطول والعرض) يسمح باختيار المقاس الصحيح — لا ضيق جداً ولا واسع جداً.
          </DoCard>
          <DoCard>
            <strong>جرّب الأحذية في نهاية اليوم:</strong> القدمان تنتفخان بعض الشيء خلال اليوم. الأحذية المشتراة صباحاً قد تكون ضيقة مساءً.
          </DoCard>
          <DoCard>
            <strong>استثمر في نعل طبي مقاس:</strong> طبيب القدم أو المعالج الفيزيائي يمكنه وصف نعل مناسب لبنيتك لتصحيح ارتكاز القدم وتخفيف الركبة.
          </DoCard>
          <DoCard>
            <strong>نوّع أحذيتك:</strong> ارتداء نفس الحذاء كل يوم يُفرز ضغوطات متكررة. تناوب بين 2-3 أزواج مريحة.
          </DoCard>
          <DoCard>
            <strong>اختر أحذية بصلابة جيدة في المنتصف:</strong> اطوِ الحذاء بالنصف — إن انثنى بسهولة في المنتصف، فهو لا يدعم القبة الأخمصية كافياً.
          </DoCard>
          <DoCard>
            <strong>استشر معالجاً فيزيائياً:</strong> في حالة ألم الركبة، تقييم كامل للوضعية والارتكاز الأخمصي سيحدد إن كانت أحذيتك تُساهم في الألم.
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
            <strong>تجنب الكعب العالي يومياً:</strong> احتفظ به للمناسبات الخاصة. يومياً، يُتعب الركبتين والعضلات الساقية وأسفل الظهر.
          </DontCard>
          <DontCard>
            <strong>لا تشترِ أحذية "لأنها جميلة فقط":</strong> الموضة لا يجب أن تتقدم على الراحة والدعم، خاصة إن كنت تمشي كثيراً.
          </DontCard>
          <DontCard>
            <strong>تجنب الجري بأحذية رياضية قديمة:</strong> تخميد أحذية الجري يتدهور بعد 500-700 كم. الأحذية المستهلكة لا تحمي الركبتين بعد.
          </DontCard>
          <DontCard>
            <strong>لا تتجاهل الألم بعد الشراء:</strong> إن سبّب حذاء جديد ألماً في الركبة، لا تنتظر "حتى يتكيّف". أعده أو استشر.
          </DontCard>
          <DontCard>
            <strong>تجنب الشبشب كحذاء مشي وحيد:</strong> بدون دعم قبة أو تخميد، يُفاقم القدم المسطحة وينقل الصدمات مباشرة للركبتين.
          </DontCard>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-medical-50 border-r-4 border-medical-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-xl font-bold text-medical-900">الاستثمار الجيد لركبتيك</h2>
        </div>
        <p className="text-medical-800 leading-relaxed">
          زوج جيد من الأحذية — أو نعل طبي مُكيَّف جيداً — يمكنه إحداث فرق ملحوظ في آلام الركبتين. غالباً هو أول تغيير يجب فعله حتى قبل البدء بالتمارين. في مركز شنيدر، نقيّم وضعيتك وارتكازك الأخمصي لتوجيهك نحو أفضل الحلول لركبتيك.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'surpoids-douleurs-genou',
      titleFr: 'Surpoids et Genou',
      titleAr: 'الوزن الزائد والركبة',
      icon: <Scale size={20} className="text-medical-600" />
    },
    {
      slug: 'arthrose-genou',
      titleFr: 'Arthrose du Genou',
      titleAr: 'خشونة الركبة',
      icon: <Bone size={20} className="text-medical-600" />
    },
    {
      slug: 'chaussures-mal-de-dos',
      titleFr: 'Chaussures et Mal de Dos',
      titleAr: 'الأحذية وآلام الظهر',
      icon: <Dumbbell size={20} className="text-medical-600" />
    }
  ]
});

export default article;
