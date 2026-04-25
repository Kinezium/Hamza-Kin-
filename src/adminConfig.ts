import { useEffect, useMemo, useState } from 'react';
import {
  ADDRESS,
  GOOGLE_MAPS_CENTER_URL,
  HERO_SLIDESHOW_IMAGES,
  MAP_EMBED_URL,
  PHONE_NUMBER,
  SOCIAL_LINKS,
  WHATSAPP_NUMBER
} from '../constants';
import { BLOG_TOPIC_IMAGES } from '../pages/Blog/blogImages';

const STORAGE_KEY = 'ltm-admin-config-v1';
const UPDATE_EVENT = 'ltm-admin-config-updated';
const TOKEN_KEY = 'ltm-admin-token';
const API_BASE = ((import.meta as any).env?.VITE_ADMIN_API_URL || '').toString().replace(/\/$/, '');

export interface AdminCredentials {
  username: string;
  password: string;
}

export interface CustomPageLink {
  id: string;
  labelFr: string;
  labelAr: string;
  pathFr: string;
  pathAr: string;
}

export interface GalleryImageItem {
  src: string;
  altFr: string;
  altAr: string;
}

export interface CustomBlogPost {
  id: string;
  slug: string;
  titleFr: string;
  titleAr: string;
  descFr: string;
  descAr: string;
  contentFr: string;
  contentAr: string;
  image: string;
  readTimeFr: string;
  readTimeAr: string;
  createdAt: string;
}

export interface SeoLocaleConfig {
  title: string;
  description: string;
  keywords: string;
  internalLinks: string;
}

export interface SeoPageConfig {
  fr: SeoLocaleConfig;
  ar: SeoLocaleConfig;
}

export interface SeoConfig {
  syncFrToAr: boolean;
  pages: Record<string, SeoPageConfig>;
}

export interface AdminSiteConfig {
  credentials: AdminCredentials;
  contact: {
    phone: string;
    whatsappNumber: string;
    address: string;
    mapEmbedUrl: string;
    mapsLink: string;
    social: {
      facebook: string;
      instagram: string;
      linkedin: string;
    };
  };
  theme: {
    primary: string;
    primaryDark: string;
    accent: string;
    footerBackground: string;
  };
  media: {
    heroImages: string[];
    galleryImages: GalleryImageItem[];
    blogImages: Record<string, string>;
  };
  seo: SeoConfig;
  pageLinks: CustomPageLink[];
  customBlogPosts: CustomBlogPost[];
}

export interface SeoFallback {
  title: string;
  description: string;
  keywords: string;
}

const defaultGalleryImages: GalleryImageItem[] = [
  {
    src: 'https://blogger.googleusercontent.com/img/a/AVvXsEgSufeTLTl6_zAaJynHbKie0wfFljxZBl90XVrfzh76FwzJCj7fLlg9X3D9HIsxgxtrCuj4clin3Ull2KUzXPWEiK6wOmxQ9-wpoPlhcSXgEOcTRhWYAftBDgAy_h5aoElSlvZU9zhI0wQWXcij2dOZxo5bnfXIIBIgVuuR-mjo7PBgbqy8thtlK3it',
    altFr: 'Seance de kinesitherapie au Centre Chnider',
    altAr: 'جلسة ترويض طبي في مركز شنيدر'
  },
  {
    src: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
    altFr: 'Espace de soins et reeducation',
    altAr: 'فضاء العلاج وإعادة التأهيل'
  },
  {
    src: 'https://blogger.googleusercontent.com/img/a/AVvXsEgPpgnG8yWOLLpQ_YltbQjM6nuv3OcIRtxwl3KCf43F37Be2mYy3YtVddmnKWGS0VZ_5FwB2zhz2s8DevbEq_06S0HcQweW3nsmc4l1M1W3rOZfnAUWzUODt5aSwFYqqEIsun5_BWB4DR_dU7wOku3fk-8bRYnakekIqpk8jS_hqJRz5wsrq_Ro9hKn',
    altFr: 'Seance de reeducation au centre',
    altAr: 'جلسة إعادة تأهيل داخل المركز'
  },
  {
    src: 'https://blogger.googleusercontent.com/img/a/AVvXsEiiOaAMnYdBDfw0riF-Zn7jkkp7_4dkSiAVy2x5oSePlVcH6ptw0XK5Z8C0JZHa_XIW-rtbve5oGtNrqmGM_gAbdnTYvzsgYDDwT8avZ5-98Dky1djCGEUMhgmoB8_xaS43W8X22IkwwOymaRoqJ-_cvU2XLFEnbUQ9pujMwUBiNSzejHijYx_Cm4eY',
    altFr: 'Équipement de kinésithérapie',
    altAr: 'معدات الترويض الطبي'
  }
];

