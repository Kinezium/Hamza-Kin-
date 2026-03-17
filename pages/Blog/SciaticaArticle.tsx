import React from 'react';
import { Link } from 'react-router-dom';
import { createArticle } from './ArticleTemplate';
import { Zap, Flame, Stethoscope, Brain, Baby, Dumbbell, Bone, ArrowUpDown } from 'lucide-react';

const article1 = createArticle({
  slug: 'sciatique-hernie-discale',
  titleFr: 'La Sciatique & Hernie Discale: Guide Complet',
  titleAr: 'Ø¹Ø±Ù‚ Ø§Ù„Ù†Ø³Ø§ ÙˆØ§Ù„Ø§Ù†Ø²Ù„Ø§Ù‚ Ø§Ù„ØºØ¶Ø±ÙˆÙÙŠ: Ø¯Ù„ÙŠÙ„ Ø´Ø§Ù…Ù„',
  descriptionFr: 'DÃ©couvrez comment traiter la sciatique et la hernie discale avec la kinÃ©sithÃ©rapie. SymptÃ´mes, causes, traitements et exercices recommandÃ©s par nos experts Ã  Casablanca.',
  descriptionAr: 'ØªØ¹Ø±Ù Ø¹Ù„Ù‰ ÙƒÙŠÙÙŠØ© Ø¹Ù„Ø§Ø¬ Ø¹Ø±Ù‚ Ø§Ù„Ù†Ø³Ø§ ÙˆØ§Ù„Ø§Ù†Ø²Ù„Ø§Ù‚ Ø§Ù„ØºØ¶Ø±ÙˆÙÙŠ Ø¨Ø§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠ. Ø§Ù„Ø£Ø¹Ø±Ø§Ø¶ ÙˆØ§Ù„Ø£Ø³Ø¨Ø§Ø¨ ÙˆØ§Ù„Ø¹Ù„Ø§Ø¬Ø§Øª ÙˆØ§Ù„ØªÙ…Ø§Ø±ÙŠÙ† Ø§Ù„Ù…ÙˆØµÙ‰ Ø¨Ù‡Ø§ Ù…Ù† Ù‚Ø¨Ù„ Ø®Ø¨Ø±Ø§Ø¦Ù†Ø§.',
  keywordsFr: 'sciatique, hernie discale, kinÃ© casablanca, traitement sciatique, mal de dos, douleur jambe',
  keywordsAr: 'Ø¹Ø±Ù‚ Ø§Ù„Ù†Ø³Ø§, Ø§Ù†Ø²Ù„Ø§Ù‚ ØºØ¶Ø±ÙˆÙÙŠ, Ù…Ø±ÙˆØ¶ Ø·Ø¨ÙŠ, Ø¹Ù„Ø§Ø¬ Ø¹Ø±Ù‚ Ø§Ù„Ù†Ø³Ø§, Ø£Ù„Ù… Ø§Ù„Ø¸Ù‡Ø±, Ø£Ù„Ù… Ø§Ù„Ø³Ø§Ù‚',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '5 min de lecture',
  readTimeAr: '5 Ø¯Ù‚Ø§Ø¦Ù‚ Ù‚Ø±Ø§Ø¡Ø©',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Qu'est-ce que la sciatique?</h2>
        <p>La sciatique est une douleur causÃ©e par l'irritation du nerf sciatique, le plus long nerf du corps humain. Elle irradie gÃ©nÃ©ralement du bas du dos jusqu'au pied, provoquant une douleur aiguÃ«, des fourmillements ou une sensation de brÃ»lure en bas de la jambe.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">SymptÃ´mes Courants</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Douleur vive dans la fesse et le long de la jambe</li>
          <li>Sensation de dÃ©charge Ã©lectrique</li>
          <li>Engourdissement ou fourmillements</li>
          <li>DifficultÃ© Ã  marcher ou Ã  se lever</li>
          <li>Douleur accentuÃ©e en position assise prolongÃ©e</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Causes de la Sciatique</h2>
        <p>La cause la plus frÃ©quente est une hernie discale comprimant le nerf sciatique. D'autres causes incluent :</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Arthrose et dÃ©gÃ©nÃ©rescence discale</li>
          <li>StÃ©nose spinale (rÃ©trÃ©cissement du canal rachidien)</li>
          <li>Syndrome du piriforme</li>
          <li>Traumatisme ou blessure</li>
          <li>Mauvaise posture prolongÃ©e</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Traitement par KinÃ©sithÃ©rapie</h2>
        <p>Notre approche thÃ©rapeutique Ã  Centre Chnider comprend :</p>
        <ol className="list-decimal pl-6 space-y-2 mt-3">
          <li><strong>ThÃ©rapie Manuelle:</strong> Mobilisation douce pour rÃ©duire la compression nerveuse</li>
          <li><strong>DÃ©compression VertÃ©brale:</strong> Exercices spÃ©cialisÃ©s de McKenzie</li>
          <li><strong>Ã‰lectrothÃ©rapie:</strong> Traitement antalgique pour rÃ©duire la douleur</li>
          <li><strong>Renforcement Musculaire:</strong> Exercices des stabilisateurs du dos</li>
          <li><strong>Correction Posturale:</strong> Conseils d'ergonomie et prÃ©vention</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Protocole de RÃ©Ã©ducation</h2>
        <p>Un protocole typique comprend :</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>SÃ©ances 2-3 fois par semaine pendant 4-6 semaines</li>
          <li>Ã‰tirements quotidiens du muscle piriforme</li>
          <li>Marche quotidienne de 30 minutes</li>
          <li>Renforcement musculaire du core</li>
          <li>Ã‰viter les mouvements qui aggravent la douleur</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">PrÃ©vention</h2>
        <p>Pour prevenir les rÃ©cidives :</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Maintenir une bonne posture au travail</li>
          <li>Pratiquer une activitÃ© physique rÃ©guliÃ¨re</li>
          <li>Ã‰viter de soulever des charges lourdes</li>
          <li>Faire des Ã©tirements rÃ©guliers</li>
          <li>Maintenir un poids santÃ©</li>
        </ul>
      </section>
      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">ðŸ’¡ Conseil Professionnel</h3>
        <p>Si vous souffrez d'une sciatique depuis plus de 2-3 semaines sans amÃ©lioration, consultez notre Ã©quipe de kinÃ©sithÃ©rapeutes Ã  Casablanca. Le traitement prÃ©coce prÃ©vient les complications.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Ù…Ø§ Ù‡Ùˆ Ø¹Ø±Ù‚ Ø§Ù„Ù†Ø³Ø§ØŸ</h2>
        <p>Ø¹Ø±Ù‚ Ø§Ù„Ù†Ø³Ø§ Ù‡Ùˆ Ø£Ù„Ù… Ù†Ø§ØªØ¬ Ø¹Ù† ØªÙ‡ÙŠØ¬ Ø§Ù„Ø¹ØµØ¨ Ø§Ù„ÙˆØ±ÙƒÙŠØŒ Ø£Ø·ÙˆÙ„ Ø¹ØµØ¨ ÙÙŠ Ø¬Ø³Ù… Ø§Ù„Ø¥Ù†Ø³Ø§Ù†. Ø¹Ø§Ø¯Ø© Ù…Ø§ ÙŠÙ…ØªØ¯ Ø§Ù„Ø£Ù„Ù… Ù…Ù† Ø£Ø³ÙÙ„ Ø§Ù„Ø¸Ù‡Ø± Ø¥Ù„Ù‰ Ø§Ù„Ù‚Ø¯Ù…ØŒ Ù…Ø³Ø¨Ø¨Ø§Ù‹ Ø£Ù„Ù…Ø§Ù‹ Ø­Ø§Ø¯Ø§Ù‹ Ø£Ùˆ ØªÙ†Ù…ÙŠÙ„Ø§Ù‹ Ø£Ùˆ Ø¥Ø­Ø³Ø§Ø³Ø§Ù‹ Ø¨Ø§Ù„Ø­Ø±Ù‚Ø© ÙÙŠ Ø£Ø³ÙÙ„ Ø§Ù„Ø³Ø§Ù‚.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ø£Ø¹Ø±Ø§Ø¶ Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ø£Ù„Ù… Ø­Ø§Ø¯ ÙÙŠ Ø§Ù„Ø£Ø±Ø¯Ø§Ù ÙˆØ·ÙˆÙ„ Ø§Ù„Ø³Ø§Ù‚</li>
          <li>Ø¥Ø­Ø³Ø§Ø³ Ø¨ØµØ¯Ù…Ø© ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ©</li>
          <li>ØªÙ†Ù…ÙŠÙ„ Ø£Ùˆ ÙˆØ®Ø²</li>
          <li>ØµØ¹ÙˆØ¨Ø© ÙÙŠ Ø§Ù„Ù…Ø´ÙŠ Ø£Ùˆ Ø§Ù„ÙˆÙ‚ÙˆÙ</li>
          <li>Ø£Ù„Ù… ÙŠØ²Ø¯Ø§Ø¯ Ø³ÙˆØ¡Ø§Ù‹ Ø¹Ù†Ø¯ Ø§Ù„Ø¬Ù„ÙˆØ³ Ù„ÙØªØ±Ø© Ø·ÙˆÙŠÙ„Ø©</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø£Ø³Ø¨Ø§Ø¨ Ø¹Ø±Ù‚ Ø§Ù„Ù†Ø³Ø§</h2>
        <p>Ø§Ù„Ø³Ø¨Ø¨ Ø§Ù„Ø£ÙƒØ«Ø± Ø´ÙŠÙˆØ¹Ø§Ù‹ Ù‡Ùˆ Ø§Ù„Ø§Ù†Ø²Ù„Ø§Ù‚ Ø§Ù„ØºØ¶Ø±ÙˆÙÙŠ Ø§Ù„Ø°ÙŠ ÙŠØ¶ØºØ· Ø¹Ù„Ù‰ Ø§Ù„Ø¹ØµØ¨ Ø§Ù„ÙˆØ±ÙƒÙŠ. ØªØ´Ù…Ù„ Ø§Ù„Ø£Ø³Ø¨Ø§Ø¨ Ø§Ù„Ø£Ø®Ø±Ù‰:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Ø®Ø´ÙˆÙ†Ø© Ø§Ù„Ù…ÙØ§ØµÙ„ ÙˆØ§Ù„ØªØ¢ÙƒÙ„ Ø§Ù„ØºØ¶Ø±ÙˆÙÙŠ</li>
          <li>Ø¶ÙŠÙ‚ Ø§Ù„Ù‚Ù†Ø§Ø© Ø§Ù„Ø´ÙˆÙƒÙŠØ©</li>
          <li>Ù…ØªÙ„Ø§Ø²Ù…Ø© Ø§Ù„ÙƒÙ…Ø«Ø±ÙŠØ©</li>
          <li>Ø¥ØµØ§Ø¨Ø© Ø£Ùˆ ØµØ¯Ù…Ø©</li>
          <li>ÙˆØ¶Ø¹ÙŠØ© Ø³ÙŠØ¦Ø© Ù„ÙØªØ±Ø© Ø·ÙˆÙŠÙ„Ø©</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø¨Ø§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠ</h2>
        <p>ÙŠØªØ¶Ù…Ù† Ù†Ù‡Ø¬Ù†Ø§ Ø§Ù„Ø¹Ù„Ø§Ø¬ÙŠ ÙÙŠ Ù…Ø±ÙƒØ² Ø§Ø´Ù†ÙŠØ¯Ø±:</p>
        <ol className="list-decimal pl-6 space-y-2 mt-3">
          <li><strong>Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„ÙŠØ¯ÙˆÙŠ:</strong> ØªØ­Ø±ÙŠÙƒ Ù„Ø·ÙŠÙ Ù„ØªÙ‚Ù„ÙŠÙ„ Ø¶ØºØ· Ø§Ù„Ø£Ø¹ØµØ§Ø¨</li>
          <li><strong>ØªØ®ÙÙŠÙ Ø¶ØºØ· Ø§Ù„ÙÙ‚Ø±Ø§Øª:</strong> ØªÙ…Ø§Ø±ÙŠÙ† Ù…Ø§ÙƒÙŠÙ†Ø²ÙŠ Ø§Ù„Ù…ØªØ®ØµØµØ©</li>
          <li><strong>Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠ:</strong> Ø¹Ù„Ø§Ø¬ Ù„Ù„ØªØ®ÙÙŠÙ Ù…Ù† Ø§Ù„Ø£Ù„Ù…</li>
          <li><strong>ØªÙ‚ÙˆÙŠØ© Ø§Ù„Ø¹Ø¶Ù„Ø§Øª:</strong> ØªÙ…Ø§Ø±ÙŠÙ† Ù„Ù…Ø«Ø¨ØªØ§Øª Ø§Ù„Ø¸Ù‡Ø±</li>
          <li><strong>ØªØµØ­ÙŠØ­ Ø§Ù„ÙˆØ¶Ø¹ÙŠØ©:</strong> Ù†ØµØ§Ø¦Ø­ Ø§Ù„Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§ ÙˆØ§Ù„ÙˆÙ‚Ø§ÙŠØ©</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø®Ø·Ø© Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ£Ù‡ÙŠÙ„</h2>
        <p>ØªØªØ¶Ù…Ù† Ø§Ù„Ø®Ø·Ø© Ø§Ù„Ù†Ù…ÙˆØ°Ø¬ÙŠØ©:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Ø¬Ù„Ø³Ø§Øª 2-3 Ù…Ø±Ø§Øª Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ Ù„Ù…Ø¯Ø© 4-6 Ø£Ø³Ø§Ø¨ÙŠØ¹</li>
          <li>ØªÙ…Ø¯ÙŠØ¯Ø§Øª ÙŠÙˆÙ…ÙŠØ© Ù„Ø¹Ø¶Ù„Ø© Ø§Ù„ÙƒÙ…Ø«Ø±ÙŠØ©</li>
          <li>Ø§Ù„Ù…Ø´ÙŠ Ø§Ù„ÙŠÙˆÙ…ÙŠ Ù„Ù…Ø¯Ø© 30 Ø¯Ù‚ÙŠÙ‚Ø©</li>
          <li>ØªÙ‚ÙˆÙŠØ© Ø¹Ø¶Ù„Ø§Øª Ø§Ù„Ø¬Ø°Ø¹</li>
          <li>ØªØ¬Ù†Ø¨ Ø§Ù„Ø­Ø±ÙƒØ§Øª Ø§Ù„ØªÙŠ ØªØ²ÙŠØ¯ Ø§Ù„Ø£Ù„Ù…</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„ÙˆÙ‚Ø§ÙŠØ©</h2>
        <p>Ù„Ù…Ù†Ø¹ ØªÙƒØ±Ø§Ø± Ø§Ù„Ù…Ø´ÙƒÙ„Ø©:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Ø§Ù„Ø­ÙØ§Ø¸ Ø¹Ù„Ù‰ ÙˆØ¶Ø¹ÙŠØ© Ø³Ù„ÙŠÙ…Ø© ÙÙŠ Ø§Ù„Ø¹Ù…Ù„</li>
          <li>Ù…Ù…Ø§Ø±Ø³Ø© Ø§Ù„Ù†Ø´Ø§Ø· Ø§Ù„Ø¨Ø¯Ù†ÙŠ Ø¨Ø§Ù†ØªØ¸Ø§Ù…</li>
          <li>ØªØ¬Ù†Ø¨ Ø­Ù…Ù„ Ø§Ù„Ø£Ø«Ù‚Ø§Ù„</li>
          <li>Ø§Ù„Ù‚ÙŠØ§Ù… Ø¨ØªÙ…Ø¯ÙŠØ¯Ø§Øª Ù…Ù†ØªØ¸Ù…Ø©</li>
          <li>Ø§Ù„Ø­ÙØ§Ø¸ Ø¹Ù„Ù‰ ÙˆØ²Ù† ØµØ­ÙŠ</li>
        </ul>
      </section>
      <section className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">ðŸ’¡ Ù†ØµÙŠØ­Ø© Ø§Ø­ØªØ±Ø§ÙÙŠØ©</h3>
        <p>Ø¥Ø°Ø§ ÙƒÙ†Øª ØªØ¹Ø§Ù†ÙŠ Ù…Ù† Ø¹Ø±Ù‚ Ø§Ù„Ù†Ø³Ø§ Ù„Ø£ÙƒØ«Ø± Ù…Ù† 2-3 Ø£Ø³Ø§Ø¨ÙŠØ¹ Ø¯ÙˆÙ† ØªØ­Ø³Ù†ØŒ Ø§Ø³ØªØ´Ø± ÙØ±ÙŠÙ‚Ù†Ø§ Ù…Ù† Ø§Ù„Ù…Ø¹Ø§Ù„Ø¬ÙŠÙ† Ø§Ù„ÙÙŠØ²ÙŠØ§Ø¦ÙŠÙŠÙ† Ø¨Ø§Ù„Ø¯Ø§Ø± Ø§Ù„Ø¨ÙŠØ¶Ø§Ø¡. Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„Ù…Ø¨ÙƒØ± ÙŠÙ…Ù†Ø¹ Ø§Ù„Ù…Ø¶Ø§Ø¹ÙØ§Øª.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'lombalgie-cervicalgie', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'Ø¢Ù„Ø§Ù… Ø§Ù„Ø¸Ù‡Ø± ÙˆØ§Ù„Ø±Ù‚Ø¨Ø©', icon: <ArrowUpDown size={20} /> },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© ÙˆØ§Ù„Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§', icon: <Stethoscope size={20} /> },
    { slug: 'traumatologie-sport', titleFr: 'Traumatologie du Sport', titleAr: 'Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ©', icon: <Dumbbell size={20} /> },
  ]
});

export default article1;



