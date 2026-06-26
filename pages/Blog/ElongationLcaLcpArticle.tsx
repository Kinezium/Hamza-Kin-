import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Bone, AlertTriangle, CheckCircle, Stethoscope, Activity } from 'lucide-react';

const article = createArticle({
  slug: 'elongation-lca-lcp',
  titleFr: 'Élongation LCA/LCP: Quand le Ligament s Étire Sans Rompre',
  titleAr: 'تمدد الرباط الصليبي: حين يتمطط الرباط دون أن يتمزق',
  descriptionFr: 'L élongation ligamentaire (grade I): symptômes, traitement conservateur, délais de guérison et comment prévenir l évolution vers une rupture partielle ou totale.',
  descriptionAr: 'التمدد الرباطي (الدرجة الأولى): الأعراض، العلاج المحافظ، آجال الشفاء وكيفية الوقاية من التطور نحو تمزق جزئي أو كلي.',
  keywordsFr: 'élongation ligament genou, distorsion LCA, grade I ligamentaire, entorse bénigne genou, traitement élongation ligament',
  keywordsAr: 'تمدد رباط الركبة, إجهاد رباطي, درجة أولى رباط, التواء بسيط ركبة, علاج تمدد الرباط',
  imageFr: 'https://picsum.photos/seed/elongation-lca-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/elongation-lca-chnider/1600/900',
  readTimeFr: '6 min de lecture',
  readTimeAr: '6 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Activity className="text-green-600" size={26} />
          <h2 className="text-2xl font-bold text-green-900">Qu'est-ce qu'une élongation ligamentaire?</h2>
        </div>
        <p className="text-green-900 leading-relaxed">
          Une <strong>élongation ligamentaire</strong> (grade I) correspond à une distension des fibres du ligament
          sans rupture franche. Les fibres s'allongent au-delà de leur élasticité naturelle mais restent
          continues. C'est la blessure ligamentaire la plus bénigne — mais elle ne doit pas être négligée.
        </p>
        <div className="bg-white rounded-lg p-3 mt-3 border border-green-200">
          <p className="text-green-900 font-medium">📐 Rappel: un ligament normal peut s'étirer jusqu'à ~10% de sa longueur. Au-delà → élongation. Au-delà de 30% → rupture partielle.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">Symptômes: reconnaître une élongation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-800 mb-2">✅ Signes d'une élongation (Grade I)</h3>
            <ul className="list-disc pl-4 space-y-1 text-green-900 text-sm">
              <li>Douleur légère à modérée localisée</li>
              <li>Pas ou peu de gonflement</li>
              <li>Stabilité articulaire conservée</li>
              <li>Appui possible (douloureux)</li>
              <li>Pas de craquement audible</li>
              <li>Tests ligamentaires normaux ou légèrement positifs</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-800 mb-2">⚠️ Signes qui doivent alerter (Grade II/III)</h3>
            <ul className="list-disc pl-4 space-y-1 text-red-900 text-sm">
              <li>Craquement net au moment de la blessure</li>
              <li>Gonflement rapide et important</li>
              <li>Impossibilité d'appui</li>
              <li>Sensation que "le genou part de côté"</li>
              <li>Douleur sévère immédiate</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Traitement de l'élongation LCA/LCP</h2>
        </div>
        <p className="mb-4 font-medium">Le protocole PEACE & LOVE remplace le RICE classique:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-2">PEACE (premières 72h)</h3>
            <ul className="list-none space-y-1 text-blue-900 text-sm">
              <li><strong>P</strong>rotect — Décharger le membre</li>
              <li><strong>E</strong>levate — Suréléver</li>
              <li><strong>A</strong>void anti-inflammatoires</li>
              <li><strong>C</strong>ompress — Bandage compressif</li>
              <li><strong>E</strong>ducate — Comprendre la blessure</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-800 mb-2">LOVE (après 72h)</h3>
            <ul className="list-none space-y-1 text-green-900 text-sm">
              <li><strong>L</strong>oad — Chargement progressif</li>
              <li><strong>O</strong>ptimism — Avoir confiance</li>
              <li><strong>V</strong>ascularisation — Activité cardio légère</li>
              <li><strong>E</strong>xercise — Exercices spécifiques</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-amber-50 rounded-lg p-4">
          <p className="text-amber-900"><strong>Délai de récupération:</strong> 1-3 semaines pour un sportif. Retour progressif avec attelle si besoin. NE PAS utiliser de glace sur articulation (risque de ralentissement de cicatrisation selon nouvelles données).</p>
        </div>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">Rôle primordial de la kinésithérapie</h2>
        </div>
        <p className="mb-3 text-emerald-900">Même pour une élongation "bénigne", la kiné fait la différence:</p>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>Évaluation précise du grade:</strong> le kiné confirme qu'il s'agit bien d'un grade I et pas d'une rupture partielle sous-estimée.</li>
          <li><strong>Guidance du protocole PEACE&LOVE:</strong> on ne fait pas "n'importe quoi". Chaque étape est encadrée.</li>
          <li><strong>Exercices de proprioception précoces:</strong> même à J3-J5, des exercices légers d'équilibre accélèrent la récupération.</li>
          <li><strong>Prévention de la récidive:</strong> 30-40% des entorses de genou récidivent sans programme de prévention. Le kiné construit ce programme.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">"Ce n'est qu'une petite élongation" est souvent le début d'une rechute plus grave. Prenez-la au sérieux dès le départ.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-green-50 border-r-4 border-green-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Activity className="text-green-600" size={26} />
          <h2 className="text-2xl font-bold text-green-900">ما هو تمدد الرباط؟</h2>
        </div>
        <p className="text-green-900 leading-relaxed">
          <strong>التمدد الرباطي</strong> (الدرجة الأولى) هو امتداد ألياف الرباط ما وراء مرونتها الطبيعية
          دون تمزق فعلي. الألياف تتمطط لكنها تبقى متصلة. إنها الإصابة الرباطية الأبسط — لكنها لا يجب أن تُهمل.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">الأعراض: التعرف على التمدد</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-800 mb-2">✅ علامات التمدد (الدرجة الأولى)</h3>
            <ul className="list-disc pl-4 space-y-1 text-green-900 text-sm">
              <li>ألم خفيف إلى معتدل موضعي</li>
              <li>لا انتفاخ أو انتفاخ طفيف</li>
              <li>استقرار مفصلي محفوظ</li>
              <li>الوطء ممكن (مؤلم)</li>
              <li>لا طقطقة مسموعة</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-800 mb-2">⚠️ علامات تستدعي اليقظة (الدرجة الثانية/الثالثة)</h3>
            <ul className="list-disc pl-4 space-y-1 text-red-900 text-sm">
              <li>طقطقة واضحة لحظة الإصابة</li>
              <li>انتفاخ سريع وكبير</li>
              <li>عدم القدرة على الوطء</li>
              <li>إحساس بأن "الركبة تنهار"</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">علاج التمدد: بروتوكول PEACE & LOVE</h2>
        </div>
        <p className="mb-4">هذا البروتوكول الحديث يحل محل RICE الكلاسيكي:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-2">PEACE (أول 72 ساعة)</h3>
            <ul className="list-none space-y-1 text-blue-900 text-sm">
              <li><strong>P</strong>rotect — حماية الطرف</li>
              <li><strong>E</strong>levate — رفع العضو</li>
              <li><strong>A</strong>void — تجنب مضادات الالتهاب</li>
              <li><strong>C</strong>ompress — ضمادة ضاغطة</li>
              <li><strong>E</strong>ducate — فهم الإصابة</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-800 mb-2">LOVE (بعد 72 ساعة)</h3>
            <ul className="list-none space-y-1 text-green-900 text-sm">
              <li><strong>L</strong>oad — تحميل تدريجي</li>
              <li><strong>O</strong>ptimism — ثقة بالتعافي</li>
              <li><strong>V</strong>ascularisation — نشاط خفيف</li>
              <li><strong>E</strong>xercise — تمارين نوعية</li>
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
          <li><strong>تقييم دقيق للدرجة:</strong> المعالج يُؤكد أنها درجة أولى فعلًا وليس تمزقًا جزئيًا مهمَلًا.</li>
          <li><strong>توجيه بروتوكول PEACE&LOVE:</strong> كل مرحلة تحت إشراف مهني.</li>
          <li><strong>تمارين حس عميق مبكرة:</strong> حتى في اليوم 3-5، تمارين توازن خفيفة تسرّع الشفاء.</li>
          <li><strong>منع التكرار:</strong> 30-40% من التواءات الركبة تتكرر بدون برنامج وقائي.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">"مجرد تمدد بسيط" كثيرًا ما يكون بداية انتكاسة أشد. خذه بجدية من البداية.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'rupture-partielle-vs-totale-ligaments', titleFr: 'Rupture partielle vs totale', titleAr: 'التمزق الجزئي مقابل الكلي', icon: <Bone size={20} className="text-medical-600" /> },
    { slug: 'entorses-types-classification-cat', titleFr: 'Entorses: types et CAT', titleAr: 'الالتواءات: الأنواع والتدبير', icon: <CheckCircle size={20} className="text-medical-600" /> },
    { slug: 'rupture-lca-lcp-genou', titleFr: 'Rupture LCA & LCP', titleAr: 'تمزق الرباط الصليبي', icon: <Activity size={20} className="text-medical-600" /> }
  ]
});

export default article;
