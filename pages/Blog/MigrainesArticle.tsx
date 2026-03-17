import { createArticle } from './ArticleTemplate';
import { Brain } from 'lucide-react';

const article6 = createArticle({
  slug: 'migraines-headaches',
  titleFr: 'Migraines & Céphalées: Soulagement Naturel',
  titleAr: 'الصداع والشقيقة: تخفيف طبيعي',
  descriptionFr: 'Traiter migraines et céphalées de tension par la kinésithérapie. Techniques et exercices pour prévenir et soulager.',
  descriptionAr: 'علاج الصداع والشقيقة بالترويض الطبي. تقنيات وتمارين للوقاية والتخفيف.',
  keywordsFr: 'migraine, céphalée, mal de tête, kiné migraine, traitement céphalée',
  keywordsAr: 'صداع, شقيقة, تصداع, معالجة الصداع',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '5 min de lecture',
  readTimeAr: '5 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Migraines et Céphalées: Un Problème Courant</h2>
        <p>15% de la population souffre de migraines. Les céphalées de tension sont encore plus fréquentes. Saviez-vous que la kinésithérapie peut aider?</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Types de Céphalées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Céphalée de Tension:</strong> Pression autour de la tête</li>
          <li><strong>Migraine:</strong> Douleur pulsatile unilatérale</li>
          <li><strong>Céphalée Cervicogénique:</strong> Due au cou raide</li>
          <li><strong>Céphalée de Cluster:</strong> Douleur intense périodique</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Causes Liées à la Posture</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Raideur cervicale</li>
          <li>Tensions musculaires du cou et des épaules</li>
          <li>Mauvaise posture prolongée</li>
          <li>Travail devant l'écran</li>
          <li>Stress musculaire chronique</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Approche Kinésithérapique</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Évaluation:</strong> Identifier les triggers</li>
          <li><strong>Mobilisation Cervicale:</strong> Réduire la raideur</li>
          <li><strong>Traitement des Trigger Points:</strong> Soulager les muscles</li>
          <li><strong>Correction Posturale:</strong> Ergonomie correcte</li>
          <li><strong>Exercices Stabilisateurs:</strong> Renforcement</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Stratégies de Prévention</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Étirements cervicaux quotidiens</li>
          <li>Pauses toutes les heures devant l'écran</li>
          <li>Posture correcte au travail</li>
          <li>Gestion du stress (yoga, méditation)</li>
          <li>Hydratation adéquate</li>
          <li>Sommeil régulier et suffisant</li>
        </ul>
      </section>
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">✨ Résultat Attendu</h3>
        <p>75% des patients voient une réduction significative de la fréquence et de l'intensité des migraines après 6-8 semaines de kinésithérapie régulière.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">الصداع والشقيقة: مشكلة شائعة</h2>
        <p>15% من السكان يعانون من الشقيقة. صداع التوتر أكثر شيوعاً. هل تعلم أن الترويض الطبي يمكن أن يساعد؟</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">أنواع الصداع</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>صداع التوتر:</strong> ضغط حول الرأس</li>
          <li><strong>الشقيقة:</strong> ألم نابض من جانب واحد</li>
          <li><strong>صداع عنقي المصدر:</strong> ناتج عن تيبس الرقبة</li>
          <li><strong>صداع عنقودي:</strong> ألم مكثف دوري</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">أسباب ذات صلة بالوضعية</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>تيبس الرقبة</li>
          <li>تشنجات عضلية في الرقبة والأكتاف</li>
          <li>وضعية خاطئة مطولة</li>
          <li>العمل أمام الشاشة</li>
          <li>الإجهاد العضلي المزمن</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">النهج العلاجي</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>التقييم:</strong> تحديد المحفزات</li>
          <li><strong>تحريك الرقبة:</strong> تقليل التيبس</li>
          <li><strong>علاج نقاط الألم:</strong> تخفيف العضلات</li>
          <li><strong>تصحيح الوضعية:</strong> الإرجونوميا الصحيحة</li>
          <li><strong>تمارين التثبيت:</strong> التقوية</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">استراتيجيات الوقاية</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>تمديدات الرقبة اليومية</li>
          <li>فترات راحة كل ساعة أمام الشاشة</li>
          <li>وضعية صحيحة في العمل</li>
          <li>إدارة الإجهاد (اليوغا، التأمل)</li>
          <li>ترطيب كافٍ</li>
          <li>نوم منتظم وكافٍ</li>
        </ul>
      </section>
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">✨ النتيجة المتوقعة</h3>
        <p>75% من المرضى يرون انخفاضاً كبيراً في تكرار وشدة الصداع بعد 6-8 أسابيع من الترويض الطبي المنتظم.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'back-pain', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'آلام الظهر والرقبة', icon: <Brain size={20} /> },
    { slug: 'posture-ergonomics', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرجونوميا', icon: <Brain size={20} /> },
    { slug: 'stress-relief', titleFr: 'Gestion du Stress', titleAr: 'إدارة الإجهاد', icon: <Brain size={20} /> },
  ]
});

export default article6;
