import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import SEOHead from '../components/SEOHead';
import { makeWhatsAppLink, useAdminConfig } from '../src/adminConfig';

interface GalleryProps {
  lang: Language;
}

const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const prefix = lang === 'ar' ? '/ar' : '';
  const config = useAdminConfig();
  return (
    <>
      <SEOHead
        title={lang === 'fr' ? 'Galerie | Centre Chnider Kinésithérapie Casablanca' : 'المعرض | مركز شنيدر للترويض الطبي بالدار البيضاء'}
        description={lang === 'fr' ? 'Découvrez la galerie du Centre Chnider: cabinet, matériel, séances de kinésithérapie et suivi à Casablanca.' : 'اكتشفوا معرض مركز شنيدر: العيادة، المعدات، وجلسات الترويض الطبي بالدار البيضاء.'}
        keywords={lang === 'fr' ? 'galerie kiné Casablanca, centre kinésithérapie Sbata, photos cabinet kiné' : 'معرض الترويض الطبي, صور مركز شنيدر, عيادة الترويض الدار البيضاء'}
      />

      <section className="bg-medical-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {lang === 'fr' ? 'Galerie' : 'المعرض'}
          </h1>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg">
            {lang === 'fr'
              ? 'Un aperçu de notre cabinet, notre matériel et notre approche de prise en charge au Centre Chnider.'
              : 'لمحة عن العيادة والمعدات وطريقة الاشتغال داخل مركز شنيدر.'}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.media.galleryImages.map((image, index) => (
              <figure
                key={`${image.src}-${index}`}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm"
              >
                <img
                  src={image.src}
                  alt={lang === 'fr' ? image.altFr : image.altAr}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Internal backlinks */}
      <section className="bg-medical-50 border-t border-medical-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-700 mb-4 text-lg">
            {lang === 'fr' ? (
              <>Découvrez nos{' '}
                <Link to={`${prefix}/services`} className="text-medical-700 font-semibold hover:underline">services de kinésithérapie</Link>
                {' '}et notre{' '}
                <Link to={`${prefix}/a-propos`} className="text-medical-700 font-semibold hover:underline">équipe</Link>.
              </>
            ) : (
              <>اكتشفوا{' '}
                <Link to={`${prefix}/services`} className="text-medical-700 font-semibold hover:underline">خدمات الترويض الطبي</Link>
                {' '}و<Link to={`${prefix}/a-propos`} className="text-medical-700 font-semibold hover:underline">فريقنا</Link>.
              </>
            )}
          </p>
          <a
            href={makeWhatsAppLink(lang, config.contact.whatsappNumber, 'Page galerie')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-medical-600 text-white font-bold rounded-xl hover:bg-medical-700 transition shadow-sm"
          >
            {lang === 'fr' ? 'Prendre RDV →' : '← حجز موعد'}
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery;
