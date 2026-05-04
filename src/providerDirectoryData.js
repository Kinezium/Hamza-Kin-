const BASE_SITE_URL = 'https://kinesitherapie.clinaxis.ma';

const SPECIALTIES = [
  { slug: 'kinesitherapie', fr: 'Kinesitherapie', ar: 'الترويض الطبي' },
  { slug: 'orthophonie', fr: 'Orthophonie', ar: 'تقويم النطق' },
  { slug: 'medecin-generaliste', fr: 'Medecin generaliste', ar: 'الطب العام' },
  { slug: 'cardiologie', fr: 'Medecin cardiologue', ar: 'طب القلب' },
  { slug: 'dentisterie', fr: 'Dentiste', ar: 'طب الاسنان' },
  { slug: 'radiologie', fr: 'Radiologie', ar: 'الاشعة الطبية' },
  { slug: 'pharmacie', fr: 'Pharmacie', ar: 'الصيدلة' },
  { slug: 'laboratoire-analyses', fr: 'Laboratoire des analyses', ar: 'مختبر التحاليل' },
  { slug: 'psychomotricite', fr: 'Psychomotricite', ar: 'العلاج الحركي النفسي' },
  { slug: 'clinique', fr: 'Clinique', ar: 'المصحة' }
];

const CITIES = [
  {
    slug: 'casablanca',
    fr: 'Casablanca',
    ar: 'الدار البيضاء',
    districts: [
      { slug: 'sbata', fr: 'Sbata', ar: 'سباتة' },
      { slug: 'ain-chock', fr: 'Ain Chock', ar: 'عين الشق' },
      { slug: 'maarif', fr: 'Maarif', ar: 'المعاريف' },
      { slug: 'sidi-othmane', fr: 'Sidi Othmane', ar: 'سيدي عثمان' },
      { slug: 'hay-hassani', fr: 'Hay Hassani', ar: 'الحي الحسني' },
      { slug: 'anfa', fr: 'Anfa', ar: 'انفا' },
      { slug: 'oasis', fr: 'Oasis', ar: 'الوازيس' },
      { slug: 'californie', fr: 'Californie', ar: 'كاليفورنيا' }
    ]
  },
  {
    slug: 'tanger',
    fr: 'Tanger',
    ar: 'طنجة',
    districts: [
      { slug: 'mesnana', fr: 'Mesnana', ar: 'مسنانة' },
      { slug: 'malabata', fr: 'Malabata', ar: 'مالاباطا' },
      { slug: 'bellavista', fr: 'Bellavista', ar: 'بيلفيستا' },
      { slug: 'iberia', fr: 'Iberia', ar: 'ايبيريا' },
      { slug: 'bir-chifa', fr: 'Bir Chifa', ar: 'بير الشفا' },
      { slug: 'centre-ville', fr: 'Centre-ville', ar: 'وسط المدينة' }
    ]
  },
  {
    slug: 'marrakech',
    fr: 'Marrakech',
    ar: 'مراكش',
    districts: [
      { slug: 'gueliz', fr: 'Gueliz', ar: 'كيليز' },
      { slug: 'hivernage', fr: 'Hivernage', ar: 'الحي الشتوي' },
      { slug: 'sidi-youssef', fr: 'Sidi Youssef', ar: 'سيدي يوسف' },
      { slug: 'massira', fr: 'Massira', ar: 'المسيرة' },
      { slug: 'daoudiate', fr: 'Daoudiate', ar: 'الداوديات' }
    ]
  },
  {
    slug: 'agadir',
    fr: 'Agadir',
    ar: 'اكادير',
    districts: [
      { slug: 'hay-mohammadi', fr: 'Hay Mohammadi', ar: 'الحي المحمدي' },
      { slug: 'tilila', fr: 'Tilila', ar: 'تيليلا' },
      { slug: 'founty', fr: 'Founty', ar: 'فونتي' },
      { slug: 'dakhla', fr: 'Dakhla', ar: 'الداخلة' },
      { slug: 'centre-ville', fr: 'Centre-ville', ar: 'وسط المدينة' }
    ]
  },
  {
    slug: 'rabat',
    fr: 'Rabat',
    ar: 'الرباط',
    districts: [
      { slug: 'agdal', fr: 'Agdal', ar: 'اكدال' },
      { slug: 'bab-el-had', fr: 'Bab El Had', ar: 'باب الحد' },
      { slug: 'hay-riad', fr: 'Hay Riad', ar: 'حي الرياض' },
      { slug: 'yacoub-el-mansour', fr: 'Yacoub El Mansour', ar: 'يعقوب المنصور' },
      { slug: 'ocean', fr: 'Ocean', ar: 'المحيط' },
      { slug: 'hassan', fr: 'Hassan', ar: 'حسان' }
    ]
  },
  {
    slug: 'sale',
    fr: 'Sale',
    ar: 'سلا',
    districts: [
      { slug: 'tabriquet', fr: 'Tabriquet', ar: 'تابريكت' },
      { slug: 'hay-salam', fr: 'Hay Salam', ar: 'حي السلام' },
      { slug: 'bettana', fr: 'Bettana', ar: 'بطانة' },
      { slug: 'sidi-moussa', fr: 'Sidi Moussa', ar: 'سيدي موسى' },
      { slug: 'hay-rahma', fr: 'Hay Rahma', ar: 'حي الرحمة' }
    ]
  },
  {
    slug: 'fes',
    fr: 'Fes',
    ar: 'فاس',
    districts: [
      { slug: 'ville-nouvelle', fr: 'Ville Nouvelle', ar: 'المدينة الجديدة' },
      { slug: 'saiss', fr: 'Saiss', ar: 'سايس' },
      { slug: 'ben-souda', fr: 'Ben Souda', ar: 'بن سودة' },
      { slug: 'narjiss', fr: 'Narjiss', ar: 'النرجس' }
    ]
  },
  {
    slug: 'meknes',
    fr: 'Meknes',
    ar: 'مكناس',
    districts: [
      { slug: 'hamria', fr: 'Hamria', ar: 'حمرية' },
      { slug: 'bassatine', fr: 'Bassatine', ar: 'البساتين' },
      { slug: 'zitoune', fr: 'Zitoune', ar: 'الزيتون' },
      { slug: 'al-ismailia', fr: 'Al Ismailia', ar: 'الاسماعيلية' }
    ]
  },
  {
    slug: 'oujda',
    fr: 'Oujda',
    ar: 'وجدة',
    districts: [
      { slug: 'hay-qods', fr: 'Hay Qods', ar: 'حي القدس' },
      { slug: 'al-andalous', fr: 'Al Andalous', ar: 'الاندلس' },
      { slug: 'sidi-yahya', fr: 'Sidi Yahya', ar: 'سيدي يحيى' },
      { slug: 'les-angad', fr: 'Les Angad', ar: 'الانجاد' }
    ]
  },
  {
    slug: 'kenitra',
    fr: 'Kenitra',
    ar: 'القنيطرة',
    districts: [
      { slug: 'maamora', fr: 'Maamora', ar: 'المعمورة' },
      { slug: 'mimosas', fr: 'Mimosas', ar: 'الميموزا' },
      { slug: 'bir-rami', fr: 'Bir Rami', ar: 'بير الرامي' },
      { slug: 'val-fleuri', fr: 'Val Fleuri', ar: 'فال فلوري' }
    ]
  },
  {
    slug: 'temara',
    fr: 'Temara',
    ar: 'تمارة',
    districts: [
      { slug: 'wifaq', fr: 'Wifaq', ar: 'الوفاق' },
      { slug: 'harhoura', fr: 'Harhoura', ar: 'هرهورة' },
      { slug: 'massira', fr: 'Massira', ar: 'المسيرة' },
      { slug: 'skhirat', fr: 'Skhirat', ar: 'الصخيرات' }
    ]
  },
  {
    slug: 'el-jadida',
    fr: 'El Jadida',
    ar: 'الجديدة',
    districts: [
      { slug: 'hay-salam', fr: 'Hay Salam', ar: 'حي السلام' },
      { slug: 'plateau', fr: 'Plateau', ar: 'البلاتو' },
      { slug: 'sidi-bouzid', fr: 'Sidi Bouzid', ar: 'سيدي بوزيد' },
      { slug: 'centre-ville', fr: 'Centre-ville', ar: 'وسط المدينة' }
    ]
  },
  {
    slug: 'tetouan',
    fr: 'Tetouan',
    ar: 'تطوان',
    districts: [
      { slug: 'wilaya', fr: 'Wilaya', ar: 'الولاية' },
      { slug: 'martil', fr: 'Martil', ar: 'مرتيل' },
      { slug: 'ensa', fr: 'Ensa', ar: 'انسا' },
      { slug: 'saniat-rmel', fr: 'Saniat Rmel', ar: 'سانية الرمل' }
    ]
  },
  {
    slug: 'mohammedia',
    fr: 'Mohammedia',
    ar: 'المحمدية',
    districts: [
      { slug: 'parc', fr: 'Parc', ar: 'البارك' },
      { slug: 'beausite', fr: 'Beausite', ar: 'بوزيت' },
      { slug: 'wafa', fr: 'Wafa', ar: 'الوفاء' },
      { slug: 'al-alia', fr: 'Al Alia', ar: 'العالية' }
    ]
  }
];

