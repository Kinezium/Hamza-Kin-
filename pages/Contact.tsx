import React from 'react';
import { Language } from '../types';
import { CONTENT, PHONE_NUMBER, MAP_EMBED_URL, WHATSAPP_NUMBER } from '../constants';
import SEOHead from '../components/SEOHead';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = CONTENT[lang].contact;
  const seo = CONTENT[lang].seo;

  return (
    <>
      <SEOHead title={seo.contactTitle} description={seo.contactDesc} />
      
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4">
           <h1 className="text-4xl font-bold text-center text-slate-900 mb-12">{t.title}</h1>

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
                          <p className="text-gray-600">{t.address}</p>
                       </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="bg-medical-50 p-3 rounded-full text-medical-600">
                          <Phone size={24} />
                       </div>
                       <div>
                          <h3 className="font-bold text-gray-900">{t.phoneLabel}</h3>
                          <p className="text-gray-600 font-mono text-lg">{t.phone}</p>
                          <a href={`tel:${PHONE_NUMBER}`} className="text-sm text-medical-600 font-bold hover:underline mt-1 block">
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
                      href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                      className="inline-flex items-center justify-center gap-2 w-full py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition"
                    >
                       <MessageCircle size={24} /> {lang === 'fr' ? 'Contactez-nous sur WhatsApp' : 'تواصل معنا عبر واتساب'}
                    </a>
                 </div>
              </div>

              {/* Map */}
              <div className="bg-white p-4 rounded-3xl shadow-xl h-[500px] lg:h-auto">
                 <iframe 
                  src={MAP_EMBED_URL}
                  width="100%" 
                  height="100%" 
                  style={{border:0, borderRadius: '1rem'}} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Contact;