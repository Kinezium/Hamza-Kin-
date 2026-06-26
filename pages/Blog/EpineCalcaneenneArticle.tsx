import React from 'react';
import { createArticle } from './ArticleTemplate';
import { AlertTriangle, CheckCircle, Stethoscope, Activity, Zap } from 'lucide-react';

const article = createArticle({
  slug: 'epine-calcanienne-sans-ondes-de-choc',
  titleFr: 'Épine Calcanéenne: Traitement sans Ondes de Choc — Ce qui marche vraiment',
  titleAr: 'الشوكة العقبية: العلاج بدون موجات صوتية — ما ينجح فعلاً',
  descriptionFr: 'Fasciite plantaire et épine calcanéenne: causes, mécanismes, et tous les traitements efficaces sans ondes de choc — étirements, kiné, semelles, injections. Guide complet.',
  descriptionAr: 'التهاب اللفافة الخضعية والشوكة العقبية: الأسباب والآليات وجميع العلاجات الفعالة بدون موجات صوتية — تمطيط، ترويض، نعال، حقن. دليل شامل.',
  keywordsFr: 'épine calcanéenne traitement, fasciite plantaire sans ondes de choc, douleur talon matin, talalgie traitement, kiné pied douleur',
  keywordsAr: 'علاج الشوكة العقبية, التهاب لفافة خضعية بدون موجات صوتية, ألم الكعب الصباحي, علاج كعب ألم, ترويض طبي قدم ألم',
  imageFr: 'https://picsum.photos/seed/epine-calcaneenne-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/epine-calcaneenne-chnider/1600/900',
  readTimeFr: '8 min de lecture',
  readTimeAr: '8 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-amber-600" size={26} />
          <h2 className="text-2xl font-bold text-amber-900">La douleur au talon du matin: ce que vous vivez</h2>
        </div>
        <p className="text-amber-900 leading-relaxed">
          Vous vous levez le matin. Vous posez le pied par terre. Et là — une douleur intense sous le talon,
          comme si on plantait un couteau. Elle s'atténue après quelques minutes de marche, puis revient
          après une longue station assise. Ce tableau classique, c'est la <strong>fasciite plantaire</strong>,
          souvent associée à une <strong>épine calcanéenne</strong>.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Comprendre: épine calcanéenne vs fasciite plantaire</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-2">Fasciite plantaire</h3>
            <p className="text-blue-900 text-sm">Inflammation de la lame fibreuse (fascia plantaire) qui relie le calcanéum aux orteils. C'est la CAUSE de la douleur dans 80-90% des talalgies. L'épine calcanéenne est souvent une CONSÉQUENCE, pas la cause principale.</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <h3 className="font-bold text-amber-800 mb-2">Épine calcanéenne</h3>
            <p className="text-amber-900 text-sm">Dépôt osseux (ostéophyte) formé au point d'insertion du fascia sur le calcanéum. Présente chez 50% des adultes avec fasciite — mais aussi chez 15% des gens sans douleur! L'épine n'est donc pas forcément LA cause de la douleur.</p>
          </div>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 mt-4">
          <p className="text-slate-900 font-medium">💡 L'important: traiter le fascia, pas l'épine. La plupart des chirurgies qui "retirent l'épine" échouent si elles ne traitent pas le fascia sous-jacent.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Causes et facteurs de risque</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li>Surcharge mécanique chronique (marche/course prolongée, terrain dur)</li>
          <li>Raideur du soléaire et du tendon d'Achille</li>
          <li>Pied plat (pronation excessive = étirement chronique du fascia)</li>
          <li>Pied creux (rigidité = mauvaise absorption des chocs)</li>
          <li>Chaussures sans soutien ou semelle trop rigide</li>
          <li>Surpoids (augmentation de la charge sur le fascia)</li>
          <li>Marche pieds nus sur carrelage dur le matin</li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold">Traitements efficaces — sans ondes de choc</h2>
        </div>
        <p className="mb-4 text-gray-700 font-medium">Les ondes de choc sont efficaces mais non remboursées et pas toujours accessibles. Voici ce qui marche aussi:</p>
        <div className="space-y-3">
          {[
            { titre: '1. Étirements spécifiques (première ligne — niveau de preuve élevé)', desc: 'Étirement du fascia plantaire: assis, croiser la cheville sur le genou, tirer les orteils vers vous pendant 30 secondes × 3 répétitions × 3 fois/jour. À faire surtout avant les premiers pas du matin.', efficacite: 'Efficacité prouvée: réduction de 85% des symptômes à 8 semaines.' },
            { titre: '2. Étirements du soléaire et du mollet', desc: 'Raideur du soléaire = facteur causal majeur. Étirement talon au sol, genou légèrement fléchi, pendant 45 secondes.', efficacite: 'Indispensable — souvent négligé.' },
            { titre: '3. Semelles orthopédiques ou talonnettes', desc: 'Coussin de talon en silicone (5-8mm) réduit la tension sur le fascia. Semelles sur mesure si pied plat ou creux associé.', efficacite: 'Bonne efficacité à court terme pour la douleur.' },
            { titre: '4. Exercices excentriques du soléaire', desc: 'Descente du talon au bord d\'une marche: 3 séries × 15 répétitions, 2 fois/jour. Programme Alfredson modifié.', efficacite: 'Preuves solides à moyen terme.' },
            { titre: '5. Kiné manuelle et massage du fascia', desc: 'Massage transversal profond du fascia, mobilisation de la cheville, triggers du soléaire. En cabinet, 8-12 séances suffisent souvent.', efficacite: 'Efficacité prouvée en complément des étirements.' },
            { titre: '6. Attelle de nuit', desc: 'Maintient le pied en légère flexion dorsale pendant le sommeil — empêche le fascia de "se contracter" au repos. Réduit la douleur matinale.', efficacite: 'Efficacité modérée mais bien tolérée.' },
            { titre: '7. Infiltration de corticoïdes', desc: 'Réservée aux cas résistants. Effet à court terme bon (3 mois), mais risque de rupture du fascia à long terme si répétée.', efficacite: 'Bonne à court terme, prudemment utilisée.' },
          ].map(({ titre, desc, efficacite }) => (
            <div key={titre} className="border border-green-200 bg-green-50 rounded-lg p-4">
              <h3 className="font-bold text-green-900 mb-1">{titre}</h3>
              <p className="text-green-900 text-sm mb-1">{desc}</p>
              <p className="text-green-800 text-sm font-medium italic">{efficacite}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">Rôle primordial de la kinésithérapie</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>Bilan étiologique précis:</strong> identifier si c'est bien une fasciite ou une autre cause (tendinopathie d'Achille, douleur nerveuse, fracture de stress).</li>
          <li><strong>Programme personnalisé:</strong> étirements, exercices excentriques, massages — adaptés à votre profil (sportif, sédentaire, pied plat ou creux).</li>
          <li><strong>Conseil chaussage et semelles:</strong> la bonne semelle fait souvent la moitié du traitement.</li>
          <li><strong>Éducation du patient:</strong> éviter les erreurs (marcher pieds nus le matin, trop en faire trop vite).</li>
          <li><strong>Monitoring:</strong> si 8 semaines de traitement bien conduit sans amélioration, réévaluation et adaptation nécessaires.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">La fasciite plantaire répond bien à la kinésithérapie bien conduite. Dans 85-90% des cas, la chirurgie peut être évitée avec un traitement conservateur rigoureux.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-amber-50 border-r-4 border-amber-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-amber-600" size={26} />
          <h2 className="text-2xl font-bold text-amber-900">ألم الكعب الصباحي: ما تعيشه</h2>
        </div>
        <p className="text-amber-900 leading-relaxed">
          تستيقظ صباحًا. تضع قدمك على الأرض. وهنا — ألم حاد تحت الكعب كأن سكينًا تُغرز فيه.
          يخفّ بعد بضع دقائق من المشي، ثم يعود بعد جلسة طويلة.
          هذا هو <strong>التهاب اللفافة الخضعية</strong>، كثيرًا ما يصاحبه <strong>شوكة عقبية</strong>.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">الفهم: الشوكة العقبية مقابل التهاب اللفافة الخضعية</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-2">التهاب اللفافة الخضعية</h3>
            <p className="text-blue-900 text-sm">التهاب في اللوح الليفي (اللفافة الخضعية) الذي يربط عظمة الكعب بالأصابع. هذا هو السبب الرئيسي للألم في 80-90% من حالات ألم الكعب.</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <h3 className="font-bold text-amber-800 mb-2">الشوكة العقبية</h3>
            <p className="text-amber-900 text-sm">نتوء عظمي (نابتة عظمية) يتشكل عند نقطة التصاق اللفافة بالكعب. موجودة عند 50% من المصابين بالتهاب اللفافة — لكن أيضًا عند 15% من الأشخاص بدون ألم! الشوكة ليست بالضرورة السبب الرئيسي للألم.</p>
          </div>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 mt-4">
          <p className="text-slate-900 font-medium">💡 المهم: علاج اللفافة، لا الشوكة. معظم الجراحات التي "تزيل الشوكة" تفشل إن لم تعالج اللفافة المصابة تحتها.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold">علاجات فعالة — بدون موجات صوتية</h2>
        </div>
        <div className="space-y-3">
          {[
            { titre: '1. تمطيط نوعي (الخط الأول — أدلة قوية)', desc: 'تمطيط اللفافة الخضعية: جالسًا، ضع كاحلك على ركبتك، اشدّ أصابعك نحوك 30 ثانية × 3 تكرارات × 3 مرات يوميًا. الأهم: قبل أولى خطواتك صباحًا.', efficacite: 'فعالية مثبتة: تراجع 85% من الأعراض في 8 أسابيع.' },
            { titre: '2. تمطيط عضلة النعل والساق', desc: 'تصلب عضلة النعل عامل سببي رئيسي. تمطيط الكعب على الأرض، ركبة مثنية قليلًا، 45 ثانية.', efficacite: 'لا غنى عنه — يُهمل كثيرًا.' },
            { titre: '3. نعال بيوميكانيكية أو وسادة كعب', desc: 'وسادة كعب سيليكونية (5-8mm) تُقلل الشد على اللفافة. نعال مخصصة إن كانت القدم مسطحة أو مجوفة.', efficacite: 'فعالية جيدة في تخفيف الألم قصير المدى.' },
            { titre: '4. تمارين لامركزية لعضلة النعل', desc: 'نزول الكعب على حافة درج: 3 سلاسل × 15 تكرارًا، مرتين يوميًا.', efficacite: 'أدلة قوية على المدى المتوسط.' },
            { titre: '5. ترويض يدوي وتدليك اللفافة', desc: 'تدليك عميق عرضي للفافة، تحريك الكاحل، نقاط التحفيز في النعل.', efficacite: 'فعالية مثبتة كمكمّل للتمطيط.' },
          ].map(({ titre, desc, efficacite }) => (
            <div key={titre} className="border border-green-200 bg-green-50 rounded-lg p-4">
              <h3 className="font-bold text-green-900 mb-1">{titre}</h3>
              <p className="text-green-900 text-sm mb-1">{desc}</p>
              <p className="text-green-800 text-sm font-medium italic">{efficacite}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50 border-r-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">الدور المحوري للترويض الطبي</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>تقييم سببي دقيق:</strong> التأكد من أنها التهاب لفافة فعلًا وليس سببًا آخر (التهاب وتر أخيل، ألم عصبي، كسر إجهادي).</li>
          <li><strong>برنامج مخصص:</strong> تمطيط وتمارين لامركزية وتدليك — مُكيَّف مع ملفك (رياضي، قليل الحركة، قدم مسطحة أو مجوفة).</li>
          <li><strong>نصائح الإحذاء والنعال:</strong> النعل المناسب يُحدث نصف العلاج.</li>
          <li><strong>تثقيف المريض:</strong> تجنب الأخطاء (المشي حافيًا على البلاط صباحًا، الإفراط في النشاط).</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">التهاب اللفافة الخضعية يستجيب جيدًا للترويض الطبي الجيد. في 85-90% من الحالات، يمكن تجنب الجراحة بعلاج محافظ دقيق.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'deformation-pieds', titleFr: 'Déformations des pieds', titleAr: 'تشوهات القدمين', icon: <Activity size={20} className="text-medical-600" /> },
    { slug: 'choisir-chaussures-running', titleFr: 'Chaussures de running', titleAr: 'حذاء الركض', icon: <Zap size={20} className="text-medical-600" /> },
    { slug: 'hallux-valgus-kinesitherapie', titleFr: 'Hallux valgus', titleAr: 'إبهام القدم الأعرج', icon: <CheckCircle size={20} className="text-medical-600" /> }
  ]
});

export default article;
