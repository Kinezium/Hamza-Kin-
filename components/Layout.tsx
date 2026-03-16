import React, { useState } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Globe, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Language } from '../types';
import { CONTENT, LOGO_SYMBOL_WHITE_URL, PHONE_NUMBER, SOCIAL_LINKS } from '../constants';
import SchemaMarkup from './SchemaMarkup';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = CONTENT[lang].nav;
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
      <div className="bg-medical-700 text-white text-sm py-2 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center">
          <span>{lang === 'fr' ? '📍 500 Boulevard Mecdad Laherizi, Sbata – Casablanca' : '📍 500 شارع مقداد الحريزي، سباتة – الدار البيضاء'}</span>
          <a href={`tel:${PHONE_NUMBER}`} className="hover:underline font-bold flex items-center gap-1">
            <Phone size={14} /> {PHONE_NUMBER}
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={homePath} className="flex items-center gap-2" onClick={closeMenu}>
               <img src={LOGO_SYMBOL_WHITE_URL} alt="Logo Centre Chnider" className="w-10 h-10 object-contain drop-shadow-md" loading="lazy" />
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

              <Link to={`${prefix}/contact`} className="bg-medical-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-medical-700 transition shadow-sm">
                {t.bookNow}
              </Link>
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
                <Link to={`${prefix}/contact`} onClick={closeMenu} className="block w-full text-center bg-medical-600 text-white px-4 py-3 rounded-lg font-bold">
                  {t.bookNow}
                </Link>
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
      <footer className="bg-slate-900 text-white pt-12 pb-24 md:pb-8">
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
                <li><Link to={`${prefix}/pathologies`} className="hover:text-white">{t.conditions}</Link></li>
                <li><Link to={`${prefix}/services`} className="hover:text-white">{t.services}</Link></li>
                <li><Link to={`${prefix}/a-domicile`} className="hover:text-white">{t.homeTherapy}</Link></li>
                <li><Link to={`${prefix}/gallerie`} className="hover:text-white">{t.gallery}</Link></li>
                <li><Link to={`${prefix}/blog`} className="hover:text-white">{lang === 'fr' ? 'Blog' : 'مدونة'}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t.contact}</h3>
              <p className="text-slate-300 mb-2">{CONTENT[lang].contact.address}</p>
              <p className="text-slate-300 font-bold text-lg" dir="ltr">{PHONE_NUMBER}</p>
              <div className="mt-4 flex justify-center md:justify-start rtl:md:justify-end gap-4">
                <a 
                  href={SOCIAL_LINKS.facebook}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition text-white" 
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href={SOCIAL_LINKS.instagram}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-slate-800 p-2 rounded-full hover:bg-pink-600 transition text-white" 
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
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