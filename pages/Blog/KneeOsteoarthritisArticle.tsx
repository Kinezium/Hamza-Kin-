import { createArticle } from './ArticleTemplate';
import { Bone } from 'lucide-react';

const article4 = createArticle({
  slug: 'knee-osteoarthritis',
  titleFr: 'Arthrose du Genou: Vie Sans Douleur',
  titleAr: 'خشونة الركبة: الحياة بدون ألم',
  descriptionFr: 'Traitement de l\'arthrose du genou. Exercices et conseils pour réduire la douleur et améliorer la mobilité.',
  descriptionAr: 'علاج خشونة الركبة. تمارين ونصائح لتقليل الألم وتحسين الحركة.',
  keywordsFr: 'arthrose genou, gonarthrose, kiné genou, traitement arthrose',
  keywordsAr: 'خشونة الركبة, التهاب المفصل, علاج الركبة',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Arthrose du Genou: Comprendre la Condition</h2>
        <p>L'arthrose du genou est l'usure du cartilage articulaire. C'est une condition dégénérative qui affecte des millions de personnes. Mais avec la kinésithérapie appropriée, vous pouvez vivre sans douleur.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Signes et Symptômes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Douleur articulaire à la marche</li>
          <li>Craquements et bruits articulaires</li>
          <li>Raideur au réveil</li>
          <li>Gonflement intermittent</li>
          <li>Perte progressive de mobilité</li>
          <li>Instabilité du genou</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Facteurs de Risque</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Vieillissement (après 50 ans)</li>
          <li>Surpoids (pression accrue)</li>
          <li>Antécédents de blessure</li>
          <li>Facteurs génétiques</li>
          <li>Métier exigeant du genou</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Traitement Kinésithérapique</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Mobilisation Articulaire:</strong> Réduction du raidissement</li>
          <li><strong>Hydrothérapie:</strong> Exercices en piscine (décharge du poids)</li>
          <li><strong>Renforcement Musculaire:</strong> Muscles périarticulaires</li>
          <li><strong>Équilibre et Proprioception:</strong> Stabilité</li>
          <li><strong>Thermothérapie:</strong> Chaleur pour relaxer</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Exercices Recommandés</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Vélo d'appartement 20-30 min/jour</li>
          <li>Renforcement du quadriceps (isométrique)</li>
          <li>Étirements des ischio-jambiers</li>
          <li>Marche modérée quotidienne</li>
          <li>Éviter les escaliers et les accroupissements</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Prévention de l'Aggravation</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Maintenir un poids idéal</li>
          <li>Exercice régulier non-agressif</li>
          <li>Chaussures adaptées et stables</li>
          <li>Utilisation de cannes ou orthèses si nécessaire</li>
          <li>Suivi régulier avec votre kiné</li>
        </ul>
      </section>
      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">💡 Conseil</h3>
        <p>L'arthrose n'est pas une condamnation. Avec une rééducation régulière, la plupart des gens améliorent significativement leur mobilité et réduisent leur douleur.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">خشونة الركبة: فهم الحالة</h2>
        <p>خشونة الركبة هي تآكل الغضروف المفصلي. إنها حالة تنكسية تؤثر على الملايين من الناس. لكن مع الترويض الطبي الصحيح، يمكنك العيش بدون ألم.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">العلامات والأعراض</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ألم مفصلي عند المشي</li>
          <li>طقطقة وأصوات مفصلية</li>
          <li>تيبس عند الاستيقاظ</li>
          <li>تورم متقطع</li>
          <li>فقدان تدريجي للحركة</li>
          <li>عدم استقرار الركبة</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">عوامل الخطر</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>التقدم في السن (بعد سن 50)</li>
          <li>زيادة الوزن (ضغط أكبر)</li>
          <li>إصابات سابقة</li>
          <li>عوامل وراثية</li>
          <li>عمل يتطلب الركبة</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">العلاج بالترويض الطبي</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>تحريك المفاصل:</strong> تقليل التيبس</li>
          <li><strong>العلاج المائي:</strong> تمارين في المسبح (تقليل الوزن)</li>
          <li><strong>تقوية العضلات:</strong> العضلات المحيطة بالمفصل</li>
          <li><strong>التوازن والحس:</strong> الاستقرار</li>
          <li><strong>العلاج الحراري:</strong> الحرارة للاسترخاء</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">التمارين الموصى بها</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>درّاجة ثابتة 20-30 دقيقة/يوم</li>
          <li>تقوية عضلة الفخذ (ثابتة)</li>
          <li>تمديدات الأوتار</li>
          <li>مشي معتدل يومي</li>
          <li>تجنب السلالم والقرفصاء</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">منع التفاقم</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>الحفاظ على وزن مثالي</li>
          <li>تمرين منتظم غير عنيف</li>
          <li>أحذية مناسبة ومستقرة</li>
          <li>استخدام العصا أو الدعائم إذا لزم الأمر</li>
          <li>متابعة منتظمة مع المعالج</li>
        </ul>
      </section>
      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">💡 نصيحة</h3>
        <p>خشونة المفاصل ليست حكماً نهائياً. مع إعادة تأهيل منتظمة، يحسن معظم الناس حركتهم بشكل كبير ويقللون ألمهم.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'sports-injuries', titleFr: 'Traumatologie du Sport', titleAr: 'الإصابات الرياضية', icon: <Bone size={20} /> },
    { slug: 'back-pain', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'آلام الظهر والرقبة', icon: <Bone size={20} /> },
    { slug: 'posture-ergonomics', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرجونوميا', icon: <Bone size={20} /> },
  ]
});

export default article4;
