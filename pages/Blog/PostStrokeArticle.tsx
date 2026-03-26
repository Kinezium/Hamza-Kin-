import { createArticle } from './ArticleTemplate';
import { Stethoscope } from 'lucide-react';

const postStrokeArticle = createArticle({
  slug: 'readaptation-post-avc',
  titleFr: 'Réadaptation Post-AVC: Reprendre la Vie',
  titleAr: 'إعادة التأهيل بعد السكتة الدماغية: استعادة الحياة',
  descriptionFr:
    'Rééducation après AVC. Exercices et techniques pour récupérer mobilité et indépendance.',
  descriptionAr:
    'إعادة التأهيل بعد السكتة الدماغية مع تمارين وتقنيات تساعد على استعادة الحركة والاستقلالية.',
  keywordsFr: 'AVC, accident vasculaire, rééducation AVC, kiné AVC, récupération après AVC',
  keywordsAr: 'جلطة, سكتة دماغية, إعادة التأهيل, استعادة الحركة',
  imageFr:
    'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr:
    'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Réadaptation post-AVC</h2>
        <p>
          Après un AVC, la rééducation précoce est essentielle pour améliorer la mobilité,
          l'équilibre et l'autonomie. Le cerveau possède une capacité d'adaptation qui peut
          être stimulée par une prise en charge régulière.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Conséquences possibles</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Faiblesse d'un côté du corps</li>
          <li>Troubles de l'équilibre</li>
          <li>Raideur musculaire (spasticité)</li>
          <li>Difficultés de parole ou de déglutition</li>
          <li>Baisse de sensibilité</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Approche thérapeutique</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Évaluation complète et personnalisée</li>
          <li>Rééducation neuromusculaire progressive</li>
          <li>Travail de la marche et des transferts</li>
          <li>Exercices d'équilibre et de coordination</li>
          <li>Programme d'exercices à domicile</li>
        </ol>
      </section>
      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Objectif principal</h3>
        <p>
          Retrouver un maximum d'autonomie dans la vie quotidienne et améliorer la qualité
          de vie de façon durable.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">إعادة التأهيل بعد السكتة الدماغية</h2>
        <p>
          بعد السكتة الدماغية، يبدأ التحسن الحقيقي مع إعادة التأهيل المبكر والمنتظم.
          تساعد التمارين العلاجية على استعادة الحركة والتوازن وتحسين القدرة على القيام
          بالأنشطة اليومية.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">الآثار المحتملة بعد السكتة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ضعف أو شلل في أحد جانبي الجسم</li>
          <li>اضطرابات التوازن والتناسق</li>
          <li>تشنج العضلات</li>
          <li>صعوبة الكلام أو البلع</li>
          <li>انخفاض الإحساس في بعض المناطق</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">خطة الترويض الطبي</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>تقييم شامل حسب حالة المريض</li>
          <li>تمارين عصبية عضلية موجهة</li>
          <li>إعادة تدريب المشي والحركة الوظيفية</li>
          <li>تمارين التوازن والتناسق</li>
          <li>برنامج متابعة منزلي واضح</li>
        </ol>
      </section>
      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">الهدف</h3>
        <p>
          استعادة أكبر قدر ممكن من الاستقلالية وتحسين جودة الحياة بشكل تدريجي وآمن.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'recuperation-sportive-prevention-blessures',
      titleFr: 'Récupération Sportive',
      titleAr: 'الاستشفاء الرياضي',
      icon: <Stethoscope size={20} />
    },
    {
      slug: 'kine-pediatrique',
      titleFr: 'Physiothérapie Pédiatrique',
      titleAr: 'الترويض الطبي للأطفال',
      icon: <Stethoscope size={20} />
    },
    {
      slug: 'posture-ergonomie',
      titleFr: 'Posture & Ergonomie',
      titleAr: 'الوضعية والإرغونوميا',
      icon: <Stethoscope size={20} />
    }
  ]
});

export default postStrokeArticle;
