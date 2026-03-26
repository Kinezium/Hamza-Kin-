import { createArticle } from './ArticleTemplate';
import { Brain } from 'lucide-react';

const article6 = createArticle({
  slug: 'migraines-cephalees',
  titleFr: 'Migraines & Céphalées: Soulagement Naturel',
  titleAr: 'ا�صداع ��ا�ش��`�ة: تخف�`ف طب�`ع�`',
  descriptionFr: 'Traiter migraines et céphalées de tension par la kinésithérapie. Techniques et exercices pour prévenir et soulager.',
  descriptionAr: 'ع�اج ا�صداع ��ا�ش��`�ة با�تر���`ض ا�طب�`. ت�� �`ات ��ت�&ار�`�  �����ا�`ة ��ا�تخف�`ف.',
  keywordsFr: 'migraine, céphalée, mal de tête, kiné migraine, traitement céphalée',
  keywordsAr: 'صداع, ش��`�ة, تصداع, �&عا�جة ا�صداع',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '5 min de lecture',
  readTimeAr: '5 د�ائ� �راءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Migraines et CÃ©phalÃ©es: Un ProblÃ¨me Courant</h2>
        <p>15% de la population souffre de migraines. Les cÃ©phalÃ©es de tension sont encore plus frÃ©quentes. Saviez-vous que la kinÃ©sithÃ©rapie peut aider?</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Types de CÃ©phalÃ©es</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>CÃ©phalÃ©e de Tension:</strong> Pression autour de la tÃªte</li>
          <li><strong>Migraine:</strong> Douleur pulsatile unilatÃ©rale</li>
          <li><strong>CÃ©phalÃ©e CervicogÃ©nique:</strong> Due au cou raide</li>
          <li><strong>CÃ©phalÃ©e de Cluster:</strong> Douleur intense pÃ©riodique</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Causes LiÃ©es Ã  la Posture</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Raideur cervicale</li>
          <li>Tensions musculaires du cou et des Ã©paules</li>
          <li>Mauvaise posture prolongÃ©e</li>
          <li>Travail devant l'écran</li>
          <li>Stress musculaire chronique</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Approche Kinésithérapique</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>�0valuation:</strong> Identifier les triggers</li>
          <li><strong>Mobilisation Cervicale:</strong> Réduire la raideur</li>
          <li><strong>Traitement des Trigger Points:</strong> Soulager les muscles</li>
          <li><strong>Correction Posturale:</strong> Ergonomie correcte</li>
          <li><strong>Exercices Stabilisateurs:</strong> Renforcement</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Stratégies de Prévention</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>�0tirements cervicaux quotidiens</li>
          <li>Pauses toutes les heures devant l'Ã©cran</li>
          <li>Posture correcte au travail</li>
          <li>Gestion du stress (yoga, mÃ©ditation)</li>
          <li>Hydratation adÃ©quate</li>
          <li>Sommeil rÃ©gulier et suffisant</li>
        </ul>
      </section>
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">âœ¨ RÃ©sultat Attendu</h3>
        <p>75% des patients voient une rÃ©duction significative de la frÃ©quence et de l'intensité des migraines après 6-8 semaines de kinésithérapie régulière.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">ا�صداع ��ا�ش��`�ة: �&شْ�ة شائعة</h2>
        <p>15% �&�  ا�سْا�  �`عا� ���  �&�  ا�ش��`�ة. صداع ا�ت��تر أْثر ش�`��عا�9. �!� تع��& أ�  ا�تر���`ض ا�طب�` �`�&ْ�  أ�  �`ساعد�x</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">أ� ��اع ا�صداع</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>صداع ا�ت��تر:</strong> ضغط ح��� ا�رأس</li>
          <li><strong>ا�ش��`�ة:</strong> أ��& � ابض �&�  جا� ب ��احد</li>
          <li><strong>صداع ع� ��` ا��&صدر:</strong> � اتج ع�  ت�`بس ا�ر�بة</li>
          <li><strong>صداع ع� ���د�`:</strong> أ��& �&ْثف د��ر�`</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">أسباب ذات ص�ة با���ضع�`ة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ت�`بس ا�ر�بة</li>
          <li>تش� جات عض��`ة ف�` ا�ر�بة ��ا�أْتاف</li>
          <li>��ضع�`ة خاطئة �&ط���ة</li>
          <li>ا�ع�&� أ�&ا�& ا�شاشة</li>
          <li>ا�إج�!اد ا�عض��` ا��&ز�&� </li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">ا�� �!ج ا�ع�اج�`</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>ا�ت��`�`�&:</strong> تحد�`د ا��&حفزات</li>
          <li><strong>تحر�`ْ ا�ر�بة:</strong> ت���`� ا�ت�`بس</li>
          <li><strong>ع�اج � �اط ا�أ��&:</strong> تخف�`ف ا�عض�ات</li>
          <li><strong>تصح�`ح ا���ضع�`ة:</strong> ا�إرج��� ���&�`ا ا�صح�`حة</li>
          <li><strong>ت�&ار�`�  ا�تثب�`ت:</strong> ا�ت����`ة</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">استرات�`ج�`ات ا����ا�`ة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ت�&د�`دات ا�ر�بة ا��`���&�`ة</li>
          <li>فترات راحة ْ� ساعة أ�&ا�& ا�شاشة</li>
          <li>��ضع�`ة صح�`حة ف�` ا�ع�&�</li>
          <li>إدارة ا�إج�!اد (ا��`��غا�R ا�تأ�&�)</li>
          <li>ترط�`ب ْافٍ</li>
          <li>� ���& �&� تظ�& ��ْافٍ</li>
        </ul>
      </section>
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">�S� ا�� ت�`جة ا��&ت���عة</h3>
        <p>75% �&�  ا��&رض�0 �`ر���  ا� خفاضا�9 ْب�`را�9 ف�` تْرار ��شدة ا�صداع بعد 6-8 أساب�`ع �&�  ا�تر���`ض ا�طب�` ا��&� تظ�&.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'lombalgie-cervicalgie', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'Ø¢Ù„Ø§Ù… Ø§Ù„Ø¸Ù‡Ø± ÙˆØ§Ù„Ø±Ù‚Ø¨Ø©', icon: <Brain size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© ÙˆØ§Ù„Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§', icon: <Brain size={20} /> },
    { slug: 'stress-relief', titleFr: 'Gestion du Stress', titleAr: 'Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¥Ø¬Ù‡Ø§Ø¯', icon: <Brain size={20} /> },
  ]
});

export default article6;



