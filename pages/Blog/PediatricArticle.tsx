import { createArticle } from './ArticleTemplate';
import { Baby } from 'lucide-react';

const article7 = createArticle({
  slug: 'pediatric-physiotherapy',
  titleFr: 'Physiothérapie Pédiatrique: Développement Normal',
  titleAr: 'الترويض الطبي للأطفال: النمو الطبيعي',
  descriptionFr: 'Développement psychomoteur de l\'enfant. Quand consulter un kiné pédiatrique. Exercices et jeux de rééducation.',
  descriptionAr: 'النمو النفسحركي للطفل. متى تستشير مروضاً متخصصاً للأطفال. تمارين وألعاب تأهيلية.',
  keywordsFr: 'kiné enfant, retard développement, bébé, motricité fine, motricité globale',
  keywordsAr: 'مروض أطفال, تأخر النمو, طفل, مهارات حركية',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Physiothérapie Pédiatrique</h2>
        <p>Le développement psychomoteur de l'enfant est crucial. Identifiez tôt les retards de développement pour une intervention précoce.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Jalons du Développement Normal</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>3 mois:</strong> Contrôle de la tête</li>
          <li><strong>6 mois:</strong> Assis sans appui</li>
          <li><strong>9 mois:</strong> Rampage ou crawling</li>
          <li><strong>12 mois:</strong> Marche avec appui</li>
          <li><strong>24 mois:</strong> Marche autonome stable</li>
          <li><strong>3 ans:</strong> Courir, sauter, grimper</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Signes d'Alerte</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Retard dans les étapes de développement</li>
          <li>Asymétrie postulaire ou du mouvement</li>
          <li>Tonacité musculaire anormale (trop raide ou trop mou)</li>
          <li>Difficulté de coordination</li>
          <li>Positionnement anormal persistant</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Conditions Traitées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Infirmité motrice cérébrale (IMC)</li>
          <li>Spina bifida et malformations</li>
          <li>Torticolis congénital</li>
          <li>Plagiocéphalie (asymétrie du crâne)</li>
          <li>Retard développement psychomotor</li>
          <li>Dysplasie de hanche</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Approche Thérapeutique</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Jeu Thérapeutique:</strong> Rendre l'exercice amusant</li>
          <li><strong>Mobilisation Douce:</strong> Améliorer la mobilité</li>
          <li><strong>Renforcement Musculaire:</strong> Via les jeux</li>
          <li><strong>Éducation Parentale:</strong> Exercices à domicile</li>
        </ol>
      </section>
      <section className="bg-pink-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">👶 Conseil Important</h3>
        <p>L'intervention précoce peut changer la trajectoire de développement. Si vous notez un retard, consultez nos pédiatres kiné.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">الترويض الطبي للأطفال</h2>
        <p>النمو النفسحركي للطفل حاسم. تحديد تأخر النمو مبكراً للتدخل المبكر.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">معالم النمو الطبيعية</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>3 أشهر:</strong> التحكم بالرأس</li>
          <li><strong>6 أشهر:</strong> الجلوس بدون دعم</li>
          <li><strong>9 أشهر:</strong> الزحف</li>
          <li><strong>12 شهراً:</strong> المشي بدعم</li>
          <li><strong>24 شهراً:</strong> مشي مستقل مستقر</li>
          <li><strong>3 سنوات:</strong> الركض والقفز والتسلق</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">علامات التحذير</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>تأخر في مراحل النمو</li>
          <li>عدم تماثل الوضعية أو الحركة</li>
          <li>توتر عضلي غير طبيعي (صلب أو مرتخي جداً)</li>
          <li>صعوبة في التنسيق</li>
          <li>وضعية غير طبيعية مستمرة</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">الحالات المعالجة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>الشلل الدماغي</li>
          <li>القيلة السحائية والتشوهات</li>
          <li>تشنج الرقبة الخلقي</li>
          <li>عدم تماثل الرأس</li>
          <li>تأخر النمو النفسحركي</li>
          <li>خلل تطور الورك</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">النهج العلاجي</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>اللعب العلاجي:</strong> جعل التمرين ممتعاً</li>
          <li><strong>تحريك لطيف:</strong> تحسين الحركة</li>
          <li><strong>تقوية عضلية:</strong> عبر الألعاب</li>
          <li><strong>تعليم الآباء:</strong> تمارين منزلية</li>
        </ol>
      </section>
      <section className="bg-pink-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">👶 نصيحة مهمة</h3>
        <p>التدخل المبكر يمكن أن يغير مسار النمو. إذا لاحظت تأخراً، استشر متخصصينا في الترويض الطبي للأطفال.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'sports-recovery', titleFr: 'Récupération Sportive', titleAr: 'استرجاع رياضي', icon: <Baby size={20} /> },
    { slug: 'post-stroke', titleFr: 'Réadaptation Post-AVC', titleAr: 'إعادة تأهيل ما بعد الجلطة', icon: <Baby size={20} /> },
    { slug: 'posture-ergonomics', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرجونوميا', icon: <Baby size={20} /> },
  ]
});

export default article7;
