import React from 'react';
import { createArticle } from './ArticleTemplate';
import { AlertTriangle, Stethoscope, BarChart3, Heart, TrendingDown } from 'lucide-react';

const article = createArticle({
  slug: 'kine-liberal-cnss-cnops-injustice',
  titleFr: 'Kinés Libéraux: Victimes du Système CNSS/CNOPS',
  titleAr: 'المعالجون الفيزيائيون الخواص: ضحايا نظام CNSS/CNOPS',
  descriptionFr: 'CNSS/CNOPS ne paient pas directement le kiné: le patient avance 120-150 DH (cabinet) ou 200-300 DH (domicile) puis récupère 30-35 DH seulement. Un modèle qui pénalise d’abord le patient, puis le kiné.',
  descriptionAr: 'CNSS/CNOPS لا تؤدي مباشرة للمعالج الفيزيائي: المريض يدفع 120-150 درهمًا بالعيادة أو 200-300 درهمًا بالمنزل، ثم يسترجع فقط 30-35 درهمًا. نموذج يضر المريض أولًا ثم المعالج.',
  keywordsFr: 'CNSS CNOPS kiné Maroc, remboursement kiné 30 35 dh, séance kiné 120 150 dh, kiné à domicile 200 300 dh, réforme remboursement kiné Maroc',
  keywordsAr: 'CNSS CNOPS ترويض المغرب, استرداد الترويض 30 35 درهم, جلسة ترويض 120 150 درهم, ترويض منزلي 200 300 درهم, إصلاح استرداد الترويض',
  imageFr: 'https://picsum.photos/seed/kine-liberal-cnss-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/kine-liberal-cnss-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-orange-50 border-l-4 border-orange-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Stethoscope className="text-orange-600" size={26} />
          <h2 className="text-2xl font-bold text-orange-900">La vraie victime du système: d'abord le patient</h2>
        </div>
        <p className="text-orange-900 leading-relaxed">
          Dans la pratique, <strong>la CNSS/CNOPS ne verse pas l'argent au kiné</strong>.
          Le patient paie d'abord sa séance, puis attend un remboursement partiel.
          Résultat: beaucoup de patients n'arrivent pas à poursuivre un traitement complet.
        </p>
        <p className="mt-3 text-orange-900 font-bold">
          Le problème touche le kiné indirectement, mais il frappe le patient en premier.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">Les chiffres qui bloquent l'accès aux soins</h2>
        </div>
        <p className="mb-4">Aujourd'hui, le patient avance presque tout le coût de la séance:</p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2">Type de séance</th>
                <th className="text-right py-2">Montants observés</th>
              </tr>
            </thead>
            <tbody className="space-y-1">
              {[
                ['Séance en cabinet', '120 à 150 DH'],
                ['Séance à domicile', '200 à 300 DH'],
                ['Remboursement CNSS/CNOPS', '30 à 35 DH'],
              ].map(([label, amount]) => (
                <tr key={label} className="border-b border-gray-100">
                  <td className="py-2 text-gray-700">{label}</td>
                  <td className="py-2 text-right font-medium">{amount}</td>
                </tr>
              ))}
              <tr className="font-bold text-red-700">
                <td className="py-2">Reste à charge pour le patient (cabinet)</td>
                <td className="py-2 text-right text-xl">~85 à 120 DH/séance</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-red-50 rounded-lg p-4 mt-2">
          <p className="text-red-900 font-bold">
            Quand le remboursement est très faible, le patient retarde ou arrête ses soins.
          </p>
          <p className="text-red-900 mt-2">
            Et sans continuité des séances, la récupération est plus lente, plus incomplète,
            avec davantage de complications et de récidives.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <TrendingDown className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">Pourquoi c'est un problème de santé publique</h2>
        </div>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Accès aux soins réduit:</strong> des patients renoncent à la kiné sauf dans les cas majeurs,
            faute de moyens pour financer plusieurs séances.
          </li>
          <li>
            <strong>Risque de récupération incomplète:</strong> pourtant, dans la majorité des pathologies
            indiquées, la kinésithérapie joue un rôle primordial pour récupérer sans complications.
          </li>
          <li>
            <strong>Risque de récidive:</strong> sans protocole complet et progressif, les rechutes sont plus fréquentes.
          </li>
          <li>
            <strong>Impact indirect sur les kinés:</strong> quand les patients arrêtent leurs séances,
            le cabinet souffre aussi, ce qui fragilise toute la chaîne de soins de rééducation.
          </li>
        </ul>
      </section>

      <section className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold text-amber-900">Ce qui doit changer</h2>
        </div>
        <p className="text-amber-900 mb-4">
          Pour relancer l'accès réel à la rééducation, il faut revaloriser le remboursement.
          Une proposition concrète:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-amber-900">
          <li><strong>Remboursement minimum: 100 DH</strong> par séance en cabinet.</li>
          <li><strong>Logique proposée:</strong> 80% d'un prix de référence de 125 DH.</li>
          <li><strong>À domicile:</strong> prix de référence de 200 DH avec remboursement adapté.</li>
        </ul>
        <p className="mt-4 text-amber-900 font-bold">
          Quand le remboursement est juste, les patients font leurs séances, récupèrent mieux,
          et le système évite les complications coûteuses.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Message final</h2>
        </div>
        <p className="mt-4 font-bold text-gray-800">
          Les victimes directes sont les patients qui ne peuvent pas suivre leurs soins.
          Les kinés en subissent ensuite l'impact. Une réforme du remboursement CNSS/CNOPS
          n'est pas un détail administratif: c'est une nécessité médicale et sociale.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-orange-50 border-r-4 border-orange-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Stethoscope className="text-orange-600" size={26} />
          <h2 className="text-2xl font-bold text-orange-900">الضحية الحقيقية أولًا: المريض</h2>
        </div>
        <p className="text-orange-900 leading-relaxed">
          في الواقع، <strong>CNSS/CNOPS لا تؤدي المال مباشرة للمعالج</strong>.
          المريض يدفع أولًا ثمن الجلسة ثم ينتظر تعويضًا جزئيًا.
          النتيجة: كثير من المرضى لا يستطيعون إكمال برنامج الترويض.
        </p>
        <p className="mt-3 text-orange-900 font-bold">
          المشكلة تمس المعالج بشكل غير مباشر، لكنها تضرب المريض أولًا.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">أرقام تفسّر ضعف الولوج للعلاج</h2>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2">نوع الجلسة</th>
                <th className="text-right py-2">المبالغ المتداولة</th>
              </tr>
            </thead>
            <tbody className="space-y-1">
              {[
                ['جلسة بالعيادة', '120 إلى 150 درهمًا'],
                ['جلسة بالمنزل', '200 إلى 300 درهمًا'],
                ['تعويض CNSS/CNOPS', '30 إلى 35 درهمًا'],
              ].map(([label, amount]) => (
                <tr key={label} className="border-b border-gray-100">
                  <td className="py-2 text-gray-700">{label}</td>
                  <td className="py-2 text-right font-medium">{amount}</td>
                </tr>
              ))}
              <tr className="font-bold text-red-700">
                <td className="py-2">المبلغ المتبقي على المريض (بالعيادة)</td>
                <td className="py-2 text-right text-xl">حوالي 85 إلى 120 درهمًا/جلسة</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>انخفاض الولوج للعلاج:</strong> مرضى كثيرون يؤجلون أو يوقفون الجلسات إلا في الحالات الكبرى.
          </li>
          <li>
            <strong>تعافٍ غير كامل:</strong> الترويض ضروري في أغلب الحالات لتفادي المضاعفات وتسريع الاسترجاع.
          </li>
          <li>
            <strong>ارتفاع خطر الانتكاس:</strong> غياب برنامج جلسات كامل يزيد احتمال عودة الأعراض.
          </li>
          <li>
            <strong>أثر غير مباشر على المعالج:</strong> توقف المرضى عن الجلسات يضعف استمرارية العيادات أيضًا.
          </li>
        </ul>
      </section>

      <section className="bg-amber-50 border-r-4 border-amber-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold text-amber-900">ما الذي يجب تغييره؟</h2>
        </div>
        <p className="text-amber-900 mb-4">
          لتحسين الولوج الحقيقي للترويض، يجب رفع التعويض بطريقة عملية:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-amber-900">
          <li><strong>حد أدنى للتعويض: 100 درهم</strong> للجلسة بالعيادة.</li>
          <li><strong>المنطق:</strong> 80% من ثمن مرجعي قدره 125 درهمًا.</li>
          <li><strong>الجلسات المنزلية:</strong> اعتماد ثمن مرجعي 200 درهم مع تعويض مناسب.</li>
        </ul>
        <p className="mt-4 text-amber-900 font-bold">
          عندما يكون التعويض عادلًا، المرضى يُكملون جلساتهم ويتحسنون بشكل أفضل
          مع مضاعفات وانتكاسات أقل.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">الخلاصة</h2>
        </div>
        <p className="mt-4 font-bold text-gray-800">
          الضحية المباشرة هي المريض الذي لا يقدر على متابعة العلاج.
          والمعالج يتضرر بدوره بشكل غير مباشر. إصلاح تعويضات CNSS/CNOPS
          ضرورة صحية واجتماعية وليست تفصيلاً إداريًا.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'remboursement-kine-maroc-cnss-cnops', titleFr: 'Remboursement kiné: le scandale', titleAr: 'استرداد الترويض: الفضيحة', icon: <AlertTriangle size={20} className="text-medical-600" /> },
    { slug: 'kinesitherapie-maroc-portrait', titleFr: 'La kiné au Maroc', titleAr: 'الترويض الطبي بالمغرب', icon: <Stethoscope size={20} className="text-medical-600" /> },
    { slug: 'faux-espoirs-kinesitherapie', titleFr: 'Faux espoirs en kiné', titleAr: 'الأوهام في الترويض الطبي', icon: <Heart size={20} className="text-medical-600" /> }
  ]
});

export default article;
