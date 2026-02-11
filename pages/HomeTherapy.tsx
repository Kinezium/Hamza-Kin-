import React from 'react';
import { Language } from '../types';
import { CONTENT, PHONE_NUMBER } from '../constants';
import SEOHead from '../components/SEOHead';
import { Check, Phone } from 'lucide-react';

interface HomeTherapyProps {
  lang: Language;
}

const HomeTherapy: React.FC<HomeTherapyProps> = ({ lang }) => {
  const t = CONTENT[lang].homeTherapy;
  const seo = CONTENT[lang].seo;

  return (
    <>
      <SEOHead title={`Kiné à Domicile Casablanca | ${seo.homeTitle}`} description={t.description} />
      
      <div className="relative bg-medical-50 py-20">
         <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.title}</h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
               {t.description}
            </p>
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="inline-flex items-center gap-2 bg-medical-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-medical-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
               <Phone size={24} /> {t.cta}
            </a>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
               <img 
                 src="https://picsum.photos/id/1025/600/600" 
                 alt="Kiné à domicile" 
                 className="rounded-3xl shadow-2xl"
               />
            </div>
            <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {lang === 'fr' ? 'Pourquoi choisir la kiné à domicile ?' : 'لماذا تختار الترويض المنزلي؟'}
               </h2>
               <div className="space-y-6">
                  {t.benefits.map((benefit, index) => (
                     <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="bg-green-100 text-green-600 p-2 rounded-full shrink-0">
                           <Check size={20} />
                        </div>
                        <span className="text-lg text-slate-700 font-medium">{benefit}</span>
                     </div>
                  ))}
               </div>
               
               <div className="mt-10 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                  <p className="text-yellow-800">
                     <strong>{lang === 'fr' ? 'Zones desservies :' : 'المناطق المغطاة:'}</strong> Casablanca, Sbata, Salmia, Sidi Othmane, etc.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </>
  );
};

export default HomeTherapy;