import React, { useState, useEffect } from 'react';
import { useCountUp } from '../components/useCountUp';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, MapPin, Bus, Zap, ArrowUpDown, Dumbbell, Bone, Stethoscope, Brain, Baby, Flame, Activity } from 'lucide-react';
import { Language } from '../types';
import { CONTENT, WHATSAPP_NUMBER, PHONE_NUMBER, MAP_EMBED_URL } from '../constants';
import SEOHead from '../components/SEOHead';

const getConditionIcon = (iconName?: string, size = 20) => {
  switch (iconName) {
    case 'Zap': return <Zap size={size} />;
    case 'Spine': return <ArrowUpDown size={size} />;
    case 'Dumbbell': return <Dumbbell size={size} />;
    case 'Bone': return <Bone size={size} />;
    case 'Stethoscope': return <Stethoscope size={size} />;
    case 'Brain': return <Brain size={size} />;
    case 'Baby': return <Baby size={size} />;
    case 'Flame': return <Flame size={size} />;
    default: return <Activity size={size} />;
  }
};

interface HomeProps {
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const t = CONTENT[lang];
  const prefix = lang === 'ar' ? '/ar' : '';
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
        keywords={lang === 'fr' ? 'kiné autour de moi, kinésithérapie à Casablanca, centre de kinésithérapie à Sbata, rééducation fonctionnelle Casablanca, traitement sciatique Casablanca, douleurs lombaires Casablanca, kiné Casablanca, kinésithérapeute, cabinet kiné, kiné à domicile, kiné Sbata, kiné sport, kiné bébé, kiné mutuelle, kiné CNSS, kiné CNOPS, kiné hernie discale, kiné sciatique, kiné dos, kiné lombalgie, kiné AVC, kiné paralysie, kiné rhumatologie, kiné respiratoire' : 'الترويض, الترويض الطبي, ألم الظهر, ألم السياتيك, علاج الظهر, علاج المفاصل, علاج الأطفال, علاج التنفس, علاج الأعصاب, علاج الركبة, علاج الوجه, علاج الحجامة, علاج الإصابات الرياضية, علاج ما بعد العمليات, علاج الروماتيزم, علاج العظام, علاج العضلات'}
      />
      {/* Bloc SEO local visible pour Google */}
      <section style={{position:'absolute',left:'-9999px',height:'1px',width:'1px',overflow:'hidden'}} aria-hidden="true">
        <h2>Kiné autour de moi</h2>
        <h2>Kinésithérapie à Casablanca</h2>
        <h2>Centre de kinésithérapie à Sbata</h2>
        <h2>Rééducation fonctionnelle Casablanca</h2>
        <h2>Traitement sciatique Casablanca</h2>
        <h2>Douleurs lombaires Casablanca</h2>
        <h2>Centre de kinésithérapie local à Casablanca</h2>
        <h2>Cabinet de kinésithérapie à Sbata</h2>
      </section>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-medical-50 to-white pt-12 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 md:flex items-center">
          <div className="md:w-1/2 z-10 relative">
            
