import React from 'react';
import { Link } from 'react-router-dom';
import { createArticle } from './ArticleTemplate';
import { Zap, Flame, Stethoscope, Brain, Baby, Dumbbell, Bone, ArrowUpDown } from 'lucide-react';

const article1 = createArticle({
  slug: 'sciatica-herniated-disc',
  titleFr: 'La Sciatique & Hernie Discale: Guide Complet',
  titleAr: 'عرق النسا والانزلاق الغضروفي: دليل شامل',
  descriptionFr: 'Découvrez comment traiter la sciatique et la hernie discale avec la kinésithérapie. Symptômes, causes, traitements et exercices recommandés par nos experts à Casablanca.',
  descriptionAr: 'تعرف على كيفية علاج عرق النسا والانزلاق الغضروفي بالترويض الطبي. الأعراض والأسباب والعلاجات والتمارين الموصى بها من قبل خبرائنا.',
  keywordsFr: 'sciatique, hernie discale, kiné casablanca, traitement sciatique, mal de dos, douleur jambe',
  keywordsAr: 'عرق النسا, انزلاق غضروفي, مروض طبي, علاج عرق النسا, ألم الظهر, ألم الساق',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '5 min de lecture',
  readTimeAr: '5 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Qu'est-ce que la sciatique?</h2>
        <p>La sciatique est une douleur causée par l'irritation du nerf sciatique, le plus long nerf du corps humain. Elle irradie généralement du bas du dos jusqu'au pied, provoquant une douleur aiguë, des fourmillements ou une sensation de brûlure en bas de la jambe.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Symptômes Courants</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Douleur vive dans la fesse et le long de la jambe</li>
          <li>Sensation de décharge électrique</li>
          <li>Engourdissement ou fourmillements</li>
          <li>Difficulté à marcher ou à se lever</li>
          <li>Douleur accentuée en position assise prolongée</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Causes de la Sciatique</h2>
        <p>La cause la plus fréquente est une hernie discale comprimant le nerf sciatique. D'autres causes incluent :</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Arthrose et dégénérescence discale</li>
          <li>Sténose spinale (rétrécissement du canal rachidien)</li>
          <li>Syndrome du piriforme</li>
          <li>Traumatisme ou blessure</li>
          <li>Mauvaise posture prolongée</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Traitement par Kinésithérapie</h2>
        <p>Notre approche thérapeutique à Centre Chnider comprend :</p>
        <ol className="list-decimal pl-6 space-y-2 mt-3">
          <li><strong>Thérapie Manuelle:</strong> Mobilisation douce pour réduire la compression nerveuse</li>
          <li><strong>Décompression Vertébrale:</strong> Exercices spécialisés de McKenzie</li>
          <li><strong>Électrothérapie:</strong> Traitement antalgique pour réduire la douleur</li>
          <li><strong>Renforcement Musculaire:</strong> Exercices des stabilisateurs du dos</li>
          <li><strong>Correction Posturale:</strong> Conseils d'ergonomie et prévention</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Protocole de Rééducation</h2>
        <p>Un protocole typique comprend :</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Séances 2-3 fois par semaine pendant 4-6 semaines</li>
          <li>Étirements quotidiens du muscle piriforme</li>
          <li>Marche quotidienne de 30 minutes</li>
          <li>Renforcement musculaire du core</li>
          <li>Éviter les mouvements qui aggravent la douleur</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Prévention</h2>
        <p>Pour prevenir les récidives :</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Maintenir une bonne posture au travail</li>
          <li>Pratiquer une activité physique régulière</li>
          <li>Éviter de soulever des charges lourdes</li>
          <li>Faire des étirements réguliers</li>
          <li>Maintenir un poids santé</li>
        </ul>
      </section>
      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">💡 Conseil Professionnel</h3>
        <p>Si vous souffrez d'une sciatique depuis plus de 2-3 semaines sans amélioration, consultez notre équipe de kinésithérapeutes à Casablanca. Le traitement précoce prévient les complications.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">ما هو عرق النسا؟</h2>
        <p>عرق النسا هو ألم ناتج عن تهيج العصب الوركي، أطول عصب في جسم الإنسان. عادة ما يمتد الألم من أسفل الظهر إلى القدم، مسبباً ألماً حاداً أو تنميلاً أو إحساساً بالحرقة في أسفل الساق.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">الأعراض الشائعة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ألم حاد في الأرداف وطول الساق</li>
          <li>إحساس بصدمة كهربائية</li>
          <li>تنميل أو وخز</li>
          <li>صعوبة في المشي أو الوقوف</li>
          <li>ألم يزداد سوءاً عند الجلوس لفترة طويلة</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">أسباب عرق النسا</h2>
        <p>السبب الأكثر شيوعاً هو الانزلاق الغضروفي الذي يضغط على العصب الوركي. تشمل الأسباب الأخرى:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>خشونة المفاصل والتآكل الغضروفي</li>
          <li>ضيق القناة الشوكية</li>
          <li>متلازمة الكمثرية</li>
          <li>إصابة أو صدمة</li>
          <li>وضعية سيئة لفترة طويلة</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">العلاج بالترويض الطبي</h2>
        <p>يتضمن نهجنا العلاجي في مركز اشنيدر:</p>
        <ol className="list-decimal pl-6 space-y-2 mt-3">
          <li><strong>العلاج اليدوي:</strong> تحريك لطيف لتقليل ضغط الأعصاب</li>
          <li><strong>تخفيف ضغط الفقرات:</strong> تمارين ماكينزي المتخصصة</li>
          <li><strong>العلاج الكهربائي:</strong> علاج للتخفيف من الألم</li>
          <li><strong>تقوية العضلات:</strong> تمارين لمثبتات الظهر</li>
          <li><strong>تصحيح الوضعية:</strong> نصائح الإرجونوميا والوقاية</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">خطة إعادة التأهيل</h2>
        <p>تتضمن الخطة النموذجية:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>جلسات 2-3 مرات أسبوعياً لمدة 4-6 أسابيع</li>
          <li>تمديدات يومية لعضلة الكمثرية</li>
          <li>المشي اليومي لمدة 30 دقيقة</li>
          <li>تقوية عضلات الجذع</li>
          <li>تجنب الحركات التي تزيد الألم</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">الوقاية</h2>
        <p>لمنع تكرار المشكلة:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>الحفاظ على وضعية سليمة في العمل</li>
          <li>ممارسة النشاط البدني بانتظام</li>
          <li>تجنب حمل الأثقال</li>
          <li>القيام بتمديدات منتظمة</li>
          <li>الحفاظ على وزن صحي</li>
        </ul>
      </section>
      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">💡 نصيحة احترافية</h3>
        <p>إذا كنت تعاني من عرق النسا لأكثر من 2-3 أسابيع دون تحسن، استشر فريقنا من المعالجين الفيزيائيين بالدار البيضاء. العلاج المبكر يمنع المضاعفات.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'back-pain', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'آلام الظهر والرقبة', icon: <ArrowUpDown size={20} /> },
    { slug: 'posture-ergonomics', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرجونوميا', icon: <Stethoscope size={20} /> },
    { slug: 'sports-injuries', titleFr: 'Traumatologie du Sport', titleAr: 'الإصابات الرياضية', icon: <Dumbbell size={20} /> },
  ]
});

export default article1;
