import { createArticle } from './ArticleTemplate';
import { Dumbbell } from 'lucide-react';

const article3 = createArticle({
  slug: 'sports-injuries',
  titleFr: 'Traumatologie du Sport: Récupération Rapide',
  titleAr: 'الإصابات الرياضية: التعافي السريع',
  descriptionFr: 'Entorses, tendinites, déchirures musculaires. Apprenez comment récupérer rapidement après une blessure sportive avec la kinésithérapie.',
  descriptionAr: 'علاج الالتواءات والتهاب الأوتار والتمزقات العضلية. تعرف على كيفية التعافي السريع من الإصابة الرياضية.',
  keywordsFr: 'blessure sport, entorse, tendinite, trauma sport, kiné sport, rééducation',
  keywordsAr: 'إصابة رياضية, التواء, التهاب وتر, تأهيل رياضي',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Les Blessures Sportives</h2>
        <p>Les blessures sportives sont courantes chez les athlètes et les amateurs de sport à Casablanca. Elles incluent les entorses, les tendinites, les déchirures musculaires et les fractures de fatigue. Une rééducation appropriée est essentielle pour retourner au sport en toute sécurité.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Types de Blessures Courants</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Entorses:</strong> Étirement ou déchirure des ligaments</li>
          <li><strong>Tendinites:</strong> Inflammation des tendons</li>
          <li><strong>Déchirures Musculaires:</strong> Rupture des fibres musculaires</li>
          <li><strong>Fractures de Fatigue:</strong> Petites fissures des os</li>
          <li><strong>Syndrome de sur-utilisation:</strong> Surmenage chronique</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Protocole RICE Immédiat</h2>
        <p>Dans les 48-72 heures suivant la blessure:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong>Rest (Repos):</strong> Immobilisation et arrêt de l'activité</li>
          <li><strong>Ice (Glaçage):</strong> 15 minutes toutes les 2-3 heures</li>
          <li><strong>Compression:</strong> Bande élastique pour réduire le gonflement</li>
          <li><strong>Elevation:</strong> Surélévation pour drainer le liquide</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Phases de Rééducation</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold mb-2">Phase 1: Protection (Jours 1-3)</h3>
            <p>Repos complet, glaçage, compression. Début des exercices isométriques doux.</p>
          </div>
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold mb-2">Phase 2: Mobilisation (Jours 4-10)</h3>
            <p>Exercices de mobilité passive, puis active. Début du renforcement léger.</p>
          </div>
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold mb-2">Phase 3: Renforcement (Semaines 2-4)</h3>
            <p>Renforcement progressif et récupération proprioceptive.</p>
          </div>
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold mb-2">Phase 4: Retour au Sport (Semaines 4-6)</h3>
            <p>Entraînement fonctionnel et sport-spécifique.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Prévention des Rechutes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Échauffement complet avant l'activité</li>
          <li>Exercices de force et flexibilité réguliers</li>
          <li>Progression graduelle de l'intensité</li>
          <li>Récupération adéquate entre les séances</li>
          <li>Suivi des signaux d'alerte de votre corps</li>
        </ul>
      </section>
      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">⚠️ Points Importants</h3>
        <p>Ne retournez pas au sport trop tôt. Une rééducation complète peut prendre 4-6 semaines. À Centre Chnider, nos kinésithérapeutes spécialisés suivent votre progression.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">الإصابات الرياضية</h2>
        <p>الإصابات الرياضية شائعة جداً بين الرياضيين وهواة الرياضة بالدار البيضاء. تشمل الالتواءات والتهاب الأوتار والتمزقات العضلية وكسور الإجهاد. إعادة التأهيل الصحيحة ضرورية للعودة الآمنة إلى الرياضة.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">أنواع الإصابات الشائعة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>الالتواءات:</strong> تمدد أو تمزق الأربطة</li>
          <li><strong>التهاب الأوتار:</strong> التهاب الأوتار</li>
          <li><strong>التمزقات العضلية:</strong> تمزق ألياف العضل</li>
          <li><strong>كسور الإجهاد:</strong> شقوق صغيرة في العظام</li>
          <li><strong>متلازمة الإفراط في الاستخدام:</strong> الإجهاد المزمن</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">بروتوكول RICE الفوري</h2>
        <p>في أول 48-72 ساعة بعد الإصابة:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong>الراحة:</strong> إيقاف النشاط</li>
          <li><strong>الثلج:</strong> 15 دقيقة كل 2-3 ساعات</li>
          <li><strong>الضغط:</strong> شريط مرن لتقليل التورم</li>
          <li><strong>الرفع:</strong> رفع المنطقة المصابة</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">مراحل إعادة التأهيل</h2>
        <div className="space-y-4">
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold mb-2">المرحلة 1: الحماية (اليوم 1-3)</h3>
            <p>راحة كاملة، ثلج، ضغط. بدء تمارين ثابتة خفيفة.</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold mb-2">المرحلة 2: الحركة (اليوم 4-10)</h3>
            <p>تمارين حركية سلبية، ثم إيجابية. بدء التقوية الخفيفة.</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold mb-2">المرحلة 3: التقوية (أسبوع 2-4)</h3>
            <p>تقوية تدريجية واستعادة الحس.</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold mb-2">المرحلة 4: العودة للرياضة (أسبوع 4-6)</h3>
            <p>تدريب وظيفي وخاص بالرياضة.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">منع الانتكاسات</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>إحماء شامل قبل النشاط</li>
          <li>تمارين قوة ومرونة منتظمة</li>
          <li>زيادة تدريجية للشدة</li>
          <li>استرجاع كافٍ بين الجلسات</li>
          <li>الاستماع لإشارات جسدك</li>
        </ul>
      </section>
      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">⚠️ نقاط مهمة</h3>
        <p>لا تعد إلى الرياضة مبكراً. إعادة التأهيل الكاملة قد تستغرق 4-6 أسابيع. في مركز اشنيدر، متخصصونا يراقبون تقدمك.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'shoulder-pain', titleFr: 'Douleurs aux Épaules', titleAr: 'ألم الكتفين', icon: <Dumbbell size={20} /> },
    { slug: 'knee-osteoarthritis', titleFr: 'Arthrose du Genou', titleAr: 'خشونة الركبة', icon: <Dumbbell size={20} /> },
    { slug: 'sports-recovery', titleFr: 'Récupération Sportive', titleAr: 'استرجاع رياضي', icon: <Dumbbell size={20} /> },
  ]
});

export default article3;