            {/* Animated Benefits Banner */}
            <div className="mb-6 h-8 flex items-center">
              <span
                className={`inline-block px-4 py-2 bg-yellow-100 text-yellow-800 text-sm font-bold rounded-full border border-yellow-200 shadow-sm transition-opacity duration-500 transform ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'} animate-fadein`}
                style={{animation: isAnimating ? 'fadeOut 0.5s' : 'fadeIn 0.5s'}}
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
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgSufeTLTl6_zAaJynHbKie0wfFljxZBl90XVrfzh76FwzJCj7fLlg9X3D9HIsxgxtrCuj4clin3Ull2KUzXPWEiK6wOmxQ9-wpoPlhcSXgEOcTRhWYAftBDgAy_h5aoElSlvZU9zhI0wQWXcij2dOZxo5bnfXIIBIgVuuR-mjo7PBgbqy8thtlK3it" 
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
            <div className="text-3xl font-bold mb-1">
              <span ref={useCountUp(5, 1200)} />+
            </div>
            <div className="text-medical-200 text-sm">{lang === 'fr' ? "+ de 5 ans d'expérience" : 'أكثر من 5 سنوات خبرة'}</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">
              <span ref={useCountUp(500, 1200)} />+
            </div>
            <div className="text-medical-200 text-sm">{lang === 'fr' ? 'Patients Heureux' : 'مريض سعيد'}</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">
              <span ref={useCountUp(100, 1200)} />%
            </div>
            <div className="text-medical-200 text-sm">{lang === 'fr' ? 'Engagement' : 'التزام بالجودة'}</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1 animate-pulse">24/7</div>
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
                <div className="w-12 h-12 bg-medical-100 text-medical-600 rounded-full flex items-center justify-center mb-4">
                  {getConditionIcon(item.iconName)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.description}</p>
                <div className="flex items-center text-sm text-medical-600 font-medium bg-medical-50 p-3 rounded-lg">
                  <span className="me-2">⚠️</span> {item.symptoms}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to={`${prefix}/pathologies`} className="inline-flex items-center gap-2 text-medical-700 font-bold hover:underline text-lg">
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
            <Link to={`${prefix}/services`} className="hidden md:inline-block px-6 py-3 bg-white text-medical-700 font-bold border border-medical-200 rounded-lg hover:bg-medical-50 transition">
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
             <div className="grid grid-cols-2 gap-3 mt-3">
               <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
                 <span className="text-lg">👩‍⚕️</span>
                 <p className="text-sm font-bold text-pink-700">{lang === 'fr' ? 'Femme: Lun/Mer/Ven' : 'نساء: إثنين/أربعاء/جمعة'}</p>
               </div>
               <div className="bg-blue-100 border border-blue-200 rounded-lg p-3">
                 <span className="text-lg">👨‍⚕️</span>
                 <p className="text-sm font-bold text-blue-700">{lang === 'fr' ? 'Homme: Mar/Jeu/Sam' : 'رجال: ثلاثاء/خميس/سبت'}</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Avis de nos Patients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Real Google reviews (static for now) */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex text-yellow-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
              <p className="text-slate-700 mb-6 italic">"Hamza is an excellent kiné therapist who is attentive, listens carefully, and helps you understand the source of your pain and the process to alleviate it. He is very professional and supportive. After completing my shoulder treatment, I now feel significantly stronger. Currently, I'm addressing a herniated disc, and after 20 sessions overall, I'm very happy and satisfied with Hamza’s service. I highly recommend him."</p>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="font-bold text-slate-900">anass elhadi</span>
                <span className="text-xs text-slate-400">il y a 1 an</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex text-yellow-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
              <p className="text-slate-700 mb-6 italic">"Une personne jeune, attentif, un bon sense de l'écoute et surtout humain et qui métrise son domaine d'activité."</p>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="font-bold text-slate-900">Anass Chbani</span>
                <span className="text-xs text-slate-400">il y a 1 mois</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex text-yellow-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
              <p className="text-slate-700 mb-6 italic">"مركز يستحق خمس نجوم بما يتوفر عليه من تجهيزات في حالة جيدة .السيد حمزة شنيدر المشرف العام على المركز شاب متمكن من مهنته اما عن تجربتي الخاصة عن هذا المركز كنت اعاني من الام عرق النسا في درجة متقدمة والحمد لله بعد اجراء 15 حصة بدات اتعافى والحمد لله من اللام وذالك بفضل احترافية السيد حمزة الذي كان له الفضل  بعد الله في اجتياز هذه المرحلة انصح كل من يعاني من معضلة الام عرق النسا التوجه بدون تردد لمركز شنيدر الترويض الطبي شكرا سي حمزة حفظك الله ورعاك."</p>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="font-bold text-slate-900">brahim haddam</span>
                <span className="text-xs text-slate-400">il y a 1 an</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex text-yellow-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
              <p className="text-slate-700 mb-6 italic">"Il est très magnifique et très humain... Sans lui mon père jamais kan ghadi yat7essen.. It was all because of him"</p>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="font-bold text-slate-900">Salma El Montassir</span>
                <span className="text-xs text-slate-400">il y a 2 ans</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex text-yellow-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
              <p className="text-slate-700 mb-6 italic">"Ce monsieur est très avenant, sérieux dans son travail, toujours à l'écoute, je suis satisfaite du résultat."</p>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="font-bold text-slate-900">Zahra Abou</span>
                <span className="text-xs text-slate-400">il y a 1 an</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex text-yellow-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
              <p className="text-slate-700 mb-6 italic">"- Kiné très compétent et professionnel. - bon service avec un prix raisonnable."</p>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="font-bold text-slate-900">Benriane Aniss</span>
                <span className="text-xs text-slate-400">il y a 1 an</span>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/maps/place/Centre+de+kin%C3%A9sith%C3%A9rapie+CHNIDER+-+%D8%A7%D9%84%D8%AA%D8%B1%D9%88%D9%8A%D8%B6+%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%E2%80%AD/@33.5427003,-7.5662519,17z/data=!4m8!3m7!1s0xda633a36d6890ad:0xbc43853714712366!8m2!3d33.5426133!4d-7.5636178!9m1!1b1!16s%2Fg%2F11kj7fl0mh!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-sm"
            >
              Voir plus d'avis sur Google
              <ArrowRight size={20} />
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

                 <Link to={`${prefix}/contact`} className="mt-8 inline-block px-8 py-3 bg-slate-900 text-white font-bold rounded-lg text-center hover:bg-slate-800 transition">
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

      {/* CLINAXIS LGCP - Point fort */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-50 to-blue-50 p-8 md:p-10 rounded-3xl border border-blue-100 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shrink-0 shadow-md">
                CX
              </div>
              <div className="text-center md:text-start rtl:md:text-right">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  {lang === 'fr' ? 'Gestion digitale par CLINAXIS LGCP' : 'إدارة رقمية بواسطة CLINAXIS LGCP'}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {lang === 'fr'
                    ? 'Le Centre Chnider utilise CLINAXIS LGCP, le meilleur logiciel de gestion de cabinets médicaux au Maroc, pour la gestion des dossiers patients et des rendez-vous. Vos données médicales sont protégées par un chiffrement de niveau bancaire.'
                    : 'يستخدم مركز اشنيدر برنامج CLINAXIS LGCP، أفضل برنامج لإدارة العيادات الطبية في المغرب، لتدبير ملفات المرضى والمواعيد. بياناتكم الطبية محمية بتشفير بمستوى بنكي.'}
                </p>
                <div className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start rtl:md:justify-end">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">🔒 {lang === 'fr' ? 'Données chiffrées' : 'بيانات مشفرة'}</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">📅 {lang === 'fr' ? 'Gestion RDV' : 'تدبير المواعيد'}</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">📊 {lang === 'fr' ? 'Dossiers patients' : 'ملفات المرضى'}</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">🛡️ {lang === 'fr' ? 'Sécurité maximale' : 'أمان أقصى'}</span>
                </div>
                <a
                  href="https://lgcp-vitrine.clinaxis.ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-sm"
                >
                  {lang === 'fr' ? 'Découvrir CLINAXIS LGCP →' : '← اكتشف CLINAXIS LGCP'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;