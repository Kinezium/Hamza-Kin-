import { createArticle } from './ArticleTemplate';
import { Dumbbell } from 'lucide-react';

const article3 = createArticle({
  slug: 'traumatologie-sport',
  titleFr: 'Traumatologie du Sport: Récupération Rapide',
  titleAr: 'ا�إصابات ا�ر�`اض�`ة: ا�تعاف�` ا�سر�`ع',
  descriptionFr: 'Entorses, tendinites, déchirures musculaires. Apprenez comment récupérer rapidement après une blessure sportive avec la kinésithérapie.',
  descriptionAr: 'ع�اج ا�ا�ت��اءات ��ا�ت�!اب ا�أ��تار ��ا�ت�&ز�ات ا�عض��`ة. تعرف ع��0 ْ�`ف�`ة ا�تعاف�` ا�سر�`ع �&�  ا�إصابة ا�ر�`اض�`ة.',
  keywordsFr: 'blessure sport, entorse, tendinite, trauma sport, kiné sport, rééducation',
  keywordsAr: 'إصابة ر�`اض�`ة, ا�ت��اء, ا�ت�!اب ��تر, تأ�!�`� ر�`اض�`',
  imageFr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  imageAr: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 د�ائ� �راءة',
  contentFr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Les Blessures Sportives</h2>
        <p>Les blessures sportives sont courantes chez les athlÃ¨tes et les amateurs de sport Ã  Casablanca. Elles incluent les entorses, les tendinites, les dÃ©chirures musculaires et les fractures de fatigue. Une rÃ©Ã©ducation appropriÃ©e est essentielle pour retourner au sport en toute sÃ©curitÃ©.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Types de Blessures Courants</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Entorses:</strong> Ã‰tirement ou dÃ©chirure des ligaments</li>
          <li><strong>Tendinites:</strong> Inflammation des tendons</li>
          <li><strong>DÃ©chirures Musculaires:</strong> Rupture des fibres musculaires</li>
          <li><strong>Fractures de Fatigue:</strong> Petites fissures des os</li>
          <li><strong>Syndrome de sur-utilisation:</strong> Surmenage chronique</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Protocole RICE ImmÃ©diat</h2>
        <p>Dans les 48-72 heures suivant la blessure:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong>Rest (Repos):</strong> Immobilisation et arrÃªt de l'activité</li>
          <li><strong>Ice (Glaçage):</strong> 15 minutes toutes les 2-3 heures</li>
          <li><strong>Compression:</strong> Bande élastique pour réduire le gonflement</li>
          <li><strong>Elevation:</strong> Surélévation pour drainer le liquide</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Phases de Rééducation</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold mb-2">Phase 1: Protection (Jours 1-3)</h3>
            <p>Repos complet, glaçage, compression. Début des exercices isométriques doux.</p>
          </div>
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold mb-2">Phase 2: Mobilisation (Jours 4-10)</h3>
            <p>Exercices de mobilité passive, puis active. Début du renforcement léger.</p>
          </div>
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold mb-2">Phase 3: Renforcement (Semaines 2-4)</h3>
            <p>Renforcement progressif et récupération proprioceptive.</p>
          </div>
          <div className="border-l-4 border-medical-600 pl-4">
            <h3 className="font-bold mb-2">Phase 4: Retour au Sport (Semaines 4-6)</h3>
            <p>Entraînement fonctionnel et sport-spécifique.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Prévention des Rechutes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>�0chauffement complet avant l'activitÃ©</li>
          <li>Exercices de force et flexibilitÃ© rÃ©guliers</li>
          <li>Progression graduelle de l'intensité</li>
          <li>Récupération adéquate entre les séances</li>
          <li>Suivi des signaux d'alerte de votre corps</li>
        </ul>
      </section>
      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">âš ï¸ Points Importants</h3>
        <p>Ne retournez pas au sport trop tÃ´t. Une rÃ©Ã©ducation complÃ¨te peut prendre 4-6 semaines. Ã€ Centre Chnider, nos kinÃ©sithÃ©rapeutes spÃ©cialisÃ©s suivent votre progression.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ©</h2>
        <p>Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ© Ø´Ø§Ø¦Ø¹Ø© Ø¬Ø¯Ø§Ù‹ Ø¨ÙŠÙ† Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠÙŠÙ† ÙˆÙ‡ÙˆØ§Ø© Ø§Ù„Ø±ÙŠØ§Ø¶Ø© Ø¨Ø§Ù„Ø¯Ø§Ø± Ø§Ù„Ø¨ÙŠØ¶Ø§Ø¡. ØªØ´Ù…Ù„ Ø§Ù„Ø§Ù„ØªÙˆØ§Ø¡Ø§Øª ÙˆØ§Ù„ØªÙ‡Ø§Ø¨ Ø§Ù„Ø£ÙˆØªØ§Ø± ÙˆØ§Ù„ØªÙ…Ø²Ù‚Ø§Øª Ø§Ù„Ø¹Ø¶Ù„ÙŠØ© ÙˆÙƒØ³ÙˆØ± Ø§Ù„Ø¥Ø¬Ù‡Ø§Ø¯. Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ£Ù‡ÙŠÙ„ Ø§Ù„ØµØ­ÙŠØ­Ø© Ø¶Ø±ÙˆØ±ÙŠØ© Ù„Ù„Ø¹ÙˆØ¯Ø© Ø§Ù„Ø¢Ù…Ù†Ø© Ø¥Ù„Ù‰ Ø§Ù„Ø±ÙŠØ§Ø¶Ø©.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø£Ù†ÙˆØ§Ø¹ Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ø§Ù„Ø§Ù„ØªÙˆØ§Ø¡Ø§Øª:</strong> ØªÙ…Ø¯Ø¯ Ø£Ùˆ ØªÙ…Ø²Ù‚ Ø§Ù„Ø£Ø±Ø¨Ø·Ø©</li>
          <li><strong>Ø§Ù„ØªÙ‡Ø§Ø¨ Ø§Ù„Ø£ÙˆØªØ§Ø±:</strong> Ø§Ù„ØªÙ‡Ø§Ø¨ Ø§Ù„Ø£ÙˆØªØ§Ø±</li>
          <li><strong>Ø§Ù„ØªÙ…Ø²Ù‚Ø§Øª Ø§Ù„Ø¹Ø¶Ù„ÙŠØ©:</strong> ØªÙ…Ø²Ù‚ Ø£Ù„ÙŠØ§Ù Ø§Ù„Ø¹Ø¶Ù„</li>
          <li><strong>ÙƒØ³ÙˆØ± Ø§Ù„Ø¥Ø¬Ù‡Ø§Ø¯:</strong> Ø´Ù‚ÙˆÙ‚ ØµØºÙŠØ±Ø© ÙÙŠ Ø§Ù„Ø¹Ø¸Ø§Ù…</li>
          <li><strong>Ù…ØªÙ„Ø§Ø²Ù…Ø© Ø§Ù„Ø¥ÙØ±Ø§Ø· ÙÙŠ Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…:</strong> Ø§Ù„Ø¥Ø¬Ù‡Ø§Ø¯ Ø§Ù„Ù…Ø²Ù…Ù†</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ø¨Ø±ÙˆØªÙˆÙƒÙˆÙ„ RICE Ø§Ù„ÙÙˆØ±ÙŠ</h2>
        <p>ÙÙŠ Ø£ÙˆÙ„ 48-72 Ø³Ø§Ø¹Ø© Ø¨Ø¹Ø¯ Ø§Ù„Ø¥ØµØ§Ø¨Ø©:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong>Ø§Ù„Ø±Ø§Ø­Ø©:</strong> Ø¥ÙŠÙ‚Ø§Ù Ø§Ù„Ù†Ø´Ø§Ø·</li>
          <li><strong>Ø§Ù„Ø«Ù„Ø¬:</strong> 15 Ø¯Ù‚ÙŠÙ‚Ø© ÙƒÙ„ 2-3 Ø³Ø§Ø¹Ø§Øª</li>
          <li><strong>Ø§Ù„Ø¶ØºØ·:</strong> Ø´Ø±ÙŠØ· Ù…Ø±Ù† Ù„ØªÙ‚Ù„ÙŠÙ„ Ø§Ù„ØªÙˆØ±Ù…</li>
          <li><strong>Ø§Ù„Ø±ÙØ¹:</strong> Ø±ÙØ¹ Ø§Ù„Ù…Ù†Ø·Ù‚Ø© Ø§Ù„Ù…ØµØ§Ø¨Ø©</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ù…Ø±Ø§Ø­Ù„ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ£Ù‡ÙŠÙ„</h2>
        <div className="space-y-4">
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold mb-2">Ø§Ù„Ù…Ø±Ø­Ù„Ø© 1: Ø§Ù„Ø­Ù…Ø§ÙŠØ© (Ø§Ù„ÙŠÙˆÙ… 1-3)</h3>
            <p>Ø±Ø§Ø­Ø© ÙƒØ§Ù…Ù„Ø©ØŒ Ø«Ù„Ø¬ØŒ Ø¶ØºØ·. Ø¨Ø¯Ø¡ ØªÙ…Ø§Ø±ÙŠÙ† Ø«Ø§Ø¨ØªØ© Ø®ÙÙŠÙØ©.</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold mb-2">Ø§Ù„Ù…Ø±Ø­Ù„Ø© 2: Ø§Ù„Ø­Ø±ÙƒØ© (Ø§Ù„ÙŠÙˆÙ… 4-10)</h3>
            <p>ØªÙ…Ø§Ø±ÙŠÙ† Ø­Ø±ÙƒÙŠØ© Ø³Ù„Ø¨ÙŠØ©ØŒ Ø«Ù… Ø¥ÙŠØ¬Ø§Ø¨ÙŠØ©. Ø¨Ø¯Ø¡ Ø§Ù„ØªÙ‚ÙˆÙŠØ© Ø§Ù„Ø®ÙÙŠÙØ©.</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold mb-2">Ø§Ù„Ù…Ø±Ø­Ù„Ø© 3: Ø§Ù„ØªÙ‚ÙˆÙŠØ© (Ø£Ø³Ø¨ÙˆØ¹ 2-4)</h3>
            <p>ØªÙ‚ÙˆÙŠØ© ØªØ¯Ø±ÙŠØ¬ÙŠØ© ÙˆØ§Ø³ØªØ¹Ø§Ø¯Ø© Ø§Ù„Ø­Ø³.</p>
          </div>
          <div className="border-r-4 border-medical-600 pr-4">
            <h3 className="font-bold mb-2">Ø§Ù„Ù…Ø±Ø­Ù„Ø© 4: Ø§Ù„Ø¹ÙˆØ¯Ø© Ù„Ù„Ø±ÙŠØ§Ø¶Ø© (Ø£Ø³Ø¨ÙˆØ¹ 4-6)</h3>
            <p>ØªØ¯Ø±ÙŠØ¨ ÙˆØ¸ÙŠÙÙŠ ÙˆØ®Ø§Øµ Ø¨Ø§Ù„Ø±ÙŠØ§Ø¶Ø©.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Ù…Ù†Ø¹ Ø§Ù„Ø§Ù†ØªÙƒØ§Ø³Ø§Øª</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ø¥Ø­Ù…Ø§Ø¡ Ø´Ø§Ù…Ù„ Ù‚Ø¨Ù„ Ø§Ù„Ù†Ø´Ø§Ø·</li>
          <li>ØªÙ…Ø§Ø±ÙŠÙ† Ù‚ÙˆØ© ÙˆÙ…Ø±ÙˆÙ†Ø© Ù…Ù†ØªØ¸Ù…Ø©</li>
          <li>Ø²ÙŠØ§Ø¯Ø© ØªØ¯Ø±ÙŠØ¬ÙŠØ© Ù„Ù„Ø´Ø¯Ø©</li>
          <li>Ø§Ø³ØªØ±Ø¬Ø§Ø¹ ÙƒØ§ÙÙ Ø¨ÙŠÙ† Ø§Ù„Ø¬Ù„Ø³Ø§Øª</li>
          <li>Ø§Ù„Ø§Ø³ØªÙ…Ø§Ø¹ Ù„Ø¥Ø´Ø§Ø±Ø§Øª Ø¬Ø³Ø¯Ùƒ</li>
        </ul>
      </section>
      <section className="bg-orange-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">âš ï¸ Ù†Ù‚Ø§Ø· Ù…Ù‡Ù…Ø©</h3>
        <p>Ù„Ø§ ØªØ¹Ø¯ Ø¥Ù„Ù‰ Ø§Ù„Ø±ÙŠØ§Ø¶Ø© Ù…Ø¨ÙƒØ±Ø§Ù‹. Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ£Ù‡ÙŠÙ„ Ø§Ù„ÙƒØ§Ù…Ù„Ø© Ù‚Ø¯ ØªØ³ØªØºØ±Ù‚ 4-6 Ø£Ø³Ø§Ø¨ÙŠØ¹. ÙÙŠ Ù…Ø±ÙƒØ² Ø§Ø´Ù†ÙŠØ¯Ø±ØŒ Ù…ØªØ®ØµØµÙˆÙ†Ø§ ÙŠØ±Ø§Ù‚Ø¨ÙˆÙ† ØªÙ‚Ø¯Ù…Ùƒ.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'douleurs-epaules-capsulite', titleFr: 'Douleurs aux �0paules', titleAr: 'أ��& ا�ْتف�`� ', icon: <Dumbbell size={20} /> },
    { slug: 'arthrose-genou', titleFr: 'Arthrose du Genou', titleAr: 'خش��� ة ا�رْبة', icon: <Dumbbell size={20} /> },
    { slug: 'recuperation-sportive-prevention-blessures', titleFr: 'Récupération Sportive', titleAr: 'استرجاع ر�`اض�`', icon: <Dumbbell size={20} /> },
  ]
});

export default article3;



