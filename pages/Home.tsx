import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, MapPin, Bus } from 'lucide-react';
import { Language } from '../types';
import { CONTENT, WHATSAPP_NUMBER, PHONE_NUMBER, MAP_EMBED_URL } from '../constants';
import SEOHead from '../components/SEOHead';

interface HomeProps {
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const t = CONTENT[lang];
  const [benefitIndex, setBenefitIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setBenefitIndex((prev) => (prev + 1) % t.hero.benefits.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out to complete before changing text
    }, 4000);

    return () => clearInterval(interval);
  }, [t.hero.benefits.length, lang]); // Reset when language changes
  
  return (
    <>
      <SEOHead 
        title={t.seo.homeTitle} 
        description={t.seo.homeDesc} 
        keywords={lang === 'fr' ? 'kiné autour de moi, kiné Casablanca, kinésithérapeute, cabinet kiné, kiné à domicile, kiné Sbata, kiné sport, kiné bébé, kiné mutuelle, kiné CNSS, kiné CNOPS, kiné hernie discale, kiné sciatique, kiné dos, kiné lombalgie, kiné AVC, kiné paralysie, kiné rhumatologie, kiné respiratoire' : 'الترويض, الترويض الطبي, ألم الظهر, ألم السياتيك, علاج الظهر, علاج المفاصل, علاج الأطفال, علاج التنفس, علاج الأعصاب, علاج الركبة, علاج الوجه, علاج الحجامة, علاج الإصابات الرياضية, علاج ما بعد العمليات, علاج الروماتيزم, علاج العظام, علاج العضلات'}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-medical-50 to-white pt-12 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 md:flex items-center">
          <div className="md:w-1/2 z-10 relative">
            
            {/* Animated Benefits Banner */}
            <div className="mb-6 h-8 flex items-center">
              <span 
                className={`inline-block px-4 py-2 bg-yellow-100 text-yellow-800 text-sm font-bold rounded-full border border-yellow-200 shadow-sm transition-opacity duration-500 transform ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
              >
                {t.hero.benefits[benefitIndex]}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${PHONE_NUMBER}`} className="inline-flex justify-center items-center px-6 py-4 bg-medical-600 text-white font-bold rounded-xl shadow-lg hover:bg-medical-700 transition transform hover:-translate-y-1">
                {t.hero.ctaCall}
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="inline-flex justify-center items-center px-6 py-4 bg-green-500 text-white font-bold rounded-xl shadow-lg hover:bg-green-600 transition transform hover:-translate-y-1">
                {t.hero.ctaWhatsapp}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/id/1062/800/600" 
                alt="Physical Therapy Session" 
                className="w-full h-auto object-cover" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                 <div className="text-white">
                   <p className="font-bold text-xl">Centre Chnider</p>
                   <p className="text-sm opacity-90">Sbata, Casablanca</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Stats Bar */}
      <div className="bg-medical-800 text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-1">10+</div>
            <div className="text-medical-200 text-sm">{lang === 'fr' ? 'Années d\'expérience' : 'سنوات من الخبرة'}</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">500+</div>
            <div className="text-medical-200 text-sm">{lang === 'fr' ? 'Patients Heureux' : 'مريض سعيد'}</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-medical-200 text-sm">{lang === 'fr' ? 'Engagement' : 'التزام بالجودة'}</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">24/7</div>
            <div className="text-medical-200 text-sm">{lang === 'fr' ? 'Support WhatsApp' : 'دعم واتساب'}</div>
          </div>
        </div>
      </div>

      {/* Conditions Section (Teaser) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.conditions.title}</h2>
            <p className="text-slate-600 text-lg">{t.conditions.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.conditions.items.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition duration-300 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.description}</p>
                <div className="flex items-center text-sm text-medical-600 font-medium bg-medical-50 p-3 rounded-lg">
                  <span className="me-2">⚠️</span> {item.symptoms}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/conditions" className="inline-flex items-center gap-2 text-medical-700 font-bold hover:underline text-lg">
              {lang === 'fr' ? 'Voir toutes les pathologies' : 'عرض جميع الأمراض'} <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.services.title}</h2>
              <p className="text-slate-600 text-lg">{t.services.subtitle}</p>
            </div>
            <Link to="/services" className="hidden md:inline-block px-6 py-3 bg-white text-medical-700 font-bold border border-medical-200 rounded-lg hover:bg-medical-50 transition">
              {lang === 'fr' ? 'Tout voir' : 'عرض الكل'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.services.items.map((service, index) => (
              <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">
                <div className="w-12 h-12 bg-medical-100 text-medical-600 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-100 p-4 rounded-lg text-center text-blue-800 font-medium">
             {t.services.genderNote}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">{t.reviews.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.reviews.items.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 mb-6 italic">"{review.text}"</p>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="font-bold text-slate-900">{review.name}</span>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="https://g.page/r/placeholder" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-medical-600 hover:underline">
               {lang === 'fr' ? 'Voir plus d\'avis sur Google' : 'شاهد المزيد من التقييمات على جوجل'}
            </a>
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
           <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                 <h2 className="text-3xl font-bold mb-6">{lang === 'fr' ? 'Nous Trouver' : 'موقعنا'}</h2>
                 <p className="text-lg text-slate-600 mb-8">{t.contact.address}</p>
                 
                 <div className="space-y-4">
                   <div className="flex items-center gap-3">
                     <MapPin className="text-medical-600" />
                     <span>{lang === 'fr' ? 'Sur le Grand Boulevard' : 'على الشارع الكبير'}</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Bus className="text-medical-600" />
                     <span>{lang === 'fr' ? 'Station Busway à proximité' : 'محطة باص واي قريبة'}</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <span className="w-2 h-2 rounded-full bg-green-500"></span>
                     <span>{lang === 'fr' ? 'Parking disponible' : 'موقف سيارات متاح'}</span>
                   </div>
                 </div>

                 <Link to="/contact" className="mt-8 inline-block px-8 py-3 bg-slate-900 text-white font-bold rounded-lg text-center hover:bg-slate-800 transition">
                   {t.contact.title}
                 </Link>
              </div>
              <div className="md:w-1/2 h-80 md:h-auto bg-gray-200">
                <iframe 
                  src={MAP_EMBED_URL}
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Map Location"
                ></iframe>
              </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default Home;