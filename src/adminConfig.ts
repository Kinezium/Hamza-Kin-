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
  pageLinks: CustomPageLink[];
  customBlogPosts: CustomBlogPost[];
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
    altFr: 'Equipement de kinesitherapie',
    altAr: 'معدات الترويض الطبي'
  }
];

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
  pageLinks: [
    { id: 'home', labelFr: 'Accueil', labelAr: 'الرئيسية', pathFr: '/', pathAr: '/ar' },
    { id: 'services', labelFr: 'Services', labelAr: 'الخدمات', pathFr: '/services', pathAr: '/ar/services' },
    { id: 'conditions', labelFr: 'Pathologies', labelAr: 'الأمراض', pathFr: '/pathologies', pathAr: '/ar/pathologies' },
    { id: 'home-therapy', labelFr: 'A domicile', labelAr: 'ترويض منزلي', pathFr: '/a-domicile', pathAr: '/ar/a-domicile' },
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

export const useAdminTheme = () => {
  const config = useAdminConfig();
  return config.theme;
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
