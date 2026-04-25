import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { CONTENT } from '../constants';
import { getManagedSeo, makeWhatsAppLink, useAdminConfig } from '../src/adminConfig';
import SEOHead from '../components/SEOHead';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = CONTENT[lang].contact;
   const config = useAdminConfig();
   const seo = getManagedSeo(config, 'contact', lang, {
      title: lang === 'fr' ? 'Contact | Centre Chnider - Kiné Casablanca' : 'اتصل بمركز الترويض الطبي بالدار البيضاء | مركز اشنيدر',
      description: CONTENT[lang].seo.contactDesc,
      keywords: lang === 'fr' ? 'kiné Aïn Chock, kiné Sbata, kiné Casablanca, contact kiné Casablanca, kiné à domicile, kiné mutuelle, kiné CNSS, kiné CNOPS, Sidi Othmane, Maarif, Hay Hassani' : 'اتصال مروض طبي, مروض طبي الدار البيضاء, مروض قريب مني, عين الشق, سباتة, سيدي عثمان, المعاريف, الحي الحسني'
   });
   const prefix = lang === 'ar' ? '/ar' : '';

   const relatedLinks = [
      { to: `${prefix}/services`, label: lang === 'fr' ? 'Services de kinésithérapie' : 'خدمات الترويض الطبي' },
      { to: `${prefix}/pathologies`, label: lang === 'fr' ? 'Pathologies traitées' : 'الأمراض المعالجة' },
      { to: `${prefix}/a-domicile`, label: lang === 'fr' ? 'Kiné à domicile' : 'الترويض المنزلي' },
      { to: `${prefix}/convention`, label: lang === 'fr' ? 'Convention assurances' : 'اتفاقيات التأمين' },
      { to: `${prefix}/blog`, label: lang === 'fr' ? 'Blog santé' : 'مدونة صحية' },
      { to: `${prefix}/blog/sciatique-hernie-discale`, label: lang === 'fr' ? 'Article: sciatique et hernie discale' : 'مقال: عرق النسا والانزلاق الغضروفي' }
   ];

  return (
    <>
         <SEOHead 
            title={seo.title}
            description={seo.description}
            keywords={seo.keywords}
         />
      
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4">
           <h1 className="text-4xl font-bold text-center text-slate-900 mb-12">{t.title}</h1>
                <p className="text-center text-slate-700 max-w-3xl mx-auto mb-10">
                   {lang === 'fr' ? (
                      <>
                         Contactez votre <strong>kinésithérapeute à Casablanca</strong> pour une consultation au cabinet ou en
                         {' '}<strong>kiné à domicile</strong>. Avant votre visite, consultez nos
                         {' '}<Link to={`${prefix}/pathologies`} className="text-medical-700 font-semibold hover:underline">pathologies</Link>
                         {' '}et <Link to={`${prefix}/services`} className="text-medical-700 font-semibold hover:underline">services</Link>.
                      </>
                   ) : (
                      <>
                         تواصلوا مع <strong>مروض طبي بالدار البيضاء</strong> لحجز موعد في العيادة أو
                         {' '}<strong>الترويض المنزلي</strong>. قبل الزيارة يمكنكم الاطلاع على
                         {' '}<Link to={`${prefix}/pathologies`} className="text-medical-700 font-semibold hover:underline">الأمراض المعالجة</Link>
                         {' '}و<Link to={`${prefix}/services`} className="text-medical-700 font-semibold hover:underline">الخدمات</Link>.
                      </>
                   )}
                </p>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Info Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                 <div className="bg-medical-700 p-8 text-white">
                    <h2 className="text-2xl font-bold mb-2">{lang === 'fr' ? 'Informations' : 'معلومات'}</h2>
                    <p className="opacity-80">{lang === 'fr' ? 'Nous sommes là pour vous aider.' : 'نحن هنا لمساعدتكم.'}</p>
                 </div>
                 <div className="p-8 space-y-8">
                    <div className="flex items-start gap-4">
                       <div className="bg-medical-50 p-3 rounded-full text-medical-600">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <h3 className="font-bold text-gray-900">{t.addressLabel}</h3>
                          <a href={config.contact.mapsLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-medical-700 hover:underline">{config.contact.address}</a>
                       </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="bg-medical-50 p-3 rounded-full text-medical-600">
                          <Phone size={24} />
                       </div>
                       <div>
                          <h3 className="font-bold text-gray-900">{t.phoneLabel}</h3>
                          <p className="text-gray-600 font-mono text-lg" dir="ltr">{config.contact.phone}</p>
                          <a href={`tel:${config.contact.phone}`} className="text-sm text-medical-600 font-bold hover:underline mt-1 block" dir="ltr">
                             {lang === 'fr' ? 'Appeler maintenant' : 'اتصل الآن'}
                          </a>
                       </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="bg-medical-50 p-3 rounded-full text-medical-600">
                          <Clock size={24} />
                       </div>
                       <div>
                          <h3 className="font-bold text-gray-900">{t.hoursLabel}</h3>
                          <p className="text-gray-600">{t.hours}</p>
                          <p className="text-red-500 text-sm mt-1">{lang === 'fr' ? 'Fermé le Dimanche' : 'مغلق يوم الأحد'}</p>
                       </div>
                    </div>
                 </div>

                 <div className="p-8 bg-gray-50 border-t border-gray-100 text-center">
                    <a 
                                 href={makeWhatsAppLink(lang, config.contact.whatsappNumber, 'Contact')} 
                      className="inline-flex items-center justify-center gap-2 w-full py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition"
                                 target="_blank"
                                 rel="noopener noreferrer"
                    >
                       <MessageCircle size={24} /> {lang === 'fr' ? 'Contactez-nous sur WhatsApp' : 'تواصل معنا عبر واتساب'}
                    </a>
                 </div>
              </div>

              {/* Map */}
              <div className="bg-white p-4 rounded-3xl shadow-xl h-[500px] lg:h-auto">
                 <iframe 
                  src={config.contact.mapEmbedUrl}
                  width="100%" 
                  height="100%" 
                  style={{border:0, borderRadius: '1rem'}} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
           </div>

                <section className="max-w-6xl mx-auto mt-10 bg-medical-50 border border-medical-100 rounded-2xl p-6">
                   <h2 className="text-2xl font-bold text-slate-900 mb-3 text-center">
                      {lang === 'fr' ? 'Pages utiles avant votre consultation' : 'صفحات مفيدة قبل الاستشارة'}
                   </h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {relatedLinks.map((item) => (
                         <Link
                            key={item.to}
                            to={item.to}
                            className="bg-white border border-medical-100 rounded-xl px-4 py-3 text-medical-700 font-semibold hover:bg-medical-100 transition"
                         >
                            {item.label}
                         </Link>
                      ))}
                   </div>
                </section>
        </div>
      </div>
    </>
  );
};

export default Contact;