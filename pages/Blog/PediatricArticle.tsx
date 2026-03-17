import { createArticle } from './ArticleTemplate';
import { Baby } from 'lucide-react';

const article7 = createArticle({
  slug: 'kine-pediatrique',
  titleFr: 'PhysiothÃ©rapie PÃ©diatrique: DÃ©veloppement Normal',
  titleAr: 'Ø§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠ Ù„Ù„Ø£Ø·ÙØ§Ù„: Ø§Ù„Ù†Ù…Ùˆ Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠ',
  descriptionFr: 'DÃ©veloppement psychomoteur de l\'enfant. Quand consulter un kinÃ© pÃ©diatrique. Exercices et jeux de rÃ©Ã©ducation.',
  descriptionAr: 'Ø§Ù„Ù†Ù…Ùˆ Ø§Ù„Ù†ÙØ³Ø­Ø±ÙƒÙŠ Ù„Ù„Ø·ÙÙ„. Ù…ØªÙ‰ ØªØ³ØªØ´ÙŠØ± Ù…Ø±ÙˆØ¶Ø§Ù‹ Ù…ØªØ®ØµØµØ§Ù‹ Ù„Ù„Ø£Ø·ÙØ§Ù„. ØªÙ…Ø§Ø±ÙŠÙ† ÙˆØ£Ù„Ø¹Ø§Ø¨ ØªØ£Ù‡ÙŠÙ„ÙŠØ©.',
  keywordsFr: 'kinÃ© enfant, retard dÃ©veloppement, bÃ©bÃ©, motricitÃ© fine, motricitÃ© globale',
  keywordsAr: 'Ù…Ø±ÙˆØ¶ Ø£Ø·ÙØ§Ù„, ØªØ£Ø®Ø± Ø§Ù„Ù†Ù…Ùˆ, Ø·ÙÙ„, Ù…Ù‡Ø§Ø±Ø§Øª Ø­Ø±ÙƒÙŠØ©',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 Ø¯Ù‚Ø§Ø¦Ù‚ Ù‚Ø±Ø§Ø¡Ø©',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">PhysiothÃ©rapie PÃ©diatrique</h2>
        <p>Le dÃ©veloppement psychomoteur de l'enfant est crucial. Identifiez tÃ´t les retards de dÃ©veloppement pour une intervention prÃ©coce.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Jalons du DÃ©veloppement Normal</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>3 mois:</strong> ContrÃ´le de la tÃªte</li>
          <li><strong>6 mois:</strong> Assis sans appui</li>
          <li><strong>9 mois:</strong> Rampage ou crawling</li>
          <li><strong>12 mois:</strong> Marche avec appui</li>
          <li><strong>24 mois:</strong> Marche autonome stable</li>
          <li><strong>3 ans:</strong> Courir, sauter, grimper</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Signes d'Alerte</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Retard dans les Ã©tapes de dÃ©veloppement</li>
          <li>AsymÃ©trie postulaire ou du mouvement</li>
          <li>TonacitÃ© musculaire anormale (trop raide ou trop mou)</li>
          <li>DifficultÃ© de coordination</li>
          <li>Positionnement anormal persistant</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Conditions TraitÃ©es</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>InfirmitÃ© motrice cÃ©rÃ©brale (IMC)</li>
          <li>Spina bifida et malformations</li>
          <li>Torticolis congÃ©nital</li>
          <li>PlagiocÃ©phalie (asymÃ©trie du crÃ¢ne)</li>
          <li>Retard dÃ©veloppement psychomotor</li>
          <li>Dysplasie de hanche</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Approche ThÃ©rapeutique</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Jeu ThÃ©rapeutique:</strong> Rendre l'exercice amusant</li>
          <li><strong>Mobilisation Douce:</strong> AmÃ©liorer la mobilitÃ©</li>
          <li><strong>Renforcement Musculaire:</strong> Via les jeux</li>
          <li><strong>Ã‰ducation Parentale:</strong> Exercices Ã  domicile</li>
        </ol>
      </section>
      <section className="bg-pink-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">ðŸ‘¶ Conseil Important</h3>
        <p>L'intervention prÃ©coce peut changer la trajectoire de dÃ©veloppement. Si vous notez un retard, consultez nos pÃ©diatres kinÃ©.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠ Ù„Ù„Ø£Ø·ÙØ§Ù„</h2>
        <p>Ø§Ù„Ù†Ù…Ùˆ Ø§Ù„Ù†ÙØ³Ø­Ø±ÙƒÙŠ Ù„Ù„Ø·ÙÙ„ Ø­Ø§Ø³Ù…. ØªØ­Ø¯ÙŠØ¯ ØªØ£Ø®Ø± Ø§Ù„Ù†Ù…Ùˆ Ù…Ø¨ÙƒØ±Ø§Ù‹ Ù„Ù„ØªØ¯Ø®Ù„ Ø§Ù„Ù…Ø¨ÙƒØ±.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ù…Ø¹Ø§Ù„Ù… Ø§Ù„Ù†Ù…Ùˆ Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠØ©</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>3 Ø£Ø´Ù‡Ø±:</strong> Ø§Ù„ØªØ­ÙƒÙ… Ø¨Ø§Ù„Ø±Ø£Ø³</li>
          <li><strong>6 Ø£Ø´Ù‡Ø±:</strong> Ø§Ù„Ø¬Ù„ÙˆØ³ Ø¨Ø¯ÙˆÙ† Ø¯Ø¹Ù…</li>
          <li><strong>9 Ø£Ø´Ù‡Ø±:</strong> Ø§Ù„Ø²Ø­Ù</li>
          <li><strong>12 Ø´Ù‡Ø±Ø§Ù‹:</strong> Ø§Ù„Ù…Ø´ÙŠ Ø¨Ø¯Ø¹Ù…</li>
          <li><strong>24 Ø´Ù‡Ø±Ø§Ù‹:</strong> Ù…Ø´ÙŠ Ù…Ø³ØªÙ‚Ù„ Ù…Ø³ØªÙ‚Ø±</li>
          <li><strong>3 Ø³Ù†ÙˆØ§Øª:</strong> Ø§Ù„Ø±ÙƒØ¶ ÙˆØ§Ù„Ù‚ÙØ² ÙˆØ§Ù„ØªØ³Ù„Ù‚</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ù„ØªØ­Ø°ÙŠØ±</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ØªØ£Ø®Ø± ÙÙŠ Ù…Ø±Ø§Ø­Ù„ Ø§Ù„Ù†Ù…Ùˆ</li>
          <li>Ø¹Ø¯Ù… ØªÙ…Ø§Ø«Ù„ Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© Ø£Ùˆ Ø§Ù„Ø­Ø±ÙƒØ©</li>
          <li>ØªÙˆØªØ± Ø¹Ø¶Ù„ÙŠ ØºÙŠØ± Ø·Ø¨ÙŠØ¹ÙŠ (ØµÙ„Ø¨ Ø£Ùˆ Ù…Ø±ØªØ®ÙŠ Ø¬Ø¯Ø§Ù‹)</li>
          <li>ØµØ¹ÙˆØ¨Ø© ÙÙŠ Ø§Ù„ØªÙ†Ø³ÙŠÙ‚</li>
          <li>ÙˆØ¶Ø¹ÙŠØ© ØºÙŠØ± Ø·Ø¨ÙŠØ¹ÙŠØ© Ù…Ø³ØªÙ…Ø±Ø©</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ø­Ø§Ù„Ø§Øª Ø§Ù„Ù…Ø¹Ø§Ù„Ø¬Ø©</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ø§Ù„Ø´Ù„Ù„ Ø§Ù„Ø¯Ù…Ø§ØºÙŠ</li>
          <li>Ø§Ù„Ù‚ÙŠÙ„Ø© Ø§Ù„Ø³Ø­Ø§Ø¦ÙŠØ© ÙˆØ§Ù„ØªØ´ÙˆÙ‡Ø§Øª</li>
          <li>ØªØ´Ù†Ø¬ Ø§Ù„Ø±Ù‚Ø¨Ø© Ø§Ù„Ø®Ù„Ù‚ÙŠ</li>
          <li>Ø¹Ø¯Ù… ØªÙ…Ø§Ø«Ù„ Ø§Ù„Ø±Ø£Ø³</li>
          <li>ØªØ£Ø®Ø± Ø§Ù„Ù†Ù…Ùˆ Ø§Ù„Ù†ÙØ³Ø­Ø±ÙƒÙŠ</li>
          <li>Ø®Ù„Ù„ ØªØ·ÙˆØ± Ø§Ù„ÙˆØ±Ùƒ</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ù†Ù‡Ø¬ Ø§Ù„Ø¹Ù„Ø§Ø¬ÙŠ</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Ø§Ù„Ù„Ø¹Ø¨ Ø§Ù„Ø¹Ù„Ø§Ø¬ÙŠ:</strong> Ø¬Ø¹Ù„ Ø§Ù„ØªÙ…Ø±ÙŠÙ† Ù…Ù…ØªØ¹Ø§Ù‹</li>
          <li><strong>ØªØ­Ø±ÙŠÙƒ Ù„Ø·ÙŠÙ:</strong> ØªØ­Ø³ÙŠÙ† Ø§Ù„Ø­Ø±ÙƒØ©</li>
          <li><strong>ØªÙ‚ÙˆÙŠØ© Ø¹Ø¶Ù„ÙŠØ©:</strong> Ø¹Ø¨Ø± Ø§Ù„Ø£Ù„Ø¹Ø§Ø¨</li>
          <li><strong>ØªØ¹Ù„ÙŠÙ… Ø§Ù„Ø¢Ø¨Ø§Ø¡:</strong> ØªÙ…Ø§Ø±ÙŠÙ† Ù…Ù†Ø²Ù„ÙŠØ©</li>
        </ol>
      </section>
      <section className="bg-pink-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">ðŸ‘¶ Ù†ØµÙŠØ­Ø© Ù…Ù‡Ù…Ø©</h3>
        <p>Ø§Ù„ØªØ¯Ø®Ù„ Ø§Ù„Ù…Ø¨ÙƒØ± ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠØºÙŠØ± Ù…Ø³Ø§Ø± Ø§Ù„Ù†Ù…Ùˆ. Ø¥Ø°Ø§ Ù„Ø§Ø­Ø¸Øª ØªØ£Ø®Ø±Ø§Ù‹ØŒ Ø§Ø³ØªØ´Ø± Ù…ØªØ®ØµØµÙŠÙ†Ø§ ÙÙŠ Ø§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠ Ù„Ù„Ø£Ø·ÙØ§Ù„.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'recuperation-sportive-prevention-blessures', titleFr: 'RÃ©cupÃ©ration Sportive', titleAr: 'Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø±ÙŠØ§Ø¶ÙŠ', icon: <Baby size={20} /> },
    { slug: 'readaptation-post-avc', titleFr: 'RÃ©adaptation Post-AVC', titleAr: 'Ø¥Ø¹Ø§Ø¯Ø© ØªØ£Ù‡ÙŠÙ„ Ù…Ø§ Ø¨Ø¹Ø¯ Ø§Ù„Ø¬Ù„Ø·Ø©', icon: <Baby size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© ÙˆØ§Ù„Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§', icon: <Baby size={20} /> },
  ]
});

export default article7;



