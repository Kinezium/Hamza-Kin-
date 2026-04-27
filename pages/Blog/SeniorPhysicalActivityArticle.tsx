import { createArticle } from './ArticleTemplate';
import { Dumbbell } from 'lucide-react';

const seniorPhysicalActivityArticle = createArticle({
  slug: 'activite-physique-adaptee-seniors',
  titleFr: 'Activite Physique Adaptee pour les Seniors: Bouger en Securite',
  titleAr: 'النشاط البدني الملائم لكبار السن: الحركة بامان',
  descriptionFr: 'Des conseils simples pour aider les sujets ages a bouger chaque jour en toute securite, a la maison et dehors.',
  descriptionAr: 'نصائح بسيطة لمساعدة كبار السن على الحركة اليومية بامان داخل المنزل وخارجه.',
  keywordsFr: 'activite physique senior, exercices personne agee, prevention chute senior, mobilite senior',
  keywordsAr: 'نشاط بدني, كبار السن, تمارين بسيطة, الوقاية من السقوط',
  imageFr: 'https://picsum.photos/seed/senior-activity-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/senior-activity-chnider/1600/900',
  readTimeFr: '5 min de lecture',
  readTimeAr: '5 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Pourquoi une activite physique adaptee ?</h2>
        <p>Avec l'age, le corps change. Bouger reste essentiel, mais il faut des exercices adaptes. Le but est de rester actif sans se blesser.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Benefices pour les sujets ages</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Plus de force dans les jambes et les bras.</li>
          <li>Meilleur equilibre.</li>
          <li>Marche plus stable.</li>
          <li>Moins de douleurs articulaires.</li>
          <li>Meilleur sommeil et meilleur moral.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Exercices simples a faire (maman et papa)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Marche douce 10 a 20 minutes par jour.</li>
          <li>Se lever et s'asseoir sur une chaise (5 a 10 repetitions).</li>
          <li>Monter sur la pointe des pieds en se tenant a un support.</li>
          <li>Petits etirements des mollets, cuisses et epaules.</li>
          <li>Exercices d'equilibre avec appui (1 a 2 minutes).</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Les risques de ne pas bouger</h2>
        <p>Ne pas bouger pendant plusieurs semaines peut avoir des consequences serieuses, surtout chez les personnes agees.</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Muscles plus faibles chaque semaine.</li>
          <li>Perte d'equilibre et chute plus probable.</li>
          <li>Essoufflement rapide meme pour de petits efforts.</li>
          <li>Constipation et mauvaise circulation.</li>
          <li>Perte de confiance et peur de sortir.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Conseils de securite</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Commencer doucement.</li>
          <li>Mettre des chaussures stables.</li>
          <li>Boire de l'eau avant et apres l'effort.</li>
          <li>Arreter en cas de douleur forte, vertige ou fatigue importante.</li>
          <li>Demander l'avis d'un kinesitherapeute pour un programme personnalise.</li>
        </ul>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Petit objectif realiste</h3>
        <p>Pour maman et papa: 15 a 20 minutes de mouvement par jour, c'est deja une tres bonne base pour proteger la sante.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">لماذا نشاط بدني ملائم؟</h2>
        <p>مع التقدم في العمر، الجسم يتغير. الحركة تبقى ضرورية، لكن يجب ان تكون التمارين مناسبة للحالة الصحية.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">فوائد النشاط لكبار السن</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>زيادة القوة في الرجلين واليدين.</li>
          <li>تحسن التوازن.</li>
          <li>مشي اكثر ثباتا.</li>
          <li>الم اقل في المفاصل.</li>
          <li>نوم افضل ومزاج افضل.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">تمارين بسيطة للام والاب</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>مشي خفيف 10 الى 20 دقيقة يوميا.</li>
          <li>الجلوس والوقوف من الكرسي 5 الى 10 مرات.</li>
          <li>الوقوف على اطراف الاصابع مع التمسك بدعم.</li>
          <li>تمددات بسيطة للساقين والكتفين.</li>
          <li>تمارين توازن مع سند لمدة 1 الى 2 دقيقة.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">مخاطر عدم الحركة</h2>
        <p>عدم الحركة لعدة اسابيع قد يسبب مشاكل مهمة عند كبار السن.</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>ضعف العضلات بسرعة.</li>
          <li>زيادة خطر السقوط.</li>
          <li>تعب وضيق نفس مع مجهود بسيط.</li>
          <li>مشاكل في الهضم والدورة الدموية.</li>
          <li>خوف من الخروج وفقدان الثقة.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">نصائح امان</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ابدأ تدريجيا.</li>
          <li>البس حذاء مريح وثابت.</li>
          <li>اشرب الماء قبل وبعد التمرين.</li>
          <li>توقف اذا ظهر الم قوي او دوخة.</li>
          <li>استشر اخصائي الترويض الطبي لبرنامج مناسب.</li>
        </ul>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">هدف بسيط</h3>
        <p>للأم والاب: 15 الى 20 دقيقة حركة يوميا هي بداية ممتازة لحماية الصحة.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'reeducation-geriatrique-importance-kine', titleFr: 'Reeducation Geriatrique', titleAr: 'اعادة التاهيل لكبار السن', icon: <Dumbbell size={20} /> },
    { slug: 'lombalgie-cervicalgie', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'آلام الظهر والرقبة', icon: <Dumbbell size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرغونوميا', icon: <Dumbbell size={20} /> },
  ]
});

export default seniorPhysicalActivityArticle;
