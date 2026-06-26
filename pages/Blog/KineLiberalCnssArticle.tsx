import React from 'react';
import { createArticle } from './ArticleTemplate';
import { AlertTriangle, Stethoscope, BarChart3, Heart, TrendingDown } from 'lucide-react';

const article = createArticle({
  slug: 'kine-liberal-cnss-cnops-injustice',
  titleFr: 'Kinés Libéraux: Victimes du Système CNSS/CNOPS',
  titleAr: 'المعالجون الفيزيائيون الخواص: ضحايا نظام CNSS/CNOPS',
  descriptionFr: 'Le kinésithérapeute libéral facture 150-300 DH. La CNSS lui verse 35 DH pour une séance. Ce que vivent vraiment les kinés marocains — et pourquoi ça va bientôt casser.',
  descriptionAr: 'المعالج الفيزيائي الخاص يُفاتر بـ150-300 درهم. CNSS تدفع له 35 درهمًا للجلسة. ما يعيشه المعالجون الفيزيائيون المغاربة فعلًا — ولماذا هذا سينكسر قريبًا.',
  keywordsFr: 'kinésithérapeute libéral Maroc, tarif kiné CNSS, injustice remboursement kiné, charges cabinet kiné, honoraires kinésithérapeute Maroc',
  keywordsAr: 'معالج فيزيائي خاص المغرب, تعرفة CNSS للترويض, ظلم استرداد الترويض, مصاريف عيادة الترويض, أتعاب المعالج الفيزيائي المغرب',
  imageFr: 'https://picsum.photos/seed/kine-liberal-cnss-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/kine-liberal-cnss-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-orange-50 border-l-4 border-orange-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Stethoscope className="text-orange-600" size={26} />
          <h2 className="text-2xl font-bold text-orange-900">L'équation impossible du kiné libéral marocain</h2>
        </div>
        <p className="text-orange-900 leading-relaxed">
          Imaginez ceci: vous étudiez 3-4 ans, vous ouvrez votre cabinet, vous investissez des dizaines
          de milliers de dirhams en matériel. Et pour chaque patient affilié CNSS/CNOPS que vous traitez,
          l'État vous verse <strong>35 dirhams</strong> par séance.
        </p>
        <p className="mt-3 text-orange-900 font-bold">
          Comment fait-on vivre un cabinet, une famille, une carrière avec 35 DH la séance?
          La réponse honnête: on ne peut pas.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">La réalité des charges d'un cabinet de kiné</h2>
        </div>
        <p className="mb-4">Voici un cabinet kiné "standard" à Casablanca, en zone urbaine:</p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2">Charge mensuelle</th>
                <th className="text-right py-2">Montant estimé</th>
              </tr>
            </thead>
            <tbody className="space-y-1">
              {[
                ['Loyer du local', '3 000 – 6 000 DH'],
                ['Charges (eau, électricité, internet)', '500 – 1 000 DH'],
                ['Assurance professionnelle', '300 – 600 DH'],
                ['Matériel et consommables', '500 – 1 500 DH'],
                ['Entretien des appareils d\'électro', '200 – 500 DH'],
                ['Cotisations sociales (CNSS indépendant)', '600 – 1 200 DH'],
                ['Comptabilité / frais divers', '500 – 800 DH'],
              ].map(([label, amount]) => (
                <tr key={label} className="border-b border-gray-100">
                  <td className="py-2 text-gray-700">{label}</td>
                  <td className="py-2 text-right font-medium">{amount}</td>
                </tr>
              ))}
              <tr className="font-bold text-red-700">
                <td className="py-2">TOTAL mensuel (bas de fourchette)</td>
                <td className="py-2 text-right text-xl">~6 000 DH</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700">
          Pour couvrir ces charges seules (sans compter son propre salaire), le kiné doit réaliser:
        </p>
        <div className="bg-red-50 rounded-lg p-4 mt-2">
          <p className="text-red-900 font-bold">
            6 000 DH ÷ 35 DH/séance = <span className="text-2xl">171 séances CNSS par mois</span>
          </p>
          <p className="text-red-900 mt-2">
            Soit ~8 séances CNSS par jour (20 jours ouvrés) — rien que pour couvrir les charges. Avant de se payer.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <TrendingDown className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">Les conséquences réelles sur les kinés</h2>
        </div>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Limitation des patients CNSS/CNOPS:</strong> beaucoup de kinés refusent ou limitent
            les patients remboursés. Non par mauvaise volonté, mais par nécessité économique de survie.
          </li>
          <li>
            <strong>Surcharge de travail:</strong> pour compenser, certains enchaînent 15-20 séances par jour.
            Qualité réduite, risque de burnout, moins de temps par patient.
          </li>
          <li>
            <strong>Fuite des talents:</strong> les meilleurs kinés partent en France, au Canada, dans les pays
            du Golfe — où ils sont correctement rémunérés. Le Maroc forme et exporte ses professionnels de santé.
          </li>
          <li>
            <strong>Abandon de certaines spécialisations:</strong> la neurologie, la pédiatrie, les soins
            complexes demandent du temps et de l'investissement — impossible à rentabiliser à 35 DH.
          </li>
          <li>
            <strong>Précarité financière:</strong> un kiné libéral débutant peut gagner moins qu'un salarié
            du SMIG, après déduction de toutes ses charges.
          </li>
        </ul>
      </section>

      <section className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold text-amber-900">Le paradoxe criant</h2>
        </div>
        <p className="text-amber-900 mb-4">
          Le Maroc forme des kinésithérapeutes compétents. Ces professionnels veulent soigner leurs patients.
          Mais le système de remboursement les place devant un choix impossible:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-amber-900">
          <li>Accepter tous les patients CNSS → déficit financier, fermeture du cabinet.</li>
          <li>Limiter les patients CNSS → accès aux soins réduit pour les plus vulnérables.</li>
          <li>Surcharger leur planning → qualité de soin dégradée, burnout.</li>
        </ul>
        <p className="mt-4 text-amber-900 font-bold">
          Ce n'est pas un problème individuel — c'est un problème systémique que l'État doit résoudre.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Ce que les kinés demandent</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Révision du tarif de référence à <strong>minimum 120-150 DH/séance</strong> — reflétant le coût réel.</li>
          <li>Indexation automatique sur l'inflation — pour ne pas retomber dans le même problème dans 10 ans.</li>
          <li>Reconnaissance du kinésithérapeute comme professionnel de santé de premier rang, pas auxiliaire.</li>
          <li>Convention directe de tiers payant — pour que les patients ne fassent pas d'avance de frais.</li>
          <li>Tarifs spéciaux pour les soins complexes (neurologie, pédiatrie, polyhandicap) qui demandent plus de temps.</li>
        </ol>
        <p className="mt-4 font-bold text-gray-800">
          Ces revendications ne sont pas des "exigences de luxe". Ce sont les conditions minimales pour
          un système de santé qui fonctionne pour tout le monde — patient et professionnel.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-orange-50 border-r-4 border-orange-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Stethoscope className="text-orange-600" size={26} />
          <h2 className="text-2xl font-bold text-orange-900">المعادلة المستحيلة للمعالج الفيزيائي المغربي</h2>
        </div>
        <p className="text-orange-900 leading-relaxed">
          تخيّل هذا: تدرس 3-4 سنوات، تفتح عيادتك، تستثمر عشرات الآلاف من الدراهم في المعدات.
          ولكل مريض منخرط في CNSS/CNOPS تعالجه، تُعطيك الدولة <strong>35 درهمًا</strong> للجلسة.
        </p>
        <p className="mt-3 text-orange-900 font-bold">
          كيف تُعيش عيادة وأسرة ومسارًا مهنيًا بـ35 درهمًا للجلسة؟ الجواب الصادق: لا يمكن.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <TrendingDown className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">التداعيات الحقيقية على المعالجين</h2>
        </div>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>تحديد عدد مرضى CNSS/CNOPS:</strong> كثير من المعالجين يرفضون أو يُحددون المرضى المُعوَّضين.
            ليس سوء نية — بل ضرورة اقتصادية للبقاء.
          </li>
          <li>
            <strong>الإرهاق:</strong> للتعويض، بعضهم يتابع 15-20 جلسة يوميًا. جودة أقل، مخاطر الاحتراق الوظيفي، وقت أقل للمريض.
          </li>
          <li>
            <strong>هجرة الكفاءات:</strong> أفضل المعالجين يُغادرون إلى فرنسا وكندا ودول الخليج — حيث يحصلون على أجر مناسب.
            المغرب يُكوّن ويُصدّر متخصصيه الصحيين.
          </li>
          <li>
            <strong>التخلي عن بعض التخصصات:</strong> الأعصاب والأطفال والرعاية المعقدة تتطلب وقتًا واستثمارًا — لا يمكن تحقيق ربح بـ35 درهمًا.
          </li>
          <li>
            <strong>الهشاشة المالية:</strong> معالج فيزيائي مبتدئ قد يكسب أقل من عامل بالحد الأدنى للأجور بعد خصم المصاريف.
          </li>
        </ul>
      </section>

      <section className="bg-amber-50 border-r-4 border-amber-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold text-amber-900">المفارقة الصارخة</h2>
        </div>
        <p className="text-amber-900 mb-4">
          المغرب يُكوّن معالجين فيزيائيين أكفاء. هؤلاء المهنيون يريدون علاج مرضاهم.
          لكن نظام الاسترداد يضعهم أمام خيار مستحيل:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-amber-900">
          <li>قبول كل مرضى CNSS → عجز مالي، إغلاق العيادة.</li>
          <li>تحديد مرضى CNSS → تقليص الوصول إلى الرعاية للأكثر هشاشة.</li>
          <li>الإثقال على برنامجهم → جودة رعاية متدهورة، احتراق وظيفي.</li>
        </ul>
        <p className="mt-4 text-amber-900 font-bold">
          هذه ليست مشكلة فردية — إنها مشكلة منظومية يجب على الدولة حلّها.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">ما يطالب به المعالجون</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-2">
          <li>مراجعة التعرفة المرجعية إلى <strong>120-150 درهم على الأقل للجلسة</strong> — تعكس التكلفة الحقيقية.</li>
          <li>ربط تلقائي بالتضخم — لعدم الوقوع في نفس المشكلة بعد 10 سنوات.</li>
          <li>الاعتراف بالمعالج الفيزيائي كمهني صحي من الصف الأول، لا مساعدًا طبيًا.</li>
          <li>اتفاقية طرف ثالث مباشرة — لئلا يدفع المرضى مسبقًا.</li>
          <li>تعريفات خاصة للعلاجات المعقدة (الأعصاب، الأطفال، الإعاقات المتعددة) التي تستلزم وقتًا أطول.</li>
        </ol>
        <p className="mt-4 font-bold text-gray-800">
          هذه المطالب ليست "مطالب رفاهية". إنها الشروط الدنيا لنظام صحي يعمل للجميع — مريضًا ومهنيًا.
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
