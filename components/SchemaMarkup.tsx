import React from 'react';
import { ADDRESS, PHONE_NUMBER } from '../constants';

const SchemaMarkup: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Centre Chnider - Kinésithérapie & Hijama Médicale | مركز اشنيدر - الترويض الطبي و الحجامة الطبية",
    "image": "https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF",
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
    "priceRange": "$$",
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
    "areaServed": {
      "@type": "City",
      "name": "Casablanca"
    },
    "sameAs": [],
    "paymentAccepted": "Cash, Mutuelle (CNSS, CNOPS, Assurances)",
    "keywords": "kiné Casablanca, kinésithérapie Sbata, hijama médicale, rééducation fonctionnelle, الترويض الطبي, الحجامة الطبية, مركز اشنيدر"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaMarkup;