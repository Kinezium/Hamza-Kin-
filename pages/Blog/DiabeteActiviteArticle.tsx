import React from 'react';
import { Activity, HeartPulse, Stethoscope } from 'lucide-react';
import { createTrendArticle } from './TrendArticleFactory';

const article = createTrendArticle({
  slug: 'diabete-activite-physique-pieds-maroc',
  titleFr: 'Diabète et activité physique : bouger en sécurité au Maroc',
  titleAr: 'السكري والنشاط البدني: الحركة بأمان في المغرب',
  descriptionFr: 'Diabète et activité physique à Casablanca : reprendre la marche progressivement, protéger ses pieds et savoir quand demander un avis médical.',
  descriptionAr: 'السكري والنشاط البدني في الدار البيضاء: استئناف المشي تدريجياً وحماية القدمين ومعرفة متى يجب استشارة الطبيب.',
  keywordsFr: 'diabète activité physique Maroc, marcher avec diabète Casablanca, kiné diabète Casablanca, pied diabétique prévention, soins infirmiers à domicile Casablanca',
  keywordsAr: 'السكري والنشاط البدني المغرب, المشي مع السكري الدار البيضاء, الترويض والسكري, الوقاية من القدم السكري, التمريض المنزلي',
  imageSeed: 'diabetes-physical-activity-morocco',
  readTime: '7',
  specialty: 'activité physique adaptée',
  specialtyAr: 'النشاط البدني الملائم',
  bodyFr: (
    <>
      <section>
        <h2 className="text-2xl font-bold mb-3">Bouger fait partie de la prise en charge, avec un programme adapté</h2>
        <p>L’activité physique régulière contribue à la santé générale et peut participer à la prise en charge du diabète. Le bon point de départ dépend toutefois des traitements, des complications éventuelles, de la condition physique et des habitudes de la personne. Demandez conseil à votre médecin avant un changement important, surtout si vous avez déjà eu un malaise ou une complication.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">Reprendre la marche à Casablanca : une progression réaliste</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Choisissez un parcours sûr et commencez par une durée confortable, sans chercher à compenser les jours d’inactivité.</li>
          <li>Augmentez progressivement la durée ou le rythme, un changement à la fois.</li>
          <li>Par forte chaleur, privilégiez les heures plus fraîches, l’hydratation et un endroit où vous pouvez vous reposer.</li>
          <li>Si vous avez un traitement pouvant provoquer une hypoglycémie, demandez à votre équipe soignante comment prévenir et reconnaître cet épisode pendant l’effort.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">Vérifier ses pieds et ses chaussures</h2>
        <p>Avant et après une activité, soyez attentif à une ampoule, une plaie, une rougeur ou une zone chaude. Portez des chaussures bien ajustées et des chaussettes adaptées. En cas de perte de sensibilité, de plaie ou de problème de circulation, ne traitez pas la lésion vous-même : contactez rapidement un professionnel de santé. Une douleur thoracique, un essoufflement inhabituel ou un malaise pendant l’effort nécessite l’arrêt immédiat et une évaluation médicale urgente.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">Quand demander un accompagnement ?</h2>
        <p>Un médecin peut vérifier les précautions liées à votre état de santé et à vos traitements. Un kinésithérapeute peut ensuite aider à adapter les exercices à la mobilité, à l’équilibre et aux objectifs fonctionnels. Pour les personnes qui ont besoin d’un suivi à domicile à Casablanca, consultez les <a href="https://ssd.clinaxis.ma/" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-800 underline">services de santé à domicile, dont les soins infirmiers et la médecine à domicile</a>.</p>
        <p className="mt-3">Pour comprendre les bénéfices généraux du mouvement, lisez aussi notre guide sur <a href="/blog/activite-physique-adaptee-seniors" className="text-medical-700 underline font-semibold">l’activité physique adaptée chez les seniors</a>.</p>
      </section>
      <p className="rounded-lg bg-amber-50 p-5 text-amber-950">Cet article donne des repères généraux et ne remplace ni le suivi du diabète ni un avis médical personnalisé.</p>
    </>
  ),
  bodyAr: (
    <>
      <section>
        <h2 className="text-2xl font-bold mb-3">النشاط البدني جزء من الرعاية، مع برنامج مناسب</h2>
        <p>يساهم النشاط المنتظم في الصحة العامة وقد يساعد ضمن رعاية السكري. لكن نقطة البداية تعتمد على العلاج والمضاعفات والحالة البدنية وعادات الشخص. استشيروا الطبيب قبل تغيير كبير، خاصة عند وجود مضاعفات أو حدوث إغماء سابقاً.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">استئناف المشي في الدار البيضاء تدريجياً</h2>
        <ul className="list-disc pr-6 space-y-2">
          <li>اختاروا مساراً آمناً وابدؤوا بمدة مريحة دون محاولة تعويض فترة الخمول.</li>
          <li>زيدوا المدة أو السرعة تدريجياً، مع تغيير عامل واحد في كل مرة.</li>
          <li>في الحر، اختاروا وقتاً أبرد، واحملوا الماء وحددوا مكاناً للراحة.</li>
          <li>إذا كان العلاج قد يسبب هبوط السكر، اسألوا الفريق الصحي عن الوقاية وعلامات الهبوط أثناء الجهد.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">مراقبة القدمين والحذاء</h2>
        <p>راقبوا وجود فقاعة أو جرح أو احمرار أو سخونة غير معتادة قبل النشاط وبعده. ارتدوا حذاءً مناسباً وجوارب ملائمة. عند ضعف الإحساس أو وجود جرح أو مشكلة في الدورة الدموية، لا تعالجوا الجرح بأنفسكم وتواصلوا سريعاً مع مختص. ألم الصدر أو ضيق النفس غير المعتاد أو الإغماء أثناء الجهد يستدعي التوقف وطلب تقييم طبي عاجل.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">متى نطلب المواكبة؟</h2>
        <p>يمكن للطبيب تحديد الاحتياطات المرتبطة بالحالة والعلاج، ويساعد اختصاصي الترويض على تكييف التمارين مع الحركة والتوازن والأهداف. لمن يحتاج إلى متابعة في المنزل بالدار البيضاء، اكتشفوا <a href="https://ssd.clinaxis.ma/" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-800 underline">خدمات الرعاية الصحية المنزلية، بما فيها التمريض والطبيب</a>.</p>
        <p className="mt-3">اقرؤوا أيضاً دليلنا عن <a href="/ar/blog/activite-physique-adaptee-seniors" className="text-medical-700 underline font-semibold">النشاط البدني الملائم لكبار السن</a>.</p>
      </section>
      <p className="rounded-lg bg-amber-50 p-5 text-amber-950">هذه معلومات عامة ولا تعوض متابعة السكري أو الاستشارة الطبية المناسبة لكل حالة.</p>
    </>
  ),
  sources: [
    { label: 'OMS — Diabetes', url: 'https://www.who.int/news-room/fact-sheets/detail/diabetes' },
    { label: 'OMS — Physical activity', url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity' }
  ],
  relatedArticles: [
    { slug: 'activite-physique-adaptee-seniors', titleFr: 'Activité physique adaptée', titleAr: 'النشاط البدني الملائم', icon: <Activity size={20} /> },
    { slug: 'prevention-chutes-seniors-kinesitherapie-maroc', titleFr: 'Prévenir les chutes', titleAr: 'الوقاية من السقوط', icon: <HeartPulse size={20} /> },
    { slug: 'kinesitherapie-maroc-portrait', titleFr: 'La kinésithérapie au Maroc', titleAr: 'الترويض الطبي في المغرب', icon: <Stethoscope size={20} /> }
  ]
});

export default article;
