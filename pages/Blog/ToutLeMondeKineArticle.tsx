import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Users, CheckCircle, AlertTriangle, Activity, Heart } from 'lucide-react';

const article = createArticle({
  slug: 'tout-le-monde-besoin-kine',
  titleFr: 'Tout le monde a besoin de kinésithérapie (et vous ne le savez pas encore)',
  titleAr: 'الجميع يحتاج إلى الترويض الطبي (وأنت لا تعلم ذلك بعد)',
  descriptionFr: 'Vous pensez que la kiné c est pour "les malades"? Détrompez-vous. Voici pourquoi presque tout le monde devrait consulter un kinésithérapeute au moins une fois.',
  descriptionAr: 'تظن أن الترويض الطبي مخصص فقط "للمرضى"؟ اكتشف لماذا تحتاجه أنت أيضًا — حتى لو كنت تشعر بصحة جيدة.',
  keywordsFr: 'kiné préventive, tout le monde besoin kinésithérapie, prévention douleur, bilan postural, kinésithérapie préventive',
  keywordsAr: 'الترويض الوقائي, الجميع يحتاج الترويض, منع الألم, تقييم وضعي, الترويض الطبي الوقائي',
  imageFr: 'https://picsum.photos/seed/tout-le-monde-kine-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/tout-le-monde-kine-chnider/1600/900',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-600" size={26} />
          <h2 className="text-2xl font-bold text-red-900">Le mythe du "je vais bien, j'ai pas besoin de kiné"</h2>
        </div>
        <p className="text-red-900 leading-relaxed">
          Vous passez 8 heures assis devant un écran. Vous dormez peut-être sur un mauvais matelas.
          Vous courez le week-end sans jamais vous étirer. Vous portez votre sac toujours du même côté.
          Vous "tenez" votre ventre, vous cambrez le dos, vous croisez les jambes.
        </p>
        <p className="mt-3 text-red-900 font-bold">
          Votre corps accumule des compensations. En silence. Et ça ne dure jamais indéfiniment.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Les 7 profils qui devraient voir un kiné (et ne le font pas)</h2>
        </div>
        <div className="space-y-4">
          {[
            { title: "1. Le bureau-personne", desc: "8h/jour assis. Dos voûté, épaules en avant, nuque tendue, psoas raccourci. Vous n'avez pas encore mal? Attendez 3 ans.", icon: "💻" },
            { title: "2. Le sportif du dimanche", desc: "Vous courez, vous faites du foot, du tennis le week-end — sans jamais vous préparer ni récupérer. Entorse, tendinite, hernie — c'est une question de temps.", icon: "🏃" },
            { title: "3. Le parent de jeune enfant", desc: "Vous portez votre bébé, vous vous penchez 200 fois par jour. Votre dos subit quelque chose pour lequel il n'a pas été préparé.", icon: "👶" },
            { title: "4. La personne en post-partum", desc: "Après l'accouchement, le périnée, le diastasis, les ligaments relâchés — des mois de rééducation périnéale peuvent changer une vie entière.", icon: "🌸" },
            { title: "5. Le senior 'encore en forme'", desc: "La perte de masse musculaire commence à 30 ans. À 60 ans, sans travail actif, elle s'accélère. Le kiné peut ralentir tout ça.", icon: "🧓" },
            { title: "6. L'enfant qui tombe tout le temps", desc: "Hyperlaxité, trouble de la coordination, pieds plats sévères — le kiné pédiatrique identifie et traite ce que 'il va rattraper' n'a pas résolu.", icon: "🧒" },
            { title: "7. Vous, après une blessure 'guérie'", desc: "La cheville que vous aviez entorse à 18 ans? Elle compensée. Le genou que vous avez opéré? Sans kiné, votre cerveau ne sait peut-être pas qu'il a récupéré.", icon: "🦵" }
          ].map(({ title, desc, icon }) => (
            <div key={title} className="border border-gray-200 rounded-lg p-4 hover:border-medical-300 transition">
              <h3 className="font-bold text-lg mb-2">{icon} {title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold text-green-900">Kiné préventive vs kiné curative</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">🔴 Curative (ce qu'on connaît)</h3>
            <p>Vous avez mal, vous avez une blessure. Vous allez chez le kiné pour traiter.</p>
            <p className="mt-2 text-sm text-gray-600">Résultat: souvent 10-20 séances à faire, douleur installée, récupération plus longue.</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">✅ Préventive (ce qu'on devrait faire)</h3>
            <p>Bilan postural annuel. Correction des déséquilibres avant qu'ils causent des problèmes.</p>
            <p className="mt-2 text-sm text-gray-600">Résultat: 2-4 séances max, problèmes évités, qualité de vie préservée.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Ce qu'un bilan kiné révèle en 30 minutes</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li>Déséquilibres posturaux (une épaule plus haute, bassin incliné)</li>
          <li>Raideurs musculaires asymétriques</li>
          <li>Faiblesses musculaires non détectées</li>
          <li>Troubles de l'équilibre ou de la proprioception</li>
          <li>Mauvaises habitudes de mouvement (compensation, gestes à risque)</li>
          <li>Zones de tension pré-douloureuses</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Un bilan kiné annuel, c'est comme un bilan médical annuel — mais pour votre appareil locomoteur.
          Pourquoi attend-on que ça casse pour consulter?
        </p>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold text-blue-900">Le vrai message</h2>
        </div>
        <p className="text-blue-900 leading-relaxed mb-4">
          La kinésithérapie n'est pas réservée aux malades, aux blessés graves ou aux seniors.
          C'est une discipline de santé préventive, éducative et curative qui devrait faire partie
          du parcours de santé de chaque personne — comme le dentiste, comme l'ophtalmologue.
        </p>
        <p className="text-blue-900 font-bold text-lg">
          Ne demandez pas "est-ce que j'ai besoin de kiné?" Demandez plutôt "qu'est-ce que mon corps
          essaie de me dire — et est-ce que j'écoute?"
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-red-50 border-r-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-600" size={26} />
          <h2 className="text-2xl font-bold text-red-900">خرافة "أنا بخير، لا أحتاج ترويضًا"</h2>
        </div>
        <p className="text-red-900 leading-relaxed">
          تمضي 8 ساعات جالسًا أمام شاشة. تنام على فراش سيئ. تركض نهاية الأسبوع دون أي إحماء.
          تحمل حقيبتك دائمًا على الكتف ذاتها.
        </p>
        <p className="mt-3 text-red-900 font-bold">
          جسمك يُراكم التعويضات. بصمت. وهذا لا يستمر إلى الأبد.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">7 أشخاص يحتاجون ترويضًا (ولا يعلمون)</h2>
        </div>
        <div className="space-y-4">
          {[
            { title: "1. موظف المكتب", desc: "8 ساعات يوميًا جالسًا. ظهر منحن، كتفان للأمام، رقبة متوترة. لا تتألم بعد؟ انتظر 3 سنوات.", icon: "💻" },
            { title: "2. رياضي نهاية الأسبوع", desc: "تركض، تلعب كرة القدم بدون إحماء أو استشفاء. التواء، التهاب أوتار، فتق — مسألة وقت.", icon: "🏃" },
            { title: "3. أحد الوالدين لطفل رضيع", desc: "تحمل طفلك وتنحني مئات المرات يوميًا. ظهرك يتحمل شيئًا لم يتحضر له.", icon: "👶" },
            { title: "4. ما بعد الولادة", desc: "بعد الوضع، العضلات والأربطة تحتاج إعادة تأهيل. جلسات معدودة قد تغير الحياة.", icon: "🌸" },
            { title: "5. المسن 'لا يزال بصحة جيدة'", desc: "ضمور العضلات يبدأ في الثلاثينيات. في الستينيات يتسارع. الترويض يُبطئ هذا كله.", icon: "🧓" },
            { title: "6. الطفل الذي يقع كثيرًا", desc: "فرط المرونة، تنسيق ضعيف، قدم مسطحة شديدة — المعالج الفيزيائي يكتشف ما لا يحله 'سيتجاوزه'.", icon: "🧒" },
            { title: "7. أنت بعد إصابة 'شُفيت'", desc: "الكاحل الذي التويته في سن 18؟ الركبة التي أُجريت لها عملية؟ دماغك ربما لا يعلم بعد أنها تعافت.", icon: "🦵" }
          ].map(({ title, desc, icon }) => (
            <div key={title} className="border border-gray-200 rounded-lg p-4 hover:border-medical-300 transition">
              <h3 className="font-bold text-lg mb-2">{icon} {title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-50 border-r-4 border-green-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold text-green-900">الترويض الوقائي مقابل الترويض العلاجي</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-red-200">
            <h3 className="font-bold text-red-800 mb-2">🔴 العلاجي (ما نعرفه)</h3>
            <p>تتألم أو تُصاب. تذهب للترويض للعلاج.</p>
            <p className="mt-2 text-sm text-gray-600">النتيجة: 10-20 جلسة، ألم مستقر، تعافٍ أطول.</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">✅ الوقائي (ما يجب أن نفعله)</h3>
            <p>فحص وضعي سنوي. تصحيح الاختلالات قبل أن تتحول لمشاكل.</p>
            <p className="mt-2 text-sm text-gray-600">النتيجة: 2-4 جلسات فقط، مشاكل مُتجنَّبة، جودة حياة محفوظة.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold text-blue-900">الرسالة الحقيقية</h2>
        </div>
        <p className="text-blue-900 leading-relaxed mb-4">
          الترويض الطبي ليس حكرًا على المرضى أو الجرحى. إنه تخصص صحي وقائي وتعليمي وعلاجي
          يجب أن يكون جزءًا من مسار صحة كل إنسان — كطبيب الأسنان وطبيب العيون.
        </p>
        <p className="text-blue-900 font-bold text-lg">
          لا تسأل "هل أحتاج ترويضًا؟" بل اسأل "ماذا يحاول جسمي أن يقول لي — وهل أستمع؟"
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'urgence-kine-parents-seniors', titleFr: 'URGENT: Sauvez vos parents', titleAr: 'عاجل: أنقذوا والديكم', icon: <AlertTriangle size={20} className="text-medical-600" /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرغونوميا', icon: <Activity size={20} className="text-medical-600" /> },
    { slug: 'activite-physique-adaptee-seniors', titleFr: 'Activité Physique Seniors', titleAr: 'النشاط البدني لكبار السن', icon: <Users size={20} className="text-medical-600" /> }
  ]
});

export default article;