const defaultSeoPages: Record<string, SeoPageConfig> = {
  home: {
    fr: {
      title: 'Kiné Casablanca | Centre Chnider - Cabinet et domicile',
      description: 'Kinésithérapie à Casablanca : dos, sport, neurologie, soins à domicile et au cabinet.',
      keywords: 'kiné Casablanca, kinésithérapie Casa, sciatique, rééducation',
      internalLinks: '/services,/pathologies,/a-domicile,/contact,/blog'
    },
    ar: {
      title: 'مركز الترويض الطبي بالدار البيضاء | مركز شنيدر',
      description: 'الترويض الطبي بالدار البيضاء داخل العيادة والمنزل.',
      keywords: 'الترويض الطبي, الدار البيضاء, عرق النسا, إعادة التأهيل',
      internalLinks: '/ar/services,/ar/pathologies,/ar/a-domicile,/ar/contact,/ar/blog'
    }
  },
  services: {
    fr: {
      title: 'Services de kinésithérapie à Casablanca',
      description: 'Rééducation, kiné respiratoire, sport et domicile à Casablanca.',
      keywords: 'services kiné, kiné à domicile, kiné respiratoire, traumatologie du sport',
      internalLinks: '/pathologies,/contact,/blog/lombalgie-cervicalgie'
    },
    ar: {
      title: 'خدمات الترويض الطبي بالدار البيضاء',
      description: 'خدمات إعادة التأهيل والعلاج التنفسي والعلاج المنزلي.',
      keywords: 'خدمات الترويض, علاج منزلي, علاج تنفسي',
      internalLinks: '/ar/pathologies,/ar/contact,/ar/blog/lombalgie-cervicalgie'
    }
  },
  conditions: {
    fr: {
      title: 'Pathologies traitées | Centre Chnider',
      description: 'Sciatique, hernie discale, arthrose, douleurs du dos et prise en charge neurologique.',
      keywords: 'sciatique, hernie discale, arthrose du genou, douleur du dos',
      internalLinks: '/services,/a-domicile,/contact,/blog/sciatique-hernie-discale'
    },
    ar: {
      title: 'الأمراض المعالجة | مركز شنيدر',
      description: 'علاج عرق النسا والانزلاق الغضروفي وآلام المفاصل والظهر.',
      keywords: 'عرق النسا, الانزلاق الغضروفي, خشونة الركبة',
      internalLinks: '/ar/services,/ar/a-domicile,/ar/contact,/ar/blog/sciatique-hernie-discale'
    }
  },
  homeTherapy: {
    fr: {
      title: 'Kiné à domicile à Casablanca',
      description: 'Séances de kinésithérapie à domicile sur Casablanca et les quartiers proches.',
      keywords: 'kiné domicile Casablanca, rééducation à domicile, Sbata',
      internalLinks: '/services,/pathologies,/contact'
    },
    ar: {
      title: 'الترويض المنزلي بالدار البيضاء',
      description: 'جلسات ترويض منزلي في الدار البيضاء والأحياء القريبة.',
      keywords: 'ترويض منزلي, الدار البيضاء, إعادة التأهيل في المنزل',
      internalLinks: '/ar/services,/ar/pathologies,/ar/contact'
    }
  },
  about: {
    fr: {
      title: 'À propos du Centre Chnider',
      description: 'Centre de kinésithérapie à Casablanca et service à domicile.',
      keywords: 'centre kiné Casablanca, à propos, équipe kiné',
      internalLinks: '/services,/contact,/blog'
    },
    ar: {
      title: 'عن مركز شنيدر',
      description: 'مركز الترويض الطبي بالدار البيضاء وخدمة منزلية.',
      keywords: 'مركز ترويض, فريق طبي, الدار البيضاء',
      internalLinks: '/ar/services,/ar/contact,/ar/blog'
    }
  },
  contact: {
    fr: {
      title: 'Contact kiné Casablanca | Centre Chnider',
      description: 'Prenez rendez-vous au cabinet ou à domicile à Casablanca.',
      keywords: 'contact kiné Casablanca, rendez-vous, téléphone kiné',
      internalLinks: '/services,/pathologies,/a-domicile,/blog'
    },
    ar: {
      title: 'اتصل بمركز شنيدر للترويض الطبي',
      description: 'احجز موعدك في العيادة أو في المنزل بالدار البيضاء.',
      keywords: 'اتصال مروض طبي, حجز موعد, الترويض الطبي',
      internalLinks: '/ar/services,/ar/pathologies,/ar/a-domicile,/ar/blog'
    }
  },
  gallery: {
    fr: {
      title: 'Galerie | Centre Chnider',
      description: 'Photos du cabinet et des espaces de prise en charge.',
      keywords: 'galerie kine, photos cabinet, centre chnider',
      internalLinks: '/services,/a-propos,/contact'
    },
    ar: {
      title: 'المعرض | مركز شنيدر',
      description: 'صور العيادة ومساحات التكفل العلاجي.',
      keywords: 'معرض, صور العيادة, مركز شنيدر',
      internalLinks: '/ar/services,/ar/a-propos,/ar/contact'
    }
  },
  blog: {
    fr: {
      title: 'Blog kinésithérapie | Centre Chnider',
      description: 'Articles santé, prévention et conseils de kinésithérapie.',
      keywords: 'blog kiné, conseils santé, articles physiothérapie',
      internalLinks: '/pathologies,/services,/contact'
    },
    ar: {
      title: 'مدونة الترويض الطبي | مركز شنيدر',
      description: 'مقالات صحية ونصائح علاجية في الترويض الطبي.',
      keywords: 'مدونة, نصائح صحية, الترويض الطبي',
      internalLinks: '/ar/pathologies,/ar/services,/ar/contact'
    }
  },
  convention: {
    fr: {
      title: 'Convention assurance et mutuelle | Centre Chnider',
      description: 'Page dédiée aux conventions avec assurances et mutuelles.',
      keywords: 'convention assurance, mutuelle, partenariat médical',
      internalLinks: '/contact,/services,/a-propos'
    },
    ar: {
      title: 'اتفاقيات التأمين والتعاضديات | مركز شنيدر',
      description: 'صفحة مخصصة لاتفاقيات التأمين والتعاضديات مع المركز.',
      keywords: 'اتفاقية, تأمين, تعاضدية, شراكة',
      internalLinks: '/ar/contact,/ar/services,/ar/a-propos'
    }
  }
};

