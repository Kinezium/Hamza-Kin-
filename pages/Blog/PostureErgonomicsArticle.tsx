import { createArticle } from './ArticleTemplate';
import { Stethoscope } from 'lucide-react';

const article9 = createArticle({
  slug: 'posture-ergonomics',
  titleFr: 'Posture & Ergonomie: Prévention des Douleurs',
  titleAr: 'الوضعية والإرجونوميا: منع الآلام',
  descriptionFr: 'Importance de la posture. Ergonomie de travail. Exercices de correction posturale.',
  descriptionAr: 'أهمية الوضعية. إرجونوميا العمل. تمارين تصحيح الوضعية.',
  keywordsFr: 'posture, ergonomie, mal de dos, prévention, travail bureau',
  keywordsAr: 'وضعية, إرجونوميا, ألم الظهر, وقاية, عمل',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '5 min de lecture',
  readTimeAr: '5 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">L'Importance de la Posture</h2>
        <p>Une bonne posture n'est pas qu'une question d'apparence. Elle prévient 70% des douleurs musculosquelettiques et améliore votre santé globale.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Conséquences d'une Mauvaise Posture</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Douleurs lombaires chroniques</li>
          <li>Tensions cervicales et céphalées</li>
          <li>Muscles faibles (core, dos)</li>
          <li>Compressions nerveuses</li>
          <li>Diminution de la mobilité</li>
          <li>Problèmes digestifs</li>
          <li>Réduction de la confiance en soi</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ergonomie de Bureau</h2>
        <div className="space-y-4 mt-4">
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold">Chaise</h3>
            <p>Hauteur ajustable, soutien lombaire, repose-pieds</p>
          </div>
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold">Bureau</h3>
            <p>Hauteur au niveau des coudes, distance à écran 50-70cm</p>
          </div>
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold">Écran</h3>
            <p>Légèrement sous la hauteur des yeux, incliné à 20 degrés</p>
          </div>
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold">Clavier/Souris</h3>
            <p>À la hauteur des coudes, souris proche du corps</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Exercices Posturaux Quotidiens</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Étirements du psoas:</strong> 30 sec x 3 fois</li>
          <li><strong>Gainage ventral:</strong> 30 sec x 3 fois</li>
          <li><strong>Rétraction du menton:</strong> 15 rép x 3 séries</li>
          <li><strong>Scapular squeeze:</strong> 15 rép x 3 séries</li>
          <li><strong>Back extension:</strong> 15 rép x 3 séries</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Habitudes Saines</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pause active toutes les heures</li>
          <li>Marche de 5 minutes entre les réunions</li>
          <li>Étirements au travail</li>
          <li>Sports ou yoga 2-3 fois/semaine</li>
          <li>Dormir 7-8 heures par nuit</li>
        </ul>
      </section>
      <section className="bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">⚠️ Prévention</h3>
        <p>Il est beaucoup plus facile de prévenir les problèmes posturaux que de les traiter. Commencez dès maintenant!</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">أهمية الوضعية</h2>
        <p>الوضعية الجيدة ليست عن الظهور فقط. تمنع 70% من آلام العضلات والعظام وتحسن صحتك العامة.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">عواقب الوضعية السيئة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>آلام أسفل الظهر المزمنة</li>
          <li>اجهادات عنقية وصداع</li>
          <li>ضعف العضلات (جذع، ظهر)</li>
          <li>ضغط الأعصاب</li>
          <li>انخفاض الحركة</li>
          <li>مشاكل الجهاز الهضمي</li>
          <li>انخفاض الثقة بالنفس</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">إرجونوميا المكتب</h2>
        <div className="space-y-4 mt-4">
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold">الكرسي</h3>
            <p>قابل للتعديل، دعم قطني، حامل قدم</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold">المكتب</h3>
            <p>ارتفاع مستوى المرفقين، مسافة الشاشة 50-70 سم</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold">الشاشة</h3>
            <p>أقل قليلاً من مستوى العين، مائلة 20 درجة</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold">لوحة المفاتيح/الماوس</h3>
            <p>على مستوى المرفقين، الماوس قريب من الجسم</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">تمارين وضعية يومية</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>تمديدات الكمثرية:</strong> 30 ثانية × 3 مرات</li>
          <li><strong>تقوية البطن:</strong> 30 ثانية × 3 مرات</li>
          <li><strong>سحب الذقن للخلف:</strong> 15 تكرار × 3 مجموعات</li>
          <li><strong>ضغط الأكتاف:</strong> 15 تكرار × 3 مجموعات</li>
          <li><strong>تمديد الظهر:</strong> 15 تكرار × 3 مجموعات</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">عادات صحية</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>فترة نشطة كل ساعة</li>
          <li>مشي 5 دقائق بين الاجتماعات</li>
          <li>تمديدات في العمل</li>
          <li>رياضة أو يوغا 2-3 مرات/أسبوع</li>
          <li>نم 7-8 ساعات في الليل</li>
        </ul>
      </section>
      <section className="bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">⚠️ وقاية</h3>
        <p>من الأسهل بكثير منع مشاكل الوضعية من معالجتها. ابدأ الآن!</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'back-pain', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'آلام الظهر والرقبة', icon: <Stethoscope size={20} /> },
    { slug: 'migraines-headaches', titleFr: 'Migraines & Céphalées', titleAr: 'الصداع والشقيقة', icon: <Stethoscope size={20} /> },
    { slug: 'sports-recovery', titleFr: 'Récupération Sportive', titleAr: 'استرجاع رياضي', icon: <Stethoscope size={20} /> },
  ]
});

export default article9;
