import { createArticle } from './ArticleTemplate';
import { Brain } from 'lucide-react';

const avcWarningSignsArticle = createArticle({
  slug: 'avc-signes-alerte-reeducation-precoce',
  titleFr: 'AVC: Signes d alerte et role de la reeducation precoce',
  titleAr: 'السكتة الدماغية: علامات الانذار ودور التاهيل المبكر',
  descriptionFr:
    'Reconnaissez vite les signes d AVC et demarrez une reeducation precoce avec la kinesitherapie pour recuperer mobilite, equilibre et autonomie.',
  descriptionAr:
    'تعرفوا بسرعة على علامات السكتة الدماغية وابدؤوا التاهيل المبكر بالترويض الطبي لاسترجاع الحركة والتوازن والاستقلالية.',
  keywordsFr:
    'avc signes alerte, reeducation precoce avc, kinesitherapie neurologique casablanca, hemiplegie, recuperation post avc',
  keywordsAr:
    'علامات السكتة الدماغية, تاهيل مبكر بعد الجلطة, الترويض العصبي, استرجاع الحركة بعد AVC, مروض طبي الدار البيضاء',
  imageFr: 'https://picsum.photos/seed/avc-signes-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/avc-signes-chnider/1600/900',
  readTimeFr: '8 min de lecture',
  readTimeAr: '8 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Pourquoi agir vite en cas d AVC ?</h2>
        <p>
          L AVC est une urgence. Plus la prise en charge est rapide, plus les chances de recuperer
          la marche, la force du bras et la parole sont elevees. La kinesitherapie intervient tres
          tot pour limiter les sequelles et relancer l autonomie.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Signes d alerte a reconnaitre</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Visage qui se deforme d un seul cote</li>
          <li>Faiblesse brutale du bras ou de la jambe</li>
          <li>Trouble soudain de la parole</li>
          <li>Perte d equilibre ou vertige intense</li>
          <li>Maux de tete tres violents et inhabituels</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Ce que fait la reeducation precoce</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Prevenir l enraidissement et les douleurs</li>
          <li>Stimuler la neuroplasticite du cerveau</li>
          <li>Reentrainer les gestes du quotidien</li>
          <li>Ameliorer la marche, l equilibre et la coordination</li>
          <li>Accompagner la famille avec un plan simple a domicile</li>
        </ol>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">A retenir</h3>
        <p>
          Reeducation precoce = meilleures chances de recuperation. Si vous avez un proche touche par
          un AVC, une evaluation kinesitherapique rapide peut faire gagner des semaines de progression.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">لماذا يجب التدخل بسرعة في حالة AVC؟</h2>
        <p>
          السكتة الدماغية حالة مستعجلة. كلما كان التدخل اسرع، زادت فرص استرجاع المشي وحركة اليد
          والكلام. الترويض الطبي المبكر يساعد على تقليل المضاعفات واستعادة الاستقلالية.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">علامات الانذار</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>اعوجاج مفاجئ في الوجه</li>
          <li>ضعف مفاجئ في الذراع او الساق</li>
          <li>صعوبة مفاجئة في الكلام</li>
          <li>فقدان التوازن او دوخة قوية</li>
          <li>صداع شديد وغير معتاد</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">دور التاهيل المبكر</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>الحد من التصلب والالم</li>
          <li>تحفيز الدماغ على اعادة تنظيم الوظائف</li>
          <li>اعادة تدريب الحركات اليومية</li>
          <li>تحسين المشي والتوازن والتناسق</li>
          <li>برنامج منزلي واضح للمريض والعائلة</li>
        </ol>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">الخلاصة</h3>
        <p>
          كل يوم في بداية العلاج يصنع الفرق. التقييم المبكر في الترويض الطبي بعد السكتة يزيد فرص
          التعافي بشكل ملحوظ.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'readaptation-post-avc',
      titleFr: 'Readaptation post AVC',
      titleAr: 'اعادة التاهيل بعد الجلطة',
      icon: <Brain size={20} />
    },
    {
      slug: 'lombalgie-cervicalgie',
      titleFr: 'Lombalgie et cervicalgie',
      titleAr: 'الام الظهر والرقبة',
      icon: <Brain size={20} />
    },
    {
      slug: 'entorse-cheville-kinesitherapie',
      titleFr: 'Entorse de cheville',
      titleAr: 'التواء الكاحل',
      icon: <Brain size={20} />
    }
  ]
});

export default avcWarningSignsArticle;
