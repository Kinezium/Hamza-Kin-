import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import SEOHead from '../components/SEOHead';
import { Zap, ArrowUpDown, Dumbbell, Bone, Stethoscope, Brain, Baby, Flame } from 'lucide-react';

interface BlogPost {
  id: string;
  title: { fr: string; ar: string };
  icon: string;
  definition: { fr: string; ar: string };
  symptoms: { fr: string[]; ar: string[] };
  causes: { fr: string; ar: string };
  treatment: { fr: string; ar: string };
  role: { fr: string; ar: string };
  protocol: { fr: string; ar: string };
}

const getIcon = (name: string) => {
  switch (name) {
    case 'Zap': return <Zap size={28} />;
    case 'Spine': return <ArrowUpDown size={28} />;
    case 'Dumbbell': return <Dumbbell size={28} />;
    case 'Bone': return <Bone size={28} />;
    case 'Stethoscope': return <Stethoscope size={28} />;
    case 'Brain': return <Brain size={28} />;
    case 'Baby': return <Baby size={28} />;
    case 'Flame': return <Flame size={28} />;
    default: return <Zap size={28} />;
  }
};

const POSTS: BlogPost[] = [
  {
    id: 'sciatica',
    icon: 'Zap',
    title: { fr: 'La Sciatique & Hernie Discale', ar: 'عرق النسا والانزلاق الغضروفي' },
    definition: {
      fr: "La sciatique est une douleur causée par l'irritation du nerf sciatique, souvent liée à une hernie discale. Elle irradie du bas du dos jusqu'au pied.",
      ar: 'عرق النسا هو ألم ناتج عن تهيج العصب الوركي، غالبًا بسبب انزلاق غضروفي. يمتد الألم من أسفل الظهر إلى القدم.'
    },
    symptoms: {
      fr: ['Douleur vive dans la fesse et la jambe', 'Sensation de décharge électrique', 'Engourdissement ou fourmillements', 'Difficulté à marcher ou se lever', 'Douleur qui s\'aggrave en position assise'],
      ar: ['ألم حاد في الأرداف والساق', 'إحساس بصدمة كهربائية', 'تنميل أو وخز', 'صعوبة في المشي أو الوقوف', 'ألم يزداد سوءاً عند الجلوس']
    },
    causes: { fr: "Hernie discale, arthrose, sténose, traumatisme, mauvaise posture prolongée.", ar: 'انزلاق غضروفي، خشونة المفاصل، ضيق القناة الشوكية، إصابة، وضعية خاطئة لفترة طويلة.' },
    treatment: { fr: "Kinésithérapie manuelle, décompression vertébrale, exercices de McKenzie, électrothérapie antalgique.", ar: 'ترويض طبي يدوي، تخفيف ضغط الفقرات، تمارين ماكينزي، علاج كهربائي مسكن.' },
    role: { fr: "La kinésithérapie soulage la compression nerveuse, renforce les muscles profonds du dos et prévient les récidives.", ar: 'الترويض الطبي يخفف ضغط الأعصاب، يقوي عضلات الظهر العميقة ويمنع تكرار المشكلة.' },
    protocol: { fr: "Étirements quotidiens du piriforme, marche 30 min/jour, éviter de soulever des charges lourdes.", ar: 'تمديدات يومية لعضلة الكمثرية، المشي 30 دقيقة/يوم، تجنب حمل الأثقال.' }
  },
  {
    id: 'backpain',
    icon: 'Spine',
    title: { fr: 'Lombalgie & Cervicalgie', ar: 'آلام الظهر والرقبة' },
    definition: {
      fr: "La lombalgie est une douleur au bas du dos, la cervicalgie au niveau du cou. Ce sont les motifs les plus fréquents de consultation en kinésithérapie.",
      ar: 'ألم أسفل الظهر (لومبالجي) وألم الرقبة (سيرفيكالجي) هما أكثر أسباب زيارة مركز الترويض الطبي شيوعاً.'
    },
    symptoms: {
      fr: ['Raideur matinale du dos ou du cou', 'Blocage brutal (lumbago)', 'Douleur irradiant vers les épaules', 'Contractures musculaires palpables', 'Douleur accentuée par le stress'],
      ar: ['تيبس صباحي في الظهر أو الرقبة', 'انسداد مفاجئ (لومباغو)', 'ألم يمتد نحو الكتفين', 'تشنجات عضلية واضحة', 'ألم يتفاقم بالتوتر']
    },
    causes: { fr: "Mauvaise posture, sédentarité, stress, arthrose, contractures musculaires chroniques.", ar: 'وضعية خاطئة، قلة الحركة، التوتر، خشونة المفاصل، تشنجات عضلية مزمنة.' },
    treatment: { fr: "Thérapie manuelle, correction posturale, renforcement musculaire, thermothérapie.", ar: 'علاج يدوي، تصحيح الوضعية، تقوية العضلات، علاج حراري.' },
    role: { fr: "La kinésithérapie corrige les déséquilibres musculaires, améliore la posture et élimine les points de tension.", ar: 'الترويض الطبي يصحح اختلال التوازن العضلي، يحسن الوضعية ويزيل نقاط التوتر.' },
    protocol: { fr: "Exercices de gainage 10 min/jour, pauses actives toutes les heures, étirements cervicaux.", ar: 'تمارين تقوية الجذع 10 دقائق/يوم، استراحات نشطة كل ساعة، تمديدات للرقبة.' }
  },
  {
    id: 'sport',
    icon: 'Dumbbell',
    title: { fr: 'Traumatologie du Sport', ar: 'الإصابات الرياضية' },
    definition: {
      fr: "Les blessures sportives incluent entorses, tendinites, déchirures musculaires et fractures de fatigue. Elles nécessitent une rééducation spécifique.",
      ar: 'الإصابات الرياضية تشمل الالتواءات، التهاب الأوتار، التمزقات العضلية وكسور الإجهاد. تحتاج لتأهيل متخصص.'
    },
    symptoms: {
      fr: ['Douleur aiguë lors de l\'effort', 'Gonflement de l\'articulation', 'Sensation de claquage ou craquement', 'Perte de force musculaire', 'Instabilité articulaire'],
      ar: ['ألم حاد عند المجهود', 'انتفاخ المفصل', 'إحساس بتمزق أو طقطقة', 'فقدان القوة العضلية', 'عدم استقرار المفصل']
    },
    causes: { fr: "Surmenage, échauffement insuffisant, mauvais geste technique, choc direct.", ar: 'إجهاد مفرط، إحماء غير كافٍ، حركة تقنية خاطئة، صدمة مباشرة.' },
    treatment: { fr: "Cryothérapie, strapping, rééducation progressive, renforcement proprioceptif.", ar: 'علاج بالتبريد، تثبيت بالأشرطة، تأهيل تدريجي، تقوية الحس العميق.' },
    role: { fr: "Le kiné accélère la cicatrisation, prépare le retour au sport et prévient les rechutes.", ar: 'المروض يسرّع الشفاء، يحضر للعودة للرياضة ويمنع الانتكاسات.' },
    protocol: { fr: "RICE (Repos, Glaçage, Compression, Élévation) puis rééducation fonctionnelle progressive.", ar: 'بروتوكول RICE (راحة، ثلج، ضغط، رفع) ثم تأهيل وظيفي تدريجي.' }
  },
  {
    id: 'knee',
    icon: 'Bone',
    title: { fr: 'Arthrose & Douleurs Articulaires', ar: 'خشونة الركبة والمفاصل' },
    definition: {
      fr: "L'arthrose est l'usure du cartilage articulaire, causant douleur et raideur. Elle touche surtout le genou, la hanche et l'épaule.",
      ar: 'خشونة المفاصل هي تآكل الغضروف المفصلي، مما يسبب الألم والتيبس. تصيب خاصة الركبة، الورك والكتف.'
    },
    symptoms: {
      fr: ['Douleur articulaire à la marche', 'Craquements et crépitations', 'Raideur au réveil', 'Gonflement intermittent', 'Perte progressive de mobilité'],
      ar: ['ألم مفصلي عند المشي', 'طقطقة وأصوات مفصلية', 'تيبس عند الاستيقاظ', 'انتفاخ متقطع', 'فقدان تدريجي للحركة']
    },
    causes: { fr: "Vieillissement, surpoids, antécédents traumatiques, facteurs génétiques.", ar: 'التقدم في السن، زيادة الوزن، إصابات سابقة، عوامل وراثية.' },
    treatment: { fr: "Mobilisation articulaire, exercices isométriques, hydrothérapie, renforcement musculaire péri-articulaire.", ar: 'تحريك المفاصل، تمارين ثابتة، علاج مائي، تقوية العضلات المحيطة بالمفصل.' },
    role: { fr: "La kinésithérapie maintient la mobilité, réduit la douleur et retarde le besoin de prothèse.", ar: 'الترويض الطبي يحافظ على الحركة، يقلل الألم ويؤخر الحاجة للمفصل الاصطناعي.' },
    protocol: { fr: "Vélo d'appartement 20 min/jour, exercices de renforcement du quadriceps, maintien du poids idéal.", ar: 'دراجة ثابتة 20 دقيقة/يوم، تمارين تقوية عضلة الفخذ، الحفاظ على الوزن المثالي.' }
  },
  {
    id: 'postop',
    icon: 'Stethoscope',
    title: { fr: 'Rééducation Post-Opératoire', ar: 'الترويض بعد العمليات' },
    definition: {
      fr: "La rééducation après chirurgie est essentielle pour récupérer la mobilité et la force. Elle concerne les prothèses, ligaments croisés, fractures.",
      ar: 'التأهيل بعد الجراحة ضروري لاستعادة الحركة والقوة. يشمل المفاصل الاصطناعية، الرباط الصليبي، والكسور.'
    },
    symptoms: {
      fr: ['Perte de mobilité post-chirurgicale', 'Douleur et œdème persistants', 'Atrophie musculaire', 'Difficulté à reprendre la marche', 'Raideur cicatricielle'],
      ar: ['فقدان الحركة بعد الجراحة', 'ألم وانتفاخ مستمر', 'ضمور عضلي', 'صعوبة استئناف المشي', 'تيبس الندبة']
    },
    causes: { fr: "Suite à : Prothèse totale du genou/hanche, ligamentoplastie, ostéosynthèse de fracture.", ar: 'بعد: استبدال كامل للركبة/الورك، إصلاح الأربطة، تثبيت الكسور.' },
    treatment: { fr: "Mobilisation passive puis active, travail de la marche, renforcement progressif, drainage lymphatique.", ar: 'تحريك سلبي ثم نشط، تدريب على المشي، تقوية تدريجية، تصريف ليمفاوي.' },
    role: { fr: "Le kiné guide chaque étape de la récupération pour un retour à l'autonomie complète.", ar: 'المروض يرافق كل مرحلة من التعافي للعودة للاستقلالية الكاملة.' },
    protocol: { fr: "Exercices de flexion/extension progressifs, marche avec aide technique, application de froid après les séances.", ar: 'تمارين ثني/بسط تدريجية، مشي بمساعدة تقنية، تطبيق البرودة بعد الجلسات.' }
  },
  {
    id: 'neuro',
    icon: 'Brain',
    title: { fr: 'Neurologie & Paralysie Faciale', ar: 'ترويض الجهاز العصبي وشلل الوجه' },
    definition: {
      fr: "Les affections neurologiques (AVC, hémiplégie, Parkinson, paralysie faciale) nécessitent une rééducation spécialisée et prolongée.",
      ar: 'الأمراض العصبية (الجلطة الدماغية، الشلل النصفي، الباركنسون، شلل الوجه) تحتاج تأهيلاً متخصصاً وطويلاً.'
    },
    symptoms: {
      fr: ['Paralysie d\'un côté du corps (hémiplégie)', 'Visage figé ou asymétrique', 'Tremblements au repos', 'Perte d\'équilibre', 'Difficulté à parler ou déglutir'],
      ar: ['شلل في جانب واحد من الجسم', 'وجه متجمد أو غير متماثل', 'رعشة أثناء الراحة', 'فقدان التوازن', 'صعوبة في الكلام أو البلع']
    },
    causes: { fr: "AVC, traumatisme crânien, maladie de Parkinson, virus (paralysie faciale a frigore).", ar: 'جلطة دماغية، إصابة الرأس، مرض الباركنسون، فيروس (شلل الوجه البارد).' },
    treatment: { fr: "Rééducation neuro-motrice, exercices de coordination, stimulation faciale, Bobath, Kabat.", ar: 'تأهيل عصبي حركي، تمارين التنسيق، تحفيز الوجه، تقنية بوباث وكابات.' },
    role: { fr: "La kinésithérapie neurologique aide à recréer les connexions cérébrales et récupérer l'autonomie.", ar: 'الترويض العصبي يساعد في إعادة بناء الروابط الدماغية واستعادة الاستقلالية.' },
    protocol: { fr: "Exercices de symétrie faciale devant le miroir, mouvements actifs quotidiens du côté atteint.", ar: 'تمارين تماثل الوجه أمام المرآة، حركات نشطة يومية للجانب المصاب.' }
  },
  {
    id: 'pediatric',
    icon: 'Baby',
    title: { fr: 'Kinésithérapie Pédiatrique', ar: 'ترويض الأطفال والرضع' },
    definition: {
      fr: "La kiné pédiatrique traite les troubles respiratoires (bronchiolite), le retard moteur, le torticolis congénital et les déformations des pieds.",
      ar: 'ترويض الأطفال يعالج مشاكل التنفس (التهاب القُصيبات)، تأخر الحركة، تشنج الرقبة الخلقي، وتشوهات القدمين.'
    },
    symptoms: {
      fr: ['Respiration sifflante ou encombrée', 'Toux grasse persistante', 'Retard dans les acquisitions motrices', 'Tête toujours tournée du même côté', 'Pieds qui tournent vers l\'intérieur'],
      ar: ['تنفس صفيري أو مزدحم', 'سعال رطب مستمر', 'تأخر في المهارات الحركية', 'الرأس دائماً مائل لنفس الجانب', 'أقدام ملتفة للداخل']
    },
    causes: { fr: "Infection virale (bronchiolite), prématurité, position fœtale, facteurs génétiques.", ar: 'عدوى فيروسية (التهاب القصيبات)، ولادة مبكرة، وضعية الجنين، عوامل وراثية.' },
    treatment: { fr: "Kiné respiratoire (désencombrement), stimulation neuro-motrice, mobilisations douces.", ar: 'ترويض تنفسي (إخراج البلغم)، تحفيز عصبي حركي، تحريك لطيف.' },
    role: { fr: "Le kiné libère les voies respiratoires du bébé et stimule le bon développement moteur.", ar: 'المروض يحرر مجاري التنفس للرضيع ويحفز النمو الحركي السليم.' },
    protocol: { fr: "Nettoyage nasal au sérum physiologique, position surélevée pour dormir, hydratation fréquente.", ar: 'تنظيف الأنف بالمحلول الملحي، وضعية مرتفعة للنوم، ترطيب متكرر.' }
  },
  {
    id: 'rheuma',
    icon: 'Flame',
    title: { fr: 'Rhumatologie', ar: 'الروماتيزم والتهاب المفاصل' },
    definition: {
      fr: "Les maladies rhumatismales (polyarthrite, spondylarthrite) causent des inflammations chroniques. La kinésithérapie est un pilier du traitement.",
      ar: 'أمراض الروماتيزم (التهاب المفاصل المتعدد، التهاب الفقار) تسبب التهابات مزمنة. الترويض الطبي ركيزة أساسية في العلاج.'
    },
    symptoms: {
      fr: ['Douleurs articulaires multiples', 'Raideur matinale prolongée (>30 min)', 'Gonflements articulaires', 'Fatigue chronique', 'Déformations progressives des doigts'],
      ar: ['آلام في عدة مفاصل', 'تيبس صباحي طويل (أكثر من 30 دقيقة)', 'انتفاخ المفاصل', 'تعب مزمن', 'تشوهات تدريجية في الأصابع']
    },
    causes: { fr: "Maladie auto-immune, facteurs génétiques, infections, stress oxydatif.", ar: 'مرض مناعي ذاتي، عوامل وراثية، عدوى، إجهاد تأكسدي.' },
    treatment: { fr: "Mobilisations douces, balnéothérapie, exercices de préservation articulaire, thermothérapie.", ar: 'تحريك لطيف، علاج مائي، تمارين للحفاظ على المفاصل، علاج حراري.' },
    role: { fr: "La kinésithérapie préserve la fonction articulaire, réduit l'inflammation et maintient la qualité de vie.", ar: 'الترويض الطبي يحافظ على وظيفة المفاصل، يقلل الالتهاب ويحسن جودة الحياة.' },
    protocol: { fr: "Douche chaude matinale, mouvements doux quotidiens, éviter les gestes forcés.", ar: 'دش دافئ صباحي، حركات لطيفة يومية، تجنب الحركات القسرية.' }
  }
];

