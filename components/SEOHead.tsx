import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    document.title = title;
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Add favicon (recadré)
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.setAttribute('rel', 'icon');
      document.head.appendChild(favicon);
    }
    favicon.setAttribute('type', 'image/png');
    favicon.setAttribute('sizes', '64x64');
    favicon.setAttribute('href', 'https://blogger.googleusercontent.com/img/a/AVvXsEjsWuKuX19KnqVNPYNlFK8n6uZOvLh2T3BNGhxpK-Bwsej15kkdBHfand2jK-m1exW0e2RyBr0fhmXk34rTw17EXVPHlTGoDD5-IiFVdZVDdmNJZ5qwGeUdU5ZMo17y1cWzZxqBKNliSuNAT96ZlPBrQrHeY_l7VyNOGO0MtXkVRQcDaWKNT3g-afKR');

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://kinesitherapie.clinaxis.ma' + window.location.hash.replace('#', ''));

    // Add Schema.org MedicalBusiness structured data
    let script = document.querySelector('script[type="application/ld+json"][data-schema="medicalbusiness"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'medicalbusiness');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      'name': title,
      'description': description,
      'url': 'https://kinesitherapie.clinaxis.ma',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Casablanca',
        'addressRegion': 'Casablanca-Settat',
        'addressCountry': 'MA',
        'streetAddress': '500 Boulevard Mecdad Laherizi, Sbata'
      },
      'areaServed': 'Casablanca',
      'image': 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
      'telephone': '+212665646754',
      'priceRange': '$$'
    });
  }, [title, description, keywords]);
  return null;
};

export default SEOHead;