import React from 'react';
import { createArticle } from './ArticleTemplate';
import { AlertTriangle, BarChart3, Users, Scale, TrendingDown } from 'lucide-react';

const article = createArticle({
  slug: 'remboursement-kine-maroc-cnss-cnops',
  titleFr: 'Remboursement Kiné au Maroc: Le Scandale Silencieux',
  titleAr: 'استرداد الترويض الطبي بالمغرب: الفضيحة الصامتة',
  descriptionFr: 'Une séance de kiné coûte 150-200 DH. La CNSS et la CNOPS remboursent 35 DH. Qui paye le reste? Les patients pauvres. Voici pourquoi ce système est une honte.',
  descriptionAr: 'جلسة ترويض طبي تكلف 150-200 درهم. CNSS وCNOPS تُعوّضان 35 درهمًا. من يدفع الباقي؟ المرضى الفقراء. إليك لماذا هذا النظام عار وطني.',
  keywordsFr: 'remboursement kinésithérapie Maroc, CNSS CNOPS kiné, tarif kiné Maroc, inégalité santé Maroc, remboursement 35 DH kiné',
  keywordsAr: 'استرداد الترويض المغرب, CNSS CNOPS ترويض, أسعار الترويض المغرب, تفاوت صحي بالمغرب, 35 درهم استرداد ترويض',
  imageFr: 'https://picsum.photos/seed/remboursement-kine-cnss-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/remboursement-kine-cnss-chnider/1600/900',
  readTimeFr: '8 min de lecture',
  readTimeAr: '8 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-600" size={28} />
          <h2 className="text-2xl font-bold text-red-900">Le calcul qui révèle tout</h2>
        </div>
        <div className="bg-white rounded-lg p-4 border-2 border-red-300 mt-3">
          <table className="w-full text-center">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-left font-medium text-gray-700">Coût réel d'une séance de kiné</td>
                <td className="py-2 font-bold text-gray-900 text-xl">150 – 300 DH</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-left font-medium text-gray-700">Tarif de référence CNSS/CNOPS</td>
                <td className="py-2 font-bold text-amber-700 text-xl">50 DH</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-left font-medium text-gray-700">Remboursement (80% de 50 DH)</td>
                <td className="py-2 font-bold text-red-700 text-xl">35 – 40 DH</td>
              </tr>
              <tr>
                <td className="py-2 text-left font-bold text-red-800">À PAYER PAR LE PATIENT</td>
                <td className="py-2 font-black text-red-900 text-2xl">110 – 265 DH</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-red-900 font-bold">
          Sur 200 DH de séance, la caisse rembourse 35 DH. Soit 17,5% du coût réel.
          Appeler ça un "remboursement" est un abus de langage.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="text-indigo-600" size={24} />
          <h2 className="text-2xl font-bold">L'absurdité du système: comment en est-on arrivé là?</h2>
        </div>
        <p className="mb-4">
          Les tarifs de référence CNSS/CNOPS pour la kinésithérapie n'ont pas été révisés sérieusement
          depuis des décennies. Pendant ce temps, le coût de la vie a augmenté, les charges du cabinet
          ont augmenté, et les soins se sont complexifiés.
        </p>
        <p className="mb-4">
          Résultat: le fossé entre tarif officiel et tarif réel est devenu un gouffre. Et ce gouffre,
          c'est le patient qui le comble.
        </p>
        <div className="bg-indigo-50 rounded-lg p-4">
          <p className="text-indigo-900">
            Pour un patient nécessitant <strong>20 séances</strong> (fracture, AVC, post-chirurgie):
          </p>
          <ul className="list-disc pl-6 mt-2 text-indigo-900">
            <li>Coût total: 3 000 à 4 000 DH</li>
            <li>Remboursement réel (35 DH × 20): 700 DH</li>
            <li>Reste à charge: 2 300 à 3 300 DH</li>
          </ul>
          <p className="mt-2 text-indigo-900 font-bold">
            Pour un ménage au SMIG (~3 000 DH/mois), c'est un mois entier de salaire pour une rééducation basique.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">Qui souffre le plus? Les plus vulnérables</h2>
        </div>
        <p className="mb-4">Ce système frappe en priorité:</p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Les patients à revenus modestes</strong> affiliés à la CNSS ou CNOPS.
            Ils cotisent toute leur vie — et ne peuvent pas accéder aux soins de rééducation quand ils en ont besoin.
          </li>
          <li>
            <strong>Les patients chroniques et neurologiques:</strong> AVC, SEP, paralysie cérébrale, traumatisés.
            Ils ont besoin de dizaines, parfois de centaines de séances. Le coût annuel dépasse les 10 000 DH.
          </li>
          <li>
            <strong>Les personnes âgées:</strong> qui ont souvent besoin de kiné pour maintenir leur autonomie
            et prévenir les chutes — mais ne peuvent pas se le payer.
          </li>
          <li>
            <strong>Les enfants avec handicap moteur:</strong> paralysie cérébrale, retard moteur, IMC.
            Leurs familles s'endettent pour financer des années de rééducation.
          </li>
        </ul>
      </section>

      <section className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Scale className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold text-amber-900">La comparaison internationale: une honte</h2>
        </div>
        <p className="text-amber-900 mb-4">Quelques points de comparaison:</p>
        <ul className="list-disc pl-6 space-y-2 text-amber-900">
          <li><strong>France:</strong> tarif officiel kiné remboursé à ~70% — actuellement autour de 20-30€ la séance, remboursé à 16-21€ + complémentaire couvre souvent le reste.</li>
          <li><strong>Algérie:</strong> remboursement meilleur que le Maroc à tarif de référence plus proche du réel.</li>
          <li><strong>Maroc:</strong> tarif de référence 50 DH — une somme symbolique qui n'a plus aucun lien avec la réalité économique.</li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <TrendingDown className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">Les conséquences sur la santé publique</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li>Des patients ne terminent pas leur rééducation faute de moyens → rechutes, complications, hospitalisations.</li>
          <li>Des AVC qui auraient pu récupérer davantage ne récupèrent pas → dépendance chronique à charge de la famille et de l'État.</li>
          <li>Des enfants IMC sans rééducation suffisante → handicap aggravé à l'âge adulte.</li>
          <li>Des seniors sans kiné → chutes, hospitalisations, décès.</li>
        </ul>
        <p className="mt-4 font-bold text-gray-800">
          En économisant sur le remboursement de la kiné, le système crée des coûts bien plus élevés en aval (hospitalisations, dépendance, aide sociale).
        </p>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-3 text-slate-900">Ce qui doit changer</h2>
        <ol className="list-decimal pl-6 space-y-2 text-slate-800">
          <li>Révision urgente du tarif de référence pour le rapprocher du coût réel.</li>
          <li>Création de forfaits de rééducation pour les pathologies lourdes (AVC, traumatismes, IMC).</li>
          <li>Convention directe entre caisses et kinés pour prise en charge sans avance de frais.</li>
          <li>Extension de la couverture RAMED pour inclure la rééducation.</li>
          <li>Reconnaissance politique que la rééducation est un investissement, pas un luxe.</li>
        </ol>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-red-50 border-r-4 border-red-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-600" size={28} />
          <h2 className="text-2xl font-bold text-red-900">الحساب الذي يكشف كل شيء</h2>
        </div>
        <div className="bg-white rounded-lg p-4 border-2 border-red-300 mt-3">
          <table className="w-full text-center">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-right font-medium text-gray-700">التكلفة الحقيقية لجلسة ترويض</td>
                <td className="py-2 font-bold text-gray-900 text-xl">150 – 300 درهم</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-right font-medium text-gray-700">التعرفة المرجعية CNSS/CNOPS</td>
                <td className="py-2 font-bold text-amber-700 text-xl">50 درهم</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-right font-medium text-gray-700">الاسترداد (80% من 50 درهم)</td>
                <td className="py-2 font-bold text-red-700 text-xl">35 – 40 درهم</td>
              </tr>
              <tr>
                <td className="py-2 text-right font-bold text-red-800">يبقى على عاتق المريض</td>
                <td className="py-2 font-black text-red-900 text-2xl">110 – 265 درهم</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-red-900 font-bold">
          من 200 درهم للجلسة، الصندوق يُعوّض 35 درهمًا. أي 17.5% من التكلفة الحقيقية.
          تسمية هذا "استردادًا" مبالغة في المصطلح.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">من يعاني أكثر؟ الأكثر هشاشة</h2>
        </div>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>المرضى متوسطو الدخل</strong> المنخرطون في CNSS أو CNOPS.
            يدفعون اشتراكات طوال حياتهم — ولا يستطيعون الاستفادة من إعادة التأهيل حين يحتاجونها.
          </li>
          <li>
            <strong>مرضى الأمراض المزمنة والعصبية:</strong> جلطة، تصلب متعدد، شلل دماغي، إصابات.
            يحتاجون عشرات بل مئات الجلسات. التكلفة السنوية تتجاوز 10,000 درهم.
          </li>
          <li>
            <strong>كبار السن:</strong> يحتاجون ترويضًا للحفاظ على استقلاليتهم والوقاية من السقوط — لكنهم لا يستطيعون تحمل التكلفة.
          </li>
          <li>
            <strong>الأطفال ذوو الإعاقات الحركية:</strong> شلل دماغي، IMC. عائلاتهم تتديَّن لتمويل سنوات من التأهيل.
          </li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <TrendingDown className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">التداعيات على الصحة العامة</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li>مرضى لا يكملون تأهيلهم لضعف الإمكانيات → انتكاسات، مضاعفات، دخول مستشفيات.</li>
          <li>جلطات كان يمكن أن تتعافى أكثر لا تتعافى → اعتماد مزمن على الأسرة والدولة.</li>
          <li>أطفال IMC بدون تأهيل كافٍ → إعاقة أشد في سن البلوغ.</li>
          <li>مسنون بدون ترويض → سقطات، استشفاء، وفيات.</li>
        </ul>
        <p className="mt-4 font-bold text-gray-800">
          بتوفير استرداد تافه للترويض الطبي، يخلق النظام تكاليف أضخم لاحقًا (استشفاء، اعتماد، مساعدة اجتماعية).
        </p>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-3 text-slate-900">ما يجب أن يتغير</h2>
        <ol className="list-decimal pl-6 space-y-2 text-slate-800">
          <li>مراجعة عاجلة للتعرفة المرجعية لتقريبها من التكلفة الحقيقية.</li>
          <li>إنشاء جزافات تأهيل للأمراض الثقيلة (جلطة، صدمات، شلل دماغي).</li>
          <li>اتفاقية مباشرة بين الصناديق والمعالجين للتكفل بدون أموال مسبقة.</li>
          <li>توسيع تغطية راميد لتشمل إعادة التأهيل.</li>
          <li>الاعتراف سياسيًا بأن إعادة التأهيل استثمار، لا رفاهية.</li>
        </ol>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'kine-liberal-cnss-cnops-injustice', titleFr: 'Kinés libéraux victimes du système', titleAr: 'المعالجون الخواص ضحايا النظام', icon: <AlertTriangle size={20} className="text-medical-600" /> },
    { slug: 'kinesitherapie-maroc-portrait', titleFr: 'La kiné au Maroc', titleAr: 'الترويض الطبي بالمغرب', icon: <Users size={20} className="text-medical-600" /> },
    { slug: 'tout-le-monde-besoin-kine', titleFr: 'Tout le monde a besoin de kiné', titleAr: 'الجميع يحتاج الترويض', icon: <Scale size={20} className="text-medical-600" /> }
  ]
});

export default article;
