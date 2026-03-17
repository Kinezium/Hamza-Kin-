import { createArticle } from './ArticleTemplate';
import { Dumbbell } from 'lucide-react';

const article10 = createArticle({
  slug: 'recuperation-sportive-prevention-blessures',
  titleFr: 'RÃ©cupÃ©ration Sportive & PrÃ©vention des Blessures',
  titleAr: 'Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø±ÙŠØ§Ø¶ÙŠ ÙˆÙ…Ù†Ø¹ Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª',
  descriptionFr: 'Optimiser la rÃ©cupÃ©ration aprÃ¨s l\'entraÃ®nement. PrÃ©vention des blessures. Conseils pour les athlÃ¨tes.',
  descriptionAr: 'ØªØ­Ø³ÙŠÙ† Ø§Ù„Ø§Ø³ØªØ´ÙØ§Ø¡ Ø¨Ø¹Ø¯ Ø§Ù„ØªØ¯Ø±ÙŠØ¨. Ù…Ù†Ø¹ Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª. Ù†ØµØ§Ø¦Ø­ Ù„Ù„Ø±ÙŠØ§Ø¶ÙŠÙŠÙ†.',
  keywordsFr: 'rÃ©cupÃ©ration sport, prÃ©vention blessure, entraÃ®nement, athlÃ¨te, kinÃ© sport',
  keywordsAr: 'Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø±ÙŠØ§Ø¶ÙŠØŒ Ù…Ù†Ø¹ Ø¥ØµØ§Ø¨Ø©ØŒ ØªØ¯Ø±ÙŠØ¨ØŒ Ø±ÙŠØ§Ø¶ÙŠ',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 Ø¯Ù‚Ø§Ø¦Ù‚ Ù‚Ø±Ø§Ø¡Ø©',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">La RÃ©cupÃ©ration Sportive</h2>
        <p>La rÃ©cupÃ©ration est aussi importante que l'entraÃ®nement lui-mÃªme. Elle permet aux muscles de se rÃ©parer, amÃ©liore les performances et prÃ©vient les blessures.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Les 3 Piliers de la RÃ©cupÃ©ration</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">1. Sommeil (60%)</h3>
            <p>7-9 heures par nuit. C'est pendant le sommeil que se produit la majoritÃ© de la rÃ©cupÃ©ration et de la synthÃ¨se protÃ©ique.</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">2. Nutrition (30%)</h3>
            <p>ProtÃ©ines pour la rÃ©paration musculaire, glucides pour l'Ã©nergie, vitamines et minÃ©raux pour la rÃ©cupÃ©ration.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">3. RÃ©cupÃ©ration Active (10%)</h3>
            <p>Ã‰tirements, massage, mobilitÃ©. AccÃ©lÃ¨re l'Ã©vacuation des dÃ©chets mÃ©taboliques.</p>
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
        <h2 className="text-2xl font-bold mb-4">Plan d'Ã‰chauffement Optimal</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Cardio LÃ©ger:</strong> 5-10 min (augmente la tempÃ©rature)</li>
          <li><strong>MobilitÃ© Dynamique:</strong> 5-10 min (prÃ©pare les articulations)</li>
          <li><strong>Activation Neuromusculaire:</strong> 5 min (rÃ©veille les muscles)</li>
          <li><strong>Sport-SpÃ©cifique:</strong> 5 min (prÃ©paration Ã  l'effort)</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">PrÃ©vention des Blessures</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ã‰chauffement complÃ¨t avant tout effort</li>
          <li>Augmentation progressive de l'intensitÃ©</li>
          <li>Renforcement des zones faibles</li>
          <li>RÃ©cupÃ©ration adÃ©quate entre les sÃ©ances</li>
          <li>Technique correcte avant la performance</li>
          <li>Ã‰quipement adaptÃ© et en bon Ã©tat</li>
          <li>Ã‰coute de votre corps</li>
        </ul>
      </section>
      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">ðŸ† Conseil d'Expert</h3>
        <p>Les athlÃ¨tes professionnels passent autant de temps en rÃ©cupÃ©ration qu'en entraÃ®nement. C'est l'secret de la performance durable.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ø§Ø³ØªØ´ÙØ§Ø¡ Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠ</h2>
        <p>Ø§Ù„Ø§Ø³ØªØ´ÙØ§Ø¡ Ù…Ù‡Ù… Ù…Ø«Ù„ Ø§Ù„ØªØ¯Ø±ÙŠØ¨ Ù†ÙØ³Ù‡. ÙÙ‡Ùˆ ÙŠØ³Ù…Ø­ Ù„Ù„Ø¹Ø¶Ù„Ø§Øª Ø¨Ø§Ù„Ø¥ØµÙ„Ø§Ø­ØŒ ÙŠØ­Ø³Ù† Ø§Ù„Ø£Ø¯Ø§Ø¡ ÙˆÙŠÙ…Ù†Ø¹ Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø£Ø±ÙƒØ§Ù† Ø§Ù„Ø§Ø³ØªØ´ÙØ§Ø¡ Ø§Ù„Ø«Ù„Ø§Ø«Ø©</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">1. Ø§Ù„Ù†ÙˆÙ… (60%)</h3>
            <p>7-9 Ø³Ø§Ø¹Ø§Øª ÙÙŠ Ø§Ù„Ù„ÙŠÙ„. Ù…Ø¹Ø¸Ù… Ø§Ù„Ø§Ø³ØªØ´ÙØ§Ø¡ ÙˆØ¥ØµÙ„Ø§Ø­ Ø§Ù„Ø¹Ø¶Ù„Ø§Øª ÙŠØ­Ø¯Ø« Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ù†ÙˆÙ….</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">2. Ø§Ù„ØªØºØ°ÙŠØ© (30%)</h3>
            <p>Ø¨Ø±ÙˆØªÙŠÙ†Ø§Øª Ù„Ø¥ØµÙ„Ø§Ø­ Ø§Ù„Ø¹Ø¶Ù„Ø§ØªØŒ ÙƒØ±Ø¨ÙˆÙ‡ÙŠØ¯Ø±Ø§Øª Ù„Ù„Ø·Ø§Ù‚Ø©ØŒ ÙÙŠØªØ§Ù…ÙŠÙ†Ø§Øª ÙˆÙ…Ø¹Ø§Ø¯Ù† Ù„Ù„Ø§Ø³ØªØ´ÙØ§Ø¡.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">3. Ø§Ù„Ø§Ø³ØªØ´ÙØ§Ø¡ Ø§Ù„Ù†Ø´Ø· (10%)</h3>
            <p>ØªÙ…Ø¯ÙŠØ¯Ø§ØªØŒ ØªØ¯Ù„ÙŠÙƒØŒ Ø­Ø±ÙƒØ©. ÙŠØ³Ø±Ø¹ Ø¥Ø²Ø§Ù„Ø© Ø§Ù„ÙØ¶Ù„Ø§Øª Ø§Ù„Ø£ÙŠØ¶ÙŠØ©.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„Ø§Ø³ØªØ´ÙØ§Ø¡</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>ØªÙ…Ø¯ÙŠØ¯Ø§Øª</strong> (10-15 Ø¯Ù‚ÙŠÙ‚Ø© Ø¨Ø¹Ø¯ Ø§Ù„Ù…Ø¬Ù‡ÙˆØ¯)</li>
          <li><strong>ØªØ¯Ù„ÙŠÙƒ Ø±ÙŠØ§Ø¶ÙŠ</strong> (24-48 Ø³Ø§Ø¹Ø© Ø¨Ø¹Ø¯)</li>
          <li><strong>ØªØ¯Ù„ÙŠÙƒ Ø°Ø§ØªÙŠ</strong> (Ø£Ø³Ø·ÙˆØ§Ù†Ø© Ø§Ù„Ø±ØºÙˆØ©)</li>
          <li><strong>Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø¨Ø§Ù„Ø¨Ø±ÙˆØ¯Ø©</strong> (Ø«Ù„Ø¬)</li>
          <li><strong>Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠ</strong> (Ø§Ø³ØªØ´ÙØ§Ø¡ Ø¹Ø¶Ù„ÙŠ)</li>
          <li><strong>Ø§Ù„Ø¶ØºØ·</strong> (Ù…Ù„Ø§Ø¨Ø³ Ø¶Ø§ØºØ·Ø©)</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø®Ø·Ø© Ø§Ù„Ø¥Ø­Ù…Ø§Ø¡ Ø§Ù„Ù…Ø«Ù„Ù‰</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>ÙƒØ§Ø±Ø¯ÙŠÙˆ Ø®ÙÙŠÙ:</strong> 5-10 Ø¯Ù‚Ø§Ø¦Ù‚ (Ø²ÙŠØ§Ø¯Ø© Ø¯Ø±Ø¬Ø© Ø§Ù„Ø­Ø±Ø§Ø±Ø©)</li>
          <li><strong>Ø­Ø±ÙƒØ© Ø¯ÙŠÙ†Ø§Ù…ÙŠÙƒÙŠØ©:</strong> 5-10 Ø¯Ù‚Ø§Ø¦Ù‚ (ØªØ­Ø¶ÙŠØ± Ø§Ù„Ù…ÙØ§ØµÙ„)</li>
          <li><strong>ØªÙ†Ø´ÙŠØ· Ø¹ØµØ¨ÙŠ Ø¹Ø¶Ù„ÙŠ:</strong> 5 Ø¯Ù‚Ø§Ø¦Ù‚ (Ø¥ÙŠÙ‚Ø§Ø¸ Ø§Ù„Ø¹Ø¶Ù„Ø§Øª)</li>
          <li><strong>Ø±ÙŠØ§Ø¶Ø© Ù…Ø­Ø¯Ø¯Ø©:</strong> 5 Ø¯Ù‚Ø§Ø¦Ù‚ (Ø§Ù„ØªØ­Ø¶ÙŠØ± Ù„Ù„Ù…Ø¬Ù‡ÙˆØ¯)</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ù…Ù†Ø¹ Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ø¥Ø­Ù…Ø§Ø¡ Ø´Ø§Ù…Ù„ Ù‚Ø¨Ù„ ÙƒÙ„ Ù…Ø¬Ù‡ÙˆØ¯</li>
          <li>Ø²ÙŠØ§Ø¯Ø© ØªØ¯Ø±ÙŠØ¬ÙŠØ© Ù„Ù„Ø´Ø¯Ø©</li>
          <li>ØªÙ‚ÙˆÙŠØ© Ø§Ù„Ù…Ù†Ø§Ø·Ù‚ Ø§Ù„Ø¶Ø¹ÙŠÙØ©</li>
          <li>Ø§Ø³ØªØ´ÙØ§Ø¡ ÙƒØ§ÙÙ Ø¨ÙŠÙ† Ø§Ù„Ø¬Ù„Ø³Ø§Øª</li>
          <li>ØªÙ‚Ù†ÙŠØ© ØµØ­ÙŠØ­Ø© Ù‚Ø¨Ù„ Ø§Ù„Ø£Ø¯Ø§Ø¡</li>
          <li>Ù…Ø¹Ø¯Ø§Øª Ù…Ù†Ø§Ø³Ø¨Ø© ÙˆØ¨Ø­Ø§Ù„Ø© Ø¬ÙŠØ¯Ø©</li>
          <li>Ø§Ù„Ø§Ø³ØªÙ…Ø§Ø¹ Ù„Ø¬Ø³Ø¯Ùƒ</li>
        </ul>
      </section>
      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">ðŸ† Ù†ØµÙŠØ­Ø© Ø§Ù„Ø®Ø¨ÙŠØ±</h3>
        <p>Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠÙˆÙ† Ø§Ù„Ù…Ø­ØªØ±ÙÙˆÙ† ÙŠÙ‚Ø¶ÙˆÙ† ÙˆÙ‚ØªØ§Ù‹ ÙÙŠ Ø§Ù„Ø§Ø³ØªØ´ÙØ§Ø¡ Ù…Ø«Ù„ Ø§Ù„ØªØ¯Ø±ÙŠØ¨. Ù‡Ø°Ø§ Ù‡Ùˆ Ø³Ø± Ø§Ù„Ø£Ø¯Ø§Ø¡ Ø§Ù„Ù…Ø³ØªØ¯Ø§Ù….</p>
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



