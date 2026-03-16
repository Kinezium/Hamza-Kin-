import React from 'react';
import { PHONE_NUMBER, SOCIAL_LINKS } from '../constants';

const SchemaMarkup: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Centre Chnider - Kinésithérapie & Hijama Médicale | مركز اشنيدر - الترويض الطبي و الحجامة الطبية",
    "image": "https://blogger.googleusercontent.com/img/a/AVvXsEiNrUhwSb5xPfjJ3_ubV_svu9y7RJV_e9N3kcnjFYsV20vuwqkyYyk1-Qk1AuddLIM5PvkCqpwY17-dGGEZSR8EZ7jYhRF4XXqfLNO0gdxLHMI99XB24_OwsAtyfZQdOBkcAE9TMzXwSmtsWvClgHeYWXGJvx8CBIe3y1jMecJqs-b1wpvB6ssHqXon",
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
    "url": "https://kinesitherapie.clinaxis.ma", 
    "priceRange": "Starting at 200 MAD",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Wednesday", "Friday"],
        "opens": "09:00",
        "closes": "19:00",
        "description": "Kinésithérapeute Femme - Patientes"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Thursday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00",
        "description": "Kinésithérapeute Homme - Patients"
      }
    ],
    "medicalSpecialty": "Physiotherapy",
    "availableService": [
      { "@type": "MedicalTherapy", "name": "Kinésithérapie Orthopédique" },
      { "@type": "MedicalTherapy", "name": "Rééducation Fonctionnelle" },
      { "@type": "MedicalTherapy", "name": "Traitement Hernie Discale & Sciatique" },
      { "@type": "MedicalTherapy", "name": "Kiné Respiratoire Pédiatrique" },
      { "@type": "MedicalTherapy", "name": "Rééducation Neurologique (AVC, Paralysie Faciale)" },
      { "@type": "MedicalTherapy", "name": "Hijama Médicale (Cupping Therapy)" },
      { "@type": "MedicalTherapy", "name": "Kinésithérapie à Domicile Casablanca" },
      { "@type": "MedicalTherapy", "name": "Traitement Arthrose & Douleurs Articulaires" },
      { "@type": "MedicalTherapy", "name": "Rééducation Post-Opératoire" }
    ],
    "areaServed": [
      { "@type": "City", "name": "Casablanca" },
      { "@type": "City", "name": "Aïn Chock" },
      { "@type": "City", "name": "Sbata" },
      { "@type": "City", "name": "Sidi Othmane" },
      { "@type": "City", "name": "Maarif" },
      { "@type": "City", "name": "Hay Hassani" },
      { "@type": "City", "name": "Californie" },
      { "@type": "City", "name": "Oasis" },
      { "@type": "City", "name": "Anfa" }
    ],
    "sameAs": [
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.linkedin
    ],
    "paymentAccepted": "Cash, Mutuelle (CNSS, CNOPS, Assurances)",
    "keywords": "kiné ainchoq, kiné sbata, kiné casablanca, kiné casa, kiné autour de moi, kinésithérapie Sbata, hijama médicale, rééducation fonctionnelle, الترويض الطبي, الحجامة الطبية, مركز اشنيدر"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaMarkup;