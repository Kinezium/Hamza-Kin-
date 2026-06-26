import React from 'react';
import { createArticle } from './ArticleTemplate';
import { AlertTriangle, Activity, BarChart3, Heart, CheckCircle } from 'lucide-react';

const article = createArticle({
  slug: 'urgence-kine-parents-seniors',
  titleFr: 'URGENT: Sauvez vos parents — La kiné peut leur sauver la vie',
  titleAr: 'عاجل: أنقذوا والديكم — الترويض الطبي قد ينقذ حياتهم',
  descriptionFr: 'Votre parent de 65+ ans est-il sédentaire? Ce que vous ne savez pas sur la perte musculaire, les chutes et comment la kinésithérapie peut littéralement changer leur espérance de vie.',
  descriptionAr: 'هل أحد والديك فوق 65 عامًا وقليل الحركة؟ ما لا تعلمه عن ضمور العضلات والسقوط وكيف أن الترويض الطبي قد يُغير حياتهم بالكامل.',
  keywordsFr: 'chutes seniors prévention, kiné personnes âgées, perte musculaire sarcopénie, activité physique senior, prévention chutes personnes agées',
  keywordsAr: 'سقوط المسنين الوقاية, ترويض كبار السن, ضمور العضلات السركوبينيا, نشاط بدني للمسنين, الوقاية من السقوط',
  imageFr: 'https://picsum.photos/seed/urgence-seniors-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/urgence-seniors-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-600" size={28} />
          <h2 className="text-2xl font-bold text-red-900">C'est une urgence silencieuse</h2>
        </div>
        <p className="text-red-900 leading-relaxed font-medium">
          Chaque année, en France, <strong>plus de 10 000 personnes âgées meurent des suites d'une chute</strong>.
          Pas d'une maladie grave. D'une chute. La fracture du col du fémur à elle seule tue davantage
          que beaucoup de cancers diagnostiqués.
        </p>
        <p className="mt-3 text-red-900">
          Et la plupart de ces chutes sont évitables avec un programme de kinésithérapie adapté.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="text-indigo-600" size={24} />
          <h2 className="text-2xl font-bold">Les chiffres qui font peur</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-50 rounded-lg p-4 text-center">
            <p className="text-4xl font-black text-indigo-700">1/3</p>
            <p className="text-indigo-900 mt-2">des personnes de plus de 65 ans chutent au moins une fois par an</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-center">
            <p className="text-4xl font-black text-red-700">50%</p>
            <p className="text-red-900 mt-2">de mortalité à 1 an après fracture du col du fémur chez les 80+</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 text-center">
            <p className="text-4xl font-black text-amber-700">-30%</p>
            <p className="text-amber-900 mt-2">de force musculaire perdue entre 50 et 70 ans sans activité spécifique</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <p className="text-4xl font-black text-green-700">-40%</p>
            <p className="text-green-900 mt-2">de risque de chute avec un programme d'exercice bien conduit (preuves solides)</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Ce qui se passe quand votre parent ne bouge plus</h2>
        </div>
        <p className="mb-4 font-medium">La sédentarité tue les seniors — pas dramatiquement, mais méthodiquement:</p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Sarcopénie:</strong> perte de masse musculaire. À 70 ans sans activité, les jambes n'ont
            plus la force d'absorber un faux pas. <em>Résultat: la chute.</em>
          </li>
          <li>
            <strong>Détérioration de l'équilibre:</strong> le système proprioceptif (capteurs d'équilibre dans
            les muscles et articulations) s'atrophie si on ne le sollicite pas.
          </li>
          <li>
            <strong>Ostéoporose:</strong> la marche et le port de charges légères stimulent le maintien osseux.
            Sans ça, les os se fragilisent. Une chute mineure = fracture.
          </li>
          <li>
            <strong>Déconditionnement cardiovasculaire:</strong> le cœur affaibli ne suffit plus à irriguer
            le cerveau lors d'un lever rapide. Vertiges, chute.
          </li>
          <li>
            <strong>Isolement et dépression:</strong> qui contribuent à une sédentarité encore plus profonde.
            Un cercle vicieux mortel.
          </li>
        </ol>
      </section>

      <section className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold text-green-900">Ce que la kiné change concrètement</h2>
        </div>
        <ul className="list-disc pl-6 space-y-3 text-green-900">
          <li>
            <strong>Renforcement musculaire spécifique:</strong> travail des muscles stabilisateurs des genoux,
            hanches et chevilles. Ces muscles-là sauvent la vie lors d'un faux pas.
          </li>
          <li>
            <strong>Entraînement à l'équilibre:</strong> exercices de proprioception qui recalibrent le système
            nerveux. Le cerveau réapprend à gérer l'instabilité.
          </li>
          <li>
            <strong>Apprentissage du relevé du sol:</strong> savoir se relever seul après une chute peut
            faire la différence entre quelques heures au sol et une nuit entière — qui tue parfois.
          </li>
          <li>
            <strong>Mobilisation articulaire:</strong> les articulations raides et douloureuses rendent chaque
            pas incertain. La kiné redonne de la fluidité au mouvement.
          </li>
          <li>
            <strong>Éducation de l'entourage:</strong> comment aider sans créer de dépendance, comment
            aménager l'environnement (tapis, meubles, éclairage).
          </li>
        </ul>
      </section>

      <section className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold text-amber-900">Ce que vous pouvez faire aujourd'hui</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-2 text-amber-900">
          <li>Parlez à vos parents de leurs difficultés à marcher, monter les escaliers, se lever d'une chaise.</li>
          <li>Consultez un kinésithérapeute pour un bilan d'équilibre et de force.</li>
          <li>Demandez un programme d'exercices à domicile — quelques minutes par jour suffisent pour commencer.</li>
          <li>Regardez les médicaments — certains augmentent le risque de chute (somnifères, anxiolytiques).</li>
          <li>Aménagez la maison: retirez les tapis, installez des barres d'appui dans la salle de bain.</li>
        </ol>
        <p className="mt-4 text-amber-900 font-bold text-lg">
          Il n'est jamais trop tôt et rarement trop tard pour commencer. Mais plus on attend, plus c'est dur.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-red-50 border-r-4 border-red-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-600" size={28} />
          <h2 className="text-2xl font-bold text-red-900">أزمة صامتة</h2>
        </div>
        <p className="text-red-900 leading-relaxed font-medium">
          كل عام، أكثر من <strong>10,000 شخص من كبار السن يموتون جراء السقوط</strong>.
          ليس من مرض خطير. من سقطة. كسر عنق عظم الفخذ وحده يقتل أكثر من كثير من أنواع السرطان.
        </p>
        <p className="mt-3 text-red-900">
          ومعظم هذه السقطات يمكن تجنبها ببرنامج ترويض طبي مناسب.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="text-indigo-600" size={24} />
          <h2 className="text-2xl font-bold">الأرقام المخيفة</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-50 rounded-lg p-4 text-center">
            <p className="text-4xl font-black text-indigo-700">1/3</p>
            <p className="text-indigo-900 mt-2">من الأشخاص فوق 65 عامًا يسقطون مرة على الأقل في السنة</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-center">
            <p className="text-4xl font-black text-red-700">50%</p>
            <p className="text-red-900 mt-2">وفيات خلال سنة بعد كسر عنق الفخذ عند من هم فوق 80 عامًا</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 text-center">
            <p className="text-4xl font-black text-amber-700">-30%</p>
            <p className="text-amber-900 mt-2">من قوة العضلات تُفقد بين 50 و70 عامًا بدون نشاط موجّه</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <p className="text-4xl font-black text-green-700">-40%</p>
            <p className="text-green-900 mt-2">من خطر السقوط مع برنامج تمرين جيد (أدلة علمية قوية)</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">ما يحدث حين يتوقف والدك عن الحركة</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>ضمور العضلات (السركوبينيا):</strong> في سن 70 بدون نشاط، الساقان لا تملكان قوة استيعاب خطوة خاطئة.
            <em> النتيجة: السقوط.</em>
          </li>
          <li>
            <strong>تراجع التوازن:</strong> الجهاز الحسي الحركي (مستقبلات التوازن في العضلات) يضمر بدون تحفيز.</li>
          <li>
            <strong>هشاشة العظام:</strong> المشي وحمل الأوزان الخفيفة تحافظ على كثافة العظام. بدون ذلك، سقطة بسيطة = كسر.
          </li>
          <li>
            <strong>عزلة واكتئاب:</strong> يزيدان من قلة الحركة. دوامة مميتة.
          </li>
        </ol>
      </section>

      <section className="bg-green-50 border-r-4 border-green-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold text-green-900">ما يغيره الترويض الطبي بالفعل</h2>
        </div>
        <ul className="list-disc pl-6 space-y-3 text-green-900">
          <li><strong>تقوية العضلات الاستقرارية:</strong> عضلات الركبتين والوركين والكاحلين — هي التي تنقذ عند الخطوة الخاطئة.</li>
          <li><strong>تدريب التوازن:</strong> تمارين تُعيد معايرة الجهاز العصبي. الدماغ يتعلم إدارة عدم الاستقرار.</li>
          <li><strong>تعلم النهوض من الأرض:</strong> معرفة كيفية النهوض بعد السقوط قد تُنقذ الحياة.</li>
          <li><strong>تعليم الأسرة:</strong> كيف تساعد دون أن تخلق اعتمادًا، وكيف تُهيئ البيت (سجاد، إضاءة، أدوات مساعدة).</li>
        </ul>
      </section>

      <section className="bg-amber-50 border-r-4 border-amber-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold text-amber-900">ما تستطيع فعله اليوم</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-2 text-amber-900">
          <li>تحدث مع والديك عن صعوباتهم في المشي أو صعود الدرج أو النهوض من الكرسي.</li>
          <li>استشر معالجًا فيزيائيًا لتقييم التوازن والقوة.</li>
          <li>اطلب برنامج تمارين منزلية — دقائق يوميًا كافية للبداية.</li>
          <li>راجع الأدوية — بعضها يزيد خطر السقوط (منومات، مضادات القلق).</li>
          <li>جهّز المنزل: أزل السجاد، ثبّت قضبان الإمساك في الحمام.</li>
        </ol>
        <p className="mt-4 text-amber-900 font-bold text-lg">
          لا يوجد وقت مبكر جدًا ونادرًا ما يكون وقت متأخر جدًا. لكن كلما انتظرت، كلما كان الأمر أصعب.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'reeducation-geriatrique-importance-kine', titleFr: 'Rééducation Gériatrique', titleAr: 'إعادة التأهيل لكبار السن', icon: <CheckCircle size={20} className="text-medical-600" /> },
    { slug: 'activite-physique-adaptee-seniors', titleFr: 'Activité Physique Seniors', titleAr: 'النشاط البدني لكبار السن', icon: <Activity size={20} className="text-medical-600" /> },
    { slug: 'tout-le-monde-besoin-kine', titleFr: 'Tout le monde a besoin de kiné', titleAr: 'الجميع يحتاج الترويض', icon: <Heart size={20} className="text-medical-600" /> }
  ]
});

export default article;
