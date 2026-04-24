import { createArticle } from './ArticleTemplate';
import { Baby } from 'lucide-react';

const article7 = createArticle({
  slug: 'kine-pediatrique',
  titleFr: 'Physiothérapie Pédiatrique: Développement Normal',
  titleAr: 'الترويض الطبي للأطفال: النمو الطبيعي',
  descriptionFr: 'Quand consulter en kinésithérapie pédiatrique et comment accompagner le développement moteur de l’enfant.',
  descriptionAr: 'متى يجب استشارة الترويض الطبي للأطفال وكيفية دعم النمو الحركي للطفل.',
  keywordsFr: 'kiné enfant, retard développement, bébé, motricité fine, motricité globale',
  keywordsAr: 'ترويض أطفال, تأخر النمو, طفل, مهارات حركية',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Rôle de la kiné pédiatrique</h2>
        <p>La kiné pédiatrique accompagne le développement moteur de l’enfant: tenir la tête, s’asseoir, marcher et mieux coordonner ses mouvements.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Quand consulter ?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Retard dans les étapes motrices.</li>
          <li>Asymétrie de posture.</li>
          <li>Raideur ou relâchement musculaire marqué.</li>
          <li>Difficultés d’équilibre et de coordination.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Approche thérapeutique</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Exercices adaptés à l’âge.</li>
          <li>Jeux thérapeutiques motivants.</li>
          <li>Travail progressif de la mobilité.</li>
          <li>Conseils pratiques aux parents.</li>
        </ol>
      </section>
      <section className="bg-pink-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Conseil important</h3>
        <p>Un accompagnement précoce améliore fortement les résultats. Plus on commence tôt, plus l’enfant progresse facilement.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">دور الترويض الطبي للأطفال</h2>
        <p>يساعد الترويض الطبي الطفل على تحسين النمو الحركي: التحكم بالرأس، الجلوس، المشي، والتوازن.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">متى يجب الاستشارة؟</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>تأخر في مراحل النمو الحركي.</li>
          <li>عدم توازن أو عدم تماثل في الوضعية.</li>
          <li>شد عضلي أو ارتخاء واضح.</li>
          <li>صعوبة في التوازن والتنسيق.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">النهج العلاجي</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>تمارين مناسبة لعمر الطفل.</li>
          <li>ألعاب علاجية مشجعة.</li>
          <li>تحسين تدريجي للحركة.</li>
          <li>توجيهات عملية للوالدين.</li>
        </ol>
      </section>
      <section className="bg-pink-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">نصيحة مهمة</h3>
        <p>التدخل المبكر يعطي نتائج أفضل بكثير. كلما بدأنا مبكراً، كان التقدم أسرع وأسهل.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'recuperation-sportive-prevention-blessures', titleFr: 'Récupération Sportive', titleAr: 'الاستشفاء الرياضي', icon: <Baby size={20} /> },
    { slug: 'readaptation-post-avc', titleFr: 'Réadaptation Post-AVC', titleAr: 'إعادة التأهيل بعد الجلطة', icon: <Baby size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرغونوميا', icon: <Baby size={20} /> },
  ]
});

export default article7;
