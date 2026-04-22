import React, { useEffect } from 'react';
import { LATEST_FAVICON_URL, SOCIAL_LINKS } from '../constants';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    const baseUrl = 'https://kinesitherapie.clinaxis.ma';
    const faviconUrl = LATEST_FAVICON_URL;
    const fullUrl = new URL(window.location.pathname || '/', baseUrl).toString();
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

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    let googleBotMeta = document.querySelector('meta[name="googlebot"]');
    if (!googleBotMeta) {
      googleBotMeta = document.createElement('meta');
      googleBotMeta.setAttribute('name', 'googlebot');
      document.head.appendChild(googleBotMeta);
    }
    googleBotMeta.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Add favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.setAttribute('rel', 'icon');
      document.head.appendChild(favicon);
    }
    favicon.setAttribute('type', 'image/png');
    favicon.setAttribute('href', faviconUrl);

    let shortcutIcon = document.querySelector('link[rel="shortcut icon"]');
    if (!shortcutIcon) {
      shortcutIcon = document.createElement('link');
      shortcutIcon.setAttribute('rel', 'shortcut icon');
      document.head.appendChild(shortcutIcon);
    }
    shortcutIcon.setAttribute('type', 'image/png');
    shortcutIcon.setAttribute('href', faviconUrl);

    let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement('link');
      appleTouchIcon.setAttribute('rel', 'apple-touch-icon');
      document.head.appendChild(appleTouchIcon);
    }
    appleTouchIcon.setAttribute('href', faviconUrl);

    // Keep browser chrome color aligned with site brand
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColor);
    }
    themeColor.setAttribute('content', '#0369a1');

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

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
      'a-domicile-geriatrie-casablanca': 'Kiné gériatrique à domicile',
      'gallerie': 'Galerie',
      'blog': 'Blog',
      'a-propos': 'À Propos',
      'contact': 'Contact',
      'convention': 'Convention'
    };

    const arLabels: Record<string, string> = {
      '': 'الرئيسية',
      'pathologies': 'الأمراض المعالجة',
      'services': 'خدماتنا',
      'a-domicile': 'ترويض منزلي',
      'a-domicile-geriatrie-casablanca': 'ترويض منزلي للمسنين',
      'gallerie': 'المعرض',
      'blog': 'مدونة',
      'a-propos': 'عن المركز',
      'contact': 'اتصل بنا',
      'convention': 'الاتفاقيات'
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
      breadcrumbScript.setAttribute('type', 'application/ld+json');
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
    ogUrl.setAttribute('content', fullUrl);

    let ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (!ogSiteName) {
      ogSiteName = document.createElement('meta');
      ogSiteName.setAttribute('property', 'og:site_name');
      document.head.appendChild(ogSiteName);
    }
    ogSiteName.setAttribute('content', 'Centre Chnider');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', title);

    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', description);

    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');

    let twitterDomain = document.querySelector('meta[name="twitter:domain"]');
    if (!twitterDomain) {
      twitterDomain = document.createElement('meta');
      twitterDomain.setAttribute('name', 'twitter:domain');
      document.head.appendChild(twitterDomain);
    }
    twitterDomain.setAttribute('content', 'kinesitherapie.clinaxis.ma');

    let articlePublisher = document.querySelector('meta[property="article:publisher"]');
    if (!articlePublisher) {
      articlePublisher = document.createElement('meta');
      articlePublisher.setAttribute('property', 'article:publisher');
      document.head.appendChild(articlePublisher);
    }
    articlePublisher.setAttribute('content', SOCIAL_LINKS.facebook);

    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      document.head.appendChild(ogLocale);
    }
    ogLocale.setAttribute('content', isArabicPath ? 'ar_MA' : 'fr_MA');

    let ogLocaleAlternate = document.querySelector('meta[property="og:locale:alternate"]');
    if (!ogLocaleAlternate) {
      ogLocaleAlternate = document.createElement('meta');
      ogLocaleAlternate.setAttribute('property', 'og:locale:alternate');
      document.head.appendChild(ogLocaleAlternate);
    }
    ogLocaleAlternate.setAttribute('content', isArabicPath ? 'fr_MA' : 'ar_MA');

    document.querySelectorAll('meta[property="og:see_also"][data-og-see-also]').forEach((node) => node.remove());
    [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook, SOCIAL_LINKS.linkedin].forEach((url) => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:see_also');
      meta.setAttribute('content', url);
      meta.setAttribute('data-og-see-also', 'true');
      document.head.appendChild(meta);
    });

    document.querySelectorAll('link[rel="me"][data-rel-me]').forEach((node) => node.remove());
    [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook, SOCIAL_LINKS.linkedin].forEach((url) => {
      const relMe = document.createElement('link');
      relMe.setAttribute('rel', 'me');
      relMe.setAttribute('href', url);
      relMe.setAttribute('data-rel-me', 'true');
      document.head.appendChild(relMe);
    });

    let webPageScript = document.querySelector('script[type="application/ld+json"][data-schema="webpage"]');
    if (!webPageScript) {
      webPageScript = document.createElement('script');
      webPageScript.setAttribute('type', 'application/ld+json');
      webPageScript.setAttribute('data-schema', 'webpage');
      document.head.appendChild(webPageScript);
    }
    webPageScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: fullUrl,
      inLanguage: isArabicPath ? 'ar-MA' : 'fr-MA',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`
      }
    });
  }, [title, description, keywords]);
  return null;
};

export default SEOHead;