import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Language } from '../../types';
import SEOHead from '../../components/SEOHead';
import { useAdminConfig } from '../../src/adminConfig';

interface CustomArticleProps {
  lang: Language;
}

const CustomArticle: React.FC<CustomArticleProps> = ({ lang }) => {
  const { slug } = useParams();
  const prefix = lang === 'ar' ? '/ar' : '';
  const config = useAdminConfig();
  const post = config.customBlogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="py-20 bg-gray-50 min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{lang === 'fr' ? 'Article introuvable' : 'المقال غير موجود'}</h1>
          <Link to={`${prefix}/blog`} className="text-sky-700 font-semibold hover:underline">
            {lang === 'fr' ? 'Retour au blog' : 'العودة إلى المدونة'}
          </Link>
        </div>
      </section>
    );
  }

  const title = lang === 'fr' ? post.titleFr : post.titleAr;
  const desc = lang === 'fr' ? post.descFr : post.descAr;
  const content = lang === 'fr' ? post.contentFr : post.contentAr;
  const paragraphs = content.split('\n').map((line) => line.trim()).filter(Boolean);

  return (
    <>
      <SEOHead title={`${title} | Blog Centre Chnider`} description={desc} keywords={title} />
      <article className="bg-gray-50 py-12 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to={`${prefix}/blog`} className="text-sky-700 font-semibold hover:underline">
            {lang === 'fr' ? '← Retour au blog' : 'العودة إلى المدونة ←'}
          </Link>

          <div className="mt-6 bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
            <img src={post.image} alt={title} className="w-full h-72 object-cover" loading="lazy" />
            <div className="p-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-3">{title}</h1>
              <p className="text-slate-600 mb-6">{desc}</p>
              <div className="space-y-4 text-slate-800 leading-relaxed">
                {paragraphs.map((line, idx) => (
                  <p key={`${post.id}-${idx}`}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default CustomArticle;
