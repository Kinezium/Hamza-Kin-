import { createArticle } from './ArticleTemplate';
import { Dumbbell } from 'lucide-react';

const article3 = createArticle({
  slug: 'traumatologie-sport',
  titleFr: 'Traumatologie du Sport: Récupération Rapide',
  titleAr: 'الإصابات الرياضية: التعافي السريع',
  descriptionFr: 'Entorses, tendinites, déchirures musculaires: un plan simple pour récupérer en sécurité.',
  descriptionAr: 'الالتواءات والتهاب الأوتار والتمزقات العضلية: خطة واضحة للتعافي الآمن.',
  keywordsFr: 'blessure sport, entorse, tendinite, trauma sport, kiné sport, rééducation',
  keywordsAr: 'إصابة رياضية, التواء, التهاب أوتار, تأهيل رياضي',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Les blessures les plus fréquentes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Entorse (ligaments étirés).</li>
          <li>Tendinite (inflammation du tendon).</li>
          <li>Déchirure musculaire.</li>
          <li>Douleur de surcharge répétée.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Premiers gestes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Repos immédiat.</li>
          <li>Glace 10 à 15 minutes.</li>
          <li>Compression si besoin.</li>
          <li>Élévation du membre.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Rééducation en kiné</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Phase douleur et protection.</li>
          <li>Phase mobilité progressive.</li>
          <li>Phase renforcement.</li>
          <li>Retour au sport sécurisé.</li>
        </ol>
      </section>
      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Point important</h3>
        <p>Reprendre trop tôt augmente le risque de rechute. Un retour progressif est indispensable.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">أكثر الإصابات شيوعاً</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>التواء الأربطة.</li>
          <li>التهاب الأوتار.</li>
          <li>تمزق عضلي.</li>
          <li>ألم بسبب الإجهاد المتكرر.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">الإسعاف الأولي</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>راحة فورية.</li>
          <li>ثلج 10 إلى 15 دقيقة.</li>
          <li>ضغط خفيف عند الحاجة.</li>
          <li>رفع الطرف المصاب.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">إعادة التأهيل</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>مرحلة تخفيف الألم والحماية.</li>
          <li>مرحلة استعادة الحركة.</li>
          <li>مرحلة التقوية.</li>
          <li>العودة التدريجية للرياضة.</li>
        </ol>
      </section>
      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">نقطة مهمة</h3>
        <p>العودة المبكرة قبل الشفاء الكامل قد تسبب انتكاسة. التدرج ضروري جداً.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'douleurs-epaules-capsulite', titleFr: 'Douleurs aux Épaules', titleAr: 'آلام الكتف', icon: <Dumbbell size={20} /> },
    { slug: 'arthrose-genou', titleFr: 'Arthrose du Genou', titleAr: 'خشونة الركبة', icon: <Dumbbell size={20} /> },
    { slug: 'recuperation-sportive-prevention-blessures', titleFr: 'Récupération Sportive', titleAr: 'الاستشفاء الرياضي', icon: <Dumbbell size={20} /> },
  ]
});

export default article3;
