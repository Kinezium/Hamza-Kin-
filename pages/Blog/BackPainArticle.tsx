import { createArticle } from './ArticleTemplate';
import { ArrowUpDown } from 'lucide-react';

const article2 = createArticle({
  slug: 'lombalgie-cervicalgie',
  titleFr: 'Lombalgie & Cervicalgie: Solutions Efficaces',
  titleAr: 'آلام الظهر والرقبة: حلول فعّالة',
  descriptionFr: 'Guide simple pour comprendre les douleurs du dos et du cou, avec des solutions concrètes en kinésithérapie.',
  descriptionAr: 'دليل بسيط لفهم آلام الظهر والرقبة مع حلول عملية في الترويض الطبي.',
  keywordsFr: 'lombalgie, cervicalgie, mal de dos, kiné casablanca, traitement dos',
  keywordsAr: 'آلام أسفل الظهر, آلام الرقبة, علاج الظهر, ترويض طبي',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Pourquoi ces douleurs apparaissent ?</h2>
        <p>Les douleurs lombaires et cervicales sont très fréquentes. Elles apparaissent souvent après de longues heures assises, un stress important ou un manque d’activité physique.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Signes les plus courants</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Raideur du cou au réveil.</li>
          <li>Douleur du bas du dos en fin de journée.</li>
          <li>Tension qui monte vers les épaules.</li>
          <li>Gêne quand on se penche ou quand on tourne la tête.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ce que fait la kinésithérapie</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Évaluation de la posture et de la mobilité.</li>
          <li>Techniques manuelles pour réduire la douleur.</li>
          <li>Exercices pour renforcer le dos et le cou.</li>
          <li>Conseils pour le travail et la vie quotidienne.</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Exercices simples à la maison</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Étirements doux du cou (2 à 3 minutes).</li>
          <li>Gainage léger (3 séries courtes).</li>
          <li>Marche quotidienne 20 à 30 minutes.</li>
          <li>Pause active toutes les 60 minutes au bureau.</li>
        </ul>
      </section>
      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Prévention</h3>
        <p>Une bonne posture, des pauses régulières et un renforcement progressif évitent la plupart des douleurs chroniques du dos et du cou.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">لماذا تظهر هذه الآلام؟</h2>
        <p>آلام الظهر والرقبة شائعة جداً. غالباً تظهر بسبب الجلوس الطويل، التوتر، وقلة الحركة.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">الأعراض الأكثر شيوعاً</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>تيبس الرقبة صباحاً.</li>
          <li>ألم أسفل الظهر في نهاية اليوم.</li>
          <li>شد عضلي يصل إلى الكتفين.</li>
          <li>صعوبة في الانحناء أو تدوير الرأس.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">كيف يساعد الترويض الطبي؟</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>تقييم وضعية الجسم والحركة.</li>
          <li>تقنيات يدوية لتخفيف الألم.</li>
          <li>تمارين لتقوية الظهر والرقبة.</li>
          <li>نصائح عملية للعمل والحياة اليومية.</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">تمارين بسيطة في المنزل</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>تمددات خفيفة للرقبة 2 إلى 3 دقائق.</li>
          <li>تمارين تقوية بسيطة للجذع.</li>
          <li>مشي يومي 20 إلى 30 دقيقة.</li>
          <li>استراحة حركة كل ساعة أثناء الجلوس.</li>
        </ul>
      </section>
      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">الوقاية</h3>
        <p>الوضعية الصحيحة، الحركة المنتظمة، وتمارين التقوية الخفيفة تساعد كثيراً على منع الألم المزمن.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'sciatique-hernie-discale', titleFr: 'Sciatique & Hernie Discale', titleAr: 'عرق النسا والانزلاق الغضروفي', icon: <ArrowUpDown size={20} /> },
    { slug: 'douleurs-epaules-capsulite', titleFr: 'Douleurs aux Épaules', titleAr: 'آلام الكتف', icon: <ArrowUpDown size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرغونوميا', icon: <ArrowUpDown size={20} /> },
  ]
});

export default article2;
