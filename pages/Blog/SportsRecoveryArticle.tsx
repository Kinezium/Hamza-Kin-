import { createArticle } from './ArticleTemplate';
import { Dumbbell } from 'lucide-react';

const article10 = createArticle({
  slug: 'recuperation-sportive-prevention-blessures',
  titleFr: 'Récupération Sportive & Prévention des Blessures',
  titleAr: 'استرجاع ر�`اض�` ���&� ع ا�إصابات',
  descriptionFr: 'Optimiser la récupération après l\'entraînement. Prévention des blessures. Conseils pour les athlètes.',
  descriptionAr: 'تحس�`�  ا�استشفاء بعد ا�تدر�`ب. �&� ع ا�إصابات. � صائح ��ر�`اض�`�`� .',
  keywordsFr: 'récupération sport, prévention blessure, entraînement, athlète, kiné sport',
  keywordsAr: 'استرجاع ر�`اض�`�R �&� ع إصابة�R تدر�`ب�R ر�`اض�`',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 د�ائ� �راءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">La RÃ©cupÃ©ration Sportive</h2>
        <p>La rÃ©cupÃ©ration est aussi importante que l'entraînement lui-même. Elle permet aux muscles de se réparer, améliore les performances et prévient les blessures.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Les 3 Piliers de la Récupération</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">1. Sommeil (60%)</h3>
            <p>7-9 heures par nuit. C'est pendant le sommeil que se produit la majoritÃ© de la rÃ©cupÃ©ration et de la synthÃ¨se protÃ©ique.</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">2. Nutrition (30%)</h3>
            <p>ProtÃ©ines pour la rÃ©paration musculaire, glucides pour l'énergie, vitamines et minéraux pour la récupération.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">3. Récupération Active (10%)</h3>
            <p>�0tirements, massage, mobilité. Accélère l'Ã©vacuation des dÃ©chets mÃ©taboliques.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Techniques de RÃ©cupÃ©ration</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ã‰tirements</strong> (10-15 min aprÃ¨s effort)</li>
          <li><strong>Massage sportif</strong> (24-48h aprÃ¨s)</li>
          <li><strong>Automassage</strong> (rouleau de mousse)</li>
          <li><strong>CryothÃ©rapie</strong> (glaÃ§age)</li>
          <li><strong>Ã‰lectrothÃ©rapie</strong> (rÃ©cupÃ©ration musculaire)</li>
          <li><strong>Compression</strong> (vÃªtements de compression)</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Plan d'�0chauffement Optimal</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Cardio Léger:</strong> 5-10 min (augmente la température)</li>
          <li><strong>Mobilité Dynamique:</strong> 5-10 min (prépare les articulations)</li>
          <li><strong>Activation Neuromusculaire:</strong> 5 min (réveille les muscles)</li>
          <li><strong>Sport-Spécifique:</strong> 5 min (préparation à l'effort)</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">PrÃ©vention des Blessures</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ã‰chauffement complÃ¨t avant tout effort</li>
          <li>Augmentation progressive de l'intensité</li>
          <li>Renforcement des zones faibles</li>
          <li>Récupération adéquate entre les séances</li>
          <li>Technique correcte avant la performance</li>
          <li>�0quipement adapté et en bon état</li>
          <li>�0coute de votre corps</li>
        </ul>
      </section>
      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">�x�  Conseil d'Expert</h3>
        <p>Les athlÃ¨tes professionnels passent autant de temps en rÃ©cupÃ©ration qu'en entraînement. C'est l'secret de la performance durable.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">ا�استشفاء ا�ر�`اض�`</h2>
        <p>ا�استشفاء �&�!�& �&ث� ا�تدر�`ب � فس�!. ف�!�� �`س�&ح ��عض�ات با�إص�اح�R �`حس�  ا�أداء ���`�&� ع ا�إصابات.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">أرْا�  ا�استشفاء ا�ث�اثة</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">1. ا�� ���& (60%)</h3>
            <p>7-9 ساعات ف�` ا���`�. �&عظ�& ا�استشفاء ��إص�اح ا�عض�ات �`حدث أث� اء ا�� ���&.</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">2. ا�تغذ�`ة (30%)</h3>
            <p>بر��ت�`� ات �إص�اح ا�عض�ات�R ْرب���!�`درات ��طا�ة�R ف�`تا�&�`� ات ���&عاد�  ��استشفاء.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">3. ا�استشفاء ا�� شط (10%)</h3>
            <p>ت�&د�`دات�R تد��`ْ�R حرْة. �`سرع إزا�ة ا�فض�ات ا�أ�`ض�`ة.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">ت�� �`ات ا�استشفاء</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>ت�&د�`دات</strong> (10-15 د��`�ة بعد ا��&ج�!��د)</li>
          <li><strong>تد��`ْ ر�`اض�`</strong> (24-48 ساعة بعد)</li>
          <li><strong>تد��`ْ ذات�`</strong> (أسط��ا� ة ا�رغ��ة)</li>
          <li><strong>ا�ع�اج با�بر��دة</strong> (ث�ج)</li>
          <li><strong>ا�ع�اج ا�ْ�!ربائ�`</strong> (استشفاء عض��`)</li>
          <li><strong>ا�ضغط</strong> (�&�ابس ضاغطة)</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">خطة ا�إح�&اء ا��&ث��0</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>ْارد�`�� خف�`ف:</strong> 5-10 د�ائ� (ز�`ادة درجة ا�حرارة)</li>
          <li><strong>حرْة د�`� ا�&�`ْ�`ة:</strong> 5-10 د�ائ� (تحض�`ر ا��&فاص�)</li>
          <li><strong>ت� ش�`ط عصب�` عض��`:</strong> 5 د�ائ� (إ�`�اظ ا�عض�ات)</li>
          <li><strong>ر�`اضة �&حددة:</strong> 5 د�ائ� (ا�تحض�`ر ���&ج�!��د)</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">�&� ع ا�إصابات</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>إح�&اء شا�&� �ب� ْ� �&ج�!��د</li>
          <li>ز�`ادة تدر�`ج�`ة ��شدة</li>
          <li>ت����`ة ا��&� اط� ا�ضع�`فة</li>
          <li>استشفاء ْافٍ ب�`�  ا�ج�سات</li>
          <li>ت�� �`ة صح�`حة �ب� ا�أداء</li>
          <li>�&عدات �&� اسبة ��بحا�ة ج�`دة</li>
          <li>ا�است�&اع �جسدْ</li>
        </ul>
      </section>
      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">�x�  � ص�`حة ا�خب�`ر</h3>
        <p>ا�ر�`اض�`���  ا��&حترف���  �`�ض���  ���تا�9 ف�` ا�استشفاء �&ث� ا�تدر�`ب. �!ذا �!�� سر ا�أداء ا��&ستدا�&.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'traumatologie-sport', titleFr: 'Traumatologie du Sport', titleAr: 'Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ©', icon: <Dumbbell size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© ÙˆØ§Ù„Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§', icon: <Dumbbell size={20} /> },
    { slug: 'arthrose-genou', titleFr: 'Arthrose du Genou', titleAr: 'Ø®Ø´ÙˆÙ†Ø© Ø§Ù„Ø±ÙƒØ¨Ø©', icon: <Dumbbell size={20} /> },
  ]
});

export default article10;