export const DEFAULT_ADMIN_CONFIG: AdminSiteConfig = {
  credentials: {
    username: 'H@mza',
    password: 'Chn!d3r'
  },
  contact: {
    phone: PHONE_NUMBER,
    whatsappNumber: WHATSAPP_NUMBER,
    address: ADDRESS,
    mapEmbedUrl: MAP_EMBED_URL,
    mapsLink: GOOGLE_MAPS_CENTER_URL,
    social: {
      facebook: SOCIAL_LINKS.facebook,
      instagram: SOCIAL_LINKS.instagram,
      linkedin: SOCIAL_LINKS.linkedin
    }
  },
  theme: {
    primary: '#0284c7',
    primaryDark: '#0369a1',
    accent: '#10b981',
    footerBackground: '#0f172a'
  },
  media: {
    heroImages: HERO_SLIDESHOW_IMAGES,
    galleryImages: defaultGalleryImages,
    blogImages: BLOG_TOPIC_IMAGES
  },
  seo: {
    syncFrToAr: true,
    pages: defaultSeoPages
  },
  pageLinks: [
    { id: 'home', labelFr: 'Accueil', labelAr: 'الرئيسية', pathFr: '/', pathAr: '/ar' },
    { id: 'services', labelFr: 'Services', labelAr: 'الخدمات', pathFr: '/services', pathAr: '/ar/services' },
    { id: 'conditions', labelFr: 'Pathologies', labelAr: 'الأمراض', pathFr: '/pathologies', pathAr: '/ar/pathologies' },
    { id: 'home-therapy', labelFr: 'A domicile', labelAr: 'ترويض منزلي', pathFr: '/a-domicile', pathAr: '/ar/a-domicile' },
    { id: 'home-therapy-geriatrics', labelFr: 'Geriatrie domicile', labelAr: 'ترويض المسنين', pathFr: '/a-domicile-geriatrie-casablanca', pathAr: '/ar/a-domicile-geriatrie-casablanca' },
    { id: 'gallery', labelFr: 'Galerie', labelAr: 'المعرض', pathFr: '/gallerie', pathAr: '/ar/gallerie' },
    { id: 'blog', labelFr: 'Blog', labelAr: 'المدونة', pathFr: '/blog', pathAr: '/ar/blog' },
    { id: 'about', labelFr: 'A propos', labelAr: 'عن المركز', pathFr: '/a-propos', pathAr: '/ar/a-propos' },
    { id: 'contact', labelFr: 'Contact', labelAr: 'اتصل بنا', pathFr: '/contact', pathAr: '/ar/contact' },
    { id: 'convention', labelFr: 'Convention', labelAr: 'الاتفاقيات', pathFr: '/convention', pathAr: '/ar/convention' }
  ],
  customBlogPosts: []
};