const Blog: React.FC<{ lang: Language }> = ({ lang }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const prefix = lang === 'ar' ? '/ar' : '';

  return (
    <>
      <SEOHead 
        title={lang === 'fr' ? 'Blog Kinésithérapie Casablanca | Sciatique, Hernie Discale, Rééducation' : 'مدونة الترويض الطبي بالدار البيضاء | عرق النسا والانزلاق الغضروفي وإعادة التأهيل'}
        description={lang === 'fr' ? 'Articles santé sur la sciatique, la hernie discale, les douleurs articulaires et le rôle du kinésithérapeute à Casablanca.' : 'مقالات صحية حول عرق النسا والانزلاق الغضروفي وآلام المفاصل ودور المروض الطبي في الدار البيضاء.'}
        keywords={lang === 'fr' ? 'kiné ainchoq, kiné sbata, kiné casablanca, kiné casa, kiné autour de moi, blog kiné Casablanca, sciatique, hernie discale, lombalgie, kinésithérapie' : 'مروض طبي الدار البيضاء, مروض قريب مني, عين الشق, سباتة, مدونة الترويض الطبي, عرق النسا, الانزلاق الغضروفي'}
      />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">
          {lang === 'fr' ? 'Blog Santé & Kinésithérapie' : 'مدونة الصحة والترويض الطبي'}
        </h1>
        <p className="text-center text-slate-700 max-w-3xl mx-auto mb-10">
          {lang === 'fr' ? (
            <>
              Retrouvez des conseils sur la <strong>sciatique</strong>, la <strong>hernie discale</strong>, les douleurs du dos et la
              {' '}<strong>rééducation</strong>. Consultez aussi nos
              {' '}<Link to={`${prefix}/pathologies`} className="text-medical-700 font-semibold hover:underline">pathologies traitées</Link>
              {' '}et nos <Link to={`${prefix}/services`} className="text-medical-700 font-semibold hover:underline">services de kiné à Casablanca</Link>.
            </>
          ) : (
            <>
              مقالات ونصائح حول <strong>عرق النسا</strong> و<strong>الانزلاق الغضروفي</strong> وآلام الظهر و<strong>إعادة التأهيل</strong>.
              يمكنكم أيضاً الاطلاع على
              {' '}<Link to={`${prefix}/pathologies`} className="text-medical-700 font-semibold hover:underline">الأمراض المعالجة</Link>
              {' '}و<Link to={`${prefix}/services`} className="text-medical-700 font-semibold hover:underline">خدمات الترويض الطبي بالدار البيضاء</Link>.
            </>
          )}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {POSTS.map(post => (
            <div key={post.id} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 cursor-pointer hover:shadow-xl transition" onClick={() => setSelectedPost(post)}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-medical-100 text-medical-600 rounded-full flex items-center justify-center">
                  {getIcon(post.icon)}
                </div>
                <h2 className="text-2xl font-bold text-medical-700">{post.title[lang]}</h2>
              </div>
              <p className="text-slate-600 mb-3">{post.definition[lang]}</p>
              <div className="mb-3">
                <span className="text-sm font-bold text-red-600">{lang === 'fr' ? 'Symptômes :' : 'الأعراض:'}</span>
                <ul className="mt-1 space-y-1">
                  {post.symptoms[lang].slice(0, 3).map((s, i) => (
                    <li key={i} className="text-sm text-slate-500 flex items-center gap-1">
                      <span className="text-red-400">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="text-medical-600 font-bold text-sm">{lang === 'fr' ? 'Lire plus →' : '← اقرأ المزيد'}</span>
            </div>
          ))}
        </div>
        {selectedPost && (
          <div className="bg-medical-50 p-8 rounded-2xl shadow-lg border border-medical-200 max-w-2xl mx-auto">
            <button className="mb-4 text-medical-700 font-bold" onClick={() => setSelectedPost(null)}>
              {lang === 'fr' ? '← Retour' : 'رجوع →'}
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-medical-200 text-medical-700 rounded-full flex items-center justify-center">
                {getIcon(selectedPost.icon)}
              </div>
              <h2 className="text-3xl font-bold text-medical-800">{selectedPost.title[lang]}</h2>
            </div>
            <div className="space-y-5">
              <div>
                <strong className="text-medical-700">{lang === 'fr' ? '📖 Définition :' : '📖 التعريف:'}</strong>
                <p className="mt-1">{selectedPost.definition[lang]}</p>
              </div>
              <div>
                <strong className="text-red-600">{lang === 'fr' ? '🩺 Symptômes :' : '🩺 الأعراض:'}</strong>
                <ul className="mt-2 space-y-2">
                  {selectedPost.symptoms[lang].map((s, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white p-2 rounded-lg">
                      <span className="text-red-500 mt-0.5">⚠️</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <strong className="text-orange-600">{lang === 'fr' ? '🔍 Causes :' : '🔍 الأسباب:'}</strong>
                <p className="mt-1">{selectedPost.causes[lang]}</p>
              </div>
              <div>
                <strong className="text-green-600">{lang === 'fr' ? '💊 Traitement :' : '💊 العلاج:'}</strong>
                <p className="mt-1">{selectedPost.treatment[lang]}</p>
              </div>
              <div>
                <strong className="text-blue-600">{lang === 'fr' ? '🏥 Rôle de la kinésithérapie :' : '🏥 دور الترويض الطبي:'}</strong>
                <p className="mt-1">{selectedPost.role[lang]}</p>
              </div>
              <div>
                <strong className="text-purple-600">{lang === 'fr' ? '🏠 Protocole à domicile :' : '🏠 بروتوكول منزلي:'}</strong>
                <p className="mt-1">{selectedPost.protocol[lang]}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
