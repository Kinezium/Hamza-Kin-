import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    const baseUrl = 'https://kinesitherapie.clinaxis.ma';
    const pathname = window.location.pathname || '/';
    const isArabicPath = pathname === '/ar' || pathname.startsWith('/ar/');
    const frPath = isArabicPath ? (pathname.replace(/^\/ar(?=\/|$)/, '') || '/') : pathname;
    const arPath = isArabicPath ? pathname : `/ar${pathname === '/' ? '' : pathname}`;

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
    canonical.setAttribute('href', new URL(pathname, baseUrl).toString());

    // Add dynamic hreflang alternates
    const ensureAlternateLink = (hreflang: string, href: string) => {
      let alt = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (!alt) {
        alt = document.createElement('link');
        alt.setAttribute('rel', 'alternate');
        alt.setAttribute('hreflang', hreflang);
        document.head.appendChild(alt);
      }
      alt.setAttribute('href', href);
    };

    ensureAlternateLink('fr', new URL(frPath, baseUrl).toString());
    ensureAlternateLink('ar', new URL(arPath, baseUrl).toString());
    ensureAlternateLink('x-default', new URL(frPath, baseUrl).toString());

    // Add dynamic BreadcrumbList JSON-LD
    const frLabels: Record<string, string> = {
      '': 'Accueil',
      'pathologies': 'Pathologies',
      'services': 'Services',
      'a-domicile': 'À Domicile',
      'blog': 'Blog',
      'a-propos': 'À Propos',
      'contact': 'Contact'
    };

    const arLabels: Record<string, string> = {
      '': 'الرئيسية',
      'pathologies': 'الأمراض المعالجة',
      'services': 'خدماتنا',
      'a-domicile': 'ترويض منزلي',
      'blog': 'مدونة',
      'a-propos': 'عن المركز',
      'contact': 'اتصل بنا'
    };

    const pathWithoutLang = isArabicPath ? (pathname.replace(/^\/ar(?=\/|$)/, '') || '/') : pathname;
    const segments = pathWithoutLang.split('/').filter(Boolean);
    const labels = isArabicPath ? arLabels : frLabels;
    const rootPath = isArabicPath ? '/ar' : '/';

    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        position: 1,
        name: labels[''],
        item: new URL(rootPath, baseUrl).toString()
      }
    ];

    let cumulative = rootPath === '/' ? '' : rootPath;
    segments.forEach((segment, index) => {
      cumulative += `/${segment}`;
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: index + 2,
        name: labels[segment] || decodeURIComponent(segment).replace(/-/g, ' '),
        item: new URL(cumulative, baseUrl).toString()
      });
    });

    let breadcrumbScript = document.querySelector('script[type="application/ld+json"][data-schema="breadcrumb"]');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.setAttribute('data-schema', 'breadcrumb');
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems
    });

    // Keep Open Graph URL aligned with current route
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', new URL(pathname, baseUrl).toString());

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