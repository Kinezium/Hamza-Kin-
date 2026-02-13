import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe, Facebook, Instagram } from 'lucide-react';
import { Language } from '../types';
import { CONTENT, PHONE_NUMBER } from '../constants';
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

  const toggleLang = () => {
    setLang(lang === 'fr' ? 'ar' : 'fr');
    setIsMenuOpen(false);
  };

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
            <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
               <div className="w-10 h-10 bg-medical-600 rounded-full flex items-center justify-center">
                 <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjsWuKuX19KnqVNPYNlFK8n6uZOvLh2T3BNGhxpK-Bwsej15kkdBHfand2jK-m1exW0e2RyBr0fhmXk34rTw17EXVPHlTGoDD5-IiFVdZVDdmNJZ5qwGeUdU5ZMo17y1cWzZxqBKNliSuNAT96ZlPBrQrHeY_l7VyNOGO0MtXkVRQcDaWKNT3g-afKR" alt="Logo Centre Chnider" style={{width:'32px',height:'32px',objectFit:'contain'}} />
               </div>
               <div className="leading-tight">
                 <h1 className="text-xl font-bold text-gray-900 tracking-tight">CENTRE CHNIDER</h1>
                 <p className="text-xs text-medical-600 font-medium">PHYSIO & REHAB</p>
               </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
              <NavLink to="/" className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{t.home}</NavLink>
              <NavLink to="/conditions" className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{t.conditions}</NavLink>
              <NavLink to="/services" className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{t.services}</NavLink>
              <NavLink to="/home-therapy" className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{t.homeTherapy}</NavLink>
              <NavLink to="/blog" className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{lang === 'fr' ? 'Blog' : 'مدونة'}</NavLink>
              <NavLink to="/about" className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{t.about}</NavLink>
              <NavLink to="/contact" className={({isActive}) => isActive ? 'text-medical-600 font-semibold' : 'text-gray-600 hover:text-medical-600'}>{t.contact}</NavLink>
              
              <button onClick={toggleLang} className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition">
                <Globe size={16} />
                <span>{lang === 'fr' ? 'العربية' : 'Français'}</span>
              </button>

              <Link to="/contact" className="bg-medical-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-medical-700 transition shadow-sm">
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
              <Link to="/" onClick={closeMenu} className={linkClass('/')}>{t.home}</Link>
              <Link to="/conditions" onClick={closeMenu} className={linkClass('/conditions')}>{t.conditions}</Link>
              <Link to="/services" onClick={closeMenu} className={linkClass('/services')}>{t.services}</Link>
              <Link to="/home-therapy" onClick={closeMenu} className={linkClass('/home-therapy')}>{t.homeTherapy}</Link>
              <Link to="/blog" onClick={closeMenu} className={linkClass('/blog')}>{lang === 'fr' ? 'Blog' : 'مدونة'}</Link>
              <Link to="/about" onClick={closeMenu} className={linkClass('/about')}>{t.about}</Link>
              <Link to="/contact" onClick={closeMenu} className={linkClass('/contact')}>{t.contact}</Link>
              <div className="pt-4 pb-2">
                <Link to="/contact" onClick={closeMenu} className="block w-full text-center bg-medical-600 text-white px-4 py-3 rounded-lg font-bold">
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
              <h3 className="text-xl font-bold mb-4 text-medical-400">Centre Chnider</h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                {lang === 'fr' 
                  ? "Votre partenaire santé pour la rééducation physique et le bien-être à Casablanca." 
                  : "شريككم الصحي للترويض الطبي والرفاهية في الدار البيضاء."}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{lang === 'fr' ? 'Liens Rapides' : 'روابط سريعة'}</h3>
              <ul className="space-y-2 text-slate-300">
                <li><Link to="/conditions" className="hover:text-white">{t.conditions}</Link></li>
                <li><Link to="/services" className="hover:text-white">{t.services}</Link></li>
                <li><Link to="/home-therapy" className="hover:text-white">{t.homeTherapy}</Link></li>
                <li><Link to="/blog" className="hover:text-white">{lang === 'fr' ? 'Blog' : 'مدونة'}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t.contact}</h3>
              <p className="text-slate-300 mb-2">{CONTENT[lang].contact.address}</p>
              <p className="text-slate-300 font-bold text-lg" dir="ltr">{PHONE_NUMBER}</p>
              <div className="mt-4 flex justify-center md:justify-start rtl:md:justify-end gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition text-white" 
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-slate-800 p-2 rounded-full hover:bg-pink-600 transition text-white" 
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Centre Chnider. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;