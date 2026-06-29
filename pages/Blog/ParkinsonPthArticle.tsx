import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Brain, AlertTriangle, CheckCircle, Stethoscope, Activity } from 'lucide-react';

const article = createArticle({
  slug: 'parkinson-prothese-hanche-pth',
  titleFr: 'Parkinson et Prothèse de Hanche (PTH): Un Défi Particulier',
  titleAr: 'باركنسون وبدلة الورك الكاملة (PTH): تحدٍّ خاص',
  descriptionFr: 'Maladie de Parkinson, risque de chute et fractures de hanche: quand une PTH devient nécessaire, quelles sont les indications/contre-indications et quels défis spécifiques en kinésithérapie?',
  descriptionAr: 'مرض باركنسون وخطر السقوط وكسور الورك: متى تصبح بدلة الورك الكاملة ضرورية؟ ما هي الاستطبابات وموانعها وما التحديات الخاصة في الترويض الطبي؟',
  keywordsFr: 'Parkinson fracture hanche, indications PTH Parkinson, contre indications prothèse hanche, prévention chutes Parkinson, kinésithérapie après PTH',
  keywordsAr: 'باركنسون كسر الورك, استطبابات بدلة الورك, موانع بدلة الورك, الوقاية من السقوط باركنسون, الترويض بعد بدلة الورك',
  imageFr: 'https://picsum.photos/seed/parkinson-pth-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/parkinson-pth-chnider/1600/900',
  readTimeFr: '9 min de lecture',
  readTimeAr: '9 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="text-purple-600" size={26} />
          <h2 className="text-2xl font-bold text-purple-900">Parkinson + fracture de hanche: un profil à haut risque</h2>
        </div>
        <p className="text-purple-900 leading-relaxed">
          Chez les patients parkinsoniens, le risque de chute est élevé à cause de la rigidité,
          du freezing, des troubles de l'équilibre et des troubles de la marche.
          Ces chutes peuvent entraîner des <strong>fractures de hanche</strong> qui nécessitent parfois
          une <strong>PTH (Prothèse Totale de Hanche)</strong>. Ce contexte demande une stratégie de prise
          en charge spécifique, médicale et kinésithérapique.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Brain className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Pourquoi les parkinsoniens font plus de fractures de hanche</h2>
        </div>
        <p className="mb-3">Les éléments qui augmentent le risque de chute et de fracture:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="font-bold text-purple-800 mb-2">Facteurs neurologiques</h3>
            <ul className="list-disc pl-4 space-y-1 text-purple-900 text-sm">
              <li>Instabilité posturale et réactions d'équilibre diminuées</li>
              <li>Bradykinésie, rigidité, freezing of gait</li>
              <li>Festination et réduction de l'amplitude du pas</li>
              <li>Double-tâche difficile (marcher + parler, marcher + tourner)</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-800 mb-2">Facteurs associés</h3>
            <ul className="list-disc pl-4 space-y-1 text-red-900 text-sm">
              <li>Ostéoporose et fragilité osseuse liées à l'âge</li>
              <li>Hypotension orthostatique (liée à la maladie ou aux traitements)</li>
              <li>Baisse de force musculaire et condition physique</li>
              <li>Environnement domestique à risque (escaliers, tapis, faible éclairage)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">Quand indiquer une PTH après fracture chez le parkinsonien</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-4">
            <h3 className="font-bold text-emerald-800 mb-1">✅ Indications fréquentes de PTH</h3>
            <ul className="list-disc pl-4 mt-1 text-emerald-900 text-sm">
              <li>Fracture déplacée du col fémoral chez patient âgé fonctionnel</li>
              <li>Douleur importante et incapacité de marche malgré traitement conservateur</li>
              <li>Arthrose sévère associée rendant la reconstruction peu fiable</li>
              <li>Objectif de verticalisation et reprise de marche précoces</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
            <h3 className="font-bold text-amber-800 mb-1">⚠️ Contre-indications ou limites à discuter</h3>
            <ul className="list-disc pl-4 mt-1 text-amber-900 text-sm">
              <li>Infection active locale ou systémique</li>
              <li>État médical instable (cardio-respiratoire, métabolique sévère)</li>
              <li>Incapacité majeure à suivre les consignes post-opératoires</li>
              <li>Démence avancée avec risque de non-observance extrême</li>
              <li>Espérance de récupération fonctionnelle très limitée</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-1">🔎 Décision toujours individualisée</h3>
            <p className="text-blue-900 text-sm">Le stade de Parkinson, le niveau cognitif, l'autonomie pré-fracture, l'entourage et les objectifs de vie guident le choix entre PTH et autres options chirurgicales.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Défis en kinésithérapie après fracture + PTH</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Prévenir les chutes dès J1:</strong> transferts sécurisés, gestion du freezing, apprentissage des demi-tours, choix adapté de l'aide technique.
          </li>
          <li>
            <strong>Respecter les précautions anti-luxation:</strong> selon la voie d'abord chirurgicale, intégrer les restrictions dans chaque geste du quotidien.
          </li>
          <li>
            <strong>Synchroniser avec la lévodopa:</strong> planifier les séances dans les phases "ON" pour optimiser la qualité motrice et l'apprentissage.
          </li>
          <li>
            <strong>Gérer la fatigue et la bradykinésie:</strong> séances plus courtes, plus fréquentes, avec objectifs fonctionnels concrets.
          </li>
          <li>
            <strong>Travailler l'équilibre et la marche avec cueing:</strong> repères visuels, auditifs et consignes simples pour limiter les blocages.
          </li>
          <li>
            <strong>Former les aidants:</strong> prévention des chutes à domicile, aménagement de l'environnement, surveillance des signes d'alerte.
          </li>
        </ol>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">Message pratique pour les patients et les soignants</h2>
        </div>
        <p className="mb-3 text-emerald-900 font-medium">Chez un patient parkinsonien avec fracture de hanche et PTH, l'objectif n'est pas seulement de cicatriser: il faut restaurer une marche sûre et prévenir une nouvelle chute.</p>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>Pré-op et post-op:</strong> évaluation neurologique, orthopédique et fonctionnelle coordonnée.</li>
          <li><strong>Rééducation ciblée:</strong> hanche + équilibre + stratégie anti-chute en un seul programme.</li>
          <li><strong>Suivi prolongé:</strong> Parkinson est évolutif, donc le risque de chute reste présent même après une bonne chirurgie.</li>
          <li><strong>Coordination médicale:</strong> neurologue, chirurgien orthopédiste, MPR et kiné doivent aligner leurs objectifs.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">La prévention des chutes est centrale. Chez le parkinsonien, une fracture de hanche n'est pas un simple accident: c'est un tournant fonctionnel majeur qui impose une kinésithérapie experte et continue.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-purple-50 border-r-4 border-purple-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="text-purple-600" size={26} />
          <h2 className="text-2xl font-bold text-purple-900">باركنسون + كسر الورك: حالة عالية الخطورة</h2>
        </div>
        <p className="text-purple-900 leading-relaxed">
          مرضى باركنسون معرضون أكثر للسقوط بسبب التصلب، بطء الحركة، التجمد الحركي واضطراب التوازن.
          هذه السقوطات قد تسبب <strong>كسورًا في الورك</strong> تستلزم أحيانًا <strong>بدلة ورك كاملة (PTH)</strong>.
          هنا نحتاج خطة علاج دقيقة تشمل الجراحة والترويض والوقاية من السقوط.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Brain className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">لماذا ترتفع كسور الورك عند مرضى باركنسون؟</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="font-bold text-purple-800 mb-2">عوامل عصبية</h3>
            <ul className="list-disc pl-4 space-y-1 text-purple-900 text-sm">
              <li>اضطراب التوازن وردود الفعل الوقائية</li>
              <li>بطء الحركة والتصلب والتجمد الحركي</li>
              <li>نقص طول الخطوة والتسرع في المشي</li>
              <li>صعوبة المهام المزدوجة أثناء المشي</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-800 mb-2">عوامل مرافقة</h3>
            <ul className="list-disc pl-4 space-y-1 text-red-900 text-sm">
              <li>هشاشة العظام مع التقدم في العمر</li>
              <li>هبوط الضغط الانتصابي</li>
              <li>ضعف القوة العضلية والتحمل</li>
              <li>مخاطر منزلية مثل السجاد والإنارة الضعيفة</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">متى نلجأ إلى بدلة الورك الكاملة؟ ومتى نتحفظ؟</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-4">
            <h3 className="font-bold text-emerald-800 mb-1">✅ استطبابات شائعة</h3>
            <ul className="list-disc pl-4 mt-1 text-emerald-900 text-sm">
              <li>كسر منزاح في عنق الفخذ عند مريض مسن وظيفيًا</li>
              <li>ألم شديد وعدم القدرة على المشي</li>
              <li>خشونة ورك متقدمة مرافقة</li>
              <li>الحاجة لاسترجاع الوقوف والمشي المبكر</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
            <h3 className="font-bold text-amber-800 mb-1">⚠️ موانع أو حدود القرار</h3>
            <ul className="list-disc pl-4 mt-1 text-amber-900 text-sm">
              <li>إنتان نشط موضعي أو جهازي</li>
              <li>عدم استقرار طبي شديد</li>
              <li>ضعف شديد في الالتزام بتعليمات ما بعد الجراحة</li>
              <li>تدهور معرفي متقدم جدًا</li>
              <li>قدرة وظيفية متوقعة محدودة جدًا</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-1">🔎 القرار فردي دائمًا</h3>
            <p className="text-blue-900 text-sm">القرار يعتمد على مرحلة باركنسون، الاستقلالية قبل الكسر، الحالة المعرفية، ودعم الأسرة، وليس على صورة الأشعة فقط.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">تحدياتنا كأخصائيي ترويض بعد PTH</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>الوقاية من السقوط منذ البداية:</strong> نقلات آمنة، تدريب الالتفاف، اختيار وسيلة المساعدة المناسبة.
          </li>
          <li>
            <strong>احترام احتياطات منع الخلع:</strong> حسب منهج الجراحة، مع إدماجها في كل نشاط يومي.
          </li>
          <li>
            <strong>مزامنة الجلسات مع الدواء:</strong> أفضل تدريب يكون غالبًا في فترات ON للدواء.
          </li>
          <li>
            <strong>تدبير التعب وبطء الحركة:</strong> جلسات قصيرة ومتكررة مع أهداف وظيفية واضحة.
          </li>
          <li>
            <strong>علاج المشي والتوازن بالإشارات:</strong> إشارات بصرية وسمعية لتقليل نوبات التجمد.
          </li>
          <li>
            <strong>تثقيف الأسرة:</strong> تهيئة المنزل ومنع مسببات السقوط ومراقبة علامات الخطر.
          </li>
        </ol>
      </section>

      <section className="bg-emerald-50 border-r-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">رسالة عملية</h2>
        </div>
        <p className="mb-3 text-emerald-900 font-medium">عند مريض باركنسون مع كسر ورك وبدلة كاملة، النجاح لا يقاس فقط بنجاح الجراحة، بل بالقدرة على استرجاع مشي آمن ومنع سقوط جديد.</p>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>مقاربة مزدوجة:</strong> ترويض عصبي + عظمي في نفس البرنامج.</li>
          <li><strong>تنسيق طبي متعدد الاختصاصات:</strong> جراح العظام، طبيب الأعصاب، طبيب التأهيل، والمعالج.</li>
          <li><strong>متابعة طويلة الأمد:</strong> لأن باركنسون مرض تطوري وخطر السقوط يستمر.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">الوقاية من السقوط هي المحور الأساسي. كسر الورك عند مريض باركنسون ليس حدثًا عابرًا، بل نقطة تحول وظيفية تحتاج ترويضًا متخصصًا وممتدًا.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'readaptation-post-avc', titleFr: 'Réadaptation Post-AVC', titleAr: 'إعادة التأهيل ما بعد الجلطة', icon: <Brain size={20} className="text-medical-600" /> },
    { slug: 'spasticite-definition-traitement-indications', titleFr: 'Spasticité: traitement', titleAr: 'التشنج العضلي: العلاج', icon: <Activity size={20} className="text-medical-600" /> },
    { slug: 'urgence-kine-parents-seniors', titleFr: 'Kiné pour les seniors', titleAr: 'الترويض لكبار السن', icon: <CheckCircle size={20} className="text-medical-600" /> }
  ]
});

export default article;
