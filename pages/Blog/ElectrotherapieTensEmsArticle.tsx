import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Zap, Activity, CheckCircle, XCircle, BookOpen } from 'lucide-react';

const article = createArticle({
  slug: 'electrotherapie-tens-ems-microcourant',
  titleFr: 'TENS, EMS, Microcourant: La Vérité sur l Électrothérapie',
  titleAr: 'TENS وEMS والتيار الدقيق: الحقيقة الكاملة عن العلاج الكهربائي',
  descriptionFr: 'TENS contre la douleur, EMS pour les muscles, microcourant pour les tissus: ce que la science dit vraiment sur l électrothérapie en kinésithérapie.',
  descriptionAr: 'TENS لتخفيف الألم، EMS لتقوية العضلات، التيار الدقيق للأنسجة: ما تقوله العلوم فعلاً عن العلاج الكهربائي في الترويض الطبي.',
  keywordsFr: 'TENS électrothérapie, EMS kinésithérapie, microcourant, électrostimulation, douleur chronique, neurostimulation',
  keywordsAr: 'TENS علاج الألم, EMS تقوية العضلات, التيار الدقيق, التحفيز الكهربائي, العلاج الكهربائي, الترويض الطبي',
  imageFr: 'https://picsum.photos/seed/electrotherapie-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/electrotherapie-chnider/1600/900',
  readTimeFr: '8 min de lecture',
  readTimeAr: '8 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Zap className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">Courant électrique + corps humain = ?</h2>
        </div>
        <p className="text-blue-900 leading-relaxed">
          Quand on vous propose "de l'électro" en kiné, vous imaginez peut-être une torture médiévale.
          En réalité, l'électrothérapie regroupe des familles très différentes avec des mécanismes,
          des preuves scientifiques et des utilisations bien distincts. Il faut démêler tout ça.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-yellow-600" size={24} />
          <h2 className="text-2xl font-bold">Le TENS — Contre-stimulation de la douleur</h2>
        </div>
        <p className="mb-3">
          Le <strong>TENS (Transcutaneous Electrical Nerve Stimulation)</strong> envoie de petits courants
          électriques via des électrodes cutanées pour moduler la perception de la douleur.
        </p>
        <h3 className="font-bold text-lg mb-2">Comment ça fonctionne:</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Théorie du portillon (Gate Control):</strong> les fibres nerveuses tactiles activées "ferment la porte" aux signaux douloureux au niveau de la moelle épinière.</li>
          <li><strong>Libération d'endorphines:</strong> à basse fréquence, le TENS stimule la production naturelle d'analgésiques endogènes.</li>
          <li><strong>Effet sur les centres supérieurs:</strong> modulation de la perception centrale de la douleur.</li>
        </ul>
        <h3 className="font-bold text-lg mb-2">Ce que la science dit:</h3>
        <div className="bg-green-50 rounded p-4 mb-3">
          <p className="text-green-900">
            ✅ <strong>Efficacité modérée à bonne</strong> sur douleurs musculo-squelettiques aiguës et chroniques.
            Cochrane Reviews 2019: bénéfice significatif vs placebo pour lombalgies et cervicalgies.
          </p>
        </div>
        <div className="bg-amber-50 rounded p-4">
          <p className="text-amber-900">
            ⚠️ <strong>Effet temporaire</strong> — le TENS soulage pendant et après la séance mais ne traite pas la cause.
            C'est un outil d'analgésie, pas de guérison.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-purple-600" size={24} />
          <h2 className="text-2xl font-bold">L'EMS — Électrostimulation musculaire</h2>
        </div>
        <p className="mb-3">
          L'<strong>EMS (Electrical Muscle Stimulation)</strong> utilise des courants plus intenses pour
          provoquer des contractions musculaires involontaires. Vous connaissez peut-être les ceintures
          abdominales "pour les abdos sans effort" — c'est une version très simplifiée (et souvent inefficace seule).
        </p>
        <h3 className="font-bold text-lg mb-2">Utilisations légitimes:</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Prévention de l'atrophie musculaire</strong> après une chirurgie, une immobilisation, un coma.</li>
          <li><strong>Rééducation neurologique:</strong> stimulation fonctionnelle pour activer des muscles paralysés (partiellement).</li>
          <li><strong>Renforcement musculaire complémentaire</strong> en sport de haut niveau — toujours en complément d'exercices actifs.</li>
          <li><strong>Période post-opératoire précoce:</strong> maintenir le quadriceps actif après chirurgie du genou.</li>
        </ul>
        <h3 className="font-bold text-lg mb-2">Ce que la science dit:</h3>
        <div className="bg-green-50 rounded p-4 mb-3">
          <p className="text-green-900">
            ✅ <strong>Efficace pour prévenir l'atrophie</strong> en immobilisation prouvé.
            Efficace en rééducation neurologique pour certains muscles.
          </p>
        </div>
        <div className="bg-red-50 rounded p-4">
          <p className="text-red-900">
            ❌ <strong>NON efficace</strong> pour "sculpter" les muscles chez une personne saine sans exercice.
            Les publicités pour les ceintures abdominales sont du marketing, pas de la science.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-teal-600" size={24} />
          <h2 className="text-2xl font-bold">Le Microcourant (MENS) — Pour les tissus fins</h2>
        </div>
        <p className="mb-3">
          Le microcourant utilise des intensités sub-sensorielles (vous ne sentez rien ou presque).
          L'idée est de stimuler les processus biologiques cellulaires — ATP, synthèse protéique,
          cicatrisation tissulaire — à des niveaux très bas.
        </p>
        <div className="bg-amber-50 rounded p-4 mb-4">
          <p className="text-amber-900">
            ⚠️ <strong>Preuves scientifiques limitées.</strong> Les études existent mais sont souvent de
            faible qualité méthodologique. Utilisé en complément dans certains protocoles de cicatrisation,
            mais pas comme traitement principal. Soyez vigilant face aux promesses exagérées.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">Contre-indications importantes</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pacemaker ou dispositif cardiaque implanté</li>
          <li>Zones avec implants métalliques (selon localisation et type)</li>
          <li>Épilepsie non contrôlée</li>
          <li>Thrombose veineuse profonde active</li>
          <li>Tumeurs malignes dans la zone de traitement</li>
          <li>Grossesse (zone abdominale, lombaire)</li>
          <li>Peau lésée, brûlée ou infectée dans la zone d'application</li>
        </ul>
        <p className="mt-4 text-gray-700 font-medium">
          Ces contre-indications doivent toujours être vérifiées par votre kinésithérapeute avant utilisation.
        </p>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <CheckCircle className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold text-slate-900">En résumé: l'électrothérapie est un outil, pas une solution</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-slate-800">
          <li>TENS: bon outil d'analgésie complémentaire — ne traite pas la cause</li>
          <li>EMS: efficace en prévention d'atrophie et rééducation neurologique — inutile pour "les abdos sans effort"</li>
          <li>Microcourant: preuves limitées — intéressant en complément dans certains protocoles</li>
        </ul>
        <p className="mt-4 text-slate-800 font-bold">
          L'électrothérapie ne remplace jamais l'exercice thérapeutique actif — elle le complète et le facilite.
        </p>
      </section>

      <section className="bg-slate-50 rounded-lg p-5">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="text-slate-700" size={22} />
          <h2 className="text-xl font-bold text-slate-900">Sources</h2>
        </div>
        <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
          <li>Cochrane Review: TENS for chronic pain (2019)</li>
          <li>Nnoaham KE & Kumbang J. TENS for chronic pain. Cochrane Database. 2008.</li>
          <li>Maffiuletti NA et al. EMS for muscle strengthening. Eur J Appl Physiol. 2011.</li>
          <li>Gibson W et al. Transcutaneous electrical nerve stimulation for primary dysmenorrhoea. Cochrane 2017.</li>
        </ul>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Zap className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">التيار الكهربائي + جسم الإنسان = ماذا؟</h2>
        </div>
        <p className="text-blue-900 leading-relaxed">
          حين يُقترح عليك "الكهرباء" في الترويض الطبي، قد تتخيل شيئًا مؤلمًا. في الواقع، العلاج الكهربائي
          يشمل عدة تقنيات مختلفة كليًا من حيث الآلية والأدلة العلمية والاستخدام. دعنا نفكك كل ذلك.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-yellow-600" size={24} />
          <h2 className="text-2xl font-bold">TENS — تحفيز مضاد للألم</h2>
        </div>
        <p className="mb-3">
          <strong>TENS</strong> يُرسل تيارات كهربائية صغيرة عبر لاصقات جلدية لتعديل إحساس الألم.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>نظرية بوابة الألم:</strong> تنشيط الألياف العصبية اللمسية "يغلق الباب" أمام إشارات الألم في النخاع الشوكي.</li>
          <li><strong>إطلاق الإندورفينات:</strong> بالتردد المنخفض يحفز TENS إنتاج مسكنات الألم الطبيعية.</li>
        </ul>
        <div className="bg-green-50 rounded p-4 mb-3">
          <p className="text-green-900">
            ✅ <strong>فعالية معقولة إلى جيدة</strong> على آلام الجهاز الحركي الحادة والمزمنة.
            مراجعة كوكران 2019: فائدة ملموسة مقارنة بالعلاج الوهمي لآلام الظهر والرقبة.
          </p>
        </div>
        <div className="bg-amber-50 rounded p-4">
          <p className="text-amber-900">
            ⚠️ <strong>تأثير مؤقت</strong> — TENS يخفف الألم خلال الجلسة وبعدها لكنه لا يعالج السبب.
            أداة تسكين، لا شفاء.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-purple-600" size={24} />
          <h2 className="text-2xl font-bold">EMS — التحفيز الكهربائي للعضلات</h2>
        </div>
        <p className="mb-3">
          <strong>EMS</strong> يستخدم تيارات أقوى لإحداث تقلصات عضلية قسرية. الاستخدامات المشروعة:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>الوقاية من ضمور العضلات</strong> بعد الجراحة أو الجبس أو الغيبوبة.</li>
          <li><strong>إعادة التأهيل العصبي:</strong> تنشيط عضلات مشلولة جزئيًا.</li>
          <li><strong>تقوية عضلية تكميلية</strong> في الرياضة العالية المستوى — دائمًا بجانب التمارين النشطة.</li>
        </ul>
        <div className="bg-red-50 rounded p-4">
          <p className="text-red-900">
            ❌ <strong>غير فعّال</strong> لـ"نحت العضلات" عند الشخص السليم بدون رياضة.
            إعلانات أحزمة البطن تسويق، لا علم.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-teal-600" size={24} />
          <h2 className="text-2xl font-bold">التيار الدقيق (Microcourant) — للأنسجة الرقيقة</h2>
        </div>
        <div className="bg-amber-50 rounded p-4">
          <p className="text-amber-900">
            ⚠️ <strong>أدلة علمية محدودة.</strong> الدراسات موجودة لكن ذات جودة منهجية ضعيفة في الغالب.
            يُستخدم كمكمّل في بعض بروتوكولات التئام الجروح لا كعلاج رئيسي.
            كن حذرًا من الوعود المبالغ فيها.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-600" size={24} />
          <h2 className="text-2xl font-bold">موانع استخدام العلاج الكهربائي</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li>جهاز تنظيم ضربات القلب (Pacemaker)</li>
          <li>مناطق تحتوي على معادن مزروعة (حسب النوع والموقع)</li>
          <li>الصرع غير المتحكم به</li>
          <li>تجلط وريدي عميق نشط</li>
          <li>أورام خبيثة في منطقة العلاج</li>
          <li>الحمل (منطقة البطن والظهر)</li>
          <li>جلد مجروح أو محروق أو ملتهب في منطقة التطبيق</li>
        </ul>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <CheckCircle className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold text-slate-900">الخلاصة: العلاج الكهربائي أداة، لا حلّ</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-slate-800">
          <li>TENS: أداة تسكين جيدة — لا يعالج السبب</li>
          <li>EMS: فعّال في الوقاية من الضمور وإعادة التأهيل العصبي — لا يصنع عضلات بدون تمرين</li>
          <li>التيار الدقيق: أدلة محدودة — مثير للاهتمام كمكمّل</li>
        </ul>
        <p className="mt-4 text-slate-800 font-bold">
          العلاج الكهربائي لا يُعوّض التمرين العلاجي النشط أبدًا — يُكمله ويُيسّره.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'electrotherapie-neurologie-utile-ou-non', titleFr: 'Électrothérapie et neurologie', titleAr: 'العلاج الكهربائي والأعصاب', icon: <Zap size={20} className="text-medical-600" /> },
    { slug: 'faux-espoirs-kinesitherapie', titleFr: 'Faux espoirs en kiné', titleAr: 'الأوهام في الترويض الطبي', icon: <XCircle size={20} className="text-medical-600" /> },
    { slug: 'readaptation-post-avc', titleFr: 'Réadaptation Post-AVC', titleAr: 'إعادة التأهيل ما بعد الجلطة', icon: <Activity size={20} className="text-medical-600" /> }
  ]
});

export default article;
