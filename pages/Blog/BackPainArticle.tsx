import { createArticle } from './ArticleTemplate';
import { ArrowUpDown } from 'lucide-react';

const article2 = createArticle({
  slug: 'lombalgie-cervicalgie',
  titleFr: 'Lombalgie & Cervicalgie: Solutions Efficaces',
  titleAr: 'Ø¢Ù„Ø§Ù… Ø§Ù„Ø¸Ù‡Ø± ÙˆØ§Ù„Ø±Ù‚Ø¨Ø©: Ø­Ù„ÙˆÙ„ ÙØ¹Ø§Ù„Ø©',
  descriptionFr: 'Guide complet sur les lombalgies et cervicalgies. DÃ©couvrez nos techniques de traitement Ã  Casablanca pour soulager votre dos et votre cou.',
  descriptionAr: 'Ø¯Ù„ÙŠÙ„ Ø´Ø§Ù…Ù„ Ø¹Ù† Ø¢Ù„Ø§Ù… Ø§Ù„Ø¸Ù‡Ø± ÙˆØ§Ù„Ø±Ù‚Ø¨Ø©. Ø§ÙƒØªØ´Ù ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„Ø¹Ù„Ø§Ø¬ Ù„Ø¯ÙŠÙ†Ø§ ÙÙŠ Ø§Ù„Ø¯Ø§Ø± Ø§Ù„Ø¨ÙŠØ¶Ø§Ø¡ Ù„ØªØ®ÙÙŠÙ Ø¢Ù„Ø§Ù… Ø§Ù„Ø¸Ù‡Ø± ÙˆØ§Ù„Ø±Ù‚Ø¨Ø©.',
  keywordsFr: 'lombalgie, cervicalgie, mal de dos, kinÃ© casablanca, traitement dos',
  keywordsAr: 'Ø¢Ù„Ø§Ù… Ø£Ø³ÙÙ„ Ø§Ù„Ø¸Ù‡Ø±, Ø£Ù„Ù… Ø§Ù„Ø±Ù‚Ø¨Ø©, Ø¹Ù„Ø§Ø¬ Ø§Ù„Ø¸Ù‡Ø±, Ù…Ø±ÙˆØ¶ Ø·Ø¨ÙŠ',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 Ø¯Ù‚Ø§Ø¦Ù‚ Ù‚Ø±Ø§Ø¡Ø©',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Lombalgie: Le Mal Moderne</h2>
        <p>La lombologie reprÃ©sente 80% des douleurs de dos Ã  Casablanca. Elle est souvent causÃ©e par le stress, la sÃ©dentaritÃ© et le travail devant l'Ã©cran. La cervicalgie affecte Ã©galement une grande partie de la population active.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Causes Principales</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mauvaise posture au travail</li>
          <li>Manque d'activitÃ© physique rÃ©guliÃ¨re</li>
          <li>Stress et tension musculaire</li>
          <li>Arthrose et dÃ©gÃ©nÃ©rescence discale</li>
          <li>Contractures musculaires chroniques</li>
          <li>AccÃ©lÃ©ration brusque (coup du lapin)</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">SymptÃ´mes Ã  ReconnaÃ®tre</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Raideur matinale du dos ou du cou</li>
          <li>Blocage brutal (lumbago)</li>
          <li>Douleur irradiant vers les Ã©paules</li>
          <li>Contractures musculaires visibles</li>
          <li>Douleur accentuÃ©e par le stress</li>
          <li>Limitation de la mobilitÃ©</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Notre Approche ThÃ©rapeutique</h2>
        <p>Ã€ Centre Chnider, nous proposons une approche holistique :</p>
        <ol className="list-decimal pl-6 space-y-2 mt-3">
          <li><strong>Ã‰valuation ComplÃ¨te:</strong> Diagnostic prÃ©cis de la cause</li>
          <li><strong>ThÃ©rapie Manuelle:</strong> Massage thÃ©rapeutique et mobilisation</li>
          <li><strong>Correction Posturale:</strong> AmÃ©lioration de l'ergonomie</li>
          <li><strong>Renforcement Musculaire:</strong> Stabilisation du core</li>
          <li><strong>DehyatothÃ©rapie:</strong> Relaxation musculaire</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Exercices Ã  Domicile</h2>
        <p>Pour accÃ©lÃ©rer la rÃ©cupÃ©ration :</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Exercices de gainage 10 min/jour</li>
          <li>Pauses actives toutes les heures</li>
          <li>Ã‰tirements cervicaux et lombaires</li>
          <li>Marche quotidienne 30 minutes</li>
          <li>Yoga ou pilates 2-3 fois/semaine</li>
        </ul>
      </section>
      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">âœ… PrÃ©vention</h3>
        <p>Ajustez votre poste de travail, prenez des pauses rÃ©guliÃ¨res et pratiquez une activitÃ© physique modÃ©rÃ©e. Une posture correcte peut prÃ©venir 70% des lombalgies.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ø¢Ù„Ø§Ù… Ø£Ø³ÙÙ„ Ø§Ù„Ø¸Ù‡Ø±: Ø§Ù„Ù…Ø±Ø¶ Ø§Ù„Ø­Ø¯ÙŠØ«</h2>
        <p>ØªÙ…Ø«Ù„ Ø¢Ù„Ø§Ù… Ø£Ø³ÙÙ„ Ø§Ù„Ø¸Ù‡Ø± 80% Ù…Ù† Ø­Ø§Ù„Ø§Øª Ø£Ù„Ù… Ø§Ù„Ø¸Ù‡Ø± Ø¨Ø§Ù„Ø¯Ø§Ø± Ø§Ù„Ø¨ÙŠØ¶Ø§Ø¡. ØºØ§Ù„Ø¨Ø§Ù‹ Ù…Ø§ ØªÙƒÙˆÙ† Ù†Ø§Ø¬Ù…Ø© Ø¹Ù† Ø§Ù„Ø¥Ø¬Ù‡Ø§Ø¯ ÙˆØ§Ù„Ø®Ù…ÙˆÙ„ ÙˆÙ‚Ø¶Ø§Ø¡ Ø§Ù„ÙˆÙ‚Øª Ø£Ù…Ø§Ù… Ø§Ù„Ø´Ø§Ø´Ø©. ÙŠØ¤Ø«Ø± Ø£Ù„Ù… Ø§Ù„Ø±Ù‚Ø¨Ø© Ø£ÙŠØ¶Ø§Ù‹ Ø¹Ù„Ù‰ Ø¬Ø²Ø¡ ÙƒØ¨ÙŠØ± Ù…Ù† Ø§Ù„Ø³ÙƒØ§Ù† Ø§Ù„Ù†Ø´Ø·ÙŠÙ†.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ø£Ø³Ø¨Ø§Ø¨ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© Ø§Ù„Ø®Ø§Ø·Ø¦Ø© ÙÙŠ Ø§Ù„Ø¹Ù…Ù„</li>
          <li>Ø¹Ø¯Ù… Ù…Ù…Ø§Ø±Ø³Ø© Ø§Ù„Ù†Ø´Ø§Ø· Ø§Ù„Ø¨Ø¯Ù†ÙŠ Ø¨Ø§Ù†ØªØ¸Ø§Ù…</li>
          <li>Ø§Ù„Ø¥Ø¬Ù‡Ø§Ø¯ ÙˆØ§Ù„ØªÙˆØªØ± Ø§Ù„Ø¹Ø¶Ù„ÙŠ</li>
          <li>Ø®Ø´ÙˆÙ†Ø© Ø§Ù„Ù…ÙØ§ØµÙ„</li>
          <li>Ø§Ù„ØªØ´Ù†Ø¬Ø§Øª Ø§Ù„Ø¹Ø¶Ù„ÙŠØ© Ø§Ù„Ù…Ø²Ù…Ù†Ø©</li>
          <li>Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª ÙˆØ§Ù„Ø­ÙˆØ§Ø¯Ø«</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ø£Ø¹Ø±Ø§Ø¶ Ø§Ù„ØªÙŠ ÙŠØ¬Ø¨ Ø§Ù„ØªØ¹Ø±Ù Ø¹Ù„ÙŠÙ‡Ø§</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ØªÙŠØ¨Ø³ ØµØ¨Ø§Ø­ÙŠ ÙÙŠ Ø§Ù„Ø¸Ù‡Ø± Ø£Ùˆ Ø§Ù„Ø±Ù‚Ø¨Ø©</li>
          <li>Ø§Ù†Ø³Ø¯Ø§Ø¯ Ù…ÙØ§Ø¬Ø¦ (Ù„ÙˆÙ…Ø¨Ø§ØºÙˆ)</li>
          <li>Ø£Ù„Ù… ÙŠÙ…ØªØ¯ Ù†Ø­Ùˆ Ø§Ù„ÙƒØªÙÙŠÙ†</li>
          <li>ØªØ´Ù†Ø¬Ø§Øª Ø¹Ø¶Ù„ÙŠØ© ÙˆØ§Ø¶Ø­Ø©</li>
          <li>Ø£Ù„Ù… ÙŠØªÙØ§Ù‚Ù… Ø¨Ø§Ù„ØªÙˆØªØ±</li>
          <li>ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ø­Ø±ÙƒØ©</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ù†Ù‡Ø¬Ù†Ø§ Ø§Ù„Ø¹Ù„Ø§Ø¬ÙŠ</h2>
        <p>ÙÙŠ Ù…Ø±ÙƒØ² Ø§Ø´Ù†ÙŠØ¯Ø±ØŒ Ù†Ù‚Ø¯Ù… Ù†Ù‡Ø¬Ø§Ù‹ Ø´Ø§Ù…Ù„Ø§Ù‹:</p>
        <ol className="list-decimal pl-6 space-y-2 mt-3">
          <li><strong>Ø§Ù„ØªÙ‚ÙŠÙŠÙ… Ø§Ù„ÙƒØ§Ù…Ù„:</strong> ØªØ´Ø®ÙŠØµ Ø¯Ù‚ÙŠÙ‚ Ù„Ù„Ø³Ø¨Ø¨</li>
          <li><strong>Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„ÙŠØ¯ÙˆÙŠ:</strong> ØªØ¯Ù„ÙŠÙƒ Ø¹Ù„Ø§Ø¬ÙŠ ÙˆØªØ­Ø±ÙŠÙƒ</li>
          <li><strong>ØªØµØ­ÙŠØ­ Ø§Ù„ÙˆØ¶Ø¹ÙŠØ©:</strong> ØªØ­Ø³ÙŠÙ† Ø§Ù„Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§</li>
          <li><strong>ØªÙ‚ÙˆÙŠØ© Ø§Ù„Ø¹Ø¶Ù„Ø§Øª:</strong> ØªØ«Ø¨ÙŠØª Ø§Ù„Ø¬Ø°Ø¹</li>
          <li><strong>Ø§Ù„Ø§Ø³ØªØ±Ø®Ø§Ø¡:</strong> ØªØ®ÙÙŠÙ Ø§Ù„ØªÙˆØªØ± Ø§Ù„Ø¹Ø¶Ù„ÙŠ</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">ØªÙ…Ø§Ø±ÙŠÙ† Ù…Ù†Ø²Ù„ÙŠØ©</h2>
        <p>Ù„ØªØ³Ø±ÙŠØ¹ Ø§Ù„ØªØ¹Ø§ÙÙŠ:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>ØªÙ…Ø§Ø±ÙŠÙ† ØªÙ‚ÙˆÙŠØ© Ø§Ù„Ø¬Ø°Ø¹ 10 Ø¯Ù‚Ø§Ø¦Ù‚/ÙŠÙˆÙ…</li>
          <li>Ø§Ø³ØªØ±Ø§Ø­Ø§Øª Ù†Ø´Ø·Ø© ÙƒÙ„ Ø³Ø§Ø¹Ø©</li>
          <li>ØªÙ…Ø¯ÙŠØ¯Ø§Øª Ù„Ù„Ø±Ù‚Ø¨Ø© ÙˆØ§Ù„Ø¸Ù‡Ø±</li>
          <li>Ø§Ù„Ù…Ø´ÙŠ Ø§Ù„ÙŠÙˆÙ…ÙŠ 30 Ø¯Ù‚ÙŠÙ‚Ø©</li>
          <li>Ø§Ù„ÙŠÙˆØºØ§ Ø£Ùˆ Ø¨ÙŠÙ„Ø§ØªÙŠØ³ 2-3 Ù…Ø±Ø§Øª/Ø£Ø³Ø¨ÙˆØ¹</li>
        </ul>
      </section>
      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">âœ… Ø§Ù„ÙˆÙ‚Ø§ÙŠØ©</h3>
        <p>Ø§Ø¶Ø¨Ø· Ù…ÙƒØ§Ù† Ø¹Ù…Ù„ÙƒØŒ Ø®Ø° ÙØªØ±Ø§Øª Ø±Ø§Ø­Ø© Ù…Ù†ØªØ¸Ù…Ø© ÙˆØ¬Ø±Ø¨ Ù†Ø´Ø§Ø·Ø§Ù‹ Ø¨Ø¯Ù†ÙŠØ§Ù‹ Ù…Ø¹ØªØ¯Ù„Ø§Ù‹. Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© Ø§Ù„ØµØ­ÙŠØ­Ø© ÙŠÙ…ÙƒÙ† Ø£Ù† ØªÙ…Ù†Ø¹ 70% Ù…Ù† Ø¢Ù„Ø§Ù… Ø§Ù„Ø¸Ù‡Ø±.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'sciatique-hernie-discale', titleFr: 'Sciatique & Hernie Discale', titleAr: 'Ø¹Ø±Ù‚ Ø§Ù„Ù†Ø³Ø§ ÙˆØ§Ù„Ø§Ù†Ø²Ù„Ø§Ù‚ Ø§Ù„ØºØ¶Ø±ÙˆÙÙŠ', icon: <ArrowUpDown size={20} /> },
    { slug: 'douleurs-epaules-capsulite', titleFr: 'Douleurs aux Ã‰paules', titleAr: 'Ø£Ù„Ù… Ø§Ù„ÙƒØªÙÙŠÙ†', icon: <ArrowUpDown size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© ÙˆØ§Ù„Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§', icon: <ArrowUpDown size={20} /> },
  ]
});

export default article2;



