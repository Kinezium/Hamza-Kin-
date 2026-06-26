import React from 'react';
import { createArticle } from './ArticleTemplate';
import { AlertTriangle, XCircle, CheckCircle, Target, Heart } from 'lucide-react';

const article = createArticle({
  slug: 'faux-espoirs-kinesitherapie',
  titleFr: 'Faux Espoirs en Kiné: Ce qu on peut vraiment changer',
  titleAr: 'الأوهام الكبيرة في الترويض الطبي: ما يمكن تغييره فعلاً',
  descriptionFr: 'On vous a promis que la kiné allait tout régler? La vérité sur ce que la kinésithérapie peut et ne peut pas faire — pour de vrais résultats sans fausses promesses.',
  descriptionAr: 'هل وعدوك بأن الترويض الطبي سيحل كل شيء؟ الحقيقة عما يمكن وما لا يمكن فعله — لنتائج حقيقية بدون وعود كاذبة.',
  keywordsFr: 'faux espoirs kinésithérapie, attentes réalistes kiné, limites kinésithérapie, ce que la kiné ne peut pas faire, objectifs rééducation',
  keywordsAr: 'توقعات الترويض الطبي, ما يفعله الترويض الطبي, حدود الترويض الطبي, أهداف واقعية, الأوهام في العلاج',
  imageFr: 'https://picsum.photos/seed/faux-espoirs-kine-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/faux-espoirs-kine-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-amber-600" size={26} />
          <h2 className="text-2xl font-bold text-amber-900">Le problème des fausses promesses</h2>
        </div>
        <p className="text-amber-900 leading-relaxed">
          "10 séances et tu seras comme neuf." "La kiné va tout arranger." "Tu n'auras plus jamais mal."
          Ces phrases, on les entend trop souvent. Et elles font du mal — parce qu'elles créent des attentes
          impossibles qui se transforment en déceptions, en abandons du traitement, et parfois en méfiance
          vis-à-vis de toute la médecine.
        </p>
        <p className="mt-3 text-amber-900">
          Soyons honnêtes une bonne fois pour toutes.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold text-red-800">Ce que la kiné NE peut PAS faire</h2>
        </div>
        <p className="mb-4 font-medium text-gray-700">Voici la liste honnête — pas pour décourager, mais pour recalibrer les attentes:</p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Réparer une lésion neurologique définitive</strong> (AVC ancien, SEP installée, paralysie cérébrale).
            La kiné travaille <em>avec</em> ce que le cerveau peut encore faire — elle ne recrée pas les neurones perdus.
          </li>
          <li>
            <strong>Guérir une arthrose avancée.</strong> Elle ne fait pas repousser le cartilage. Mais elle
            réduit la douleur, améliore la mobilité et peut retarder la chirurgie — c'est déjà énorme.
          </li>
          <li>
            <strong>Faire disparaître une douleur chronique en 3 séances.</strong> La douleur chronique
            est complexe, multi-factorielle. Elle se travaille sur le long terme, et la kiné n'est qu'une pièce du puzzle.
          </li>
          <li>
            <strong>Remplacer l'effort du patient.</strong> Si vous faites vos exercices uniquement en séance,
            les résultats seront divisés par trois. La kiné est un coaching — c'est vous qui faites le vrai travail.
          </li>
          <li>
            <strong>Fonctionner sans collaboration médicale.</strong> Une hernie discale sévère, une fracture
            instable, une pathologie cardiaque — la kiné seule sans bilan médical peut aggraver les choses.
          </li>
        </ul>
      </section>

      <section className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold text-green-900">Ce que la kiné PEUT vraiment faire — et c'est déjà beaucoup</h2>
        </div>
        <ul className="list-disc pl-6 space-y-3 text-green-900">
          <li>
            <strong>Vous redonner de la qualité de vie</strong> quand la guérison totale est impossible.
            Marcher mieux, dormir sans douleur, jouer avec vos enfants — ce sont des victoires réelles.
          </li>
          <li>
            <strong>Prévenir les complications.</strong> Après un AVC: éviter les rétractions musculaires.
            Après une fracture: éviter la fonte musculaire. Chez le senior: éviter les chutes. C'est vital.
          </li>
          <li>
            <strong>Vous autonomiser.</strong> Un bon kiné vous apprend à vous prendre en charge.
            Vous repartez avec des outils — pas une dépendance.
          </li>
          <li>
            <strong>Améliorer des pathologies chroniques.</strong> Lombalgies, cervicalgies, arthrose —
            la douleur peut diminuer de façon significative et durable avec un programme adapté.
          </li>
          <li>
            <strong>Accompagner les maladies évolutives.</strong> SEP, Parkinson, spasticité — la kiné
            ralentit le déclin, maintient les acquis, et améliore le quotidien même quand elle ne guérit pas.
          </li>
          <li>
            <strong>Optimiser la récupération post-chirurgicale.</strong> Après une opération du LCA,
            du genou, de l'épaule — une bonne rééducation fait toute la différence sur le résultat final.
          </li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Target className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold text-blue-900">Comment fixer de vrais objectifs avec votre kiné</h2>
        </div>
        <p className="mb-4">Un bon suivi commence par une conversation honnête. Voici les questions à poser:</p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>"Quel est l'objectif réaliste pour ma situation spécifique?"</strong><br />
            Pas "guérir" comme objectif vague — mais "pouvoir marcher 1 km sans douleur d'ici 2 mois."
          </li>
          <li>
            <strong>"Combien de temps faudra-t-il réellement?"</strong><br />
            Une entorse: 3-6 semaines. Un AVC: des mois à des années. Une douleur chronique: variable.
            Exiger la vérité vous protège des déceptions.
          </li>
          <li>
            <strong>"Qu'est-ce que je dois faire moi-même à la maison?"</strong><br />
            Sans exercices entre les séances, le travail est divisé par deux minimum.
          </li>
          <li>
            <strong>"Quand doit-on réévaluer?"</strong><br />
            Si après 6-8 séances rien n'évolue, il faut revoir le plan. La stagnation n'est pas normale.
          </li>
        </ol>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold text-blue-900">La vraie force de la kinésithérapie</h2>
        </div>
        <p className="text-blue-900 leading-relaxed mb-4">
          La kinésithérapie n'est pas magique. Mais elle est puissante précisément parce qu'elle travaille
          <em> avec vous</em>, pas à votre place. Elle mobilise les ressources naturelles de votre corps —
          adaptation, neuroplasticité, cicatrisation, renforcement.
        </p>
        <p className="text-blue-900 leading-relaxed mb-4">
          Les meilleures histoires de rééducation ne sont pas des "miracles" — ce sont des personnes qui
          ont compris leurs limites réelles, qui ont travaillé intelligemment avec leur thérapeute, et qui
          ont progressé pas à pas vers des objectifs concrets et atteignables.
        </p>
        <p className="text-blue-900 font-bold text-lg">
          Un espoir réaliste vaut mieux qu'un faux miracle. Et avec les bons objectifs, les vrais résultats sont là.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-amber-50 border-r-4 border-amber-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-amber-600" size={26} />
          <h2 className="text-2xl font-bold text-amber-900">مشكلة الوعود الكاذبة</h2>
        </div>
        <p className="text-amber-900 leading-relaxed">
          "10 جلسات وستكون كأنك ولدت من جديد." "الترويض سيحل كل شيء." "لن تشعر بألم أبدًا."
          هذه العبارات تُقال كثيرًا — وهي تضر، لأنها تخلق توقعات مستحيلة تتحول إلى خيبات أمل،
          وأحيانًا إلى ترك العلاج كليًا.
        </p>
        <p className="mt-3 text-amber-900">
          لنكن صادقين مرة واحدة وإلى الأبد.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold text-red-800">ما لا يستطيع الترويض الطبي فعله</h2>
        </div>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>إصلاح إصابة عصبية دائمة</strong> (جلطة قديمة، تصلب متعدد متقدم، شلل دماغي).
            الترويض يعمل <em>مع</em> ما يمكن للدماغ فعله — لا يُعيد بناء الخلايا العصبية المفقودة.
          </li>
          <li>
            <strong>شفاء خشونة المفاصل المتقدمة.</strong> لا ينمو الغضروف من جديد. لكنه يقلل الألم
            ويحسن الحركة ويؤخر الجراحة — وهذا إنجاز كبير بحد ذاته.
          </li>
          <li>
            <strong>إزالة الألم المزمن في 3 جلسات.</strong> الألم المزمن معقد ومتعدد الأسباب.
            يحتاج وقتًا طويلًا، والترويض الطبي جزء من الحل لا الحل الكامل.
          </li>
          <li>
            <strong>العمل بدون جهد من المريض.</strong> إن كنت تتمرن فقط خلال الجلسة،
            ستنقص النتائج كثيرًا. الترويض تدريب — أنت من يقوم بالعمل الحقيقي.
          </li>
          <li>
            <strong>الاستغناء عن المتابعة الطبية.</strong> فتق حاد، كسر غير مستقر، مشكلة قلبية —
            الترويض وحده بدون تقييم طبي قد يُفاقم الوضع.
          </li>
        </ul>
      </section>

      <section className="bg-green-50 border-r-4 border-green-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold text-green-900">ما يمكن للترويض الطبي فعله — وهذا كثير جدًا</h2>
        </div>
        <ul className="list-disc pl-6 space-y-3 text-green-900">
          <li>
            <strong>استعادة جودة الحياة</strong> حين الشفاء التام مستحيل.
            المشي بشكل أفضل، النوم بدون ألم، اللعب مع أطفالك — هذه انتصارات حقيقية.
          </li>
          <li>
            <strong>الوقاية من المضاعفات.</strong> بعد الجلطة: منع تقلص العضلات. بعد الكسر: منع ضمور العضلات.
            عند المسنين: منع السقوط. هذا أمر حيوي.
          </li>
          <li>
            <strong>تعليمك الاستقلالية.</strong> المعالج الجيد يعلمك كيف تعتني بنفسك.
            تغادر بأدوات — لا باعتماد دائم.
          </li>
          <li>
            <strong>تحسين الأمراض المزمنة.</strong> آلام الظهر، الرقبة، خشونة المفاصل —
            الألم يمكن أن ينخفض بشكل ملحوظ ودائم مع برنامج مناسب.
          </li>
          <li>
            <strong>مرافقة الأمراض التطورية.</strong> التصلب المتعدد، باركنسون، التشنج العضلي —
            الترويض يُبطئ التراجع ويحافظ على المكتسبات حتى حين لا يشفي.
          </li>
          <li>
            <strong>تحسين التعافي بعد العمليات.</strong> بعد جراحة الرباط الصليبي أو الركبة أو الكتف —
            التأهيل الجيد يُحدث فارقًا كبيرًا في النتيجة النهائية.
          </li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Target className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold text-blue-900">كيف تضع أهدافًا حقيقية مع معالجك</h2>
        </div>
        <p className="mb-4">متابعة جيدة تبدأ بمحادثة صادقة. إليك الأسئلة التي تحتاج أن تطرحها:</p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>"ما الهدف الواقعي لحالتي تحديدًا؟"</strong><br />
            ليس "الشفاء" كهدف مبهم — بل "المشي كيلومترًا واحدًا بدون ألم خلال شهرين."
          </li>
          <li>
            <strong>"كم من الوقت سيستغرق هذا حقًا؟"</strong><br />
            التواء: 3-6 أسابيع. جلطة: أشهر إلى سنوات. ألم مزمن: متغير.
            المعرفة الحقيقية تحميك من خيبات الأمل.
          </li>
          <li>
            <strong>"ماذا يجب أن أفعل أنا في المنزل؟"</strong><br />
            بدون تمارين بين الجلسات، العمل ينقص إلى النصف على الأقل.
          </li>
          <li>
            <strong>"متى نعيد التقييم؟"</strong><br />
            إن لم يتحسن شيء بعد 6-8 جلسات، يجب مراجعة الخطة. الجمود ليس طبيعيًا.
          </li>
        </ol>
      </section>

      <section className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold text-blue-900">القوة الحقيقية للترويض الطبي</h2>
        </div>
        <p className="text-blue-900 leading-relaxed mb-4">
          الترويض الطبي ليس سحرًا. لكنه قوي تحديدًا لأنه يعمل <em>معك</em>، لا بدلًا عنك.
          يُفعّل الموارد الطبيعية لجسمك — التكيّف، اللدونة العصبية، التئام الجروح، التقوية.
        </p>
        <p className="text-blue-900 font-bold text-lg">
          أمل واقعي يساوي مئة ضعف وعد كاذب. ومع الأهداف الصحيحة، النتائج الحقيقية موجودة.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'tout-le-monde-besoin-kine', titleFr: 'Tout le monde a besoin de kiné', titleAr: 'الجميع يحتاج إلى الترويض', icon: <CheckCircle size={20} className="text-medical-600" /> },
    { slug: 'spasticite-definition-traitement-indications', titleFr: 'Spasticité: définition et traitement', titleAr: 'التشنج العضلي: التعريف والعلاج', icon: <AlertTriangle size={20} className="text-medical-600" /> },
    { slug: 'readaptation-post-avc', titleFr: 'Réadaptation Post-AVC', titleAr: 'إعادة التأهيل ما بعد الجلطة', icon: <Heart size={20} className="text-medical-600" /> }
  ]
});

export default article;
