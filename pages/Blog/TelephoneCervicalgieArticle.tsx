import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Smartphone, CheckCircle, XCircle, ArrowUpDown, Activity, AlertTriangle, Heart, Dumbbell } from 'lucide-react';

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
  slug: 'telephone-cervicalgie-hernie-cervicale',
  titleFr: 'Téléphone et Hernie Cervicale : La Tête Penchée en Danger',
  titleAr: 'الهاتف والفتق الرقبي: خطر الرأس المنحني على رقبتك',
  descriptionFr:
    'Regarder son téléphone tête baissée est une habitude qui détruit progressivement les cervicales. Découvrez pourquoi le "text neck" provoque des hernies cervicales et comment protéger votre cou.',
  descriptionAr:
    'النظر للهاتف برأس منحنٍ عادة تُدمر الرقبة تدريجياً. اكتشف لماذا "رقبة الهاتف" تسبب الفتق الرقبي وكيف تحمي رقبتك.',
  keywordsFr:
    'téléphone cervicalgie, text neck, hernie cervicale téléphone, douleur cou téléphone, posture smartphone, kinésithérapie cervicale',
  keywordsAr:
    'الهاتف وألم الرقبة, رقبة الهاتف, الفتق الرقبي الهاتف, وضعية الهاتف الرقبة, تقنية الرأس المنحني, ترويض طبي رقبة',
  imageFr: 'https://picsum.photos/seed/phone-neck-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/phone-neck-chnider/1600/900',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-violet-50 border-l-4 border-violet-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Smartphone className="text-violet-600" size={28} />
          <h2 className="text-2xl font-bold text-violet-900">Le "Text Neck" : une épidémie silencieuse</h2>
        </div>
        <p className="text-violet-800 leading-relaxed">
          Nous passons en moyenne <strong>4 à 6 heures par jour</strong> sur notre téléphone, tablette ou ordinateur portable,
          souvent la tête inclinée vers le bas. Cette position, surnommée <strong>"Text Neck"</strong> (ou cou du téléphone),
          est en train de provoquer une vague sans précédent de cervicalgies, de hernies cervicales et de douleurs chroniques du cou,
          y compris chez les adolescents et jeunes adultes. Comprendre ce phénomène, c'est la première étape pour s'en protéger.
        </p>
      </section>

      {/* The physics */}
      <section className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">⚖️ La physique de la tête penchée</h2>
        <p className="mb-4 text-gray-700">
          La tête humaine pèse en moyenne <strong>5 à 6 kg</strong> en position neutre. Mais lorsqu'on penche la tête en avant,
          le poids apparent sur la colonne cervicale augmente de façon exponentielle :
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { angle: '0°', weight: '5-6 kg', color: 'bg-green-100', label: 'Position neutre ✅' },
            { angle: '15°', weight: '12 kg', color: 'bg-yellow-100', label: 'Légère inclinaison' },
            { angle: '30°', weight: '18 kg', color: 'bg-orange-100', label: 'Téléphone bas ⚠️' },
            { angle: '60°', weight: '27 kg', color: 'bg-red-100', label: 'Tête très penchée ❌' },
          ].map((item, i) => (
            <div key={i} className={`text-center rounded-lg p-4 ${item.color}`}>
              <p className="text-2xl font-bold text-gray-800">{item.weight}</p>
              <p className="text-sm font-medium text-gray-700">{item.angle}</p>
              <p className="text-xs text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-gray-700 text-sm">
          💡 Pencher la tête à 60° (comme pour regarder son téléphone posé sur les genoux) équivaut à poser un sac de <strong>27 kg sur votre nuque</strong> pendant des heures.
        </p>
      </section>

      {/* What happens to the cervical spine */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-500" size={24} />
          <h2 className="text-2xl font-bold">Ce qui se passe dans vos cervicales avec le téléphone</h2>
        </div>
        <div className="space-y-3">
          {[
            { step: '1', color: 'bg-yellow-50', title: 'Tension musculaire chronique', desc: 'Les muscles de la nuque (trapèzes, élévateurs de la scapula) sont en contraction permanente pour soutenir ce poids. Résultat : contractures, raideur et douleurs cervicales.' },
            { step: '2', color: 'bg-orange-50', title: 'Inversion de la courbure cervicale', desc: 'La courbure naturelle du cou (lordose cervicale) s\'inverse avec le temps, devenant droite ou même convexe. Cette "neck straightening" fragilise les disques cervicaux.' },
            { step: '3', color: 'bg-red-50', title: 'Hernie discale cervicale', desc: 'La pression accrue sur les disques C5-C6 et C6-C7 provoque leur dégénérescence, puis des hernies qui compriment les nerfs, causant douleurs, fourmillements et faiblesse dans les bras.' },
            { step: '4', color: 'bg-purple-50', title: 'Maux de tête cervicogènes', desc: 'Les tensions musculaires à la nuque irradient souvent vers la tête, causant des céphalées de tension chroniques que ni le paracétamol ni l\'ibuprofène ne soulagent durablement.' },
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
          <h2 className="text-2xl font-bold text-green-800">✅ Ce qu'il faut FAIRE</h2>
        </div>
        <div className="space-y-3">
          <DoCard>
            <strong>Tenez votre téléphone à hauteur des yeux :</strong> C'est le changement le plus important et le plus simple. Relevez le téléphone jusqu'à ce que vous n'ayez pas à baisser la tête. Votre cou vous remerciera.
          </DoCard>
          <DoCard>
            <strong>Faites la règle des 20-20-20 :</strong> Toutes les 20 minutes d'écran, regardez à 20 mètres (au loin) pendant 20 secondes et bougez votre cou. Ça réduit la fatigue musculaire et visuelle.
          </DoCard>
          <DoCard>
            <strong>Pratiquez quotidiennement la rétraction cervicale (chin tuck) :</strong> Rentrez le menton pour faire un "double menton". Tenez 5 secondes, 10 répétitions. Contre directement la posture du "text neck".
          </DoCard>
          <DoCard>
            <strong>Renforcez les muscles profonds du cou :</strong> Des exercices isométriques guidés par un kinésithérapeute renforcent les muscles qui maintiennent la tête en position neutre.
          </DoCard>
          <DoCard>
            <strong>Utilisez un support pour tablette/téléphone :</strong> Un support qui maintient l'écran à hauteur des yeux change tout pour votre cou.
          </DoCard>
          <DoCard>
            <strong>Dormez avec un oreiller cervical adapté :</strong> Un oreiller à mémoire de forme qui suit la courbure naturelle du cou permet une récupération nocturne optimale des muscles cervicaux.
          </DoCard>
          <DoCard>
            <strong>Consultez un kinésithérapeute en cas de douleur :</strong> Les techniques manuelles cervicales, la traction douce et les exercices McKenzie sont très efficaces contre les hernies cervicales débutantes.
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
            <strong>Ne regardez pas votre téléphone posé sur vos genoux :</strong> C'est la pire position — la tête est à 60-70° d'inclinaison. Relevez toujours l'écran vers vos yeux.
          </DontCard>
          <DontCard>
            <strong>Évitez d'utiliser votre téléphone allongé sur le côté :</strong> La posture asymétrique des cervicales pendant la lecture ou le scrolling crée une compression unilatérale des disques.
          </DontCard>
          <DontCard>
            <strong>N'ignorez pas les fourmillements dans les bras :</strong> C'est un signe que les nerfs cervicaux sont comprimés. Consultez sans attendre — c'est une hernie cervicale jusqu'à preuve du contraire.
          </DontCard>
          <DontCard>
            <strong>Évitez les longues sessions sans pause :</strong> Plus de 20-30 minutes continues d'écran tête baissée est dangereux. Programmez des rappels sur votre téléphone.
          </DontCard>
          <DontCard>
            <strong>Ne faites pas de grands cercles avec la tête :</strong> En cas de douleur cervicale, les grands cercles de la tête peuvent coincer les facettes articulaires. Préférez des petites rotations douces.
          </DontCard>
          <DontCard>
            <strong>Évitez de tenir votre téléphone entre l'épaule et l'oreille :</strong> Cette position lors d'appels prolongés est dévastatrice pour les muscles et les disques cervicaux d'un côté.
          </DontCard>
        </div>
      </section>

      {/* Alert signs for hernia */}
      <section className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-600" size={24} />
          <h2 className="text-xl font-bold text-red-900">🚨 Signes d'une hernie cervicale — Consultez rapidement</h2>
        </div>
        <ul className="space-y-2 text-red-800">
          <li>• Douleur vive irradiant de la nuque vers le bras ou la main</li>
          <li>• Fourmillements ou engourdissement dans les doigts (souvent index, majeur)</li>
          <li>• Faiblesse dans une main (difficulté à tenir un verre)</li>
          <li>• Maux de tête persistants partant de la nuque</li>
          <li>• Douleur qui s'aggrave la nuit et réveille</li>
        </ul>
      </section>

      {/* Simple exercise routine */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Dumbbell className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">La routine "anti-text neck" en 5 minutes</h2>
        </div>
        <div className="space-y-3">
          {[
            { time: '1 min', title: 'Chin Tuck debout', desc: 'Rentrez le menton (double menton). Tenez 5 sec. 12 répétitions.', color: 'bg-blue-50' },
            { time: '1 min', title: 'Rotation douce', desc: 'Tournez la tête droite et gauche lentement. 10 de chaque côté.', color: 'bg-green-50' },
            { time: '1 min', title: 'Étirement trapèze', desc: 'Inclinez la tête sur l\'épaule. Maintenez 30 sec. Chaque côté.', color: 'bg-amber-50' },
            { time: '1 min', title: 'Rétraction assis', desc: 'Assis, reculez la tête (menton vers la gorge). Tenez 5 sec. 12 rép.', color: 'bg-purple-50' },
            { time: '1 min', title: 'Extension douce', desc: 'Regardez légèrement vers le haut, tenez 5 sec. 10 répétitions. Contre la flexion répétée.', color: 'bg-rose-50' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-4 p-4 rounded-lg ${item.color}`}>
              <div className="w-14 text-center">
                <span className="text-lg font-bold text-medical-600">{item.time}</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-medical-50 border-l-4 border-medical-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-xl font-bold text-medical-900">Le message à retenir</h2>
        </div>
        <p className="text-medical-800 leading-relaxed">
          Notre téléphone est devenu indispensable, mais notre façon de l'utiliser peut nous coûter cher sur le plan physique. Relever son écran, faire des pauses et renforcer sa nuque sont des habitudes simples qui peuvent éviter des années de douleurs cervicales et une hernie discale coûteuse à traiter. Au Centre Chnider, nous traitons chaque semaine des patients souffrant de cervicalgie liée au téléphone — venez nous voir avant que la douleur s'installe durablement.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-violet-50 border-r-4 border-violet-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Smartphone className="text-violet-600" size={28} />
          <h2 className="text-2xl font-bold text-violet-900">"رقبة الهاتف": وباء صامت</h2>
        </div>
        <p className="text-violet-800 leading-relaxed">
          نقضي في المتوسط <strong>4 إلى 6 ساعات يومياً</strong> على هاتفنا أو حاسوبنا اللوحي أو المحمول،
          في الغالب برأس مائل للأسفل. هذا الوضع المسمى <strong>"رقبة الهاتف"</strong> أو "Text Neck"،
          يُفجّر موجة غير مسبوقة من آلام الرقبة، الفتوق الرقبية والآلام المزمنة للرقبة،
          حتى لدى المراهقين والشباب. فهم هذه الظاهرة هو الخطوة الأولى للحماية منها.
        </p>
      </section>

      {/* The physics */}
      <section className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">⚖️ فيزياء الرأس المنحني</h2>
        <p className="mb-4 text-gray-700">
          الرأس البشري يزن في المتوسط <strong>5 إلى 6 كجم</strong> في الوضع المحايد. لكن عند إمالته للأمام،
          يزيد الوزن الظاهري على العمود الفقري العنقي بشكل أُسّي:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { angle: '0°', weight: '5-6 كجم', color: 'bg-green-100', label: 'وضع محايد ✅' },
            { angle: '15°', weight: '12 كجم', color: 'bg-yellow-100', label: 'ميل خفيف' },
            { angle: '30°', weight: '18 كجم', color: 'bg-orange-100', label: 'هاتف منخفض ⚠️' },
            { angle: '60°', weight: '27 كجم', color: 'bg-red-100', label: 'رأس منحنٍ جداً ❌' },
          ].map((item, i) => (
            <div key={i} className={`text-center rounded-lg p-4 ${item.color}`}>
              <p className="text-2xl font-bold text-gray-800">{item.weight}</p>
              <p className="text-sm font-medium text-gray-700">{item.angle}</p>
              <p className="text-xs text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-gray-700 text-sm">
          💡 إمالة الرأس بزاوية 60° (كالنظر للهاتف الموضوع على الركبتين) يعادل وضع كيس <strong>27 كجم على قفاك</strong> لساعات.
        </p>
      </section>

      {/* What happens */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-500" size={24} />
          <h2 className="text-2xl font-bold">ما يحدث في رقبتك مع الهاتف</h2>
        </div>
        <div className="space-y-3">
          {[
            { step: '1', color: 'bg-yellow-50', title: 'توتر عضلي مزمن', desc: 'عضلات القفا (الشبكية، رافعة الكتف) في تقلص دائم لإسناد هذا الثقل. النتيجة: تشنجات، تيبس وآلام رقبة.' },
            { step: '2', color: 'bg-orange-50', title: 'انعكاس الانحناء الرقبي', desc: 'الانحناء الطبيعي للرقبة (التقعر الرقبي) ينعكس مع الوقت، يصبح مستقيماً أو محدباً. هذا "تقويم الرقبة" يُضعف الأقراص الرقبية.' },
            { step: '3', color: 'bg-red-50', title: 'الفتق الرقبي', desc: 'الضغط المتزايد على الأقراص C5-C6 وC6-C7 يُسبب تدهورها ثم فتوقاً تضغط على الأعصاب، مسببة آلاماً، تنميلاً وضعفاً في الذراعين.' },
            { step: '4', color: 'bg-purple-50', title: 'الصداع الناشئ من الرقبة', desc: 'توترات عضلات القفا تنتشر في الغالب نحو الرأس، مسببة صداعاً توترياً مزمناً لا تُخففه المسكنات بشكل دائم.' },
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
            <strong>أمسك هاتفك على مستوى عينيك:</strong> هذا أهم وأبسط تغيير. ارفع الهاتف حتى لا تضطر لخفض رأسك. رقبتك ستشكرك.
          </DoCard>
          <DoCard>
            <strong>طبّق قاعدة 20-20-20:</strong> كل 20 دقيقة من الشاشة، انظر إلى مسافة 20 متراً (بعيداً) لمدة 20 ثانية وحرّك رقبتك. يُقلل التعب العضلي والبصري.
          </DoCard>
          <DoCard>
            <strong>مارس سحب الذقن يومياً (Chin Tuck):</strong> أدخل الذقن لعمل "ذقن مزدوج". ابقَ 5 ثوانٍ، 10 تكرارات. يُواجه مباشرة وضعية رقبة الهاتف.
          </DoCard>
          <DoCard>
            <strong>قوّي العضلات العميقة للرقبة:</strong> تمارين إيزومترية بإشراف معالج فيزيائي تُقوي العضلات التي تُثبّت الرأس في الوضع المحايد.
          </DoCard>
          <DoCard>
            <strong>استخدم حامل للهاتف/الجهاز اللوحي:</strong> حامل يُثبّت الشاشة على مستوى العينين يُغيّر كل شيء لرقبتك.
          </DoCard>
          <DoCard>
            <strong>نَم بوسادة رقبية مناسبة:</strong> وسادة ذاكرة تتبع الانحناء الطبيعي للرقبة تتيح تعافياً ليلياً أمثل للعضلات الرقبية.
          </DoCard>
          <DoCard>
            <strong>استشر معالجاً فيزيائياً عند الألم:</strong> التقنيات اليدوية الرقبية، الشد الخفيف وتمارين ماكنزي فعّالة جداً ضد الفتق الرقبي المبكر.
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
            <strong>لا تنظر لهاتفك الموضوع على ركبتيك:</strong> هذا أسوأ وضع — الرأس بزاوية ميل 60-70 درجة. ارفع الشاشة دائماً نحو عينيك.
          </DontCard>
          <DontCard>
            <strong>تجنب استخدام هاتفك مستلقياً على جانبك:</strong> الوضعية غير المتماثلة للرقبة خلال القراءة أو التصفح تُحدث ضغطاً أحادي الجانب على الأقراص.
          </DontCard>
          <DontCard>
            <strong>لا تتجاهل التنميل في الذراعين:</strong> هذا علامة على ضغط الأعصاب الرقبية. استشر فوراً — يُعتبر فتقاً رقبياً حتى يُثبت عكسه.
          </DontCard>
          <DontCard>
            <strong>تجنب الجلسات الطويلة بدون استراحة:</strong> أكثر من 20-30 دقيقة متواصلة على الشاشة برأس منخفض خطير. ضع تذكيرات على هاتفك.
          </DontCard>
          <DontCard>
            <strong>لا تفعل دوائر كبيرة بالرأس:</strong> عند ألم الرقبة، الدوائر الكبيرة للرأس قد تُعشّش المفاصل الصغيرة. فضّل دورانات خفيفة صغيرة.
          </DontCard>
          <DontCard>
            <strong>تجنب تثبيت الهاتف بين كتفك وأذنك:</strong> هذا الوضع أثناء المكالمات الطويلة مُدمّر للعضلات والأقراص الرقبية من جانب واحد.
          </DontCard>
        </div>
      </section>

      {/* Alert signs */}
      <section className="bg-red-50 border-r-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-600" size={24} />
          <h2 className="text-xl font-bold text-red-900">🚨 علامات الفتق الرقبي — استشر بسرعة</h2>
        </div>
        <ul className="space-y-2 text-red-800">
          <li>• ألم حاد ينتقل من القفا نحو الذراع أو اليد</li>
          <li>• تنميل أو خدر في الأصابع (عادة السبابة والوسطى)</li>
          <li>• ضعف في اليد (صعوبة إمساك كوب)</li>
          <li>• صداع مستمر ينطلق من القفا</li>
          <li>• ألم يشتد ليلاً ويوقظك من النوم</li>
        </ul>
      </section>

      {/* Simple routine */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Dumbbell className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">روتين "مضاد لرقبة الهاتف" في 5 دقائق</h2>
        </div>
        <div className="space-y-3">
          {[
            { time: '1 دق', title: 'سحب الذقن واقفاً', desc: 'أدخل الذقن (ذقن مزدوج). ابقَ 5 ث. 12 تكراراً.', color: 'bg-blue-50' },
            { time: '1 دق', title: 'دوران خفيف', desc: 'أدر الرأس يميناً ويساراً ببطء. 10 من كل جانب.', color: 'bg-green-50' },
            { time: '1 دق', title: 'تمدد الشبكية', desc: 'أمِل الرأس على الكتف. ابقَ 30 ث. كل جانب.', color: 'bg-amber-50' },
            { time: '1 دق', title: 'سحب خلفي جالساً', desc: 'جالساً، أعِد الرأس للخلف (ذقن نحو الحلق). ابقَ 5 ث. 12 تكراراً.', color: 'bg-purple-50' },
            { time: '1 دق', title: 'تمديد خفيف للأعلى', desc: 'انظر للأعلى بخفة، ابقَ 5 ث. 10 تكرارات. يُعاكس الثني المتكرر.', color: 'bg-rose-50' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-4 p-4 rounded-lg ${item.color}`}>
              <div className="w-14 text-center">
                <span className="text-base font-bold text-medical-600">{item.time}</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
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
          هاتفنا أصبح ضرورة، لكن طريقة استخدامه قد تُكلفنا غالياً جسدياً. رفع الشاشة، أخذ الاستراحات وتقوية الرقبة عادات بسيطة تُجنّب سنوات من آلام الرقبة وفتقاً غضروفياً مُكلف العلاج. في مركز شنيدر، نعالج أسبوعياً مرضى يعانون من آلام رقبة مرتبطة بالهاتف — تفضّل بزيارتنا قبل أن يستقر الألم.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'cervicalgie-bons-gestes-posture',
      titleFr: 'Cervicalgie : Les Bons Gestes',
      titleAr: 'ألم الرقبة: التصرفات الصحيحة',
      icon: <ArrowUpDown size={20} className="text-medical-600" />
    },
    {
      slug: 'posture-ergonomie',
      titleFr: 'Posture & Ergonomie',
      titleAr: 'الوضعية والإرغونوميا',
      icon: <Activity size={20} className="text-medical-600" />
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
