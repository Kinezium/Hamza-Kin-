import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import SEOHead from '../components/SEOHead';
import { Zap, ArrowUpDown, Dumbbell, Bone, Stethoscope, Brain, Baby, Flame, Activity, Scale, Smartphone, Shield, AlertTriangle, Users } from 'lucide-react';
import { getManagedSeo, makeWhatsAppLink, useAdminConfig, useManagedBlogImages } from '../src/adminConfig';

interface BlogPost {
  slug: string;
  titleFr: string;
  titleAr: string;
  descFr: string;
  descAr: string;
  icon: React.ReactNode;
  image: string;
  readTimeFr: string;
  readTimeAr: string;
}

interface BlogIndexProps {
  lang: Language;
}

const toCardImage = (src: string): string => {
  // Serve smaller Picsum variants in cards to reduce transfer size.
  if (src.includes('picsum.photos/seed/')) {
    return src.replace(/\/1600\/900$/, '/800/450');
  }
  return src;
};

const BlogIndex: React.FC<BlogIndexProps> = ({ lang }) => {
  const prefix = lang === 'ar' ? '/ar' : '';
  const config = useAdminConfig();
  const managedImages = useManagedBlogImages();
  const seo = getManagedSeo(config, 'blog', lang, {
    title: lang === 'fr' ? 'Blog Kinesitherapie Casablanca | Conseils, AVC, Entorse, LCA, Fracture Tibia' : 'مدونة الترويض الطبي بالدار البيضاء | AVC، التواء، رباط صليبي، كسر الساق',
    description: lang === 'fr' ? 'Articles SEO sur la kinesitherapie a Casablanca: AVC, entorse de cheville, rupture du ligament croise, fracture du tibia, douleurs du dos et recuperation sportive.' : 'مقالات جاهزة للفهرسة عن الترويض الطبي بالدار البيضاء: السكتة الدماغية، التواء الكاحل، الرباط الصليبي، كسر الساق، وآلام الظهر.',
    keywords: lang === 'fr' ? 'blog kine casablanca, article avc, entorse cheville, rupture ligament croise, fracture tibia, readaptation, reeducation geriatrique, activite physique seniors' : 'مدونة الترويض الطبي, السكتة الدماغية, التواء الكاحل, الرباط الصليبي, كسر الساق, kinésithérapie casablanca, blog kine, كبار السن'
  });

  const posts: BlogPost[] = [
    { slug: 'sciatique-hernie-discale', titleFr: 'La Sciatique & Hernie Discale', titleAr: 'عرق النسا والانزلاق الغضروفي', descFr: 'Guide complet sur le traitement de la sciatique et hernie discale', descAr: 'دليل شامل لعلاج عرق النسا والانزلاق الغضروفي', icon: <Zap size={28} />, image: managedImages['sciatique-hernie-discale'], readTimeFr: '5 min', readTimeAr: '5 دقائق' },
    { slug: 'lombalgie-cervicalgie', titleFr: 'Lombalgie & Cervicalgie', titleAr: 'آلام الظهر والرقبة', descFr: 'Solutions efficaces pour soulager vos douleurs de dos et cou', descAr: 'حلول فعالة لتخفيف آلام الظهر والرقبة', icon: <ArrowUpDown size={28} />, image: managedImages['lombalgie-cervicalgie'], readTimeFr: '6 min', readTimeAr: '6 دقائق' },
    { slug: 'traumatologie-sport', titleFr: 'Traumatologie du Sport', titleAr: 'الإصابات الرياضية', descFr: 'Récupération rapide après les blessures sportives', descAr: 'التعافي السريع من الإصابات الرياضية', icon: <Dumbbell size={28} />, image: managedImages['traumatologie-sport'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'arthrose-genou', titleFr: 'Arthrose du Genou', titleAr: 'خشونة الركبة', descFr: 'Vie sans douleur malgré l\'arthrose', descAr: 'الحياة بدون ألم رغم خشونة المفاصل', icon: <Bone size={28} />, image: managedImages['arthrose-genou'], readTimeFr: '6 min', readTimeAr: '6 دقائق' },
    { slug: 'douleurs-epaules-capsulite', titleFr: 'Douleurs aux Épaules', titleAr: 'ألم الكتفين', descFr: 'Traitement de la capsulite et douleurs d\'épaule', descAr: 'علاج تجمد الكتف وآلام الأكتاف', icon: <Stethoscope size={28} />, image: managedImages['douleurs-epaules-capsulite'], readTimeFr: '6 min', readTimeAr: '6 دقائق' },
    { slug: 'migraines-cephalees', titleFr: 'Migraines & Céphalées', titleAr: 'الصداع والشقيقة', descFr: 'Soulagement naturel des migraines et céphalées de tension', descAr: 'تخفيف طبيعي من الصداع والشقيقة', icon: <Brain size={28} />, image: managedImages['migraines-cephalees'], readTimeFr: '5 min', readTimeAr: '5 دقائق' },
    { slug: 'kine-pediatrique', titleFr: 'Physiothérapie Pédiatrique', titleAr: 'الترويض الطبي للأطفال', descFr: 'Développement normal de l\'enfant et rééducation pédiatrique', descAr: 'النمو الطبيعي للطفل والترويض الطبي', icon: <Baby size={28} />, image: managedImages['kine-pediatrique'], readTimeFr: '6 min', readTimeAr: '6 دقائق' },
    { slug: 'readaptation-post-avc', titleFr: 'Réadaptation Post-AVC', titleAr: 'إعادة التأهيل ما بعد الجلطة', descFr: 'Reprendre votre vie après un AVC', descAr: 'استعادة الحياة بعد السكتة الدماغية', icon: <Flame size={28} />, image: managedImages['readaptation-post-avc'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'posture-ergonomie', titleFr: 'Posture & Ergonomie', titleAr: 'الوضعية والإرغونوميا', descFr: 'Prévention des douleurs par une bonne posture', descAr: 'منع الآلام من خلال وضعية صحيحة', icon: <Stethoscope size={28} />, image: managedImages['posture-ergonomie'], readTimeFr: '5 min', readTimeAr: '5 دقائق' },
    { slug: 'recuperation-sportive-prevention-blessures', titleFr: 'Récupération Sportive', titleAr: 'الاستشفاء الرياضي', descFr: 'Optimisation de la récupération et prévention des blessures', descAr: 'تحسين الاستشفاء والوقاية من الإصابات', icon: <Dumbbell size={28} />, image: managedImages['recuperation-sportive-prevention-blessures'], readTimeFr: '6 min', readTimeAr: '6 دقائق' },
    { slug: 'avc-signes-alerte-reeducation-precoce', titleFr: 'AVC: signes d alerte et rééducation', titleAr: 'السكتة الدماغية: العلامات والتأهيل', descFr: 'Urgence AVC, signes clés et impact d une prise en charge précoce', descAr: 'علامات AVC ودور الترويض الطبي المبكر في التعافي', icon: <Brain size={28} />, image: managedImages['avc-signes-alerte-reeducation-precoce'], readTimeFr: '8 min', readTimeAr: '8 دقائق' },
    { slug: 'entorse-cheville-kinesitherapie', titleFr: 'Entorse de cheville et kiné', titleAr: 'التواء الكاحل والترويض الطبي', descFr: 'Comment recuperer vite sans rechute apres une entorse', descAr: 'برنامج تأهيل الكاحل لتفادي التواءات متكررة', icon: <Dumbbell size={28} />, image: managedImages['entorse-cheville-kinesitherapie'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'rupture-ligament-croise-anterieur-reeducation', titleFr: 'Rupture du ligament croisé antérieur', titleAr: 'تمزق الرباط الصليبي الأمامي', descFr: 'Étapes clés de rééducation avant et apres chirurgie du LCA', descAr: 'مراحل التأهيل قبل وبعد جراحة الرباط الصليبي', icon: <Bone size={28} />, image: managedImages['rupture-ligament-croise-anterieur-reeducation'], readTimeFr: '8 min', readTimeAr: '8 دقائق' },
    { slug: 'fracture-tibia-reeducation-marche', titleFr: 'Fracture du tibia et reprise de la marche', titleAr: 'كسر عظم الساق واستعادة المشي', descFr: 'Rééducation progressive pour marcher sans douleur ni boiterie', descAr: 'خطة ترويض طبي لاسترجاع المشي بعد كسر الساق', icon: <Bone size={28} />, image: managedImages['fracture-tibia-reeducation-marche'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'reeducation-geriatrique-importance-kine', titleFr: 'Rééducation Gériatrique', titleAr: 'إعادة التأهيل لكبار السن', descFr: 'Pourquoi la kiné est essentielle pour garder autonomie et équilibre après 60 ans', descAr: 'لماذا الترويض الطبي ضروري للحفاظ على الحركة والاستقلالية بعد 60 سنة', icon: <Stethoscope size={28} />, image: managedImages['reeducation-geriatrique-importance-kine'], readTimeFr: '6 min', readTimeAr: '6 دقائق' },
    { slug: 'activite-physique-adaptee-seniors', titleFr: 'Activité Physique Adaptée Seniors', titleAr: 'النشاط البدني الملائم لكبار السن', descFr: 'Exercices simples pour maman et papa et risques à éviter si on ne bouge pas', descAr: 'تمارين بسيطة للاب والام ومخاطر قلة الحركة', icon: <Dumbbell size={28} />, image: managedImages['activite-physique-adaptee-seniors'], readTimeFr: '5 min', readTimeAr: '5 دقائق' },
    { slug: 'sclerose-en-plaque-kinesitherapie', titleFr: 'Sclérose en Plaque et Kiné', titleAr: 'التصلب المتعدد والترويض الطبي', descFr: 'Vivre et bouger avec la SEP grâce à la kinésithérapie', descAr: 'العيش والحركة مع التصلب المتعدد بفضل الترويض الطبي', icon: <Brain size={28} />, image: managedImages['sclerose-en-plaque-kinesitherapie'], readTimeFr: '8 min', readTimeAr: '8 دقائق' },
    { slug: 'mal-de-dos-bons-gestes-a-eviter', titleFr: 'Mal de Dos : À Faire et À Éviter', titleAr: 'آلام الظهر: ما يجب فعله وتجنبه', descFr: 'Les bons gestes et erreurs classiques à éviter pour votre dos', descAr: 'التصرفات الصحيحة والأخطاء الشائعة لحماية ظهرك', icon: <ArrowUpDown size={28} />, image: managedImages['mal-de-dos-bons-gestes-a-eviter'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'cervicalgie-bons-gestes-posture', titleFr: 'Cervicalgie : Bons Gestes et Posture', titleAr: 'ألم الرقبة: النصائح والوضعية', descFr: 'Comment soulager et prévenir les douleurs cervicales', descAr: 'كيفية تخفيف والوقاية من آلام الرقبة', icon: <Activity size={28} />, image: managedImages['cervicalgie-bons-gestes-posture'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'surpoids-douleurs-genou', titleFr: 'Surpoids et Douleurs au Genou', titleAr: 'الوزن الزائد وآلام الركبة', descFr: 'Comment chaque kilo en trop abîme vos genoux', descAr: 'كيف يُتلف كل كيلو زائد ركبتيك', icon: <Scale size={28} />, image: managedImages['surpoids-douleurs-genou'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'surpoids-et-sciatique', titleFr: 'Surpoids et Sciatique', titleAr: 'الوزن الزائد وعرق النسا', descFr: 'Le lien entre les kilos en trop et la douleur sciatique', descAr: 'العلاقة بين الوزن الزائد وألم عرق النسا', icon: <Scale size={28} />, image: managedImages['surpoids-et-sciatique'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'chaussures-douleur-genou', titleFr: 'Chaussures et Douleur au Genou', titleAr: 'الأحذية وألم الركبة', descFr: 'L\'impact méconnu de vos chaussures sur vos genoux', descAr: 'التأثير الخفي لأحذيتك على ركبتيك', icon: <Bone size={28} />, image: managedImages['chaussures-douleur-genou'], readTimeFr: '6 min', readTimeAr: '6 دقائق' },
    { slug: 'chaussures-mal-de-dos', titleFr: 'Chaussures et Mal de Dos', titleAr: 'الأحذية وآلام الظهر', descFr: 'Ce que vos pieds font à votre colonne vertébrale', descAr: 'ما تفعله قدماك بعمودك الفقري', icon: <Shield size={28} />, image: managedImages['chaussures-mal-de-dos'], readTimeFr: '6 min', readTimeAr: '6 دقائق' },
    { slug: 'telephone-cervicalgie-hernie-cervicale', titleFr: 'Téléphone et Hernie Cervicale', titleAr: 'الهاتف والفتق الرقبي', descFr: 'Pourquoi regarder son téléphone abîme les cervicales', descAr: 'لماذا النظر للهاتف يُتلف الرقبة', icon: <Smartphone size={28} />, image: managedImages['telephone-cervicalgie-hernie-cervicale'], readTimeFr: '6 min', readTimeAr: '6 دقائق' },
    { slug: 'spasticite-definition-traitement-indications', titleFr: 'Spasticite: Definition et Traitement', titleAr: 'التشنج العضلي: التعريف والعلاج', descFr: 'Guide detaille: causes, indications, contre-indications, statistiques et sources', descAr: 'دليل مفصل: الاسباب، دواعي وموانع العلاج، الاحصائيات والمصادر', icon: <Brain size={28} />, image: managedImages['spasticite-definition-traitement-indications'], readTimeFr: '9 min', readTimeAr: '9 دقائق' },
    { slug: 'faux-espoirs-kinesitherapie', titleFr: 'Faux espoirs en kiné: la vérité', titleAr: 'الأوهام الكبيرة في الترويض الطبي', descFr: 'Ce que la kiné peut vraiment faire — et ce qu elle ne peut pas. Honnêteté totale.', descAr: 'ما يمكن للترويض فعله فعلًا — وما لا يستطيعه. صدق كامل.', icon: <AlertTriangle size={28} />, image: managedImages['faux-espoirs-kinesitherapie'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'electrotherapie-tens-ems-microcourant', titleFr: 'TENS, EMS, Microcourant: La vérité', titleAr: 'TENS وEMS والتيار الدقيق: الحقيقة', descFr: 'Ce que la science dit vraiment sur l électrothérapie en kinésithérapie', descAr: 'ما تقوله العلوم فعلًا عن العلاج الكهربائي في الترويض', icon: <Zap size={28} />, image: managedImages['electrotherapie-tens-ems-microcourant'], readTimeFr: '8 min', readTimeAr: '8 دقائق' },
    { slug: 'electrotherapie-neurologie-utile-ou-non', titleFr: 'Électrothérapie et neurologie: utile?', titleAr: 'العلاج الكهربائي والأعصاب: مفيد أم لا؟', descFr: 'TENS et FES après AVC ou SEP: verdict scientifique honnête', descAr: 'TENS وFES بعد الجلطة أو التصلب المتعدد: حكم علمي صريح', icon: <Brain size={28} />, image: managedImages['electrotherapie-neurologie-utile-ou-non'], readTimeFr: '8 min', readTimeAr: '8 دقائق' },
    { slug: 'parents-paralysie-cerebrale-imc-education', titleFr: 'Paralysie cérébrale IMC: guide parents', titleAr: 'الشلل الدماغي IMC: دليل الوالدين', descFr: 'Votre rôle, les exercices, ce qu il faut éviter — guide complet pour parents d enfants IMC', descAr: 'دورك، التمارين، ما يجب تجنبه — دليل شامل لوالدي أطفال الشلل الدماغي', icon: <Baby size={28} />, image: managedImages['parents-paralysie-cerebrale-imc-education'], readTimeFr: '10 min', readTimeAr: '10 دقائق' },
    { slug: 'tout-le-monde-besoin-kine', titleFr: 'Tout le monde a besoin de kiné', titleAr: 'الجميع يحتاج إلى الترويض الطبي', descFr: 'Vous pensez ne pas avoir besoin de kiné? Cet article va vous changer l avis.', descAr: 'تظن أنك لا تحتاج الترويض؟ هذا المقال سيغير رأيك.', icon: <Users size={28} />, image: managedImages['tout-le-monde-besoin-kine'], readTimeFr: '6 min', readTimeAr: '6 دقائق' },
    { slug: 'urgence-kine-parents-seniors', titleFr: 'URGENT: Sauvez vos parents avec la kiné', titleAr: 'عاجل: أنقذوا والديكم بالترويض الطبي', descFr: 'Les chutes tuent. La sarcopénie isole. La kiné peut changer tout ça.', descAr: 'السقطات تقتل. ضمور العضلات يُعزل. الترويض يمكنه تغيير كل ذلك.', icon: <AlertTriangle size={28} />, image: managedImages['urgence-kine-parents-seniors'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'kinesitherapie-maroc-portrait', titleFr: 'La kinésithérapie au Maroc', titleAr: 'الترويض الطبي في المغرب', descFr: 'Portrait d une profession méconnue, ses défis et son avenir au Maroc', descAr: 'صورة مهنة مجهولة وتحدياتها ومستقبلها في المغرب', icon: <Stethoscope size={28} />, image: managedImages['kinesitherapie-maroc-portrait'], readTimeFr: '8 min', readTimeAr: '8 دقائق' },
    { slug: 'remboursement-kine-maroc-cnss-cnops', titleFr: 'Remboursement kiné Maroc: le scandale', titleAr: 'استرداد الترويض بالمغرب: الفضيحة', descFr: '150-200 DH la séance, 35 DH remboursé. Qui paye le reste? Les pauvres.', descAr: '150-200 درهم للجلسة، 35 درهمًا مُعوَّضة. من يدفع الباقي؟ الفقراء.', icon: <Scale size={28} />, image: managedImages['remboursement-kine-maroc-cnss-cnops'], readTimeFr: '8 min', readTimeAr: '8 دقائق' },
    { slug: 'kine-liberal-cnss-cnops-injustice', titleFr: 'Kinés libéraux victimes du système', titleAr: 'المعالجون الخواص ضحايا النظام', descFr: '35 DH versés par la CNSS pour une séance à 200 DH. Un système à bout.', descAr: '35 درهمًا من CNSS مقابل جلسة بـ200 درهم. نظام على وشك الانهيار.', icon: <Shield size={28} />, image: managedImages['kine-liberal-cnss-cnops-injustice'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'rupture-lca-lcp-genou', titleFr: 'Rupture LCA & LCP: ligaments croisés', titleAr: 'تمزق الرباط الصليبي الأمامي والخلفي', descFr: 'Différences, mécanismes, traitement et rééducation des ligaments croisés du genou', descAr: 'الفروق والآليات والعلاج والتأهيل لأربطة الركبة الصليبية', icon: <Bone size={28} />, image: managedImages['rupture-lca-lcp-genou'], readTimeFr: '9 min', readTimeAr: '9 دقائق' },
    { slug: 'rupture-partielle-vs-totale-ligaments', titleFr: 'Rupture partielle vs totale du ligament', titleAr: 'التمزق الجزئي مقابل الكلي للرباط', descFr: 'Grade I, II, III: ce que ça change pour le traitement et le retour au sport', descAr: 'الدرجات 1 و2 و3: ما الذي يتغير للعلاج والعودة للرياضة', icon: <Bone size={28} />, image: managedImages['rupture-partielle-vs-totale-ligaments'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'elongation-lca-lcp', titleFr: 'Élongation LCA/LCP: grade I ligamentaire', titleAr: 'تمدد الرباط الصليبي: الدرجة الأولى', descFr: 'Le ligament s étire sans rompre: traitement PEACE&LOVE et prévention de la récidive', descAr: 'الرباط يتمطط دون تمزق: بروتوكول PEACE&LOVE والوقاية من التكرار', icon: <Activity size={28} />, image: managedImages['elongation-lca-lcp'], readTimeFr: '6 min', readTimeAr: '6 دقائق' },
    { slug: 'rupture-double-lca-lcp', titleFr: 'Rupture double LCA + LCP: la pire blessure', titleAr: 'تمزق مزدوج LCA + LCP: الأشد خطورة', descFr: 'Rupture des deux ligaments croisés: urgence chirurgicale et rééducation sur 12-18 mois', descAr: 'تمزق الرباطين الصليبيين: طوارئ جراحية وتأهيل يستمر 12-18 شهرًا', icon: <AlertTriangle size={28} />, image: managedImages['rupture-double-lca-lcp'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'ligaments-collateraux-lcm-lcl', titleFr: 'Ligaments collatéraux LCM & LCL', titleAr: 'الأربطة الجانبية LCM وLCL', descFr: 'Entorse et rupture des ligaments collatéraux du genou: la triade malheureuse', descAr: 'التواء وتمزق الأربطة الجانبية للركبة: الثلاثي المشؤوم', icon: <Bone size={28} />, image: managedImages['ligaments-collateraux-lcm-lcl'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'dechirures-musculaires-footballeurs', titleFr: 'Déchirures musculaires des footballeurs', titleAr: 'التمزقات العضلية عند لاعبي كرة القدم', descFr: 'Ischio, adducteurs, quadriceps: récupération rapide et prévention des récidives', descAr: 'الأوتار الخلفية والمقربة والرباعية: تعافٍ سريع والوقاية من الانتكاس', icon: <Dumbbell size={28} />, image: managedImages['dechirures-musculaires-footballeurs'], readTimeFr: '8 min', readTimeAr: '8 دقائق' },
    { slug: 'entorses-types-classification-cat', titleFr: 'Entorses: types, grades et conduite à tenir', titleAr: 'الالتواءات: الأنواع والدرجات والتدبير', descFr: 'Grade 1, 2, 3 pour cheville, genou, poignet: CAT immédiate et kiné', descAr: 'الدرجات 1 و2 و3 للكاحل والركبة والمعصم: التدبير الفوري والترويض', icon: <Zap size={28} />, image: managedImages['entorses-types-classification-cat'], readTimeFr: '10 min', readTimeAr: '10 دقائق' },
    { slug: 'massage-sportif-decontracturant', titleFr: 'Massage sportif décontracturant: coureurs et foot', titleAr: 'التدليك الرياضي المرخي: عدّاؤون ولاعبو كرة القدم', descFr: 'Effets prouvés, types selon le moment et zones prioritaires par sport', descAr: 'الآثار المثبتة وأنواع التدليك حسب التوقيت والمناطق الأولوية لكل رياضة', icon: <Activity size={28} />, image: managedImages['massage-sportif-decontracturant'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'choisir-chaussures-running', titleFr: 'Choisir ses chaussures de running', titleAr: 'كيف تختار حذاء الركض الصحيح', descFr: 'Pronation, drop, amorti, semelle: guide complet pour éviter les blessures', descAr: 'التكوير والارتفاع والتخميد والنعل: الدليل الشامل لتجنب الإصابات', icon: <Stethoscope size={28} />, image: managedImages['choisir-chaussures-running'], readTimeFr: '8 min', readTimeAr: '8 دقائق' },
    { slug: 'deformation-pieds', titleFr: 'Déformations des pieds: types et traitement', titleAr: 'تشوهات القدمين: الأنواع والعلاج', descFr: 'Pied plat, creux, hallux valgus, orteils en griffe: causes et prise en charge kiné', descAr: 'قدم مسطحة، مجوفة، إبهام أعرج، أصابع مخلبية: الأسباب والترويض', icon: <Bone size={28} />, image: managedImages['deformation-pieds'], readTimeFr: '9 min', readTimeAr: '9 دقائق' },
    { slug: 'hallux-valgus-kinesitherapie', titleFr: 'Hallux Valgus (oignon): traitement sans chirurgie', titleAr: 'إبهام القدم الأعرج: العلاج بدون جراحة', descFr: 'Stades, orthèses, semelles et ce que la kiné peut vraiment faire', descAr: 'المراحل والأدوات التصحيحية والنعال وما يستطيع الترويض فعله فعلاً', icon: <Bone size={28} />, image: managedImages['hallux-valgus-kinesitherapie'], readTimeFr: '7 min', readTimeAr: '7 دقائق' },
    { slug: 'epine-calcanienne-sans-ondes-de-choc', titleFr: 'Épine calcanéenne: sans ondes de choc', titleAr: 'الشوكة العقبية: بدون موجات صوتية', descFr: 'Fasciite plantaire: tous les traitements efficaces sans ondes de choc', descAr: 'التهاب اللفافة الخضعية: جميع العلاجات الفعالة بدون موجات صوتية', icon: <Activity size={28} />, image: managedImages['epine-calcanienne-sans-ondes-de-choc'], readTimeFr: '8 min', readTimeAr: '8 دقائق' },
    { slug: 'parkinson-prothese-hanche-pth', titleFr: 'Parkinson et prothèse de hanche (PTH)', titleAr: 'باركنسون وبدلة الورك الكاملة (PTH)', descFr: 'Un défi réel: rééducation spécifique Parkinson + PTH et risques particuliers', descAr: 'تحدٍّ حقيقي: تأهيل خاص باركنسون + بدلة الورك والمخاطر المحددة', icon: <Brain size={28} />, image: managedImages['parkinson-prothese-hanche-pth'], readTimeFr: '9 min', readTimeAr: '9 دقائق' },
    { slug: 'neuroplasticite-miracle-cerveau-kine', titleFr: 'Neuroplasticité: miracle du cerveau et kiné', titleAr: 'المرونة العصبية: معجزة الدماغ والترويض', descFr: 'Quoi, comment et quand stimuler la neuroplasticité en rééducation', descAr: 'ما هي المرونة العصبية وكيف ومتى نحفزها في التأهيل', icon: <Brain size={28} />, image: managedImages['neuroplasticite-miracle-cerveau-kine'], readTimeFr: '9 min', readTimeAr: '9 دقائق' }
  ];

  const customPosts: BlogPost[] = config.customBlogPosts.map((item) => ({
    slug: `custom/${item.slug}`,
    titleFr: item.titleFr,
    titleAr: item.titleAr,
    descFr: item.descFr,
    descAr: item.descAr,
    icon: <Stethoscope size={28} />,
    image: item.image,
    readTimeFr: item.readTimeFr,
    readTimeAr: item.readTimeAr
  }));

  const allPosts = [...customPosts, ...posts];

  const t = lang === 'fr'
    ? {
        title: 'Blog kinésithérapie',
        description: 'Découvrez nos articles sur les pathologies, conseils et solutions de traitement',
        articles: 'Tous les Articles',
        readMore: 'Lire l\'article',
        ctaTitle: 'Vous avez une question ?',
        ctaText: 'Contactez notre équipe pour une consultation personnalisée.',
        ctaButton: 'Contactez-nous sur WhatsApp'
      }
    : {
        title: 'مدونة الترويض الطبي',
        description: 'اكتشف مقالاتنا عن الأمراض والنصائح وحلول العلاج',
        articles: 'جميع المقالات',
        readMore: 'اقرأ المقال',
        ctaTitle: 'لديك استفسار؟',
        ctaText: 'اتصل بفريقنا للحصول على استشارة شخصية.',
        ctaButton: 'تواصل معنا عبر واتساب'
      };

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
      />

      <div className={lang === 'ar' ? 'font-arabic rtl' : 'ltr'} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="bg-gradient-to-r from-medical-600 to-medical-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-medical-100 max-w-2xl mx-auto">{t.description}</p>
          </div>
        </div>

        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.articles}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`${prefix}/blog/${post.slug}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition transform duration-300"
                >
                  <div className="relative h-40">
                    <img
                      src={toCardImage(post.image)}
                      alt={lang === 'fr' ? post.titleFr : post.titleAr}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={450}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                      <div className="text-white">{post.icon}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-medical-600 transition">
                      {lang === 'fr' ? post.titleFr : post.titleAr}
                    </h3>
                    <p className="text-gray-600 mb-4">{lang === 'fr' ? post.descFr : post.descAr}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{lang === 'fr' ? post.readTimeFr : post.readTimeAr}</span>
                      <span className="text-medical-600 font-semibold hover:text-medical-700 transition">{t.readMore} {'->'}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-medical-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.ctaTitle}</h2>
            <p className="text-medical-100 mb-8">{t.ctaText}</p>
            <a
              href={makeWhatsAppLink(lang, config.contact.whatsappNumber, 'Blog')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
            >
              {t.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
