import { createArticle } from './ArticleTemplate';
import { Stethoscope } from 'lucide-react';

const article5 = createArticle({
  slug: 'shoulder-pain',
  titleFr: 'Douleurs aux Épaules & Capsulite: Solutions',
  titleAr: 'ألم الكتفين والتهاب الكيس: الحلول',
  descriptionFr: 'Traitement de la capsulite rétractile et des douleurs d\'épaule. Exercices et thérapies pour retrouver la mobilité.',
  descriptionAr: 'علاج تجمد الكتف وألم الأكتاف. تمارين وعلاجات لاستعادة الحركة.',
  keywordsFr: 'douleur épaule, capsulite, épaule gelée, kiné épaule, traitement épaule',
  keywordsAr: 'ألم الكتف, تجمد الكتف, خلع الكتف, علاج الكتف',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Douleurs d'Épaule: Une Condition Fréquente</h2>
        <p>Les douleurs d'épaule affectent 40% de la population à un moment de leur vie. La capsulite rétractile (épaule gelée) est l'une des causes les plus fréquentes et peut être extrêmement invalidante.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Types de Douleurs d'Épaule</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Tendinite de la Coiffe:</strong> Inflammation des tendons</li>
          <li><strong>Capsulite Rétractile:</strong> Raidissement de la capsule articulaire</li>
          <li><strong>Conflit Sous-acromial:</strong> Compression des tendons</li>
          <li><strong>Luxation d'Épaule:</strong> Sortie du bras de son articulation</li>
          <li><strong>Arthrose Acromioclaviculaire:</strong> Usure du cartilage</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Phases de la Capsulite Rétractile</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-bold">Phase 1: Inflammatoire (2-3 mois)</h3>
            <p>Douleur sans limitation majeure de la mobilité.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-bold">Phase 2: Raidissement (2-4 mois)</h3>
            <p>Perte progressive de mobilité avec douleur.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold">Phase 3: Résolution (6-12 mois)</h3>
            <p>Amélioration progressive de la mobilité.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Approche Thérapeutique</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Phase 1:</strong> Repos, glace, étirements doux</li>
          <li><strong>Phase 2:</strong> Mobilisation progressive, renforcement</li>
          <li><strong>Phase 3:</strong> Exercices complets de mobilité</li>
          <li><strong>Toute la durée:</strong> Électrothérapie antalgique</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Exercices à Domicile</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pendulum exercises (bras détendu)</li>
          <li>Étirements du pendulum (boîte serviette)</li>
          <li>Rotations interne/externe à coude plié</li>
          <li>Élévation du bras (progression douce)</li>
          <li>Renforcement de la coiffe (bande élastique)</li>
        </ul>
      </section>
      <section className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">⚡ Important</h3>
        <p>La capsulite peut durer 12-18 mois sans traitement. Avec la kinésithérapie régulière, vous pouvez réduire ce temps de moitié.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">ألم الأكتاف: حالة شائعة</h2>
        <p>يؤثر ألم الكتف على 40% من السكان في وقت ما من حياتهم. تجمد الكتف هو أحد الأسباب الأكثر شيوعاً ويمكن أن يكون مشلاً جداً.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">أنواع آلام الأكتاف</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>التهاب أوتار الكفة:</strong> التهاب الأوتار</li>
          <li><strong>تجمد الكتف:</strong> تيبس كيس المفصل</li>
          <li><strong>الصدام تحت الأخرمي:</strong> ضغط الأوتار</li>
          <li><strong>خلع الكتف:</strong> خروج العضد من مفصله</li>
          <li><strong>خشونة المفصل الترقوي:</strong> تآكل الغضروف</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">مراحل تجمد الكتف</h2>
        <div className="space-y-3">
          <div className="border-r-4 border-red-500 pr-4">
            <h3 className="font-bold">المرحلة 1: الالتهاب (2-3 أشهر)</h3>
            <p>ألم بدون تحديد كبير للحركة.</p>
          </div>
          <div className="border-r-4 border-orange-500 pr-4">
            <h3 className="font-bold">المرحلة 2: التيبس (2-4 أشهر)</h3>
            <p>فقدان تدريجي للحركة مع ألم.</p>
          </div>
          <div className="border-r-4 border-blue-500 pr-4">
            <h3 className="font-bold">المرحلة 3: التحسن (6-12 شهر)</h3>
            <p>تحسن تدريجي في الحركة.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">النهج العلاجي</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>المرحلة 1:</strong> راحة، ثلج، تمديدات لطيفة</li>
          <li><strong>المرحلة 2:</strong> حركة تدريجية، تقوية</li>
          <li><strong>المرحلة 3:</strong> تمارين حركة كاملة</li>
          <li><strong>طوال الفترة:</strong> علاج كهربائي مسكن</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">تمارين منزلية</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>تمارين البندول (ذراع مرتخية)</li>
          <li>تمديدات البندول (مع المنشفة)</li>
          <li>دوران داخلي/خارجي والكوع مثني</li>
          <li>رفع الذراع (تطور لطيف)</li>
          <li>تقوية الكفة (شريط مرن)</li>
        </ul>
      </section>
      <section className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">⚡ مهم</h3>
        <p>يمكن أن يستمر تجمد الكتف 12-18 شهراً بدون علاج. مع الترويض الطبي، يمكنك تقليل هذا الوقت بمقدار النصف.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'sports-injuries', titleFr: 'Traumatologie du Sport', titleAr: 'الإصابات الرياضية', icon: <Stethoscope size={20} /> },
    { slug: 'posture-ergonomics', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرجونوميا', icon: <Stethoscope size={20} /> },
    { slug: 'back-pain', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'آلام الظهر والرقبة', icon: <Stethoscope size={20} /> },
  ]
});

export default article5;
