import { createArticle } from './ArticleTemplate';
import { Stethoscope } from 'lucide-react';

const article9 = createArticle({
  slug: 'posture-ergonomie',
  titleFr: 'Posture & Ergonomie: PrÃ©vention des Douleurs',
  titleAr: 'Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© ÙˆØ§Ù„Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§: Ù…Ù†Ø¹ Ø§Ù„Ø¢Ù„Ø§Ù…',
  descriptionFr: 'Importance de la posture. Ergonomie de travail. Exercices de correction posturale.',
  descriptionAr: 'Ø£Ù‡Ù…ÙŠØ© Ø§Ù„ÙˆØ¶Ø¹ÙŠØ©. Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§ Ø§Ù„Ø¹Ù…Ù„. ØªÙ…Ø§Ø±ÙŠÙ† ØªØµØ­ÙŠØ­ Ø§Ù„ÙˆØ¶Ø¹ÙŠØ©.',
  keywordsFr: 'posture, ergonomie, mal de dos, prÃ©vention, travail bureau',
  keywordsAr: 'ÙˆØ¶Ø¹ÙŠØ©, Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§, Ø£Ù„Ù… Ø§Ù„Ø¸Ù‡Ø±, ÙˆÙ‚Ø§ÙŠØ©, Ø¹Ù…Ù„',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '5 min de lecture',
  readTimeAr: '5 Ø¯Ù‚Ø§Ø¦Ù‚ Ù‚Ø±Ø§Ø¡Ø©',
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
          <li>Tensions cervicales et cÃ©phalÃ©es</li>
          <li>Muscles faibles (core, dos)</li>
          <li>Compressions nerveuses</li>
          <li>Diminution de la mobilitÃ©</li>
          <li>ProblÃ¨mes digestifs</li>
          <li>RÃ©duction de la confiance en soi</li>
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
            <p>Hauteur au niveau des coudes, distance Ã  Ã©cran 50-70cm</p>
          </div>
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold">Ã‰cran</h3>
            <p>LÃ©gÃ¨rement sous la hauteur des yeux, inclinÃ© Ã  20 degrÃ©s</p>
          </div>
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold">Clavier/Souris</h3>
            <p>Ã€ la hauteur des coudes, souris proche du corps</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Exercices Posturaux Quotidiens</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ã‰tirements du psoas:</strong> 30 sec x 3 fois</li>
          <li><strong>Gainage ventral:</strong> 30 sec x 3 fois</li>
          <li><strong>RÃ©traction du menton:</strong> 15 rÃ©p x 3 sÃ©ries</li>
          <li><strong>Scapular squeeze:</strong> 15 rÃ©p x 3 sÃ©ries</li>
          <li><strong>Back extension:</strong> 15 rÃ©p x 3 sÃ©ries</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Habitudes Saines</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pause active toutes les heures</li>
          <li>Marche de 5 minutes entre les rÃ©unions</li>
          <li>Ã‰tirements au travail</li>
          <li>Sports ou yoga 2-3 fois/semaine</li>
          <li>Dormir 7-8 heures par nuit</li>
        </ul>
      </section>
      <section className="bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">âš ï¸ PrÃ©vention</h3>
        <p>Il est beaucoup plus facile de prÃ©venir les problÃ¨mes posturaux que de les traiter. Commencez dÃ¨s maintenant!</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø£Ù‡Ù…ÙŠØ© Ø§Ù„ÙˆØ¶Ø¹ÙŠØ©</h2>
        <p>Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© Ø§Ù„Ø¬ÙŠØ¯Ø© Ù„ÙŠØ³Øª Ø¹Ù† Ø§Ù„Ø¸Ù‡ÙˆØ± ÙÙ‚Ø·. ØªÙ…Ù†Ø¹ 70% Ù…Ù† Ø¢Ù„Ø§Ù… Ø§Ù„Ø¹Ø¶Ù„Ø§Øª ÙˆØ§Ù„Ø¹Ø¸Ø§Ù… ÙˆØªØ­Ø³Ù† ØµØ­ØªÙƒ Ø§Ù„Ø¹Ø§Ù…Ø©.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø¹ÙˆØ§Ù‚Ø¨ Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© Ø§Ù„Ø³ÙŠØ¦Ø©</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ø¢Ù„Ø§Ù… Ø£Ø³ÙÙ„ Ø§Ù„Ø¸Ù‡Ø± Ø§Ù„Ù…Ø²Ù…Ù†Ø©</li>
          <li>Ø§Ø¬Ù‡Ø§Ø¯Ø§Øª Ø¹Ù†Ù‚ÙŠØ© ÙˆØµØ¯Ø§Ø¹</li>
          <li>Ø¶Ø¹Ù Ø§Ù„Ø¹Ø¶Ù„Ø§Øª (Ø¬Ø°Ø¹ØŒ Ø¸Ù‡Ø±)</li>
          <li>Ø¶ØºØ· Ø§Ù„Ø£Ø¹ØµØ§Ø¨</li>
          <li>Ø§Ù†Ø®ÙØ§Ø¶ Ø§Ù„Ø­Ø±ÙƒØ©</li>
          <li>Ù…Ø´Ø§ÙƒÙ„ Ø§Ù„Ø¬Ù‡Ø§Ø² Ø§Ù„Ù‡Ø¶Ù…ÙŠ</li>
          <li>Ø§Ù†Ø®ÙØ§Ø¶ Ø§Ù„Ø«Ù‚Ø© Ø¨Ø§Ù„Ù†ÙØ³</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§ Ø§Ù„Ù…ÙƒØªØ¨</h2>
        <div className="space-y-4 mt-4">
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold">Ø§Ù„ÙƒØ±Ø³ÙŠ</h3>
            <p>Ù‚Ø§Ø¨Ù„ Ù„Ù„ØªØ¹Ø¯ÙŠÙ„ØŒ Ø¯Ø¹Ù… Ù‚Ø·Ù†ÙŠØŒ Ø­Ø§Ù…Ù„ Ù‚Ø¯Ù…</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold">Ø§Ù„Ù…ÙƒØªØ¨</h3>
            <p>Ø§Ø±ØªÙØ§Ø¹ Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…Ø±ÙÙ‚ÙŠÙ†ØŒ Ù…Ø³Ø§ÙØ© Ø§Ù„Ø´Ø§Ø´Ø© 50-70 Ø³Ù…</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold">Ø§Ù„Ø´Ø§Ø´Ø©</h3>
            <p>Ø£Ù‚Ù„ Ù‚Ù„ÙŠÙ„Ø§Ù‹ Ù…Ù† Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ø¹ÙŠÙ†ØŒ Ù…Ø§Ø¦Ù„Ø© 20 Ø¯Ø±Ø¬Ø©</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold">Ù„ÙˆØ­Ø© Ø§Ù„Ù…ÙØ§ØªÙŠØ­/Ø§Ù„Ù…Ø§ÙˆØ³</h3>
            <p>Ø¹Ù„Ù‰ Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…Ø±ÙÙ‚ÙŠÙ†ØŒ Ø§Ù„Ù…Ø§ÙˆØ³ Ù‚Ø±ÙŠØ¨ Ù…Ù† Ø§Ù„Ø¬Ø³Ù…</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">ØªÙ…Ø§Ø±ÙŠÙ† ÙˆØ¶Ø¹ÙŠØ© ÙŠÙˆÙ…ÙŠØ©</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>ØªÙ…Ø¯ÙŠØ¯Ø§Øª Ø§Ù„ÙƒÙ…Ø«Ø±ÙŠØ©:</strong> 30 Ø«Ø§Ù†ÙŠØ© Ã— 3 Ù…Ø±Ø§Øª</li>
          <li><strong>ØªÙ‚ÙˆÙŠØ© Ø§Ù„Ø¨Ø·Ù†:</strong> 30 Ø«Ø§Ù†ÙŠØ© Ã— 3 Ù…Ø±Ø§Øª</li>
          <li><strong>Ø³Ø­Ø¨ Ø§Ù„Ø°Ù‚Ù† Ù„Ù„Ø®Ù„Ù:</strong> 15 ØªÙƒØ±Ø§Ø± Ã— 3 Ù…Ø¬Ù…ÙˆØ¹Ø§Øª</li>
          <li><strong>Ø¶ØºØ· Ø§Ù„Ø£ÙƒØªØ§Ù:</strong> 15 ØªÙƒØ±Ø§Ø± Ã— 3 Ù…Ø¬Ù…ÙˆØ¹Ø§Øª</li>
          <li><strong>ØªÙ…Ø¯ÙŠØ¯ Ø§Ù„Ø¸Ù‡Ø±:</strong> 15 ØªÙƒØ±Ø§Ø± Ã— 3 Ù…Ø¬Ù…ÙˆØ¹Ø§Øª</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø¹Ø§Ø¯Ø§Øª ØµØ­ÙŠØ©</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ÙØªØ±Ø© Ù†Ø´Ø·Ø© ÙƒÙ„ Ø³Ø§Ø¹Ø©</li>
          <li>Ù…Ø´ÙŠ 5 Ø¯Ù‚Ø§Ø¦Ù‚ Ø¨ÙŠÙ† Ø§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹Ø§Øª</li>
          <li>ØªÙ…Ø¯ÙŠØ¯Ø§Øª ÙÙŠ Ø§Ù„Ø¹Ù…Ù„</li>
          <li>Ø±ÙŠØ§Ø¶Ø© Ø£Ùˆ ÙŠÙˆØºØ§ 2-3 Ù…Ø±Ø§Øª/Ø£Ø³Ø¨ÙˆØ¹</li>
          <li>Ù†Ù… 7-8 Ø³Ø§Ø¹Ø§Øª ÙÙŠ Ø§Ù„Ù„ÙŠÙ„</li>
        </ul>
      </section>
      <section className="bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">âš ï¸ ÙˆÙ‚Ø§ÙŠØ©</h3>
        <p>Ù…Ù† Ø§Ù„Ø£Ø³Ù‡Ù„ Ø¨ÙƒØ«ÙŠØ± Ù…Ù†Ø¹ Ù…Ø´Ø§ÙƒÙ„ Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© Ù…Ù† Ù…Ø¹Ø§Ù„Ø¬ØªÙ‡Ø§. Ø§Ø¨Ø¯Ø£ Ø§Ù„Ø¢Ù†!</p>
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



