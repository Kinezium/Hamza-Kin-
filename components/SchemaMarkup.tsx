import React from 'react';
import { ADDRESS, PHONE_NUMBER } from '../constants';

const SchemaMarkup: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Centre Chnider de Kinésithérapie",
    "image": "https://picsum.photos/1000/600",
    "telephone": PHONE_NUMBER,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "500 Boulevard Mecdad Laherizi, Sbata",
      "addressLocality": "Casablanca",
      "addressRegion": "Casablanca-Settat",
      "postalCode": "20000",
      "addressCountry": "MA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.5426133, 
      "longitude": -7.5636178
    },
    "url": "https://centre-chnider.ma", 
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "medicalSpecialty": "Physiotherapy",
    "availableService": [
      { "@type": "MedicalTherapy", "name": "Kinésithérapie Orthopédique" },
      { "@type": "MedicalTherapy", "name": "Rééducation Fonctionnelle" },
      { "@type": "MedicalTherapy", "name": "Traitement Hernie Discale" },
      { "@type": "MedicalTherapy", "name": "Kiné Respiratoire Pédiatrique" },
      { "@type": "MedicalTherapy", "name": "Rééducation Neurologique (AVC)" },
      { "@type": "MedicalTherapy", "name": "Hijama Médicale" }
    ],
    "areaServed": "Casablanca"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaMarkup;