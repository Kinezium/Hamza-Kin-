import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Conditions from './pages/Conditions';
import Services from './pages/Services';
import HomeTherapy from './pages/HomeTherapy';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogIndex from './pages/BlogIndex';
import Gallery from './pages/Gallery';
import StickyCTA from './components/StickyCTA';
import { Language } from './types';

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

  return (
    <BrowserRouter>
      <ScrollToTop />
      <LangSync setLang={setLang} />
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          {/* French routes (default) */}
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/pathologies" element={<Conditions lang={lang} />} />
          <Route path="/services" element={<Services lang={lang} />} />
          <Route path="/a-domicile" element={<HomeTherapy lang={lang} />} />
          <Route path="/a-propos" element={<About lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route path="/blog" element={<BlogIndex lang={lang} />} />
          <Route path="/blog/sciatica-herniated-disc" element={<SciaticaArticle lang={lang} />} />
          <Route path="/blog/back-pain" element={<BackPainArticle lang={lang} />} />
          <Route path="/blog/sports-injuries" element={<SportsInjuriesArticle lang={lang} />} />
          <Route path="/blog/knee-osteoarthritis" element={<KneeOsteoarthritisArticle lang={lang} />} />
          <Route path="/blog/shoulder-pain" element={<ShoulderPainArticle lang={lang} />} />
          <Route path="/blog/migraines-headaches" element={<MigrainesArticle lang={lang} />} />
          <Route path="/blog/pediatric-physiotherapy" element={<PediatricArticle lang={lang} />} />
          <Route path="/blog/post-stroke" element={<PostStrokeArticle lang={lang} />} />
          <Route path="/blog/posture-ergonomics" element={<PostureErgonomicsArticle lang={lang} />} />
          <Route path="/blog/sports-recovery" element={<SportsRecoveryArticle lang={lang} />} />
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
          <Route path="/ar/a-propos" element={<About lang="ar" />} />
          <Route path="/ar/contact" element={<Contact lang="ar" />} />
          <Route path="/ar/blog" element={<BlogIndex lang="ar" />} />
          <Route path="/ar/blog/sciatica-herniated-disc" element={<SciaticaArticle lang="ar" />} />
          <Route path="/ar/blog/back-pain" element={<BackPainArticle lang="ar" />} />
          <Route path="/ar/blog/sports-injuries" element={<SportsInjuriesArticle lang="ar" />} />
          <Route path="/ar/blog/knee-osteoarthritis" element={<KneeOsteoarthritisArticle lang="ar" />} />
          <Route path="/ar/blog/shoulder-pain" element={<ShoulderPainArticle lang="ar" />} />
          <Route path="/ar/blog/migraines-headaches" element={<MigrainesArticle lang="ar" />} />
          <Route path="/ar/blog/pediatric-physiotherapy" element={<PediatricArticle lang="ar" />} />
          <Route path="/ar/blog/post-stroke" element={<PostStrokeArticle lang="ar" />} />
          <Route path="/ar/blog/posture-ergonomics" element={<PostureErgonomicsArticle lang="ar" />} />
          <Route path="/ar/blog/sports-recovery" element={<SportsRecoveryArticle lang="ar" />} />
          <Route path="/ar/gallerie" element={<Gallery lang="ar" />} />

          {/* Legacy Arabic slugs redirects */}
          <Route path="/ar/conditions" element={<Navigate to="/ar/pathologies" replace />} />
          <Route path="/ar/home-therapy" element={<Navigate to="/ar/a-domicile" replace />} />
          <Route path="/ar/about" element={<Navigate to="/ar/a-propos" replace />} />
          <Route path="/ar/gallery" element={<Navigate to="/ar/gallerie" replace />} />
        </Routes>
      </Layout>
      <StickyCTA lang={lang} />
    </BrowserRouter>
  );
};

export default App;