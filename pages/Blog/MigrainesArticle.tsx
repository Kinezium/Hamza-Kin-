import { createArticle } from './ArticleTemplate';
import { Brain } from 'lucide-react';

const article6 = createArticle({
  slug: 'migraines-cephalees',
  titleFr: 'Migraines & Céphalées: Soulagement Naturel',
  titleAr: 'الصداع والشقيقة: تخفيف طبيعي',
  descriptionFr: 'Comprendre les migraines et céphalées de tension, et découvrir des solutions kiné efficaces.',
  descriptionAr: 'فهم الصداع والشقيقة مع حلول فعالة بالترويض الطبي.',
  keywordsFr: 'migraine, céphalée, mal de tête, kiné migraine, traitement céphalée',
  keywordsAr: 'صداع, شقيقة, صداع نصفي, علاج الصداع',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '5 min de lecture',
  readTimeAr: '5 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Différence migraine et céphalée</h2>
        <p>La céphalée de tension donne souvent une pression diffuse. La migraine provoque souvent une douleur plus forte, pulsatile, parfois avec nausée ou gêne à la lumière.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Causes fréquentes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Stress prolongé.</li>
          <li>Manque de sommeil.</li>
          <li>Raideur cervicale.</li>
          <li>Posture prolongée devant écran.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Comment la kiné aide</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Relâcher les tensions du cou et des épaules.</li>
          <li>Améliorer la mobilité cervicale.</li>
          <li>Corriger la posture au travail.</li>
          <li>Donner des exercices préventifs.</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Prévention quotidienne</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Étirements du cou 5 minutes par jour.</li>
          <li>Pause écran toutes les heures.</li>
          <li>Hydratation suffisante.</li>
          <li>Sommeil régulier.</li>
        </ul>
      </section>
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Résultat attendu</h3>
        <p>Avec un suivi régulier, la fréquence et l’intensité des crises diminuent nettement chez de nombreux patients.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">الفرق بين الصداع والشقيقة</h2>
        <p>صداع التوتر يكون غالباً على شكل ضغط عام. الشقيقة تكون عادة أقوى وقد تأتي مع غثيان أو حساسية للضوء.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">الأسباب الشائعة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>التوتر المستمر.</li>
          <li>قلة النوم.</li>
          <li>تيبس الرقبة.</li>
          <li>الجلوس الطويل أمام الشاشة.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">كيف يساعد الترويض الطبي؟</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>تخفيف شد عضلات الرقبة والكتفين.</li>
          <li>تحسين حركة فقرات الرقبة.</li>
          <li>تصحيح وضعية الجلوس والعمل.</li>
          <li>تمارين وقائية سهلة التطبيق.</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">وقاية يومية</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>تمددات للرقبة يومياً.</li>
          <li>استراحة من الشاشة كل ساعة.</li>
          <li>شرب الماء بانتظام.</li>
          <li>نوم منتظم وكافٍ.</li>
        </ul>
      </section>
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">النتيجة المتوقعة</h3>
        <p>مع المتابعة المنتظمة، تنخفض شدة وتكرار نوبات الصداع بشكل واضح.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'lombalgie-cervicalgie', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'آلام الظهر والرقبة', icon: <Brain size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرغونوميا', icon: <Brain size={20} /> },
    { slug: 'stress-relief', titleFr: 'Gestion du Stress', titleAr: 'إدارة التوتر', icon: <Brain size={20} /> },
  ]
});

export default article6;
