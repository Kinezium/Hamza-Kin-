import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types';
import SEOHead from '../components/SEOHead';

interface NotFoundProps {
  lang: Language;
}

const NotFound: React.FC<NotFoundProps> = ({ lang }) => {
  const location = useLocation();
  const isArabicPath = location.pathname.startsWith('/ar');
  const homePath = isArabicPath ? '/ar' : '/';
  const prefix = isArabicPath ? '/ar' : '';

  const helpfulLinks = [
    { to: `${prefix}/blog`, labelFr: 'Voir le blog santé', labelAr: 'عرض المدونة الصحية' },
    { to: `${prefix}/services`, labelFr: 'Découvrir nos services', labelAr: 'اكتشف خدماتنا' },
    { to: `${prefix}/pathologies`, labelFr: 'Pathologies traitées', labelAr: 'الأمراض المعالجة' },
    { to: `${prefix}/contact`, labelFr: 'Contacter le centre', labelAr: 'الاتصال بالمركز' }
  ];

  return (
    <>
      <SEOHead
        title={lang === 'fr' ? '404 - Page introuvable | Centre Chnider' : '404 - الصفحة غير موجودة | مركز اشنيدر'}
        description={lang === 'fr' ? 'La page demandee est introuvable. Consultez nos liens utiles pour continuer votre navigation.' : 'الصفحة المطلوبة غير موجودة. يمكنكم متابعة التصفح عبر الروابط المفيدة.'}
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
              ? 'Cette page n\'existe pas ou a ete deplacee. Utilisez les liens ci-dessous pour continuer votre visite.'
              : 'هذه الصفحة غير موجودة أو تم نقلها. استخدموا الروابط التالية لمواصلة التصفح.'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {helpfulLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg border border-medical-100 bg-medical-50 px-4 py-3 text-medical-700 font-semibold hover:bg-medical-100 transition"
              >
                {lang === 'fr' ? item.labelFr : item.labelAr}
              </Link>
            ))}
          </div>
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
