import { createArticle } from './ArticleTemplate';
import { Dumbbell } from 'lucide-react';

const article10 = createArticle({
  slug: 'sports-recovery',
  titleFr: 'Récupération Sportive & Prévention des Blessures',
  titleAr: 'استرجاع رياضي ومنع الإصابات',
  descriptionFr: 'Optimiser la récupération après l\'entraînement. Prévention des blessures. Conseils pour les athlètes.',
  descriptionAr: 'تحسين الاستشفاء بعد التدريب. منع الإصابات. نصائح للرياضيين.',
  keywordsFr: 'récupération sport, prévention blessure, entraînement, athlète, kiné sport',
  keywordsAr: 'استرجاع رياضي، منع إصابة، تدريب، رياضي',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">La Récupération Sportive</h2>
        <p>La récupération est aussi importante que l'entraînement lui-même. Elle permet aux muscles de se réparer, améliore les performances et prévient les blessures.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Les 3 Piliers de la Récupération</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">1. Sommeil (60%)</h3>
            <p>7-9 heures par nuit. C'est pendant le sommeil que se produit la majorité de la récupération et de la synthèse protéique.</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">2. Nutrition (30%)</h3>
            <p>Protéines pour la réparation musculaire, glucides pour l'énergie, vitamines et minéraux pour la récupération.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">3. Récupération Active (10%)</h3>
            <p>Étirements, massage, mobilité. Accélère l'évacuation des déchets métaboliques.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Techniques de Récupération</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Étirements</strong> (10-15 min après effort)</li>
          <li><strong>Massage sportif</strong> (24-48h après)</li>
          <li><strong>Automassage</strong> (rouleau de mousse)</li>
          <li><strong>Cryothérapie</strong> (glaçage)</li>
          <li><strong>Électrothérapie</strong> (récupération musculaire)</li>
          <li><strong>Compression</strong> (vêtements de compression)</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Plan d'Échauffement Optimal</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Cardio Léger:</strong> 5-10 min (augmente la température)</li>
          <li><strong>Mobilité Dynamique:</strong> 5-10 min (prépare les articulations)</li>
          <li><strong>Activation Neuromusculaire:</strong> 5 min (réveille les muscles)</li>
          <li><strong>Sport-Spécifique:</strong> 5 min (préparation à l'effort)</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Prévention des Blessures</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Échauffement complèt avant tout effort</li>
          <li>Augmentation progressive de l'intensité</li>
          <li>Renforcement des zones faibles</li>
          <li>Récupération adéquate entre les séances</li>
          <li>Technique correcte avant la performance</li>
          <li>Équipement adapté et en bon état</li>
          <li>Écoute de votre corps</li>
        </ul>
      </section>
      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">🏆 Conseil d'Expert</h3>
        <p>Les athlètes professionnels passent autant de temps en récupération qu'en entraînement. C'est l'secret de la performance durable.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">الاستشفاء الرياضي</h2>
        <p>الاستشفاء مهم مثل التدريب نفسه. فهو يسمح للعضلات بالإصلاح، يحسن الأداء ويمنع الإصابات.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">أركان الاستشفاء الثلاثة</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">1. النوم (60%)</h3>
            <p>7-9 ساعات في الليل. معظم الاستشفاء وإصلاح العضلات يحدث أثناء النوم.</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">2. التغذية (30%)</h3>
            <p>بروتينات لإصلاح العضلات، كربوهيدرات للطاقة، فيتامينات ومعادن للاستشفاء.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">3. الاستشفاء النشط (10%)</h3>
            <p>تمديدات، تدليك، حركة. يسرع إزالة الفضلات الأيضية.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">تقنيات الاستشفاء</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>تمديدات</strong> (10-15 دقيقة بعد المجهود)</li>
          <li><strong>تدليك رياضي</strong> (24-48 ساعة بعد)</li>
          <li><strong>تدليك ذاتي</strong> (أسطوانة الرغوة)</li>
          <li><strong>العلاج بالبرودة</strong> (ثلج)</li>
          <li><strong>العلاج الكهربائي</strong> (استشفاء عضلي)</li>
          <li><strong>الضغط</strong> (ملابس ضاغطة)</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">خطة الإحماء المثلى</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>كارديو خفيف:</strong> 5-10 دقائق (زيادة درجة الحرارة)</li>
          <li><strong>حركة ديناميكية:</strong> 5-10 دقائق (تحضير المفاصل)</li>
          <li><strong>تنشيط عصبي عضلي:</strong> 5 دقائق (إيقاظ العضلات)</li>
          <li><strong>رياضة محددة:</strong> 5 دقائق (التحضير للمجهود)</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">منع الإصابات</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>إحماء شامل قبل كل مجهود</li>
          <li>زيادة تدريجية للشدة</li>
          <li>تقوية المناطق الضعيفة</li>
          <li>استشفاء كافٍ بين الجلسات</li>
          <li>تقنية صحيحة قبل الأداء</li>
          <li>معدات مناسبة وبحالة جيدة</li>
          <li>الاستماع لجسدك</li>
        </ul>
      </section>
      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">🏆 نصيحة الخبير</h3>
        <p>الرياضيون المحترفون يقضون وقتاً في الاستشفاء مثل التدريب. هذا هو سر الأداء المستدام.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'sports-injuries', titleFr: 'Traumatologie du Sport', titleAr: 'الإصابات الرياضية', icon: <Dumbbell size={20} /> },
    { slug: 'posture-ergonomics', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرجونوميا', icon: <Dumbbell size={20} /> },
    { slug: 'knee-osteoarthritis', titleFr: 'Arthrose du Genou', titleAr: 'خشونة الركبة', icon: <Dumbbell size={20} /> },
  ]
});

export default article10;
