import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Scale, Bone, CheckCircle, XCircle, Activity, Dumbbell, AlertTriangle, Heart, TrendingDown } from 'lucide-react';

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
  slug: 'surpoids-douleurs-genou',
  titleFr: 'Surpoids et Genou : Comment le Poids Abîme vos Articulations',
  titleAr: 'الوزن الزائد والركبة: كيف تُدمر الكيلوغرامات مفاصلك',
  descriptionFr:
    'Chaque kilo en trop multiplie la pression sur vos genoux. Découvrez le lien entre surpoids et douleurs du genou, et les solutions kinésithérapiques pour protéger vos articulations.',
  descriptionAr:
    'كل كيلوغرام زائد يُضاعف الضغط على ركبتيك. اكتشف العلاقة بين الوزن الزائد وآلام الركبة، والحلول الفيزيائية لحماية مفاصلك.',
  keywordsFr:
    'surpoids genou, poids et genou, arthrose genou surpoids, kiné genou, douleur genou obésité, protéger genou, perte de poids genou',
  keywordsAr:
    'الوزن الزائد والركبة, السمنة وألم الركبة, خشونة الركبة الوزن, حماية الركبة, ترويض طبي ركبة, تمارين الركبة',
  imageFr: 'https://picsum.photos/seed/poids-genou-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/poids-genou-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Scale className="text-orange-600" size={28} />
          <h2 className="text-2xl font-bold text-orange-900">Le genou, principal amortisseur du corps</h2>
        </div>
        <p className="text-orange-800 leading-relaxed">
          Le genou est l'articulation la plus sollicitée du corps humain. À chaque pas, il absorbe une pression équivalente à
          <strong> 3 à 5 fois votre poids corporel</strong>. En montant des escaliers, ce chiffre monte à 7 fois votre poids.
          Cela signifie que 10 kg de surpoids, c'est <strong>30 à 50 kg de charge supplémentaire</strong> sur chaque genou à chaque pas.
          Sur des années, cette surcharge détériore le cartilage, mène à l'arthrose et provoque des douleurs chroniques invalidantes.
        </p>
      </section>

      {/* Mechanism */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Bone className="text-gray-600" size={24} />
          <h2 className="text-2xl font-bold">Ce qui se passe dans votre genou avec le surpoids</h2>
        </div>
        <div className="space-y-3">
          {[
            { step: '1', color: 'bg-yellow-100', title: 'Compression du cartilage', desc: 'Le cartilage articulaire s\'amincit progressivement sous la pression excessive. Il ne se régénère pas facilement une fois endommagé.' },
            { step: '2', color: 'bg-orange-100', title: 'Inflammation chronique', desc: 'Le tissu adipeux (graisse) produit des substances inflammatoires qui attaquent directement le cartilage du genou, même au repos.' },
            { step: '3', color: 'bg-red-100', title: 'Déséquilibre musculaire', desc: 'Le surpoids entraîne souvent une faiblesse des quadriceps et des ischio-jambiers, réduisant le soutien dynamique du genou.' },
            { step: '4', color: 'bg-purple-100', title: 'Arthrose précoce', desc: 'Le risque d\'arthrose du genou est 4 fois plus élevé chez les personnes en surpoids. Elle peut apparaître dès 40 ans.' },
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

      {/* The numbers */}
      <section className="bg-blue-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">📊 Les chiffres qui font réfléchir</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: '×3', label: 'Pression supplémentaire par kilo de surpoids' },
            { number: '4×', label: 'Plus de risque d\'arthrose avec obésité' },
            { number: '50%', label: 'Réduction du risque d\'arthrose avec IMC normal' },
            { number: '5 kg', label: 'Perte = réduction 15-20 kg de pression sur les genoux' },
          ].map((item, i) => (
            <div key={i} className="text-center bg-white rounded-lg p-4 shadow-sm">
              <p className="text-3xl font-bold text-medical-600">{item.number}</p>
              <p className="text-gray-600 text-xs mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to DO */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={28} />
          <h2 className="text-2xl font-bold text-green-800">✅ Ce qu'il faut FAIRE pour protéger vos genoux</h2>
        </div>
        <div className="space-y-3">
          <DoCard>
            <strong>Perdez du poids progressivement :</strong> Même 5 kg en moins réduisent considérablement la pression sur les genoux. Visez une perte progressive de 0,5 à 1 kg par semaine.
          </DoCard>
          <DoCard>
            <strong>Renforcez vos quadriceps et ischio-jambiers :</strong> Ces muscles sont les "coussins" naturels du genou. Des exercices comme la chaise murale, la presse à jambe et les extensions de jambe stabilisent l'articulation.
          </DoCard>
          <DoCard>
            <strong>Pratiquez des sports à faible impact :</strong> Natation, vélo, marche nordique, aquagym — ces activités maintiennent la forme sans sucharger les genoux.
          </DoCard>
          <DoCard>
            <strong>Portez des chaussures adaptées :</strong> Des chaussures absorbant les chocs réduisent l'impact transmis au genou. Évitez les semelles plates rigides.
          </DoCard>
          <DoCard>
            <strong>Consultez un kinésithérapeute :</strong> Un programme personnalisé de renforcement musculaire et de proprioception est essentiel pour protéger et soulager le genou.
          </DoCard>
          <DoCard>
            <strong>Montez et descendez les escaliers correctement :</strong> Toujours poser le pied en entier, genoux dans l'axe des orteils. Utilisez la rampe pour répartir la charge si besoin.
          </DoCard>
          <DoCard>
            <strong>Adoptez un régime anti-inflammatoire :</strong> Oméga-3 (poissons gras, noix), légumes verts, curcuma — ils réduisent l'inflammation articulaire de l'intérieur.
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
            <strong>Évitez la course à pied si vous êtes en surpoids :</strong> La course génère 7 fois le poids corporel sur les genoux à chaque foulée. Commencez par la marche ou le vélo.
          </DontCard>
          <DontCard>
            <strong>Ne restez pas immobile :</strong> L'inactivité affaiblit les muscles protecteurs du genou et aggrave l'arthrose. Le mouvement modéré est le meilleur remède.
          </DontCard>
          <DontCard>
            <strong>Évitez de s'accroupir fréquemment :</strong> La flexion profonde des genoux sous une charge importante accélère la détérioration du cartilage.
          </DontCard>
          <DontCard>
            <strong>Ne négligez pas la douleur :</strong> Une douleur persistante au genou est un signal. Consulter tôt permet d'éviter une chirurgie plus tard.
          </DontCard>
          <DontCard>
            <strong>Évitez les sports à fort impact ou contact :</strong> Football, basketball, tennis intensif — ces sports comportent des risques élevés de traumatisme pour des genoux déjà fragiles.
          </DontCard>
          <DontCard>
            <strong>Ne faites pas de régime draconien :</strong> Une perte de poids trop rapide peut entraîner une perte musculaire au lieu de graisses, aggravant la faiblesse musculaire du genou.
          </DontCard>
        </div>
      </section>

      {/* Exercises */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Dumbbell className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Exercices doux pour renforcer le genou</h2>
        </div>
        <div className="space-y-4">
          {[
            { num: '1', title: 'La chaise murale', desc: 'Dos au mur, genoux à 90°, pieds à plat. Tenez 20-30 secondes. Renforce puissamment les quadriceps sans traumatiser le genou.', color: 'bg-blue-50 border-blue-300' },
            { num: '2', title: 'Extension de jambe assise', desc: 'Assis sur une chaise, étendez une jambe à l\'horizontale, tenez 5 secondes. 15 répétitions par jambe. Renforce les quadriceps en douceur.', color: 'bg-green-50 border-green-300' },
            { num: '3', title: 'Marche dans l\'eau', desc: 'Dans la piscine jusqu\'à la taille, marchez 15-20 minutes. L\'eau réduit le poids de 70% et soulage les genoux tout en faisant travailler les muscles.', color: 'bg-cyan-50 border-cyan-300' },
          ].map(ex => (
            <div key={ex.num} className={`flex gap-4 p-5 rounded-lg border ${ex.color}`}>
              <div className="w-10 h-10 bg-medical-600 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">{ex.num}</div>
              <div>
                <p className="font-bold text-gray-900 text-lg mb-1">{ex.title}</p>
                <p className="text-gray-700 text-sm">{ex.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-medical-50 border-l-4 border-medical-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-xl font-bold text-medical-900">Le message essentiel</h2>
        </div>
        <p className="text-medical-800 leading-relaxed">
          Perdre du poids est l'une des meilleures choses que vous pouvez faire pour vos genoux.
          Combinée à un programme de renforcement musculaire bien encadré par un kinésithérapeute,
          la perte de poids peut transformer radicalement votre qualité de vie — moins de douleur, plus de mobilité, moins de risque d'opération.
          Au Centre Chnider, nous accompagnons les patients en surpoids avec des programmes adaptés, sans risque de blessure.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-orange-50 border-r-4 border-orange-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Scale className="text-orange-600" size={28} />
          <h2 className="text-2xl font-bold text-orange-900">الركبة، أكبر ممتص للصدمات في الجسم</h2>
        </div>
        <p className="text-orange-800 leading-relaxed">
          الركبة هي المفصل الأكثر تحملاً في جسم الإنسان. في كل خطوة، تمتص ضغطاً يساوي
          <strong> 3 إلى 5 أضعاف وزنك</strong>. عند صعود السلالم، يرتفع هذا الرقم إلى 7 أضعاف وزنك.
          هذا يعني أن 10 كيلو زائدة تُمثل <strong>30 إلى 50 كيلو ضغطاً إضافياً</strong> على كل ركبة في كل خطوة.
          على مر السنين، هذا الحمل الزائد يتلف الغضروف ويؤدي إلى الخشونة وآلام مزمنة مُعيقة.
        </p>
      </section>

      {/* Mechanism */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Bone className="text-gray-600" size={24} />
          <h2 className="text-2xl font-bold">ما يحدث في ركبتك مع الوزن الزائد</h2>
        </div>
        <div className="space-y-3">
          {[
            { step: '1', color: 'bg-yellow-100', title: 'ضغط على الغضروف', desc: 'يتآكل الغضروف المفصلي تدريجياً تحت الضغط المفرط. لا يتجدد بسهولة بمجرد تلفه.' },
            { step: '2', color: 'bg-orange-100', title: 'التهاب مزمن', desc: 'الأنسجة الدهنية تُنتج مواد مُلهِبة تهاجم غضروف الركبة مباشرة، حتى أثناء الراحة.' },
            { step: '3', color: 'bg-red-100', title: 'عدم توازن عضلي', desc: 'الوزن الزائد يُسبب في الغالب ضعف عضلات الفخذ الأمامية والخلفية، مما يُقلل الدعم الديناميكي للركبة.' },
            { step: '4', color: 'bg-purple-100', title: 'خشونة مبكرة', desc: 'خطر خشونة الركبة أعلى 4 مرات لدى الأشخاص ذوي الوزن الزائد. قد تظهر منذ سن 40.' },
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

      {/* The numbers */}
      <section className="bg-blue-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">📊 أرقام تجعلك تفكر</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: '×3', label: 'ضغط إضافي لكل كيلو زائد' },
            { number: '4×', label: 'خطر خشونة أعلى مع السمنة' },
            { number: '50%', label: 'تقليل خطر الخشونة بالوزن الطبيعي' },
            { number: '5 كجم', label: 'فقدان = تقليل 15-20 كجم ضغط على الركبتين' },
          ].map((item, i) => (
            <div key={i} className="text-center bg-white rounded-lg p-4 shadow-sm">
              <p className="text-3xl font-bold text-medical-600">{item.number}</p>
              <p className="text-gray-600 text-xs mt-1">{item.label}</p>
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
            <strong>انقص وزنك تدريجياً:</strong> حتى 5 كيلو أقل تُقلل الضغط على الركبتين بشكل ملحوظ. استهدف خسارة تدريجية من 0.5 إلى 1 كجم أسبوعياً.
          </DoCard>
          <DoCard>
            <strong>قوّي عضلات الفخذ الأمامية والخلفية:</strong> هذه العضلات هي "الوسائد" الطبيعية للركبة. تمارين كالكرسي الحائطي، ضغط الساقين وتمديداتها تستقر المفصل.
          </DoCard>
          <DoCard>
            <strong>مارس رياضات منخفضة التأثير:</strong> سباحة، دراجة، مشي نورديك، جيمناستيك مائية — هذه الأنشطة تحافظ على اللياقة دون إرهاق الركبتين.
          </DoCard>
          <DoCard>
            <strong>ارتدِ أحذية مناسبة:</strong> الأحذية الماصة للصدمات تُقلل التأثير المنتقل للركبة. تجنب النعال المسطحة الصلبة.
          </DoCard>
          <DoCard>
            <strong>استشر معالجاً فيزيائياً:</strong> برنامج مخصص لتقوية العضلات والتعادل الحسي-حركي ضروري لحماية الركبة وتخفيف الألم.
          </DoCard>
          <DoCard>
            <strong>اصعد وانزل السلم بشكل صحيح:</strong> ضع القدم كاملة، الركبة في اتجاه الأصابع. استخدم الحاجز لتوزيع الحمل عند الحاجة.
          </DoCard>
          <DoCard>
            <strong>اعتمد نظاماً غذائياً مضاداً للالتهاب:</strong> أوميغا-3 (أسماك دهنية، مكسرات)، خضروات خضراء، كركم — يُقللون الالتهاب المفصلي من الداخل.
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
            <strong>تجنب الجري إذا كنت بوزن زائد:</strong> الجري يُولد 7 أضعاف الوزن على الركبتين في كل خطوة. ابدأ بالمشي أو الدراجة.
          </DontCard>
          <DontCard>
            <strong>لا تبقَ ساكناً:</strong> الخمول يُضعف عضلات حماية الركبة ويُفاقم الخشونة. الحركة المعتدلة هي أفضل علاج.
          </DontCard>
          <DontCard>
            <strong>تجنب الجلوس القرفصاء المتكرر:</strong> الثني العميق للركبة تحت حمل كبير يُسرع تدهور الغضروف.
          </DontCard>
          <DontCard>
            <strong>لا تتجاهل الألم:</strong> ألم الركبة المستمر هو إشارة. الاستشارة المبكرة تُجنّبك جراحة لاحقة.
          </DontCard>
          <DontCard>
            <strong>تجنب الرياضات عالية التأثير أو الاحتكاك:</strong> كرة القدم، كرة السلة، التنس المكثف — هذه الرياضات تنطوي على مخاطر صدمات عالية لركبتين هشتين.
          </DontCard>
          <DontCard>
            <strong>لا تتبع حمية قاسية:</strong> فقدان الوزن السريع جداً قد يُسبب فقدان العضلات بدلاً من الدهون، مما يُفاقم ضعف العضلات الواقية للركبة.
          </DontCard>
        </div>
      </section>

      {/* Exercises */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Dumbbell className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">تمارين خفيفة لتقوية الركبة</h2>
        </div>
        <div className="space-y-4">
          {[
            { num: '1', title: 'الكرسي الحائطي', desc: 'ظهرك على الحائط، ركبتان بزاوية 90°، قدمان مسطحتان. ابقَ 20-30 ثانية. يُقوي الفخذ الأمامي بقوة دون إيذاء الركبة.', color: 'bg-blue-50 border-blue-300' },
            { num: '2', title: 'تمديد الساق جالساً', desc: 'جالس على كرسي، أطوِل ساقاً للأفق، ابقَ 5 ثوانٍ. 15 تكراراً لكل ساق. يُقوي الفخذ الأمامي بلطف.', color: 'bg-green-50 border-green-300' },
            { num: '3', title: 'المشي في الماء', desc: 'في حمام السباحة إلى منتصف الجسم، امشِ 15-20 دقيقة. الماء يُقلل الوزن بنسبة 70% ويُريح الركبتين مع تشغيل العضلات.', color: 'bg-cyan-50 border-cyan-300' },
          ].map(ex => (
            <div key={ex.num} className={`flex gap-4 p-5 rounded-lg border ${ex.color}`}>
              <div className="w-10 h-10 bg-medical-600 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">{ex.num}</div>
              <div>
                <p className="font-bold text-gray-900 text-lg mb-1">{ex.title}</p>
                <p className="text-gray-700 text-sm">{ex.desc}</p>
              </div>
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
          إنقاص الوزن هو أحد أفضل الأشياء التي يمكنك فعلها لركبتيك.
          مع برنامج تقوية عضلي مُوجَّه جيداً من معالج فيزيائي،
          يمكن لفقدان الوزن أن يُحوّل جودة حياتك جذرياً — ألم أقل، حركة أكثر، خطر جراحة أقل.
          في مركز شنيدر، نرافق المرضى ذوي الوزن الزائد ببرامج مكيّفة، بدون خطر إصابة.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'arthrose-genou',
      titleFr: 'Arthrose du Genou',
      titleAr: 'خشونة الركبة',
      icon: <Bone size={20} className="text-medical-600" />
    },
    {
      slug: 'chaussures-douleur-genou',
      titleFr: 'Chaussures et Douleur au Genou',
      titleAr: 'الأحذية وألم الركبة',
      icon: <Activity size={20} className="text-medical-600" />
    },
    {
      slug: 'surpoids-et-sciatique',
      titleFr: 'Surpoids et Sciatique',
      titleAr: 'الوزن الزائد وعرق النسا',
      icon: <Scale size={20} className="text-medical-600" />
    }
  ]
});

export default article;
