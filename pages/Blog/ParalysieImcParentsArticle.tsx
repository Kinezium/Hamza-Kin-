import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Baby, Heart, Users, BookOpen, CheckCircle, AlertTriangle } from 'lucide-react';

const article = createArticle({
  slug: 'parents-paralysie-cerebrale-imc-education',
  titleFr: 'Paralysie Cérébrale IMC/IMOC: Guide Complet pour les Parents',
  titleAr: 'الشلل الدماغي IMC/IMOC: الدليل الكامل للوالدين',
  descriptionFr: 'Votre enfant a une paralysie cérébrale (IMC ou IMOC)? Ce guide complet explique votre rôle, les exercices à faire, ce qu il faut éviter, et comment travailler avec l équipe médicale.',
  descriptionAr: 'طفلك مصاب بالشلل الدماغي (IMC أو IMOC)؟ هذا الدليل الشامل يشرح دورك كوالد، التمارين الصحيحة، ما يجب تجنبه، وكيف تتعاون مع الفريق الطبي.',
  keywordsFr: 'paralysie cérébrale IMC, IMOC kinésithérapie, éducation parents enfant handicap, exercices paralysie cérébrale, rôle des parents rééducation',
  keywordsAr: 'الشلل الدماغي IMC, الترويض الطبي للشلل الدماغي, تعليم الوالدين, تمارين الشلل الدماغي, دور الأسرة في التأهيل',
  imageFr: 'https://picsum.photos/seed/imc-parents-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/imc-parents-chnider/1600/900',
  readTimeFr: '10 min de lecture',
  readTimeAr: '10 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-purple-600" size={26} />
          <h2 className="text-2xl font-bold text-purple-900">Pour les parents qui portent tout</h2>
        </div>
        <p className="text-purple-900 leading-relaxed">
          Vous venez d'apprendre le diagnostic. Ou peut-être vous vivez avec depuis des années. Dans tous les cas,
          personne ne vous a donné un mode d'emploi. Cet article est ce mode d'emploi — honnête, pratique,
          respectueux de ce que vous vivez.
        </p>
        <p className="mt-3 text-purple-900 font-medium">
          Votre rôle est aussi important que celui du kinésithérapeute. Peut-être plus.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Baby className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Comprendre l'IMC et l'IMOC</h2>
        </div>
        <p className="mb-4">
          La <strong>paralysie cérébrale</strong> (PC), ou infirmité motrice cérébrale (IMC/IMOC), est
          causée par une lésion du cerveau en développement — avant, pendant ou après la naissance.
          Elle affecte principalement le mouvement, le tonus musculaire et la coordination.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <h3 className="font-bold mb-2">Différence IMC vs IMOC:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>IMC (Infirmité Motrice Cérébrale):</strong> atteinte motrice pure — pas d'atteinte intellectuelle associée.</li>
            <li><strong>IMOC (IMC avec déficience intellectuelle):</strong> atteinte motrice ET cognitive.</li>
          </ul>
        </div>
        <p className="mb-3">Points importants à retenir:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>La lésion cérébrale est stable — elle n'évolue pas. Mais ses conséquences, elles, peuvent changer.</li>
          <li>Chaque enfant est différent. Les formes varient de légères à sévères.</li>
          <li>La rééducation commence le plus tôt possible pour profiter de la plasticité du cerveau en développement.</li>
          <li>La guérison au sens total du terme n'est pas l'objectif — le développement maximal des capacités, oui.</li>
        </ul>
      </section>

      <section className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold text-green-900">Votre rôle en tant que parent: multiplicateur d'effet</h2>
        </div>
        <p className="mb-4 text-green-900">
          Un enfant atteint de paralysie cérébrale voit son kiné 2-3 fois par semaine. Il vit avec vous 24h/24.
          <strong> Vous êtes le vrai thérapeute</strong> — le kiné vous forme et vous guide.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-green-900">
          <li>
            <strong>Intégrer les exercices dans la vie quotidienne:</strong> l'habillage, le bain, les repas,
            le jeu — chaque moment est une opportunité de stimulation motrice et sensorielle.
          </li>
          <li>
            <strong>Positionnement correct:</strong> au fauteuil, au lit, pendant les repas.
            Un mauvais positionnement répété aggrave les déformations et la spasticité.
          </li>
          <li>
            <strong>Observer et rapporter:</strong> noter les progrès, les régressions, les changements
            de tonus, les nouvelles douleurs. Vous êtes les yeux du thérapeute entre les séances.
          </li>
          <li>
            <strong>Encourager l'autonomie:</strong> même si c'est plus lent ou imparfait, laisser l'enfant
            essayer lui-même — c'est par l'effort actif que le cerveau apprend.
          </li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Exercices quotidiens: ce que vous pouvez faire</h2>
        </div>
        <p className="mb-4 font-medium text-amber-700">⚠️ Toujours en accord avec votre kinésithérapeute — ces exemples sont généraux.</p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Étirements doux quotidiens</strong> (10-15 min)<br />
            Étirer doucement les muscles spastiques dans leur amplitude maximale. Tenez 30 secondes minimum.
            Ne forcez jamais — si l'enfant pleure de douleur, arrêtez.
          </li>
          <li>
            <strong>Stimulation sensorielle</strong><br />
            Toucher différentes textures, surfaces. Marcher pieds nus sur herbe, sable, tapis.
            Le cerveau apprend aussi par les sens.
          </li>
          <li>
            <strong>Encourager le retournement, le ramper, la position assise</strong><br />
            Selon le niveau de l'enfant, encourager les transitions posturales plutôt que de tout faire à sa place.
          </li>
          <li>
            <strong>Jeux adaptés</strong><br />
            Jeux de saisie, puzzles larges, activités de préhension. La kiné passe par le jeu chez l'enfant.
          </li>
        </ol>
      </section>

      <section className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold text-red-900">Ce qu'il faut ABSOLUMENT éviter</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-red-900">
          <li><strong>Ne jamais forcer les articulations</strong> au-delà de leur amplitude — risque de fracture ou luxation, surtout en cas de spasticité sévère.</li>
          <li><strong>Ne pas tout faire à la place de l'enfant</strong> — l'indépendance, même partielle, est thérapeutique.</li>
          <li><strong>Éviter les positions aggravantes:</strong> assis en W sur le sol (genoux en dedans), postures asymétriques prolongées.</li>
          <li><strong>Ne pas comparer à d'autres enfants</strong> — chaque parcours est unique. Les comparaisons nuisent à la motivation de toute la famille.</li>
          <li><strong>Ne pas croire aux "remèdes miracles"</strong> — les traitements non prouvés peuvent faire perdre un temps précieux et de l'argent.</li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-pink-600" size={24} />
          <h2 className="text-2xl font-bold">Prendre soin de vous aussi</h2>
        </div>
        <p className="mb-4">
          Vous ne pouvez pas tout donner si vous êtes vide. L'épuisement parental (burnout) est réel
          et documenté chez les parents d'enfants polyhandicapés.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Demandez de l'aide sans culpabilité — famille, associations, structures de répit.</li>
          <li>Rejoignez des groupes de parents IMC — le partage d'expérience est une ressource inestimable.</li>
          <li>Consultez un psychologue si vous sentez que vous n'y arrivez plus.</li>
          <li>Célébrez chaque petit progrès — ils sont réels même s'ils semblent minuscules.</li>
        </ul>
        <p className="mt-4 font-bold text-gray-800">
          Un parent équilibré et informé est le meilleur cadeau qu'on puisse donner à un enfant atteint de paralysie cérébrale.
        </p>
      </section>

      <section className="bg-slate-50 rounded-lg p-5">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="text-slate-700" size={22} />
          <h2 className="text-xl font-bold text-slate-900">Ressources</h2>
        </div>
        <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
          <li>Rosenbaum P et al. A report: the definition and classification of cerebral palsy. Dev Med Child Neurol. 2007.</li>
          <li>Novak I et al. A systematic review of interventions for children with cerebral palsy. Dev Med Child Neurol. 2013.</li>
          <li>SCPE Surveillance of Cerebral Palsy in Europe — data and guidelines.</li>
        </ul>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-purple-50 border-r-4 border-purple-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-purple-600" size={26} />
          <h2 className="text-2xl font-bold text-purple-900">للوالدين الذين يحملون كل شيء</h2>
        </div>
        <p className="text-purple-900 leading-relaxed">
          لم يُعطَ لك كتيب تعليمات. هذا المقال هو ذلك الكتيب — صادق، عملي، ومحترم لما تعيشه.
        </p>
        <p className="mt-3 text-purple-900 font-medium">
          دورك بنفس أهمية دور المعالج الفيزيائي. ربما أهم.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Baby className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">فهم الشلل الدماغي IMC وIMOC</h2>
        </div>
        <p className="mb-4">
          <strong>الشلل الدماغي</strong> ناتج عن إصابة في الدماغ النامي — قبل أو أثناء أو بعد الولادة.
          يؤثر أساسًا على الحركة، التوتر العضلي، والتنسيق.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <h3 className="font-bold mb-2">الفرق بين IMC وIMOC:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>IMC:</strong> إصابة حركية فقط — دون تأثر فكري.</li>
            <li><strong>IMOC:</strong> إصابة حركية + معرفية.</li>
          </ul>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li>الإصابة الدماغية ثابتة — لا تتطور. لكن عواقبها يمكن أن تتغير.</li>
          <li>كل طفل مختلف. الأشكال تتراوح من خفيفة إلى شديدة.</li>
          <li>التأهيل يبدأ مبكرًا قدر الإمكان للاستفادة من مرونة الدماغ النامي.</li>
        </ul>
      </section>

      <section className="bg-green-50 border-r-4 border-green-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold text-green-900">دورك كوالد: مضاعف الأثر</h2>
        </div>
        <p className="mb-4 text-green-900">
          طفلك يرى المعالج 2-3 مرات أسبوعيًا. يعيش معك 24 ساعة يوميًا.
          <strong> أنت المعالج الحقيقي</strong> — المعالج يُدرّبك ويُرشدك.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-green-900">
          <li><strong>دمج التمارين في الحياة اليومية:</strong> اللباس، الحمام، الوجبات، اللعب — كل لحظة فرصة للتحفيز الحركي.</li>
          <li><strong>التموضع الصحيح:</strong> على الكرسي، في الفراش، أثناء الوجبات. التموضع الخاطئ المتكرر يزيد التشوهات والتشنج.</li>
          <li><strong>الملاحظة والإبلاغ:</strong> سجّل التقدم، التراجع، التغيرات في التوتر، الآلام الجديدة. أنت عيني المعالج بين الجلسات.</li>
          <li><strong>تشجيع الاستقلالية:</strong> حتى لو كان أبطأ أو غير مثالي، دع الطفل يحاول بنفسه — بالجهد النشط يتعلم الدماغ.</li>
        </ul>
      </section>

      <section className="bg-red-50 border-r-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold text-red-900">ما يجب تجنبه تمامًا</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-red-900">
          <li><strong>لا تُجبر المفاصل أبدًا</strong> على تجاوز نطاقها — خطر الكسر خاصة مع التشنج الشديد.</li>
          <li><strong>لا تفعل كل شيء بدلًا عن الطفل</strong> — الاستقلالية الجزئية علاجية.</li>
          <li><strong>تجنب الجلوس على الأرض بالركبتين للداخل (W-sitting)</strong> — هذا الوضع يؤخر التطور.</li>
          <li><strong>لا تقارن بأطفال آخرين</strong> — كل مسار فريد. المقارنات تضر الدافعية.</li>
          <li><strong>لا تصدّق "العلاجات المعجزة"</strong> — قد تضيع وقتًا وأموالًا ثمينة.</li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-pink-600" size={24} />
          <h2 className="text-2xl font-bold">اعتنِ بنفسك أيضًا</h2>
        </div>
        <p className="mb-4">لا يمكنك أن تعطي وأنت فارغ. الإرهاق الوالدي حقيقي ومثبت علميًا عند أولياء الأطفال ذوي الاحتياجات الخاصة.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>اطلب المساعدة بدون ذنب — الأسرة، الجمعيات، مراكز الراحة.</li>
          <li>انضم إلى مجموعات أولياء أطفال الشلل الدماغي — تبادل التجارب لا يُقدر بثمن.</li>
          <li>استشر نفسانيًا إن شعرت أنك لا تتحمل.</li>
          <li>احتفل بكل تقدم صغير — فهو حقيقي حتى لو بدا ضئيلًا.</li>
        </ul>
        <p className="mt-4 font-bold text-gray-800">
          والد متوازن ومثقف هو أفضل هدية يمكن تقديمها لطفل مصاب بالشلل الدماغي.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'kine-pediatrique', titleFr: 'Physiothérapie Pédiatrique', titleAr: 'الترويض الطبي للأطفال', icon: <Baby size={20} className="text-medical-600" /> },
    { slug: 'spasticite-definition-traitement-indications', titleFr: 'Spasticité: définition et traitement', titleAr: 'التشنج العضلي', icon: <CheckCircle size={20} className="text-medical-600" /> },
    { slug: 'faux-espoirs-kinesitherapie', titleFr: 'Faux espoirs en kiné', titleAr: 'الأوهام في الترويض الطبي', icon: <Heart size={20} className="text-medical-600" /> }
  ]
});

export default article;
