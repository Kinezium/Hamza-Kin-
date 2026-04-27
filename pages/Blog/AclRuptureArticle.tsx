import { createArticle } from './ArticleTemplate';
import { Bone } from 'lucide-react';

const aclRuptureArticle = createArticle({
  slug: 'rupture-ligament-croise-anterieur-reeducation',
  titleFr: 'Rupture du ligament croise anterieur: etapes de reeducation',
  titleAr: 'تمزق الرباط الصليبي الامامي: مراحل اعادة التاهيل',
  descriptionFr:
    'Apres rupture du LCA, la kinesitherapie est essentielle avant et apres chirurgie pour retrouver stabilite, force et confiance au genou.',
  descriptionAr:
    'بعد تمزق الرباط الصليبي الامامي، الترويض الطبي ضروري قبل وبعد الجراحة لاسترجاع الثبات والقوة والثقة في الركبة.',
  keywordsFr:
    'rupture ligament croise anterieur, reeducation lca, kinesitherapie genou sport, retour terrain apres lca, casablanca',
  keywordsAr:
    'تمزق الرباط الصليبي الامامي, تاهيل LCA, ترويض الركبة, الرجوع للرياضة بعد الصليبي, الدار البيضاء',
  imageFr: 'https://picsum.photos/seed/lca-rupture-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/lca-rupture-chnider/1600/900',
  readTimeFr: '8 min de lecture',
  readTimeAr: '8 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Le LCA: stabilite cle du genou</h2>
        <p>
          Le ligament croise anterieur stabilise le genou pendant les pivots et changements de direction.
          En cas de rupture, la sensation de decrochage est frequente. Une reeducation rigoureuse est
          indispensable, avec ou sans chirurgie.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Objectifs selon les phases</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Calmer douleur et gonflement</li>
          <li>Recuperer extension/flexion completes</li>
          <li>Renforcer quadriceps, ischios et fessiers</li>
          <li>Reeduquer proprioception et controle dynamique</li>
          <li>Valider des tests avant retour au sport</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Avant ou apres chirurgie: la kine reste centrale</h2>
        <p>
          En pre-operatoire, la kinesitherapie prepare le genou pour mieux recuperer apres l intervention.
          En post-operatoire, elle suit un protocole progressif jusqu a la reprise du sport en securite.
        </p>
      </section>

      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Point cle</h3>
        <p>
          Le retour terrain ne se decide pas sur la date, mais sur des criteres fonctionnels: force,
          stabilite, controle et confiance.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">الرباط الصليبي الامامي ودوره</h2>
        <p>
          الرباط الصليبي الامامي يحافظ على ثبات الركبة خاصة في الحركات السريعة والدوران. عند تمزقه
          يشعر المريض بعدم الثبات. لذلك التاهيل بالترويض الطبي ضروري سواء تم اختيار الجراحة او لا.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">اهداف العلاج حسب المراحل</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>تقليل الالم والتورم</li>
          <li>استرجاع كامل مدى الحركة</li>
          <li>تقوية عضلات الفخذ والخلفية والورك</li>
          <li>تحسين التوازن والتحكم الحركي</li>
          <li>اختبارات جاهزية قبل العودة للرياضة</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">قبل وبعد العملية</h2>
        <p>
          قبل الجراحة، الترويض يجهز الركبة لتسريع التعافي. بعد الجراحة، يتم اتباع برنامج تدريجي حتى
          الرجوع الامن للنشاط الرياضي.
        </p>
      </section>

      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">معلومة مهمة</h3>
        <p>
          قرار العودة للملاعب لا يعتمد على الوقت فقط، بل على اختبارات القوة والثبات والتحكم والثقة.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'entorse-cheville-kinesitherapie',
      titleFr: 'Entorse de cheville',
      titleAr: 'التواء الكاحل',
      icon: <Bone size={20} />
    },
    {
      slug: 'fracture-tibia-reeducation-marche',
      titleFr: 'Fracture du tibia',
      titleAr: 'كسر عظم الساق',
      icon: <Bone size={20} />
    },
    {
      slug: 'traumatologie-sport',
      titleFr: 'Traumatologie du sport',
      titleAr: 'الاصابات الرياضية',
      icon: <Bone size={20} />
    }
  ]
});

export default aclRuptureArticle;
