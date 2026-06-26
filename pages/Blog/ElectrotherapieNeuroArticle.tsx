import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Brain, Zap, CheckCircle, XCircle, BookOpen } from 'lucide-react';

const article = createArticle({
  slug: 'electrotherapie-neurologie-utile-ou-non',
  titleFr: 'Électrothérapie et Neurologie: Utile ou Gadget?',
  titleAr: 'العلاج الكهربائي وأمراض الأعصاب: مفيد أم مجرد أداة تسويق؟',
  descriptionFr: 'TENS, EMS, FES après AVC ou SEP: ce que les études scientifiques disent vraiment sur l utilité de l électrothérapie en neurologie. Honnêteté scientifique complète.',
  descriptionAr: 'TENS وEMS وFES بعد الجلطة أو التصلب المتعدد: ما تقوله الدراسات العلمية فعلاً عن فائدة العلاج الكهربائي في أمراض الأعصاب.',
  keywordsFr: 'électrothérapie neurologie, TENS AVC, FES rééducation neurologique, EMS neurologie, stimulation fonctionnelle, SEP électrothérapie',
  keywordsAr: 'علاج كهربائي أعصاب, TENS بعد الجلطة, FES إعادة التأهيل, EMS أعصاب, تحفيز وظيفي, التصلب المتعدد والكهرباء',
  imageFr: 'https://picsum.photos/seed/electro-neuro-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/electro-neuro-chnider/1600/900',
  readTimeFr: '8 min de lecture',
  readTimeAr: '8 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">Le débat au cœur de la neuroréhabilitation</h2>
        </div>
        <p className="text-blue-900 leading-relaxed">
          Un patient après AVC. Des électrodes sur le bras paralysé. Un courant qui fait bouger le poignet.
          Est-ce un traitement révolutionnaire ou une illusion thérapeutique coûteuse? La réponse, comme
          souvent en médecine, est: ça dépend — et voici pourquoi.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">La FES (Stimulation Électrique Fonctionnelle): la star du neuro</h2>
        </div>
        <p className="mb-3">
          La <strong>FES (Functional Electrical Stimulation)</strong> est différente du TENS ou de l'EMS classique.
          Elle synchronise la stimulation électrique avec le mouvement volontaire — elle "assiste" un geste
          que le patient essaie de faire.
        </p>
        <h3 className="font-bold text-lg mb-3">Ce que la science montre:</h3>
        <div className="space-y-3">
          <div className="bg-green-50 rounded p-4">
            <p className="text-green-900">
              ✅ <strong>FES du pied tombant post-AVC:</strong> améliore la marche et réduit la chute du pied.
              Preuves solides, utilisée couramment dans les services de neuro-rééducation.
            </p>
          </div>
          <div className="bg-green-50 rounded p-4">
            <p className="text-green-900">
              ✅ <strong>FES du membre supérieur:</strong> améliore la récupération motrice du bras et de la main
              après AVC, surtout en phase subaiguë (premier mois). Plusieurs essais cliniques randomisés positifs.
            </p>
          </div>
          <div className="bg-amber-50 rounded p-4">
            <p className="text-amber-900">
              ⚠️ <strong>FES vs rééducation seule:</strong> les gains sont souvent modestes. La FES augmente
              l'effet de la rééducation — elle ne la remplace pas. Le bénéfice s'ajoute, ne se substitue pas.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Brain className="text-purple-600" size={24} />
          <h2 className="text-2xl font-bold">TENS en neurologie — Contre la spasticité et la douleur</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-green-50 rounded p-4">
            <p className="text-green-900">
              ✅ <strong>TENS et spasticité:</strong> certaines études montrent une réduction transitoire du tonus
              musculaire spastique après TENS. Utile comme adjuvant avant la kinésithérapie pour faciliter
              les mobilisations.
            </p>
          </div>
          <div className="bg-green-50 rounded p-4">
            <p className="text-green-900">
              ✅ <strong>TENS et douleur centrale post-AVC:</strong> peut aider dans les douleurs neuropathiques
              d'origine centrale — souvent difficiles à traiter par d'autres moyens.
            </p>
          </div>
          <div className="bg-amber-50 rounded p-4">
            <p className="text-amber-900">
              ⚠️ <strong>Effet modéré et variable:</strong> les réponses individuelles varient beaucoup.
              Ce qui fonctionne chez un patient peut ne rien faire chez un autre.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Brain className="text-teal-600" size={24} />
          <h2 className="text-2xl font-bold">Électrothérapie et SEP (Sclérose en Plaques)</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-amber-50 rounded p-4">
            <p className="text-amber-900">
              ⚠️ <strong>Preuves limitées.</strong> Peu d'études de bonne qualité spécifiques à la SEP.
              TENS peut aider les douleurs neuropathiques et la spasticité focale.
              EMS/FES peut maintenir la force musculaire dans les membres atteints.
            </p>
          </div>
          <div className="bg-red-50 rounded p-4">
            <p className="text-red-900">
              ❌ <strong>Point important:</strong> la chaleur exacerbe les symptômes dans la SEP (phénomène
              d'Uhthoff). Certains appareils d'électrothérapie génèrent de la chaleur localement.
              À utiliser avec précaution et surveillance.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">Quand l'électrothérapie ne sert à rien (ou pire)</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Utilisée seule, sans rééducation active</strong> — l'électro sans exercice = machine à perdre du temps et de l'argent.</li>
          <li><strong>Protocoles trop courts</strong> — une seule séance de TENS ne fera pas de miracle.</li>
          <li><strong>Mauvaise localisation des électrodes</strong> — l'effet dépend énormément du placement.</li>
          <li><strong>Patient non motivé/non actif</strong> — l'électrothérapie ne remplace pas l'effort neuronal du patient.</li>
          <li><strong>Attentes irréalistes</strong> — "les électrodes vont refaire marcher mon bras" sans des mois de travail actif = déception assurée.</li>
        </ul>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <CheckCircle className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold text-slate-900">Verdict scientifique honnête</h2>
        </div>
        <p className="mb-4 text-slate-800">
          L'électrothérapie en neurologie n'est pas un gadget inutile — mais elle n'est pas non plus la
          révolution qu'on prétend parfois. Voici les règles d'or:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-800">
          <li>FES du pied tombant: recommandée, preuves solides</li>
          <li>FES membre supérieur post-AVC: bénéfique en complément, preuves modérées</li>
          <li>TENS anti-spastique: adjuvant utile avant kiné, temporaire</li>
          <li>Électrothérapie seule: inutile</li>
          <li>Toujours combiné à la kinésithérapie active: multiplicateur de résultat</li>
        </ul>
        <p className="mt-4 text-slate-800 font-bold">
          La neuroplasticité — la vraie — se construit par la répétition d'efforts actifs, pas par des courants passifs.
        </p>
      </section>

      <section className="bg-slate-50 rounded-lg p-5">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="text-slate-700" size={22} />
          <h2 className="text-xl font-bold text-slate-900">Sources</h2>
        </div>
        <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
          <li>Knutson JS et al. FES for upper extremity function after stroke. Top Stroke Rehabil. 2016.</li>
          <li>Daly JJ & Ruff RL. Electrically induced recovery of gait components. J Rehabil Res Dev. 2000.</li>
          <li>Cochrane: Electrical stimulation for treating pressure ulcers. 2020.</li>
          <li>Bovend'Eerdt TJH et al. Writing SMART rehabilitation goals. Clin Rehabil. 2009.</li>
        </ul>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">النقاش في قلب إعادة التأهيل العصبي</h2>
        </div>
        <p className="text-blue-900 leading-relaxed">
          مريض بعد جلطة. لاصقات كهربائية على ذراعه المشلول. تيار يحرك معصمه.
          هل هذا علاج ثوري أم وهم علاجي مكلف؟ الجواب كما هو الحال دائمًا في الطب: يعتمد —
          وإليك السبب.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">FES — التحفيز الكهربائي الوظيفي: نجم علم الأعصاب</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-green-50 rounded p-4">
            <p className="text-green-900">
              ✅ <strong>FES لتدلي القدم بعد الجلطة:</strong> يحسن المشي ويقلل تدلي القدم. أدلة قوية،
              تُستخدم بانتظام في وحدات إعادة التأهيل العصبي.
            </p>
          </div>
          <div className="bg-green-50 rounded p-4">
            <p className="text-green-900">
              ✅ <strong>FES للطرف العلوي:</strong> يحسن التعافي الحركي للذراع واليد بعد الجلطة،
              خاصة في الشهر الأول. عدة تجارب سريرية عشوائية إيجابية.
            </p>
          </div>
          <div className="bg-amber-50 rounded p-4">
            <p className="text-amber-900">
              ⚠️ <strong>FES مقابل التأهيل وحده:</strong> المكاسب معتدلة عادة.
              FES يضاعف أثر التأهيل — لا يُعوّضه.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Brain className="text-purple-600" size={24} />
          <h2 className="text-2xl font-bold">TENS في طب الأعصاب — ضد التشنج والألم</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-green-50 rounded p-4">
            <p className="text-green-900">
              ✅ <strong>TENS والتشنج العضلي:</strong> بعض الدراسات تُظهر تخفيفًا مؤقتًا للتشنج.
              مفيد كمكمّل قبل جلسة الترويض لتيسير التحريك.
            </p>
          </div>
          <div className="bg-red-50 rounded p-4">
            <p className="text-red-900">
              ❌ <strong>نقطة مهمة حول التصلب المتعدد:</strong> الحرارة تُفاقم الأعراض في التصلب المتعدد
              (ظاهرة أوتوف). بعض أجهزة العلاج الكهربائي تولّد حرارة موضعية.
              يجب استخدامها بحذر وتحت مراقبة.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">حين لا يفيد العلاج الكهربائي (أو يضر)</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>استخدامه وحده بدون تأهيل نشط</strong> — الكهرباء بدون تمرين = إضاعة وقت ومال.</li>
          <li><strong>بروتوكولات قصيرة جدًا</strong> — جلسة TENS واحدة لن تُحدث معجزة.</li>
          <li><strong>توقعات غير واقعية</strong> — "الكهرباء ستُعيد تحريك يدي" بدون أشهر من العمل النشط = خيبة مؤكدة.</li>
          <li><strong>مريض غير متفاعل</strong> — العلاج الكهربائي لا يُعوّض الجهد العصبي للمريض.</li>
        </ul>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <CheckCircle className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold text-slate-900">حكم علمي صريح</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-slate-800">
          <li>FES لتدلي القدم: موصى به، أدلة قوية</li>
          <li>FES الطرف العلوي بعد الجلطة: مفيد كمكمّل، أدلة معقولة</li>
          <li>TENS ضد التشنج: مكمّل مفيد قبل الترويض، مؤقت</li>
          <li>العلاج الكهربائي وحده: بلا فائدة</li>
          <li>دائمًا مع الترويض النشط: يضاعف النتيجة</li>
        </ul>
        <p className="mt-4 text-slate-800 font-bold">
          اللدونة العصبية الحقيقية تُبنى بتكرار الجهد النشط، لا بالتيارات السلبية.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'electrotherapie-tens-ems-microcourant', titleFr: 'TENS, EMS, Microcourant', titleAr: 'TENS وEMS والتيار الدقيق', icon: <Zap size={20} className="text-medical-600" /> },
    { slug: 'spasticite-definition-traitement-indications', titleFr: 'Spasticité: définition et traitement', titleAr: 'التشنج العضلي', icon: <Brain size={20} className="text-medical-600" /> },
    { slug: 'readaptation-post-avc', titleFr: 'Réadaptation Post-AVC', titleAr: 'إعادة التأهيل ما بعد الجلطة', icon: <Brain size={20} className="text-medical-600" /> }
  ]
});

export default article;
