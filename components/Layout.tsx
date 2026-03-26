import React, { useState } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Globe, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Language } from '../types';
import { CONTENT, LOGO_SYMBOL_WHITE_URL, LOGO_COLORED_URL, LOGO_TEXT_URL } from '../constants';
import { makeWhatsAppLink, useAdminConfig } from '../src/adminConfig';
import SchemaMarkup from './SchemaMarkup';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = CONTENT[lang].nav;
  const config = useAdminConfig();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleLang = () => {
    const currentPath = location.pathname;
    if (lang === 'fr') {
      // Switch to Arabic: prefix path with /ar
      navigate('/ar' + (currentPath === '/' ? '' : currentPath));
    } else {
      // Switch to French: remove /ar prefix
      const newPath = currentPath.replace(/^\/ar/, '') || '/';
      navigate(newPath);
    }
    setIsMenuOpen(false);
  };

  // Get path prefix based on language
  const prefix = lang === 'ar' ? '/ar' : '';
  const homePath = prefix || '/';

  const siteLinks = [
    { to: `${prefix}/`, label: lang === 'fr' ? 'Accueil' : 'الرئيسية' },
    { to: `${prefix}/pathologies`, label: t.conditions },
    { to: `${prefix}/services`, label: t.services },
    { to: `${prefix}/a-domicile`, label: t.homeTherapy },
    { to: `${prefix}/gallerie`, label: t.gallery },
    { to: `${prefix}/blog`, label: lang === 'fr' ? 'Blog' : 'مدونة' },
    { to: `${prefix}/a-propos`, label: t.about },
    { to: `${prefix}/contact`, label: t.contact },
    { to: `${prefix}/convention`, label: lang === 'fr' ? 'Convention' : 'الاتفاقيات' }
  ];

  const managedPageLinks = config.pageLinks.map((item) => ({
    to: lang === 'fr' ? item.pathFr : item.pathAr,
    label: lang === 'fr' ? item.labelFr : item.labelAr
  }));

  const footerLinks = managedPageLinks.length ? managedPageLinks : siteLinks;

  const blogLinks = [
    {
      to: `${prefix}/blog/sciatique-hernie-discale`,
      label: lang === 'fr' ? 'Sciatique & hernie discale' : 'عرق النسا والانزلاق الغضروفي'
    },
    {
      to: `${prefix}/blog/lombalgie-cervicalgie`,
      label: lang === 'fr' ? 'Lombalgie & cervicalgie' : 'آلام أسفل الظهر والرقبة'
    },
    {
      to: `${prefix}/blog/traumatologie-sport`,
      label: lang === 'fr' ? 'Traumatologie du sport' : 'إصابات الرياضة'
    },
    {
      to: `${prefix}/blog/arthrose-genou`,
      label: lang === 'fr' ? 'Arthrose du genou' : 'خشونة الركبة'
    },
    {
      to: `${prefix}/blog/douleurs-epaules-capsulite`,
      label: lang === 'fr' ? 'Douleur d epaule & capsulite' : 'آلام الكتف والتهاب المحفظة'
    },
    {
      to: `${prefix}/blog/migraines-cephalees`,
      label: lang === 'fr' ? 'Migraines & cephalees' : 'الصداع والشقيقة'
    },
    {
      to: `${prefix}/blog/kine-pediatrique`,
      label: lang === 'fr' ? 'Kinesitherapie pediatrique' : 'العلاج الطبيعي للأطفال'
    },
    {
      to: `${prefix}/blog/readaptation-post-avc`,
      label: lang === 'fr' ? 'Readaptation post AVC' : 'التأهيل بعد السكتة الدماغية'
    },
    {
      to: `${prefix}/blog/posture-ergonomie`,
      label: lang === 'fr' ? 'Posture & ergonomie' : 'الوضعية وبيئة العمل'
    },
    {
      to: `${prefix}/blog/recuperation-sportive-prevention-blessures`,
      label: lang === 'fr' ? 'Recuperation sportive' : 'الاستشفاء الرياضي'
    }
  ];

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) => `
    block px-3 py-2 rounded-md text-base font-medium transition-colors
    ${isActive(path) 
      ? 'text-medical-600 bg-medical-50 font-semibold' 
      : 'text-gray-700 hover:text-medical-600 hover:bg-gray-50'}
  `;

  return (
    <div className={`min-h-screen flex flex-col ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <SchemaMarkup />
      
      {/* Top Bar */}
      <div className="text-white text-sm py-2 px-4 hidden sm:block" style={{ backgroundColor: config.theme.primaryDark }}>
        <div className="container mx-auto flex justify-between items-center">
          <a href={config.contact.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
            📍 {config.contact.address}
          </a>
          <a href={`tel:${config.contact.phone}`} className="hover:underline font-bold flex items-center gap-1" dir="ltr">
            <Phone size={14} /> <span dir="ltr">{config.contact.phone}</span>
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-4" style={{ borderColor: config.theme.primary }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={homePath} className="flex items-center gap-2" onClick={closeMenu}>
               {LOGO_TEXT_URL ? (
                 <img src={LOGO_TEXT_URL} alt="Logo Centre Chnider" className="h-10 w-auto object-contain" loading="lazy" />
               ) : (
                 <img src={LOGO_COLORED_URL} alt="Logo Centre Chnider" className="w-10 h-10 object-contain" loading="lazy" />
               )}
               <div className="leading-tight">
                 <h1 className="text-xl font-bold text-gray-900 tracking-tight">{lang === 'ar' ? 'مركز اشنيدر' : 'Centre Chnider'}</h1>
                 <p className="text-xs text-medical-600 font-medium">{lang === 'ar' ? 'الترويض الطبي و الحجامة الطبية' : 'Kinésithérapie & Hijama Médicale'}</p>
               </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
              <NavLink to={`${prefix}/`} end className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{t.home}</NavLink>
              <NavLink to={`${prefix}/pathologies`} className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{t.conditions}</NavLink>
              <NavLink to={`${prefix}/services`} className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{t.services}</NavLink>
              <NavLink to={`${prefix}/a-domicile`} className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{t.homeTherapy}</NavLink>
              <NavLink to={`${prefix}/gallerie`} className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{t.gallery}</NavLink>
              <NavLink to={`${prefix}/blog`} className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{lang === 'fr' ? 'Blog' : 'مدونة'}</NavLink>
              <NavLink to={`${prefix}/a-propos`} className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{t.about}</NavLink>
              <NavLink to={`${prefix}/contact`} className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{t.contact}</NavLink>
              
              <button onClick={toggleLang} className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition">
                <Globe size={16} />
                <span>{lang === 'fr' ? 'العربية' : 'Français'}</span>
              </button>

              <a href={makeWhatsAppLink(lang, config.contact.whatsappNumber, 'Navbar')} target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded-lg font-bold transition shadow-sm" style={{ backgroundColor: config.theme.primary }}>
                {t.bookNow}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button onClick={toggleLang} className="p-2 text-medical-700 font-bold border border-medical-100 rounded">
                 {lang === 'fr' ? 'AR' : 'FR'}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-medical-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to={`${prefix}/`} onClick={closeMenu} className={linkClass(`${prefix}/`)}>{t.home}</Link>
              <Link to={`${prefix}/pathologies`} onClick={closeMenu} className={linkClass(`${prefix}/pathologies`)}>{t.conditions}</Link>
              <Link to={`${prefix}/services`} onClick={closeMenu} className={linkClass(`${prefix}/services`)}>{t.services}</Link>
              <Link to={`${prefix}/a-domicile`} onClick={closeMenu} className={linkClass(`${prefix}/a-domicile`)}>{t.homeTherapy}</Link>
              <Link to={`${prefix}/gallerie`} onClick={closeMenu} className={linkClass(`${prefix}/gallerie`)}>{t.gallery}</Link>
              <Link to={`${prefix}/blog`} onClick={closeMenu} className={linkClass(`${prefix}/blog`)}>{lang === 'fr' ? 'Blog' : 'مدونة'}</Link>
              <Link to={`${prefix}/a-propos`} onClick={closeMenu} className={linkClass(`${prefix}/a-propos`)}>{t.about}</Link>
              <Link to={`${prefix}/contact`} onClick={closeMenu} className={linkClass(`${prefix}/contact`)}>{t.contact}</Link>
              <div className="pt-4 pb-2">
                <a href={makeWhatsAppLink(lang, config.contact.whatsappNumber, 'Menu mobile')} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="block w-full text-center text-white px-4 py-3 rounded-lg font-bold" style={{ backgroundColor: config.theme.primary }}>
                  {t.bookNow}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-white pt-12 pb-24 md:pb-8" style={{ backgroundColor: config.theme.footerBackground }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-start rtl:md:text-right">
            <div>
              <h3 className="text-xl font-bold mb-4 text-medical-400">{lang === 'ar' ? 'مركز اشنيدر' : 'Centre Chnider'}</h3>
              <img
                src={LOGO_SYMBOL_WHITE_URL}
                alt="Logo Centre Chnider"
                className="w-16 h-16 object-contain drop-shadow-md mx-auto md:mx-0 rtl:md:mx-0 mb-3"
                loading="lazy"
              />
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                {lang === 'fr' 
                  ? "Votre partenaire santé pour la rééducation physique et le bien-être à Casablanca." 
                  : "شريككم الصحي للترويض الطبي والرفاهية في الدار البيضاء."}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{lang === 'fr' ? 'Liens Rapides' : 'روابط سريعة'}</h3>
              <ul className="space-y-2 text-slate-300">
                {footerLinks.map((item) => (
                  <li key={item.to + item.label}><Link to={item.to} className="hover:text-white">{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t.contact}</h3>
              <a href={config.contact.mapsLink} target="_blank" rel="noopener noreferrer" className="text-slate-300 mb-2 hover:text-white hover:underline inline-block">{config.contact.address}</a>
              <p className="text-slate-300 font-bold text-lg" dir="ltr">{config.contact.phone}</p>
              <div className="mt-4 flex justify-center md:justify-start rtl:md:justify-end gap-4">
                <a 
                  href={config.contact.social.facebook}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition text-white" 
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href={config.contact.social.instagram}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-slate-800 p-2 rounded-full hover:bg-pink-600 transition text-white" 
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={config.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-2 rounded-full hover:bg-sky-700 transition text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8">
            <h3 className="text-lg font-bold text-white mb-5 text-center md:text-start rtl:md:text-right">
              {lang === 'fr' ? 'Plan du site complet (liens internes)' : 'خريطة الموقع الكاملة (روابط داخلية)'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm uppercase tracking-wider text-slate-400 mb-3">
                  {lang === 'fr' ? 'Pages principales' : 'الصفحات الرئيسية'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {footerLinks.map((item) => (
                    <Link key={item.to} to={item.to} className="text-slate-300 hover:text-white text-sm">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-slate-400 mb-3">
                  {lang === 'fr' ? 'Articles du blog' : 'مقالات المدونة'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {blogLinks.map((item) => (
                    <Link key={item.to} to={item.to} className="text-slate-300 hover:text-white text-sm">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
            <p>
              © {new Date().getFullYear()} {lang === 'ar' ? 'مركز اشنيدر' : 'Centre Chnider'}. {lang === 'ar' ? 'جميع الحقوق محفوظة' : 'Tous droits réservés'}.
            </p>
            <p className="mt-2 text-slate-400">
              {lang === 'fr' ? 'Site créé par ' : 'الموقع تم تطويره بواسطة '}
              <a href="https://clinaxis.ma" target="_blank" rel="noopener noreferrer" className="font-semibold text-medical-400 hover:text-medical-300">
                CLINAXIS.MA
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;