import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import SEOHead from '../components/SEOHead';
import { Zap, ArrowUpDown, Dumbbell, Bone, Stethoscope, Brain, Baby, Flame } from 'lucide-react';
import { getWhatsAppBookingLink } from '../constants';
import { BLOG_TOPIC_IMAGES } from './Blog/blogImages';

interface BlogPost {
  slug: string;
  titleFr: string;
  titleAr: string;
  descFr: string;
  descAr: string;
  icon: React.ReactNode;
  image: string;
  readTimeFr: string;
  readTimeAr: string;
}

interface BlogIndexProps {
  lang: Language;
}

const BlogIndex: React.FC<BlogIndexProps> = ({ lang }) => {
  const prefix = lang === 'ar' ? '/ar' : '';
  
  const posts: BlogPost[] = [
    {
      slug: 'sciatique-hernie-discale',
      titleFr: 'La Sciatique & Hernie Discale',
      titleAr: 'Ø¹Ø±Ù‚ Ø§Ù„Ù†Ø³Ø§ ÙˆØ§Ù„Ø§Ù†Ø²Ù„Ø§Ù‚ Ø§Ù„ØºØ¶Ø±ÙˆÙÙŠ',
      descFr: 'Guide complet sur le traitement de la sciatique et hernie discale',
      descAr: 'Ø¯Ù„ÙŠÙ„ Ø´Ø§Ù…Ù„ Ù„Ø¹Ù„Ø§Ø¬ Ø¹Ø±Ù‚ Ø§Ù„Ù†Ø³Ø§ ÙˆØ§Ù„Ø§Ù†Ø²Ù„Ø§Ù‚ Ø§Ù„ØºØ¶Ø±ÙˆÙÙŠ',
      icon: <Zap size={28} />,
      image: BLOG_TOPIC_IMAGES['sciatique-hernie-discale'],
      readTimeFr: '5 min',
      readTimeAr: '5 Ø¯Ù‚Ø§Ø¦Ù‚'
    },
    {
      slug: 'lombalgie-cervicalgie',
      titleFr: 'Lombalgie & Cervicalgie',
      titleAr: 'Ø¢Ù„Ø§Ù… Ø§Ù„Ø¸Ù‡Ø± ÙˆØ§Ù„Ø±Ù‚Ø¨Ø©',
      descFr: 'Solutions efficaces pour soulager vos douleurs de dos et cou',
      descAr: 'Ø­Ù„ÙˆÙ„ ÙØ¹Ø§Ù„Ø© Ù„ØªØ®ÙÙŠÙ Ø¢Ù„Ø§Ù… Ø§Ù„Ø¸Ù‡Ø± ÙˆØ§Ù„Ø±Ù‚Ø¨Ø©',
      icon: <ArrowUpDown size={28} />,
      image: BLOG_TOPIC_IMAGES['lombalgie-cervicalgie'],
      readTimeFr: '6 min',
      readTimeAr: '6 Ø¯Ù‚Ø§Ø¦Ù‚'
    },
    {
      slug: 'traumatologie-sport',
      titleFr: 'Traumatologie du Sport',
      titleAr: 'Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ©',
      descFr: 'RÃ©cupÃ©ration rapide aprÃ¨s les blessures sportives',
      descAr: 'Ø§Ù„ØªØ¹Ø§ÙÙŠ Ø§Ù„Ø³Ø±ÙŠØ¹ Ù…Ù† Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ©',
      icon: <Dumbbell size={28} />,
      image: BLOG_TOPIC_IMAGES['traumatologie-sport'],
      readTimeFr: '7 min',
      readTimeAr: '7 Ø¯Ù‚Ø§Ø¦Ù‚'
    },
    {
      slug: 'arthrose-genou',
      titleFr: 'Arthrose du Genou',
      titleAr: 'Ø®Ø´ÙˆÙ†Ø© Ø§Ù„Ø±ÙƒØ¨Ø©',
      descFr: 'Vie sans douleur malgrÃ© l\'arthrose',
      descAr: 'Ø§Ù„Ø­ÙŠØ§Ø© Ø¨Ø¯ÙˆÙ† Ø£Ù„Ù… Ø±ØºÙ… Ø®Ø´ÙˆÙ†Ø© Ø§Ù„Ù…ÙØ§ØµÙ„',
      icon: <Bone size={28} />,
      image: BLOG_TOPIC_IMAGES['arthrose-genou'],
      readTimeFr: '6 min',
      readTimeAr: '6 Ø¯Ù‚Ø§Ø¦Ù‚'
    },
    {
      slug: 'douleurs-epaules-capsulite',
      titleFr: 'Douleurs aux Ã‰paules',
      titleAr: 'Ø£Ù„Ù… Ø§Ù„ÙƒØªÙÙŠÙ†',
      descFr: 'Traitement de la capsulite et douleurs d\'Ã©paule',
      descAr: 'Ø¹Ù„Ø§Ø¬ ØªØ¬Ù…Ø¯ Ø§Ù„ÙƒØªÙ ÙˆØ£Ù„Ù… Ø§Ù„Ø£ÙƒØªØ§Ù',
      icon: <Stethoscope size={28} />,
      image: BLOG_TOPIC_IMAGES['douleurs-epaules-capsulite'],
      readTimeFr: '6 min',
      readTimeAr: '6 Ø¯Ù‚Ø§Ø¦Ù‚'
    },
    {
      slug: 'migraines-cephalees',
      titleFr: 'Migraines & CÃ©phalÃ©es',
      titleAr: 'Ø§Ù„ØµØ¯Ø§Ø¹ ÙˆØ§Ù„Ø´Ù‚ÙŠÙ‚Ø©',
      descFr: 'Soulagement naturel des migraines et cÃ©phalÃ©es de tension',
      descAr: 'ØªØ®ÙÙŠÙ Ø·Ø¨ÙŠØ¹ÙŠ Ù…Ù† Ø§Ù„ØµØ¯Ø§Ø¹ ÙˆØ§Ù„Ø´Ù‚ÙŠÙ‚Ø©',
      icon: <Brain size={28} />,
      image: BLOG_TOPIC_IMAGES['migraines-cephalees'],
      readTimeFr: '5 min',
      readTimeAr: '5 Ø¯Ù‚Ø§Ø¦Ù‚'
    },
    {
      slug: 'kine-pediatrique',
      titleFr: 'PhysiothÃ©rapie PÃ©diatrique',
      titleAr: 'Ø§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠ Ù„Ù„Ø£Ø·ÙØ§Ù„',
      descFr: 'DÃ©veloppement normal de l\'enfant et rÃ©Ã©ducation pÃ©diatrique',
      descAr: 'Ø§Ù„Ù†Ù…Ùˆ Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠ Ù„Ù„Ø·ÙÙ„ ÙˆØ§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠ',
      icon: <Baby size={28} />,
      image: BLOG_TOPIC_IMAGES['kine-pediatrique'],
      readTimeFr: '6 min',
      readTimeAr: '6 Ø¯Ù‚Ø§Ø¦Ù‚'
    },
    {
      slug: 'readaptation-post-avc',
      titleFr: 'RÃ©adaptation Post-AVC',
      titleAr: 'Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ£Ù‡ÙŠÙ„ Ù…Ø§ Ø¨Ø¹Ø¯ Ø§Ù„Ø¬Ù„Ø·Ø©',
      descFr: 'Reprendre votre vie aprÃ¨s un AVC',
      descAr: 'Ø§Ø³ØªØ¹Ø§Ø¯Ø© Ø§Ù„Ø­ÙŠØ§Ø© Ø¨Ø¹Ø¯ Ø§Ù„Ø³ÙƒØªØ© Ø§Ù„Ø¯Ù…Ø§ØºÙŠØ©',
      icon: <Flame size={28} />,
      image: BLOG_TOPIC_IMAGES['readaptation-post-avc'],
      readTimeFr: '7 min',
      readTimeAr: '7 Ø¯Ù‚Ø§Ø¦Ù‚'
    },
    {
      slug: 'posture-ergonomie',
      titleFr: 'Posture & Ergonomie',
      titleAr: 'Ø§Ù„ÙˆØ¶Ø¹ÙŠØ© ÙˆØ§Ù„Ø¥Ø±Ø¬ÙˆÙ†ÙˆÙ…ÙŠØ§',
      descFr: 'PrÃ©vention des douleurs par une bonne posture',
      descAr: 'Ù…Ù†Ø¹ Ø§Ù„Ø¢Ù„Ø§Ù… Ù…Ù† Ø®Ù„Ø§Ù„ ÙˆØ¶Ø¹ÙŠØ© ØµØ­ÙŠØ­Ø©',
      icon: <Stethoscope size={28} />,
      image: BLOG_TOPIC_IMAGES['posture-ergonomie'],
      readTimeFr: '5 min',
      readTimeAr: '5 Ø¯Ù‚Ø§Ø¦Ù‚'
    },
    {
      slug: 'recuperation-sportive-prevention-blessures',
      titleFr: 'RÃ©cupÃ©ration Sportive',
      titleAr: 'Ø§Ù„Ø§Ø³ØªØ´ÙØ§Ø¡ Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠ',
      descFr: 'Optimisation de la rÃ©cupÃ©ration et prÃ©vention des blessures',
      descAr: 'ØªØ­Ø³ÙŠÙ† Ø§Ù„Ø§Ø³ØªØ´ÙØ§Ø¡ ÙˆÙ…Ù†Ø¹ Ø§Ù„Ø¥ØµØ§Ø¨Ø§Øª',
      icon: <Dumbbell size={28} />,
      image: BLOG_TOPIC_IMAGES['recuperation-sportive-prevention-blessures'],
      readTimeFr: '6 min',
      readTimeAr: '6 Ø¯Ù‚Ø§Ø¦Ù‚'
    }
  ];

  const t = lang === 'fr' ? {
    title: 'Blog KinÃ©sithÃ©rapie',
    description: 'DÃ©couvrez nos articles sur les pathologies, conseils et solutions de traitement',
    articles: 'Tous les Articles',
    readMore: 'Lire l\'article'
  } : {
    title: 'Ù…Ø¯ÙˆÙ†Ø© Ø§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠ',
    description: 'Ø§ÙƒØªØ´Ù Ù…Ù‚Ø§Ù„Ø§ØªÙ†Ø§ Ø¹Ù† Ø§Ù„Ø£Ù…Ø±Ø§Ø¶ ÙˆØ§Ù„Ù†ØµØ§Ø¦Ø­ ÙˆØ­Ù„ÙˆÙ„ Ø§Ù„Ø¹Ù„Ø§Ø¬',
    articles: 'Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ù‚Ø§Ù„Ø§Øª',
    readMore: 'Ø§Ù‚Ø±Ø£ Ø§Ù„Ù…Ù‚Ø§Ù„'
  };

  return (
    <>
      <SEOHead 
        title={lang === 'fr' ? 'Blog KinÃ©sithÃ©rapie | Centre Chnider' : 'Ù…Ø¯ÙˆÙ†Ø© Ø§Ù„ØªØ±ÙˆÙŠØ¶ Ø§Ù„Ø·Ø¨ÙŠ | Ù…Ø±ÙƒØ² Ø§Ø´Ù†ÙŠØ¯Ø±'} 
        description={lang === 'fr' 
          ? 'Articles sur les pathologies, conseils de prÃ©vention, solutions de traitement et exercices recommandÃ©s par nos experts.'
          : 'Ù…Ù‚Ø§Ù„Ø§Øª Ø¹Ù† Ø§Ù„Ø£Ù…Ø±Ø§Ø¶ ÙˆØ§Ù„Ù†ØµØ§Ø¦Ø­ ÙˆØ§Ù„Ø­Ù„ÙˆÙ„ ÙˆØ§Ù„ØªÙ…Ø§Ø±ÙŠÙ† Ø§Ù„Ù…ÙˆØµÙ‰ Ø¨Ù‡Ø§ Ù…Ù† Ù‚Ø¨Ù„ Ø®Ø¨Ø±Ø§Ø¦Ù†Ø§.'
        }
        keywords={lang === 'fr'
          ? 'blog kinÃ©, articles kinÃ©sithÃ©rapie, conseils santÃ©, pathologies, traitement'
          : 'Ù…Ø¯ÙˆÙ†Ø© ØªØ±ÙˆÙŠØ¶ Ø·Ø¨ÙŠ, Ù…Ù‚Ø§Ù„Ø§Øª ØµØ­ÙŠØ©, Ø£Ù…Ø±Ø§Ø¶, Ø¹Ù„Ø§Ø¬Ø§Øª'
        }
      />

      <div className={lang === 'ar' ? 'font-arabic rtl' : 'ltr'} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-medical-600 to-medical-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-medical-100 max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.articles}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`${prefix}/blog/${post.slug}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition transform duration-300"
                >
                  <div className="relative h-40">
                    <img
                      src={post.image}
                      alt={lang === 'fr' ? post.titleFr : post.titleAr}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                      <div className="text-white">
                      {post.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-medical-600 transition">
                      {lang === 'fr' ? post.titleFr : post.titleAr}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {lang === 'fr' ? post.descFr : post.descAr}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {lang === 'fr' ? post.readTimeFr : post.readTimeAr}
                      </span>
                      <span className="text-medical-600 font-semibold hover:text-medical-700 transition">
                        {t.readMore} â†’
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-medical-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {lang === 'fr' ? 'Vous avez une question?' : 'Ù„Ø¯ÙŠÙƒ Ø§Ø³ØªÙØ³Ø§Ø±ØŸ'}
            </h2>
            <p className="text-medical-100 mb-8">
              {lang === 'fr'
                ? 'Contactez notre Ã©quipe pour une consultation personalisÃ©e.'
                : 'Ø§ØªØµÙ„ Ø¨ÙØ±ÙŠÙ‚Ù†Ø§ Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ø³ØªØ´Ø§Ø±Ø© Ø´Ø®ØµÙŠØ©.'}
            </p>
            <a
              href={getWhatsAppBookingLink(lang, 'Blog')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
            >
              {lang === 'fr' ? 'Contactez-nous sur WhatsApp' : 'ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨'}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogIndex;



