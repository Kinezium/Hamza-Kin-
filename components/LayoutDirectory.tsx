import React, { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Search } from 'lucide-react';
import { Language } from '../types';

interface LayoutDirectoryProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
}

const LayoutDirectory: React.FC<LayoutDirectoryProps> = ({ children, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const prefix = lang === 'ar' ? '/ar' : '';

  const toggleLang = () => {
    const currentPath = location.pathname;
    if (lang === 'fr') {
      navigate('/ar' + (currentPath === '/' ? '' : currentPath));
    } else {
      const newPath = currentPath.replace(/^\/ar/, '') || '/';
      navigate(newPath);
    }
    setIsMenuOpen(false);
    setLang(lang === 'fr' ? 'ar' : 'fr');
  };

  const navLinks = lang === 'fr'
    ? [
        { to: `${prefix}/annuaire`, label: 'Accueil annuaire' },
        { to: `${prefix}/annuaire/kinesitherapie`, label: 'Kinesitherapie' },
        { to: `${prefix}/annuaire/medecin-generaliste`, label: 'Medecins' },
        { to: `${prefix}/annuaire/pharmacie`, label: 'Pharmacies' },
        { to: `${prefix}/annuaire/laboratoire-analyses`, label: 'Laboratoires' },
        { to: `${prefix}/espace-praticien`, label: 'Devenir partenaire' },
      ]
    : [
        { to: `${prefix}/annuaire`, label: 'الرئيسية' },
        { to: `${prefix}/annuaire/kinesitherapie`, label: 'الترويض الطبي' },
        { to: `${prefix}/annuaire/medecin-generaliste`, label: 'الاطباء' },
        { to: `${prefix}/annuaire/pharmacie`, label: 'الصيدليات' },
        { to: `${prefix}/annuaire/laboratoire-analyses`, label: 'المختبرات' },
        { to: `${prefix}/espace-praticien`, label: 'انضم كشريك' },
      ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Annuaire-specific navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link
              to={`${prefix}/annuaire`}
              className="flex items-center gap-2 font-extrabold text-sky-700 text-lg shrink-0"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-700 text-white text-base font-bold">C</span>
              <span className="hidden sm:block">
                Clinaxis <span className="text-slate-400 font-normal text-sm ml-1">{lang === 'fr' ? 'Annuaire médical' : 'الدليل الطبي'}</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to.endsWith('/annuaire') || link.to.endsWith('/ar/annuaire')}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? 'bg-sky-50 text-sky-700'
                        : 'text-slate-600 hover:text-sky-700 hover:bg-slate-50'
                    } ${link.to.includes('espace-praticien') ? '!bg-sky-700 !text-white hover:!bg-sky-800 ml-2' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <Link
                to={`${prefix}/annuaire`}
                className="hidden sm:flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 hover:border-sky-300 hover:text-sky-700 transition"
              >
                <Search className="h-4 w-4" />
                <span>{lang === 'fr' ? 'Rechercher' : 'بحث'}</span>
              </Link>

              <button
                onClick={toggleLang}
                className="flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm font-medium text-slate-600 hover:border-sky-300 hover:text-sky-700 transition"
                aria-label="Toggle language"
              >
                <Globe className="h-4 w-4" />
                <span>{lang === 'fr' ? 'عر' : 'FR'}</span>
              </button>

              <Link
                to={lang === 'fr' ? '/' : '/ar'}
                className="hidden md:flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-slate-400 hover:text-slate-600 transition"
              >
                {lang === 'fr' ? '← Site principal' : 'الموقع الرئيسي →'}
              </Link>

              {/* Mobile burger */}
              <button
                className="lg:hidden rounded-lg p-1.5 text-slate-600 hover:bg-slate-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <nav className="lg:hidden border-t border-slate-100 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                      isActive ? 'bg-sky-50 text-sky-700' : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to={lang === 'fr' ? '/' : '/ar'}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2.5 text-sm text-slate-400 hover:text-slate-600"
              >
                {lang === 'fr' ? '← Site principal' : 'الموقع الرئيسي →'}
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Annuaire footer */}
      <footer className="bg-slate-900 text-slate-300 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white font-bold text-base">C</span>
                <span className="text-white font-bold text-lg">Clinaxis Annuaire</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {lang === 'fr'
                  ? 'Annuaire médical indépendant au Maroc. Nos fiches partenaires sont vérifiées et mises à jour régulièrement pour vous aider à trouver le bon praticien près de chez vous.'
                  : 'دليل طبي مستقل بالمغرب. ملفات شركائنا موثقة ومحدثة بانتظام لمساعدتكم في إيجاد الممارس المناسب.'}
              </p>
            </div>

            {/* Specialties links */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                {lang === 'fr' ? 'Spécialités' : 'التخصصات'}
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { slug: 'kinesitherapie', fr: 'Kinésithérapie', ar: 'الترويض الطبي' },
                  { slug: 'medecin-generaliste', fr: 'Médecin généraliste', ar: 'الطب العام' },
                  { slug: 'dentisterie', fr: 'Dentiste', ar: 'طب الأسنان' },
                  { slug: 'pharmacie', fr: 'Pharmacie', ar: 'الصيدلية' },
                  { slug: 'laboratoire-analyses', fr: 'Laboratoire', ar: 'مختبر التحاليل' },
                  { slug: 'pediatrie', fr: 'Pédiatrie', ar: 'طب الأطفال' },
                ].map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`${prefix}/annuaire/${s.slug}`}
                      className="hover:text-sky-400 transition"
                    >
                      {lang === 'fr' ? s.fr : s.ar}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner & info */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                {lang === 'fr' ? 'Partenaires' : 'الشركاء'}
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                {lang === 'fr'
                  ? 'Cabinets, centres et praticiens indépendants — rejoignez notre réseau de partenaires pour gagner en visibilité locale.'
                  : 'عيادات، مراكز وممارسون مستقلون — انضموا إلى شبكة شركائنا لتعزيز ظهوركم المحلي.'}
              </p>
              <Link
                to={`${prefix}/espace-praticien`}
                className="inline-block rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500 transition"
              >
                {lang === 'fr' ? 'Devenir partenaire' : 'انضم كشريك'}
              </Link>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span>© {new Date().getFullYear()} Clinaxis Annuaire — {lang === 'fr' ? 'Annuaire médical Maroc' : 'الدليل الطبي المغرب'}</span>
            <div className="flex gap-4">
              <Link to={lang === 'fr' ? '/' : '/ar'} className="hover:text-slate-300 transition">
                {lang === 'fr' ? 'Site principal' : 'الموقع الرئيسي'}
              </Link>
              <Link to={`${prefix}/annuaire`} className="hover:text-slate-300 transition">
                {lang === 'fr' ? 'Annuaire' : 'الدليل'}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LayoutDirectory;
