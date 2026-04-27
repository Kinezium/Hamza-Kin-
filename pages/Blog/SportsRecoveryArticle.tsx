import { createArticle } from './ArticleTemplate';
import { Dumbbell } from 'lucide-react';

const article10 = createArticle({
  slug: 'recuperation-sportive-prevention-blessures',
  titleFr: 'Récupération Sportive & Prévention des Blessures',
  titleAr: 'الاستشفاء الرياضي والوقاية من الإصابات',
  descriptionFr: 'Comment mieux récupérer après l’effort et éviter les blessures grâce à des habitudes simples.',
  descriptionAr: 'كيف تحسن الاستشفاء بعد التمرين وتقي نفسك من الإصابات بعادات بسيطة.',
  keywordsFr: 'récupération sport, prévention blessure, entraînement, athlète, kiné sport',
  keywordsAr: 'استشفاء رياضي, الوقاية من الإصابات, تدريب, رياضي',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Pourquoi la récupération est essentielle ?</h2>
        <p>L’entraînement crée une fatigue normale. La récupération permet au corps de se réparer, de progresser et de réduire le risque de blessure.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Les 3 piliers</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Sommeil de qualité.</li>
          <li>Hydratation et alimentation adaptées.</li>
          <li>Récupération active (marche, mobilité, étirements).</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Prévention des blessures</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Échauffement progressif avant l’effort.</li>
          <li>Augmentation graduelle de la charge.</li>
          <li>Technique correcte des mouvements.</li>
          <li>Jours de repos planifiés.</li>
        </ol>
      </section>
      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Conseil d’expert</h3>
        <p>La performance durable dépend autant de la récupération que de l’entraînement.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">لماذا الاستشفاء مهم؟</h2>
        <p>التمرين يسبب تعباً طبيعياً. الاستشفاء يساعد الجسم على الإصلاح والتطور ويقلل خطر الإصابة.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">الركائز الثلاث</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>نوم جيد ومنتظم.</li>
          <li>ماء وتغذية مناسبة.</li>
          <li>استشفاء نشط مثل المشي والتمدد.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">الوقاية من الإصابات</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>إحماء تدريجي قبل التمرين.</li>
          <li>زيادة الشدة بشكل تدريجي.</li>
          <li>تنفيذ التمارين بتقنية صحيحة.</li>
          <li>تنظيم أيام راحة كافية.</li>
        </ol>
      </section>
      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">نصيحة خبير</h3>
        <p>الأداء المستدام يحتاج استشفاء جيد بقدر ما يحتاج تدريب جيد.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'traumatologie-sport', titleFr: 'Traumatologie du Sport', titleAr: 'الإصابات الرياضية', icon: <Dumbbell size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرغونوميا', icon: <Dumbbell size={20} /> },
    { slug: 'arthrose-genou', titleFr: 'Arthrose du Genou', titleAr: 'خشونة الركبة', icon: <Dumbbell size={20} /> },
  ]
});

export default article10;
