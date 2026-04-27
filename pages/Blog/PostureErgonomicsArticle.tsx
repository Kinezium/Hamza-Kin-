import { createArticle } from './ArticleTemplate';
import { Stethoscope } from 'lucide-react';

const article9 = createArticle({
  slug: 'posture-ergonomie',
  titleFr: 'Posture & Ergonomie: Prévention des Douleurs',
  titleAr: 'الوضعية والإرغونوميا: الوقاية من الآلام',
  descriptionFr: 'Conseils simples de posture et d’ergonomie pour prévenir les douleurs du dos, du cou et des épaules.',
  descriptionAr: 'نصائح بسيطة في الوضعية والإرغونوميا للوقاية من آلام الظهر والرقبة والكتف.',
  keywordsFr: 'posture, ergonomie, mal de dos, prévention, travail bureau',
  keywordsAr: 'وضعية, إرغونوميا, ألم الظهر, وقاية, عمل مكتبي',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '5 min de lecture',
  readTimeAr: '5 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Pourquoi la posture compte ?</h2>
        <p>Une mauvaise posture répétée fatigue les muscles et surcharge les articulations. Avec de bons réglages, on réduit nettement les douleurs.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Réglages du poste de travail</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Écran à hauteur des yeux.</li>
          <li>Dos bien soutenu par la chaise.</li>
          <li>Pieds posés au sol.</li>
          <li>Clavier proche, coudes relâchés.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Habitudes utiles au quotidien</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pause active toutes les 60 minutes.</li>
          <li>Étirements du cou et du dos.</li>
          <li>Marche courte entre les réunions.</li>
          <li>Respiration calme en cas de tension.</li>
        </ul>
      </section>
      <section className="bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Prévention</h3>
        <p>De petits ajustements réguliers évitent les douleurs chroniques et améliorent le confort au travail.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">لماذا الوضعية مهمة؟</h2>
        <p>الوضعية الخاطئة المتكررة تتعب العضلات وتضغط على المفاصل. مع تعديلات بسيطة يمكن تقليل الألم بشكل واضح.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">ضبط مكان العمل</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>الشاشة في مستوى العين.</li>
          <li>دعم جيد للظهر على الكرسي.</li>
          <li>القدمان ثابتتان على الأرض.</li>
          <li>لوحة المفاتيح قريبة والكتف مرتاح.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">عادات يومية مفيدة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>استراحة حركة كل ساعة.</li>
          <li>تمددات للرقبة والظهر.</li>
          <li>مشي قصير بين فترات العمل.</li>
          <li>تنفس هادئ عند التوتر.</li>
        </ul>
      </section>
      <section className="bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">الوقاية</h3>
        <p>تغييرات صغيرة ولكن منتظمة تساعد على منع الألم المزمن وتحسين الراحة اليومية.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'lombalgie-cervicalgie', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'آلام الظهر والرقبة', icon: <Stethoscope size={20} /> },
    { slug: 'migraines-cephalees', titleFr: 'Migraines & Céphalées', titleAr: 'الصداع والشقيقة', icon: <Stethoscope size={20} /> },
    { slug: 'recuperation-sportive-prevention-blessures', titleFr: 'Récupération Sportive', titleAr: 'الاستشفاء الرياضي', icon: <Stethoscope size={20} /> },
  ]
});

export default article9;
