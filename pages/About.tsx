import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { CONTENT, LOGO_SYMBOL_WHITE_URL } from '../constants';
import SEOHead from '../components/SEOHead';
import { Building2, Users } from 'lucide-react';
import { getManagedSeo, useAdminConfig } from '../src/adminConfig';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = CONTENT[lang].about;
  const config = useAdminConfig();
  const seo = getManagedSeo(config, 'about', lang, {
    title: lang === 'fr' ? 'A Propos Centre Chnider | Kinesitherapie Casablanca, Cabinet & Domicile' : 'عن مركز اشنيدر | الترويض الطبي بالدار البيضاء عيادة ومنزل',
    description: t.mission,
    keywords: lang === 'fr' ? 'kine ainchoq, kine sbata, kine casablanca, kine casa, kine autour de moi, centre kine Casablanca, kine a domicile, kine mutuelle, kine CNSS, kine CNOPS' : 'مروض طبي الدار البيضاء, مروض قريب مني, عين الشق, سباتة, مركز الترويض الطبي, الترويض المنزلي'
  });
  const prefix = lang === 'ar' ? '/ar' : '';
  
  return (
    <>
      <SEOHead 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">{t.title}</h1>
           <p className="text-center text-slate-700 max-w-3xl mx-auto mb-8">
             {lang === 'fr' ? (
               <>
                 Centre de <strong>kinésithérapie à Casablanca</strong> spécialisé en <strong>rééducation fonctionnelle</strong>,
                 {' '}<strong>kiné respiratoire</strong> et <strong>kiné à domicile</strong>. Voir nos
                 {' '}<Link to={`${prefix}/services`} className="text-medical-700 font-semibold hover:underline">services</Link>
                 {' '}et <Link to={`${prefix}/contact`} className="text-medical-700 font-semibold hover:underline">prendre rendez-vous</Link>.
               </>
             ) : (
               <>
                 مركز <strong>الترويض الطبي بالدار البيضاء</strong> متخصص في <strong>إعادة التأهيل الوظيفي</strong>
                 {' '}و<strong>الترويض التنفسي</strong> و<strong>الترويض المنزلي</strong>.
                 اطلعوا على <Link to={`${prefix}/services`} className="text-medical-700 font-semibold hover:underline">الخدمات</Link>
                 {' '}و<Link to={`${prefix}/contact`} className="text-medical-700 font-semibold hover:underline">حجز موعد</Link>.
               </>
             )}
           </p>
           
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
                  <div className="w-24 h-24 bg-medical-100 text-medical-700 rounded-full shrink-0 flex items-center justify-center">
                    <Building2 size={38} />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg">Dr. Chnider</h4>
                    <p className="text-medical-600 text-sm">Kinésithérapeute Principal</p>
                    <p className="text-xs text-gray-500 mt-2">Spécialiste en thérapie manuelle et rééducation du sport.</p>
                 </div>
              </div>
              
               <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-6">
                <div className="w-24 h-24 bg-blue-100 text-blue-700 rounded-full shrink-0 flex items-center justify-center">
                  <Users size={38} />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg">{lang === 'fr' ? 'L\'Équipe' : 'الفريق'}</h4>
                    <p className="text-medical-600 text-sm">{lang === 'fr' ? 'Kinésithérapeutes Hommes & Femmes' : 'مروضون رجال ونساء'}</p>
                 </div>
              </div>
           </div>

           {/* Gender Schedule */}
           <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 text-center">
               <div className="text-4xl mb-3">👩‍⚕️</div>
               <h3 className="font-bold text-pink-700 text-lg">{lang === 'fr' ? 'Kinésithérapeute Femme' : 'مروضة طبية'}</h3>
               <p className="text-pink-600 font-medium mt-2">{lang === 'fr' ? 'Lundi • Mercredi • Vendredi' : 'الإثنين • الأربعاء • الجمعة'}</p>
               <p className="text-sm text-pink-500 mt-1">{lang === 'fr' ? 'Prise en charge exclusive des patientes' : 'رعاية حصرية للنساء'}</p>
             </div>
             <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
               <div className="text-4xl mb-3">👨‍⚕️</div>
               <h3 className="font-bold text-blue-700 text-lg">{lang === 'fr' ? 'Kinésithérapeute Homme' : 'مروض طبي'}</h3>
               <p className="text-blue-600 font-medium mt-2">{lang === 'fr' ? 'Mardi • Jeudi • Samedi' : 'الثلاثاء • الخميس • السبت'}</p>
               <p className="text-sm text-blue-500 mt-1">{lang === 'fr' ? 'Prise en charge exclusive des patients' : 'رعاية حصرية للرجال'}</p>
             </div>
           </div>

           {/* CLINAXIS LGCP Section */}
           <div className="mt-10 bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
             <div className="flex flex-col md:flex-row items-center gap-6">
               <div className="w-16 h-16 flex items-center justify-center shrink-0">
                 <img src={LOGO_SYMBOL_WHITE_URL} alt="CLINAXIS logo" className="w-14 h-14 object-contain drop-shadow-md" loading="lazy" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">
                   {lang === 'fr' ? 'Gestion par CLINAXIS LGCP' : 'إدارة بواسطة CLINAXIS LGCP'}
                 </h3>
                 <p className="text-slate-600 leading-relaxed">
                   {lang === 'fr' 
                     ? 'Notre centre utilise CLINAXIS LGCP, le meilleur logiciel de gestion de cabinets médicaux, pour la gestion des dossiers patients et des rendez-vous. Vos données médicales sont protégées par un chiffrement de niveau bancaire, garantissant une sécurité et une confidentialité maximales.'
                     : 'يستخدم مركزنا برنامج CLINAXIS LGCP، أفضل برنامج لإدارة العيادات الطبية، لتدبير ملفات المرضى والمواعيد. بياناتكم الطبية محمية بتشفير بمستوى بنكي، مما يضمن أقصى درجات الأمان والسرية.'}
                 </p>
                 <div className="flex flex-wrap gap-2 mt-3">
                   <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">🔒 {lang === 'fr' ? 'Données chiffrées' : 'بيانات مشفرة'}</span>
                   <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">📅 {lang === 'fr' ? 'Gestion RDV' : 'تدبير المواعيد'}</span>
                   <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">📊 {lang === 'fr' ? 'Dossiers patients' : 'ملفات المرضى'}</span>
                 </div>
                 <a
                   href="https://clinaxis.ma"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 mt-4 text-blue-700 font-bold hover:underline"
                 >
                   {lang === 'fr' ? 'En savoir plus sur CLINAXIS' : 'المزيد حول CLINAXIS'}
                 </a>
               </div>
             </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default About;