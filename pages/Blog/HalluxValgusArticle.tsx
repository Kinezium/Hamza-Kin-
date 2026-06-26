import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Bone, AlertTriangle, CheckCircle, Stethoscope, Activity } from 'lucide-react';

const article = createArticle({
  slug: 'hallux-valgus-kinesitherapie',
  titleFr: 'Hallux Valgus (Oignon): Traitement sans chirurgie et rôle de la kiné',
  titleAr: 'إبهام القدم الأعرج (Hallux Valgus): العلاج بدون جراحة ودور الترويض الطبي',
  descriptionFr: 'L hallux valgus ou "oignon" du pied: causes, stades d évolution, traitements conservateurs, orthèses correctrices et ce que la kinésithérapie peut vraiment faire.',
  descriptionAr: '"الكعبوب" أو إبهام القدم الأعرج: الأسباب ومراحل التطور والعلاجات المحافظة وأدوات التصحيح وما يمكن للترويض الطبي فعله فعلًا.',
  keywordsFr: 'hallux valgus traitement, oignon pied kiné, correction hallux valgus sans chirurgie, orthèse hallux, douleur gros orteil',
  keywordsAr: 'علاج إبهام أعرج, كعبوب قدم, تصحيح hallux valgus بدون جراحة, جبيرة إبهام, ألم الإبهام',
  imageFr: 'https://picsum.photos/seed/hallux-valgus-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/hallux-valgus-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Bone className="text-red-600" size={26} />
          <h2 className="text-2xl font-bold text-red-900">C'est quoi l'hallux valgus?</h2>
        </div>
        <p className="text-red-900 leading-relaxed">
          L'<strong>hallux valgus</strong> (communément appelé "oignon") est une déformation progressive
          de l'articulation métatarso-phalangienne du gros orteil. Le premier métatarse dévie vers l'intérieur
          (varus métatarsien) et le gros orteil dévie vers l'extérieur (valgus du gros orteil),
          créant une proéminence osseuse douloureuse sur la face interne du pied.
        </p>
        <p className="mt-3 text-red-900 font-medium">
          Prévalence: 23% des adultes entre 18-65 ans, 36% après 65 ans. Les femmes 2-3× plus touchées que les hommes.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">Causes et facteurs de risque</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50 rounded-lg p-4">
            <h3 className="font-bold text-amber-800 mb-2">Facteurs intrinsèques</h3>
            <ul className="list-disc pl-4 space-y-1 text-amber-900 text-sm">
              <li>Hérédité (80% des cas ont des antécédents familiaux)</li>
              <li>Hyperlaxité ligamentaire</li>
              <li>Pied plat</li>
              <li>Index métatarsal (1er métatarse long)</li>
              <li>Arthrite et maladies inflammatoires</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-800 mb-2">Facteurs extrinsèques (évitables!)</h3>
            <ul className="list-disc pl-4 space-y-1 text-red-900 text-sm">
              <li>Chaussures à bout étroit (le principal facteur aggravant)</li>
                <li>Talons hauts (&gt;4cm) portés au quotidien</li>
              <li>Chaussures trop petites</li>
              <li>Station debout prolongée</li>
              <li>Obésité</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Les stades d'évolution</h2>
        </div>
        <div className="space-y-3">
          {[
            { stade: 'Stade 1 (légère) — angle < 20°', desc: 'Légère déviation visible. Douleur minime. Chaussage encore possible. Traitement conservateur: 90% de résultats satisfaisants.', color: 'green' },
            { stade: 'Stade 2 (modérée) — angle 20-40°', desc: 'Déformation visible nette. Douleur à la marche. Difficultés de chaussage. Orthèse, kiné, chaussage adapté recommandés. Chirurgie discutable.', color: 'amber' },
            { stade: 'Stade 3 (sévère) — angle > 40°', desc: 'Déformation majeure. Orteils en griffe associés. Douleur constante. Bursectomie inflammatoire possible. Chirurgie souvent nécessaire.', color: 'red' },
          ].map(({ stade, desc, color }) => (
            <div key={stade} className={`bg-${color}-50 border border-${color}-200 rounded-lg p-4`}>
              <h3 className={`font-bold text-${color}-900 mb-1`}>{stade}</h3>
              <p className={`text-${color}-900 text-sm`}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Traitement conservateur: les options non-chirurgicales</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Orthèse inter-orteils (nuit):</strong> séparateur d'orteil en silicone pour réduire la déviation et la friction.</li>
          <li><strong>Orthèse dynamique (jour):</strong> écarteur avec élastique pour contrer la déviation en actif.</li>
          <li><strong>Semelles sur mesure:</strong> avec barre métatarsale pour soulager l'avant-pied et corriger le pied plat associé.</li>
            <li><strong>Chaussage adapté:</strong> avant-pied large, bout rond, talon &lt; 3cm — changement obligatoire si on veut arrêter la progression.</li>
          <li><strong>Glaçage anti-inflammatoire:</strong> sur la bourse en phase douloureuse.</li>
          <li><strong>Infiltration:</strong> corticoïde local si bursite sévère.</li>
        </ul>
        <div className="bg-amber-50 rounded-lg p-4 mt-4">
          <p className="text-amber-900 font-medium">⚠️ Honnêteté: le traitement conservateur ne fait PAS reculer la déformation. Il la ralentit, la gère et réduit la douleur. La correction chirurgicale reste la seule façon de corriger l'angle anatomique.</p>
        </div>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">Rôle primordial de la kinésithérapie</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>Renforcement des muscles intrinsèques:</strong> le court abducteur de l'hallux est souvent atrophié. Renforcer ce muscle peut stabiliser la déformation et réduire la douleur.</li>
          <li><strong>Mobilisation de l'articulation:</strong> maintenir la mobilité de la métatarso-phalangienne pour éviter l'enraidissement.</li>
          <li><strong>Étirements capsulaires:</strong> assouplir la capsule articulaire pour améliorer la flexion dorsale.</li>
          <li><strong>Travail proprioceptif:</strong> réduire les compensations que le corps fait pour éviter la douleur (marche sur le bord externe du pied).</li>
          <li><strong>Prise en charge post-opératoire:</strong> après chirurgie, la kiné est obligatoire — mobilisation précoce, cicatrisation de qualité, retour à la marche progressive.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">Avec la bonne paire de chaussures, les bonnes orthèses et le programme de kiné adapté, beaucoup de personnes évitent la chirurgie pendant des années — voire indéfiniment pour les stades légers à modérés.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-red-50 border-r-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Bone className="text-red-600" size={26} />
          <h2 className="text-2xl font-bold text-red-900">ما هو إبهام القدم الأعرج؟</h2>
        </div>
        <p className="text-red-900 leading-relaxed">
          <strong>إبهام القدم الأعرج (Hallux valgus)</strong> هو تشوه تدريجي في مفصل قاعدة إبهام القدم.
          المشط الأول ينحرف للداخل والإبهام ينحرف نحو الأصابع الأخرى، مما يُنشئ بروزًا عظميًا مؤلمًا
          في الجانب الداخلي للقدم يُعرف بـ"الكعبوب".
        </p>
        <p className="mt-3 text-red-900 font-medium">
          الانتشار: 23% من البالغين 18-65 عامًا، 36% بعد 65 عامًا. النساء مصابات 2-3 أضعاف الرجال.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">مراحل التطور</h2>
        </div>
        <div className="space-y-3">
          {[
            { stade: 'المرحلة الأولى (خفيفة) — زاوية < 20°', desc: 'انحراف طفيف. ألم بسيط. الإحذاء لا يزال ممكنًا. العلاج المحافظ: 90% نتائج مُرضية.', color: 'green' },
            { stade: 'المرحلة الثانية (معتدلة) — زاوية 20-40°', desc: 'تشوه مرئي واضح. ألم عند المشي. صعوبة في الإحذاء. أدوات تصحيح، ترويض، حذاء مناسب موصى به. الجراحة قابلة للنقاش.', color: 'amber' },
            { stade: 'المرحلة الثالثة (شديدة) — زاوية > 40°', desc: 'تشوه كبير. أصابع مخلبية مصاحبة. ألم مستمر. الجراحة ضرورية غالبًا.', color: 'red' },
          ].map(({ stade, desc, color }) => (
            <div key={stade} className={`bg-${color}-50 border border-${color}-200 rounded-lg p-4`}>
              <h3 className={`font-bold text-${color}-900 mb-1`}>{stade}</h3>
              <p className={`text-${color}-900 text-sm`}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">العلاج المحافظ: الخيارات بدون جراحة</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>فاصل أصابع سيليكوني (ليلي):</strong> يُقلل الانحراف والاحتكاك.</li>
          <li><strong>جبيرة ديناميكية (نهارية):</strong> فاصل بمطاط لمقاومة الانحراف أثناء الحركة.</li>
          <li><strong>نعال مخصصة:</strong> مع عارضة مشطية لتخفيف الضغط وتصحيح القدم المسطحة المصاحبة.</li>
          <li><strong>حذاء مناسب:</strong> مقدمة عريضة، مقدمة مستديرة، كعب أقل من 3 سم — تغيير إلزامي لوقف التطور.</li>
          <li><strong>تبريد مضاد للالتهاب:</strong> على الجراب في المرحلة المؤلمة.</li>
        </ul>
        <div className="bg-amber-50 rounded-lg p-4 mt-4">
          <p className="text-amber-900 font-medium">⚠️ الصدق: العلاج المحافظ لا يُعيد التشوه للوراء. يُبطئه ويُدبّره ويُخفف الألم. التصحيح الجراحي هو الطريقة الوحيدة لتصحيح الزاوية التشريحية.</p>
        </div>
      </section>

      <section className="bg-emerald-50 border-r-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">الدور المحوري للترويض الطبي</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>تقوية العضلات الداخلية للقدم:</strong> عضلة المبعّد القصيرة للإبهام غالبًا ضامرة. تقويتها يُثبّت التشوه ويُقلل الألم.</li>
          <li><strong>تحريك المفصل:</strong> الحفاظ على حركة المفصل لتجنب التيبس.</li>
          <li><strong>تمطيط المحفظة المفصلية:</strong> تليين المحفظة لتحسين الثني الظهري.</li>
          <li><strong>عمل حسي حركي:</strong> تقليل التعويضات (المشي على الحافة الخارجية للقدم).</li>
          <li><strong>تدبير ما بعد الجراحة:</strong> تحريك مبكر، التئام جيد، عودة تدريجية للمشي.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">مع الحذاء الصحيح والأدوات التصحيحية المناسبة وبرنامج الترويض الملائم، كثير من الأشخاص يتجنبون الجراحة لسنوات — بل إلى الأبد في المراحل الخفيفة والمعتدلة.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'deformation-pieds', titleFr: 'Déformations des pieds', titleAr: 'تشوهات القدمين', icon: <Bone size={20} className="text-medical-600" /> },
    { slug: 'epine-calcanienne-sans-ondes-de-choc', titleFr: 'Épine calcanéenne', titleAr: 'الشوكة العقبية', icon: <Activity size={20} className="text-medical-600" /> },
    { slug: 'choisir-chaussures-running', titleFr: 'Chaussures de running', titleAr: 'حذاء الركض', icon: <CheckCircle size={20} className="text-medical-600" /> }
  ]
});

export default article;
