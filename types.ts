export type Language = 'fr' | 'ar';

export interface ContentData {
  nav: {
    home: string;
    services: string;
    conditions: string;
    homeTherapy: string;
    about: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaCall: string;
    ctaWhatsapp: string;
    ctaBook: string;
    trustBadge: string;
    benefits: string[];
  };
  conditions: {
    title: string;
    subtitle: string;
    items: ConditionItem[];
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
    genderNote: string;
  };
  homeTherapy: {
    title: string;
    description: string;
    benefits: string[];
    cta: string;
  };
  reviews: {
    title: string;
    subtitle: string;
    items: ReviewItem[];
  };
  about: {
    title: string;
    content: string[];
    mission: string;
  };
  contact: {
    title: string;
    addressLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    address: string;
    phone: string;
    hours: string;
  };
  seo: {
    homeTitle: string;
    homeDesc: string;
    servicesTitle: string;
    servicesDesc: string;
    conditionsTitle: string;
    conditionsDesc: string;
    contactTitle: string;
    contactDesc: string;
  };
}

export interface ConditionItem {
  id: string;
  title: string;
  description: string;
  symptoms: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // We'll map string to icon component
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}