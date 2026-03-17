import { createArticle } from './ArticleTemplate';
import { Stethoscope } from 'lucide-react';

const article8 = createArticle({
  slug: 'post-stroke',
  titleFr: 'Réadaptation Post-AVC: Reprendre la Vie',
  titleAr: 'إعادة التأهيل ما بعد الجلطة: استعادة الحياة',
  descriptionFr: 'Rééducation après AVC. Exercices et techniques pour récupérer mobilité et indépendance.',
  descriptionAr: 'إعادة التأهيل بعد الجلطة. تمارين وتقنيات لاستعادة الحركة والاستقلالية.',
  keywordsFr: 'AVC, accident vasculaire, rééducation AVC, kiné AVC, récupération après AVC',
  keywordsAr: 'جلطة, سكتة دماغية, إعادة تأهيل, استعادة الحركة',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Réadaptation Post-AVC</h2>
        <p>Après un accident vasculaire cérébral (AVC), la rééducation précoce est cruciale pour maximiser la récupération. La plasticité cérébrale permet une réadaptation remarquable.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Séquelles Possibles de l'AVC</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Parésie ou paralysie d'un côté du corps</li>
          <li>Troubles de l'équilibre et de la coordination</li>
          <li>Spasticité (augmentation du tonus musculaire)</li>
          <li>Problèmes de parole ou de déglutition</li>
          <li>Perte de sensation</li>
          <li>Troubles cognitifs ou émotionnels</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Fenêtre de Récupération</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold">Phase Aiguë (0-3 mois)</h3>
            <p>Récupération spontanée et plastique cérébrale maximale. Début immédiat de la rééducation.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold">Phase Subaiguë (3-6 mois)</h3>
            <p>Amélioration significative possible. Intensité de rééducation élevée.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-bold">Phase Chronique (6+ mois)</h3>
            <p>Récupération plus lente mais toujours possible. Maintenance et prévention.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Approche Thérapeutique Intégrée</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Évaluation Complète:</strong> Force, mobilité, équilibre</li>
          <li><strong>Thérapie Neuromusculaire:</strong> Concepts Bobath, Perfetti</li>
          <li><strong>Rééducation de la Marche:</strong> Traitement gait-specific</li>
          <li><strong>Normalisation du Tonus:</strong> Gestion de la spasticité</li>
          <li><strong>Entraînement de l'Équilibre:</strong> Prévention des chutes</li>
          <li><strong>Réadaptation Fonctionnelle:</strong> ADL (activités quotidiennes)</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Exercices Simples à Domicile</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Exercices d'amplitude passive et active</li>
          <li>Renforcement progressif du côté affecté</li>
          <li>Marche avec support si nécessaire</li>
          <li>Assis-debout assisté</li>
          <li>Exercices d'équilibre assis</li>
        </ul>
      </section>
      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">🎯 Objectif</h3>
        <p>Récupérer l'indépendance fonctionnelle et la qualité de vie. Chaque patient progresse différemment. La persévérance est clé.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">إعادة التأهيل ما بعد الجلطة</h2>
        <p>بعد السكتة الدماغية، إعادة التأهيل المبكرة حاسمة لتعظيم التعافي. المرونة العصبية تسمح بإعادة تأهيل ملحوظة.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">الآثار المحتملة للجلطة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ضعف أو شلل من جانب واحد</li>
          <li>اضطرابات التوازن والتنسيق</li>
          <li>تشنج (زيادة توتر العضلات)</li>
          <li>مشاكل الكلام أو البلع</li>
          <li>فقدان الإحساس</li>
          <li>مشاكل إدراكية أو عاطفية</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">نافذة الشفاء</h2>
        <div className="space-y-3">
          <div className="border-r-4 border-green-500 pr-4">
            <h3 className="font-bold">المرحلة الحادة (0-3 أشهر)</h3>
            <p>تعافٍ تلقائي وأقصى مرونة عصبية. بدء إعادة التأهيل فوراً.</p>
          </div>
          <div className="border-r-4 border-blue-500 pr-4">
            <h3 className="font-bold">المرحلة فوق الحادة (3-6 أشهر)</h3>
            <p>تحسن كبير ممكن. كثافة إعادة التأهيل عالية.</p>
          </div>
          <div className="border-r-4 border-purple-500 pr-4">
            <h3 className="font-bold">المرحلة المزمنة (6+ أشهر)</h3>
            <p>التعافي أبطأ ولكن لا يزال ممكناً. الصيانة والوقاية.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">النهج العلاجي المتكامل</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>التقييم الشامل:</strong> القوة، الحركة، التوازن</li>
          <li><strong>العلاج العصبي العضلي:</strong> تقنيات متخصصة</li>
          <li><strong>إعادة تأهيل المشي:</strong> علاج خاص بالمشي</li>
          <li><strong>تطبيع التوتر:</strong> إدارة التشنج</li>
          <li><strong>تدريب التوازن:</strong> منع السقوط</li>
          <li><strong>إعادة تأهيل وظيفية:</strong> أنشطة يومية</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">تمارين بسيطة منزلية</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>تمارين النطاق السلبي والإيجابي</li>
          <li>تقوية تدريجي للجانب المصاب</li>
          <li>المشي مع الدعم إذا لزم الأمر</li>
          <li>الجلوس والوقوف بمساعدة</li>
          <li>تمارين التوازن الجالسة</li>
        </ul>
      </section>
      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">🎯 الهدف</h3>
        <p>استعادة الاستقلالية الوظيفية وجودة الحياة. يتطور كل مريض بشكل مختلف. الإصرار هو المفتاح.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'sports-recovery', titleFr: 'Récupération Sportive', titleAr: 'استرجاع رياضي', icon: <Stethoscope size={20} /> },
    { slug: 'pediatric-physiotherapy', titleFr: 'Physio Pédiatrique', titleAr: 'ترويض الأطفال', icon: <Stethoscope size={20} /> },
    { slug: 'posture-ergonomics', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرجونوميا', icon: <Stethoscope size={20} /> },
  ]
});

export default article8;
