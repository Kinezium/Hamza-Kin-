import { createArticle } from './ArticleTemplate';
import { Stethoscope } from 'lucide-react';

const article5 = createArticle({
  slug: 'douleurs-epaules-capsulite',
  titleFr: 'Douleurs aux Ã‰paules & Capsulite: Solutions',
  titleAr: 'Ø£Ù„Ù… Ø§Ù„ÙƒØªÙÙŠÙ† ÙˆØ§Ù„ØªÙ‡Ø§Ø¨ Ø§Ù„ÙƒÙŠØ³: Ø§Ù„Ø­Ù„ÙˆÙ„',
  descriptionFr: 'Traitement de la capsulite rÃ©tractile et des douleurs d\'Ã©paule. Exercices et thÃ©rapies pour retrouver la mobilitÃ©.',
  descriptionAr: 'Ø¹Ù„Ø§Ø¬ ØªØ¬Ù…Ø¯ Ø§Ù„ÙƒØªÙ ÙˆØ£Ù„Ù… Ø§Ù„Ø£ÙƒØªØ§Ù. ØªÙ…Ø§Ø±ÙŠÙ† ÙˆØ¹Ù„Ø§Ø¬Ø§Øª Ù„Ø§Ø³ØªØ¹Ø§Ø¯Ø© Ø§Ù„Ø­Ø±ÙƒØ©.',
  keywordsFr: 'douleur Ã©paule, capsulite, Ã©paule gelÃ©e, kinÃ© Ã©paule, traitement Ã©paule',
  keywordsAr: 'Ø£Ù„Ù… Ø§Ù„ÙƒØªÙ, ØªØ¬Ù…Ø¯ Ø§Ù„ÙƒØªÙ, Ø®Ù„Ø¹ Ø§Ù„ÙƒØªÙ, Ø¹Ù„Ø§Ø¬ Ø§Ù„ÙƒØªÙ',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 Ø¯Ù‚Ø§Ø¦Ù‚ Ù‚Ø±Ø§Ø¡Ø©',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Douleurs d'Ã‰paule: Une Condition FrÃ©quente</h2>
        <p>Les douleurs d'Ã©paule affectent 40% de la population Ã  un moment de leur vie. La capsulite rÃ©tractile (Ã©paule gelÃ©e) est l'une des causes les plus frÃ©quentes et peut Ãªtre extrÃªmement invalidante.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Types de Douleurs d'Ã‰paule</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Tendinite de la Coiffe:</strong> Inflammation des tendons</li>
          <li><strong>Capsulite RÃ©tractile:</strong> Raidissement de la capsule articulaire</li>
          <li><strong>Conflit Sous-acromial:</strong> Compression des tendons</li>
          <li><strong>Luxation d'Ã‰paule:</strong> Sortie du bras de son articulation</li>
          <li><strong>Arthrose Acromioclaviculaire:</strong> Usure du cartilage</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Phases de la Capsulite RÃ©tractile</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-bold">Phase 1: Inflammatoire (2-3 mois)</h3>
            <p>Douleur sans limitation majeure de la mobilitÃ©.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-bold">Phase 2: Raidissement (2-4 mois)</h3>
            <p>Perte progressive de mobilitÃ© avec douleur.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold">Phase 3: RÃ©solution (6-12 mois)</h3>
            <p>AmÃ©lioration progressive de la mobilitÃ©.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Approche ThÃ©rapeutique</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Phase 1:</strong> Repos, glace, Ã©tirements doux</li>
          <li><strong>Phase 2:</strong> Mobilisation progressive, renforcement</li>
          <li><strong>Phase 3:</strong> Exercices complets de mobilitÃ©</li>
          <li><strong>Toute la durÃ©e:</strong> Ã‰lectrothÃ©rapie antalgique</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Exercices Ã  Domicile</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pendulum exercises (bras dÃ©tendu)</li>
          <li>Ã‰tirements du pendulum (boÃ®te serviette)</li>
          <li>Rotations interne/externe Ã  coude pliÃ©</li>
          <li>Ã‰lÃ©vation du bras (progression douce)</li>
          <li>Renforcement de la coiffe (bande Ã©lastique)</li>
        </ul>
      </section>
      <section className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">âš¡ Important</h3>
        <p>La capsulite peut durer 12-18 mois sans traitement. Avec la kinÃ©sithÃ©rapie rÃ©guliÃ¨re, vous pouvez rÃ©duire ce temps de moitiÃ©.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø£Ù„Ù… Ø§Ù„Ø£ÙƒØªØ§Ù: Ø­Ø§Ù„Ø© Ø´Ø§Ø¦Ø¹Ø©</h2>
        <p>ÙŠØ¤Ø«Ø± Ø£Ù„Ù… Ø§Ù„ÙƒØªÙ Ø¹Ù„Ù‰ 40% Ù…Ù† Ø§Ù„Ø³ÙƒØ§Ù† ÙÙŠ ÙˆÙ‚Øª Ù…Ø§ Ù…Ù† Ø­ÙŠØ§ØªÙ‡Ù…. ØªØ¬Ù…Ø¯ Ø§Ù„ÙƒØªÙ Ù‡Ùˆ Ø£Ø­Ø¯ Ø§Ù„Ø£Ø³Ø¨Ø§Ø¨ Ø§Ù„Ø£ÙƒØ«Ø± Ø´ÙŠÙˆØ¹Ø§Ù‹ ÙˆÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠÙƒÙˆÙ† Ù…Ø´Ù„Ø§Ù‹ Ø¬Ø¯Ø§Ù‹.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø£Ù†ÙˆØ§Ø¹ Ø¢Ù„Ø§Ù… Ø§Ù„Ø£ÙƒØªØ§Ù</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ø§Ù„ØªÙ‡Ø§Ø¨ Ø£ÙˆØªØ§Ø± Ø§Ù„ÙƒÙØ©:</strong> Ø§Ù„ØªÙ‡Ø§Ø¨ Ø§Ù„Ø£ÙˆØªØ§Ø±</li>
          <li><strong>ØªØ¬Ù…Ø¯ Ø§Ù„ÙƒØªÙ:</strong> ØªÙŠØ¨Ø³ ÙƒÙŠØ³ Ø§Ù„Ù…ÙØµÙ„</li>
          <li><strong>Ø§Ù„ØµØ¯Ø§Ù… ØªØ­Øª Ø§Ù„Ø£Ø®Ø±Ù…ÙŠ:</strong> Ø¶ØºØ· Ø§Ù„Ø£ÙˆØªØ§Ø±</li>
          <li><strong>Ø®Ù„Ø¹ Ø§Ù„ÙƒØªÙ:</strong> Ø®Ø±ÙˆØ¬ Ø§Ù„Ø¹Ø¶Ø¯ Ù…Ù† Ù…ÙØµÙ„Ù‡</li>
          <li><strong>Ø®Ø´ÙˆÙ†Ø© Ø§Ù„Ù…ÙØµÙ„ Ø§Ù„ØªØ±Ù‚ÙˆÙŠ:</strong> ØªØ¢ÙƒÙ„ Ø§Ù„ØºØ¶Ø±ÙˆÙ</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ù…Ø±Ø§Ø­Ù„ ØªØ¬Ù…Ø¯ Ø§Ù„ÙƒØªÙ</h2>
        <div className="space-y-3">
          <div className="border-r-4 border-red-500 pr-4">
            <h3 className="font-bold">Ø§Ù„Ù…Ø±Ø­Ù„Ø© 1: Ø§Ù„Ø§Ù„ØªÙ‡Ø§Ø¨ (2-3 Ø£Ø´Ù‡Ø±)</h3>
            <p>Ø£Ù„Ù… Ø¨Ø¯ÙˆÙ† ØªØ­Ø¯ÙŠØ¯ ÙƒØ¨ÙŠØ± Ù„Ù„Ø­Ø±ÙƒØ©.</p>
          </div>
          <div className="border-r-4 border-orange-500 pr-4">
            <h3 className="font-bold">Ø§Ù„Ù…Ø±Ø­Ù„Ø© 2: Ø§Ù„ØªÙŠØ¨Ø³ (2-4 Ø£Ø´Ù‡Ø±)</h3>
            <p>ÙÙ‚Ø¯Ø§Ù† ØªØ¯Ø±ÙŠØ¬ÙŠ Ù„Ù„Ø­Ø±ÙƒØ© Ù…Ø¹ Ø£Ù„Ù….</p>
          </div>
          <div className="border-r-4 border-blue-500 pr-4">
            <h3 className="font-bold">Ø§Ù„Ù…Ø±Ø­Ù„Ø© 3: Ø§Ù„ØªØ­Ø³Ù† (6-12 Ø´Ù‡Ø±)</h3>
            <p>ØªØ­Ø³Ù† ØªØ¯Ø±ÙŠØ¬ÙŠ ÙÙŠ Ø§Ù„Ø­Ø±ÙƒØ©.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ù†Ù‡Ø¬ Ø§Ù„Ø¹Ù„Ø§Ø¬ÙŠ</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Ø§Ù„Ù…Ø±Ø­Ù„Ø© 1:</strong> Ø±Ø§Ø­Ø©ØŒ Ø«Ù„Ø¬ØŒ ØªÙ…Ø¯ÙŠØ¯Ø§Øª Ù„Ø·ÙŠÙØ©</li>
          <li><strong>Ø§Ù„Ù…Ø±Ø­Ù„Ø© 2:</strong> Ø­Ø±ÙƒØ© ØªØ¯Ø±ÙŠØ¬ÙŠØ©ØŒ ØªÙ‚ÙˆÙŠØ©</li>
          <li><strong>Ø§Ù„Ù…Ø±Ø­Ù„Ø© 3:</strong> ØªÙ…Ø§Ø±ÙŠÙ† Ø­Ø±ÙƒØ© ÙƒØ§Ù…Ù„Ø©</li>
          <li><strong>Ø·ÙˆØ§Ù„ Ø§Ù„ÙØªØ±Ø©:</strong> Ø¹Ù„Ø§Ø¬ ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠ Ù…Ø³ÙƒÙ†</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">ØªÙ…Ø§Ø±ÙŠÙ† Ù…Ù†Ø²Ù„ÙŠØ©</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ØªÙ…Ø§Ø±ÙŠÙ† Ø§Ù„Ø¨Ù†Ø¯ÙˆÙ„ (Ø°Ø±Ø§Ø¹ Ù…Ø±ØªØ®ÙŠØ©)</li>
          <li>ØªÙ…Ø¯ÙŠØ¯Ø§Øª Ø§Ù„Ø¨Ù†Ø¯ÙˆÙ„ (Ù…Ø¹ Ø§Ù„Ù…Ù†Ø´ÙØ©)</li>
          <li>Ø¯ÙˆØ±Ø§Ù† Ø¯Ø§Ø®Ù„ÙŠ/Ø®Ø§Ø±Ø¬ÙŠ ÙˆØ§Ù„ÙƒÙˆØ¹ Ù…Ø«Ù†ÙŠ</li>
          <li>Ø±ÙØ¹ Ø§Ù„Ø°Ø±Ø§Ø¹ (ØªØ·ÙˆØ± Ù„Ø·ÙŠÙ)</li>
          <li>ØªÙ‚ÙˆÙŠØ© Ø§Ù„ÙƒÙØ© (Ø´Ø±ÙŠØ· Ù…Ø±Ù†)</li>
        </ul>
      </section>
      <section className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">âš¡ Ù…Ù‡Ù…</h3>
        <p>ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠØ³ØªÙ…Ø± ØªØ¬Ù…Ø¯ Ø§Ù„ÙƒØªÙ 12-18 Ø´Ù‡Ø±Ø§Ù‹ Ø¨Ø¯ÙˆÙ† Ø¹Ù„Ø§Ø¬. Ù…Ø¹ Ø§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠØŒ ÙŠÙ…ÙƒÙ†Ùƒ ØªÙ‚Ù„ÙŠÙ„ Ù‡Ø°Ø§ Ø§Ù„ÙˆÙ‚Øª Ø¨Ù…Ù‚Ø¯Ø§Ø± Ø§Ù„Ù†ØµÙ.</p>
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



