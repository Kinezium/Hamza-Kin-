import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Activity, Heart, CheckCircle, Stethoscope, Zap } from 'lucide-react';

const article = createArticle({
  slug: 'massage-sportif-decontracturant',
  titleFr: 'Massage Sportif Décontracturant: Pourquoi Coureurs et Footballeurs en ont Besoin',
  titleAr: 'التدليك الرياضي المرخي: لماذا يحتاجه العدّاؤون ولاعبو كرة القدم',
  descriptionFr: 'Types de massage sportif, effets physiologiques prouvés, quand et comment l intégrer dans la récupération des coureurs et footballeurs. Prévention des blessures par le massage.',
  descriptionAr: 'أنواع التدليك الرياضي، آثاره الفيزيولوجية المثبتة، متى وكيف يُدمج في استشفاء العدّاءين ولاعبي كرة القدم. الوقاية من الإصابات بالتدليك.',
  keywordsFr: 'massage sportif décontracturant, récupération running, massage footballeur, bienfaits massage sport, massage après course à pied',
  keywordsAr: 'تدليك رياضي مرخي, استشفاء الركض, تدليك لاعب كرة القدم, فوائد تدليك رياضي, تدليك بعد الركض',
  imageFr: 'https://picsum.photos/seed/massage-sport-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/massage-sport-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-purple-600" size={26} />
          <h2 className="text-2xl font-bold text-purple-900">Le massage sportif, plus qu'un luxe</h2>
        </div>
        <p className="text-purple-900 leading-relaxed">
          Les équipes professionnelles de football et d'athlétisme ne font pas passer leurs joueurs
          sur la table de massage par habitude ou "pour se faire dorloter". C'est une intervention
          thérapeutique planifiée, avec des effets physiologiques réels et mesurables.
        </p>
        <p className="mt-3 text-purple-900 font-medium">Voici ce que la science dit vraiment.</p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Effets physiologiques prouvés du massage sportif</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { titre: 'Réduction des DOMS (courbatures)', desc: 'Les études montrent une réduction de 30% de l\'intensité des douleurs musculaires d\'apparition retardée (DOMS) avec un massage de 10-20 min post-effort.', icon: '✅' },
            { titre: 'Amélioration de la circulation', desc: 'Accélère le retour veineux et lymphatique, favorise l\'élimination des métabolites (acide lactique, créatine kinase).', icon: '✅' },
            { titre: 'Réduction de la tension musculaire', desc: 'Abaisse le tonus musculaire de base, prévient les contractures chroniques qui précèdent souvent les élongations.', icon: '✅' },
            { titre: 'Effets neuropsychologiques', desc: 'Libération d\'ocytocine et de sérotonine. Réduction du cortisol (hormone du stress). Amélioration de la qualité du sommeil réparateur.', icon: '✅' },
            { titre: 'Amélioration de la mobilité', desc: 'Augmentation temporaire de l\'amplitude articulaire par relâchement des fascias et des muscles péri-articulaires.', icon: '✅' },
            { titre: 'Prévention des blessures', desc: 'Un muscle décontracté et bien vascularisé est moins susceptible de se déchirer lors d\'un effort intense.', icon: '✅' },
          ].map(({ titre, desc, icon }) => (
            <div key={titre} className="bg-white border border-purple-100 rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-purple-800 mb-1">{icon} {titre}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Types de massage selon le moment</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-yellow-50 rounded-lg p-4">
            <h3 className="font-bold text-yellow-800">Avant l'effort (pré-compétition)</h3>
            <p className="text-yellow-900 text-sm">Massage de préparation: court (10-15 min), techniques dynamiques (effleurage rapide, percussions légères). Objectif: activer la circulation, éveiller le système neuromusculaire. Pas de massage profond (risque de relâchement excessif).</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-800">Après l'effort (récupération)</h3>
            <p className="text-green-900 text-sm">Massage de récupération: 20-40 min, techniques lentes et profondes (pétrissage, drainage, pression glissante). Idéalement dans les 2h post-effort. Objectif: éliminer les déchets métaboliques, décontracter les muscles fatigués.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-blue-800">En entretien (entre les séances)</h3>
            <p className="text-blue-900 text-sm">Massage prophylactique: 1 à 2 fois/semaine. Travail sur les zones de tension chronique (ischio, mollets pour coureurs; adducteurs, quadriceps pour footballeurs). Prévention des blessures de surcharge.</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-800">Sur blessure (décontracturant spécifique)</h3>
            <p className="text-red-900 text-sm">Massage transversal profond (MTP) sur contracture localisée, cicatrices musculaires, points trigger. Doit être réalisé par un kiné diplômé. Ne jamais masser une blessure aiguë ou inflammatoire.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold">Spécificités selon le sport</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-orange-50 rounded-lg p-4">
            <h3 className="font-bold text-orange-800 mb-2">🏃 Coureurs à pied</h3>
            <p className="text-orange-900 text-sm mb-2">Zones prioritaires:</p>
            <ul className="list-disc pl-4 space-y-1 text-orange-900 text-sm">
              <li>Mollets et soléaires (talonnage répétitif)</li>
              <li>Fascia plantaire (prévention épine calcanéenne)</li>
              <li>Bandelette ilio-tibiale (syndrome IT band)</li>
              <li>Ischio-jambiers et quadriceps</li>
              <li>Fessiers (stabilisateurs pelviens)</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-800 mb-2">⚽ Footballeurs</h3>
            <p className="text-green-900 text-sm mb-2">Zones prioritaires:</p>
            <ul className="list-disc pl-4 space-y-1 text-green-900 text-sm">
              <li>Adducteurs (tirs, écarts latéraux)</li>
              <li>Ischio-jambiers (sprints répétés)</li>
              <li>Quadriceps (frappes, accélérations)</li>
              <li>Tibial antérieur (courir en crampons)</li>
              <li>Nuque et trapèzes (jeu de tête répété)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">Rôle primordial de la kinésithérapie</h2>
        </div>
        <p className="mb-3 text-emerald-900">Le massage sportif fait partie intégrante du suivi kinésithérapique du sportif:</p>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>Bilan régulier des tensions musculaires:</strong> le kiné détecte les contractures avant qu'elles deviennent des déchirures.</li>
          <li><strong>Techniques complémentaires:</strong> étirements, mobilisations articulaires, travail fascial — intégrées au massage pour un effet maximal.</li>
          <li><strong>Éducation du sportif:</strong> auto-massage avec foam roller, zones à traiter, fréquence optimale.</li>
          <li><strong>Différenciation thérapeutique:</strong> un kiné distingue une contracture bénigne d'un début de déchirure — crucial pour éviter d'aggraver une lésion.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">Le massage sans programme d'entraînement adapté ni récupération globale ne suffit pas. Il fait partie d'un système — pas d'une solution isolée.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-purple-50 border-r-4 border-purple-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-purple-600" size={26} />
          <h2 className="text-2xl font-bold text-purple-900">التدليك الرياضي: أكثر من مجرد رفاهية</h2>
        </div>
        <p className="text-purple-900 leading-relaxed">
          الفرق الاحترافي لكرة القدم لا يُجري لاعبيه على طاولة التدليك من باب الدلال. إنه تدخل علاجي مُدرَج في البرنامج،
          بآثار فيزيولوجية حقيقية وقابلة للقياس. إليك ما تقوله العلوم فعلًا.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">الآثار الفيزيولوجية المثبتة للتدليك الرياضي</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { titre: 'تقليل آلام التعب العضلي (DOMS)', desc: 'الدراسات تُظهر تقليل 30% من شدة الآلام العضلية المتأخرة مع تدليك 10-20 دقيقة بعد الجهد.', icon: '✅' },
            { titre: 'تحسين الدورة الدموية', desc: 'يُسرّع الرجوع الوريدي واللمفاوي، ويُفضي إلى التخلص من الفضلات الأيضية.', icon: '✅' },
            { titre: 'تقليل التوتر العضلي', desc: 'يخفض توتر العضلة الأساسي، يمنع التشنجات المزمنة التي تسبق الإجهادات العضلية غالبًا.', icon: '✅' },
            { titre: 'آثار نفسية عصبية', desc: 'إفراز الأوكسيتوسين والسيروتونين. تقليل الكورتيزول (هرمون التوتر). تحسين جودة النوم التعافوي.', icon: '✅' },
            { titre: 'تحسين المرونة', desc: 'رفع مؤقت لنطاق الحركة المفصلية بتليين اللفافات والعضلات المحيطة بالمفصل.', icon: '✅' },
            { titre: 'الوقاية من الإصابات', desc: 'عضلة مسترخية وجيدة التروية أقل عرضة للتمزق أثناء الجهد الشديد.', icon: '✅' },
          ].map(({ titre, desc, icon }) => (
            <div key={titre} className="bg-white border border-purple-100 rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-purple-800 mb-1">{icon} {titre}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">أنواع التدليك حسب التوقيت</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-yellow-50 rounded-lg p-4">
            <h3 className="font-bold text-yellow-800">قبل الجهد (ما قبل المنافسة)</h3>
            <p className="text-yellow-900 text-sm">تدليك تحضيري: قصير (10-15 دقيقة)، تقنيات ديناميكية. الهدف: تنشيط الدورة الدموية وإيقاظ الجهاز العصبي العضلي. لا تدليك عميق (خطر الاسترخاء الزائد).</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-800">بعد الجهد (الاستشفاء)</h3>
            <p className="text-green-900 text-sm">تدليك تعافوي: 20-40 دقيقة، تقنيات بطيئة وعميقة. مثاليًا في أول ساعتين بعد الجهد. الهدف: التخلص من الفضلات الأيضية، ارتخاء العضلات المتعبة.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-blue-800">صيانة (بين الجلسات)</h3>
            <p className="text-blue-900 text-sm">تدليك وقائي: 1-2 مرات أسبوعيًا. عمل على مناطق التوتر المزمن. الوقاية من إصابات الإجهاد المتكرر.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold">خصوصيات حسب الرياضة</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-orange-50 rounded-lg p-4">
            <h3 className="font-bold text-orange-800 mb-2">🏃 العدّاؤون</h3>
            <ul className="list-disc pl-4 space-y-1 text-orange-900 text-sm">
              <li>عضلات الساق والنعل (الضغط المتكرر على الكعب)</li>
              <li>لفافة القدم الخضعية (وقاية من الشوكة العقبية)</li>
              <li>الفخذان والأوتار الخلفية</li>
              <li>المقعدة (مثبتات الحوض)</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-800 mb-2">⚽ لاعبو كرة القدم</h3>
            <ul className="list-disc pl-4 space-y-1 text-green-900 text-sm">
              <li>العضلات المقرِّبة (ضربات، تحركات جانبية)</li>
              <li>الأوتار الخلفية (عدو متكرر)</li>
              <li>الرباعية الرؤوس (تسديدات، تسارع)</li>
              <li>الرقبة والعضلة الظهرية (لعب الرأس)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 border-r-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">الدور المحوري للترويض الطبي</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>تقييم منتظم للتوترات العضلية:</strong> المعالج يكتشف التشنجات قبل أن تتحول لتمزقات.</li>
          <li><strong>تقنيات تكاملية:</strong> تمطيط، تحريك مفصلي، عمل لفافي — تُدمج مع التدليك لأقصى تأثير.</li>
          <li><strong>تعليم الرياضي:</strong> تدليك ذاتي بأسطوانة رولر، المناطق التي يجب التركيز عليها، التكرار الأمثل.</li>
          <li><strong>تمييز علاجي:</strong> المعالج يميز بين تشنج حميد وبداية تمزق — حاسم لتجنب تفاقم الإصابة.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">التدليك بدون برنامج تدريبي مناسب وتعافٍ شامل لا يكفي. إنه جزء من منظومة — لا حلًا معزولًا.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'dechirures-musculaires-footballeurs', titleFr: 'Déchirures des footballeurs', titleAr: 'تمزقات لاعبي كرة القدم', icon: <Activity size={20} className="text-medical-600" /> },
    { slug: 'recuperation-sportive-prevention-blessures', titleFr: 'Récupération sportive', titleAr: 'الاستشفاء الرياضي', icon: <CheckCircle size={20} className="text-medical-600" /> },
    { slug: 'choisir-chaussures-running', titleFr: 'Choisir ses chaussures de running', titleAr: 'اختيار حذاء الركض', icon: <Zap size={20} className="text-medical-600" /> }
  ]
});

export default article;
