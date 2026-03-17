import { createArticle } from './ArticleTemplate';
import { Brain } from 'lucide-react';

const article6 = createArticle({
  slug: 'migraines-cephalees',
  titleFr: 'Migraines & CÃ©phalÃ©es: Soulagement Naturel',
  titleAr: 'Ø§Ù„ØµØ¯Ø§Ø¹ ÙˆØ§Ù„Ø´Ù‚ÙŠÙ‚Ø©: ØªØ®ÙÙŠÙ Ø·Ø¨ÙŠØ¹ÙŠ',
  descriptionFr: 'Traiter migraines et cÃ©phalÃ©es de tension par la kinÃ©sithÃ©rapie. Techniques et exercices pour prÃ©venir et soulager.',
  descriptionAr: 'Ø¹Ù„Ø§Ø¬ Ø§Ù„ØµØ¯Ø§Ø¹ ÙˆØ§Ù„Ø´Ù‚ÙŠÙ‚Ø© Ø¨Ø§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠ. ØªÙ‚Ù†ÙŠØ§Øª ÙˆØªÙ…Ø§Ø±ÙŠÙ† Ù„Ù„ÙˆÙ‚Ø§ÙŠØ© ÙˆØ§Ù„ØªØ®ÙÙŠÙ.',
  keywordsFr: 'migraine, cÃ©phalÃ©e, mal de tÃªte, kinÃ© migraine, traitement cÃ©phalÃ©e',
  keywordsAr: 'ØµØ¯Ø§Ø¹, Ø´Ù‚ÙŠÙ‚Ø©, ØªØµØ¯Ø§Ø¹, Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„ØµØ¯Ø§Ø¹',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '5 min de lecture',
  readTimeAr: '5 Ø¯Ù‚Ø§Ø¦Ù‚ Ù‚Ø±Ø§Ø¡Ø©',
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
          <li>Travail devant l'Ã©cran</li>
          <li>Stress musculaire chronique</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Approche KinÃ©sithÃ©rapique</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Ã‰valuation:</strong> Identifier les triggers</li>
          <li><strong>Mobilisation Cervicale:</strong> RÃ©duire la raideur</li>
          <li><strong>Traitement des Trigger Points:</strong> Soulager les muscles</li>
          <li><strong>Correction Posturale:</strong> Ergonomie correcte</li>
          <li><strong>Exercices Stabilisateurs:</strong> Renforcement</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">StratÃ©gies de PrÃ©vention</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ã‰tirements cervicaux quotidiens</li>
          <li>Pauses toutes les heures devant l'Ã©cran</li>
          <li>Posture correcte au travail</li>
          <li>Gestion du stress (yoga, mÃ©ditation)</li>
          <li>Hydratation adÃ©quate</li>
          <li>Sommeil rÃ©gulier et suffisant</li>
        </ul>
      </section>
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">âœ¨ RÃ©sultat Attendu</h3>
        <p>75% des patients voient une rÃ©duction significative de la frÃ©quence et de l'intensitÃ© des migraines aprÃ¨s 6-8 semaines de kinÃ©sithÃ©rapie rÃ©guliÃ¨re.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„ØµØ¯Ø§Ø¹ ÙˆØ§Ù„Ø´Ù‚ÙŠÙ‚Ø©: Ù…Ø´ÙƒÙ„Ø© Ø´Ø§Ø¦Ø¹Ø©</h2>
        <p>15% Ù…Ù† Ø§Ù„Ø³ÙƒØ§Ù† ÙŠØ¹Ø§Ù†ÙˆÙ† Ù…Ù† Ø§Ù„Ø´Ù‚ÙŠÙ‚Ø©. ØµØ¯Ø§Ø¹ Ø§Ù„ØªÙˆØªØ± Ø£ÙƒØ«Ø± Ø´ÙŠÙˆØ¹Ø§Ù‹. Ù‡Ù„ ØªØ¹Ù„Ù… Ø£Ù† Ø§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠ ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠØ³Ø§Ø¹Ø¯ØŸ</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø£Ù†ÙˆØ§Ø¹ Ø§Ù„ØµØ¯Ø§Ø¹</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>ØµØ¯Ø§Ø¹ Ø§Ù„ØªÙˆØªØ±:</strong> Ø¶ØºØ· Ø­ÙˆÙ„ Ø§Ù„Ø±Ø£Ø³</li>
          <li><strong>Ø§Ù„Ø´Ù‚ÙŠÙ‚Ø©:</strong> Ø£Ù„Ù… Ù†Ø§Ø¨Ø¶ Ù…Ù† Ø¬Ø§Ù†Ø¨ ÙˆØ§Ø­Ø¯</li>
          <li><strong>ØµØ¯Ø§Ø¹ Ø¹Ù†Ù‚ÙŠ Ø§Ù„Ù…ØµØ¯Ø±:</strong> Ù†Ø§ØªØ¬ Ø¹Ù† ØªÙŠØ¨Ø³ Ø§Ù„Ø±Ù‚Ø¨Ø©</li>
          <li><strong>ØµØ¯Ø§Ø¹ Ø¹Ù†Ù‚ÙˆØ¯ÙŠ:</strong> Ø£Ù„Ù… Ù…ÙƒØ«Ù Ø¯ÙˆØ±ÙŠ</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø£Ø³Ø¨Ø§Ø¨ Ø°Ø§Øª ØµÙ„Ø© Ø¨Ø§Ù„ÙˆØ¶Ø¹ÙŠØ©</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ØªÙŠØ¨Ø³ Ø§Ù„Ø±Ù‚Ø¨Ø©</li>
          <li>ØªØ´Ù†Ø¬Ø§Øª Ø¹Ø¶Ù„ÙŠØ© ÙÙŠ Ø§Ù„Ø±Ù‚Ø¨Ø© ÙˆØ§Ù„Ø£ÙƒØªØ§Ù</li>
          <li>ÙˆØ¶Ø¹ÙŠØ© Ø®Ø§Ø·Ø¦Ø© Ù…Ø·ÙˆÙ„Ø©</li>
          <li>Ø§Ù„Ø¹Ù…Ù„ Ø£Ù…Ø§Ù… Ø§Ù„Ø´Ø§Ø´Ø©</li>
          <li>Ø§Ù„Ø¥Ø¬Ù‡Ø§Ø¯ Ø§Ù„Ø¹Ø¶Ù„ÙŠ Ø§Ù„Ù…Ø²Ù…Ù†</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ù†Ù‡Ø¬ Ø§Ù„Ø¹Ù„Ø§Ø¬ÙŠ</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Ø§Ù„ØªÙ‚ÙŠÙŠÙ…:</strong> ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù…Ø­ÙØ²Ø§Øª</li>
          <li><strong>ØªØ­Ø±ÙŠÙƒ Ø§Ù„Ø±Ù‚Ø¨Ø©:</strong> ØªÙ‚Ù„ÙŠÙ„ Ø§Ù„ØªÙŠØ¨Ø³</li>
          <li><strong>Ø¹Ù„Ø§Ø¬ Ù†Ù‚Ø§Ø· Ø§Ù„Ø£Ù„Ù…:</strong> ØªØ®ÙÙŠÙ Ø§Ù„Ø¹Ø¶Ù„Ø§Øª</li>
          <li><strong>ØªØµØ­ÙŠØ­ Ø§Ù„ÙˆØ¶Ø¹ÙŠØ©:</strong> Ø§Ù„Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§ Ø§Ù„ØµØ­ÙŠØ­Ø©</li>
          <li><strong>ØªÙ…Ø§Ø±ÙŠÙ† Ø§Ù„ØªØ«Ø¨ÙŠØª:</strong> Ø§Ù„ØªÙ‚ÙˆÙŠØ©</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ§Øª Ø§Ù„ÙˆÙ‚Ø§ÙŠØ©</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ØªÙ…Ø¯ÙŠØ¯Ø§Øª Ø§Ù„Ø±Ù‚Ø¨Ø© Ø§Ù„ÙŠÙˆÙ…ÙŠØ©</li>
          <li>ÙØªØ±Ø§Øª Ø±Ø§Ø­Ø© ÙƒÙ„ Ø³Ø§Ø¹Ø© Ø£Ù…Ø§Ù… Ø§Ù„Ø´Ø§Ø´Ø©</li>
          <li>ÙˆØ¶Ø¹ÙŠØ© ØµØ­ÙŠØ­Ø© ÙÙŠ Ø§Ù„Ø¹Ù…Ù„</li>
          <li>Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¥Ø¬Ù‡Ø§Ø¯ (Ø§Ù„ÙŠÙˆØºØ§ØŒ Ø§Ù„ØªØ£Ù…Ù„)</li>
          <li>ØªØ±Ø·ÙŠØ¨ ÙƒØ§ÙÙ</li>
          <li>Ù†ÙˆÙ… Ù…Ù†ØªØ¸Ù… ÙˆÙƒØ§ÙÙ</li>
        </ul>
      </section>
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">âœ¨ Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„Ù…ØªÙˆÙ‚Ø¹Ø©</h3>
        <p>75% Ù…Ù† Ø§Ù„Ù…Ø±Ø¶Ù‰ ÙŠØ±ÙˆÙ† Ø§Ù†Ø®ÙØ§Ø¶Ø§Ù‹ ÙƒØ¨ÙŠØ±Ø§Ù‹ ÙÙŠ ØªÙƒØ±Ø§Ø± ÙˆØ´Ø¯Ø© Ø§Ù„ØµØ¯Ø§Ø¹ Ø¨Ø¹Ø¯ 6-8 Ø£Ø³Ø§Ø¨ÙŠØ¹ Ù…Ù† Ø§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠ Ø§Ù„Ù…Ù†ØªØ¸Ù….</p>
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



