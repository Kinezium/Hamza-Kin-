import React, { useState } from 'react';
import { Language } from '../types';
import SEOHead from '../components/SEOHead';

interface BlogPost {
  id: string;
  title: { fr: string; ar: string };
  definition: { fr: string; ar: string };
  causes: { fr: string; ar: string };
  treatment: { fr: string; ar: string };
  role: { fr: string; ar: string };
  protocol: { fr: string; ar: string };
}

const POSTS: BlogPost[] = [
  {
    id: 'sciatica',
    title: {
      fr: 'La Sciatique',
      ar: 'عرق النسا'
    },
    definition: {
      fr: "La sciatique est une douleur causée par l'irritation du nerf sciatique, souvent liée à une hernie discale.",
      ar: 'عرق النسا هو ألم ناتج عن تهيج العصب الوركي، غالبًا بسبب انزلاق غضروفي.'
    },
    causes: {
      fr: "Hernie discale, arthrose, traumatisme, mauvaise posture.",
      ar: 'انزلاق غضروفي، خشونة المفاصل، إصابة، وضعية خاطئة.'
    },
    treatment: {
      fr: "Repos, kinésithérapie, médicaments anti-inflammatoires, exercices adaptés.",
      ar: 'راحة، ترويض طبي، أدوية مضادة للالتهاب، تمارين مناسبة.'
    },
    role: {
      fr: "La kinésithérapie aide à soulager la douleur, améliorer la mobilité et prévenir les récidives.",
      ar: 'الترويض الطبي يساعد في تخفيف الألم، تحسين الحركة، والوقاية من تكرار المشكلة.'
    },
    protocol: {
      fr: "Exercice à domicile : étirements doux du dos, marche régulière, éviter les positions assises prolongées.",
      ar: 'تمارين منزلية: تمديدات خفيفة للظهر، المشي المنتظم، تجنب الجلوس الطويل.'
    }
  },
  // Ajoute d'autres maladies ici
];

const Blog: React.FC<{ lang: Language }> = ({ lang }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <>
      <SEOHead 
        title={lang === 'fr' ? 'Blog Santé & Kinésithérapie | Casablanca' : 'مدونة الصحة والترويض الطبي | الدار البيضاء'}
        description={lang === 'fr' ? 'Découvrez des articles sur les maladies, les traitements et le rôle de la kinésithérapie à Casablanca.' : 'مقالات حول الأمراض والعلاج ودور الترويض الطبي في الدار البيضاء.'}
        keywords={lang === 'fr' ? 'blog kiné, blog santé, sciatique, hernie discale, kinésithérapie, Casablanca' : 'مدونة الترويض الطبي, مدونة الصحة, عرق النسا, انزلاق غضروفي, الترويض الطبي, الدار البيضاء'}
      />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">
          {lang === 'fr' ? 'Blog Santé & Kinésithérapie' : 'مدونة الصحة والترويض الطبي'}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {POSTS.map(post => (
            <div key={post.id} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 cursor-pointer hover:shadow-xl transition" onClick={() => setSelectedPost(post)}>
              <h2 className="text-2xl font-bold mb-4 text-medical-700">{post.title[lang]}</h2>
              <p className="text-slate-600 mb-2">{post.definition[lang]}</p>
              <span className="text-medical-600 font-bold text-sm">{lang === 'fr' ? 'Lire plus' : 'اقرأ المزيد'}</span>
            </div>
          ))}
        </div>
        {selectedPost && (
          <div className="bg-medical-50 p-8 rounded-2xl shadow-lg border border-medical-200 max-w-2xl mx-auto">
            <button className="mb-4 text-medical-700 font-bold" onClick={() => setSelectedPost(null)}>
              {lang === 'fr' ? 'Retour' : 'رجوع'}
            </button>
            <h2 className="text-3xl font-bold mb-6 text-medical-800">{selectedPost.title[lang]}</h2>
            <div className="space-y-4">
              <div>
                <strong>{lang === 'fr' ? 'Définition :' : 'التعريف:'}</strong>
                <p>{selectedPost.definition[lang]}</p>
              </div>
              <div>
                <strong>{lang === 'fr' ? 'Causes :' : 'الأسباب:'}</strong>
                <p>{selectedPost.causes[lang]}</p>
              </div>
              <div>
                <strong>{lang === 'fr' ? 'Traitement :' : 'العلاج:'}</strong>
                <p>{selectedPost.treatment[lang]}</p>
              </div>
              <div>
                <strong>{lang === 'fr' ? 'Rôle de la kinésithérapie :' : 'دور الترويض الطبي:'}</strong>
                <p>{selectedPost.role[lang]}</p>
              </div>
              <div>
                <strong>{lang === 'fr' ? 'Protocole à domicile :' : 'بروتوكول منزلي:'}</strong>
                <p>{selectedPost.protocol[lang]}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
