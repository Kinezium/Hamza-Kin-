import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Conditions from './pages/Conditions';
import Services from './pages/Services';
import HomeTherapy from './pages/HomeTherapy';
import HomeTherapyGeriatrics from './pages/HomeTherapyGeriatrics';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogIndex from './pages/BlogIndex';
import Convention from './pages/Convention';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import StickyCTA from './components/StickyCTA';
import HomeTherapyPopup from './components/HomeTherapyPopup';
import { Language } from './types';
import AdminDashboard from './pages/AdminDashboard';
import CustomArticle from './pages/Blog/CustomArticle';
import { applyAdminTheme, useAdminConfig } from './src/adminConfig';

// Blog Article Imports
import SciaticaArticle from './pages/Blog/SciaticaArticle';
import BackPainArticle from './pages/Blog/BackPainArticle';
import SportsInjuriesArticle from './pages/Blog/SportsInjuriesArticle';
import KneeOsteoarthritisArticle from './pages/Blog/KneeOsteoarthritisArticle';
import ShoulderPainArticle from './pages/Blog/ShoulderPainArticle';
import MigrainesArticle from './pages/Blog/MigrainesArticle';
import PediatricArticle from './pages/Blog/PediatricArticle';
import PostStrokeArticle from './pages/Blog/PostStrokeArticle';
import PostureErgonomicsArticle from './pages/Blog/PostureErgonomicsArticle';
import SportsRecoveryArticle from './pages/Blog/SportsRecoveryArticle';
import AvcWarningSignsArticle from './pages/Blog/AvcWarningSignsArticle';
import AnkleSprainArticle from './pages/Blog/AnkleSprainArticle';
import AclRuptureArticle from './pages/Blog/AclRuptureArticle';
import TibiaFractureArticle from './pages/Blog/TibiaFractureArticle';
import GeriatricReeducationArticle from './pages/Blog/GeriatricReeducationArticle';
import SeniorPhysicalActivityArticle from './pages/Blog/SeniorPhysicalActivityArticle';