const DIRECTORY_WHATSAPP = '212665646754';

const baseGallery = (seed) => [
  `https://picsum.photos/seed/${seed}-1/900/600`,
  `https://picsum.photos/seed/${seed}-2/900/600`,
  `https://picsum.photos/seed/${seed}-3/900/600`,
  `https://picsum.photos/seed/${seed}-4/900/600`,
  `https://picsum.photos/seed/${seed}-5/900/600`,
  `https://picsum.photos/seed/${seed}-6/900/600`
];

const memo = {
  profiles: null,
  routes: null
};

const makeCityAddress = (cityFr, districtFr) => `${districtFr}, ${cityFr}, Maroc`;

const makeProfile = ({
  slug,
  nameFr,
  nameAr,
  specialty,
  city,
  district,
  type,
  rank,
  isCityProfile,
  logo,
  mapUrl,
  phone,
  email,
  isVerified
}) => {
  const serviceBaseFr = [
    `${specialty.fr} personnalisee`,
    'Prise en charge adulte et enfant',
    'Bilan initial et suivi',
    'Protocoles modernes',
    'Conseils prevention et ergonomie',
    'Coordination avec medecins et specialistes'
  ];
  const serviceBaseAr = [
    `${specialty.ar} مخصص`,
    'تكفل للبالغين والاطفال',
    'تقييم اولي ومتابعة',
    'بروتوكولات علاج حديثة',
    'نصائح للوقاية',
    'تنسيق مع الاطباء'
  ];

  const scopeFr = type === 'home'
    ? `Praticien(ne) a domicile sur ${city.fr}${district ? ` (${district.fr})` : ''}`
    : `${specialty.fr} en centre a ${city.fr}${district ? ` - ${district.fr}` : ''}`;
  const scopeAr = type === 'home'
    ? `ممارس(ة) منزلي(ة) في ${city.ar}${district ? ` (${district.ar})` : ''}`
    : `${specialty.ar} داخل المركز في ${city.ar}${district ? ` - ${district.ar}` : ''}`;

  const districtLabelFr = district?.fr || city.fr;
  const districtLabelAr = district?.ar || city.ar;
  const seed = `${specialty.slug}-${city.slug}-${district?.slug || 'city'}-${rank}-${type}`;

  return {
    slug,
    nameFr,
    nameAr,
    specialtySlug: specialty.slug,
    citySlug: city.slug,
    districtSlug: district?.slug || 'ville',
    type,
    rank,
    isCityProfile,
    isVerified,
    logo,
    phone,
    email,
    hoursFr: 'Lundi - Samedi, 08:30 - 20:00',
    hoursAr: 'الاثنين - السبت، 08:30 - 20:00',
    servicesFr: serviceBaseFr,
    servicesAr: serviceBaseAr,
    descriptionFr: `${scopeFr}. Equipe professionnelle, protocoles evidence-based, suivi continu et disponibilite rapide.`,
    descriptionAr: `${scopeAr}. فريق مهني، بروتوكولات حديثة، متابعة مستمرة ومواعيد سريعة.`,
    addressFr: makeCityAddress(city.fr, districtLabelFr),
    addressAr: `${districtLabelAr}، ${city.ar}، المغرب`,
    mapUrl: mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${districtLabelFr} ${city.fr}`)}`,
    gallery: baseGallery(seed)
  };
};

