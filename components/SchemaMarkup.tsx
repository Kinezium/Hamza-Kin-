import React from 'react';
import { LATEST_FAVICON_URL, PHONE_NUMBER, SOCIAL_LINKS } from '../constants';

const SchemaMarkup: React.FC = () => {
  const baseUrl = 'https://kinesitherapie.clinaxis.ma';

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        name: 'Centre Chnider',
        alternateName: 'مركز اشنيدر',
        url: baseUrl,
        inLanguage: ['fr-MA', 'ar-MA']
      },
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'Centre Chnider',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: LATEST_FAVICON_URL
        },
        sameAs: [
          SOCIAL_LINKS.instagram,
          SOCIAL_LINKS.facebook,
          SOCIAL_LINKS.linkedin
        ]
      },
      {
        '@type': 'MedicalBusiness',
        '@id': `${baseUrl}/#medicalbusiness`,
        name: 'Centre Chnider - Kinésithérapie & Hijama Médicale | مركز اشنيدر - الترويض الطبي و الحجامة الطبية',
        image: LATEST_FAVICON_URL,
        telephone: PHONE_NUMBER,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '500 Boulevard Mecdad Laherizi, Sbata',
          addressLocality: 'Casablanca',
          addressRegion: 'Casablanca-Settat',
          postalCode: '20000',
          addressCountry: 'MA'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 33.5426133,
          longitude: -7.5636178
        },
        url: baseUrl,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Wednesday', 'Friday'],
            opens: '09:00',
            closes: '19:00',
            description: 'Kinésithérapeute Femme - Patientes'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Thursday', 'Saturday'],
            opens: '09:00',
            closes: '19:00',
            description: 'Kinésithérapeute Homme - Patients'
          }
        ],
        medicalSpecialty: 'Physiotherapy',
        availableService: [
          { '@type': 'MedicalTherapy', name: 'Kinésithérapie Orthopédique' },
          { '@type': 'MedicalTherapy', name: 'Rééducation Fonctionnelle' },
          { '@type': 'MedicalTherapy', name: 'Traitement Hernie Discale & Sciatique' },
          { '@type': 'MedicalTherapy', name: 'Kiné Respiratoire Pédiatrique' },
          { '@type': 'MedicalTherapy', name: 'Rééducation Neurologique (AVC, Paralysie Faciale)' },
          { '@type': 'MedicalTherapy', name: 'Hijama Médicale (Cupping Therapy)' },
          { '@type': 'MedicalTherapy', name: 'Kinésithérapie à Domicile Casablanca' },
          { '@type': 'MedicalTherapy', name: 'Traitement Arthrose & Douleurs Articulaires' },
          { '@type': 'MedicalTherapy', name: 'Rééducation Post-Opératoire' }
        ],
        areaServed: [
          { '@type': 'City', name: 'Casablanca' },
          { '@type': 'City', name: 'Aïn Chock' },
          { '@type': 'City', name: 'Sbata' },
          { '@type': 'City', name: 'Sidi Othmane' },
          { '@type': 'City', name: 'Maarif' },
          { '@type': 'City', name: 'Hay Hassani' },
          { '@type': 'City', name: 'Californie' },
          { '@type': 'City', name: 'Oasis' },
          { '@type': 'City', name: 'Anfa' }
        ],
        sameAs: [
          SOCIAL_LINKS.instagram,
          SOCIAL_LINKS.facebook,
          SOCIAL_LINKS.linkedin
        ],
        paymentAccepted: 'Cash, Mutuelle (CNSS, CNOPS, Assurances)',
        keywords: 'kiné ainchoq, kiné sbata, kiné casablanca, kiné casa, kiné autour de moi, kinésithérapie Sbata, hijama médicale, rééducation fonctionnelle, الترويض الطبي, الحجامة الطبية, مركز اشنيدر'
      },
      {
        '@type': 'ItemList',
        '@id': `${baseUrl}/#main-pages`,
        name: 'Pages principales',
        itemListElement: [
          { '@type': 'ListItem', position: 1, url: `${baseUrl}/` },
          { '@type': 'ListItem', position: 2, url: `${baseUrl}/pathologies` },
          { '@type': 'ListItem', position: 3, url: `${baseUrl}/services` },
          { '@type': 'ListItem', position: 4, url: `${baseUrl}/a-domicile` },
          { '@type': 'ListItem', position: 5, url: `${baseUrl}/blog` },
          { '@type': 'ListItem', position: 6, url: `${baseUrl}/contact` }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaMarkup;