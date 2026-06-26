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
    slug: 'sciatique-hernie-discale',
    titleFr: 'La Sciatique & Hernie Discale',
    titleAr: 'عرق النسا والانزلاق الغضروفي',
    keywordsFr: ['sciatique', 'hernie discale', 'hernie', 'nerf sciatique', 'douleur sciatique'],
    keywordsAr: ['عرق النسا', 'الانزلاق الغضروفي', 'انزلاق', 'النسا']
  },
  {
    slug: 'lombalgie-cervicalgie',
    titleFr: 'Lombalgie & Cervicalgie',
    titleAr: 'آلام الظهر والرقبة',
    keywordsFr: ['lombalgie', 'cervicalgie', 'mal de dos', 'douleur cervicale', 'douleur au dos'],
    keywordsAr: ['آلام الظهر', 'آلام الرقبة', 'الألم القطني', 'الألم العنقي']
  },
  {
    slug: 'traumatologie-sport',
    titleFr: 'Traumatologie du Sport',
    titleAr: 'الإصابات الرياضية',
    keywordsFr: ['traumatologie', 'blessure sportive', 'entorse', 'blessures'],
    keywordsAr: ['الإصابات الرياضية', 'إصابة رياضية', 'الرياضة']
  },
  {
    slug: 'arthrose-genou',
    titleFr: 'Arthrose du Genou',
    titleAr: 'خشونة الركبة',
    keywordsFr: ['arthrose', 'arthrose du genou', 'genou', 'arthralgies du genou'],
    keywordsAr: ['خشونة الركبة', 'خشونة', 'الركبة', 'التهاب المفاصل']
  },
  {
    slug: 'douleurs-epaules-capsulite',
    titleFr: 'Douleurs aux Épaules',
    titleAr: 'ألم الكتفين',
    keywordsFr: ['epaule', 'capsulite', 'douleur épaule', 'shoulder', 'tenson shoulder'],
    keywordsAr: ['الكتف', 'آلام الأكتاف', 'تجمد الكتف', 'capsulite']
  },
  {
    slug: 'migraines-cephalees',
    titleFr: 'Migraines & Céphalées',
    titleAr: 'الصداع والشقيقة',
    keywordsFr: ['migraine', 'céphalée', 'headache', 'mal de tête', 'migraine tension'],
    keywordsAr: ['الصداع', 'الشقيقة', 'الصداع النصفي', 'الصداع التوتري']
  },
  {
    slug: 'kine-pediatrique',
    titleFr: 'Physiothérapie Pédiatrique',
    titleAr: 'الترويض الطبي للأطفال',
    keywordsFr: ['pédiatrique', 'enfant', 'physiothérapie pédiatrique', 'rééducation pédiatrique'],
    keywordsAr: ['الترويض الطبي للأطفال', 'الأطفال', 'طب الأطفال', 'الرياضة للأطفال']
  },
  {
    slug: 'readaptation-post-avc',
    titleFr: 'Réadaptation Post-AVC',
    titleAr: 'إعادة التأهيل ما بعد الجلطة',
    keywordsFr: ['AVC', 'accident vasculaire', 'post-AVC', 'réadaptation', 'rééducation AVC', 'après AVC'],
    keywordsAr: ['السكتة الدماغية', 'AVC', 'إعادة التأهيل', 'بعد الجلطة']
  },
  {
    slug: 'posture-ergonomie',
    titleFr: 'Posture & Ergonomie',
    titleAr: 'الوضعية والإرغونوميا',
    keywordsFr: ['posture', 'ergonomie', 'ergonomique', 'position', 'bonne posture'],
    keywordsAr: ['الوضعية', 'الإرغونوميا', 'الوضع', 'الجلسة الصحيحة']
  },
  {
    slug: 'recuperation-sportive-prevention-blessures',
    titleFr: 'Récupération Sportive',
    titleAr: 'الاستشفاء الرياضي',
    keywordsFr: ['récupération sportive', 'récupération', 'prévention blessures', 'prévention'],
    keywordsAr: ['الاستشفاء الرياضي', 'الوقاية من الإصابات', 'استعادة اللياقة', 'الرياضة']
  },
  {
    slug: 'avc-signes-alerte-reeducation-precoce',
    titleFr: 'AVC: Signes et Rééducation',
    titleAr: 'السكتة الدماغية: العلامات والتأهيل',
    keywordsFr: ['AVC', 'signes AVC', 'signes d alerte', 'rééducation précoce', 'urgence AVC'],
    keywordsAr: ['السكتة الدماغية', 'علامات الجلطة', 'العلامات التحذيرية', 'التأهيل المبكر']
  },
  {
    slug: 'entorse-cheville-kinesitherapie',
    titleFr: 'Entorse de Cheville',
    titleAr: 'التواء الكاحل',
    keywordsFr: ['entorse', 'entorse cheville', 'cheville', 'foulure', 'sprain'],
    keywordsAr: ['التواء', 'التواء الكاحل', 'الكاحل', 'الالتواء']
  },
  {
    slug: 'rupture-ligament-croise-anterieur-reeducation',
    titleFr: 'Rupture du Ligament Croisé',
    titleAr: 'تمزق الرباط الصليبي',
    keywordsFr: ['LCA', 'ligament croisé', 'rupture LCA', 'ligament', 'chirurgie LCA'],
    keywordsAr: ['الرباط الصليبي', 'تمزق الرباط', 'جراحة الرباط', 'LCA']
  },
  {
    slug: 'fracture-tibia-reeducation-marche',
    titleFr: 'Fracture du Tibia',
    titleAr: 'كسر عظم الساق',
    keywordsFr: ['fracture tibia', 'tibia', 'fracture', 'reprise marche', 'os de la jambe'],
    keywordsAr: ['كسر الساق', 'كسر عظمي', 'كسر عظم الساق', 'استعادة المشي']
  },
  {
    slug: 'reeducation-geriatrique-importance-kine',
    titleFr: 'Rééducation Gériatrique',
    titleAr: 'إعادة التأهيل لكبار السن',
    keywordsFr: ['gériatrique', 'senior', 'personne âgée', 'personnes agées', 'rééducation gériatrique'],
    keywordsAr: ['كبار السن', 'الرعاية الصحية للمسنين', 'إعادة التأهيل', 'المسنون']
  },
  {
    slug: 'activite-physique-adaptee-seniors',
    titleFr: 'Activité Physique Seniors',
    titleAr: 'النشاط البدني لكبار السن',
    keywordsFr: ['activité physique', 'seniors', 'exercice senior', 'activité adaptée', 'personnes agées'],
    keywordsAr: ['النشاط البدني', 'التمارين', 'كبار السن', 'النشاط المقترح']
  },
  {
    slug: 'sclerose-en-plaque-kinesitherapie',
    titleFr: 'Sclérose en Plaque et Kiné',
    titleAr: 'التصلب المتعدد',
    keywordsFr: ['SEP', 'sclérose en plaques', 'sclerose multiple', 'MS', 'multiple sclerosis'],
    keywordsAr: ['التصلب المتعدد', 'SEP', 'MS', 'مرض عصبي']
  },
  {
    slug: 'mal-de-dos-bons-gestes-a-eviter',
    titleFr: 'Mal de Dos: Bons Gestes',
    titleAr: 'آلام الظهر: النصائح',
    keywordsFr: ['mal de dos', 'dos', 'bons gestes', 'gestes à éviter', 'position correcte'],
    keywordsAr: ['آلام الظهر', 'الظهر', 'النصائح', 'الأخطاء الشائعة']
  },
  {
    slug: 'cervicalgie-bons-gestes-posture',
    titleFr: 'Cervicalgie: Posture',
    titleAr: 'ألم الرقبة: النصائح',
    keywordsFr: ['cervicalgie', 'cervicale', 'cou', 'douleur cervicale', 'neck pain', 'posture cervicale'],
    keywordsAr: ['ألم الرقبة', 'الرقبة', 'الألم العنقي', 'وضعية الرقبة']
  },
  {
    slug: 'surpoids-douleurs-genou',
    titleFr: 'Surpoids & Genou',
    titleAr: 'الوزن الزائد والركبة',
    keywordsFr: ['surpoids', 'poids', 'obésité', 'douleur genou', 'poids et articulation'],
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
    keywordsFr: ['chaussures', 'genou', 'impact chaussures', 'semelles', 'footwear'],
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
    keywordsFr: ['téléphone', 'cervicalgie', 'hernie cervicale', 'cou', 'smartphone', 'phone neck'],
    keywordsAr: ['الهاتف', 'الرقبة', 'الألم العنقي', 'الجلوس أمام الشاشة']
  },
  {
    slug: 'spasticite-definition-traitement-indications',
    titleFr: 'Spasticité',
    titleAr: 'التشنج العضلي',
    keywordsFr: ['spasticité', 'spastique', 'hypertonie', 'raideur musculaire', 'muscle raide'],
    keywordsAr: ['التشنج العضلي', 'التشنج', 'فرط التوتر', 'العضلات المشدودة']
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
