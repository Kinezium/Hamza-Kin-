import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Brain, CheckCircle, XCircle, Activity, Heart, Stethoscope, AlertTriangle, Shield } from 'lucide-react';

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
  slug: 'sclerose-en-plaque-kinesitherapie',
  titleFr: 'Sclérose en Plaque: Vivre et Bouger au Quotidien',
  titleAr: 'التصلب المتعدد: كيف تعيش وتتحرك يومياً',
  descriptionFr:
    'La sclérose en plaque impacte la mobilité et la fatigue. Découvrez comment la kinésithérapie aide à maintenir l\'autonomie, réduire les chutes et améliorer la qualité de vie au quotidien.',
  descriptionAr:
    'التصلب المتعدد يؤثر على الحركة والتعب. اكتشف كيف يساعد الترويض الطبي في الحفاظ على الاستقلالية وتقليل السقوط وتحسين جودة الحياة اليومية.',
  keywordsFr:
    'sclérose en plaque, SEP, kinésithérapie sclérose en plaque, exercice SEP, fatigue SEP, traitement SEP Casablanca',
  keywordsAr:
    'التصلب المتعدد, تمارين التصلب المتعدد, ترويض طبي للتصلب المتعدد, إجهاد التصلب المتعدد, علاج التصلب المتعدد',
  imageFr: 'https://picsum.photos/seed/sep-kine-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/sep-kine-chnider/1600/900',
  readTimeFr: '8 min de lecture',
  readTimeAr: '8 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold text-blue-900">Qu'est-ce que la sclérose en plaque ?</h2>
        </div>
        <p className="text-blue-800 leading-relaxed">
          La <strong>sclérose en plaque (SEP)</strong> est une maladie du système nerveux central qui attaque la myéline,
          la gaine protectrice des nerfs. Elle provoque des symptômes variés : fatigue intense, troubles de l'équilibre,
          faiblesse musculaire, fourmillements, et parfois des problèmes de vision. C'est une maladie chronique, mais avec
          une bonne prise en charge, il est tout à fait possible de maintenir une bonne qualité de vie.
        </p>
      </section>

      {/* Symptoms */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-500" size={24} />
          <h2 className="text-2xl font-bold">Les symptômes les plus fréquents</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            '😴 Fatigue intense, même après le repos',
            '🚶 Difficultés à marcher ou à maintenir l\'équilibre',
            '💪 Faiblesse ou raideur musculaire dans les membres',
            '🫲 Fourmillements, engourdissements dans les mains ou pieds',
            '👁️ Troubles de la vision (vision floue, double vision)',
            '🧠 Problèmes de mémoire ou de concentration',
            '🚽 Troubles vésicaux (envies fréquentes ou difficultés)',
            '🌡️ Aggravation des symptômes avec la chaleur'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3 text-sm">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Role of physiotherapy */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Le rôle essentiel de la kinésithérapie</h2>
        </div>
        <p className="mb-4 text-gray-700 leading-relaxed">
          La kinésithérapie ne guérit pas la SEP, mais elle est l'un des piliers les plus importants du traitement.
          Elle permet de <strong>maintenir la mobilité</strong>, de <strong>prévenir les chutes</strong>,
          de <strong>gérer la fatigue</strong> et d'améliorer le quotidien de façon significative.
        </p>
        <div className="space-y-3">
          {[
            { title: 'Travail de l\'équilibre', desc: 'Exercices pour réduire le risque de chute, très courant dans la SEP.' },
            { title: 'Renforcement musculaire doux', desc: 'Pour lutter contre la faiblesse musculaire sans provoquer de fatigue excessive.' },
            { title: 'Rééducation à la marche', desc: 'Correction de la démarche et amélioration de l\'endurance.' },
            { title: 'Étirements et assouplissements', desc: 'Pour réduire la spasticité (raideur musculaire) très fréquente dans la SEP.' },
            { title: 'Gestion de la fatigue', desc: 'Techniques pour économiser l\'énergie et adapter les activités quotidiennes.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-medical-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to do */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold text-green-800">✅ Ce qu'il faut FAIRE avec la SEP</h2>
        </div>
        <div className="space-y-3">
          <DoCard>
            <strong>Restez actif à votre rythme :</strong> L'exercice modéré améliore la force, l'équilibre et le moral. Adaptez toujours l'intensité à vos capacités du jour.
          </DoCard>
          <DoCard>
            <strong>Faites de la kinésithérapie régulièrement :</strong> Même en période de stabilité, les séances permettent de prévenir la détérioration musculaire et articulaire.
          </DoCard>
          <DoCard>
            <strong>Nagez ou pratiquez l'aquathérapie :</strong> L'eau fraîche soulage les symptômes, facilite les mouvements et réduit la fatigue.
          </DoCard>
          <DoCard>
            <strong>Dormez suffisamment :</strong> La qualité du sommeil est directement liée à la gestion de la fatigue, symptôme numéro un de la SEP.
          </DoCard>
          <DoCard>
            <strong>Utilisez des aides techniques si besoin :</strong> Canne, déambulateur, orthèses… ces outils améliorent la sécurité et permettent de rester autonome plus longtemps.
          </DoCard>
          <DoCard>
            <strong>Adoptez une alimentation anti-inflammatoire :</strong> Légumes, poissons gras, oméga-3, fruits — ils contribuent à réduire l'inflammation dans le corps.
          </DoCard>
          <DoCard>
            <strong>Gérez votre stress :</strong> Le stress peut aggraver les symptômes. La méditation, le yoga doux et la respiration profonde sont des alliés précieux.
          </DoCard>
        </div>
      </section>

      {/* What NOT to do */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-500" size={24} />
          <h2 className="text-2xl font-bold text-red-700">❌ Ce qu'il faut ÉVITER avec la SEP</h2>
        </div>
        <div className="space-y-3">
          <DontCard>
            <strong>Évitez la chaleur excessive :</strong> Les bains chauds, le hammam, l'exposition prolongée au soleil peuvent aggraver temporairement les symptômes (phénomène d'Uhthoff).
          </DontCard>
          <DontCard>
            <strong>Ne vous épuisez pas :</strong> Pousser jusqu'à l'épuisement total aggrave la fatigue chronique. Apprenez à reconnaître vos limites et à vous arrêter avant d'être à bout.
          </DontCard>
          <DontCard>
            <strong>N'arrêtez pas l'activité physique complètement :</strong> Beaucoup pensent qu'il faut se reposer absolument. En réalité, l'immobilité aggrave la raideur et la faiblesse musculaire.
          </DontCard>
          <DontCard>
            <strong>Évitez les sports à fort impact ou à risque de chute :</strong> Préférez des activités sécurisées et adaptées à votre état neurologique du moment.
          </DontCard>
          <DontCard>
            <strong>Ne négligez pas les poussées :</strong> Toute aggravation soudaine des symptômes doit être signalée rapidement à votre médecin neurologue.
          </DontCard>
          <DontCard>
            <strong>Évitez l'alcool et le tabac :</strong> Ces substances accélèrent la progression de la maladie et aggravent la fatigue et les problèmes cognitifs.
          </DontCard>
        </div>
      </section>

      {/* Practical tips */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-purple-600" size={24} />
          <h2 className="text-2xl font-bold">Conseils pratiques au quotidien</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: '🌅', title: 'Bouger le matin', desc: 'Faites vos exercices en première partie de journée quand votre énergie est au maximum.' },
            { icon: '⏱️', title: 'Planifier les pauses', desc: 'Intégrez des temps de repos dans votre journée avant de vous sentir épuisé.' },
            { icon: '🧊', title: 'Restez au frais', desc: 'En cas de chaleur, utilisez un ventilateur ou un pack de froid pour réduire les symptômes.' },
            { icon: '📓', title: 'Tenez un journal', desc: 'Notez vos symptômes, vos activités et votre niveau d\'énergie pour mieux anticiper les jours difficiles.' },
            { icon: '👨‍👩‍👧', title: 'Parlez à vos proches', desc: 'Un entourage informé peut mieux vous soutenir et adapter ses attentes à vos capacités.' },
            { icon: '🏥', title: 'Suivi multidisciplinaire', desc: 'Neurologue, kinésithérapeute, ergothérapeute, psychologue — travaillez avec toute l\'équipe.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-4 bg-purple-50 rounded-lg">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-purple-900">{item.title}</p>
                <p className="text-purple-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-medical-50 border-l-4 border-medical-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold text-medical-900">Message d'espoir</h2>
        </div>
        <p className="text-medical-800 leading-relaxed">
          La sclérose en plaque est une maladie sérieuse, mais elle ne signifie pas la fin d'une vie active et épanouissante.
          Des milliers de personnes avec la SEP travaillent, pratiquent des sports adaptés, voyagent et mènent une vie normale.
          La clé est une prise en charge précoce, un suivi régulier en kinésithérapie et une adaptation positive de votre mode de vie.
          Au Centre Chnider, nous accompagnons les patients SEP avec des protocoles personnalisés pour chaque phase de la maladie.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold text-blue-900">ما هو التصلب المتعدد؟</h2>
        </div>
        <p className="text-blue-800 leading-relaxed">
          <strong>التصلب المتعدد (SEP)</strong> هو مرض يصيب الجهاز العصبي المركزي، يهاجم فيه الجهاز المناعي غمد الميالين الواقي للأعصاب.
          يسبب أعراضاً متنوعة: إرهاق شديد، اضطرابات في التوازن، ضعف عضلي، تنميل وخدر، وأحياناً مشاكل في الرؤية.
          إنه مرض مزمن، لكن مع الرعاية الجيدة، يمكن الحفاظ على جودة حياة ممتازة.
        </p>
      </section>

      {/* Symptoms */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-500" size={24} />
          <h2 className="text-2xl font-bold">الأعراض الأكثر شيوعاً</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            '😴 إرهاق شديد حتى بعد الراحة',
            '🚶 صعوبة في المشي والحفاظ على التوازن',
            '💪 ضعف أو تيبس عضلي في الأطراف',
            '🫲 تنميل وخدر في اليدين أو القدمين',
            '👁️ اضطرابات بصرية (رؤية ضبابية أو مزدوجة)',
            '🧠 مشاكل في الذاكرة والتركيز',
            '🚽 اضطرابات المثانة',
            '🌡️ تفاقم الأعراض مع الحرارة'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3 text-sm">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Role of physiotherapy */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">الدور الأساسي للترويض الطبي</h2>
        </div>
        <p className="mb-4 text-gray-700 leading-relaxed">
          الترويض الطبي لا يشفي التصلب المتعدد، لكنه أحد أهم ركائز العلاج.
          يساعد على <strong>الحفاظ على الحركة</strong> و<strong>منع السقوط</strong>
          و<strong>التحكم في الإرهاق</strong> وتحسين الحياة اليومية بشكل ملحوظ.
        </p>
        <div className="space-y-3">
          {[
            { title: 'تدريب التوازن', desc: 'تمارين لتقليل خطر السقوط الشائع في مرضى التصلب المتعدد.' },
            { title: 'تقوية العضلات بلطف', desc: 'لمواجهة الضعف العضلي دون إحداث إرهاق مفرط.' },
            { title: 'إعادة تأهيل المشية', desc: 'تصحيح طريقة المشي وتحسين القدرة على التحمل.' },
            { title: 'التمدد والمرونة', desc: 'للحد من التشنج العضلي الشائع في التصلب المتعدد.' },
            { title: 'إدارة الإرهاق', desc: 'تقنيات لترشيد الطاقة وتكييف الأنشطة اليومية.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-medical-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to do */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold text-green-800">✅ ما يجب فعله مع التصلب المتعدد</h2>
        </div>
        <div className="space-y-3">
          <DoCard>
            <strong>ابقَ نشيطاً بحسب طاقتك:</strong> التمارين المعتدلة تحسن القوة والتوازن والمعنويات. كيّف الشدة دائماً حسب حالتك في ذلك اليوم.
          </DoCard>
          <DoCard>
            <strong>حضر جلسات الترويض الطبي بانتظام:</strong> حتى في فترات الاستقرار، تمنع الجلسات تدهور العضلات والمفاصل.
          </DoCard>
          <DoCard>
            <strong>مارس السباحة أو العلاج المائي:</strong> الماء البارد يخفف الأعراض ويسهل الحركة ويقلل الإرهاق.
          </DoCard>
          <DoCard>
            <strong>نَم بشكل كافٍ:</strong> جودة النوم مرتبطة مباشرة بإدارة الإرهاق، العرض الأول للتصلب المتعدد.
          </DoCard>
          <DoCard>
            <strong>استخدم الأدوات المساعدة عند الحاجة:</strong> عصا، مشاية، دعامات... هذه الأدوات تحسن الأمان وتتيح لك الاستقلالية لفترة أطول.
          </DoCard>
          <DoCard>
            <strong>اعتمد نظاماً غذائياً مضاداً للالتهاب:</strong> الخضروات، الأسماك الدهنية، أوميغا 3 — تساهم في تقليل الالتهاب في الجسم.
          </DoCard>
          <DoCard>
            <strong>تحكم في توترك:</strong> التوتر قد يفاقم الأعراض. التأمل، اليوغا اللطيفة والتنفس العميق حلفاء قيّمون.
          </DoCard>
        </div>
      </section>

      {/* What NOT to do */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-500" size={24} />
          <h2 className="text-2xl font-bold text-red-700">❌ ما يجب تجنبه مع التصلب المتعدد</h2>
        </div>
        <div className="space-y-3">
          <DontCard>
            <strong>تجنب الحرارة الشديدة:</strong> الحمامات الساخنة، الحمام المغربي، التعرض المطوّل للشمس قد تفاقم الأعراض مؤقتاً (ظاهرة أوتوف).
          </DontCard>
          <DontCard>
            <strong>لا تُنهِك نفسك:</strong> الدفع حتى الإرهاق التام يفاقم التعب المزمن. تعلّم التعرف على حدودك وتوقف قبل الوصول إلى نقطة الانهيار.
          </DontCard>
          <DontCard>
            <strong>لا تتوقف عن النشاط البدني كلياً:</strong> يعتقد الكثيرون أنه يجب الراحة التامة. في الواقع، الخمول يفاقم التيبس والضعف العضلي.
          </DontCard>
          <DontCard>
            <strong>تجنب الرياضات عالية الأثر أو المحفوفة بمخاطر السقوط:</strong> فضّل الأنشطة الآمنة والمكيّفة مع وضعك العصبي.
          </DontCard>
          <DontCard>
            <strong>لا تتجاهل النوبات:</strong> أي تفاقم مفاجئ للأعراض يجب الإبلاغ عنه بسرعة لطبيبك الأعصاب.
          </DontCard>
          <DontCard>
            <strong>تجنب الكحول والتبغ:</strong> تسرّع هذه المواد تقدم المرض وتفاقم الإرهاق والمشاكل الإدراكية.
          </DontCard>
        </div>
      </section>

      {/* Practical tips */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-purple-600" size={24} />
          <h2 className="text-2xl font-bold">نصائح عملية يومية</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: '🌅', title: 'تحرك صباحاً', desc: 'افعل تمارينك في الصباح الباكر عندما تكون طاقتك في أعلى مستوياتها.' },
            { icon: '⏱️', title: 'خطط لفترات الراحة', desc: 'أدرج أوقات راحة في يومك قبل أن تشعر بالإرهاق.' },
            { icon: '🧊', title: 'ابق في مكان بارد', desc: 'عند الحرارة، استخدم مروحة أو كمادة باردة لتقليل الأعراض.' },
            { icon: '📓', title: 'احتفظ بدفتر يومي', desc: 'سجّل أعراضك وأنشطتك ومستوى طاقتك لتوقع الأيام الصعبة.' },
            { icon: '👨‍👩‍👧', title: 'تحدث مع عائلتك', desc: 'المحيط المطلع يمكنه دعمك بشكل أفضل وتكييف توقعاته مع قدراتك.' },
            { icon: '🏥', title: 'متابعة متعددة التخصصات', desc: 'طبيب أعصاب، معالج فيزيائي، معالج وظيفي — اعمل مع الفريق كاملاً.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-4 bg-purple-50 rounded-lg">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-purple-900">{item.title}</p>
                <p className="text-purple-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-medical-50 border-r-4 border-medical-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold text-medical-900">رسالة أمل</h2>
        </div>
        <p className="text-medical-800 leading-relaxed">
          التصلب المتعدد مرض جدي، لكنه لا يعني نهاية حياة نشطة ومُزدهرة.
          آلاف الأشخاص المصابين بالتصلب المتعدد يعملون، يمارسون الرياضة المكيّفة، يسافرون ويعيشون حياة طبيعية.
          المفتاح هو التشخيص المبكر، المتابعة المنتظمة بالترويض الطبي والتكيف الإيجابي لأسلوب الحياة.
          في مركز شنيدر، نرافق مرضى التصلب المتعدد ببروتوكولات مخصصة لكل مرحلة من مراحل المرض.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'mal-de-dos-bons-gestes-a-eviter',
      titleFr: 'Mal de Dos : À Faire et À Éviter',
      titleAr: 'آلام الظهر: ما يجب فعله وتجنبه',
      icon: <Shield size={20} className="text-medical-600" />
    },
    {
      slug: 'cervicalgie-bons-gestes-posture',
      titleFr: 'Cervicalgie : Les Bons Gestes',
      titleAr: 'ألم الرقبة: التصرفات الصحيحة',
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
