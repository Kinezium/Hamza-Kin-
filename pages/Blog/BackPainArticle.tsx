import { createArticle } from './ArticleTemplate';
import { ArrowUpDown } from 'lucide-react';

const article2 = createArticle({
  slug: 'back-pain',
  titleFr: 'Lombalgie & Cervicalgie: Solutions Efficaces',
  titleAr: 'آلام الظهر والرقبة: حلول فعالة',
  descriptionFr: 'Guide complet sur les lombalgies et cervicalgies. Découvrez nos techniques de traitement à Casablanca pour soulager votre dos et votre cou.',
  descriptionAr: 'دليل شامل عن آلام الظهر والرقبة. اكتشف تقنيات العلاج لدينا في الدار البيضاء لتخفيف آلام الظهر والرقبة.',
  keywordsFr: 'lombalgie, cervicalgie, mal de dos, kiné casablanca, traitement dos',
  keywordsAr: 'آلام أسفل الظهر, ألم الرقبة, علاج الظهر, مروض طبي',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Lombalgie: Le Mal Moderne</h2>
        <p>La lombologie représente 80% des douleurs de dos à Casablanca. Elle est souvent causée par le stress, la sédentarité et le travail devant l'écran. La cervicalgie affecte également une grande partie de la population active.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Causes Principales</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mauvaise posture au travail</li>
          <li>Manque d'activité physique régulière</li>
          <li>Stress et tension musculaire</li>
          <li>Arthrose et dégénérescence discale</li>
          <li>Contractures musculaires chroniques</li>
          <li>Accélération brusque (coup du lapin)</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Symptômes à Reconnaître</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Raideur matinale du dos ou du cou</li>
          <li>Blocage brutal (lumbago)</li>
          <li>Douleur irradiant vers les épaules</li>
          <li>Contractures musculaires visibles</li>
          <li>Douleur accentuée par le stress</li>
          <li>Limitation de la mobilité</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Notre Approche Thérapeutique</h2>
        <p>À Centre Chnider, nous proposons une approche holistique :</p>
        <ol className="list-decimal pl-6 space-y-2 mt-3">
          <li><strong>Évaluation Complète:</strong> Diagnostic précis de la cause</li>
          <li><strong>Thérapie Manuelle:</strong> Massage thérapeutique et mobilisation</li>
          <li><strong>Correction Posturale:</strong> Amélioration de l'ergonomie</li>
          <li><strong>Renforcement Musculaire:</strong> Stabilisation du core</li>
          <li><strong>Dehyatothérapie:</strong> Relaxation musculaire</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Exercices à Domicile</h2>
        <p>Pour accélérer la récupération :</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Exercices de gainage 10 min/jour</li>
          <li>Pauses actives toutes les heures</li>
          <li>Étirements cervicaux et lombaires</li>
          <li>Marche quotidienne 30 minutes</li>
          <li>Yoga ou pilates 2-3 fois/semaine</li>
        </ul>
      </section>
      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">✅ Prévention</h3>
        <p>Ajustez votre poste de travail, prenez des pauses régulières et pratiquez une activité physique modérée. Une posture correcte peut prévenir 70% des lombalgies.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">الآلام أسفل الظهر: المرض الحديث</h2>
        <p>تمثل آلام أسفل الظهر 80% من حالات ألم الظهر بالدار البيضاء. غالباً ما تكون ناجمة عن الإجهاد والخمول وقضاء الوقت أمام الشاشة. يؤثر ألم الرقبة أيضاً على جزء كبير من السكان النشطين.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">الأسباب الرئيسية</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>الوضعية الخاطئة في العمل</li>
          <li>عدم ممارسة النشاط البدني بانتظام</li>
          <li>الإجهاد والتوتر العضلي</li>
          <li>خشونة المفاصل</li>
          <li>التشنجات العضلية المزمنة</li>
          <li>الإصابات والحوادث</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">الأعراض التي يجب التعرف عليها</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>تيبس صباحي في الظهر أو الرقبة</li>
          <li>انسداد مفاجئ (لومباغو)</li>
          <li>ألم يمتد نحو الكتفين</li>
          <li>تشنجات عضلية واضحة</li>
          <li>ألم يتفاقم بالتوتر</li>
          <li>تحديد الحركة</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">نهجنا العلاجي</h2>
        <p>في مركز اشنيدر، نقدم نهجاً شاملاً:</p>
        <ol className="list-decimal pl-6 space-y-2 mt-3">
          <li><strong>التقييم الكامل:</strong> تشخيص دقيق للسبب</li>
          <li><strong>العلاج اليدوي:</strong> تدليك علاجي وتحريك</li>
          <li><strong>تصحيح الوضعية:</strong> تحسين الإرجونوميا</li>
          <li><strong>تقوية العضلات:</strong> تثبيت الجذع</li>
          <li><strong>الاسترخاء:</strong> تخفيف التوتر العضلي</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">تمارين منزلية</h2>
        <p>لتسريع التعافي:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>تمارين تقوية الجذع 10 دقائق/يوم</li>
          <li>استراحات نشطة كل ساعة</li>
          <li>تمديدات للرقبة والظهر</li>
          <li>المشي اليومي 30 دقيقة</li>
          <li>اليوغا أو بيلاتيس 2-3 مرات/أسبوع</li>
        </ul>
      </section>
      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">✅ الوقاية</h3>
        <p>اضبط مكان عملك، خذ فترات راحة منتظمة وجرب نشاطاً بدنياً معتدلاً. الوضعية الصحيحة يمكن أن تمنع 70% من آلام الظهر.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'sciatica-herniated-disc', titleFr: 'Sciatique & Hernie Discale', titleAr: 'عرق النسا والانزلاق الغضروفي', icon: <ArrowUpDown size={20} /> },
    { slug: 'shoulder-pain', titleFr: 'Douleurs aux Épaules', titleAr: 'ألم الكتفين', icon: <ArrowUpDown size={20} /> },
    { slug: 'posture-ergonomics', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرجونوميا', icon: <ArrowUpDown size={20} /> },
  ]
});

export default article2;
