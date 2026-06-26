import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Zap, AlertTriangle, CheckCircle, Stethoscope, Activity } from 'lucide-react';

const article = createArticle({
  slug: 'entorses-types-classification-cat',
  titleFr: 'Entorses: Types, Classification et Conduite à Tenir pour Chaque Grade',
  titleAr: 'الالتواءات: الأنواع والتصنيف والتدبير لكل درجة',
  descriptionFr: 'Guide complet sur les entorses: grade 1, 2 et 3, toutes les articulations (cheville, genou, poignet...), conduite à tenir immédiate et rôle de la kinésithérapie.',
  descriptionAr: 'دليل شامل حول الالتواءات: الدرجات 1 و2 و3، جميع المفاصل (كاحل، ركبة، معصم...)، التدبير الفوري ودور الترويض الطبي.',
  keywordsFr: 'entorse grade 1 2 3, conduite tenir entorse, CAT entorse cheville genou, traitement entorse urgence, classification entorse',
  keywordsAr: 'التواء درجة 1 2 3, تدبير التواء, CAT التواء كاحل ركبة, علاج التواء الطوارئ, تصنيف الالتواء',
  imageFr: 'https://picsum.photos/seed/entorse-types-cat-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/entorse-types-cat-chnider/1600/900',
  readTimeFr: '10 min de lecture',
  readTimeAr: '10 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Zap className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">Définition: qu'est-ce qu'une entorse?</h2>
        </div>
        <p className="text-blue-900 leading-relaxed">
          Une <strong>entorse</strong> est une lésion traumatique d'un ou plusieurs ligaments d'une articulation,
          causée par un mouvement forcé au-delà des amplitudes physiologiques normales.
          Contrairement à une luxation (l'os "sort"), dans l'entorse l'articulation reste en place
          mais le ligament est distordu, déchiré partiellement ou totalement.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">Classification universelle: les 3 grades</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              grade: 'Grade I — Entorse bénigne',
              desc: 'Distension sans rupture des fibres ligamentaires.',
              symptomes: 'Douleur légère, légère tuméfaction, pas d\'instabilité, appui possible.',
              cat: 'PEACE&LOVE, bandage, kiné précoce, reprise activité sous 1-3 semaines.',
              color: 'green'
            },
            {
              grade: 'Grade II — Entorse modérée',
              desc: 'Rupture partielle des fibres (30-70%).',
              symptomes: 'Douleur vive, gonflement notable, légère instabilité, appui douloureux.',
              cat: 'Immobilisation courte (1-2 semaines), attelle fonctionnelle, kiné 3-6 semaines, retour sport sous 6-8 semaines.',
              color: 'amber'
            },
            {
              grade: 'Grade III — Entorse grave',
              desc: 'Rupture totale du ligament (> 70%).',
              symptomes: 'Douleur sévère ou paradoxalement absente, gonflement rapide, instabilité franche, appui impossible.',
              cat: 'Immobilisation + imagerie (IRM/radio), avis chirurgical, rééducation longue 3-6 mois.',
              color: 'red'
            },
          ].map(({ grade, desc, symptomes, cat, color }) => (
            <div key={grade} className={`bg-${color}-50 border border-${color}-200 rounded-lg p-4`}>
              <h3 className={`font-bold text-${color}-900 text-lg mb-2`}>{grade}</h3>
              <p className={`text-${color}-900 text-sm mb-1`}><strong>Lésion:</strong> {desc}</p>
              <p className={`text-${color}-900 text-sm mb-1`}><strong>Symptômes:</strong> {symptomes}</p>
              <p className={`text-${color}-900 text-sm`}><strong>CAT:</strong> {cat}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">CAT par articulation</h2>
        </div>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-medical-800 mb-2">🦶 Entorse de cheville (la plus fréquente: 6 000/jour en France)</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
              <li><strong>Mécanisme:</strong> inversion forcée (pied qui se retourne vers l'intérieur)</li>
              <li><strong>Grade I-II:</strong> PEACE&LOVE immédiat, attelle, mise en charge progressive dès J2-J3, kiné proprioceptive.</li>
              <li><strong>Grade III:</strong> radio de cheville (règle d'Ottawa!), immobilisation 3 semaines, rééducation 6-8 semaines. Chirurgie rare.</li>
              <li><strong>⚠️ Règle d'Ottawa:</strong> Radio si douleur sur la malléole + incapacité de faire 4 pas. Toujours appliquer!</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-medical-800 mb-2">🦵 Entorse du genou</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
              <li><strong>Mécanisme:</strong> valgus/varus forcé, pivot</li>
              <li><strong>Grade I-II LCM:</strong> attelle articulée, kiné 4-8 semaines.</li>
              <li><strong>Grade III + LCA:</strong> IRM obligatoire, discussion chirurgicale.</li>
              <li><strong>⚠️ Toujours évaluer les croisés et les ménisques!</strong></li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-medical-800 mb-2">🤚 Entorse du poignet/doigts</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
              <li><strong>Mécanisme:</strong> chute sur paume, doigt coincé dans ballon</li>
              <li><strong>Grade I-II:</strong> buddy-taping, glaçage, kiné de la mobilité et de la proprioception.</li>
              <li><strong>Grade III doigt:</strong> risque de lésion du tendon extenseur (maillet). Radio + avis chirurgical.</li>
              <li><strong>⚠️ Ne jamais "remettre" soi-même un doigt luxé!</strong></li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-medical-800 mb-2">🦾 Entorse de l'épaule / acromio-claviculaire</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
              <li><strong>Mécanisme:</strong> choc sur l'épaule, chute sur le coude</li>
              <li><strong>Grade I-II:</strong> écharpe 2-3 semaines, kiné mobilité et force.</li>
              <li><strong>Grade III-V:</strong> discussion chirurgicale selon activité et instabilité.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Ce qu'il ne faut JAMAIS faire lors d'une entorse</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li>❌ Continuer à jouer "pour finir le match" — aggrave considérablement la lésion</li>
          <li>❌ Masser immédiatement — risque d'augmenter l'hématome en phase aiguë</li>
          <li>❌ Prendre des anti-inflammatoires les 72 premières heures — retarde la cicatrisation</li>
          <li>❌ Immerger dans l'eau chaude — vasodilatation = plus de gonflement</li>
          <li>❌ "Forcer" la mobilisation trop tôt sans bilan</li>
          <li>❌ Reprendre le sport sur "je n'ai plus mal" sans tests objectifs</li>
        </ul>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">Rôle primordial de la kinésithérapie</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>Évaluation précise du grade:</strong> la distinction grade II/III est clinique et oriente toute la prise en charge.</li>
          <li><strong>Protocole anti-inflammatoire adapté:</strong> selon le grade, techniques manuelles, drainage, physiothérapie.</li>
          <li><strong>Proprioception dès J3-J5:</strong> exercices sur plan instable pour la cheville — la proprioception précoce réduit 40% les récidives.</li>
          <li><strong>Renforcement progressif:</strong> les muscles compensent le ligament blessé pendant la cicatrisation.</li>
          <li><strong>Programme de prévention des récidives:</strong> 70% des entorses de cheville récidivent sans programme spécifique!</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">Une entorse "guérie" sans rééducation est une entorse qui récidivera. Le kiné ne traite pas que la blessure — il traite la cause et prévient la suivante.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Zap className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">تعريف: ما هو الالتواء؟</h2>
        </div>
        <p className="text-blue-900 leading-relaxed">
          <strong>الالتواء</strong> هو إصابة رضية لرباط أو أكثر في مفصل ما، ناجمة عن حركة قسرية تتجاوز النطاق الطبيعي.
          على عكس الخلع (العظم "يخرج")، في الالتواء يبقى المفصل في مكانه لكن الرباط يتمطط أو يتمزق جزئيًا أو كليًا.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">التصنيف العالمي: الدرجات الثلاث</h2>
        </div>
        <div className="space-y-4">
          {[
            { grade: 'الدرجة الأولى — التواء بسيط', desc: 'تمدد دون تمزق للألياف الرباطية.', symptomes: 'ألم خفيف، تورم طفيف، لا تزعزع، الوطء ممكن.', cat: 'PEACE&LOVE، ضمادة، ترويض مبكر، عودة للنشاط في 1-3 أسابيع.', color: 'green' },
            { grade: 'الدرجة الثانية — التواء معتدل', desc: 'تمزق جزئي للألياف (30-70%).', symptomes: 'ألم حاد، انتفاخ ملحوظ، تزعزع طفيف، الوطء مؤلم.', cat: 'تثبيت قصير (1-2 أسبوعين)، جبيرة وظيفية، ترويض 3-6 أسابيع.', color: 'amber' },
            { grade: 'الدرجة الثالثة — التواء حاد', desc: 'تمزق كلي للرباط (> 70%).', symptomes: 'ألم شديد أو غيابه مفارقةً، انتفاخ سريع، تزعزع واضح، استحالة الوطء.', cat: 'تثبيت + تصوير (IRM/راديو)، رأي جراحي، تأهيل طويل 3-6 أشهر.', color: 'red' },
          ].map(({ grade, desc, symptomes, cat, color }) => (
            <div key={grade} className={`bg-${color}-50 border border-${color}-200 rounded-lg p-4`}>
              <h3 className={`font-bold text-${color}-900 text-lg mb-2`}>{grade}</h3>
              <p className={`text-${color}-900 text-sm mb-1`}><strong>الإصابة:</strong> {desc}</p>
              <p className={`text-${color}-900 text-sm mb-1`}><strong>الأعراض:</strong> {symptomes}</p>
              <p className={`text-${color}-900 text-sm`}><strong>التدبير:</strong> {cat}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">ما يجب عدم فعله أبدًا عند التواء</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li>❌ الاستمرار في اللعب "لإنهاء المباراة" — يُفاقم الإصابة بشكل كبير</li>
          <li>❌ التدليك الفوري — يزيد الورم الدموي في المرحلة الحادة</li>
          <li>❌ تناول مضادات الالتهاب في أول 72 ساعة — يُبطئ الالتئام</li>
          <li>❌ الغمس في الماء الحار — توسع وعائي = انتفاخ أكثر</li>
          <li>❌ العودة للرياضة على "لم أعد أتألم" بدون اختبارات موضوعية</li>
        </ul>
      </section>

      <section className="bg-emerald-50 border-r-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">الدور المحوري للترويض الطبي</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>تقييم دقيق للدرجة:</strong> التمييز بين الدرجة الثانية والثالثة سريري ويوجّه كل التدبير.</li>
          <li><strong>بروتوكول مضاد للالتهاب:</strong> تقنيات يدوية، صرف، علاج فيزيائي.</li>
          <li><strong>حس عميق مبكر من اليوم 3-5:</strong> تمارين على سطح غير مستقر تقلل الانتكاس بـ40%.</li>
          <li><strong>تقوية تدريجية:</strong> العضلات تُعوّض الرباط المصاب أثناء الالتئام.</li>
          <li><strong>برنامج منع التكرار:</strong> 70% من التواءات الكاحل تتكرر بدون برنامج نوعي!</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">التواء "شُفي" بدون تأهيل هو التواء سيتكرر. المعالج لا يعالج الجرح فحسب — يعالج السبب ويمنع القادم.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'elongation-lca-lcp', titleFr: 'Élongation LCA/LCP', titleAr: 'تمدد الرباط الصليبي', icon: <Activity size={20} className="text-medical-600" /> },
    { slug: 'entorse-cheville-kinesitherapie', titleFr: 'Entorse de cheville', titleAr: 'التواء الكاحل', icon: <Zap size={20} className="text-medical-600" /> },
    { slug: 'dechirures-musculaires-footballeurs', titleFr: 'Déchirures des footballeurs', titleAr: 'تمزقات لاعبي كرة القدم', icon: <CheckCircle size={20} className="text-medical-600" /> }
  ]
});

export default article;
