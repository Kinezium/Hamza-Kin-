import { createArticle } from './ArticleTemplate';
import { Bone } from 'lucide-react';

const tibiaFractureArticle = createArticle({
  slug: 'fracture-tibia-reeducation-marche',
  titleFr: 'Fracture du tibia: reprendre la marche avec la kinesitherapie',
  titleAr: 'كسر عظم الساق: استعادة المشي بالترويض الطبي',
  descriptionFr:
    'Apres fracture du tibia, la kinesitherapie accelere la reprise de la marche, la force musculaire et la mobilite en toute securite.',
  descriptionAr:
    'بعد كسر عظم الساق، يساعد الترويض الطبي على استرجاع المشي والقوة والحركة بشكل امن وتدريجي.',
  keywordsFr:
    'fracture tibia reeducation, kinesitherapie apres fracture jambe, reprise marche, renforcement membre inferieur, casablanca',
  keywordsAr:
    'كسر عظم الساق, تاهيل بعد الكسر, استرجاع المشي, تقوية عضلات الرجل, الترويض الطبي الدار البيضاء',
  imageFr: 'https://picsum.photos/seed/fracture-tibia-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/fracture-tibia-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Pourquoi la reeducation est decisive ?</h2>
        <p>
          Immobilisation, douleur et perte musculaire sont frequentes apres une fracture du tibia.
          Sans reeducation, la reprise de la marche peut rester limitee. La kinesitherapie permet de
          restaurer progressivement la fonction complete du membre inferieur.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Axes de travail en kinesitherapie</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mobilite de cheville, genou et hanche</li>
          <li>Renforcement des muscles de la jambe</li>
          <li>Reeducation de la marche avec appui progressif</li>
          <li>Travail de l equilibre et de la confiance</li>
          <li>Retour progressif aux activites quotidiennes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Reprise de la marche: les etapes</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Appui partiel selon avis medical</li>
          <li>Correction du schema de marche</li>
          <li>Montee des escaliers et transferts</li>
          <li>Marche prolongée et endurance</li>
        </ol>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Objectif final</h3>
        <p>
          Recuperer une marche stable, sans boiterie, et retrouver une jambe forte pour reprendre une
          vie active sans douleur persistante.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">لماذا التاهيل مهم بعد كسر الساق؟</h2>
        <p>
          بعد الكسر، غالبا ما يظهر ضعف في العضلات وتيبس في المفاصل وصعوبة في المشي. الترويض الطبي
          يساعد على استرجاع الحركة بشكل تدريجي وامن حتى العودة للحياة الطبيعية.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">محاور العلاج</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>تحسين حركة الكاحل والركبة والورك</li>
          <li>تقوية عضلات الساق</li>
          <li>اعادة تدريب المشي مع تحميل تدريجي</li>
          <li>تمارين التوازن والثقة</li>
          <li>العودة التدريجية للانشطة اليومية</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">مراحل استعادة المشي</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>تحميل جزئي حسب توجيه الطبيب</li>
          <li>تصحيح طريقة المشي</li>
          <li>تدريب السلالم والحركة الوظيفية</li>
          <li>رفع التحمل والمشي لمسافات اطول</li>
        </ol>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">الهدف</h3>
        <p>
          استرجاع مشي ثابت بدون عرج وتقوية الساق للعودة الى النشاط اليومي والمهني بثقة.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'rupture-ligament-croise-anterieur-reeducation',
      titleFr: 'Rupture du ligament croise',
      titleAr: 'تمزق الرباط الصليبي',
      icon: <Bone size={20} />
    },
    {
      slug: 'entorse-cheville-kinesitherapie',
      titleFr: 'Entorse de cheville',
      titleAr: 'التواء الكاحل',
      icon: <Bone size={20} />
    },
    {
      slug: 'arthrose-genou',
      titleFr: 'Arthrose du genou',
      titleAr: 'خشونة الركبة',
      icon: <Bone size={20} />
    }
  ]
});

export default tibiaFractureArticle;
