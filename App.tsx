import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Conditions from './pages/Conditions';
import Services from './pages/Services';
import HomeTherapy from './pages/HomeTherapy';
import About from './pages/About';
import Contact from './pages/Contact';
import StickyCTA from './components/StickyCTA';
import { Language } from './types';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');

  useEffect(() => {
    // Basic direction handling on body
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <HashRouter>
      <ScrollToTop />
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/conditions" element={<Conditions lang={lang} />} />
          <Route path="/services" element={<Services lang={lang} />} />
          <Route path="/home-therapy" element={<HomeTherapy lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
        </Routes>
      </Layout>
      <StickyCTA lang={lang} />
    </HashRouter>
  );
};

export default App;