const buildSyntheticProfiles = () => {
  const output = [];

  for (const specialty of SPECIALTIES) {
    for (const city of CITIES) {
      output.push(
        makeProfile({
          slug: `${specialty.slug}-${city.slug}-ville-principal`,
          nameFr: `${specialty.fr} ${city.fr} Centre principal`,
          nameAr: `${specialty.ar} ${city.ar} المركز الرئيسي`,
          specialty,
          city,
          type: 'center',
          rank: 0,
          isCityProfile: true,
          logo: `https://picsum.photos/seed/logo-${specialty.slug}-${city.slug}/200/200`,
          phone: '+212661000100',
          email: `${specialty.slug}.${city.slug}@clinaxis.ma`,
          isVerified: true
        })
      );

      output.push(
        makeProfile({
          slug: `${specialty.slug}-${city.slug}-domicile`,
          nameFr: `${specialty.fr} a domicile ${city.fr}`,
          nameAr: `${specialty.ar} منزلي ${city.ar}`,
          specialty,
          city,
          type: 'home',
          rank: 0,
          isCityProfile: true,
          logo: `https://picsum.photos/seed/home-${specialty.slug}-${city.slug}/200/200`,
          phone: '+212662000200',
          email: `domicile.${specialty.slug}.${city.slug}@clinaxis.ma`,
          isVerified: true
        })
      );

      for (const district of city.districts) {
        output.push(
          makeProfile({
            slug: `${specialty.slug}-${city.slug}-${district.slug}-centre-1`,
            nameFr: `${specialty.fr} ${district.fr} ${city.fr} - Centre 1`,
            nameAr: `${specialty.ar} ${district.ar} ${city.ar} - مركز 1`,
            specialty,
            city,
            district,
            type: 'center',
            rank: 1,
            logo: `https://picsum.photos/seed/logo-${specialty.slug}-${city.slug}-${district.slug}-1/200/200`,
            phone: '+212663000300',
            email: `${specialty.slug}.${city.slug}.${district.slug}.1@clinaxis.ma`,
            isVerified: true
          })
        );

        output.push(
          makeProfile({
            slug: `${specialty.slug}-${city.slug}-${district.slug}-centre-2`,
            nameFr: `${specialty.fr} ${district.fr} ${city.fr} - Centre 2`,
            nameAr: `${specialty.ar} ${district.ar} ${city.ar} - مركز 2`,
            specialty,
            city,
            district,
            type: 'center',
            rank: 2,
            logo: `https://picsum.photos/seed/logo-${specialty.slug}-${city.slug}-${district.slug}-2/200/200`,
            phone: '+212664000400',
            email: `${specialty.slug}.${city.slug}.${district.slug}.2@clinaxis.ma`,
            isVerified: false
          })
        );
      }
    }
  }

  const applyProfileOverride = (matcher, patch) => {
    const index = output.findIndex(matcher);
    if (index >= 0) {
      output[index] = { ...output[index], ...patch };
    }
  };

  applyProfileOverride(
    (profile) => profile.specialtySlug === 'kinesitherapie' && profile.citySlug === 'casablanca' && profile.districtSlug === 'sbata' && profile.rank === 1,
    {
      slug: 'centre-chnider',
      nameFr: 'Centre CHNIDER kinesitherapie et reeducation',
      nameAr: 'مركز شنيدر للترويض الطبي واعادة التأهيل',
      logo: 'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
      phone: '+212665646754',
      email: 'contact@clinaxis.ma',
      hoursFr: 'Lundi - Samedi, 09:00 - 20:30',
      hoursAr: 'الاثنين - السبت، 09:00 - 20:30',
      descriptionFr: 'Centre CHNIDER a Sbata Casablanca: kinesitherapie, reeducation fonctionnelle, traumatologie sportive, neurologie et prise en charge a domicile.',
      descriptionAr: 'مركز شنيدر بسباتة الدار البيضاء: ترويض طبي، اعادة تأهيل وظيفي، اصابات رياضية، تأهيل عصبي وتكفل منزلي.',
      mapUrl: 'https://maps.app.goo.gl/MTi8wQgeS6RbSAsx8',
      gallery: [
        'https://blogger.googleusercontent.com/img/a/AVvXsEgSufeTLTl6_zAaJynHbKie0wfFljxZBl90XVrfzh76FwzJCj7fLlg9X3D9HIsxgxtrCuj4clin3Ull2KUzXPWEiK6wOmxQ9-wpoPlhcSXgEOcTRhWYAftBDgAy_h5aoElSlvZU9zhI0wQWXcij2dOZxo5bnfXIIBIgVuuR-mjo7PBgbqy8thtlK3it',
        'https://blogger.googleusercontent.com/img/a/AVvXsEg7SfAbKvPprPkWKtIASqJ7jkzTIS4fEGPTNWZhTd_OFxe14xxH-XyjA-iwYjK_6Qx5vYtdW1EF7Z_BPvbmMEvFA6MJhZdkguNbbqeJZP5gAcqKaszQAIhheHZuJ_5DGL21fx2C4Xn-QDywnM6_H5FM1kHBt-s0E1TEKUYnL3xlQroT8mxz1I2YXMrF',
        'https://blogger.googleusercontent.com/img/a/AVvXsEgPpgnG8yWOLLpQ_YltbQjM6nuv3OcIRtxwl3KCf43F37Be2mYy3YtVddmnKWGS0VZ_5FwB2zhz2s8DevbEq_06S0HcQweW3nsmc4l1M1W3rOZfnAUWzUODt5aSwFYqqEIsun5_BWB4DR_dU7wOku3fk-8bRYnakekIqpk8jS_hqJRz5wsrq_Ro9hKn',
        'https://blogger.googleusercontent.com/img/a/AVvXsEiiOaAMnYdBDfw0riF-Zn7jkkp7_4dkSiAVy2x5oSePlVcH6ptw0XK5Z8C0JZHa_XIW-rtbve5oGtNrqmGM_gAbdnTYvzsgYDDwT8avZ5-98Dky1djCGEUMhgmoB8_xaS43W8X22IkwwOymaRoqJ-_cvU2XLFEnbUQ9pujMwUBiNSzejHijYx_Cm4eY',
        'https://picsum.photos/seed/chnider-5/900/600',
        'https://picsum.photos/seed/chnider-6/900/600'
      ],
      isVerified: true
    }
  );

  applyProfileOverride(
    (profile) => profile.specialtySlug === 'kinesitherapie' && profile.citySlug === 'tanger' && profile.districtSlug === 'mesnana' && profile.rank === 1,
    { nameFr: 'Centre X kinesitherapie Mesnana Tanger', nameAr: 'مركز X للترويض الطبي مسنانة طنجة' }
  );

  applyProfileOverride(
    (profile) => profile.specialtySlug === 'kinesitherapie' && profile.citySlug === 'tanger' && profile.districtSlug === 'malabata' && profile.rank === 1,
    { nameFr: 'Centre Y kinesitherapie Malabata Tanger', nameAr: 'مركز Y للترويض الطبي مالاباطا طنجة' }
  );

  applyProfileOverride(
    (profile) => profile.specialtySlug === 'kinesitherapie' && profile.citySlug === 'tanger' && profile.districtSlug === 'bellavista' && profile.rank === 1,
    { nameFr: 'Centre 4 kinesitherapie Bellavista Tanger', nameAr: 'مركز 4 للترويض الطبي بيلفيستا طنجة' }
  );

  applyProfileOverride(
    (profile) => profile.specialtySlug === 'cardiologie' && profile.citySlug === 'rabat' && profile.districtSlug === 'agdal' && profile.rank === 1,
    { nameFr: 'Cabinet Dr Bennani Cardiologue', nameAr: 'عيادة الدكتور بناني للقلب' }
  );

  applyProfileOverride(
    (profile) => profile.specialtySlug === 'cardiologie' && profile.citySlug === 'rabat' && profile.districtSlug === 'bab-el-had' && profile.rank === 1,
    { nameFr: 'Cabinet Dr Chraibi Cardiologue', nameAr: 'عيادة الدكتور الشعيبي للقلب' }
  );

  return output;
};

