import React from 'react';
import { createArticle } from './ArticleTemplate';
import { ArrowUpDown, Dumbbell, Stethoscope } from 'lucide-react';

const sciaticaArticle = createArticle({
  slug: 'sciatique-hernie-discale',
  titleFr: 'La Sciatique & Hernie Discale: Guide Complet',
  titleAr: 'عرق النسا والانزلاق الغضروفي: دليل شامل',
  descriptionFr:
    'Découvrez comment traiter la sciatique et la hernie discale avec la kinésithérapie. Symptômes, causes, traitements et exercices recommandés par nos experts à Casablanca.',
  descriptionAr:
    'تعرف على كيفية علاج عرق النسا والانزلاق الغضروفي بالترويض الطبي. الأعراض والأسباب والعلاجات والتمارين الموصى بها من قبل خبرائنا.',
  keywordsFr:
    'sciatique, hernie discale, kiné casablanca, traitement sciatique, mal de dos, douleur jambe',
  keywordsAr:
    'عرق النسا, انزلاق غضروفي, مروض طبي, علاج عرق النسا, ألم الظهر, ألم الساق',
  imageFr:
    'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr:
    'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '5 min de lecture',
  readTimeAr: '5 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Qu'est-ce que la sciatique ?</h2>
        <p>
          La sciatique est une douleur causée par l'irritation du nerf sciatique,
          le plus long nerf du corps humain. Elle irradie généralement du bas du dos
          jusqu'au pied, provoquant une douleur aiguë, des fourmillements ou une sensation
          de brûlure dans la jambe.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Symptômes courants</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Douleur vive dans la fesse et le long de la jambe</li>
          <li>Sensation de décharge électrique</li>
          <li>Engourdissement ou fourmillements</li>
          <li>Difficulté à marcher ou à se lever</li>
          <li>Douleur accentuée en position assise prolongée</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Causes de la sciatique</h2>
        <p>
          La cause la plus fréquente est une hernie discale comprimant le nerf sciatique.
          D'autres causes incluent :
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Arthrose et dégénérescence discale</li>
          <li>Sténose spinale (rétrécissement du canal rachidien)</li>
          <li>Syndrome du piriforme</li>
          <li>Traumatisme ou blessure</li>
          <li>Mauvaise posture prolongée</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Traitement par kinésithérapie</h2>
        <p>Notre approche thérapeutique au Centre Chnider comprend :</p>
        <ol className="list-decimal pl-6 space-y-2 mt-3">
          <li><strong>Thérapie manuelle :</strong> mobilisation douce pour réduire la compression nerveuse</li>
          <li><strong>Décompression vertébrale :</strong> exercices spécialisés de McKenzie</li>
          <li><strong>Électrothérapie :</strong> traitement antalgique pour réduire la douleur</li>
          <li><strong>Renforcement musculaire :</strong> exercices des stabilisateurs du dos</li>
          <li><strong>Correction posturale :</strong> conseils d'ergonomie et prévention</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Protocole de rééducation</h2>
        <p>Un protocole typique comprend :</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Séances 2 à 3 fois par semaine pendant 4 à 6 semaines</li>
          <li>Étirements quotidiens du muscle piriforme</li>
          <li>Marche quotidienne de 30 minutes</li>
          <li>Renforcement musculaire du tronc</li>
          <li>Éviter les mouvements qui aggravent la douleur</li>
        </ul>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Conseil professionnel</h3>
        <p>
          Si vous souffrez d'une sciatique depuis plus de 2 à 3 semaines sans amélioration,
          consultez notre équipe de kinésithérapeutes à Casablanca. Un traitement précoce
          permet d'éviter les complications.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">ما هو عرق النسا؟</h2>
        <p>
          عرق النسا هو ألم ناتج عن تهيج العصب الوركي، أطول عصب في جسم الإنسان.
          عادة ما يمتد الألم من أسفل الظهر إلى القدم، ويسبب ألماً حاداً أو تنميلاً
          أو إحساساً بالحرقان في الساق.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">الأعراض الشائعة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ألم حاد في الأرداف وعلى طول الساق</li>
          <li>إحساس بصدمة كهربائية</li>
          <li>تنميل أو وخز</li>
          <li>صعوبة في المشي أو الوقوف</li>
          <li>ازدياد الألم مع الجلوس لفترة طويلة</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">أسباب عرق النسا</h2>
        <p>
          السبب الأكثر شيوعاً هو الانزلاق الغضروفي الذي يضغط على العصب الوركي.
          ومن الأسباب الأخرى:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>خشونة المفاصل وتآكل الغضاريف</li>
          <li>ضيق القناة الشوكية</li>
          <li>متلازمة العضلة الكمثرية</li>
          <li>إصابة أو صدمة</li>
          <li>وضعية خاطئة لفترات طويلة</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">العلاج بالترويض الطبي</h2>
        <p>خطتنا العلاجية في مركز اشنيدر تشمل:</p>
        <ol className="list-decimal pl-6 space-y-2 mt-3">
          <li><strong>العلاج اليدوي:</strong> تحريك لطيف لتقليل الضغط على العصب</li>
          <li><strong>تفريغ ضغط الفقرات:</strong> تمارين متخصصة</li>
          <li><strong>العلاج الكهربائي:</strong> لتخفيف الألم</li>
          <li><strong>تقوية العضلات:</strong> تمارين دعم الظهر والجذع</li>
          <li><strong>تصحيح الوضعية:</strong> نصائح للوقاية وتحسين الحركة</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">خطة إعادة التأهيل</h2>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>جلسات من 2 إلى 3 مرات أسبوعياً لمدة 4 إلى 6 أسابيع</li>
          <li>تمارين تمدد يومية</li>
          <li>مشي يومي لمدة 30 دقيقة</li>
          <li>تقوية عضلات الجذع</li>
          <li>تجنب الحركات التي تزيد الألم</li>
        </ul>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">نصيحة مهنية</h3>
        <p>
          إذا استمر ألم عرق النسا لأكثر من أسبوعين أو ثلاثة دون تحسن، ننصحك
          باستشارة مختص في أقرب وقت لتفادي المضاعفات.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'lombalgie-cervicalgie',
      titleFr: 'Lombalgie & Cervicalgie',
      titleAr: 'آلام الظهر والرقبة',
      icon: <ArrowUpDown size={20} />
    },
    {
      slug: 'posture-ergonomie',
      titleFr: 'Posture & Ergonomie',
      titleAr: 'الوضعية والإرغونوميا',
      icon: <Stethoscope size={20} />
    },
    {
      slug: 'traumatologie-sport',
      titleFr: 'Traumatologie du Sport',
      titleAr: 'الإصابات الرياضية',
      icon: <Dumbbell size={20} />
    }
  ]
});

export default sciaticaArticle;
