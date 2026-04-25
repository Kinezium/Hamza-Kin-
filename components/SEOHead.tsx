import React, { useEffect } from 'react';
import { LATEST_FAVICON_URL, SOCIAL_LINKS } from '../constants';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  section?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const DEFAULT_SOCIAL_IMAGE = 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF';

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  section,
  publishedTime,
  modifiedTime
}) => {
  useEffect(() => {
    const baseUrl = 'https://kinesitherapie.clinaxis.ma';
    const faviconUrl = LATEST_FAVICON_URL;
    const fullUrl = new URL(window.location.pathname || '/', baseUrl).toString();
    const pathname = window.location.pathname || '/';
    const isArabicPath = pathname === '/ar' || pathname.startsWith('/ar/');
    const language = isArabicPath ? 'ar-MA' : 'fr-MA';
    const socialImage = image || DEFAULT_SOCIAL_IMAGE;
    const frPath = isArabicPath ? (pathname.replace(/^\/ar(?=\/|$)/, '') || '/') : pathname;
    const arPath = isArabicPath ? pathname : `/ar${pathname === '/' ? '' : pathname}`;

    document.title = title;
    document.documentElement.lang = isArabicPath ? 'ar' : 'fr';
    document.documentElement.dir = isArabicPath ? 'rtl' : 'ltr';

    let metaLanguage = document.querySelector('meta[name="language"]');
    if (!metaLanguage) {
      metaLanguage = document.createElement('meta');
      metaLanguage.setAttribute('name', 'language');
      document.head.appendChild(metaLanguage);
    }
    metaLanguage.setAttribute('content', language);

    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', 'Centre Chnider');

    let metaContentLanguage = document.querySelector('meta[http-equiv="content-language"]');
    if (!metaContentLanguage) {
      metaContentLanguage = document.createElement('meta');
      metaContentLanguage.setAttribute('http-equiv', 'content-language');
      document.head.appendChild(metaContentLanguage);
    }
    metaContentLanguage.setAttribute('content', isArabicPath ? 'ar' : 'fr');

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

      let newsKeywords = document.querySelector('meta[name="news_keywords"]');
      if (!newsKeywords) {
        newsKeywords = document.createElement('meta');
        newsKeywords.setAttribute('name', 'news_keywords');
        document.head.appendChild(newsKeywords);
      }
      newsKeywords.setAttribute('content', keywords);
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
    ogType.setAttribute('content', type);

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', socialImage);

    let ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (!ogImageAlt) {
      ogImageAlt = document.createElement('meta');
      ogImageAlt.setAttribute('property', 'og:image:alt');
      document.head.appendChild(ogImageAlt);
    }
    ogImageAlt.setAttribute('content', title);

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

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', socialImage);

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
      inLanguage: language,
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`
      }
    });

    let primaryImageOfPage = document.querySelector('meta[property="og:image:secure_url"]');
    if (!primaryImageOfPage) {
      primaryImageOfPage = document.createElement('meta');
      primaryImageOfPage.setAttribute('property', 'og:image:secure_url');
      document.head.appendChild(primaryImageOfPage);
    }
    primaryImageOfPage.setAttribute('content', socialImage);

    document.querySelectorAll('meta[property^="article:"][data-article-meta]').forEach((node) => node.remove());
    if (type === 'article') {
      const articleMetaEntries = [
        ['article:publisher', SOCIAL_LINKS.facebook],
        ['article:section', section || (isArabicPath ? 'مقالات الترويض الطبي' : 'Articles de kinésithérapie')],
        ['article:published_time', publishedTime || modifiedTime || new Date().toISOString()],
        ['article:modified_time', modifiedTime || publishedTime || new Date().toISOString()]
      ];

      articleMetaEntries.forEach(([property, content]) => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        meta.setAttribute('data-article-meta', 'true');
        document.head.appendChild(meta);
      });
    }

    let pageSchemaScript = document.querySelector('script[type="application/ld+json"][data-schema="page-primary"]');
    if (!pageSchemaScript) {
      pageSchemaScript = document.createElement('script');
      pageSchemaScript.setAttribute('type', 'application/ld+json');
      pageSchemaScript.setAttribute('data-schema', 'page-primary');
      document.head.appendChild(pageSchemaScript);
    }

    const primarySchema = type === 'article'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description,
          image: [socialImage],
          inLanguage: language,
          mainEntityOfPage: fullUrl,
          articleSection: section || (isArabicPath ? 'مدونة الترويض الطبي' : 'Blog kinésithérapie'),
          datePublished: publishedTime || modifiedTime || new Date().toISOString(),
          dateModified: modifiedTime || publishedTime || new Date().toISOString(),
          author: {
            '@type': 'Organization',
            name: 'Centre Chnider'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Centre Chnider',
            logo: {
              '@type': 'ImageObject',
              url: faviconUrl
            }
          }
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
          description,
          url: fullUrl,
          inLanguage: language,
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: socialImage
          },
          isPartOf: {
            '@type': 'WebSite',
            '@id': `${baseUrl}/#website`
          }
        };

    pageSchemaScript.textContent = JSON.stringify(primarySchema);
  }, [title, description, keywords]);
  return null;
};

export default SEOHead;