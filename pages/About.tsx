import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../constants';
import SEOHead from '../components/SEOHead';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = CONTENT[lang].about;
  
  return (
    <>
      <SEOHead title={`À Propos | ${CONTENT[lang].seo.homeTitle}`} description={t.mission} />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">{t.title}</h1>
           
           <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl mb-12 border-t-8 border-medical-500">
             {t.content.map((paragraph, idx) => (
               <p key={idx} className="text-lg text-slate-700 mb-6 leading-relaxed">
                 {paragraph}
               </p>
             ))}
             
             <div className="mt-8 p-6 bg-medical-50 rounded-xl text-center">
               <h3 className="text-2xl font-bold text-medical-800 mb-2 font-arabic">{t.mission}</h3>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Doctor / Staff Card Placeholder */}
              <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-6">
                 <div className="w-24 h-24 bg-gray-200 rounded-full shrink-0 overflow-hidden">
                    <img src="https://picsum.photos/id/1005/200/200" alt="Doctor" className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg">Dr. Chnider</h4>
                    <p className="text-medical-600 text-sm">Kinésithérapeute Principal</p>
                    <p className="text-xs text-gray-500 mt-2">Spécialiste en thérapie manuelle et rééducation du sport.</p>
                 </div>
              </div>
              
               <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-6">
                 <div className="w-24 h-24 bg-gray-200 rounded-full shrink-0 overflow-hidden">
                    <img src="https://picsum.photos/id/1027/200/200" alt="Team" className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg">{lang === 'fr' ? 'L\'Équipe' : 'الفريق'}</h4>
                    <p className="text-medical-600 text-sm">{lang === 'fr' ? 'Kinésithérapeutes Hommes & Femmes' : 'مروضون رجال ونساء'}</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default About;