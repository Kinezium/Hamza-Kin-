import { Language } from '../../types';

export interface ArticleLink {
  slug: string;
  keywordsFr: string[];
  keywordsAr: string[];
  titleFr: string;
  titleAr: string;
}

export const ARTICLE_LINKS: ArticleLink[] = [
  {
    slug: 'padel-blessures-prevention-casablanca', titleFr: 'Prévenir les blessures au padel à Casablanca', titleAr: 'الوقاية من إصابات البادل في الدار البيضاء',
    keywordsFr: ['blessure au padel', 'padel à Casablanca', 'douleur au coude au padel'], keywordsAr: ['إصابات البادل', 'البادل في الدار البيضاء', 'ألم المرفق في البادل']
  },
  {
    slug: 'diabete-activite-physique-pieds-maroc', titleFr: 'Diabète et activité physique au Maroc', titleAr: 'السكري والنشاط البدني في المغرب',
    keywordsFr: ['activité physique et diabète', 'marcher avec un diabète', 'pied diabétique'], keywordsAr: ['النشاط البدني والسكري', 'المشي مع السكري', 'القدم السكري']
  },
  {
    slug: 'avc-orthophonie-soins-domicile-casablanca', titleFr: 'Orthophonie et soins après un AVC à domicile', titleAr: 'تقويم النطق والرعاية بعد السكتة في المنزل',
    keywordsFr: ['orthophonie après un AVC', 'troubles de la déglutition après un AVC', 'soins à domicile après un AVC'], keywordsAr: ['تقويم النطق بعد السكتة', 'صعوبة البلع بعد السكتة', 'الرعاية المنزلية بعد السكتة']
  },
  {
    slug: 'intelligence-artificielle-reeducation-kinesitherapie', titleFr: 'IA et kinésithérapie', titleAr: 'الذكاء الاصطناعي والترويض الطبي',
    keywordsFr: ['intelligence artificielle', 'IA en rééducation', 'santé numérique'], keywordsAr: ['الذكاء الاصطناعي', 'الصحة الرقمية', 'التأهيل الرقمي']
  },
  {
    slug: 'telereeducation-kinesitherapie-maroc', titleFr: 'Télérééducation au Maroc', titleAr: 'التأهيل عن بعد في المغرب',
    keywordsFr: ['télérééducation', 'kinésithérapie en ligne', 'télésuivi'], keywordsAr: ['التأهيل عن بعد', 'العلاج عن بعد', 'الترويض عبر الإنترنت']
  },
  {
    slug: 'exosquelette-robotique-reeducation-avc', titleFr: 'Exosquelettes après AVC', titleAr: 'الهياكل الخارجية بعد السكتة',
    keywordsFr: ['exosquelette', 'robotique', 'robot'], keywordsAr: ['هيكل خارجي', 'الروبوتات', 'روبوتات التأهيل']
  },
  {
    slug: 'douleur-chronique-neurosciences-kinesitherapie', titleFr: 'Douleur chronique et kiné', titleAr: 'الألم المزمن والترويض',
    keywordsFr: ['douleur chronique', 'sensibilisation centrale', 'exercice thérapeutique'], keywordsAr: ['الألم المزمن', 'التحسس المركزي', 'التمارين العلاجية']
  },
  {
    slug: 'covid-longue-reeducation-kinesitherapie', titleFr: 'Covid long et rééducation', titleAr: 'كوفيد طويل الأمد والتأهيل',
    keywordsFr: ['Covid long', 'pacing', 'rééducation respiratoire'], keywordsAr: ['كوفيد طويل الأمد', 'التنفس', 'التعب بعد الجهد']
  },
  {
    slug: 'plancher-pelvien-postpartum-kinesitherapie-maroc', titleFr: 'Rééducation périnéale', titleAr: 'تأهيل قاع الحوض',
    keywordsFr: ['plancher pelvien', 'rééducation périnéale', 'post-partum'], keywordsAr: ['قاع الحوض', 'تأهيل الحوض', 'بعد الولادة']
  },
  {
    slug: 'parkinson-exercice-reeducation-neurologique', titleFr: 'Parkinson et exercice', titleAr: 'باركنسون والتمارين',
    keywordsFr: ['Parkinson', 'grands mouvements', 'blocages'], keywordsAr: ['باركنسون', 'التجمد', 'الحركات الواسعة']
  },
  {
    slug: 'prevention-chutes-seniors-kinesitherapie-maroc', titleFr: 'Prévention des chutes', titleAr: 'الوقاية من السقوط',
    keywordsFr: ['prévention des chutes', 'risque de chute', 'kiné gériatrique'], keywordsAr: ['الوقاية من السقوط', 'خطر السقوط', 'الترويض لكبار السن']
  },
  {
    slug: 'parcours-academique-kinesitherapeute-public-maroc', titleFr: 'Parcours public du kiné au Maroc', titleAr: 'المسار العمومي للمعالج في المغرب',
    keywordsFr: ['parcours public', 'études kinésithérapie au Maroc', 'formation public'], keywordsAr: ['المسار العمومي', 'دراسة الترويض بالمغرب', 'التكوين العمومي']
  },
  {
    slug: 'parcours-academique-kinesitherapeute-prive-maroc', titleFr: 'Parcours privé du kiné au Maroc', titleAr: 'المسار الخاص للمعالج في المغرب',
    keywordsFr: ['formation privée', 'école de kinésithérapie', 'stages kiné'], keywordsAr: ['التكوين الخاص', 'مدرسة الترويض', 'تداريب الترويض']
  },
  {
    slug: 'sciatique-hernie-discale',
    titleFr: 'La Sciatique & Hernie Discale',
    titleAr: 'عرق النسا والانزلاق الغضروفي',
    keywordsFr: ['sciatique', 'hernie discale', 'hernie', 'nerf sciatique', 'douleur sciatique', 'hernie intervertébrale'],
    keywordsAr: ['عرق النسا', 'الانزلاق الغضروفي', 'انزلاق', 'النسا', 'الفتق']
  },
  {
    slug: 'lombalgie-cervicalgie',
    titleFr: 'Lombalgie & Cervicalgie',
    titleAr: 'آلام الظهر والرقبة',
    keywordsFr: ['lombalgie', 'cervicalgie', 'mal de dos', 'douleur cervicale', 'douleur au dos', 'douleur lombaire'],
    keywordsAr: ['آلام الظهر', 'آلام الرقبة', 'الألم القطني', 'الألم العنقي', 'وجع الظهر']
  },
  {
    slug: 'traumatologie-sport',
    titleFr: 'Traumatologie du Sport',
    titleAr: 'الإصابات الرياضية',
    keywordsFr: ['traumatologie', 'blessure sportive', 'entorse', 'blessures', 'trauma', 'sports'],
    keywordsAr: ['الإصابات الرياضية', 'إصابة رياضية', 'الرياضة', 'الإصابة']
  },
  {
    slug: 'arthrose-genou',
    titleFr: 'Arthrose du Genou',
    titleAr: 'خشونة الركبة',
    keywordsFr: ['arthrose', 'arthrose du genou', 'genou', 'arthralgies du genou', 'arthrite', 'articulation du genou'],
    keywordsAr: ['خشونة الركبة', 'خشونة', 'الركبة', 'التهاب المفاصل', 'هشاشة']
  },
  {
    slug: 'douleurs-epaules-capsulite',
    titleFr: 'Douleurs aux Épaules',
    titleAr: 'ألم الكتفين',
    keywordsFr: ['epaule', 'capsulite', 'douleur épaule', 'shoulder', 'tendinite', 'douleur du cou', 'épaule douloureuse'],
    keywordsAr: ['الكتف', 'آلام الأكتاف', 'تجمد الكتف', 'capsulite', 'الألم العضلي']
  },
  {
    slug: 'migraines-cephalees',
    titleFr: 'Migraines & Céphalées',
    titleAr: 'الصداع والشقيقة',
    keywordsFr: ['migraine', 'céphalée', 'headache', 'mal de tête', 'migraine tension', 'cephalée'],
    keywordsAr: ['الصداع', 'الشقيقة', 'الصداع النصفي', 'الصداع التوتري', 'الصداع المستمر']
  },
  {
    slug: 'kine-pediatrique',
    titleFr: 'Physiothérapie Pédiatrique',
    titleAr: 'الترويض الطبي للأطفال',
    keywordsFr: ['pédiatrique', 'enfant', 'physiothérapie pédiatrique', 'rééducation pédiatrique', 'pediatrie'],
    keywordsAr: ['الترويض الطبي للأطفال', 'الأطفال', 'طب الأطفال', 'الرياضة للأطفال']
  },
  {
    slug: 'readaptation-post-avc',
    titleFr: 'Réadaptation Post-AVC',
    titleAr: 'إعادة التأهيل ما بعد الجلطة',
    keywordsFr: ['AVC', 'accident vasculaire', 'post-AVC', 'réadaptation', 'rééducation AVC', 'après AVC'],
    keywordsAr: ['السكتة الدماغية', 'AVC', 'إعادة التأهيل', 'بعد الجلطة', 'الجلطة الدماغية']
  },
  {
    slug: 'posture-ergonomie',
    titleFr: 'Posture & Ergonomie',
    titleAr: 'الوضعية والإرغونوميا',
    keywordsFr: ['posture', 'ergonomie', 'ergonomique', 'position', 'bonne posture', 'postural'],
    keywordsAr: ['الوضعية', 'الإرغونوميا', 'الوضع', 'الجلسة الصحيحة', 'الموضع']
  },
  {
    slug: 'recuperation-sportive-prevention-blessures',
    titleFr: 'Récupération Sportive',
    titleAr: 'الاستشفاء الرياضي',
    keywordsFr: ['récupération sportive', 'récupération', 'prévention blessures', 'prévention', 'prevention'],
    keywordsAr: ['الاستشفاء الرياضي', 'الوقاية من الإصابات', 'استعادة اللياقة', 'الرياضة']
  },
  {
    slug: 'avc-signes-alerte-reeducation-precoce',
    titleFr: 'AVC: Signes et Rééducation',
    titleAr: 'السكتة الدماغية: العلامات والتأهيل',
    keywordsFr: ['AVC', 'signes AVC', 'signes d alerte', 'rééducation précoce', 'urgence AVC', 'signes alerte'],
    keywordsAr: ['السكتة الدماغية', 'علامات الجلطة', 'العلامات التحذيرية', 'التأهيل المبكر']
  },
  {
    slug: 'entorse-cheville-kinesitherapie',
    titleFr: 'Entorse de Cheville',
    titleAr: 'التواء الكاحل',
    keywordsFr: ['entorse', 'entorse cheville', 'cheville', 'foulure', 'sprain', 'ankle'],
    keywordsAr: ['التواء', 'التواء الكاحل', 'الكاحل', 'الالتواء', 'الرغوية']
  },
  {
    slug: 'rupture-ligament-croise-anterieur-reeducation',
    titleFr: 'Rupture du Ligament Croisé',
    titleAr: 'تمزق الرباط الصليبي',
    keywordsFr: ['LCA', 'ligament croisé', 'rupture LCA', 'ligament', 'chirurgie LCA', 'rompture ligament'],
    keywordsAr: ['الرباط الصليبي', 'تمزق الرباط', 'جراحة الرباط', 'LCA']
  },
  {
    slug: 'fracture-tibia-reeducation-marche',
    titleFr: 'Fracture du Tibia',
    titleAr: 'كسر عظم الساق',
    keywordsFr: ['fracture tibia', 'tibia', 'fracture', 'reprise marche', 'os de la jambe', 'marche'],
    keywordsAr: ['كسر الساق', 'كسر عظمي', 'كسر عظم الساق', 'استعادة المشي']
  },
  {
    slug: 'reeducation-geriatrique-importance-kine',
    titleFr: 'Rééducation Gériatrique',
    titleAr: 'إعادة التأهيل لكبار السن',
    keywordsFr: ['gériatrique', 'senior', 'personne âgée', 'personnes agées', 'rééducation gériatrique', 'elderly'],
    keywordsAr: ['كبار السن', 'الرعاية الصحية للمسنين', 'إعادة التأهيل', 'المسنون']
  },
  {
    slug: 'activite-physique-adaptee-seniors',
    titleFr: 'Activité Physique Seniors',
    titleAr: 'النشاط البدني لكبار السن',
    keywordsFr: ['activité physique', 'seniors', 'exercice senior', 'activité adaptée', 'personnes agées', 'exercice'],
    keywordsAr: ['النشاط البدني', 'التمارين', 'كبار السن', 'النشاط المقترح', 'التمرينات']
  },
  {
    slug: 'sclerose-en-plaque-kinesitherapie',
    titleFr: 'Sclérose en Plaque et Kiné',
    titleAr: 'التصلب المتعدد',
    keywordsFr: ['SEP', 'sclérose en plaques', 'sclerose multiple', 'MS', 'multiple sclerosis', 'sclerosis'],
    keywordsAr: ['التصلب المتعدد', 'SEP', 'MS', 'مرض عصبي']
  },
  {
    slug: 'mal-de-dos-bons-gestes-a-eviter',
    titleFr: 'Mal de Dos: Bons Gestes',
    titleAr: 'آلام الظهر: النصائح',
    keywordsFr: ['mal de dos', 'dos', 'bons gestes', 'gestes à éviter', 'position correcte', 'maux de dos'],
    keywordsAr: ['آلام الظهر', 'الظهر', 'النصائح', 'الأخطاء الشائعة']
  },
  {
    slug: 'cervicalgie-bons-gestes-posture',
    titleFr: 'Cervicalgie: Posture',
    titleAr: 'ألم الرقبة: النصائح',
    keywordsFr: ['cervicalgie', 'cervicale', 'cou', 'douleur cervicale', 'neck pain', 'posture cervicale', 'cervicales'],
    keywordsAr: ['ألم الرقبة', 'الرقبة', 'الألم العنقي', 'وضعية الرقبة']
  },
  {
    slug: 'surpoids-douleurs-genou',
    titleFr: 'Surpoids & Genou',
    titleAr: 'الوزن الزائد والركبة',
    keywordsFr: ['surpoids', 'poids', 'obésité', 'douleur genou', 'poids et articulation', 'excess weight'],
    keywordsAr: ['الوزن الزائد', 'السمنة', 'الركبة', 'الألم الناتج عن الوزن']
  },
  {
    slug: 'surpoids-et-sciatique',
    titleFr: 'Surpoids & Sciatique',
    titleAr: 'الوزن الزائد وعرق النسا',
    keywordsFr: ['surpoids', 'sciatique', 'poids', 'obésité', 'lien surpoids'],
    keywordsAr: ['الوزن الزائد', 'عرق النسا', 'الألم', 'التأثير على الأعصاب']
  },
  {
    slug: 'chaussures-douleur-genou',
    titleFr: 'Chaussures & Genou',
    titleAr: 'الأحذية والركبة',
    keywordsFr: ['chaussures', 'genou', 'impact chaussures', 'semelles', 'footwear', 'shoes'],
    keywordsAr: ['الأحذية', 'الركبة', 'تأثير الحذاء', 'الحذاء الصحي']
  },
  {
    slug: 'chaussures-mal-de-dos',
    titleFr: 'Chaussures & Mal de Dos',
    titleAr: 'الأحذية وآلام الظهر',
    keywordsFr: ['chaussures', 'mal de dos', 'dos', 'posture', 'semelles', 'pieds'],
    keywordsAr: ['الأحذية', 'آلام الظهر', 'العمود الفقري', 'القدمان']
  },
  {
    slug: 'telephone-cervicalgie-hernie-cervicale',
    titleFr: 'Téléphone & Cervicalgie',
    titleAr: 'الهاتف والرقبة',
    keywordsFr: ['téléphone', 'cervicalgie', 'hernie cervicale', 'cou', 'smartphone', 'phone neck', 'hernie'],
    keywordsAr: ['الهاتف', 'الرقبة', 'الألم العنقي', 'الجلوس أمام الشاشة']
  },
  {
    slug: 'spasticite-definition-traitement-indications',
    titleFr: 'Spasticité',
    titleAr: 'التشنج العضلي',
    keywordsFr: ['spasticité', 'spastique', 'hypertonie', 'raideur musculaire', 'muscle raide', 'spasmes'],
    keywordsAr: ['التشنج العضلي', 'التشنج', 'فرط التوتر', 'العضلات المشدودة']
  },
  {
    slug: 'neuroplasticite-miracle-cerveau-kine',
    titleFr: 'Neuroplasticité: miracle du cerveau',
    titleAr: 'المرونة العصبية: معجزة الدماغ',
    keywordsFr: ['neuroplasticité', 'plasticité cérébrale', 'récupération neurologique', 'reeducation neurologique', 'stimulation du cerveau'],
    keywordsAr: ['المرونة العصبية', 'لدونة الدماغ', 'التأهيل العصبي', 'تحفيز الدماغ', 'إعادة التأهيل العصبي']
  },
  {
    slug: 'faux-espoirs-kinesitherapie',
    titleFr: 'Faux espoirs en kiné',
    titleAr: 'الأوهام في الترويض الطبي',
    keywordsFr: ['faux espoirs', 'limites kiné', 'attentes kiné', 'guérison impossible', 'résultats réalistes'],
    keywordsAr: ['توقعات خاطئة', 'حدود الترويض', 'الأوهام', 'الشفاء المستحيل']
  },
  {
    slug: 'electrotherapie-tens-ems-microcourant',
    titleFr: 'Électrothérapie TENS EMS',
    titleAr: 'العلاج الكهربائي',
    keywordsFr: ['TENS', 'EMS', 'électrothérapie', 'électrostimulation', 'courant électrique', 'microcourant'],
    keywordsAr: ['TENS', 'EMS', 'علاج كهربائي', 'تحفيز كهربائي', 'تيار كهربائي']
  },
  {
    slug: 'electrotherapie-neurologie-utile-ou-non',
    titleFr: 'Électrothérapie et neurologie',
    titleAr: 'العلاج الكهربائي والأعصاب',
    keywordsFr: ['FES', 'stimulation fonctionnelle', 'électrothérapie neurologique', 'TENS neurologie'],
    keywordsAr: ['FES', 'تحفيز وظيفي', 'علاج كهربائي عصبي']
  },
  {
    slug: 'parents-paralysie-cerebrale-imc-education',
    titleFr: 'Paralysie cérébrale IMC parents',
    titleAr: 'الشلل الدماغي IMC',
    keywordsFr: ['paralysie cérébrale', 'IMC', 'IMOC', 'infirmité motrice', 'enfant handicap moteur'],
    keywordsAr: ['الشلل الدماغي', 'IMC', 'IMOC', 'الإعاقة الحركية', 'إعاقة الأطفال']
  },
  {
    slug: 'tout-le-monde-besoin-kine',
    titleFr: 'Tout le monde a besoin de kiné',
    titleAr: 'الجميع يحتاج الترويض',
    keywordsFr: ['kiné préventive', 'bilan postural', 'prévention musculaire', 'santé préventive'],
    keywordsAr: ['ترويض وقائي', 'فحص وضعي', 'صحة وقائية']
  },
  {
    slug: 'urgence-kine-parents-seniors',
    titleFr: 'Kiné pour les seniors parents',
    titleAr: 'الترويض لكبار السن',
    keywordsFr: ['chutes seniors', 'sarcopénie', 'perte musculaire', 'chute personne âgée', 'fracture col fémur'],
    keywordsAr: ['سقوط المسنين', 'السركوبينيا', 'ضمور العضلات', 'كسر عنق الفخذ']
  },
  {
    slug: 'kinesitherapie-maroc-portrait',
    titleFr: 'Kinésithérapie au Maroc',
    titleAr: 'الترويض الطبي بالمغرب',
    keywordsFr: ['kiné Maroc', 'kinésithérapeute marocain', 'IFCS', 'formation kiné Maroc'],
    keywordsAr: ['ترويض طبي مغرب', 'معالج مغربي', 'IFCS المغرب']
  },
  {
    slug: 'remboursement-kine-maroc-cnss-cnops',
    titleFr: 'Remboursement kiné Maroc CNSS CNOPS',
    titleAr: 'استرداد الترويض المغرب',
    keywordsFr: ['remboursement kiné', 'CNSS kiné', 'CNOPS kiné', 'tarif kiné remboursement'],
    keywordsAr: ['استرداد الترويض', 'CNSS ترويض', 'CNOPS ترويض', 'تعرفة الترويض']
  },
  {
    slug: 'kine-liberal-cnss-cnops-injustice',
    titleFr: 'Kinés libéraux CNSS injustice',
    titleAr: 'المعالجون الخواص والنظام',
    keywordsFr: ['kiné libéral', 'cabinet kiné charges', 'honoraires kiné', 'kiné conventionné'],
    keywordsAr: ['معالج خاص', 'عيادة ترويض', 'أتعاب معالج', 'ترويض طبي مستقل']
  }
];

export const createInternalLinks = (text: string, lang: Language, currentSlug: string): string => {
  let result = text;

  ARTICLE_LINKS.forEach((article) => {
    if (article.slug === currentSlug) return; // Ne pas créer de lien vers le même article

    const keywords = lang === 'fr' ? article.keywordsFr : article.keywordsAr;
    keywords.forEach((keyword) => {
      // Créer un regex qui matches le keyword en tant que mot entier (case-insensitive)
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      // Remplacer seulement la première occurrence
      if (regex.test(result)) {
        result = result.replace(
          regex,
          (match) =>
            `<a href="/${lang === 'ar' ? 'ar/' : ''}blog/${article.slug}" target="_blank" rel="noopener noreferrer" class="text-medical-600 font-semibold hover:text-medical-700 hover:underline transition">${match}</a>`
        );
      }
    });
  });

  return result;
};