// Detect user language from browser/search query
const detectLanguage = (): Language => {
  // Check pathname for /ar
  const pathname = window.location.pathname || '';
  if (pathname.startsWith('/ar')) return 'ar';
  
  // Check referrer or search query for Arabic keywords
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get('q') || searchParams.get('query') || '';
  const arabicRegex = /[\u0600-\u06FF]/;
  if (arabicRegex.test(query)) return 'ar';
  
  // Check document referrer for Arabic search
  if (document.referrer && arabicRegex.test(decodeURIComponent(document.referrer))) return 'ar';
  
  // Check browser language
  const browserLang = navigator.language || (navigator as any).userLanguage || '';
  if (browserLang.startsWith('ar')) return 'ar';
  
  return 'fr';
};

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Language sync from route
const LangSync: React.FC<{ setLang: (l: Language) => void }> = ({ setLang }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname.startsWith('/ar')) {
      setLang('ar');
    } else {
      setLang('fr');
    }
  }, [pathname, setLang]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(detectLanguage());

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/')) {
      const cleanPath = hash.slice(1);
      window.history.replaceState(null, '', cleanPath + window.location.search);
      setLang(cleanPath.startsWith('/ar') ? 'ar' : 'fr');
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const config = useAdminConfig();

  useEffect(() => {
    applyAdminTheme(config.theme);
  }, [config.theme]);

  const AppContent: React.FC = () => {
    return (
      <>
        <Layout lang={lang} setLang={setLang}>
          <Routes>
            {/* French routes (default) */}
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/pathologies" element={<Conditions lang={lang} />} />
            <Route path="/services" element={<Services lang={lang} />} />
            <Route path="/a-domicile" element={<HomeTherapy lang={lang} />} />
            <Route path="/a-domicile-geriatrie-casablanca" element={<HomeTherapyGeriatrics lang={lang} />} />
            <Route path="/a-propos" element={<About lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
            <Route path="/convention" element={<Convention lang={lang} />} />
            <Route path="/blog" element={<BlogIndex lang={lang} />} />
            <Route path="/blog/custom/:slug" element={<CustomArticle lang={lang} />} />
            <Route path="/blog/sciatique-hernie-discale" element={<SciaticaArticle lang={lang} />} />
            <Route path="/blog/lombalgie-cervicalgie" element={<BackPainArticle lang={lang} />} />
            <Route path="/blog/traumatologie-sport" element={<SportsInjuriesArticle lang={lang} />} />
            <Route path="/blog/arthrose-genou" element={<KneeOsteoarthritisArticle lang={lang} />} />
            <Route path="/blog/douleurs-epaules-capsulite" element={<ShoulderPainArticle lang={lang} />} />
            <Route path="/blog/migraines-cephalees" element={<MigrainesArticle lang={lang} />} />
            <Route path="/blog/kine-pediatrique" element={<PediatricArticle lang={lang} />} />
            <Route path="/blog/readaptation-post-avc" element={<PostStrokeArticle lang={lang} />} />
            <Route path="/blog/posture-ergonomie" element={<PostureErgonomicsArticle lang={lang} />} />
            <Route path="/blog/recuperation-sportive-prevention-blessures" element={<SportsRecoveryArticle lang={lang} />} />
            <Route path="/blog/avc-signes-alerte-reeducation-precoce" element={<AvcWarningSignsArticle lang={lang} />} />
            <Route path="/blog/entorse-cheville-kinesitherapie" element={<AnkleSprainArticle lang={lang} />} />
            <Route path="/blog/rupture-ligament-croise-anterieur-reeducation" element={<AclRuptureArticle lang={lang} />} />
            <Route path="/blog/fracture-tibia-reeducation-marche" element={<TibiaFractureArticle lang={lang} />} />
            <Route path="/blog/reeducation-geriatrique-importance-kine" element={<GeriatricReeducationArticle lang={lang} />} />
            <Route path="/blog/activite-physique-adaptee-seniors" element={<SeniorPhysicalActivityArticle lang={lang} />} />
            <Route path="/gallerie" element={<Gallery lang={lang} />} />

            {/* Legacy French slugs redirects */}
            <Route path="/conditions" element={<Navigate to="/pathologies" replace />} />
            <Route path="/home-therapy" element={<Navigate to="/a-domicile" replace />} />
            <Route path="/about" element={<Navigate to="/a-propos" replace />} />
            <Route path="/gallery" element={<Navigate to="/gallerie" replace />} />

            {/* Arabic routes /ar */}
            <Route path="/ar" element={<Home lang="ar" />} />
            <Route path="/ar/pathologies" element={<Conditions lang="ar" />} />
            <Route path="/ar/services" element={<Services lang="ar" />} />
            <Route path="/ar/a-domicile" element={<HomeTherapy lang="ar" />} />
            <Route path="/ar/a-domicile-geriatrie-casablanca" element={<HomeTherapyGeriatrics lang="ar" />} />
            <Route path="/ar/a-propos" element={<About lang="ar" />} />
            <Route path="/ar/contact" element={<Contact lang="ar" />} />
            <Route path="/ar/convention" element={<Convention lang="ar" />} />
            <Route path="/ar/blog" element={<BlogIndex lang="ar" />} />
            <Route path="/ar/blog/custom/:slug" element={<CustomArticle lang="ar" />} />
            <Route path="/ar/blog/sciatique-hernie-discale" element={<SciaticaArticle lang="ar" />} />
            <Route path="/ar/blog/lombalgie-cervicalgie" element={<BackPainArticle lang="ar" />} />
            <Route path="/ar/blog/traumatologie-sport" element={<SportsInjuriesArticle lang="ar" />} />
            <Route path="/ar/blog/arthrose-genou" element={<KneeOsteoarthritisArticle lang="ar" />} />
            <Route path="/ar/blog/douleurs-epaules-capsulite" element={<ShoulderPainArticle lang="ar" />} />
            <Route path="/ar/blog/migraines-cephalees" element={<MigrainesArticle lang="ar" />} />
            <Route path="/ar/blog/kine-pediatrique" element={<PediatricArticle lang="ar" />} />
            <Route path="/ar/blog/readaptation-post-avc" element={<PostStrokeArticle lang="ar" />} />
            <Route path="/ar/blog/posture-ergonomie" element={<PostureErgonomicsArticle lang="ar" />} />
            <Route path="/ar/blog/recuperation-sportive-prevention-blessures" element={<SportsRecoveryArticle lang="ar" />} />
            <Route path="/ar/blog/avc-signes-alerte-reeducation-precoce" element={<AvcWarningSignsArticle lang="ar" />} />
            <Route path="/ar/blog/entorse-cheville-kinesitherapie" element={<AnkleSprainArticle lang="ar" />} />
            <Route path="/ar/blog/rupture-ligament-croise-anterieur-reeducation" element={<AclRuptureArticle lang="ar" />} />
            <Route path="/ar/blog/fracture-tibia-reeducation-marche" element={<TibiaFractureArticle lang="ar" />} />
            <Route path="/ar/blog/reeducation-geriatrique-importance-kine" element={<GeriatricReeducationArticle lang="ar" />} />
            <Route path="/ar/blog/activite-physique-adaptee-seniors" element={<SeniorPhysicalActivityArticle lang="ar" />} />
            <Route path="/ar/gallerie" element={<Gallery lang="ar" />} />

            {/* Legacy Arabic slugs redirects */}
            <Route path="/ar/conditions" element={<Navigate to="/ar/pathologies" replace />} />
            <Route path="/ar/home-therapy" element={<Navigate to="/ar/a-domicile" replace />} />
            <Route path="/ar/about" element={<Navigate to="/ar/a-propos" replace />} />
            <Route path="/ar/gallery" element={<Navigate to="/ar/gallerie" replace />} />

            {/* 404 catch-all */}
            <Route path="*" element={<NotFound lang={lang} />} />
          </Routes>
        </Layout>
        <StickyCTA lang={lang} />
        <HomeTherapyPopup lang={lang} />
      </>
    );
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <LangSync setLang={setLang} />
      <Routes>
        <Route path="/LTM" element={<AdminDashboard />} />
        <Route path="*" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