export const getDirectorySpecialties = () => SPECIALTIES;
export const getDirectoryCities = () => CITIES;
export const getDirectoryWhatsapp = () => DIRECTORY_WHATSAPP;

export const normalizeSpecialtySlug = (input) => {
  const source = String(input || '').trim().toLowerCase();
  if (!source) return '';

  const aliases = {
    kine: 'kinesitherapie',
    kinesitherapeute: 'kinesitherapie',
    kinesitherapie: 'kinesitherapie',
    orthophoniste: 'orthophonie',
    medecin: 'medecin-generaliste',
    generaliste: 'medecin-generaliste',
    cardiologue: 'cardiologie',
    labo: 'laboratoire-analyses',
    laboratoire: 'laboratoire-analyses',
    pharmacie: 'pharmacie',
    pharmacien: 'pharmacie',
    dentiste: 'dentisterie',
    clinique: 'clinique',
    psychomot: 'psychomotricite',
    psychomotricite: 'psychomotricite',
    radiologue: 'radiologie'
  };

  if (aliases[source]) return aliases[source];
  return source;
};

export const getDirectoryProfiles = () => {
  if (!memo.profiles) {
    memo.profiles = buildSyntheticProfiles();
  }
  return memo.profiles;
};

export const getSpecialtyBySlug = (slug) => SPECIALTIES.find((item) => item.slug === normalizeSpecialtySlug(slug)) || null;

