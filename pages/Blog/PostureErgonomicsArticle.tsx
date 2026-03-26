import { createArticle } from './ArticleTemplate';
import { Stethoscope } from 'lucide-react';

const article9 = createArticle({
  slug: 'posture-ergonomie',
  titleFr: 'Posture & Ergonomie: Prévention des Douleurs',
  titleAr: 'ا���ضع�`ة ��ا�إرج��� ���&�`ا: �&� ع ا�آ�ا�&',
  descriptionFr: 'Importance de la posture. Ergonomie de travail. Exercices de correction posturale.',
  descriptionAr: 'أ�!�&�`ة ا���ضع�`ة. إرج��� ���&�`ا ا�ع�&�. ت�&ار�`�  تصح�`ح ا���ضع�`ة.',
  keywordsFr: 'posture, ergonomie, mal de dos, prévention, travail bureau',
  keywordsAr: '��ضع�`ة, إرج��� ���&�`ا, أ��& ا�ظ�!ر, ���ا�`ة, ع�&�',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '5 min de lecture',
  readTimeAr: '5 د�ائ� �راءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">L'Importance de la Posture</h2>
        <p>Une bonne posture n'est pas qu'une question d'apparence. Elle prÃ©vient 70% des douleurs musculosquelettiques et amÃ©liore votre santÃ© globale.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">ConsÃ©quences d'une Mauvaise Posture</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Douleurs lombaires chroniques</li>
          <li>Tensions cervicales et céphalées</li>
          <li>Muscles faibles (core, dos)</li>
          <li>Compressions nerveuses</li>
          <li>Diminution de la mobilité</li>
          <li>Problèmes digestifs</li>
          <li>Réduction de la confiance en soi</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ergonomie de Bureau</h2>
        <div className="space-y-4 mt-4">
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold">Chaise</h3>
            <p>Hauteur ajustable, soutien lombaire, repose-pieds</p>
          </div>
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold">Bureau</h3>
            <p>Hauteur au niveau des coudes, distance à écran 50-70cm</p>
          </div>
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold">�0cran</h3>
            <p>Légèrement sous la hauteur des yeux, incliné à 20 degrés</p>
          </div>
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold">Clavier/Souris</h3>
            <p>ì la hauteur des coudes, souris proche du corps</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Exercices Posturaux Quotidiens</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>�0tirements du psoas:</strong> 30 sec x 3 fois</li>
          <li><strong>Gainage ventral:</strong> 30 sec x 3 fois</li>
          <li><strong>Rétraction du menton:</strong> 15 rép x 3 séries</li>
          <li><strong>Scapular squeeze:</strong> 15 rép x 3 séries</li>
          <li><strong>Back extension:</strong> 15 rép x 3 séries</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Habitudes Saines</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pause active toutes les heures</li>
          <li>Marche de 5 minutes entre les réunions</li>
          <li>�0tirements au travail</li>
          <li>Sports ou yoga 2-3 fois/semaine</li>
          <li>Dormir 7-8 heures par nuit</li>
        </ul>
      </section>
      <section className="bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">�a�️ Prévention</h3>
        <p>Il est beaucoup plus facile de prévenir les problèmes posturaux que de les traiter. Commencez dès maintenant!</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">أ�!�&�`ة ا���ضع�`ة</h2>
        <p>ا���ضع�`ة ا�ج�`دة ��`ست ع�  ا�ظ�!��ر ف�ط. ت�&� ع 70% �&�  آ�ا�& ا�عض�ات ��ا�عظا�& ��تحس�  صحتْ ا�عا�&ة.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">ع��ا�ب ا���ضع�`ة ا�س�`ئة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>آ�ا�& أسف� ا�ظ�!ر ا��&ز�&� ة</li>
          <li>اج�!ادات ع� ��`ة ��صداع</li>
          <li>ضعف ا�عض�ات (جذع�R ظ�!ر)</li>
          <li>ضغط ا�أعصاب</li>
          <li>ا� خفاض ا�حرْة</li>
          <li>�&شاْ� ا�ج�!از ا��!ض�&�`</li>
          <li>ا� خفاض ا�ث�ة با�� فس</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">إرج��� ���&�`ا ا��&ْتب</h2>
        <div className="space-y-4 mt-4">
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold">ا�ْرس�`</h3>
            <p>�اب� ��تعد�`��R دع�& �ط� �`�R حا�&� �د�&</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold">ا��&ْتب</h3>
            <p>ارتفاع �&ست���0 ا��&رف��`� �R �&سافة ا�شاشة 50-70 س�&</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold">ا�شاشة</h3>
            <p>أ�� ���`�ا�9 �&�  �&ست���0 ا�ع�`� �R �&ائ�ة 20 درجة</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold">���حة ا��&فات�`ح/ا��&ا��س</h3>
            <p>ع��0 �&ست���0 ا��&رف��`� �R ا��&ا��س �ر�`ب �&�  ا�جس�&</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">ت�&ار�`�  ��ضع�`ة �`���&�`ة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>ت�&د�`دات ا�ْ�&ثر�`ة:</strong> 30 ثا� �`ة � 3 �&رات</li>
          <li><strong>ت����`ة ا�بط� :</strong> 30 ثا� �`ة � 3 �&رات</li>
          <li><strong>سحب ا�ذ��  ��خ�ف:</strong> 15 تْرار � 3 �&ج�&��عات</li>
          <li><strong>ضغط ا�أْتاف:</strong> 15 تْرار � 3 �&ج�&��عات</li>
          <li><strong>ت�&د�`د ا�ظ�!ر:</strong> 15 تْرار � 3 �&ج�&��عات</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">عادات صح�`ة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>فترة � شطة ْ� ساعة</li>
          <li>�&ش�` 5 د�ائ� ب�`�  ا�اجت�&اعات</li>
          <li>ت�&د�`دات ف�` ا�ع�&�</li>
          <li>ر�`اضة أ�� �`��غا 2-3 �&رات/أسب��ع</li>
          <li>� �& 7-8 ساعات ف�` ا���`�</li>
        </ul>
      </section>
      <section className="bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">�a�️ ���ا�`ة</h3>
        <p>�&�  ا�أس�!� بْث�`ر �&� ع �&شاْ� ا���ضع�`ة �&�  �&عا�جت�!ا. ابدأ ا�آ� !</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'lombalgie-cervicalgie', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'Ø¢Ù„Ø§Ù… Ø§Ù„Ø¸Ù‡Ø± ÙˆØ§Ù„Ø±Ù‚Ø¨Ø©', icon: <Stethoscope size={20} /> },
    { slug: 'migraines-cephalees', titleFr: 'Migraines & CÃ©phalÃ©es', titleAr: 'Ø§Ù„ØµØ¯Ø§Ø¹ ÙˆØ§Ù„Ø´Ù‚ÙŠÙ‚Ø©', icon: <Stethoscope size={20} /> },
    { slug: 'recuperation-sportive-prevention-blessures', titleFr: 'RÃ©cupÃ©ration Sportive', titleAr: 'Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø±ÙŠØ§Ø¶ÙŠ', icon: <Stethoscope size={20} /> },
  ]
});

export default article9;



