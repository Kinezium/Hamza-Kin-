import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Activity, BookOpen, Brain, Stethoscope } from 'lucide-react';

type Source = { label: string; url: string };
type TrendArticleOptions = {
  slug: string;
  titleFr: string;
  titleAr: string;
  descriptionFr: string;
  descriptionAr: string;
  keywordsFr: string;
  keywordsAr: string;
  imageSeed: string;
  readTime: string;
  specialty: string;
  specialtyAr: string;
  bodyFr: React.ReactNode;
  bodyAr: React.ReactNode;
  sources: Source[];
  sourcesAr?: Source[];
  relatedArticles?: Array<{ slug: string; titleFr: string; titleAr: string; icon: React.ReactNode }>;
};

const CabinetLink = ({ specialty, specialtyAr }: Pick<TrendArticleOptions, 'specialty' | 'specialtyAr'>) => (
  <p className="bg-emerald-50 border-l-4 border-emerald-500 p-5">
    <strong>Besoin d un accompagnement au cabinet ?</strong> Le Centre Chnider vous accueille à Casablanca pour une évaluation et un programme adapté :{' '}
    <a href="/contact" className="text-emerald-700 underline font-semibold">prendre contact avec le cabinet</a>.
    <span className="block mt-2" dir="rtl"><strong>هل تحتاجون إلى مواكبة في العيادة؟</strong> يستقبلكم مركز شنيدر بالدار البيضاء للتقييم ووضع برنامج مناسب :{' '}
      <a href="/ar/contact" className="text-emerald-700 underline font-semibold">التواصل مع المركز</a>.</span>
  </p>
);

const Sources = ({ sources, sourcesAr, lang }: { sources: Source[]; sourcesAr?: Source[]; lang: 'fr' | 'ar' }) => (
  <section className="border-t border-gray-200 pt-6">
    <h2 className="text-2xl font-bold mb-3 flex items-center gap-2"><BookOpen size={22} />{lang === 'fr' ? 'Sources médicales' : 'المصادر الطبية'}</h2>
    <ul className="list-disc pl-6 space-y-2">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-medical-700 underline">{source.label}</a></li>)}</ul>
    {sourcesAr && <p className="mt-4 text-gray-600">المصادر نفسها متاحة باللغة الأصلية للرجوع إليها.</p>}
  </section>
);

export const createTrendArticle = (options: TrendArticleOptions) => createArticle({
  ...options,
  imageFr: `https://picsum.photos/seed/${options.imageSeed}/1600/900`,
  imageAr: `https://picsum.photos/seed/${options.imageSeed}/1600/900`,
  readTimeFr: `${options.readTime} min de lecture`,
  readTimeAr: `${options.readTime} دقائق قراءة`,
  contentFr: <div className="space-y-6">{options.bodyFr}<CabinetLink specialty={options.specialty} specialtyAr={options.specialtyAr} /><Sources sources={options.sources} sourcesAr={options.sourcesAr} lang="fr" /></div>,
  contentAr: <div className="space-y-6" dir="rtl">{options.bodyAr}<CabinetLink specialty={options.specialty} specialtyAr={options.specialtyAr} /><Sources sources={options.sourcesAr || options.sources} lang="ar" /></div>,
  relatedArticles: options.relatedArticles || [
    { slug: 'neuroplasticite-miracle-cerveau-kine', titleFr: 'Neuroplasticité et kiné', titleAr: 'المرونة العصبية والترويض', icon: <Brain size={20} /> },
    { slug: 'electrotherapie-neurologie-utile-ou-non', titleFr: 'Électrothérapie et neurologie', titleAr: 'العلاج الكهربائي والأعصاب', icon: <Activity size={20} /> },
    { slug: 'kinesitherapie-maroc-portrait', titleFr: 'La kinésithérapie au Maroc', titleAr: 'الترويض الطبي في المغرب', icon: <Stethoscope size={20} /> }
  ]
});