export const getCityBySlug = (slug) => CITIES.find((item) => item.slug === String(slug || '').trim().toLowerCase()) || null;

export const getDistrictBySlug = (citySlug, districtSlug) => {
  const city = getCityBySlug(citySlug);
  if (!city) return null;
  return city.districts.find((item) => item.slug === String(districtSlug || '').trim().toLowerCase()) || null;
};

export const findProfile = ({ specialtySlug, citySlug, districtSlug, profileSlug }) =>
  getDirectoryProfiles().find((profile) =>
    profile.specialtySlug === normalizeSpecialtySlug(specialtySlug) &&
    profile.citySlug === String(citySlug || '').trim().toLowerCase() &&
    profile.districtSlug === String(districtSlug || '').trim().toLowerCase() &&
    profile.slug === profileSlug
  ) || null;

export const filterProfiles = ({ specialtySlug, citySlug, districtSlug, type }) =>
  getDirectoryProfiles().filter((profile) => {
    if (specialtySlug && profile.specialtySlug !== normalizeSpecialtySlug(specialtySlug)) return false;
    if (citySlug && profile.citySlug !== String(citySlug).trim().toLowerCase()) return false;
    if (districtSlug && profile.districtSlug !== String(districtSlug).trim().toLowerCase()) return false;
    if (type && profile.type !== type) return false;
    return true;
  });

