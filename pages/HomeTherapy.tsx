import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { CASABLANCA_NEIGHBORHOODS_AR, CASABLANCA_NEIGHBORHOODS_FR, CONTENT, LOGO_SYMBOL_WHITE_URL, PHONE_NUMBER, SERVICE_ZONES_AR, SERVICE_ZONES_FR } from '../constants';
import SEOHead from '../components/SEOHead';
import { Check, Home, Phone } from 'lucide-react';

interface HomeTherapyProps {
  lang: Language;
}

const HomeTherapy: React.FC<HomeTherapyProps> = ({ lang }) => {
  const t = CONTENT[lang].homeTherapy;
   const prefix = lang === 'ar' ? '/ar' : '';
   const neighborhoods = lang === 'fr' ? CASABLANCA_NEIGHBORHOODS_FR : CASABLANCA_NEIGHBORHOODS_AR;
   const serviceZones = lang === 'fr' ? SERVICE_ZONES_FR : SERVICE_ZONES_AR;

  return (
    <>
         <SEOHead 
            title={lang === 'fr' ? 'Kiné à Domicile Casablanca | Rééducation Fonctionnelle, Dos, Neurologie' : 'ترويض منزلي بالدار البيضاء | إعادة التأهيل وآلام الظهر والأعصاب'} 
            description={t.description} 
            keywords={lang === 'fr' ? 'kiné ainchoq, kiné sbata, kiné casablanca, kiné casa, kiné autour de moi, kiné à domicile, rééducation à domicile, kiné mutuelle, kiné CNSS, kiné CNOPS, sidi othmane, maarif, hay hassani, anfa' : 'الترويض المنزلي, مروض طبي قريب مني, مروض الدار البيضاء, عين الشق, سباتة, سيدي عثمان, المعاريف, الحي الحسني, أنفا, علاج الظهر, علاج المفاصل'}
         />
      
      <div className="relative bg-medical-50 py-20">
         <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.title}</h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
               {t.description}
            </p>
                  <div className="mb-8 flex flex-col items-center gap-2">
                     <img src={LOGO_SYMBOL_WHITE_URL} alt="Centre Chnider logo" className="w-20 h-20 object-contain drop-shadow-md" loading="lazy" />
                     <p className="text-sm text-slate-600 font-medium">
                        {lang === 'fr' ? 'Centre Chnider | Kinésithérapie & Hijama Médicale' : 'مركز شنيدر | الترويض الطبي والحجامة الطبية'}
                     </p>
                  </div>
                  <p className="text-slate-700 max-w-3xl mb-8">
                     {lang === 'fr' ? (
                        <>
                           Service de <strong>kinésithérapie à domicile à Casablanca</strong> pour la <strong>sciatique</strong>, la <strong>rééducation post-opératoire</strong>
                           {' '}et les douleurs articulaires. Voir aussi nos <Link to={`${prefix}/services`} className="text-medical-700 font-semibold hover:underline">services</Link>
                           {' '}et <Link to={`${prefix}/pathologies`} className="text-medical-700 font-semibold hover:underline">pathologies</Link>.
                        </>
                     ) : (
                        <>
                           خدمة <strong>الترويض المنزلي بالدار البيضاء</strong> لعلاج <strong>عرق النسا</strong> و<strong>التأهيل بعد العمليات</strong> وآلام المفاصل.
                           يمكنكم أيضاً الاطلاع على <Link to={`${prefix}/services`} className="text-medical-700 font-semibold hover:underline">الخدمات</Link>
                           {' '}و<Link to={`${prefix}/pathologies`} className="text-medical-700 font-semibold hover:underline">الأمراض المعالجة</Link>.
                        </>
                     )}
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
                                 <div className="rounded-3xl shadow-2xl border border-medical-100 bg-gradient-to-br from-medical-50 via-white to-blue-50 p-10 min-h-[420px] flex flex-col justify-center items-center text-center">
                                    <div className="w-24 h-24 rounded-2xl bg-medical-600 text-white flex items-center justify-center shadow-lg mb-6">
                                       <Home size={48} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                       {lang === 'fr' ? 'Rééducation à domicile' : 'ترويض منزلي'}
                                    </h3>
                                    <p className="text-slate-600 max-w-md leading-relaxed">
                                       {lang === 'fr'
                                          ? 'Prise en charge professionnelle chez vous avec matériel adapté, en toute discrétion et confort.'
                                          : 'رعاية مهنية في المنزل بمعدات مناسبة، مع الخصوصية والراحة.'}
                                    </p>
                                 </div>
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
                               <strong>{lang === 'fr' ? 'Tarif & zones :' : 'السعر والمناطق:'}</strong>{' '}
                               {lang === 'fr'
                                  ? 'Nos séances à domicile sont à partir de 200 DH selon le bilan, sans frais supplémentaire dans nos zones couvertes.'
                                  : 'جلساتنا المنزلية تبدأ من 200 درهم حسب التقييم، بدون مصاريف تنقل إضافية داخل المناطق المغطاة.'}
                  </p>
               </div>
            </div>
         </div>
      </div>

         <div className="container mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                     {lang === 'fr' ? 'Nos avantages à domicile' : 'مزايا الخدمة المنزلية'}
                  </h3>
                  <ul className="space-y-3 text-slate-700">
                     <li>• {lang === 'fr' ? 'Matériel mobile complet: électrothérapie, ultrasons, matériel de renforcement et de mobilisation.' : 'معدات متنقلة كاملة: علاج كهربائي، موجات فوق صوتية، وتمارين تقوية وتحريك.'}</li>
                     <li>• {lang === 'fr' ? 'Aucun frais supplémentaire de déplacement dans les zones couvertes.' : 'بدون مصاريف إضافية للتنقل داخل المناطق المغطاة.'}</li>
                     <li>• {lang === 'fr' ? 'Bilan innovant CLINAXIS SUIVI: dossier digitalisé et rapport à la demande.' : 'تقييم مبتكر عبر CLINAXIS SUIVI: ملف رقمي وتقرير عند الطلب.'}</li>
                  </ul>
               </div>

               <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                     {lang === 'fr' ? 'Zones où nous intervenons' : 'المناطق التي نخدمها'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                     {serviceZones.map((zone) => (
                        <span key={zone} className="px-3 py-1 rounded-full bg-medical-50 text-medical-700 text-sm font-semibold border border-medical-100">
                           {zone}
                        </span>
                     ))}
                  </div>
               </div>
            </div>

            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6">
               <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {lang === 'fr' ? 'Liste des quartiers de Casablanca' : 'لائحة أحياء الدار البيضاء'}
               </h3>
               <p className="text-slate-600 mb-4">
                  {lang === 'fr'
                     ? 'Nous couvrons une large partie de Casablanca pour les séances à domicile:'
                     : 'نغطي عدداً واسعاً من أحياء الدار البيضاء للجلسات المنزلية:'}
               </p>
               <div className="flex flex-wrap gap-2">
                  {neighborhoods.map((neighborhood) => (
                     <span key={neighborhood} className="px-3 py-1 rounded-full bg-white text-slate-700 text-sm border border-slate-200">
                        {neighborhood}
                     </span>
                  ))}
               </div>
            </div>
         </div>
    </>
  );
};

export default HomeTherapy;