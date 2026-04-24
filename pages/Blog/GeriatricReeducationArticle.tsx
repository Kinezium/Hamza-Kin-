import { createArticle } from './ArticleTemplate';
import { Stethoscope } from 'lucide-react';

const geriatricReeducationArticle = createArticle({
  slug: 'reeducation-geriatrique-importance-kine',
  titleFr: 'Reeducation Geriatrique: Pourquoi la Kine est Importante',
  titleAr: 'اعادة التاهيل لكبار السن: لماذا الترويض الطبي مهم',
  descriptionFr: 'Un guide simple pour comprendre la reeducation geriatrique et aider maman et papa a garder leur autonomie.',
  descriptionAr: 'دليل بسيط لفهم اعادة التاهيل عند كبار السن ومساعدة الاب والام على الحفاظ على الاستقلالية.',
  keywordsFr: 'reeducation geriatrique, kine senior, autonomie personne agee, prevention chute',
  keywordsAr: 'اعادة التاهيل, الترويض الطبي, كبار السن, الوقاية من السقوط',
  imageFr: 'https://picsum.photos/seed/geriatric-rehab-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/geriatric-rehab-chnider/1600/900',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">C'est quoi la reeducation geriatrique ?</h2>
        <p>La reeducation geriatrique est une prise en charge pour les personnes agees. Le but est simple: garder la mobilite, reduire la douleur et rester autonome le plus longtemps possible.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Pourquoi la kine est importante ?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Elle aide a mieux marcher.</li>
          <li>Elle renforce les jambes et le dos.</li>
          <li>Elle ameliore l'equilibre.</li>
          <li>Elle diminue le risque de chute.</li>
          <li>Elle redonne confiance au quotidien.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Pour maman et papa: les signes a surveiller</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Se lever devient difficile.</li>
          <li>La marche est lente ou instable.</li>
          <li>Il y a des douleurs frequentes au dos, au genou ou a la hanche.</li>
          <li>La peur de tomber apparait.</li>
          <li>Les sorties deviennent plus rares.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Les risques quand on ne bouge pas</h2>
        <p>Quand une personne agee bouge peu, le corps perd vite ses capacites. Les muscles fondent, les articulations se raidissent, et la fatigue augmente.</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Perte de force musculaire.</li>
          <li>Raideur des articulations.</li>
          <li>Risque de chutes et de fractures.</li>
          <li>Perte d'autonomie pour les gestes simples (se laver, s'habiller, monter des marches).</li>
          <li>Isolement social, stress et tristesse.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Ce que fait le kinesitherapeute</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Evaluation simple de la force, de l'equilibre et de la marche.</li>
          <li>Programme d'exercices adapte a l'age et a la sante.</li>
          <li>Conseils pour rendre la maison plus sure.</li>
          <li>Suivi regulier pour progresser sans danger.</li>
        </ol>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Message important</h3>
        <p>Il n'est jamais trop tard pour recommencer a bouger. Quelques exercices simples, faits regulierement, peuvent changer la vie de maman et papa.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">ما هي اعادة التاهيل لكبار السن؟</h2>
        <p>هي متابعة علاجية تساعد كبار السن على الحفاظ على الحركة وتقليل الالم والعيش باستقلالية اكبر.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">لماذا الترويض الطبي مهم؟</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>يساعد على المشي بشكل افضل.</li>
          <li>يقوي العضلات خصوصا الرجلين والظهر.</li>
          <li>يحسن التوازن.</li>
          <li>يقلل خطر السقوط.</li>
          <li>يعيد الثقة في الحياة اليومية.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">للام والاب: علامات يجب الانتباه لها</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>صعوبة في الوقوف من الكرسي.</li>
          <li>مشي بطيء او غير ثابت.</li>
          <li>الم متكرر في الظهر او الركبة او الورك.</li>
          <li>خوف من السقوط.</li>
          <li>الخروج من المنزل اصبح قليلا.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">مخاطر عدم الحركة</h2>
        <p>عندما لا يتحرك الشخص الكبير في السن، يفقد الجسم قدراته بسرعة: ضعف عضلات، تيبس مفاصل، وتعب دائم.</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>فقدان القوة العضلية.</li>
          <li>تيبس المفاصل.</li>
          <li>ارتفاع خطر السقوط والكسور.</li>
          <li>فقدان الاستقلالية في الانشطة اليومية.</li>
          <li>العزلة والتوتر والحزن.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">ماذا يفعل اخصائي الترويض الطبي؟</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>تقييم بسيط للقوة والتوازن والمشي.</li>
          <li>برنامج تمارين مناسب للعمر والحالة الصحية.</li>
          <li>نصائح لجعل المنزل اكثر امانا.</li>
          <li>متابعة منتظمة للوصول الى نتائج بدون خطر.</li>
        </ol>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">رسالة مهمة</h3>
        <p>ليس متاخرا ابدا للعودة الى الحركة. تمارين بسيطة ومنتظمة يمكن ان تحسن حياة الام والاب بشكل كبير.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'activite-physique-adaptee-seniors', titleFr: 'Activite Physique Adaptee', titleAr: 'النشاط البدني الملائم', icon: <Stethoscope size={20} /> },
    { slug: 'readaptation-post-avc', titleFr: 'Readaptation Post-AVC', titleAr: 'اعادة التاهيل بعد الجلطة', icon: <Stethoscope size={20} /> },
    { slug: 'kine-pediatrique', titleFr: 'Physiotherapie Pediatrique', titleAr: 'الترويض الطبي للاطفال', icon: <Stethoscope size={20} /> },
  ]
});

export default geriatricReeducationArticle;
