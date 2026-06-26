import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Bone, AlertTriangle, Stethoscope, Activity, CheckCircle } from 'lucide-react';

const article = createArticle({
  slug: 'ligaments-collateraux-lcm-lcl',
  titleFr: 'Ligaments Collatéraux LCM & LCL: Blessures et Rééducation',
  titleAr: 'الأربطة الجانبية للركبة LCM وLCL: الإصابات وإعادة التأهيل',
  descriptionFr: 'Entorse, rupture partielle ou totale des ligaments collatéraux médial (LCM) et latéral (LCL) du genou: mécanismes, diagnostic, traitement et kinésithérapie.',
  descriptionAr: 'التواء أو تمزق الأربطة الجانبية الداخلية (LCM) والخارجية (LCL) للركبة: آليات الإصابة والتشخيص والعلاج والترويض الطبي.',
  keywordsFr: 'ligament collatéral genou, LCM LCL blessure, entorse genou latérale, blessure ligament interne externe genou, rééducation ligament collatéral',
  keywordsAr: 'رباط جانبي ركبة, LCM LCL إصابة, التواء جانبي ركبة, رباط داخلي خارجي ركبة, تأهيل رباط جانبي',
  imageFr: 'https://picsum.photos/seed/collateral-lcm-lcl-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/collateral-lcm-lcl-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Bone className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">Anatomie des ligaments collatéraux</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-blue-900">
          <li><strong>LCM (Ligament Collatéral Médial/Interne):</strong> court sur la face interne du genou, de l'épicondyle fémoral interne au tibia. Résiste à la contrainte en valgus (genou qui s'écarte vers l'extérieur). C'est le plus souvent blessé des deux.</li>
          <li><strong>LCL (Ligament Collatéral Latéral/Externe):</strong> court sur la face externe, du condyle fémoral externe à la tête du péroné. Résiste à la contrainte en varus (genou qui s'écarte vers l'intérieur). Moins fréquent mais souvent associé à d'autres lésions.</li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">Mécanismes et fréquence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50 rounded-lg p-4">
            <h3 className="font-bold text-amber-800 mb-2">Blessure LCM (la plus fréquente)</h3>
            <ul className="list-disc pl-4 space-y-1 text-amber-900 text-sm">
              <li>Choc sur la face externe du genou (valgus forcé)</li>
              <li>Plaquage au rugby, ski, football</li>
              <li>Souvent associé à une lésion du LCA (triade malheureuse)</li>
              <li>Douleur et sensibilité sur la face interne</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-800 mb-2">Blessure LCL (moins fréquente)</h3>
            <ul className="list-disc pl-4 space-y-1 text-red-900 text-sm">
              <li>Choc sur la face interne du genou (varus forcé)</li>
              <li>Plus rare, souvent multi-ligamentaire</li>
              <li>Peut compromettre le nerf fibulaire commun</li>
              <li>Instabilité en varus, douleur externe</li>
            </ul>
          </div>
        </div>
        <div className="bg-indigo-50 rounded-lg p-4 mt-4">
          <p className="text-indigo-900 font-medium">🔴 La "triade malheureuse": LCM + LCA + ménisque interne. C'est la blessure redoutée des footballeurs et rugbymen. Elle nécessite une prise en charge chirurgicale dans la plupart des cas.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Traitement selon le grade</h2>
        </div>
        <div className="space-y-3">
          <div className="border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-800">Grade I (élongation):</h3>
            <p className="text-green-900">Traitement conservateur: PEACE&LOVE, kiné dès J3, genouillère de confort. Retour sport: 1-3 semaines.</p>
          </div>
          <div className="border border-amber-200 rounded-lg p-4">
            <h3 className="font-bold text-amber-800">Grade II (rupture partielle):</h3>
            <p className="text-amber-900">Immobilisation courte (1-2 semaines), attelle articulée, kiné intensive. Retour sport: 4-8 semaines.</p>
          </div>
          <div className="border border-red-200 rounded-lg p-4">
            <h3 className="font-bold text-red-800">Grade III (rupture totale):</h3>
            <p className="text-red-900">LCM: souvent conservateur (cicatrisation naturelle bonne). LCL: souvent chirurgical (mauvaise vascularisation). Rééducation: 3-6 mois.</p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">Rôle primordial de la kinésithérapie</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>Contrôle de l'œdème et de la douleur:</strong> massage doux, drainage, cryothérapie ciblée.</li>
          <li><strong>Récupération de la mobilité:</strong> flexion/extension progressive selon les limites douloureuses.</li>
          <li><strong>Renforcement musculaire:</strong> quadriceps, ischio-jambiers, poplité et stabilisateurs du genou.</li>
          <li><strong>Proprioception:</strong> exercices sur plan instable pour recalibrer les capteurs articulaires.</li>
          <li><strong>Travail fonctionnel:</strong> marche, puis course, puis changements de direction — toujours progressif.</li>
          <li><strong>Prévention de la récidive:</strong> programme FIFA 11+ ou équivalent pour sportifs.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">Le LCM cicatrise bien quand il est bien pris en charge. La kiné fait toute la différence entre une récupération rapide et un genou instable à vie.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Bone className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">تشريح الأربطة الجانبية</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-blue-900">
          <li><strong>الرباط الجانبي الداخلي (LCM):</strong> على الوجه الداخلي للركبة. يقاوم الانفراج للخارج (valgus). الأكثر إصابة من الاثنين.</li>
          <li><strong>الرباط الجانبي الخارجي (LCL):</strong> على الوجه الخارجي، يصل إلى رأس القصبة الشظية. يقاوم الانفراج للداخل (varus). أقل شيوعًا لكنه كثيرًا ما يصاحبه آفات أخرى.</li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">آليات الإصابة والتكرار</h2>
        </div>
        <div className="bg-indigo-50 rounded-lg p-4">
          <p className="text-indigo-900 font-medium">🔴 "الثلاثي المشؤوم": LCM + LCA + الغضروف الهلالي الداخلي. إنها الإصابة التي يخشاها لاعبو كرة القدم والرغبي. تستلزم في أغلب الأحيان تدخلًا جراحيًا.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">العلاج حسب الدرجة</h2>
        </div>
        <div className="space-y-3">
          <div className="border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-800">الدرجة الأولى (تمدد):</h3>
            <p className="text-green-900">علاج محافظ: PEACE&LOVE، ترويض من اليوم 3، دعامة تثبيت مريحة. العودة للرياضة: 1-3 أسابيع.</p>
          </div>
          <div className="border border-amber-200 rounded-lg p-4">
            <h3 className="font-bold text-amber-800">الدرجة الثانية (تمزق جزئي):</h3>
            <p className="text-amber-900">تثبيت قصير (1-2 أسبوعين)، جبيرة مفصلية، ترويض مكثف. العودة للرياضة: 4-8 أسابيع.</p>
          </div>
          <div className="border border-red-200 rounded-lg p-4">
            <h3 className="font-bold text-red-800">الدرجة الثالثة (تمزق كلي):</h3>
            <p className="text-red-900">LCM: كثيرًا ما يُعالج محافظًا (تندب طبيعي جيد). LCL: كثيرًا ما يحتاج جراحة. تأهيل: 3-6 أشهر.</p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 border-r-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">الدور المحوري للترويض الطبي</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>التحكم في الوذمة والألم:</strong> تدليك ناعم، صرف لمفاوي، تبريد موجّه.</li>
          <li><strong>استعادة الحركة:</strong> ثني ومد تدريجي ضمن حدود الألم.</li>
          <li><strong>تقوية العضلات:</strong> الرباعية الرؤوس والأوتار الخلفية ومثبتات الركبة.</li>
          <li><strong>الحس العميق:</strong> تمارين على سطح غير مستقر لإعادة معايرة مستقبلات المفصل.</li>
          <li><strong>العمل الوظيفي:</strong> مشي ثم ركض ثم تغييرات اتجاه — تدريجيًا دائمًا.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">الرباط الجانبي الداخلي يلتئم جيدًا حين يُعتنى به. الترويض الطبي الفرق بين تعافٍ سريع وركبة متزعزعة مدى الحياة.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'rupture-lca-lcp-genou', titleFr: 'Rupture LCA & LCP', titleAr: 'تمزق الرباط الصليبي', icon: <Bone size={20} className="text-medical-600" /> },
    { slug: 'dechirures-musculaires-footballeurs', titleFr: 'Déchirures des footballeurs', titleAr: 'تمزقات عضلات لاعبي كرة القدم', icon: <Activity size={20} className="text-medical-600" /> },
    { slug: 'entorses-types-classification-cat', titleFr: 'Entorses: types et CAT', titleAr: 'الالتواءات: الأنواع والتدبير', icon: <CheckCircle size={20} className="text-medical-600" /> }
  ]
});

export default article;
