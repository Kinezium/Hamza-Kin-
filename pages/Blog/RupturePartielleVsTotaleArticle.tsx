import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Bone, AlertTriangle, CheckCircle, Stethoscope, Activity } from 'lucide-react';

const article = createArticle({
  slug: 'rupture-partielle-vs-totale-ligaments',
  titleFr: 'Rupture Partielle vs Totale des Ligaments: Ce qui change tout',
  titleAr: 'التمزق الجزئي مقابل الكلي للأربطة: ما الذي يغير كل شيء',
  descriptionFr: 'La différence entre une rupture partielle et totale du LCA, LCP ou ligaments collatéraux. Symptômes, diagnostic et implications pour le traitement et la rééducation.',
  descriptionAr: 'الفرق بين التمزق الجزئي والكلي للرباط الصليبي الأمامي أو الخلفي أو الأربطة الجانبية. الأعراض والتشخيص وتداعيات العلاج والتأهيل.',
  keywordsFr: 'rupture partielle ligament genou, rupture totale LCA, grade ligament blessure, lésion ligamentaire partielle, pronostic rupture ligament',
  keywordsAr: 'تمزق جزئي رباط صليبي, تمزق كلي LCA, درجة إصابة رباط, إصابة رباطية جزئية, تشخيص تمزق رباط',
  imageFr: 'https://picsum.photos/seed/rupture-partielle-totale-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/rupture-partielle-totale-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Bone className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">La classification des lésions ligamentaires</h2>
        </div>
        <p className="text-blue-900 mb-4">Les lésions ligamentaires sont classées en 3 grades selon l'étendue des fibres atteintes:</p>
        <div className="space-y-3">
          <div className="bg-green-100 rounded-lg p-4">
            <h3 className="font-bold text-green-800">Grade I — Entorse bénigne (élongation)</h3>
            <p className="text-green-900 text-sm">Quelques fibres distendues, pas de rupture. Douleur légère, pas d'instabilité. Récupération 1-3 semaines.</p>
          </div>
          <div className="bg-amber-100 rounded-lg p-4">
            <h3 className="font-bold text-amber-800">Grade II — Rupture partielle</h3>
            <p className="text-amber-900 text-sm">30-70% des fibres rompues. Douleur modérée à sévère, œdème, légère instabilité. Récupération 4-8 semaines avec kiné.</p>
          </div>
          <div className="bg-red-100 rounded-lg p-4">
            <h3 className="font-bold text-red-800">Grade III — Rupture totale</h3>
            <p className="text-red-900 text-sm">100% des fibres rompues. Instabilité franche, hemarthrose, genou "qui lâche". Décision chirurgicale souvent nécessaire.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">Comment distinguer rupture partielle et totale?</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Critère</th>
                <th className="border border-gray-300 p-3 text-center">Rupture partielle</th>
                <th className="border border-gray-300 p-3 text-center">Rupture totale</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Craquement', 'Possible', 'Souvent présent'],
                ['Hémarthrose', 'Légère à modérée', 'Importante, rapide'],
                ['Test de Lachman', 'Arrêt ferme', 'Arrêt mou / absent'],
                ['Instabilité', 'Légère', 'Franche, invalidante'],
                ['IRM', 'Signal intermédiaire', 'Rupture complète visible'],
                ['Chirurgie', 'Rare, souvent conservateur', 'Souvent recommandée (sportif)'],
              ].map(([critre, partiel, total]) => (
                <tr key={critre} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">{critre}</td>
                  <td className="border border-gray-300 p-3 text-center text-amber-700">{partiel}</td>
                  <td className="border border-gray-300 p-3 text-center text-red-700">{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Pronostic et retour au sport</h2>
        </div>
        <p className="mb-4">Le grade de la rupture détermine directement le délai de récupération:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Grade I:</strong> Retour au sport en 1-3 semaines avec protection.</li>
          <li><strong>Grade II (partielle):</strong> 4-8 semaines. Kiné obligatoire. Stabilité à réévaluer à 6 semaines.</li>
          <li><strong>Grade III (totale), traitement conservateur:</strong> 3-6 mois de rééducation intensive.</li>
          <li><strong>Grade III après chirurgie:</strong> 6-12 mois. Retour au pivot: ≥9 mois avec tests objectifs validés.</li>
        </ul>
        <div className="bg-amber-50 rounded-lg p-4 mt-4">
          <p className="text-amber-900 font-medium">⚠️ La rupture partielle mal traitée peut évoluer en rupture totale. Ne négligez pas une "petite" entorse du genou!</p>
        </div>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">Rôle primordial de la kinésithérapie</h2>
        </div>
        <p className="mb-3 text-emerald-900">Que ce soit partielle ou totale, la kiné est indispensable:</p>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>Grade I-II:</strong> la kiné est le traitement principal. Protocole PEACE&LOVE: Protection, Elevation, Avoid anti-inflammatoires, Compression, Education + Load, Optimism, Vascularisation, Exercise.</li>
          <li><strong>Grade III conservateur:</strong> programme de renforcement sur 3-6 mois pour compenser le ligament absent par les muscles.</li>
          <li><strong>Grade III post-op:</strong> protocole progressif en 4 phases, critères objectifs à respecter pour chaque transition.</li>
          <li><strong>Prévention des récidives:</strong> programme neuroproprioceptif obligatoire au retour au sport.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">La différence entre une rupture partielle et une totale réside aussi dans la quantité de travail que le patient accepte d'investir dans sa rééducation.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Bone className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">تصنيف إصابات الأربطة</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-green-100 rounded-lg p-4">
            <h3 className="font-bold text-green-800">الدرجة الأولى — التمدد البسيط</h3>
            <p className="text-green-900 text-sm">بعض الألياف ممدودة دون تمزق. ألم خفيف، لا تزعزع. تعافٍ 1-3 أسابيع.</p>
          </div>
          <div className="bg-amber-100 rounded-lg p-4">
            <h3 className="font-bold text-amber-800">الدرجة الثانية — التمزق الجزئي</h3>
            <p className="text-amber-900 text-sm">30-70% من الألياف ممزقة. ألم معتدل إلى شديد، وذمة، عدم استقرار خفيف. تعافٍ 4-8 أسابيع مع ترويض.</p>
          </div>
          <div className="bg-red-100 rounded-lg p-4">
            <h3 className="font-bold text-red-800">الدرجة الثالثة — التمزق الكلي</h3>
            <p className="text-red-900 text-sm">100% من الألياف ممزقة. عدم استقرار واضح، نزيف داخلي، الركبة "تنهار". في الغالب تستلزم قرارًا جراحيًا.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">التشخيص والعودة للرياضة</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>الدرجة الأولى:</strong> العودة للرياضة في 1-3 أسابيع مع الحماية.</li>
          <li><strong>الدرجة الثانية (جزئي):</strong> 4-8 أسابيع. ترويض إلزامي. تقييم الاستقرار بعد 6 أسابيع.</li>
          <li><strong>الدرجة الثالثة محافظ:</strong> 3-6 أشهر تأهيل مكثف.</li>
          <li><strong>الدرجة الثالثة بعد جراحة:</strong> 6-12 شهرًا. العودة للمحاور: 9+ أشهر مع اختبارات موضوعية.</li>
        </ul>
        <div className="bg-amber-50 rounded-lg p-4 mt-4">
          <p className="text-amber-900 font-medium">⚠️ التمزق الجزئي غير المعالج قد يتطور لكلي. لا تهمل "التواء بسيط" في الركبة!</p>
        </div>
      </section>

      <section className="bg-emerald-50 border-r-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">الدور المحوري للترويض الطبي</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>الدرجتان الأولى والثانية:</strong> الترويض هو العلاج الرئيسي. بروتوكول PEACE&LOVE الحديث.</li>
          <li><strong>الدرجة الثالثة محافظ:</strong> برنامج تقوية على 3-6 أشهر لتعويض الرباط الغائب بالعضلات.</li>
          <li><strong>الدرجة الثالثة بعد جراحة:</strong> برنامج تدريجي على 4 مراحل مع معايير موضوعية.</li>
          <li><strong>منع التكرار:</strong> برنامج حسي حركي إلزامي عند العودة للرياضة.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">الفرق بين التمزق الجزئي والكلي يكمن أيضًا في حجم العمل الذي يقبل المريض بذله في تأهيله.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'rupture-lca-lcp-genou', titleFr: 'Rupture LCA & LCP', titleAr: 'تمزق الرباط الصليبي', icon: <Bone size={20} className="text-medical-600" /> },
    { slug: 'elongation-lca-lcp', titleFr: 'Élongation LCA/LCP', titleAr: 'تمدد الرباط الصليبي', icon: <Activity size={20} className="text-medical-600" /> },
    { slug: 'entorses-types-classification-cat', titleFr: 'Entorses: types et CAT', titleAr: 'الالتواءات: الأنواع والتدبير', icon: <CheckCircle size={20} className="text-medical-600" /> }
  ]
});

export default article;