const safeParse = (raw: string | null): Partial<AdminSiteConfig> => {
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Partial<AdminSiteConfig>;
  } catch {
    return {};
  }
};

const mergeConfig = (partial: Partial<AdminSiteConfig>): AdminSiteConfig => {
  return {
    ...DEFAULT_ADMIN_CONFIG,
    ...partial,
    credentials: {
      ...DEFAULT_ADMIN_CONFIG.credentials,
      ...(partial.credentials || {})
    },
    contact: {
      ...DEFAULT_ADMIN_CONFIG.contact,
      ...(partial.contact || {}),
      social: {
        ...DEFAULT_ADMIN_CONFIG.contact.social,
        ...(partial.contact?.social || {})
      }
    },
    theme: {
      ...DEFAULT_ADMIN_CONFIG.theme,
      ...(partial.theme || {})
    },
    media: {
      heroImages: partial.media?.heroImages?.length ? partial.media.heroImages : DEFAULT_ADMIN_CONFIG.media.heroImages,
      galleryImages: partial.media?.galleryImages?.length ? partial.media.galleryImages : DEFAULT_ADMIN_CONFIG.media.galleryImages,
      blogImages: {
        ...DEFAULT_ADMIN_CONFIG.media.blogImages,
        ...(partial.media?.blogImages || {})
      }
    },
    seo: {
      syncFrToAr: partial.seo?.syncFrToAr ?? DEFAULT_ADMIN_CONFIG.seo.syncFrToAr,
      pages: {
        ...DEFAULT_ADMIN_CONFIG.seo.pages,
        ...(partial.seo?.pages || {})
      }
    },
    pageLinks: partial.pageLinks?.length ? partial.pageLinks : DEFAULT_ADMIN_CONFIG.pageLinks,
    customBlogPosts: partial.customBlogPosts || []
  };
};

export const readAdminConfig = (): AdminSiteConfig => {
  if (typeof window === 'undefined') return DEFAULT_ADMIN_CONFIG;
  const partial = safeParse(window.localStorage.getItem(STORAGE_KEY));
  return mergeConfig(partial);
};

export const saveAdminConfig = (config: AdminSiteConfig): void => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  window.dispatchEvent(new CustomEvent(UPDATE_EVENT));
};

const getToken = () => {
  if (typeof window === 'undefined') return '';
  return window.localStorage.getItem(TOKEN_KEY) || '';
};

const setToken = (token: string) => {
  if (typeof window === 'undefined') return;
  if (token) {
    window.localStorage.setItem(TOKEN_KEY, token);
    return;
  }
  window.localStorage.removeItem(TOKEN_KEY);
};

export const hasApiBackend = (): boolean => Boolean(API_BASE);

export const clearAdminAuth = () => {
  setToken('');
  if (typeof window !== 'undefined') {
    window.sessionStorage.removeItem('ltm-admin-auth');
  }
};

