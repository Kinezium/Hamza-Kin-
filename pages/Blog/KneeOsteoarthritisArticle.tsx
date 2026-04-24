import { createArticle } from './ArticleTemplate';
import { Bone } from 'lucide-react';

const article4 = createArticle({
  slug: 'arthrose-genou',
  titleFr: 'Arthrose du Genou: Vie Sans Douleur',
  titleAr: 'خشونة الركبة: حياة بدون ألم',
  descriptionFr: 'Comprendre l’arthrose du genou et apprendre des exercices simples pour moins de douleur.',
  descriptionAr: 'فهم خشونة الركبة مع تمارين بسيطة لتخفيف الألم وتحسين الحركة.',
  keywordsFr: 'arthrose genou, gonarthrose, kiné genou, traitement arthrose',
  keywordsAr: 'خشونة الركبة, التهاب المفصل, علاج الركبة',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Qu’est-ce que l’arthrose du genou ?</h2>
        <p>L’arthrose est une usure progressive du cartilage. Elle provoque douleur, raideur et gêne à la marche.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Symptômes fréquents</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Douleur en marchant ou dans les escaliers.</li>
          <li>Raideur après le repos.</li>
          <li>Gonflement léger du genou.</li>
          <li>Sensation d’instabilité.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Traitement kiné</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Mobilisation douce de l’articulation.</li>
          <li>Renforcement des cuisses et des fessiers.</li>
          <li>Travail d’équilibre et de stabilité.</li>
          <li>Programme d’exercices à domicile.</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Habitudes utiles</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Marcher un peu chaque jour.</li>
          <li>Éviter la station assise trop longue.</li>
          <li>Porter des chaussures stables.</li>
          <li>Contrôler le poids pour soulager le genou.</li>
        </ul>
      </section>
      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Conseil</h3>
        <p>La régularité est plus importante que l’intensité. Quelques exercices bien faits chaque jour donnent de vrais résultats.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">ما هي خشونة الركبة؟</h2>
        <p>خشونة الركبة هي تآكل تدريجي في الغضروف، وتسبب ألماً وتيبساً وصعوبة في المشي.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">الأعراض الشائعة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ألم عند المشي أو صعود الدرج.</li>
          <li>تيبس بعد الراحة.</li>
          <li>انتفاخ خفيف في الركبة.</li>
          <li>إحساس بعدم الثبات.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">العلاج بالترويض الطبي</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>تحريك لطيف للمفصل.</li>
          <li>تقوية عضلات الفخذ والورك.</li>
          <li>تمارين توازن واستقرار.</li>
          <li>برنامج منزلي بسيط ومنتظم.</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">عادات مفيدة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>المشي يومياً ولو لفترة قصيرة.</li>
          <li>تجنب الجلوس الطويل.</li>
          <li>ارتداء حذاء مريح وثابت.</li>
          <li>الحفاظ على وزن مناسب لتخفيف الضغط.</li>
        </ul>
      </section>
      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">نصيحة</h3>
        <p>الاستمرار أهم من الشدة. تمارين بسيطة يومياً تعطي نتائج ممتازة مع الوقت.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'traumatologie-sport', titleFr: 'Traumatologie du Sport', titleAr: 'الإصابات الرياضية', icon: <Bone size={20} /> },
    { slug: 'lombalgie-cervicalgie', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'آلام الظهر والرقبة', icon: <Bone size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرغونوميا', icon: <Bone size={20} /> },
  ]
});

export default article4;
