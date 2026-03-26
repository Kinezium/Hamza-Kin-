import { createArticle } from './ArticleTemplate';
import { Stethoscope } from 'lucide-react';

const article5 = createArticle({
  slug: 'douleurs-epaules-capsulite',
  titleFr: 'Douleurs aux �0paules & Capsulite: Solutions',
  titleAr: 'أ��& ا�ْتف�`�  ��ا�ت�!اب ا�ْ�`س: ا�ح����',
  descriptionFr: 'Traitement de la capsulite rétractile et des douleurs d\'épaule. Exercices et thérapies pour retrouver la mobilité.',
  descriptionAr: 'ع�اج تج�&د ا�ْتف ��أ��& ا�أْتاف. ت�&ار�`�  ��ع�اجات �استعادة ا�حرْة.',
  keywordsFr: 'douleur épaule, capsulite, épaule gelée, kiné épaule, traitement épaule',
  keywordsAr: 'أ��& ا�ْتف, تج�&د ا�ْتف, خ�ع ا�ْتف, ع�اج ا�ْتف',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 د�ائ� �راءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Douleurs d'�0paule: Une Condition Fréquente</h2>
        <p>Les douleurs d'Ã©paule affectent 40% de la population Ã  un moment de leur vie. La capsulite rÃ©tractile (Ã©paule gelÃ©e) est l'une des causes les plus fréquentes et peut être extrêmement invalidante.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Types de Douleurs d'Ã‰paule</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Tendinite de la Coiffe:</strong> Inflammation des tendons</li>
          <li><strong>Capsulite RÃ©tractile:</strong> Raidissement de la capsule articulaire</li>
          <li><strong>Conflit Sous-acromial:</strong> Compression des tendons</li>
          <li><strong>Luxation d'�0paule:</strong> Sortie du bras de son articulation</li>
          <li><strong>Arthrose Acromioclaviculaire:</strong> Usure du cartilage</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Phases de la Capsulite Rétractile</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-bold">Phase 1: Inflammatoire (2-3 mois)</h3>
            <p>Douleur sans limitation majeure de la mobilité.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-bold">Phase 2: Raidissement (2-4 mois)</h3>
            <p>Perte progressive de mobilité avec douleur.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold">Phase 3: Résolution (6-12 mois)</h3>
            <p>Amélioration progressive de la mobilité.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Approche Thérapeutique</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Phase 1:</strong> Repos, glace, étirements doux</li>
          <li><strong>Phase 2:</strong> Mobilisation progressive, renforcement</li>
          <li><strong>Phase 3:</strong> Exercices complets de mobilité</li>
          <li><strong>Toute la durée:</strong> �0lectrothérapie antalgique</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Exercices à Domicile</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pendulum exercises (bras détendu)</li>
          <li>�0tirements du pendulum (boîte serviette)</li>
          <li>Rotations interne/externe à coude plié</li>
          <li>�0lévation du bras (progression douce)</li>
          <li>Renforcement de la coiffe (bande élastique)</li>
        </ul>
      </section>
      <section className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">�a� Important</h3>
        <p>La capsulite peut durer 12-18 mois sans traitement. Avec la kinésithérapie régulière, vous pouvez réduire ce temps de moitié.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">أ��& ا�أْتاف: حا�ة شائعة</h2>
        <p>�`ؤثر أ��& ا�ْتف ع��0 40% �&�  ا�سْا�  ف�` ���ت �&ا �&�  ح�`ات�!�&. تج�&د ا�ْتف �!�� أحد ا�أسباب ا�أْثر ش�`��عا�9 ���`�&ْ�  أ�  �`ْ���  �&ش�ا�9 جدا�9.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">أ� ��اع آ�ا�& ا�أْتاف</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>ا�ت�!اب أ��تار ا�ْفة:</strong> ا�ت�!اب ا�أ��تار</li>
          <li><strong>تج�&د ا�ْتف:</strong> ت�`بس ْ�`س ا��&فص�</li>
          <li><strong>ا�صدا�& تحت ا�أخر�&�`:</strong> ضغط ا�أ��تار</li>
          <li><strong>خ�ع ا�ْتف:</strong> خر��ج ا�عضد �&�  �&فص��!</li>
          <li><strong>خش��� ة ا��&فص� ا�تر����`:</strong> تآْ� ا�غضر��ف</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">�&راح� تج�&د ا�ْتف</h2>
        <div className="space-y-3">
          <div className="border-r-4 border-red-500 pr-4">
            <h3 className="font-bold">ا��&رح�ة 1: ا�ا�ت�!اب (2-3 أش�!ر)</h3>
            <p>أ��& بد���  تحد�`د ْب�`ر ��حرْة.</p>
          </div>
          <div className="border-r-4 border-orange-500 pr-4">
            <h3 className="font-bold">ا��&رح�ة 2: ا�ت�`بس (2-4 أش�!ر)</h3>
            <p>ف�دا�  تدر�`ج�` ��حرْة �&ع أ��&.</p>
          </div>
          <div className="border-r-4 border-blue-500 pr-4">
            <h3 className="font-bold">ا��&رح�ة 3: ا�تحس�  (6-12 ش�!ر)</h3>
            <p>تحس�  تدر�`ج�` ف�` ا�حرْة.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">ا�� �!ج ا�ع�اج�`</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>ا��&رح�ة 1:</strong> راحة�R ث�ج�R ت�&د�`دات �ط�`فة</li>
          <li><strong>ا��&رح�ة 2:</strong> حرْة تدر�`ج�`ة�R ت����`ة</li>
          <li><strong>ا��&رح�ة 3:</strong> ت�&ار�`�  حرْة ْا�&�ة</li>
          <li><strong>ط��ا� ا�فترة:</strong> ع�اج ْ�!ربائ�` �&سْ� </li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">ت�&ار�`�  �&� ز��`ة</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ت�&ار�`�  ا�ب� د��� (ذراع �&رتخ�`ة)</li>
          <li>ت�&د�`دات ا�ب� د��� (�&ع ا��&� شفة)</li>
          <li>د��را�  داخ��`/خارج�` ��ا�ْ��ع �&ث� �`</li>
          <li>رفع ا�ذراع (تط��ر �ط�`ف)</li>
          <li>ت����`ة ا�ْفة (شر�`ط �&ر� )</li>
        </ul>
      </section>
      <section className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">�a� �&�!�&</h3>
        <p>�`�&ْ�  أ�  �`ست�&ر تج�&د ا�ْتف 12-18 ش�!را�9 بد���  ع�اج. �&ع ا�تر���`ض ا�طب�`�R �`�&ْ� ْ ت���`� �!ذا ا����ت ب�&�دار ا�� صف.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'traumatologie-sport', titleFr: 'Traumatologie du Sport', titleAr: 'Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ©', icon: <Stethoscope size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© ÙˆØ§Ù„Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§', icon: <Stethoscope size={20} /> },
    { slug: 'lombalgie-cervicalgie', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'Ø¢Ù„Ø§Ù… Ø§Ù„Ø¸Ù‡Ø± ÙˆØ§Ù„Ø±Ù‚Ø¨Ø©', icon: <Stethoscope size={20} /> },
  ]
});

export default article5;



