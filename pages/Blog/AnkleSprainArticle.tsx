import { createArticle } from './ArticleTemplate';
import { Dumbbell } from 'lucide-react';

const ankleSprainArticle = createArticle({
  slug: 'entorse-cheville-kinesitherapie',
  titleFr: 'Entorse de cheville: pourquoi la kine change la recuperation',
  titleAr: 'التواء الكاحل: لماذا الترويض الطبي مهم للتعافي',
  descriptionFr:
    'Entorse legere ou grave: decouvrez le role de la kinesitherapie pour reduire la douleur, retrouver la stabilite et eviter les rechutes.',
  descriptionAr:
    'سواء كان الالتواء بسيطا او شديدا، الترويض الطبي يساعد على تخفيف الالم واسترجاع الثبات ومنع تكرار الاصابة.',
  keywordsFr:
    'entorse cheville, kine entorse casablanca, reeducation cheville, instabilite cheville, reprise sport apres entorse',
  keywordsAr:
    'التواء الكاحل, ترويض الكاحل, تاهيل بعد الالتواء, عدم ثبات الكاحل, عودة الرياضة بعد الالتواء',
  imageFr: 'https://picsum.photos/seed/entorse-cheville-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/entorse-cheville-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Une entorse n est jamais banale</h2>
        <p>
          Beaucoup de patients reprennent trop vite leurs activites apres une entorse. Resultat: cheville
          instable, douleurs recurrentes et nouvelles blessures. La kinesitherapie structure la recuperation
          en plusieurs phases pour eviter ces rechutes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Objectifs de la kinesitherapie</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Diminuer la douleur et l oedeme</li>
          <li>Retrouver l amplitude articulaire</li>
          <li>Renforcer les muscles stabilisateurs</li>
          <li>Reeduquer l equilibre et la proprioception</li>
          <li>Securiser la reprise du sport</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Plan de reeducation type</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Phase anti-douleur et drainage</li>
          <li>Phase mobilite et marche sans boiterie</li>
          <li>Phase renforcement et controle moteur</li>
          <li>Phase sauts, changements d appui et retour progressif au sport</li>
        </ol>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Conseil pratique</h3>
        <p>
          Si votre cheville se tord souvent ou reste gonflee apres quelques jours, une evaluation
          kinesitherapique rapide permet d eviter l instabilite chronique.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">الالتواء ليس اصابة بسيطة دائما</h2>
        <p>
          الرجوع المبكر للنشاط بدون تاهيل كاف قد يسبب تكرار الالتواء وضعف ثبات الكاحل. الترويض الطبي
          ينظم التعافي خطوة بخطوة لتفادي المضاعفات.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">اهداف الترويض الطبي</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>تخفيف الالم والتورم</li>
          <li>استرجاع حركة المفصل</li>
          <li>تقوية العضلات الداعمة للكاحل</li>
          <li>تحسين التوازن والاحساس الحركي</li>
          <li>العودة الامنة للرياضة</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">برنامج اعادة التاهيل</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>مرحلة تخفيف الالم والتورم</li>
          <li>مرحلة استرجاع المشي الطبيعي</li>
          <li>مرحلة التقوية والتحكم الحركي</li>
          <li>مرحلة العودة التدريجية للرياضة</li>
        </ol>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">نصيحة</h3>
        <p>
          اذا بقي الكاحل غير ثابت او منتفخا بعد الاصابة، من الافضل بدء برنامج تاهيل مبكر لتجنب
          الالتواءات المتكررة.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'traumatologie-sport',
      titleFr: 'Traumatologie du sport',
      titleAr: 'الاصابات الرياضية',
      icon: <Dumbbell size={20} />
    },
    {
      slug: 'rupture-ligament-croise-anterieur-reeducation',
      titleFr: 'Rupture du ligament croise',
      titleAr: 'تمزق الرباط الصليبي',
      icon: <Dumbbell size={20} />
    },
    {
      slug: 'recuperation-sportive-prevention-blessures',
      titleFr: 'Recuperation sportive',
      titleAr: 'الاستشفاء الرياضي',
      icon: <Dumbbell size={20} />
    }
  ]
});

export default ankleSprainArticle;
