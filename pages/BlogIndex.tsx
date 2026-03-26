import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import SEOHead from '../components/SEOHead';
import { Zap, ArrowUpDown, Dumbbell, Bone, Stethoscope, Brain, Baby, Flame } from 'lucide-react';
import { getManagedSeo, makeWhatsAppLink, useAdminConfig, useManagedBlogImages } from '../src/adminConfig';

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
  const config = useAdminConfig();
  const managedImages = useManagedBlogImages();
  const seo = getManagedSeo(config, 'blog', lang, {
    title: lang === 'fr' ? 'Blog Kinesitherapie | Centre Chnider' : 'مدونة الترويض الطبي | مركز اشنيدر',
    description: lang === 'fr' ? 'Articles sur les pathologies, conseils de prevention, solutions de traitement et exercices recommandes par nos experts.' : 'مقالات عن الأمراض والنصائح والحلول والتمارين الموصى بها من قبل خبرائنا.',
    keywords: lang === 'fr' ? 'blog kine, articles kinesitherapie, conseils sante, pathologies, traitement' : 'مدونة ترويض طبي, مقالات صحية, أمراض, علاجات'
  });

  const posts: BlogPost[] = [
    {
      slug: 'sciatique-hernie-discale',
      titleFr: 'La Sciatique & Hernie Discale',
      titleAr: 'عرق النسا والانزلاق الغضروفي',
      descFr: 'Guide complet sur le traitement de la sciatique et hernie discale',
      descAr: 'دليل شامل لعلاج عرق النسا والانزلاق الغضروفي',
      icon: <Zap size={28} />,
      image: managedImages['sciatique-hernie-discale'],
      readTimeFr: '5 min',
      readTimeAr: '5 دقائق'
    },
    {
      slug: 'lombalgie-cervicalgie',
      titleFr: 'Lombalgie & Cervicalgie',
      titleAr: 'آلام الظهر والرقبة',
      descFr: 'Solutions efficaces pour soulager vos douleurs de dos et cou',
      descAr: 'حلول فعالة لتخفيف آلام الظهر والرقبة',
      icon: <ArrowUpDown size={28} />,
      image: managedImages['lombalgie-cervicalgie'],
      readTimeFr: '6 min',
      readTimeAr: '6 دقائق'
    },
    {
      slug: 'traumatologie-sport',
      titleFr: 'Traumatologie du Sport',
      titleAr: 'الإصابات الرياضية',
      descFr: 'Récupération rapide après les blessures sportives',
      descAr: 'التعافي السريع من الإصابات الرياضية',
      icon: <Dumbbell size={28} />,
      image: managedImages['traumatologie-sport'],
      readTimeFr: '7 min',
      readTimeAr: '7 دقائق'
    },
    {
      slug: 'arthrose-genou',
      titleFr: 'Arthrose du Genou',
      titleAr: 'خشونة الركبة',
      descFr: 'Vie sans douleur malgré l\'arthrose',
      descAr: 'الحياة بدون ألم رغم خشونة المفاصل',
      icon: <Bone size={28} />,
      image: managedImages['arthrose-genou'],
      readTimeFr: '6 min',
      readTimeAr: '6 دقائق'
    },
    {
      slug: 'douleurs-epaules-capsulite',
      titleFr: 'Douleurs aux Épaules',
      titleAr: 'ألم الكتفين',
      descFr: 'Traitement de la capsulite et douleurs d\'épaule',
      descAr: 'علاج تجمد الكتف وآلام الأكتاف',
      icon: <Stethoscope size={28} />,
      image: managedImages['douleurs-epaules-capsulite'],
      readTimeFr: '6 min',
      readTimeAr: '6 دقائق'
    },
    {
      slug: 'migraines-cephalees',
      titleFr: 'Migraines & Céphalées',
      titleAr: 'الصداع والشقيقة',
      descFr: 'Soulagement naturel des migraines et céphalées de tension',
      descAr: 'تخفيف طبيعي من الصداع والشقيقة',
      icon: <Brain size={28} />,
      image: managedImages['migraines-cephalees'],
      readTimeFr: '5 min',
      readTimeAr: '5 دقائق'
    },
    {
      slug: 'kine-pediatrique',
      titleFr: 'Physiothérapie Pédiatrique',
      titleAr: 'الترويض الطبي للأطفال',
      descFr: 'Développement normal de l\'enfant et rééducation pédiatrique',
      descAr: 'النمو الطبيعي للطفل والترويض الطبي',
      icon: <Baby size={28} />,
      image: managedImages['kine-pediatrique'],
      readTimeFr: '6 min',
      readTimeAr: '6 دقائق'
    },
    {
      slug: 'readaptation-post-avc',
      titleFr: 'Réadaptation Post-AVC',
      titleAr: 'إعادة التأهيل ما بعد الجلطة',
      descFr: 'Reprendre votre vie après un AVC',
      descAr: 'استعادة الحياة بعد السكتة الدماغية',
      icon: <Flame size={28} />,
      image: managedImages['readaptation-post-avc'],
      readTimeFr: '7 min',
      readTimeAr: '7 دقائق'
    },
    {
      slug: 'posture-ergonomie',
      titleFr: 'Posture & Ergonomie',
      titleAr: 'الوضعية والإرغونوميا',
      descFr: 'Prévention des douleurs par une bonne posture',
      descAr: 'منع الآلام من خلال وضعية صحيحة',
      icon: <Stethoscope size={28} />,
      image: managedImages['posture-ergonomie'],
      readTimeFr: '5 min',
      readTimeAr: '5 دقائق'
    },
    {
      slug: 'recuperation-sportive-prevention-blessures',
      titleFr: 'Récupération Sportive',
      titleAr: 'الاستشفاء الرياضي',
      descFr: 'Optimisation de la récupération et prévention des blessures',
      descAr: 'تحسين الاستشفاء والوقاية من الإصابات',
      icon: <Dumbbell size={28} />,
      image: managedImages['recuperation-sportive-prevention-blessures'],
      readTimeFr: '6 min',
      readTimeAr: '6 دقائق'
    }
  ];

  const customPosts: BlogPost[] = config.customBlogPosts.map((item) => ({
    slug: `custom/${item.slug}`,
    titleFr: item.titleFr,
    titleAr: item.titleAr,
    descFr: item.descFr,
    descAr: item.descAr,
    icon: <Stethoscope size={28} />,
    image: item.image,
    readTimeFr: item.readTimeFr,
    readTimeAr: item.readTimeAr
  }));

  const allPosts = [...customPosts, ...posts];

  const t = lang === 'fr'
    ? {
        title: 'Blog Kinésithérapie',
        description: 'Découvrez nos articles sur les pathologies, conseils et solutions de traitement',
        articles: 'Tous les Articles',
        readMore: 'Lire l\'article',
        ctaTitle: 'Vous avez une question ?',
        ctaText: 'Contactez notre équipe pour une consultation personnalisée.',
        ctaButton: 'Contactez-nous sur WhatsApp'
      }
    : {
        title: 'مدونة الترويض الطبي',
        description: 'اكتشف مقالاتنا عن الأمراض والنصائح وحلول العلاج',
        articles: 'جميع المقالات',
        readMore: 'اقرأ المقال',
        ctaTitle: 'لديك استفسار؟',
        ctaText: 'اتصل بفريقنا للحصول على استشارة شخصية.',
        ctaButton: 'تواصل معنا عبر واتساب'
      };

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
      />

      <div className={lang === 'ar' ? 'font-arabic rtl' : 'ltr'} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="bg-gradient-to-r from-medical-600 to-medical-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-medical-100 max-w-2xl mx-auto">{t.description}</p>
          </div>
        </div>

        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.articles}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((post) => (
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
                      <div className="text-white">{post.icon}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-medical-600 transition">
                      {lang === 'fr' ? post.titleFr : post.titleAr}
                    </h3>
                    <p className="text-gray-600 mb-4">{lang === 'fr' ? post.descFr : post.descAr}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{lang === 'fr' ? post.readTimeFr : post.readTimeAr}</span>
                      <span className="text-medical-600 font-semibold hover:text-medical-700 transition">{t.readMore} {'->'}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-medical-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.ctaTitle}</h2>
            <p className="text-medical-100 mb-8">{t.ctaText}</p>
            <a
              href={makeWhatsAppLink(lang, config.contact.whatsappNumber, 'Blog')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
            >
              {t.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
