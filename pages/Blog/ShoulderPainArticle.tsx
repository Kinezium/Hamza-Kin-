import { createArticle } from './ArticleTemplate';
import { Stethoscope } from 'lucide-react';

const article5 = createArticle({
  slug: 'douleurs-epaules-capsulite',
  titleFr: 'Douleurs aux Épaules & Capsulite: Solutions',
  titleAr: 'آلام الكتف والتهاب المحفظة: حلول فعّالة',
  descriptionFr: 'Comprendre les douleurs de l’épaule et la capsulite, avec des solutions progressives de kinésithérapie.',
  descriptionAr: 'فهم آلام الكتف والتهاب المحفظة مع حلول تدريجية بالترويض الطبي.',
  keywordsFr: 'douleur épaule, capsulite, épaule gelée, kiné épaule, traitement épaule',
  keywordsAr: 'آلام الكتف, تجمد الكتف, التهاب المحفظة, علاج الكتف',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Pourquoi l’épaule fait mal ?</h2>
        <p>L’épaule est une articulation très mobile. Elle se fatigue vite avec les gestes répétés, le port de charge ou une immobilisation prolongée.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Signes fréquents</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Douleur en levant le bras.</li>
          <li>Raideur le matin ou la nuit.</li>
          <li>Perte progressive de mobilité.</li>
          <li>Difficulté à s’habiller ou coiffer les cheveux.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Prise en charge kiné</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Mobilisation douce selon la phase.</li>
          <li>Exercices actifs progressifs.</li>
          <li>Renforcement de la coiffe des rotateurs.</li>
          <li>Programme maison personnalisé.</li>
        </ol>
      </section>
      <section className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Important</h3>
        <p>La récupération est progressive. La régularité des exercices est la clé pour retrouver une bonne mobilité.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">لماذا يحدث ألم الكتف؟</h2>
        <p>الكتف مفصل كثير الحركة، لذلك يتأثر بسرعة بالحركات المتكررة أو الحمل الزائد أو قلة الحركة.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">الأعراض الشائعة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ألم عند رفع الذراع.</li>
          <li>تيبس صباحاً أو ليلاً.</li>
          <li>نقص تدريجي في الحركة.</li>
          <li>صعوبة في اللباس أو تمشيط الشعر.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">العلاج بالترويض الطبي</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>تحريك لطيف حسب المرحلة.</li>
          <li>تمارين نشطة تدريجية.</li>
          <li>تقوية عضلات الكتف الداعمة.</li>
          <li>برنامج منزلي مناسب للحالة.</li>
        </ol>
      </section>
      <section className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">مهم</h3>
        <p>التحسن يكون تدريجياً. الالتزام بالتمارين بانتظام هو المفتاح لاستعادة حركة الكتف.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'traumatologie-sport', titleFr: 'Traumatologie du Sport', titleAr: 'الإصابات الرياضية', icon: <Stethoscope size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرغونوميا', icon: <Stethoscope size={20} /> },
    { slug: 'lombalgie-cervicalgie', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'آلام الظهر والرقبة', icon: <Stethoscope size={20} /> },
  ]
});

export default article5;
