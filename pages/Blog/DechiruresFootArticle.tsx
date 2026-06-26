import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Activity, AlertTriangle, CheckCircle, Stethoscope, Zap } from 'lucide-react';

const article = createArticle({
  slug: 'dechirures-musculaires-footballeurs',
  titleFr: 'Déchirures Musculaires des Footballeurs: Prévention et Récupération',
  titleAr: 'التمزقات العضلية عند لاعبي كرة القدم: الوقاية والتعافي',
  descriptionFr: 'Élongation, claquage, déchirure partielle ou totale: les blessures musculaires les plus fréquentes au football, comment les reconnaître et se rétablir rapidement.',
  descriptionAr: 'إجهاد عضلي، تمزق جزئي أو كلي: الإصابات العضلية الأكثر شيوعًا في كرة القدم، كيف تتعرف عليها وكيف تتعافى بسرعة.',
  keywordsFr: 'déchirure musculaire football, claquage footballeur, ischio-jambiers blessure, adducteurs déchirure, rééducation musculaire sport',
  keywordsAr: 'تمزق عضلي كرة القدم, إجهاد عضلي لاعب, إسكيو جامبييرز إصابة, عضلات الفخذ تمزق, تأهيل عضلي رياضي',
  imageFr: 'https://picsum.photos/seed/dechirure-foot-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/dechirure-foot-chnider/1600/900',
  readTimeFr: '8 min de lecture',
  readTimeAr: '8 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Activity className="text-red-600" size={26} />
          <h2 className="text-2xl font-bold text-red-900">Le fléau des blessures musculaires en football</h2>
        </div>
        <p className="text-red-900 leading-relaxed">
          Les blessures musculaires représentent <strong>30-37% de toutes les blessures au football professionnel</strong>.
          Les ischio-jambiers (arrière de la cuisse) et les adducteurs (intérieur) sont les plus touchés.
          En Liga, Premier League ou Ligue 1, chaque club perd en moyenne 8-12 semaines par joueur blessé musculairement par saison.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">Classification des blessures musculaires</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-800">Grade 1 — Élongation (micro-déchirures)</h3>
            <p className="text-green-900 text-sm">Quelques fibres lésées (&lt;5%). Sensation de "coup de couteau" pendant l'effort. Douleur légère au toucher. Appui possible. Retour sport: 5-10 jours.</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <h3 className="font-bold text-amber-800">Grade 2 — Déchirure partielle</h3>
            <p className="text-amber-900 text-sm">5-50% des fibres rompues. Douleur vive soudaine. Hématome possible. Boiterie. Retour sport: 3-6 semaines selon grade 2a, 2b, 2c.</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-800">Grade 3 — Déchirure totale</h3>
            <p className="text-red-900 text-sm">&gt;50% ou rupture complète. Hématome volumineux ("marque de balle de tennis"). Perte de force importante. Parfois chirurgical. Retour sport: 2-6 mois.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">Les muscles les plus touchés et pourquoi</h2>
        </div>
        <div className="space-y-3">
          {[
            { muscle: 'Ischio-jambiers (52% des blessures musculaires)', raison: 'Sprints répétés, décélération, changements de direction. Double fonction (flexion genou + extension hanche) = grande sollicitation.', traitement: 'Programme nordique, stretching excentrique.' },
            { muscle: 'Adducteurs (23%)', raison: 'Tirs, changements de direction, écarts latéraux brusques.', traitement: 'Renforcement adducteurs en excentrique, programme "Copenhague".' },
            { muscle: 'Quadriceps (19%)', raison: 'Tirs puissants, accélérations brutales.', traitement: 'Renforcement progressif, travail en course.' },
            { muscle: 'Jumeaux/soléaire (6%)', raison: 'Appels de sprint, pointe de pied.', traitement: 'Exercice excentrique talon sur marche.' },
          ].map(({ muscle, raison, traitement }) => (
            <div key={muscle} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-medical-800 mb-1">{muscle}</h3>
              <p className="text-gray-700 text-sm mb-1"><strong>Pourquoi:</strong> {raison}</p>
              <p className="text-gray-600 text-sm"><strong>Prévention:</strong> {traitement}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Critères de retour au sport — l'erreur à éviter</h2>
        </div>
        <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-4">
          <p className="text-red-900 font-bold">❌ L'erreur la plus commune: revenir trop tôt sur "je ne sens plus la douleur".</p>
          <p className="text-red-900 text-sm mt-2">Le tissu cicatriciel n'est pas du muscle fonctionnel. Sans les bons tests, la récidive dans les 2 semaines est de 25-30%.</p>
        </div>
        <p className="font-medium mb-3">Critères objectifs validés pour retour au terrain:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Force musculaire ≥90% du côté sain (dynamométrie)</li>
          <li>Test "Askling" (allongement actif des ischio sans douleur)</li>
          <li>Sprint progressif jusqu'à 100% de vitesse sans douleur</li>
          <li>Tests fonctionnels: changements de direction, dribble, tir</li>
          <li>Confiance psychologique du joueur dans son muscle</li>
        </ul>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">Rôle primordial de la kinésithérapie</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>Phase aiguë (J0-J3):</strong> PEACE&LOVE, drainage lymphatique, électrothérapie anti-algique, prévention de l'atrophie du reste du membre.</li>
          <li><strong>Phase cicatricielle (J3-J14):</strong> exercices excentriques progressifs, massage transversal profond pour orienter les fibres de collagène.</li>
          <li><strong>Phase fonctionnelle:</strong> course progressive, pliométrie, travail spécifique au football.</li>
          <li><strong>Programme préventif:</strong> Nordic Hamstring, programme FIFA 11+ — réduction prouvée de 50% des blessures ischio.</li>
          <li><strong>Bilan de retour sport:</strong> tests objectifs — pas de retour sans validation kinésithérapique.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">Un kiné expérimenté en sport fait la différence entre 3 semaines et 6 semaines d'arrêt. Et entre une récidive et une saison complète.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-red-50 border-r-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Activity className="text-red-600" size={26} />
          <h2 className="text-2xl font-bold text-red-900">آفة الإصابات العضلية في كرة القدم</h2>
        </div>
        <p className="text-red-900 leading-relaxed">
          الإصابات العضلية تمثل <strong>30-37% من جميع إصابات كرة القدم الاحترافية</strong>.
          عضلات الفخذ الخلفية (Ischio-jambiers) والعضلات المقرِّبة (Adducteurs) هي الأكثر تضررًا.
          كل ناد يخسر في المتوسط 8-12 أسبوعًا لكل لاعب مصاب عضليًا في الموسم.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">تصنيف الإصابات العضلية</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-800">الدرجة الأولى — إجهاد (تمزق دقيق)</h3>
            <p className="text-green-900 text-sm">بضع ألياف متضررة (&lt;5%). إحساس بـ"طعنة سكين" أثناء الجهد. ألم خفيف عند اللمس. الوطء ممكن. عودة للرياضة: 5-10 أيام.</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <h3 className="font-bold text-amber-800">الدرجة الثانية — تمزق جزئي</h3>
            <p className="text-amber-900 text-sm">5-50% من الألياف ممزقة. ألم حاد مفاجئ. ورم دموي محتمل. عَرَج. عودة: 3-6 أسابيع.</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-800">الدرجة الثالثة — تمزق كلي</h3>
            <p className="text-red-900 text-sm">&gt;50% أو تمزق كامل. ورم دموي ضخم. ضعف قوة كبير. أحيانًا جراحي. عودة: 2-6 أشهر.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">معايير العودة للملعب — الخطأ الذي يجب تجنبه</h2>
        </div>
        <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-4">
          <p className="text-red-900 font-bold">❌ الخطأ الأكثر شيوعًا: العودة المبكرة بناءً على "لم أعد أشعر بالألم".</p>
          <p className="text-red-900 text-sm mt-2">نسيج الندبة ليس عضلة وظيفية. بدون اختبارات صحيحة، نسبة الانتكاس في الأسبوعين التاليين 25-30%.</p>
        </div>
        <ul className="list-disc pl-6 space-y-1">
          <li>قوة عضلية ≥90% من الجانب السليم (قياس ديناميومتري)</li>
          <li>اختبار أسكلينج (تمديد نشط بدون ألم)</li>
          <li>عدو تدريجي حتى 100% من السرعة بدون ألم</li>
          <li>اختبارات وظيفية: تغييرات اتجاه، ضربات</li>
          <li>ثقة اللاعب النفسية في عضلته</li>
        </ul>
      </section>

      <section className="bg-emerald-50 border-r-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">الدور المحوري للترويض الطبي</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>المرحلة الحادة (أيام 0-3):</strong> PEACE&LOVE، صرف لمفاوي، كهرباء مسكّنة.</li>
          <li><strong>مرحلة الالتئام (أيام 3-14):</strong> تمارين لامركزية تدريجية، تدليك عميق لتوجيه ألياف الكولاجين.</li>
          <li><strong>المرحلة الوظيفية:</strong> ركض تدريجي، تمارين قوة انفجارية، عمل نوعي لكرة القدم.</li>
          <li><strong>البرنامج الوقائي:</strong> Nordic Hamstring، برنامج FIFA 11+ — تقليل 50% مثبت من إصابات الفخذ الخلفي.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">معالج فيزيائي متخصص في الرياضة يُحدث الفرق بين 3 أسابيع و6 أسابيع توقف. وبين انتكاسة وموسم كامل.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'massage-sportif-decontracturant', titleFr: 'Massage sportif décontracturant', titleAr: 'التدليك الرياضي المرخي', icon: <Activity size={20} className="text-medical-600" /> },
    { slug: 'ligaments-collateraux-lcm-lcl', titleFr: 'Ligaments collatéraux', titleAr: 'الأربطة الجانبية للركبة', icon: <Zap size={20} className="text-medical-600" /> },
    { slug: 'recuperation-sportive-prevention-blessures', titleFr: 'Récupération sportive', titleAr: 'الاستشفاء الرياضي', icon: <CheckCircle size={20} className="text-medical-600" /> }
  ]
});

export default article;
