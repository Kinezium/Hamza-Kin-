import { ContentData } from './types';

export const PHONE_NUMBER = "0665646754";
export const WHATSAPP_NUMBER = "212665646754"; // Format for API
export const ADDRESS = "500 Boulevard Mecdad Laherizi, Sbata – Casablanca, Morocco";
export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.414193762785!2d-7.563617799999999!3d33.5426133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda633a36d6890ad%3A0xbc43853714712366!2zQ2VudHJlIGRlIGtpbsOpc2l0aMOpcmFwaWUgQ0hOSURFUiAtINin2YTYqtix2YjZiti2INin2YTYt9io2Yo!5e0!3m2!1sen!2sma!4v1770853502303!5m2!1sen!2sma"; 

export const CONTENT: Record<'fr' | 'ar', ContentData> = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      conditions: "Pathologies",
      homeTherapy: "À Domicile",
      about: "Le Centre",
      contact: "Contact",
      bookNow: "Prendre RDV",
    },
    hero: {
      title: "Centre Chnider de Kinésithérapie à Casablanca",
      subtitle: "Expertise en rééducation fonctionnelle, dos, sport et neurologie. Soins au cabinet (Sbata) et à domicile sur tout Casablanca. Agréé Mutuelles.",
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
      subtitle: "Une prise en charge complète pour soulager vos douleurs et traiter vos problèmes de santé.",
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
          description: "Déplacement sur tout Casablanca avec matériel complet.",
          iconName: "Home"
        }
      ]
    },
    homeTherapy: {
      title: "Kinésithérapie à Domicile Casablanca",
      description: "Profitez de soins professionnels chez vous. Nous couvrons toute la ville de Casablanca pour les patients ne pouvant pas se déplacer.",
      benefits: [
        "Zone d'intervention : Toute Casablanca",
        "Facture & Feuilles de soins (Remboursement Mutuelle)",
        "Matériel complet (Electro, Ultrasons, etc.)",
        "Gain de temps et confort absolu",
        "Suivi post-opératoire rigoureux"
      ],
      cta: "Réserver ma séance à domicile"
    },
    reviews: {
      title: "Avis de nos Patients",
      subtitle: "Votre santé et votre satisfaction sont notre priorité.",
      items: [
        { id: "1", name: "Hassan E.", rating: 5, text: "Excellent kiné. Il se déplace à domicile à Maarif, très ponctuel. Les factures sont bien faites pour la mutuelle.", date: "Il y a 1 semaine" },
        { id: "2", name: "Sara L.", rating: 5, text: "J'ai soigné ma hernie discale au centre Chnider. Équipe très compétente et à l'écoute.", date: "Il y a 3 semaines" },
        { id: "3", name: "Mohamed T.", rating: 5, text: "Très bon contact pour la rééducation de mon père après son AVC. Merci.", date: "Il y a 2 jours" }
      ]
    },
    about: {
      title: "À Propos du Centre Chnider",
      content: [
        "Le Centre Chnider de Kinésithérapie est votre référence à Casablanca pour la rééducation physique et le bien-être.",
        "Situé à Sbata, nous accueillons nos patients dans un cadre moderne, mais nous excellons également dans le service à domicile à travers toute la ville.",
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
      homeDesc: "Centre Chnider: Kinésithérapeute expert à Casablanca. Soins cabinet & domicile (Tout Casa). Facture & Mutuelle (CNSS/CNOPS). Dos, Sport, Neuro, Respiratoire.",
      servicesTitle: "Services Kiné Casablanca : Rééducation, Respiratoire, Sport & Hijama",
      servicesDesc: "Soins complets : Kiné respiratoire bébé, rééducation AVC, traumatologie sport, Hijama médicale. Déplacement à domicile sur tout Casablanca.",
      conditionsTitle: "Traitement Hernie Discale, Sciatique & Arthrose | Kiné Casablanca",
      conditionsDesc: "Spécialiste dos et articulations : Sciatique, hernie discale sans opération, paralysie faciale, entorses. Prenez rendez-vous au Centre Chnider.",
      contactTitle: "Contact Kiné Casablanca | Rdv Cabinet ou Domicile - 0665646754",
      contactDesc: "Appelez le 0665646754 pour un kiné à Casablanca. Cabinet à Sbata ou à domicile partout à Casa. Feuilles de soins et factures fournies."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      conditions: "الأمراض المعالجة",
      homeTherapy: "ترويض منزلي",
      about: "عن المركز",
      contact: "اتصل بنا",
      bookNow: "حجز موعد",
    },
    hero: {
      title: "مركز شنيدر للترويض الطبي والعلاج الفيزيائي بالدار البيضاء",
      subtitle: "خبراء في علاج آلام الظهر، المفاصل، وترويض الأطفال. خدماتنا متوفرة في العيادة (سباتة) وفي منزلكم بجميع أنحاء الدار البيضاء.",
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
      subtitle: "علاجات متخصصة لتخفيف الألم واستعادة الحركة لجميع الأعمار.",
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
          description: "نصل إليكم في أي حي بالدار البيضاء مع المعدات.",
          iconName: "Home"
        }
      ]
    },
    homeTherapy: {
      title: "مروض طبي في المنزل بالدار البيضاء",
      description: "خدمة الترويض الطبي المنزلي تغطي جميع أحياء الدار البيضاء. نأتي إليكم لتوفير عناء التنقل.",
      benefits: [
        "نغطي جميع مناطق الدار البيضاء",
        "توفير الفاتورة وملف التعاضدية (CNSS/CNOPS)",
        "معدات طبية متكاملة في منزلكم",
        "مواعيد مرنة تناسبكم",
        "عناية خاصة لكبار السن وما بعد العمليات"
      ],
      cta: "طلب زيارة منزلية الآن"
    },
    reviews: {
      title: "شهادات المرضى",
      subtitle: "ثقتكم هي سر نجاحنا.",
      items: [
        { id: "1", name: "حسن ع.", rating: 5, text: "مروض ممتاز. يأتي للمنزل في المعاريف في الوقت المحدد. الفواتير مقبولة لدى التعاضدية.", date: "منذ أسبوع" },
        { id: "2", name: "سارة ل.", rating: 5, text: "عالجات الانزلاق الغضروفي في مركز شنيدر بدون جراحة. شكراً للطاقم.", date: "منذ 3 أسابيع" },
        { id: "3", name: "محمد ت.", rating: 5, text: "تعامل راقي ومهنية عالية في ترويض الوالد بعد الجلطة.", date: "منذ يومين" }
      ]
    },
    about: {
      title: "عن مركز شنيدر",
      content: [
        "مركز شنيدر للترويض الطبي هو وجهتكم الموثوقة في الدار البيضاء للعلاج الفيزيائي.",
        "نستقبلكم في عيادتنا بسباتة، كما نوفر خدمة الترويض المنزلي المتنقلة في جميع أنحاء الدار البيضاء.",
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
      homeDesc: "مركز شنيدر للترويض الطبي بالدار البيضاء. علاج السياتيك، الظهر، وترويض الأطفال. خدمة منزلية في كل كازا. نقبل ملفات التعويض CNSS/CNOPS. اتصل 0665646754.",
      servicesTitle: "خدمات الترويض الطبي: ترويض تنفسي، حجامة، وإصابات الملاعب",
      servicesDesc: "علاج متكامل: ترويض الرضع، تأهيل بعد الجلطة، إصابات الرياضيين، وحجامة طبية. خدمة الترويض المنزلي بجميع أحياء الدار البيضاء.",
      conditionsTitle: "علاج الانزلاق الغضروفي، السياتيك والمفاصل | الدار البيضاء",
      conditionsDesc: "علاج ديسك الظهر، عرق النسا، شلل الوجه، والتهاب المفاصل. مركز شنيدر يضمن لكم العلاج والوثائق الإدارية (Mutuelle).",
      contactTitle: "رقم مروض طبي الدار البيضاء | 0665646754 - منزلي أو بالمركز",
      contactDesc: "للحجز اتصل بـ 0665646754. مروض طبي في الدار البيضاء (سباتة أو منزلي). نوفر الفاتورة وأوراق التعاضدية."
    }
  }
};