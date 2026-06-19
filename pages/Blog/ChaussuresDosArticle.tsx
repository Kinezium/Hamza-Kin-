import React from 'react';
import { createArticle } from './ArticleTemplate';
import { CheckCircle, XCircle, ArrowUpDown, Activity, AlertTriangle, Heart, Dumbbell, Scale } from 'lucide-react';

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
  slug: 'chaussures-mal-de-dos',
  titleFr: 'Chaussures et Mal de Dos : Ce Que Vos Pieds Font à votre Dos',
  titleAr: 'الأحذية وآلام الظهر: ما تفعله قدماك في ظهرك',
  descriptionFr:
    'Saviez-vous que vos chaussures peuvent être à l\'origine de votre mal de dos ? Découvrez quelles chaussures protègent votre colonne vertébrale et lesquelles l\'abîment, avec les conseils de nos kinés.',
  descriptionAr:
    'هل تعلم أن أحذيتك قد تكون سبب آلام ظهرك؟ اكتشف أي الأحذية تحمي عمودك الفقري وأيها يُتلفه، مع نصائح معالجينا الفيزيائيين.',
  keywordsFr:
    'chaussures mal de dos, semelles lombalgie, talons dos, chaussures colonne vertébrale, kiné dos, prévention lombalgie chaussures',
  keywordsAr:
    'الأحذية وآلام الظهر, نعل الحذاء الظهر, الكعب العالي الظهر, الأحذية والعمود الفقري, ترويض طبي ظهر, الوقاية من آلام الظهر',
  imageFr: 'https://picsum.photos/seed/chaussures-dos-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/chaussures-dos-chnider/1600/900',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-rose-50 border-l-4 border-rose-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <ArrowUpDown className="text-rose-600" size={28} />
          <h2 className="text-2xl font-bold text-rose-900">Le pied, base de toute la colonne</h2>
        </div>
        <p className="text-rose-800 leading-relaxed">
          Imaginez un immeuble dont les fondations sont mal posées. Toute la structure est fragilisée.
          C'est exactement ce qui se passe quand on porte de mauvaises chaussures.
          <strong> Le pied est la fondation de votre colonne vertébrale.</strong> Une chaussure inadaptée modifie la
          biomécanique de la cheville, du genou, de la hanche et enfin du bas du dos.
          Ce n'est pas un hasard si les douleurs lombaires et les mauvaises chaussures vont souvent de pair.
        </p>
      </section>

      {/* Mechanisms */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-gray-600" size={24} />
          <h2 className="text-2xl font-bold">3 mécanismes par lesquels les chaussures abîment le dos</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              num: '1', color: 'bg-red-50',
              title: 'Modification de la courbure lombaire',
              desc: 'Les talons hauts projettent le bassin en avant, accentuant la lordose lombaire (cambrure). Cela comprime les vertèbres et les disques en arrière, provoquant douleur et arthrose précoce.'
            },
            {
              num: '2', color: 'bg-orange-50',
              title: 'Transmission des chocs sans amorti',
              desc: 'Une semelle plate et rigide transmet 100% des impacts de la marche à la colonne vertébrale. Sur des milliers de pas par jour, cela représente un traumatisme répété significatif.'
            },
            {
              num: '3', color: 'bg-yellow-50',
              title: 'Déséquilibre postural global',
              desc: 'Une pronation (pied qui s\'écrase vers l\'intérieur) ou une supination (pied vers l\'extérieur) non corrigée crée une asymétrie qui remonte jusqu\'à la colonne, causant des douleurs unilatérales.'
            },
          ].map(item => (
            <div key={item.num} className={`flex gap-4 p-5 rounded-lg ${item.color}`}>
              <div className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">{item.num}</div>
              <div>
                <p className="font-bold text-gray-900 text-lg mb-1">{item.title}</p>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shoe guide */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🔍 Guide des chaussures et leur impact sur le dos</h2>
        <div className="space-y-3">
          {[
            { type: 'Talons hauts (>3 cm régulièrement)', effect: '❌ Néfaste pour le dos', color: 'bg-red-50 border-red-300', desc: 'Creusent la lordose lombaire, compriment les disques et les facettes articulaires. La douleur lombaire est 3 fois plus fréquente chez les porteurs réguliers de talons.' },
            { type: 'Chaussures sans soutien de voûte (semelle plate)', effect: '⚠️ À surveiller', color: 'bg-orange-50 border-orange-300', desc: 'Sans soutien de la voûte, le pied s\'affaisse, créant une chaîne de compensations jusqu\'au dos.' },
            { type: 'Chaussures de marche avec soutien et amorti', effect: '✅ Idéales', color: 'bg-green-50 border-green-300', desc: 'Soutien de voûte, talon légèrement surélevé (1-2 cm max), semelle absorbante. Le meilleur choix pour la santé de votre dos.' },
            { type: 'Chaussures minimalistes (pieds nus)', effect: '⚠️ Avec précaution', color: 'bg-yellow-50 border-yellow-300', desc: 'Bénéfiques si la transition est progressive et si vous avez des pieds bien alignés. À éviter en cas de pieds plats non traités.' },
            { type: 'Semelles orthopédiques sur mesure', effect: '✅ Très efficaces', color: 'bg-blue-50 border-blue-300', desc: 'Corrigent l\'appui et l\'axe du pied, réduisant les contraintes remontant jusqu\'au dos. Prescrites par un podologue ou kinésithérapeute.' },
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
          <h2 className="text-2xl font-bold text-green-800">✅ Ce qu'il faut FAIRE pour votre dos</h2>
        </div>
        <div className="space-y-3">
          <DoCard>
            <strong>Choisissez des chaussures avec un léger talon (1-2 cm) :</strong> Un léger talon absorbe les chocs et réduit la tension sur les tendons d'Achille et les lombaires mieux qu'une semelle totalement plate.
          </DoCard>
          <DoCard>
            <strong>Optez pour un bon soutien de la voûte plantaire :</strong> Appuyez avec le pouce sur l'intérieur de la semelle — elle doit résister légèrement. Un bon soutien réduit la pronation et les douleurs lombaires.
          </DoCard>
          <DoCard>
            <strong>Consultez un podologue si vous avez des pieds plats :</strong> Des semelles orthopédiques sur mesure corrigent le trouble statique du pied et peuvent transformer vos douleurs lombaires.
          </DoCard>
          <DoCard>
            <strong>Variez vos hauteurs de talons dans la semaine :</strong> Le même talon tous les jours "éduque" les muscles dans une seule position. Alternez entre talons bas et légèrement surélevés.
          </DoCard>
          <DoCard>
            <strong>Remplacez vos chaussures régulièrement :</strong> L'amorti d'une chaussure de marche se dégrade après 18-24 mois d'utilisation quotidienne. Une semelle usée ne protège plus le dos.
          </DoCard>
          <DoCard>
            <strong>Associez la kinésithérapie aux semelles :</strong> Les semelles corrigent le pied mais les muscles du dos ont besoin d'être renforcés pour que le changement soit durable.
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
            <strong>Évitez les talons hauts portés tous les jours :</strong> Au-delà de 5 cm au quotidien, la lordose lombaire est trop accentuée. Les douleurs lombaires et cervicales s'installent progressivement.
          </DontCard>
          <DontCard>
            <strong>Évitez les chaussures trop rigides avec semelles épaisses plates :</strong> Elles ne s'adaptent pas à la morphologie du pied et bloquent la mobilité naturelle de la cheville.
          </DontCard>
          <DontCard>
            <strong>N'utilisez pas des chaussures trop larges :</strong> Le pied "nage" dans la chaussure et compense avec des contractions musculaires qui remontent jusqu'au dos.
          </DontCard>
          <DontCard>
            <strong>Évitez les tongs en cas de lombalgie chronique :</strong> Elles n'offrent aucun soutien et les orteils se crispent pour les maintenir, créant une tension en chaîne jusqu'au bas du dos.
          </DontCard>
          <DontCard>
            <strong>Ne courez pas sur bitume avec des chaussures inadaptées :</strong> Le bitume est 10 fois plus dur que le sol naturel. Courir dessus avec de mauvaises chaussures traumatise colonne, genoux et chevilles.
          </DontCard>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-medical-50 border-l-4 border-medical-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-xl font-bold text-medical-900">En résumé</h2>
        </div>
        <p className="text-medical-800 leading-relaxed">
          Changer vos chaussures — ou utiliser des semelles orthopédiques — est souvent l'un des premiers gestes à adopter pour soulager le mal de dos. Combiné à un programme de renforcement musculaire du dos guidé par un kinésithérapeute, ce changement peut faire disparaître ou considérablement réduire des douleurs chroniques. Au Centre Chnider, nous évaluons votre posture globale pour vous donner les meilleurs conseils personnalisés.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-rose-50 border-r-4 border-rose-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <ArrowUpDown className="text-rose-600" size={28} />
          <h2 className="text-2xl font-bold text-rose-900">القدم، أساس العمود الفقري كله</h2>
        </div>
        <p className="text-rose-800 leading-relaxed">
          تخيّل مبنى أُسِّست قواعده بشكل خاطئ. كل الهيكل سيكون هشاً.
          هذا تماماً ما يحدث عند ارتداء أحذية سيئة.
          <strong> القدم هي أساس عمودك الفقري.</strong> الحذاء غير المناسب يُغير الحركية الحيوية للكاحل، الركبة، الورك وأخيراً أسفل الظهر.
          ليس صدفة أن آلام أسفل الظهر والأحذية السيئة غالباً ما يترافقان.
        </p>
      </section>

      {/* Mechanisms */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-gray-600" size={24} />
          <h2 className="text-2xl font-bold">3 آليات تُتلف الأحذية من خلالها الظهر</h2>
        </div>
        <div className="space-y-4">
          {[
            { num: '1', color: 'bg-red-50', title: 'تعديل انحناء أسفل الظهر', desc: 'الكعب العالي يدفع الحوض للأمام، مُفاقماً التقعر القطني. هذا يضغط الفقرات والأقراص من الخلف، مسبباً ألماً وخشونة مبكرة.' },
            { num: '2', color: 'bg-orange-50', title: 'نقل الصدمات بدون تخميد', desc: 'نعل مسطح وصلب ينقل 100% من صدمات المشي للعمود الفقري. على الآلاف من الخطوات يومياً، هذا يُمثل صدمة متكررة بالغة.' },
            { num: '3', color: 'bg-yellow-50', title: 'اختلال وضعي عام', desc: 'انبطاح القدم للداخل (الاستلقاء المفرط) أو للخارج غير المُصحَّح يخلق عدم تماثل يمتد للعمود الفقري، مسبباً آلاماً أحادية الجانب.' },
          ].map(item => (
            <div key={item.num} className={`flex gap-4 p-5 rounded-lg ${item.color}`}>
              <div className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">{item.num}</div>
              <div>
                <p className="font-bold text-gray-900 text-lg mb-1">{item.title}</p>
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
          <h2 className="text-2xl font-bold text-green-800">✅ ما يجب فعله لحماية ظهرك</h2>
        </div>
        <div className="space-y-3">
          <DoCard>
            <strong>اختر أحذية بكعب خفيف (1-2 سم):</strong> كعب خفيف يمتص الصدمات ويُقلل التوتر على وتر أخيل والقطنيات أفضل من نعل مسطح تماماً.
          </DoCard>
          <DoCard>
            <strong>اختر دعماً جيداً للقبة الأخمصية:</strong> اضغط بإبهامك على الجانب الداخلي للنعل — يجب أن يقاوم بعض الشيء. دعم جيد يُقلل الانبطاح وآلام الظهر.
          </DoCard>
          <DoCard>
            <strong>استشر طبيب قدم إن كان لديك قدم مسطحة:</strong> نعل طبي مقاس يُصحح الاضطراب الساكن للقدم ويمكنه تحويل آلام ظهرك.
          </DoCard>
          <DoCard>
            <strong>نوّع ارتفاعات الكعب خلال الأسبوع:</strong> نفس الكعب كل يوم "يُعلّم" العضلات وضعية واحدة. تناوب بين كعب منخفض وكعب خفيف مرتفع.
          </DoCard>
          <DoCard>
            <strong>بدّل أحذيتك بانتظام:</strong> تخميد حذاء المشي يتدهور بعد 18-24 شهراً من الاستخدام اليومي. نعل مستهلك لا يحمي الظهر بعد.
          </DoCard>
          <DoCard>
            <strong>ادمج الترويض الطبي مع النعال الطبية:</strong> النعال تُصحح القدم لكن عضلات الظهر تحتاج تقوية حتى يكون التغيير دائماً.
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
            <strong>تجنب الكعب العالي يومياً:</strong> فوق 5 سم يومياً، التقعر القطني يصبح مفرطاً جداً. آلام الظهر والرقبة تستقر تدريجياً.
          </DontCard>
          <DontCard>
            <strong>تجنب الأحذية الصلبة جداً بنعل سميك مسطح:</strong> لا تتكيف مع تشريح القدم وتمنع الحركية الطبيعية للكاحل.
          </DontCard>
          <DontCard>
            <strong>لا ترتدِ أحذية واسعة جداً:</strong> القدم "تسبح" في الحذاء وتُعوّض بتقلصات عضلية تمتد للظهر.
          </DontCard>
          <DontCard>
            <strong>تجنب الشبشب في حالة آلام الظهر المزمنة:</strong> لا يوفر أي دعم والأصابع تتشنج للإمساك به، مخلقاً توتراً في سلسلة حتى أسفل الظهر.
          </DontCard>
          <DontCard>
            <strong>لا تجري على الإسفلت بأحذية غير مناسبة:</strong> الإسفلت أصلب 10 مرات من التربة الطبيعية. الجري عليه بأحذية سيئة يُصدم العمود الفقري، الركبتين والكاحلين.
          </DontCard>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-medical-50 border-r-4 border-medical-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-xl font-bold text-medical-900">باختصار</h2>
        </div>
        <p className="text-medical-800 leading-relaxed">
          تغيير أحذيتك — أو استخدام نعل طبي — هو في الغالب أحد أول الخطوات لتخفيف آلام الظهر. مقروناً ببرنامج تقوية عضلي للظهر يوجهه معالج فيزيائي، هذا التغيير قد يُزيل أو يُقلل بشكل كبير آلاماً مزمنة. في مركز شنيدر، نقيّم وضعيتك الكاملة لنمنحك أفضل النصائح الشخصية.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'mal-de-dos-bons-gestes-a-eviter',
      titleFr: 'Mal de Dos : À Faire et À Éviter',
      titleAr: 'آلام الظهر: ما يجب فعله وتجنبه',
      icon: <ArrowUpDown size={20} className="text-medical-600" />
    },
    {
      slug: 'chaussures-douleur-genou',
      titleFr: 'Chaussures et Douleur au Genou',
      titleAr: 'الأحذية وألم الركبة',
      icon: <Activity size={20} className="text-medical-600" />
    },
    {
      slug: 'posture-ergonomie',
      titleFr: 'Posture & Ergonomie',
      titleAr: 'الوضعية والإرغونوميا',
      icon: <Dumbbell size={20} className="text-medical-600" />
    }
  ]
});

export default article;
