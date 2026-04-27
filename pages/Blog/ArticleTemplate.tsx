import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../../types';
import SEOHead from '../../components/SEOHead';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { BLOG_TOPIC_IMAGES } from './blogImages';
import { getWhatsAppBookingLink } from '../../constants';

interface ArticleProps {
  lang: Language;
}

interface ArticleData {
  slug: string;
  titleFr: string;
  titleAr: string;
  descriptionFr: string;
  descriptionAr: string;
  keywordsFr: string;
  keywordsAr: string;
  imageFr: string;
  imageAr: string;
  readTimeFr: string;
  readTimeAr: string;
  contentFr: React.ReactNode;
  contentAr: React.ReactNode;
  relatedArticles: Array<{ slug: string; titleFr: string; titleAr: string; icon: React.ReactNode }>;
}

const normalizeArticleSeo = (lang: Language, title: string, description: string, keywords: string) => {
  const titleSuffixFr = ' | Blog Kinesitherapie Casablanca Centre Chnider';
  const titleSuffixAr = ' | مدونة الترويض الطبي بالدار البيضاء - مركز شنيدر';

  const seoTitle = lang === 'fr'
    ? (title.includes('Centre Chnider') ? title : `${title}${titleSuffixFr}`)
    : (title.includes('مركز') ? title : `${title}${titleSuffixAr}`);

  const minLength = 145;
  const fallbackFr = ' Prise en charge au cabinet et a domicile a Casablanca avec conseils de prevention et programme de reeducation personnalise.';
  const fallbackAr = ' متابعة في العيادة والمنزل بالدار البيضاء مع نصائح وقائية وبرنامج تاهيل مخصص حسب الحالة.';
  const seoDescription = description.length >= minLength
    ? description
    : `${description}${lang === 'fr' ? fallbackFr : fallbackAr}`;

  const bilingualTail = lang === 'fr'
    ? 'kinesitherapie casablanca, blog kine, الترويض الطبي, الدار البيضاء, AVC'
    : 'الترويض الطبي, الدار البيضاء, kinésithérapie casablanca, blog kine, rééducation';
  const seoKeywords = `${keywords}, ${bilingualTail}`;

  return { seoTitle, seoDescription, seoKeywords };
};

export const createArticle = (data: ArticleData) => {
  const Article: React.FC<ArticleProps> = ({ lang }) => {
    const t = lang === 'fr' ? {
      publishedBy: 'Publié par Centre Chnider',
      readTime: data.readTimeFr,
      relatedArticles: 'Articles Connexes',
      usefulLinks: 'Liens utiles',
      bookAppointment: 'Prendre RDV',
      shareArticle: 'Partager cet article',
      backToBlog: 'Retour au Blog'
    } : {
      publishedBy: 'نشر بواسطة مركز اشنيدر',
      readTime: data.readTimeAr,
      relatedArticles: 'مقالات ذات صلة',
      usefulLinks: 'روابط مفيدة',
      bookAppointment: 'حجز موعد',
      shareArticle: 'مشاركة المقال',
      backToBlog: 'العودة للمدونة'
    };

    const prefix = lang === 'ar' ? '/ar' : '';
    const title = lang === 'fr' ? data.titleFr : data.titleAr;
    const description = lang === 'fr' ? data.descriptionFr : data.descriptionAr;
    const keywords = lang === 'fr' ? data.keywordsFr : data.keywordsAr;
    const seo = normalizeArticleSeo(lang, title, description, keywords);
    const image = BLOG_TOPIC_IMAGES[data.slug] || (lang === 'fr' ? data.imageFr : data.imageAr);
    const content = lang === 'fr' ? data.contentFr : data.contentAr;

    return (
      <>
        <SEOHead
        title={seo.seoTitle}
        description={seo.seoDescription}
        keywords={seo.seoKeywords}
          image={image}
          type="article"
          section={lang === 'fr' ? 'Blog kinésithérapie' : 'مدونة الترويض الطبي'}
        />
        
        <div className={lang === 'ar' ? 'font-arabic rtl' : 'ltr'} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          {/* Article Header */}
          <div className="bg-gradient-to-r from-medical-600 to-medical-700 text-white py-12">
            <div className="container mx-auto px-4">
              <Link to={`${prefix}/blog`} className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition">
                <ArrowLeft size={20} />
                <span>{t.backToBlog}</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <div className="flex flex-wrap gap-6 text-medical-100">
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{t.publishedBy}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{t.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Image */}
          <div className="w-full h-64 md:h-96 bg-gray-200 mt-8">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={1600}
              height={900}
              sizes="100vw"
            />
          </div>

          {/* Article Content */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="prose prose-lg max-w-none">
                {content}
              </div>

              {/* Call to Action */}
              <div className="mt-12 p-8 bg-medical-50 rounded-xl border-l-4 border-medical-600">
                <h3 className="text-2xl font-bold text-medical-900 mb-4">
                  {lang === 'fr' ? 'Vous souffrez de ces symptômes ?' : 'هل تعاني من هذه الأعراض؟'}
                </h3>
                <p className="text-gray-700 mb-6">
                  {lang === 'fr' 
                    ? 'Notre équipe de kinésithérapeutes expérimentés est prête à vous aider. Contactez-nous dès maintenant pour une consultation.'
                    : 'فريقنا من المعالجين الفيزيائيين المتخصصين جاهز لمساعدتك. اتصل بنا الآن للحصول على استشارة.'}
                </p>
                <a 
                  href={getWhatsAppBookingLink(lang, title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
                >
                  {lang === 'fr' ? 'Contactez-nous sur WhatsApp' : 'تواصل معنا عبر واتساب'}
                </a>
              </div>

              {/* Related Articles */}
              <div className="mt-16">
                <h3 className="text-3xl font-bold mb-8">{t.relatedArticles}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {data.relatedArticles.map((article) => (
                    <Link
                      key={article.slug}
                      to={`${prefix}/blog/${article.slug}`}
                      className="p-6 border-2 border-gray-200 rounded-lg hover:border-medical-600 hover:shadow-lg transition"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {article.icon}
                        <h4 className="font-semibold text-gray-900 hover:text-medical-600">
                          {lang === 'fr' ? article.titleFr : article.titleAr}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-5">{t.usefulLinks}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Link to={`${prefix}/blog`} className="p-4 rounded-lg border border-medical-100 bg-medical-50 hover:bg-medical-100 transition font-semibold text-medical-700">
                    {lang === 'fr' ? 'Tous les articles du blog' : 'جميع مقالات المدونة'}
                  </Link>
                  <Link to={`${prefix}/pathologies`} className="p-4 rounded-lg border border-medical-100 bg-medical-50 hover:bg-medical-100 transition font-semibold text-medical-700">
                    {lang === 'fr' ? 'Pathologies traitées' : 'الأمراض المعالجة'}
                  </Link>
                  <Link to={`${prefix}/services`} className="p-4 rounded-lg border border-medical-100 bg-medical-50 hover:bg-medical-100 transition font-semibold text-medical-700">
                    {lang === 'fr' ? 'Services de kinésithérapie' : 'خدمات الترويض الطبي'}
                  </Link>
                  <Link to={`${prefix}/contact`} className="p-4 rounded-lg border border-medical-100 bg-medical-50 hover:bg-medical-100 transition font-semibold text-medical-700">
                    {lang === 'fr' ? 'Contact et rendez-vous' : 'الاتصال وحجز الموعد'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return Article;
};



