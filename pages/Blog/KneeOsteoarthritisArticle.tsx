import { createArticle } from './ArticleTemplate';
import { Bone } from 'lucide-react';

const article4 = createArticle({
  slug: 'arthrose-genou',
  titleFr: 'Arthrose du Genou: Vie Sans Douleur',
  titleAr: 'Ø®Ø´ÙˆÙ†Ø© Ø§Ù„Ø±ÙƒØ¨Ø©: Ø§Ù„Ø­ÙŠØ§Ø© Ø¨Ø¯ÙˆÙ† Ø£Ù„Ù…',
  descriptionFr: 'Traitement de l\'arthrose du genou. Exercices et conseils pour rÃ©duire la douleur et amÃ©liorer la mobilitÃ©.',
  descriptionAr: 'Ø¹Ù„Ø§Ø¬ Ø®Ø´ÙˆÙ†Ø© Ø§Ù„Ø±ÙƒØ¨Ø©. ØªÙ…Ø§Ø±ÙŠÙ† ÙˆÙ†ØµØ§Ø¦Ø­ Ù„ØªÙ‚Ù„ÙŠÙ„ Ø§Ù„Ø£Ù„Ù… ÙˆØªØ­Ø³ÙŠÙ† Ø§Ù„Ø­Ø±ÙƒØ©.',
  keywordsFr: 'arthrose genou, gonarthrose, kinÃ© genou, traitement arthrose',
  keywordsAr: 'Ø®Ø´ÙˆÙ†Ø© Ø§Ù„Ø±ÙƒØ¨Ø©, Ø§Ù„ØªÙ‡Ø§Ø¨ Ø§Ù„Ù…ÙØµÙ„, Ø¹Ù„Ø§Ø¬ Ø§Ù„Ø±ÙƒØ¨Ø©',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 Ø¯Ù‚Ø§Ø¦Ù‚ Ù‚Ø±Ø§Ø¡Ø©',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Arthrose du Genou: Comprendre la Condition</h2>
        <p>L'arthrose du genou est l'usure du cartilage articulaire. C'est une condition dÃ©gÃ©nÃ©rative qui affecte des millions de personnes. Mais avec la kinÃ©sithÃ©rapie appropriÃ©e, vous pouvez vivre sans douleur.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Signes et SymptÃ´mes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Douleur articulaire Ã  la marche</li>
          <li>Craquements et bruits articulaires</li>
          <li>Raideur au rÃ©veil</li>
          <li>Gonflement intermittent</li>
          <li>Perte progressive de mobilitÃ©</li>
          <li>InstabilitÃ© du genou</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Facteurs de Risque</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Vieillissement (aprÃ¨s 50 ans)</li>
          <li>Surpoids (pression accrue)</li>
          <li>AntÃ©cÃ©dents de blessure</li>
          <li>Facteurs gÃ©nÃ©tiques</li>
          <li>MÃ©tier exigeant du genou</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Traitement KinÃ©sithÃ©rapique</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Mobilisation Articulaire:</strong> RÃ©duction du raidissement</li>
          <li><strong>HydrothÃ©rapie:</strong> Exercices en piscine (dÃ©charge du poids)</li>
          <li><strong>Renforcement Musculaire:</strong> Muscles pÃ©riarticulaires</li>
          <li><strong>Ã‰quilibre et Proprioception:</strong> StabilitÃ©</li>
          <li><strong>ThermothÃ©rapie:</strong> Chaleur pour relaxer</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Exercices RecommandÃ©s</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>VÃ©lo d'appartement 20-30 min/jour</li>
          <li>Renforcement du quadriceps (isomÃ©trique)</li>
          <li>Ã‰tirements des ischio-jambiers</li>
          <li>Marche modÃ©rÃ©e quotidienne</li>
          <li>Ã‰viter les escaliers et les accroupissements</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">PrÃ©vention de l'Aggravation</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Maintenir un poids idÃ©al</li>
          <li>Exercice rÃ©gulier non-agressif</li>
          <li>Chaussures adaptÃ©es et stables</li>
          <li>Utilisation de cannes ou orthÃ¨ses si nÃ©cessaire</li>
          <li>Suivi rÃ©gulier avec votre kinÃ©</li>
        </ul>
      </section>
      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">ðŸ’¡ Conseil</h3>
        <p>L'arthrose n'est pas une condamnation. Avec une rÃ©Ã©ducation rÃ©guliÃ¨re, la plupart des gens amÃ©liorent significativement leur mobilitÃ© et rÃ©duisent leur douleur.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø®Ø´ÙˆÙ†Ø© Ø§Ù„Ø±ÙƒØ¨Ø©: ÙÙ‡Ù… Ø§Ù„Ø­Ø§Ù„Ø©</h2>
        <p>Ø®Ø´ÙˆÙ†Ø© Ø§Ù„Ø±ÙƒØ¨Ø© Ù‡ÙŠ ØªØ¢ÙƒÙ„ Ø§Ù„ØºØ¶Ø±ÙˆÙ Ø§Ù„Ù…ÙØµÙ„ÙŠ. Ø¥Ù†Ù‡Ø§ Ø­Ø§Ù„Ø© ØªÙ†ÙƒØ³ÙŠØ© ØªØ¤Ø«Ø± Ø¹Ù„Ù‰ Ø§Ù„Ù…Ù„Ø§ÙŠÙŠÙ† Ù…Ù† Ø§Ù„Ù†Ø§Ø³. Ù„ÙƒÙ† Ù…Ø¹ Ø§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠ Ø§Ù„ØµØ­ÙŠØ­ØŒ ÙŠÙ…ÙƒÙ†Ùƒ Ø§Ù„Ø¹ÙŠØ´ Ø¨Ø¯ÙˆÙ† Ø£Ù„Ù….</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ø¹Ù„Ø§Ù…Ø§Øª ÙˆØ§Ù„Ø£Ø¹Ø±Ø§Ø¶</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ø£Ù„Ù… Ù…ÙØµÙ„ÙŠ Ø¹Ù†Ø¯ Ø§Ù„Ù…Ø´ÙŠ</li>
          <li>Ø·Ù‚Ø·Ù‚Ø© ÙˆØ£ØµÙˆØ§Øª Ù…ÙØµÙ„ÙŠØ©</li>
          <li>ØªÙŠØ¨Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø§Ø³ØªÙŠÙ‚Ø§Ø¸</li>
          <li>ØªÙˆØ±Ù… Ù…ØªÙ‚Ø·Ø¹</li>
          <li>ÙÙ‚Ø¯Ø§Ù† ØªØ¯Ø±ÙŠØ¬ÙŠ Ù„Ù„Ø­Ø±ÙƒØ©</li>
          <li>Ø¹Ø¯Ù… Ø§Ø³ØªÙ‚Ø±Ø§Ø± Ø§Ù„Ø±ÙƒØ¨Ø©</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø¹ÙˆØ§Ù…Ù„ Ø§Ù„Ø®Ø·Ø±</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ø§Ù„ØªÙ‚Ø¯Ù… ÙÙŠ Ø§Ù„Ø³Ù† (Ø¨Ø¹Ø¯ Ø³Ù† 50)</li>
          <li>Ø²ÙŠØ§Ø¯Ø© Ø§Ù„ÙˆØ²Ù† (Ø¶ØºØ· Ø£ÙƒØ¨Ø±)</li>
          <li>Ø¥ØµØ§Ø¨Ø§Øª Ø³Ø§Ø¨Ù‚Ø©</li>
          <li>Ø¹ÙˆØ§Ù…Ù„ ÙˆØ±Ø§Ø«ÙŠØ©</li>
          <li>Ø¹Ù…Ù„ ÙŠØªØ·Ù„Ø¨ Ø§Ù„Ø±ÙƒØ¨Ø©</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø¨Ø§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠ</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>ØªØ­Ø±ÙŠÙƒ Ø§Ù„Ù…ÙØ§ØµÙ„:</strong> ØªÙ‚Ù„ÙŠÙ„ Ø§Ù„ØªÙŠØ¨Ø³</li>
          <li><strong>Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„Ù…Ø§Ø¦ÙŠ:</strong> ØªÙ…Ø§Ø±ÙŠÙ† ÙÙŠ Ø§Ù„Ù…Ø³Ø¨Ø­ (ØªÙ‚Ù„ÙŠÙ„ Ø§Ù„ÙˆØ²Ù†)</li>
          <li><strong>ØªÙ‚ÙˆÙŠØ© Ø§Ù„Ø¹Ø¶Ù„Ø§Øª:</strong> Ø§Ù„Ø¹Ø¶Ù„Ø§Øª Ø§Ù„Ù…Ø­ÙŠØ·Ø© Ø¨Ø§Ù„Ù…ÙØµÙ„</li>
          <li><strong>Ø§Ù„ØªÙˆØ§Ø²Ù† ÙˆØ§Ù„Ø­Ø³:</strong> Ø§Ù„Ø§Ø³ØªÙ‚Ø±Ø§Ø±</li>
          <li><strong>Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„Ø­Ø±Ø§Ø±ÙŠ:</strong> Ø§Ù„Ø­Ø±Ø§Ø±Ø© Ù„Ù„Ø§Ø³ØªØ±Ø®Ø§Ø¡</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„ØªÙ…Ø§Ø±ÙŠÙ† Ø§Ù„Ù…ÙˆØµÙ‰ Ø¨Ù‡Ø§</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ø¯Ø±Ù‘Ø§Ø¬Ø© Ø«Ø§Ø¨ØªØ© 20-30 Ø¯Ù‚ÙŠÙ‚Ø©/ÙŠÙˆÙ…</li>
          <li>ØªÙ‚ÙˆÙŠØ© Ø¹Ø¶Ù„Ø© Ø§Ù„ÙØ®Ø° (Ø«Ø§Ø¨ØªØ©)</li>
          <li>ØªÙ…Ø¯ÙŠØ¯Ø§Øª Ø§Ù„Ø£ÙˆØªØ§Ø±</li>
          <li>Ù…Ø´ÙŠ Ù…Ø¹ØªØ¯Ù„ ÙŠÙˆÙ…ÙŠ</li>
          <li>ØªØ¬Ù†Ø¨ Ø§Ù„Ø³Ù„Ø§Ù„Ù… ÙˆØ§Ù„Ù‚Ø±ÙØµØ§Ø¡</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ù…Ù†Ø¹ Ø§Ù„ØªÙØ§Ù‚Ù…</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ø§Ù„Ø­ÙØ§Ø¸ Ø¹Ù„Ù‰ ÙˆØ²Ù† Ù…Ø«Ø§Ù„ÙŠ</li>
          <li>ØªÙ…Ø±ÙŠÙ† Ù…Ù†ØªØ¸Ù… ØºÙŠØ± Ø¹Ù†ÙŠÙ</li>
          <li>Ø£Ø­Ø°ÙŠØ© Ù…Ù†Ø§Ø³Ø¨Ø© ÙˆÙ…Ø³ØªÙ‚Ø±Ø©</li>
          <li>Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ø¹ØµØ§ Ø£Ùˆ Ø§Ù„Ø¯Ø¹Ø§Ø¦Ù… Ø¥Ø°Ø§ Ù„Ø²Ù… Ø§Ù„Ø£Ù…Ø±</li>
          <li>Ù…ØªØ§Ø¨Ø¹Ø© Ù…Ù†ØªØ¸Ù…Ø© Ù…Ø¹ Ø§Ù„Ù…Ø¹Ø§Ù„Ø¬</li>
        </ul>
      </section>
      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">ðŸ’¡ Ù†ØµÙŠØ­Ø©</h3>
        <p>Ø®Ø´ÙˆÙ†Ø© Ø§Ù„Ù…ÙØ§ØµÙ„ Ù„ÙŠØ³Øª Ø­ÙƒÙ…Ø§Ù‹ Ù†Ù‡Ø§Ø¦ÙŠØ§Ù‹. Ù…Ø¹ Ø¥Ø¹Ø§Ø¯Ø© ØªØ£Ù‡ÙŠÙ„ Ù…Ù†ØªØ¸Ù…Ø©ØŒ ÙŠØ­Ø³Ù† Ù…Ø¹Ø¸Ù… Ø§Ù„Ù†Ø§Ø³ Ø­Ø±ÙƒØªÙ‡Ù… Ø¨Ø´ÙƒÙ„ ÙƒØ¨ÙŠØ± ÙˆÙŠÙ‚Ù„Ù„ÙˆÙ† Ø£Ù„Ù…Ù‡Ù….</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'traumatologie-sport', titleFr: 'Traumatologie du Sport', titleAr: 'Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ©', icon: <Bone size={20} /> },
    { slug: 'lombalgie-cervicalgie', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'Ø¢Ù„Ø§Ù… Ø§Ù„Ø¸Ù‡Ø± ÙˆØ§Ù„Ø±Ù‚Ø¨Ø©', icon: <Bone size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© ÙˆØ§Ù„Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§', icon: <Bone size={20} /> },
  ]
});

export default article4;



