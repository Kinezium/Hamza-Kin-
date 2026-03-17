import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Language } from '../types';
import SEOHead from '../components/SEOHead';

interface NotFoundProps {
  lang: Language;
}

const NotFound: React.FC<NotFoundProps> = ({ lang }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isArabicPath = location.pathname.startsWith('/ar');
  const homePath = isArabicPath ? '/ar' : '/';

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate(homePath, { replace: true });
    }, 2500);

    return () => window.clearTimeout(timer);
  }, [navigate, homePath]);

  return (
    <>
      <SEOHead
        title={lang === 'fr' ? '404 - Page introuvable | Centre Chnider' : '404 - الصفحة غير موجودة | مركز اشنيدر'}
        description={lang === 'fr' ? 'La page demandee est introuvable. Redirection en cours vers l\'accueil.' : 'الصفحة المطلوبة غير موجودة. جاري التحويل الى الصفحة الرئيسية.'}
        keywords={lang === 'fr' ? '404, page introuvable, centre chnider' : '404, صفحة غير موجودة, مركز اشنيدر'}
      />

      <section className="min-h-[60vh] bg-medical-50 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center bg-white border border-medical-100 rounded-2xl shadow-lg p-8">
          <p className="text-medical-600 font-bold text-6xl mb-4">404</p>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            {lang === 'fr' ? 'Page introuvable' : 'الصفحة غير موجودة'}
          </h1>
          <p className="text-slate-600 mb-6">
            {lang === 'fr'
              ? 'Cette page n\'existe pas ou a ete deplacee. Redirection automatique vers l\'accueil...'
              : 'هذه الصفحة غير موجودة أو تم نقلها. سيتم التحويل تلقائيا الى الصفحة الرئيسية...'}
          </p>
          <Link
            to={homePath}
            className="inline-flex items-center justify-center px-6 py-3 bg-medical-600 text-white font-bold rounded-lg hover:bg-medical-700 transition"
          >
            {lang === 'fr' ? 'Retour a l\'accueil' : 'العودة للرئيسية'}
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
