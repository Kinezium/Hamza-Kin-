import React from 'react';
import { Language } from '../types';
import { CONTENT, PHONE_NUMBER } from '../constants';
import SEOHead from '../components/SEOHead';
import { Activity, AlertCircle } from 'lucide-react';

interface ConditionsProps {
  lang: Language;
}

const Conditions: React.FC<ConditionsProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <>
      <SEOHead title={t.seo.conditionsTitle} description={t.seo.conditionsDesc} />
      
      <div className="bg-medical-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{t.conditions.title}</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t.conditions.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.conditions.items.map((item, index) => (
            <div key={item.id} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-medical-100 text-medical-600 rounded-full flex items-center justify-center mb-6">
                <Activity size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {item.description}
              </p>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex gap-3 items-start">
                <AlertCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <div>
                  <span className="font-bold text-red-700 block mb-1">
                    {lang === 'fr' ? 'Symptômes :' : 'الأعراض :'}
                  </span>
                  <span className="text-red-600">{item.symptoms}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                 <span className="text-sm text-gray-400">
                    {lang === 'fr' ? 'Consultation recommandée' : 'ينصح بالاستشارة'}
                 </span>
                 <a href={`tel:${PHONE_NUMBER}`} className="text-medical-600 font-bold hover:underline">
                    {lang === 'fr' ? 'Réserver' : 'حجز'} ->
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Conditions;