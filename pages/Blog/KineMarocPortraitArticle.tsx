import React from 'react';
import { createArticle } from './ArticleTemplate';
import { MapPin, Stethoscope, Users, TrendingUp, BookOpen } from 'lucide-react';

const article = createArticle({
  slug: 'kinesitherapie-maroc-portrait',
  titleFr: 'La Kinésithérapie au Maroc: Portrait d une Profession Méconnue',
  titleAr: 'الترويض الطبي في المغرب: صورة مهنة مجهولة',
  descriptionFr: 'Qui sont les kinésithérapeutes marocains? Quelle est leur formation, leurs défis, et pourquoi cette profession est cruciale pour la santé du Maroc? Un portrait honnête.',
  descriptionAr: 'من هم المعالجون الفيزيائيون المغاربة؟ ما هي تكوينهم وتحدياتهم؟ ولماذا هذه المهنة حيوية لصحة المغرب؟ صورة صادقة وشاملة.',
  keywordsFr: 'kinésithérapie Maroc, kinésithérapeute marocain, formation kiné Maroc, rééducation Casablanca, santé Maroc professions',
  keywordsAr: 'الترويض الطبي المغرب, معالج فيزيائي مغربي, تكوين الترويض المغرب, إعادة التأهيل بالدار البيضاء, مهن الصحة بالمغرب',
  imageFr: 'https://picsum.photos/seed/kine-maroc-portrait-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/kine-maroc-portrait-chnider/1600/900',
  readTimeFr: '8 min de lecture',
  readTimeAr: '8 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <MapPin className="text-emerald-600" size={26} />
          <h2 className="text-2xl font-bold text-emerald-900">Une profession au carrefour</h2>
        </div>
        <p className="text-emerald-900 leading-relaxed">
          Vous avez une entorse. On vous dit "allez faire de la kiné". Vous y allez.
          Mais avez-vous jamais demandé qui est cette personne en face de vous?
          Combien d'années elle a étudié? Quels défis elle affronte chaque jour?
          Au Maroc, la kinésithérapie est une profession encore mal comprise — et pourtant essentielle.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Formation: des années d'études rigoureuses</h2>
        </div>
        <p className="mb-4">
          Au Maroc, le kinésithérapeute est diplômé d'un <strong>Institut de Formation aux Carrières de Santé (IFCS)</strong>.
          La formation dure <strong>3 à 4 ans</strong> selon les établissements, avec un programme incluant:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Anatomie, physiologie, pathologie</li>
          <li>Techniques de massage, mobilisations, rééducation</li>
          <li>Électrothérapie, balnéothérapie, agents physiques</li>
          <li>Rééducation respiratoire, neurologique, orthopédique, pédiatrique</li>
          <li>Stages hospitaliers obligatoires (CHU, hôpitaux spécialisés)</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Certains kinés marocains complètent leur formation avec des diplômes de spécialisation
          à l'étranger (France, Espagne, Canada) — notamment en neurologie ou en thérapie manuelle.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-purple-600" size={24} />
          <h2 className="text-2xl font-bold">Le paysage actuel: qui sont les kinés marocains?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold mb-2 text-blue-900">Secteur public</h3>
            <p>CHU, hôpitaux régionaux, centres de rééducation. Kinés fonctionnaires — souvent surchargés par un manque de ressources humaines.</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold mb-2 text-green-900">Secteur libéral</h3>
            <p>Cabinets privés, cliniques. La majorité des actes sont réalisés dans ce secteur. Honoraires libres mais plafonnés par la nomenclature CNSS/CNOPS.</p>
          </div>
        </div>
        <p className="mb-3">
          Les grandes villes (Casablanca, Rabat, Marrakech, Fès) concentrent la majorité des professionnels.
          Dans les zones rurales et semi-urbaines, les kinés sont rares ou absents — une inégalité de santé criante.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">Les défis de la profession</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Méconnaissance du public:</strong> "kiné" est souvent associé uniquement au massage.
            La dimension thérapeutique, préventive et rééducative est mal comprise.
          </li>
          <li>
            <strong>Remboursement inadapté:</strong> la CNSS et la CNOPS remboursent sur la base d'un tarif
            de référence de 50 DH la séance — alors que le tarif réel est de 150-300 DH.
            Le remboursement effectif est d'environ 35 DH par séance. Une aberration.
          </li>
          <li>
            <strong>Concurrence déloyale:</strong> des praticiens non diplômés proposent des "séances de kiné"
            à des prix réduits — au détriment de la sécurité des patients.
          </li>
          <li>
            <strong>Manque de reconnaissance officielle:</strong> le kinésithérapeute est souvent vu
            comme un auxiliaire médical, alors qu'il est un professionnel de santé autonome dans son champ.
          </li>
          <li>
            <strong>Inégalité géographique:</strong> les patients ruraux n'ont souvent pas accès à la rééducation,
            même quand elle est médicalement indispensable.
          </li>
        </ol>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold text-blue-900">L'avenir: des raisons d'espérer</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-blue-900">
          <li>Augmentation du nombre de diplômés chaque année — l'offre croît.</li>
          <li>Développement de formations continues et de spécialisations (neurologie, périnée, sport).</li>
          <li>Prise de conscience croissante des patients sur l'importance de la rééducation.</li>
          <li>Utilisation des technologies (télérééducation, applications d'exercices) pour atteindre les zones reculées.</li>
          <li>Mobilisation des associations professionnelles pour une meilleure reconnaissance et revalorisation tarifaire.</li>
        </ul>
        <p className="mt-4 text-blue-900 font-bold">
          Le Maroc a les professionnels, la formation et les besoins. Il manque encore la politique de santé qui reconnaît réellement la kinésithérapie comme pilier du système de soin.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-emerald-50 border-r-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <MapPin className="text-emerald-600" size={26} />
          <h2 className="text-2xl font-bold text-emerald-900">مهنة عند مفترق طرق</h2>
        </div>
        <p className="text-emerald-900 leading-relaxed">
          أصبت بالتواء. قيل لك "اذهب للترويض الطبي". ذهبت. لكن هل سألت يومًا من هو هذا الشخص أمامك؟
          كم سنة درس؟ ما هي تحدياته اليومية؟ في المغرب، الترويض الطبي مهنة لا تزال مجهولة — ومع ذلك أساسية.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">التكوين: سنوات من الدراسة الصارمة</h2>
        </div>
        <p className="mb-4">
          في المغرب، المعالج الفيزيائي يتخرج من <strong>معهد التكوين في المهن الصحية (IFCS)</strong>.
          التكوين يستغرق <strong>3 إلى 4 سنوات</strong> ويشمل:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>التشريح والفيزيولوجيا وعلم الأمراض</li>
          <li>تقنيات التدليك والتعبئة وإعادة التأهيل</li>
          <li>العلاج الكهربائي والعلاج بالمياه والعوامل الفيزيائية</li>
          <li>التأهيل التنفسي والعصبي والعظمي والأطفال</li>
          <li>تدريب مستشفيات إجباري (مستشفيات جامعية ومتخصصة)</li>
        </ul>
        <p className="mt-4 text-gray-700">
          بعض المعالجين المغاربة يُكملون تكوينهم بدبلومات تخصص في الخارج (فرنسا، إسبانيا، كندا)
          — خاصة في طب الأعصاب أو العلاج اليدوي.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">تحديات المهنة</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>جهل الرأي العام:</strong> كثيرًا ما يُختزل "الترويض" في التدليك فقط.
            البعد العلاجي والوقائي وإعادة التأهيل سيء الفهم.
          </li>
          <li>
            <strong>استرداد مالي غير مناسب:</strong> CNSS وCNOPS تُعوّضان على أساس 50 درهمًا للجلسة
            — بينما التعرفة الحقيقية بين 150 و300 درهم.
            التعويض الفعلي حوالي 35 درهمًا للجلسة. فضيحة.
          </li>
          <li>
            <strong>منافسة غير عادلة:</strong> ممارسون غير مؤهلين يقدمون "جلسات ترويض" بأسعار منخفضة
            — على حساب سلامة المرضى.
          </li>
          <li>
            <strong>عدم التقدير الرسمي:</strong> كثيرًا ما يُنظر إلى المعالج الفيزيائي كمساعد طبي،
            في حين أنه مهني صحي مستقل في مجاله.
          </li>
          <li>
            <strong>فجوة جغرافية:</strong> المرضى في المناطق القروية لا يحصلون على إعادة التأهيل
            حتى حين تكون ضرورة طبية.
          </li>
        </ol>
      </section>

      <section className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold text-blue-900">المستقبل: أسباب للأمل</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-blue-900">
          <li>ارتفاع عدد الخريجين سنويًا — العرض يتنامى.</li>
          <li>تطوير التكوين المستمر والتخصصات (الأعصاب، قاع الحوض، الرياضة).</li>
          <li>وعي متزايد من المرضى بأهمية إعادة التأهيل.</li>
          <li>استخدام التكنولوجيا (الترويض عن بُعد، تطبيقات التمارين) للوصول للمناطق البعيدة.</li>
          <li>تحرك الجمعيات المهنية من أجل اعتراف أفضل وتحسين التعريفات.</li>
        </ul>
        <p className="mt-4 text-blue-900 font-bold">
          المغرب لديه الكفاءات والتكوين والحاجة. ينقصه السياسة الصحية التي تعترف فعلًا بالترويض الطبي ركيزة للنظام الصحي.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'remboursement-kine-maroc-cnss-cnops', titleFr: 'Remboursement kiné: le scandale', titleAr: 'استرداد الترويض: الفضيحة', icon: <TrendingUp size={20} className="text-medical-600" /> },
    { slug: 'kine-liberal-cnss-cnops-injustice', titleFr: 'Kinés libéraux et remboursement', titleAr: 'المعالجون الخواص والاسترداد', icon: <Stethoscope size={20} className="text-medical-600" /> },
    { slug: 'tout-le-monde-besoin-kine', titleFr: 'Tout le monde a besoin de kiné', titleAr: 'الجميع يحتاج الترويض', icon: <Users size={20} className="text-medical-600" /> }
  ]
});

export default article;