const requestApi = async (path: string, init: RequestInit = {}) => {
  const headers = new Headers(init.headers || {});
  const token = getToken();
  if (token) headers.set('Authorization', `Bearer ${token}`);
  if (!(init.body instanceof FormData)) headers.set('Content-Type', 'application/json');
  const response = await fetch(`${API_BASE}${path}`, { ...init, headers });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `API error: ${response.status}`);
  }
  return response;
};

export const loginAdmin = async (username: string, password: string): Promise<boolean> => {
  if (!hasApiBackend()) {
    const current = readAdminConfig();
    const ok = username === current.credentials.username && password === current.credentials.password;
    if (ok) {
      window.sessionStorage.setItem('ltm-admin-auth', 'ok');
    }
    return ok;
  }

  const response = await requestApi('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  if (data?.token) {
    setToken(data.token);
    window.sessionStorage.setItem('ltm-admin-auth', 'ok');
    return true;
  }
  return false;
};

export const loadAdminConfig = async (): Promise<AdminSiteConfig> => {
  if (!hasApiBackend()) {
    return readAdminConfig();
  }
  const response = await requestApi('/api/config', { method: 'GET' });
  const data = await response.json();
  const config = mergeConfig(data || {});
  saveAdminConfig(config);
  return config;
};

export const persistAdminConfig = async (config: AdminSiteConfig): Promise<void> => {
  if (!hasApiBackend()) {
    saveAdminConfig(config);
    return;
  }
  await requestApi('/api/config', {
    method: 'PUT',
    body: JSON.stringify(config)
  });
  saveAdminConfig(config);
};

const fileToDataUrl = (file: File): Promise<string> => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result?.toString() || '');
  reader.onerror = () => reject(new Error('Impossible de lire le fichier.'));
  reader.readAsDataURL(file);
});

export const uploadAdminImage = async (file: File): Promise<string> => {
  if (!hasApiBackend()) {
    return fileToDataUrl(file);
  }

  const body = new FormData();
  body.append('file', file);
  const response = await requestApi('/api/upload', { method: 'POST', body });
  const data = await response.json();
  if (!data?.url) {
    throw new Error('Upload invalide: URL manquante.');
  }
  return data.url;
};

export const useAdminConfig = () => {
  const [config, setConfig] = useState<AdminSiteConfig>(readAdminConfig());

  useEffect(() => {
    const refresh = () => setConfig(readAdminConfig());
    window.addEventListener(UPDATE_EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(UPDATE_EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  return config;
};

export const applyAdminTheme = (theme: AdminSiteConfig['theme']) => {
  if (typeof window === 'undefined') return;
  const root = document.documentElement;
  root.style.setProperty('--admin-primary', theme.primary);
  root.style.setProperty('--admin-primary-dark', theme.primaryDark);
  root.style.setProperty('--admin-accent', theme.accent);
  root.style.setProperty('--admin-footer-bg', theme.footerBackground);
};

export const makeWhatsAppLink = (lang: 'fr' | 'ar', whatsappNumber: string, source?: string): string => {
  const baseMessage = lang === 'fr'
    ? 'Bonjour Centre Chnider, je souhaite reserver un rendez-vous.'
    : 'السلام عليكم مركز شنيدر، أريد حجز موعد.';
  const withSource = source
    ? `${baseMessage} ${lang === 'fr' ? `Page: ${source}` : `الصفحة: ${source}`}`
    : baseMessage;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(withSource)}`;
};

export const useManagedBlogImages = () => {
  const config = useAdminConfig();
  return useMemo(() => ({
    ...BLOG_TOPIC_IMAGES,
    ...config.media.blogImages
  }), [config.media.blogImages]);
};

export const getManagedSeo = (
  config: AdminSiteConfig,
  pageKey: string,
  lang: 'fr' | 'ar',
  fallback: SeoFallback
) => {
  const page = config.seo.pages[pageKey];
  const locale = lang === 'fr' ? page?.fr : page?.ar;
  return {
    title: locale?.title?.trim() || fallback.title,
    description: locale?.description?.trim() || fallback.description,
    keywords: locale?.keywords?.trim() || fallback.keywords,
    internalLinks: locale?.internalLinks?.trim() || ''
  };
};

export const slugify = (value: string): string => {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};
