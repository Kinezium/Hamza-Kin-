import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Conditions from './pages/Conditions';
import Services from './pages/Services';
import HomeTherapy from './pages/HomeTherapy';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import StickyCTA from './components/StickyCTA';
import { Language } from './types';

// Detect user language from browser/search query
const detectLanguage = (): Language => {
  // Check pathname for /ar (works even when hash is missing on mobile)
  const pathname = window.location.pathname || '';
  if (pathname.startsWith('/ar')) return 'ar';

  // Check URL hash for /ar prefix
  const hash = window.location.hash;
  if (hash.includes('/ar')) return 'ar';
  
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
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <HashRouter>
      <ScrollToTop />
      <LangSync setLang={setLang} />
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          {/* French routes (default) */}
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/conditions" element={<Conditions lang={lang} />} />
          <Route path="/services" element={<Services lang={lang} />} />
          <Route path="/home-therapy" element={<HomeTherapy lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route path="/blog" element={<Blog lang={lang} />} />

          {/* Arabic routes /ar */}
          <Route path="/ar" element={<Home lang="ar" />} />
          <Route path="/ar/conditions" element={<Conditions lang="ar" />} />
          <Route path="/ar/services" element={<Services lang="ar" />} />
          <Route path="/ar/home-therapy" element={<HomeTherapy lang="ar" />} />
          <Route path="/ar/about" element={<About lang="ar" />} />
          <Route path="/ar/contact" element={<Contact lang="ar" />} />
          <Route path="/ar/blog" element={<Blog lang="ar" />} />
        </Routes>
      </Layout>
      <StickyCTA lang={lang} />
    </HashRouter>
  );
};

export default App;