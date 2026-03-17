import { ContentData } from './types';

export const PHONE_NUMBER = "0665646754";
export const WHATSAPP_NUMBER = "212665646754"; // Format for API
export const getWhatsAppBookingLink = (lang: 'fr' | 'ar', source?: string): string => {
  const baseMessage = lang === 'fr'
    ? 'Bonjour Centre Chnider, je souhaite reserver un rendez-vous.'
    : 'السلام عليكم مركز شنيدر، أريد حجز موعد.';
  const withSource = source
    ? `${baseMessage} ${lang === 'fr' ? `Page: ${source}` : `الصفحة: ${source}`}`
    : baseMessage;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(withSource)}`;
};
export const ADDRESS = "500 Bd. Mekdad Lahrizi, Sbata, Casablanca, MAROC";
export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.414193762785!2d-7.563617799999999!3d33.5426133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda633a36d6890ad%3A0xbc43853714712366!2zQ2VudHJlIGRlIGtpbsOpc2l0aMOpcmFwaWUgQ0hOSURFUiAtINin2YTYqtix2YjZiti2INin2YTYt9io2Yo!5e0!3m2!1sen!2sma!4v1770853502303!5m2!1sen!2sma"; 
export const GOOGLE_MAPS_CENTER_URL = "https://www.google.com/maps/place/Centre+de+kin%C3%A9sith%C3%A9rapie+CHNIDER+-+%D8%A7%D9%84%D8%AA%D8%B1%D9%88%D9%8A%D8%B6+%D8%A7%D9%84%D8%B7%D8%A8%D9%8A/@33.5426133,-7.5636178,17z";
export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?hl=en-MA&gl=ma&q=Centre+de+kin%C3%A9sith%C3%A9rapie+CHNIDER+-+%D8%A7%D9%84%D8%AA%D8%B1%D9%88%D9%8A%D8%B6+%D8%A7%D9%84%D8%B7%D8%A8%D9%8A,+500+Bd+Mekdad+Lahrizi,+Casablanca&ludocid=13565832974182720358&lsig=AB86z5XXNPd09IjW1AODiyu35kqP&_rs_=1#lrd=0xda633a36d6890ad:0xbc43853714712366,1";
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/centre_kinesitherapie_chnider",
  facebook: "https://www.facebook.com/kinesitherapie.chnider/",
  linkedin: "https://www.linkedin.com/company/centre-kine-chnider/"
};

export const LOGO_SYMBOL_WHITE_URL = "https://blogger.googleusercontent.com/img/a/AVvXsEjsWuKuX19KnqVNPYNlFK8n6uZOvLh2T3BNGhxpK-Bwsej15kkdBHfand2jK-m1exW0e2RyBr0fhmXk34rTw17EXVPHlTGoDD5-IiFVdZVDdmNJZ5qwGeUdU5ZMo17y1cWzZxqBKNliSuNAT96ZlPBrQrHeY_l7VyNOGO0MtXkVRQcDaWKNT3g-afKR";
export const LATEST_FAVICON_URL = "https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF";
// Colored symbol – same asset used for the favicon
export const LOGO_COLORED_URL = LATEST_FAVICON_URL;
// Full logo image used in navbar
export const LOGO_TEXT_URL = LATEST_FAVICON_URL;
// Slideshow images shown in the home hero (1:1). Add new URLs here when provided.
export const HERO_SLIDESHOW_IMAGES = [
  "https://blogger.googleusercontent.com/img/a/AVvXsEgSufeTLTl6_zAaJynHbKie0wfFljxZBl90XVrfzh76FwzJCj7fLlg9X3D9HIsxgxtrCuj4clin3Ull2KUzXPWEiK6wOmxQ9-wpoPlhcSXgEOcTRhWYAftBDgAy_h5aoElSlvZU9zhI0wQWXcij2dOZxo5bnfXIIBIgVuuR-mjo7PBgbqy8thtlK3it",
  "https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF"
];

export const CASABLANCA_NEIGHBORHOODS_FR = [
  "Aïn Chock",
  "Sbata",
  "Sidi Othmane",
  "Maarif",
  "Bourgogne",
  "Gauthier",
  "Racine",
  "Mers Sultan",
  "Derb Sultan",
  "Belvedere",
  "Roches Noires",
  "Hay Hassani",
  "Sidi Maarouf",
  "Californie",
  "Oasis",
  "Anfa",
  "Lissasfa",
  "Bernoussi",
  "Sidi Bernoussi",
  "Ain Sebaa"
];

export const CASABLANCA_NEIGHBORHOODS_AR = [
  "عين الشق",
  "سباتة",
  "سيدي عثمان",
  "المعاريف",
  "بوركون",
  "غوتييه",
  "راسين",
  "مرس السلطان",
  "درب السلطان",
  "بلفيدير",
  "روش نوار",
  "الحي الحسني",
  "سيدي معروف",
  "كاليفورنيا",
  "الواحة",
  "أنفا",
  "ليساسفة",
  "البرنوصي",
  "سيدي البرنوصي",
  "عين السبع"
];

export const SERVICE_ZONES_FR = [
  "Casablanca Centre",
  "Aïn Chock",
  "Sbata",
  "Maarif",
  "Hay Hassani",
  "Sidi Maarouf",
  "Sidi Othmane",
  "Anfa",
  "Californie",
  "Oasis",
  "Ain Sebaa",
  "Bernoussi"
];

export const SERVICE_ZONES_AR = [
  "وسط الدار البيضاء",
  "عين الشق",
  "سباتة",
  "المعاريف",
  "الحي الحسني",
  "سيدي معروف",
  "سيدي عثمان",
  "أنفا",
  "كاليفورنيا",
  "عين السبع",
  "البرنوصي"
];

export const CONTENT: Record<'fr' | 'ar', ContentData> = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      conditions: "Pathologies",
      homeTherapy: "À Domicile",
      gallery: "Galerie",
      about: "Le Centre",
      contact: "Contact",
      bookNow: "Prendre RDV",
    },
    hero: {
      title: "Centre Chnider de Kinésithérapie à Casablanca",
      subtitle: "Expertise en rééducation fonctionnelle, dos, sport et neurologie. Soins au cabinet (Sbata) et à domicile sur tout Casablanca: Aïn Chock, Californie, Oasis, Maarif, Sidi Othmane, Hay Hassani, Anfa et plus.",
      ctaCall: "0665 64 67 54",
      ctaWhatsapp: "WhatsApp",
      ctaBook: "Prendre Rendez-vous",
      trustBadge: "Remboursement Mutuelle (CNSS/CNOPS/Assurances)",
      benefits: [
        "✅ Remboursement Mutuelle (CNSS/CNOPS/Assurances)",
        "✅ Facture & Dossier Complet fourni",
        "✅ Sur le Grand Boulevard (Accès facile)",
        "✅ Station Busway à proximité",
        "✅ Soins Domicile & Cabinet"
      ]
    },
    conditions: {
      title: "Pathologies Traitées",
      subtitle: "Une prise en charge complète pour soulager vos douleurs et traiter vos problèmes de santé. Tarifs à partir de 200 DH selon le bilan.",
      items: [
        {
          id: "sciatica",
          title: "Sciatique & Hernie Discale",
          description: "Soulagement de la douleur du nerf sciatique et décompression vertébrale sans chirurgie.",
          symptoms: "Douleur fessier, jambe, décharge électrique.",
          iconName: "Zap"
        },
        {
          id: "backpain",
          title: "Lombalgie & Cervicalgie",
          description: "Traitement des douleurs de dos chroniques, torticolis et correction posturale.",
          symptoms: "Raideur, blocage, douleur au réveil.",
          iconName: "Spine"
        },
        {
          id: "sport",
          title: "Traumatologie du Sport",
          description: "Soins des entorses, tendinites, déchirures musculaires et préparation à la reprise.",
          symptoms: "Douleur à l'effort, gonflement, claquage.",
          iconName: "Dumbbell"
        },
        {
          id: "knee",
          title: "Arthrose & Douleurs Articulaires",
          description: "Rééducation du genou (gonarthrose), hanche et épaule pour retrouver la souplesse.",
          symptoms: "Craquement, douleur à la marche, raideur.",
          iconName: "Bone"
        },
        {
          id: "postop",
          title: "Rééducation Post-Opératoire",
          description: "Récupération après chirurgie : prothèse (hanche/genou), ligaments croisés, fractures.",
          symptoms: "Suite à une intervention chirurgicale.",
          iconName: "Stethoscope"
        },
        {
          id: "neuro",
          title: "Neurologie & Paralysie Faciale",
          description: "Rééducation après AVC, hémiplégie, Parkinson et traitement de la paralysie faciale a frigore.",
          symptoms: "Perte de motricité, visage figé, tremblements.",
          iconName: "Brain"
        },
        {
          id: "pediatric",
          title: "Kinésithérapie Pédiatrique",
          description: "Bronchiolite du nourrisson (Kiné respiratoire), torticolis congénital, pieds bots.",
          symptoms: "Encombrement, difficultés motrices chez l'enfant.",
          iconName: "Baby"
        },
        {
          id: "rheuma",
          title: "Rhumatologie",
          description: "Soulagement des douleurs inflammatoires, polyarthrite et spondylarthrite.",
          symptoms: "Douleurs articulaires multiples, inflammations.",
          iconName: "Flame"
        }
      ]
    },
    services: {
      title: "Nos Services & Spécialités",
      subtitle: "Des soins professionnels remboursables par votre mutuelle.",
      genderNote: "Pour votre confort : Kinésithérapeute Femme pour les patientes (Lundi, Mercredi, Vendredi) | Kinésithérapeute Homme pour les patients (Mardi, Jeudi, Samedi). Des jours séparés pour que tout le monde soit à l'aise.",
      items: [
        {
          id: "ortho",
          title: "Kinésithérapie Orthopédique",
          description: "Rééducation manuelle et instrumentale des troubles musculo-squelettiques.",
          iconName: "Bone"
        },
        {
          id: "functional",
          title: "Rééducation Fonctionnelle",
          description: "Exercices thérapeutiques pour l'autonomie et la mobilité.",
          iconName: "Activity"
        },
        {
          id: "respiratory",
          title: "Kiné Respiratoire (Adulte/Bébé)",
          description: "Désencombrement bronchique, bronchiolite et BPCO.",
          iconName: "Wind"
        },
        {
          id: "hijama",
          title: "Hijama Médicale & Bien-être",
          description: "Cupping therapy dans un cadre médical stérile et contrôlé.",
          iconName: "CircleDot"
        },
        {
          id: "home",
          title: "Kiné à Domicile (Tout Casa)",
          description: "Déplacement sur Casablanca avec matériel mobile complet, sans frais supplémentaire selon la zone.",
          iconName: "Home"
        }
      ]
    },
    homeTherapy: {
      title: "Kinésithérapie à Domicile Casablanca",
      description: "Profitez de soins professionnels chez vous. Nous couvrons les principaux quartiers de Casablanca (Aïn Chock, Sbata, Californie, Oasis, Maarif, Sidi Othmane, Hay Hassani, Anfa...) pour les patients ne pouvant pas se déplacer.",
      benefits: [
        "Zones couvertes: Aïn Chock, Sbata, Californie, Oasis, Sidi Othmane, Maarif, Hay Hassani, Anfa et plus",
        "Facture & Feuilles de soins (Remboursement Mutuelle)",
        "Matériel mobile complet (Electro, Ultrasons, Renforcement, Mobilisation)",
        "Aucun frais supplémentaire pour le déplacement dans nos zones couvertes",
        "Bilan innovant CLINAXIS SUIVI (dossier digitalisé, rapport à la demande)",
        "Gain de temps et confort absolu",
        "Suivi post-opératoire rigoureux"
      ],
      cta: "Réserver ma séance à domicile"
    },
    reviews: {
      title: "Avis de nos Patients",
      subtitle: "Votre santé et votre satisfaction sont notre priorité.",
      items: [
        {
          id: "1",
          name: "anass elhadi",
          rating: 5,
          text: "Hamza is an excellent kiné therapist who is attentive, listens carefully, and helps you understand the source of your pain and the process to alleviate it.",
          date: "Il y a 1 an",
          avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjWkU0OQ466MTbpRLla7GUp_-PyXcTM4vP2KvuKTbqR3A4GkCunu=w45-h45-p-rp-mo-br100"
        },
        {
          id: "2",
          name: "Anass Chbani",
          rating: 5,
          text: "Une personne jeune, attentive, avec un bon sens de l'écoute et surtout humaine et compétente dans son domaine.",
          date: "Il y a 2 mois",
          avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocIPd_drm6wdDVmy-fok4sGa6SqEi5J2uKMryW8ghJFLQeq79g=w45-h45-p-rp-mo-br100"
        },
        {
          id: "3",
          name: "oumaima ouafik",
          rating: 5,
          text: "Merci pour la qualité des soins et les bons conseils, un kinésithérapeute au top !",
          date: "Il y a 2 semaines",
          avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocKtt9QSk4w4-n0KO4q6D3-ChmVk8idJhNzurELPdIWGDMmGeQ=w45-h45-p-rp-mo-br100"
        }
      ]
    },
    about: {
      title: "À Propos du Centre Chnider",
      content: [
        "Le Centre Chnider de Kinésithérapie est votre référence à Casablanca pour la rééducation physique et le bien-être.",
        "Situé à Sbata, nous accueillons nos patients dans un cadre moderne, mais nous excellons également dans le service à domicile à travers Casablanca: Aïn Chock, Californie, Oasis, Maarif, Sidi Othmane, Hay Hassani, Sidi Maarouf, Anfa et quartiers voisins.",
        "Nous facilitons vos démarches administratives : Factures, feuilles de soins pour CNSS, CNOPS et assurances privées sont fournies systématiquement."
      ],
      mission: "Notre objectif : Un rétablissement rapide, sans douleur, avec un accompagnement administratif complet."
    },
    contact: {
      title: "Contactez-nous",
      addressLabel: "Cabinet",
      phoneLabel: "Téléphone & WhatsApp",
      hoursLabel: "Horaires",
      address: ADDRESS,
      phone: PHONE_NUMBER,
      hours: "Lundi - Samedi : 09h00 - 19h00"
    },
    seo: {
      homeTitle: "Kiné Casablanca | Centre Chnider - Cabinet & Domicile (Agréé Mutuelle)",
      homeDesc: "Centre Chnider: kiné Casablanca, kiné Casa, kiné Sbata, kiné Aïn Chock et kiné autour de moi. Soins cabinet & domicile. Tarif à partir de 200 DH selon le bilan.",
      servicesTitle: "Services Kiné Casablanca : Rééducation, Respiratoire, Sport & Hijama",
      servicesDesc: "Soins complets : Kiné respiratoire bébé, rééducation AVC, traumatologie sport, Hijama médicale. Déplacement à domicile sur Casablanca (Aïn Chock, Sbata, Californie, Oasis, Maarif, Hay Hassani...).",
      conditionsTitle: "Traitement Hernie Discale, Sciatique & Arthrose | Kiné Casablanca",
      conditionsDesc: "Spécialiste dos et articulations : Sciatique, hernie discale sans opération, paralysie faciale, entorses. Tarifs à partir de 200 DH selon la pathologie.",
      contactTitle: "Contact Kiné Casablanca | Rdv Cabinet ou Domicile - 0665646754",
      contactDesc: "Appelez le 0665646754 pour un kiné à Casablanca. Cabinet à Sbata ou domicile zones Aïn Chock, Californie, Oasis, Maarif, Sidi Othmane, Hay Hassani."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      conditions: "الأمراض المعالجة",
      homeTherapy: "ترويض منزلي",
      gallery: "المعرض",
      about: "عن المركز",
      contact: "اتصل بنا",
      bookNow: "حجز موعد",
    },
    hero: {
      title: "مركز شنيدر للترويض الطبي والعلاج الفيزيائي بالدار البيضاء",
      subtitle: "خبراء في علاج آلام الظهر، المفاصل، وترويض الأطفال. خدماتنا متوفرة في العيادة (سباتة) وفي المنزل بمناطق الدار البيضاء: عين الشق، المعاريف، سيدي عثمان، الحي الحسني، أنفا وغيرها.",
      ctaCall: "0665 64 67 54",
      ctaWhatsapp: "واتساب",
      ctaBook: "حجز موعد",
      trustBadge: "ملفات التعويض مقبولة (CNSS/CNOPS)",
      benefits: [
        "✅ ملفات التعويض مقبولة (CNSS/CNOPS)",
        "✅ فاتورة وملف كامل للتعاضدية",
        "✅ موقع استراتيجي على الشارع الكبير",
        "✅ محطة باص واي قريبة",
        "✅ خدمة بالعيادة أو المنزل"
      ]
    },
    conditions: {
      title: "ماذا نعالج؟",
      subtitle: "علاجات متخصصة لتخفيف الألم واستعادة الحركة لجميع الأعمار. الأسعار تبدأ من 200 درهم حسب التقييم.",
      items: [
        {
          id: "sciatica",
          title: "السياتيك والانزلاق الغضروفي",
          description: "علاج عرق النسا والديسك (القرص الغضروفي) بتقنيات حديثة لتجنب الجراحة.",
          symptoms: "ألم يمتد للساق، تنميل، كهرباء.",
          iconName: "Zap"
        },
        {
          id: "backpain",
          title: "آلام الظهر والرقبة",
          description: "علاج بوزلوم، تشنج العنق، وتصحيح الوضعية والعمود الفقري.",
          symptoms: "ألم أسفل الظهر، تيبس الرقبة.",
          iconName: "Spine"
        },
        {
          id: "sport",
          title: "الإصابات الرياضية",
          description: "علاج الالتواءات (Entorse)، التهاب الأوتار (Tendinite)، والتمزق العضلي للرياضيين.",
          symptoms: "ألم عند الحركة، انتفاخ المفاصل.",
          iconName: "Dumbbell"
        },
        {
          id: "knee",
          title: "خشونة الركبة والمفاصل",
          description: "ترويض الركبة (La Gonarthrose)، الكتف المتجمد، والورك.",
          symptoms: "صعوبة المشي، طقطقة المفاصل.",
          iconName: "Bone"
        },
        {
          id: "postop",
          title: "الترويض بعد العمليات",
          description: "إعادة التأهيل بعد جراحة الكسور، الرباط الصليبي، والمفاصل الاصطناعية.",
          symptoms: "بعد العمليات الجراحية.",
          iconName: "Stethoscope"
        },
        {
          id: "neuro",
          title: "ترويض الجهاز العصبي وشلل الوجه",
          description: "تأهيل حالات الشلل النصفي (AVC)، الباركنسون، وشلل الوجه النصفي (La paralysie faciale).",
          symptoms: "ثقل الحركة، اعوجاج الفم.",
          iconName: "Brain"
        },
        {
          id: "pediatric",
          title: "ترويض الأطفال والرضع",
          description: "علاج صعوبة التنفس (Bronchiolite)، تأخر المشي، وتشوهات القدمين.",
          symptoms: "كحة، ضيق تنفس، مشاكل النمو.",
          iconName: "Baby"
        },
        {
          id: "rheuma",
          title: "الروماتيزم والتهاب المفاصل",
          description: "تخفيف آلام الروماتيزم المزمنة والالتهابات.",
          symptoms: "ألم وتورم في عدة مفاصل.",
          iconName: "Flame"
        }
      ]
    },
    services: {
      title: "خدمات المركز",
      subtitle: "علاج طبيعي احترافي مع توفير جميع وثائق التعويض.",
      genderNote: "لراحتكم: مروضة طبية للنساء (الإثنين، الأربعاء، الجمعة) | مروض طبي للرجال (الثلاثاء، الخميس، السبت). أيام منفصلة لراحة الجميع.",
      items: [
        {
          id: "ortho",
          title: "ترويض العظام والمفاصل",
          description: "العلاج اليدوي والآلي لمشاكل العضلات والهيكل العظمي.",
          iconName: "Bone"
        },
        {
          id: "functional",
          title: "إعادة التأهيل الحركي",
          description: "استعادة القدرة على المشي والحركة الطبيعية.",
          iconName: "Activity"
        },
        {
          id: "respiratory",
          title: "الترويض التنفسي (أطفال وكبار)",
          description: "إخراج البلغم وعلاج ضيق التنفس والتهاب الشعب الهوائية.",
          iconName: "Wind"
        },
        {
          id: "hijama",
          title: "الحجامة الطبية",
          description: "حجامة علاجية بطرق طبية آمنة ومعقمة.",
          iconName: "CircleDot"
        },
        {
          id: "home",
          title: "ترويض منزلي (كل الدار البيضاء)",
          description: "نصل إليكم في أحياء الدار البيضاء بمعدات متنقلة كاملة وبدون مصاريف إضافية داخل المناطق المغطاة.",
          iconName: "Home"
        }
      ]
    },
    homeTherapy: {
      title: "مروض طبي في المنزل بالدار البيضاء",
      description: "خدمة الترويض الطبي المنزلي تغطي أهم أحياء الدار البيضاء مثل عين الشق وسباتة والمعاريف وسيدي عثمان والحي الحسني وأنفا. نأتي إليكم لتوفير عناء التنقل.",
      benefits: [
        "المناطق المغطاة: عين الشق، سباتة، سيدي عثمان، المعاريف، الحي الحسني، أنفا وغيرها",
        "توفير الفاتورة وملف التعاضدية (CNSS/CNOPS)",
        "معدات متنقلة متكاملة (Electro, Ultrasons, تمارين تقوية, Mobilisation)",
        "بدون أي مصاريف إضافية للتنقل داخل المناطق المغطاة",
        "تقييم ذكي عبر CLINAXIS SUIVI (ملف رقمي، تقرير عند الطلب)",
        "مواعيد مرنة تناسبكم",
        "عناية خاصة لكبار السن وما بعد العمليات"
      ],
      cta: "طلب زيارة منزلية الآن"
    },
    reviews: {
      title: "شهادات المرضى",
      subtitle: "ثقتكم هي سر نجاحنا.",
      items: [
        {
          id: "1",
          name: "anass elhadi",
          rating: 5,
          text: "Hamza is an excellent kiné therapist who is attentive, listens carefully, and helps you understand the source of your pain and the process to alleviate it.",
          date: "Il y a 1 an",
          avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjWkU0OQ466MTbpRLla7GUp_-PyXcTM4vP2KvuKTbqR3A4GkCunu=w45-h45-p-rp-mo-br100"
        },
        {
          id: "2",
          name: "Anass Chbani",
          rating: 5,
          text: "Une personne jeune, attentive, avec un bon sens de l'écoute et surtout humaine et compétente dans son domaine.",
          date: "Il y a 2 mois",
          avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocIPd_drm6wdDVmy-fok4sGa6SqEi5J2uKMryW8ghJFLQeq79g=w45-h45-p-rp-mo-br100"
        },
        {
          id: "3",
          name: "oumaima ouafik",
          rating: 5,
          text: "Merci pour la qualité des soins et les bons conseils, un kinésithérapeute au top !",
          date: "Il y a 2 semaines",
          avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocKtt9QSk4w4-n0KO4q6D3-ChmVk8idJhNzurELPdIWGDMmGeQ=w45-h45-p-rp-mo-br100"
        }
      ]
    },
    about: {
      title: "عن مركز شنيدر",
      content: [
        "مركز شنيدر للترويض الطبي هو وجهتكم الموثوقة في الدار البيضاء للعلاج الفيزيائي.",
        "نستقبلكم في عيادتنا بسباتة، كما نوفر خدمة الترويض المنزلي في مناطق الدار البيضاء: عين الشق، المعاريف، سيدي عثمان، الحي الحسني، سيدي معروف، أنفا والأحياء المجاورة.",
        "نحرص على حقوقكم في التعويض الطبي: نسلمكم الفواتير وورقة العلاج الخاصة بـ CNSS و CNOPS والتأمين."
      ],
      mission: "مهمتنا: شفاء سريع، راحة تامة، وتسهيل إجراءاتكم الإدارية."
    },
    contact: {
      title: "اتصل بنا",
      addressLabel: "العنوان",
      phoneLabel: "الهاتف والواتساب",
      hoursLabel: "أوقات العمل",
      address: ADDRESS,
      phone: PHONE_NUMBER,
      hours: "الإثنين - السبت : 09:00 - 19:00"
    },
    seo: {
      homeTitle: "مروض طبي الدار البيضاء | مركز شنيدر - بالعيادة أو المنزل (وثائق التعويض)",
      homeDesc: "مركز شنيدر للترويض الطبي بالدار البيضاء: مروض طبي كازا، سباتة، عين الشق، مروض قريب مني. الأسعار تبدأ من 200 درهم حسب الحالة.",
      servicesTitle: "خدمات الترويض الطبي: ترويض تنفسي، حجامة، وإصابات الملاعب",
      servicesDesc: "علاج متكامل: ترويض الرضع، تأهيل بعد الجلطة، إصابات الرياضيين، وحجامة طبية. خدمة منزلية بمناطق الدار البيضاء: عين الشق، سباتة، المعاريف، الحي الحسني...",
      conditionsTitle: "علاج الانزلاق الغضروفي، السياتيك والمفاصل | الدار البيضاء",
      conditionsDesc: "علاج ديسك الظهر، عرق النسا، شلل الوجه، والتهاب المفاصل. الأسعار تبدأ من 200 درهم حسب التقييم.",
      contactTitle: "رقم مروض طبي الدار البيضاء | 0665646754 - منزلي أو بالمركز",
      contactDesc: "للحجز اتصل بـ 0665646754. مروض طبي في الدار البيضاء (سباتة أو منزلي بمناطق عين الشق، المعاريف، سيدي عثمان، الحي الحسني)."
    }
  }
};