export const getDirectoryStaticRoutes = () => {
  if (memo.routes) {
    return memo.routes;
  }

  const routes = new Set();
  routes.add('annuaire');
  routes.add('ar/annuaire');
  routes.add('espace-praticien');
  routes.add('ar/espace-praticien');

  for (const specialty of SPECIALTIES) {
    routes.add(`annuaire/${specialty.slug}`);
    routes.add(`ar/annuaire/${specialty.slug}`);

    for (const city of CITIES) {
      routes.add(`annuaire/${specialty.slug}/${city.slug}`);
      routes.add(`ar/annuaire/${specialty.slug}/${city.slug}`);

      for (const district of city.districts) {
        routes.add(`annuaire/${specialty.slug}/${city.slug}/${district.slug}`);
        routes.add(`ar/annuaire/${specialty.slug}/${city.slug}/${district.slug}`);
      }
    }
  }

  for (const profile of getDirectoryProfiles()) {
    if (!profile.specialtySlug || !profile.citySlug || !profile.districtSlug || !profile.slug) continue;
    routes.add(`annuaire/${profile.specialtySlug}/${profile.citySlug}/${profile.districtSlug}/${profile.slug}`);
    routes.add(`ar/annuaire/${profile.specialtySlug}/${profile.citySlug}/${profile.districtSlug}/${profile.slug}`);
  }

  memo.routes = Array.from(routes);
  return memo.routes;
};

export const getDirectoryPublicUrls = () =>
  getDirectoryStaticRoutes().map((route) => `${BASE_SITE_URL}/${route}`);
