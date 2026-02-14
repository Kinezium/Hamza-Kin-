import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../constants';
import SEOHead from '../components/SEOHead';
import { Bone, Activity, Wind, CircleDot, Home } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = CONTENT[lang];

  const getIcon = (name: string) => {
    switch(name) {
      case 'Bone': return <Bone size={40} />;
      case 'Activity': return <Activity size={40} />;
      case 'Wind': return <Wind size={40} />;
      case 'CircleDot': return <CircleDot size={40} />;
      case 'Home': return <Home size={40} />;
      default: return <Activity size={40} />;
    }
  };

  return (
    <>
      <SEOHead 
        title={t.seo.servicesTitle} 
        description={t.seo.servicesDesc} 
        keywords={lang === 'fr' ? 'kiné orthopédique, kiné fonctionnelle, kiné respiratoire, hijama médicale, kiné à domicile, kiné sport, kiné mutuelle, kiné CNSS, kiné CNOPS, kiné hernie discale, kiné sciatique, kiné dos, kiné lombalgie, kiné AVC, kiné paralysie, kiné rhumatologie, kiné bébé, kiné Casablanca' : 'الترويض, الترويض الطبي, علاج العظام, علاج العضلات, علاج التنفس, علاج الوجه, علاج الركبة, علاج المفاصل, علاج الحجامة, علاج الإصابات الرياضية, علاج ما بعد العمليات, علاج الروماتيزم, علاج الأطفال, علاج التنفس, علاج الأعصاب, علاج الوجه, علاج الركبة, علاج المفاصل, علاج الحجامة, علاج الإصابات الرياضية, علاج ما بعد العمليات, علاج الروماتيزم'}
      />
      
      <div className="bg-medical-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t.services.title}</h1>
          <p className="text-xl text-medical-100 max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
         <div className="mb-12 p-6 bg-blue-50 rounded-xl border-l-4 border-medical-500 text-blue-900 shadow-sm">
             <p className="text-center font-medium text-lg mb-4">{t.services.genderNote}</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
               <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 text-center">
                 <div className="text-3xl mb-2">👩‍⚕️</div>
                 <h3 className="font-bold text-pink-700 text-lg">{lang === 'fr' ? 'Kinésithérapeute Femme' : 'مروضة طبية'}</h3>
                 <p className="text-pink-600 font-medium mt-1">{lang === 'fr' ? 'Lundi • Mercredi • Vendredi' : 'الإثنين • الأربعاء • الجمعة'}</p>
                 <p className="text-sm text-pink-500 mt-1">{lang === 'fr' ? 'Prise en charge exclusive des patientes' : 'رعاية حصرية للنساء'}</p>
               </div>
               <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                 <div className="text-3xl mb-2">👨‍⚕️</div>
                 <h3 className="font-bold text-blue-700 text-lg">{lang === 'fr' ? 'Kinésithérapeute Homme' : 'مروض طبي'}</h3>
                 <p className="text-blue-600 font-medium mt-1">{lang === 'fr' ? 'Mardi • Jeudi • Samedi' : 'الثلاثاء • الخميس • السبت'}</p>
                 <p className="text-sm text-blue-500 mt-1">{lang === 'fr' ? 'Prise en charge exclusive des patients' : 'رعاية حصرية للرجال'}</p>
               </div>
             </div>
         </div>

         <div className="space-y-12">
            {t.services.items.map((service, index) => (
              <div key={service.id} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                   <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 text-medical-50 opacity-50 transform translate-x-1/4 -translate-y-1/4">
                         {getIcon(service.iconName)}
                      </div>
                      <div className="text-medical-600 mb-6">{getIcon(service.iconName)}</div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
                      <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>
                      
                      <div className="mt-6 flex flex-wrap gap-2">
                        {/* Mock tags based on service for visual density */}
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          {lang === 'fr' ? 'Certifié' : 'معتمد'}
                        </span>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          {lang === 'fr' ? 'Professionnel' : 'احترافي'}
                        </span>
                      </div>
                   </div>
                </div>
                <div className="md:w-1/2">
                   {/* Placeholder for service image */}
                   <img 
                    src={`https://picsum.photos/600/400?random=${index}`} 
                    alt={service.title} 
                    className="rounded-3xl shadow-lg w-full h-64 object-cover" 
                    loading="lazy"
                   />
                </div>
              </div>
            ))}
         </div>
      </div>
    </>
  );
};

export default Services;