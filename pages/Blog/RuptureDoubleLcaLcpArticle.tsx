import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Bone, AlertTriangle, Stethoscope, Activity, CheckCircle } from 'lucide-react';

const article = createArticle({
  slug: 'rupture-double-lca-lcp',
  titleFr: 'Rupture Double LCA + LCP: La Blessure la Plus Grave du Genou',
  titleAr: 'تمزق مزدوج LCA + LCP: الإصابة الأشد خطورة في الركبة',
  descriptionFr: 'Rupture simultanée des deux ligaments croisés: mécanismes, instabilité majeure, prise en charge chirurgicale obligatoire et rééducation longue et exigeante.',
  descriptionAr: 'تمزق كلا الرباطين الصليبيين في آنٍ واحد: آليات الإصابة، عدم الاستقرار الحاد، التدخل الجراحي الإلزامي والتأهيل الطويل والمُطالب.',
  keywordsFr: 'rupture double LCA LCP, bi-cruciate rupture genou, chirurgie double ligament croisé, rééducation genou multiligamentaire',
  keywordsAr: 'تمزق مزدوج LCA LCP, تمزق الرباطين الصليبيين, جراحة رباطين صليبيين, تأهيل ركبة متعدد الأربطة',
  imageFr: 'https://picsum.photos/seed/double-cruciate-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/double-cruciate-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-600" size={28} />
          <h2 className="text-2xl font-bold text-red-900">La blessure que tout orthopédiste redoute</h2>
        </div>
        <p className="text-red-900 leading-relaxed">
          La rupture isolée du LCA est grave. Celle du LCP l'est aussi. Mais la <strong>rupture simultanée
          des deux ligaments croisés</strong> — LCA + LCP — est une catastrophe articulaire. Elle signifie
          une instabilité totale du genou dans toutes les directions.
          Sans chirurgie, ce genou ne pourra jamais être stable fonctionnellement.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Comment ça arrive: les mécanismes</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Traumatismes à haute énergie:</strong> accidents de moto ou voiture (tableau de bord + pivot), chutes à grande hauteur.</li>
          <li><strong>Sport de contact violent:</strong> choc frontal + rotation dans les sports de combat, rugby.</li>
          <li><strong>Luxation du genou:</strong> dans les luxations complètes, les deux croisés sont souvent rompus.</li>
          <li><strong>Chute avec rotation extrême:</strong> ski extrême, sports de montagne.</li>
        </ul>
        <div className="bg-amber-50 rounded-lg p-4 mt-4">
          <p className="text-amber-900 font-bold">⚠️ Urgence vasculaire! La luxation du genou peut compromettre l'artère poplitée qui passe derrière. En cas de genou luxé, une évaluation vasculaire est URGENTE. Un ischémie du membre peut survenir.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Bone className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Tableau clinique: un genou dévastés</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li>Douleur intense immédiate, souvent "paradoxalement moins que prévu" (atteinte sensitive associée)</li>
          <li>Hémarthrose massive (remplissage rapide de sang)</li>
          <li>Instabilité totale: tiroir antérieur ET postérieur positifs</li>
          <li>Test de Lachman et tiroir postérieur tous deux positifs avec arrêt mou</li>
          <li>Souvent associé: lésion méniscale, LCM ou LCL, atteinte nerveuse fibulaire</li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold">Traitement: la chirurgie est obligatoire</h2>
        </div>
        <p className="mb-4">La rupture des deux ligaments croisés ne peut pas être traitée de façon conservatrice chez une personne active. La chirurgie s'impose:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Délai chirurgical:</strong> souvent 3-6 semaines après le traumatisme pour laisser diminuer l'œdème et permettre la mobilisation pré-op.</li>
          <li><strong>Double ligamentoplastie:</strong> reconstruction simultanée du LCA et du LCP par greffons (tendons des ischio-jambiers, tendon rotulien).</li>
          <li><strong>Arthroscopie ou chirurgie ouverte:</strong> selon l'expérience du chirurgien et les lésions associées.</li>
          <li><strong>Réparation des structures associées:</strong> LCM, ménisques, structures postéro-latérales — souvent dans le même temps ou en 2 temps.</li>
        </ul>
        <div className="bg-blue-50 rounded-lg p-4 mt-4">
          <p className="text-blue-900 font-medium">Délai de rééducation post-op: <strong>9-18 mois</strong> selon les structures réparées. Retour au sport de pivot: souvent 12-18 mois minimum avec tests objectifs.</p>
        </div>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">Rôle primordial de la kinésithérapie</h2>
        </div>
        <p className="mb-3 text-emerald-900 font-medium">La rééducation d'un genou bi-cruciate est parmi les plus exigeantes en orthopédie:</p>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>Pré-opératoire (2-6 semaines):</strong> contrôle de l'œdème, maintien de la force, préparation psychologique du patient.</li>
          <li><strong>Phase 1 post-op (0-6 semaines):</strong> mobilisation progressive LCA + LCP (attention: le LCP ne doit pas être trop tôt en tiroir postérieur), travail en décharge.</li>
          <li><strong>Phase 2 (6-16 semaines):</strong> renforcement quadriceps, proprioception en charge, sevrage des béquilles.</li>
          <li><strong>Phase 3 (4-9 mois):</strong> course progressive, renforcement fonctionnel, testing de la force.</li>
          <li><strong>Phase 4 (9-18 mois):</strong> retour progressif au sport, tests de retour standardisés, soutien psychologique.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">Une rupture bi-cruciatum est une blessure de vie. La patience, le sérieux et l'investissement du patient dans sa rééducation déterminent si ce genou redeviendra fonctionnel — ou non.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-red-50 border-r-4 border-red-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-600" size={28} />
          <h2 className="text-2xl font-bold text-red-900">الإصابة التي يخشاها كل جراح عظام</h2>
        </div>
        <p className="text-red-900 leading-relaxed">
          تمزق الرباط الصليبي الأمامي المنفرد خطير. وكذلك تمزق الخلفي. أما
          <strong> التمزق المتزامن للرباطين الصليبيين</strong> — الأمامي والخلفي —
          فهو كارثة مفصلية. يعني عدم استقرار كامل للركبة في كل الاتجاهات.
          بدون جراحة، هذه الركبة لن تكون مستقرة وظيفيًا أبدًا.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">كيف يحدث: الآليات</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>صدمات عالية الطاقة:</strong> حوادث دراجات نارية أو سيارات، سقوط من ارتفاع كبير.</li>
          <li><strong>رياضات التماس العنيفة:</strong> صدمة أمامية + دوران في فنون القتال والرغبي.</li>
          <li><strong>خلع الركبة الكامل:</strong> في الخلعات الكاملة، كلا الرباطين الصليبيين ممزقان في الغالب.</li>
        </ul>
        <div className="bg-amber-50 rounded-lg p-4 mt-4">
          <p className="text-amber-900 font-bold">⚠️ طارئ وعائي! خلع الركبة قد يُعرّض الشريان المأبضي للخطر. تقييم وعائي عاجل إلزامي.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold">العلاج: الجراحة إلزامية</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>توقيت الجراحة:</strong> غالبًا 3-6 أسابيع بعد الصدمة لتراجع الوذمة.</li>
          <li><strong>إعادة بناء مزدوجة:</strong> الرباط الأمامي والخلفي بطعوم وترية في آنٍ واحد.</li>
          <li><strong>إصلاح الهياكل المصاحبة:</strong> أربطة جانبية، غضاريف هلالية، هياكل خلفية وحشية.</li>
        </ul>
        <div className="bg-blue-50 rounded-lg p-4 mt-4">
          <p className="text-blue-900 font-medium">مدة التأهيل بعد الجراحة: <strong>9-18 شهرًا</strong> حسب الهياكل المُصلَحة. العودة لرياضة المحاور: 12-18 شهرًا على الأقل.</p>
        </div>
      </section>

      <section className="bg-emerald-50 border-r-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">الدور المحوري للترويض الطبي</h2>
        </div>
        <p className="mb-3 text-emerald-900 font-medium">تأهيل الركبة المزدوجة الأربطة من أكثر الحالات تطلبًا في جراحة العظام:</p>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>ما قبل الجراحة:</strong> السيطرة على الوذمة والحفاظ على القوة والتحضير النفسي.</li>
          <li><strong>المرحلة الأولى (0-6 أسابيع):</strong> تحريك تدريجي مع احترام قيود الرباط الخلفي، عمل بدون حمل الوزن.</li>
          <li><strong>المرحلة الثانية (6-16 أسبوعًا):</strong> تقوية رباعية الرؤوس، توازن مع حمل الوزن، التخلي التدريجي عن العكازين.</li>
          <li><strong>المرحلة الثالثة (4-9 أشهر):</strong> ركض تدريجي، تقوية وظيفية، اختبار القوة.</li>
          <li><strong>المرحلة الرابعة (9-18 شهرًا):</strong> عودة تدريجية للرياضة، اختبارات موحدة، دعم نفسي.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">تمزق الرباطين الصليبيين إصابة تُصاحب حياة. صبر المريض وجديته واستثماره في تأهيله يُحدد إن كانت هذه الركبة ستعود وظيفية — أم لا.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'rupture-lca-lcp-genou', titleFr: 'Rupture LCA & LCP', titleAr: 'تمزق الرباط الصليبي', icon: <Bone size={20} className="text-medical-600" /> },
    { slug: 'rupture-partielle-vs-totale-ligaments', titleFr: 'Rupture partielle vs totale', titleAr: 'التمزق الجزئي مقابل الكلي', icon: <Activity size={20} className="text-medical-600" /> },
    { slug: 'ligaments-collateraux-lcm-lcl', titleFr: 'Ligaments collatéraux', titleAr: 'الأربطة الجانبية', icon: <CheckCircle size={20} className="text-medical-600" /> }
  ]
});

export default article;
