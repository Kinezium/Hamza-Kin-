import { createArticle } from './ArticleTemplate';
import { Stethoscope } from 'lucide-react';

const article8 = createArticle({
  slug: 'readaptation-post-avc',
  titleFr: 'RÃ©adaptation Post-AVC: Reprendre la Vie',
  titleAr: 'Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ£Ù‡ÙŠÙ„ Ù…Ø§ Ø¨Ø¹Ø¯ Ø§Ù„Ø¬Ù„Ø·Ø©: Ø§Ø³ØªØ¹Ø§Ø¯Ø© Ø§Ù„Ø­ÙŠØ§Ø©',
  descriptionFr: 'RÃ©Ã©ducation aprÃ¨s AVC. Exercices et techniques pour rÃ©cupÃ©rer mobilitÃ© et indÃ©pendance.',
  descriptionAr: 'Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ£Ù‡ÙŠÙ„ Ø¨Ø¹Ø¯ Ø§Ù„Ø¬Ù„Ø·Ø©. ØªÙ…Ø§Ø±ÙŠÙ† ÙˆØªÙ‚Ù†ÙŠØ§Øª Ù„Ø§Ø³ØªØ¹Ø§Ø¯Ø© Ø§Ù„Ø­Ø±ÙƒØ© ÙˆØ§Ù„Ø§Ø³ØªÙ‚Ù„Ø§Ù„ÙŠØ©.',
  keywordsFr: 'AVC, accident vasculaire, rÃ©Ã©ducation AVC, kinÃ© AVC, rÃ©cupÃ©ration aprÃ¨s AVC',
  keywordsAr: 'Ø¬Ù„Ø·Ø©, Ø³ÙƒØªØ© Ø¯Ù…Ø§ØºÙŠØ©, Ø¥Ø¹Ø§Ø¯Ø© ØªØ£Ù‡ÙŠÙ„, Ø§Ø³ØªØ¹Ø§Ø¯Ø© Ø§Ù„Ø­Ø±ÙƒØ©',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 Ø¯Ù‚Ø§Ø¦Ù‚ Ù‚Ø±Ø§Ø¡Ø©',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">RÃ©adaptation Post-AVC</h2>
        <p>AprÃ¨s un accident vasculaire cÃ©rÃ©bral (AVC), la rÃ©Ã©ducation prÃ©coce est cruciale pour maximiser la rÃ©cupÃ©ration. La plasticitÃ© cÃ©rÃ©brale permet une rÃ©adaptation remarquable.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">SÃ©quelles Possibles de l'AVC</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ParÃ©sie ou paralysie d'un cÃ´tÃ© du corps</li>
          <li>Troubles de l'Ã©quilibre et de la coordination</li>
          <li>SpasticitÃ© (augmentation du tonus musculaire)</li>
          <li>ProblÃ¨mes de parole ou de dÃ©glutition</li>
          <li>Perte de sensation</li>
          <li>Troubles cognitifs ou Ã©motionnels</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">FenÃªtre de RÃ©cupÃ©ration</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold">Phase AiguÃ« (0-3 mois)</h3>
            <p>RÃ©cupÃ©ration spontanÃ©e et plastique cÃ©rÃ©brale maximale. DÃ©but immÃ©diat de la rÃ©Ã©ducation.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold">Phase SubaiguÃ« (3-6 mois)</h3>
            <p>AmÃ©lioration significative possible. IntensitÃ© de rÃ©Ã©ducation Ã©levÃ©e.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-bold">Phase Chronique (6+ mois)</h3>
            <p>RÃ©cupÃ©ration plus lente mais toujours possible. Maintenance et prÃ©vention.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Approche ThÃ©rapeutique IntÃ©grÃ©e</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Ã‰valuation ComplÃ¨te:</strong> Force, mobilitÃ©, Ã©quilibre</li>
          <li><strong>ThÃ©rapie Neuromusculaire:</strong> Concepts Bobath, Perfetti</li>
          <li><strong>RÃ©Ã©ducation de la Marche:</strong> Traitement gait-specific</li>
          <li><strong>Normalisation du Tonus:</strong> Gestion de la spasticitÃ©</li>
          <li><strong>EntraÃ®nement de l'Ã‰quilibre:</strong> PrÃ©vention des chutes</li>
          <li><strong>RÃ©adaptation Fonctionnelle:</strong> ADL (activitÃ©s quotidiennes)</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Exercices Simples Ã  Domicile</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Exercices d'amplitude passive et active</li>
          <li>Renforcement progressif du cÃ´tÃ© affectÃ©</li>
          <li>Marche avec support si nÃ©cessaire</li>
          <li>Assis-debout assistÃ©</li>
          <li>Exercices d'Ã©quilibre assis</li>
        </ul>
      </section>
      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">ðŸŽ¯ Objectif</h3>
        <p>RÃ©cupÃ©rer l'indÃ©pendance fonctionnelle et la qualitÃ© de vie. Chaque patient progresse diffÃ©remment. La persÃ©vÃ©rance est clÃ©.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ£Ù‡ÙŠÙ„ Ù…Ø§ Ø¨Ø¹Ø¯ Ø§Ù„Ø¬Ù„Ø·Ø©</h2>
        <p>Ø¨Ø¹Ø¯ Ø§Ù„Ø³ÙƒØªØ© Ø§Ù„Ø¯Ù…Ø§ØºÙŠØ©ØŒ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ£Ù‡ÙŠÙ„ Ø§Ù„Ù…Ø¨ÙƒØ±Ø© Ø­Ø§Ø³Ù…Ø© Ù„ØªØ¹Ø¸ÙŠÙ… Ø§Ù„ØªØ¹Ø§ÙÙŠ. Ø§Ù„Ù…Ø±ÙˆÙ†Ø© Ø§Ù„Ø¹ØµØ¨ÙŠØ© ØªØ³Ù…Ø­ Ø¨Ø¥Ø¹Ø§Ø¯Ø© ØªØ£Ù‡ÙŠÙ„ Ù…Ù„Ø­ÙˆØ¸Ø©.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ø¢Ø«Ø§Ø± Ø§Ù„Ù…Ø­ØªÙ…Ù„Ø© Ù„Ù„Ø¬Ù„Ø·Ø©</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ø¶Ø¹Ù Ø£Ùˆ Ø´Ù„Ù„ Ù…Ù† Ø¬Ø§Ù†Ø¨ ÙˆØ§Ø­Ø¯</li>
          <li>Ø§Ø¶Ø·Ø±Ø§Ø¨Ø§Øª Ø§Ù„ØªÙˆØ§Ø²Ù† ÙˆØ§Ù„ØªÙ†Ø³ÙŠÙ‚</li>
          <li>ØªØ´Ù†Ø¬ (Ø²ÙŠØ§Ø¯Ø© ØªÙˆØªØ± Ø§Ù„Ø¹Ø¶Ù„Ø§Øª)</li>
          <li>Ù…Ø´Ø§ÙƒÙ„ Ø§Ù„ÙƒÙ„Ø§Ù… Ø£Ùˆ Ø§Ù„Ø¨Ù„Ø¹</li>
          <li>ÙÙ‚Ø¯Ø§Ù† Ø§Ù„Ø¥Ø­Ø³Ø§Ø³</li>
          <li>Ù…Ø´Ø§ÙƒÙ„ Ø¥Ø¯Ø±Ø§ÙƒÙŠØ© Ø£Ùˆ Ø¹Ø§Ø·ÙÙŠØ©</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ù†Ø§ÙØ°Ø© Ø§Ù„Ø´ÙØ§Ø¡</h2>
        <div className="space-y-3">
          <div className="border-r-4 border-green-500 pr-4">
            <h3 className="font-bold">Ø§Ù„Ù…Ø±Ø­Ù„Ø© Ø§Ù„Ø­Ø§Ø¯Ø© (0-3 Ø£Ø´Ù‡Ø±)</h3>
            <p>ØªØ¹Ø§ÙÙ ØªÙ„Ù‚Ø§Ø¦ÙŠ ÙˆØ£Ù‚ØµÙ‰ Ù…Ø±ÙˆÙ†Ø© Ø¹ØµØ¨ÙŠØ©. Ø¨Ø¯Ø¡ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ£Ù‡ÙŠÙ„ ÙÙˆØ±Ø§Ù‹.</p>
          </div>
          <div className="border-r-4 border-blue-500 pr-4">
            <h3 className="font-bold">Ø§Ù„Ù…Ø±Ø­Ù„Ø© ÙÙˆÙ‚ Ø§Ù„Ø­Ø§Ø¯Ø© (3-6 Ø£Ø´Ù‡Ø±)</h3>
            <p>ØªØ­Ø³Ù† ÙƒØ¨ÙŠØ± Ù…Ù…ÙƒÙ†. ÙƒØ«Ø§ÙØ© Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ£Ù‡ÙŠÙ„ Ø¹Ø§Ù„ÙŠØ©.</p>
          </div>
          <div className="border-r-4 border-purple-500 pr-4">
            <h3 className="font-bold">Ø§Ù„Ù…Ø±Ø­Ù„Ø© Ø§Ù„Ù…Ø²Ù…Ù†Ø© (6+ Ø£Ø´Ù‡Ø±)</h3>
            <p>Ø§Ù„ØªØ¹Ø§ÙÙŠ Ø£Ø¨Ø·Ø£ ÙˆÙ„ÙƒÙ† Ù„Ø§ ÙŠØ²Ø§Ù„ Ù…Ù…ÙƒÙ†Ø§Ù‹. Ø§Ù„ØµÙŠØ§Ù†Ø© ÙˆØ§Ù„ÙˆÙ‚Ø§ÙŠØ©.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ù†Ù‡Ø¬ Ø§Ù„Ø¹Ù„Ø§Ø¬ÙŠ Ø§Ù„Ù…ØªÙƒØ§Ù…Ù„</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Ø§Ù„ØªÙ‚ÙŠÙŠÙ… Ø§Ù„Ø´Ø§Ù…Ù„:</strong> Ø§Ù„Ù‚ÙˆØ©ØŒ Ø§Ù„Ø­Ø±ÙƒØ©ØŒ Ø§Ù„ØªÙˆØ§Ø²Ù†</li>
          <li><strong>Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„Ø¹ØµØ¨ÙŠ Ø§Ù„Ø¹Ø¶Ù„ÙŠ:</strong> ØªÙ‚Ù†ÙŠØ§Øª Ù…ØªØ®ØµØµØ©</li>
          <li><strong>Ø¥Ø¹Ø§Ø¯Ø© ØªØ£Ù‡ÙŠÙ„ Ø§Ù„Ù…Ø´ÙŠ:</strong> Ø¹Ù„Ø§Ø¬ Ø®Ø§Øµ Ø¨Ø§Ù„Ù…Ø´ÙŠ</li>
          <li><strong>ØªØ·Ø¨ÙŠØ¹ Ø§Ù„ØªÙˆØªØ±:</strong> Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„ØªØ´Ù†Ø¬</li>
          <li><strong>ØªØ¯Ø±ÙŠØ¨ Ø§Ù„ØªÙˆØ§Ø²Ù†:</strong> Ù…Ù†Ø¹ Ø§Ù„Ø³Ù‚ÙˆØ·</li>
          <li><strong>Ø¥Ø¹Ø§Ø¯Ø© ØªØ£Ù‡ÙŠÙ„ ÙˆØ¸ÙŠÙÙŠØ©:</strong> Ø£Ù†Ø´Ø·Ø© ÙŠÙˆÙ…ÙŠØ©</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">ØªÙ…Ø§Ø±ÙŠÙ† Ø¨Ø³ÙŠØ·Ø© Ù…Ù†Ø²Ù„ÙŠØ©</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ØªÙ…Ø§Ø±ÙŠÙ† Ø§Ù„Ù†Ø·Ø§Ù‚ Ø§Ù„Ø³Ù„Ø¨ÙŠ ÙˆØ§Ù„Ø¥ÙŠØ¬Ø§Ø¨ÙŠ</li>
          <li>ØªÙ‚ÙˆÙŠØ© ØªØ¯Ø±ÙŠØ¬ÙŠ Ù„Ù„Ø¬Ø§Ù†Ø¨ Ø§Ù„Ù…ØµØ§Ø¨</li>
          <li>Ø§Ù„Ù…Ø´ÙŠ Ù…Ø¹ Ø§Ù„Ø¯Ø¹Ù… Ø¥Ø°Ø§ Ù„Ø²Ù… Ø§Ù„Ø£Ù…Ø±</li>
          <li>Ø§Ù„Ø¬Ù„ÙˆØ³ ÙˆØ§Ù„ÙˆÙ‚ÙˆÙ Ø¨Ù…Ø³Ø§Ø¹Ø¯Ø©</li>
          <li>ØªÙ…Ø§Ø±ÙŠÙ† Ø§Ù„ØªÙˆØ§Ø²Ù† Ø§Ù„Ø¬Ø§Ù„Ø³Ø©</li>
        </ul>
      </section>
      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">ðŸŽ¯ Ø§Ù„Ù‡Ø¯Ù</h3>
        <p>Ø§Ø³ØªØ¹Ø§Ø¯Ø© Ø§Ù„Ø§Ø³ØªÙ‚Ù„Ø§Ù„ÙŠØ© Ø§Ù„ÙˆØ¸ÙŠÙÙŠØ© ÙˆØ¬ÙˆØ¯Ø© Ø§Ù„Ø­ÙŠØ§Ø©. ÙŠØªØ·ÙˆØ± ÙƒÙ„ Ù…Ø±ÙŠØ¶ Ø¨Ø´ÙƒÙ„ Ù…Ø®ØªÙ„Ù. Ø§Ù„Ø¥ØµØ±Ø§Ø± Ù‡Ùˆ Ø§Ù„Ù…ÙØªØ§Ø­.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'recuperation-sportive-prevention-blessures', titleFr: 'RÃ©cupÃ©ration Sportive', titleAr: 'Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø±ÙŠØ§Ø¶ÙŠ', icon: <Stethoscope size={20} /> },
    { slug: 'kine-pediatrique', titleFr: 'Physio PÃ©diatrique', titleAr: 'ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø£Ø·ÙØ§Ù„', icon: <Stethoscope size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© ÙˆØ§Ù„Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§', icon: <Stethoscope size={20} /> },
  ]
});

export default article8;



