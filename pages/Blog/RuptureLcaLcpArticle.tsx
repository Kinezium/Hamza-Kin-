import React from 'react';
import { createArticle } from './ArticleTemplate';
import { Bone, AlertTriangle, CheckCircle, Activity, Stethoscope } from 'lucide-react';

const article = createArticle({
  slug: 'rupture-lca-lcp-genou',
  titleFr: 'Rupture LCA & LCP: Tout savoir sur les ligaments croisés du genou',
  titleAr: 'تمزق الرباط الصليبي الأمامي والخلفي: كل ما تحتاج معرفته',
  descriptionFr: 'Différences entre rupture LCA et LCP, mécanismes, symptômes, traitements et rôle de la kinésithérapie. Guide complet pour sportifs et patients.',
  descriptionAr: 'الفرق بين تمزق الرباط الصليبي الأمامي والخلفي، آليات الإصابة، الأعراض، العلاجات ودور الترويض الطبي. دليل شامل للرياضيين والمرضى.',
  keywordsFr: 'rupture LCA LCP genou, ligament croisé antérieur postérieur, chirurgie LCA, rééducation genou, blessure genou sport',
  keywordsAr: 'تمزق الرباط الصليبي الأمامي الخلفي, الرباط الصليبي الركبة, جراحة الرباط الصليبي, تأهيل الركبة, إصابة ركبة رياضية',
  imageFr: 'https://picsum.photos/seed/lca-lcp-genou-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/lca-lcp-genou-chnider/1600/900',
  readTimeFr: '9 min de lecture',
  readTimeAr: '9 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Bone className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">Anatomie: LCA vs LCP, c'est quoi?</h2>
        </div>
        <p className="text-blue-900 leading-relaxed mb-3">
          Le genou possède deux ligaments croisés qui stabilisent l'articulation en profondeur:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-blue-900">
          <li><strong>LCA (Ligament Croisé Antérieur):</strong> empêche le tibia de partir vers l'avant sous le fémur. C'est le plus souvent blessé — notamment dans les sports avec pivots et réceptions de sauts.</li>
          <li><strong>LCP (Ligament Croisé Postérieur):</strong> empêche le tibia de partir vers l'arrière. Plus solide que le LCA, blessé surtout par choc direct sur le tibia (tableau de bord, sport de contact).</li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">Mécanismes d'injury et statistiques</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-800 mb-2">Rupture LCA (70-80% des cas)</h3>
            <ul className="list-disc pl-4 space-y-1 text-red-900 text-sm">
              <li>Pivot contact (genou en valgus + rotation interne)</li>
              <li>Réception de saut pied plat</li>
              <li>Changement de direction brutal</li>
              <li>Foot, basketball, ski, handball</li>
              <li>Craquement audible, douleur immédiate, genou qui "lâche"</li>
            </ul>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="font-bold text-purple-800 mb-2">Rupture LCP (moins fréquente)</h3>
            <ul className="list-disc pl-4 space-y-1 text-purple-900 text-sm">
              <li>Choc direct sur tibia (tableau de bord)</li>
              <li>Chute sur genou fléchi</li>
              <li>Hyperextension violente</li>
              <li>Sports de contact, accidents de voiture</li>
              <li>Douleur postérieure, instabilité variable</li>
            </ul>
          </div>
        </div>
        <div className="bg-indigo-50 rounded-lg p-4">
          <p className="text-indigo-900"><strong>Statistiques:</strong> ~200 000 ruptures LCA/an en France. 70% surviennent sans contact direct. Les femmes ont 2-8× plus de risque que les hommes à niveau sportif égal. L'âge de pic: 15-25 ans.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">Diagnostic: comment confirmer la rupture</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Examen clinique:</strong> Test de Lachman (LCA), tiroir antérieur/postérieur, test pivot-shift. Réalisé par un médecin ou orthopédiste.</li>
          <li><strong>IRM:</strong> Confirme le diagnostic, évalue les structures associées (ménisques, cartilage, LCM/LCL).</li>
          <li><strong>Radiographie:</strong> Élimine une fracture associée.</li>
        </ol>
        <p className="mt-3 text-gray-700 font-medium">⚠️ Attention: un genou gonflé (hémarthrose) dans les premières heures après une blessure = signe d'alerte d'une rupture ligamentaire. Consultez en urgence.</p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold">Traitement: chirurgie ou pas?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-800 mb-2">Traitement conservateur (sans chirurgie)</h3>
            <p className="text-green-900 text-sm">Indiqué chez: personnes peu sportives, âge avancé, insuffisance partielle.</p>
            <ul className="list-disc pl-4 space-y-1 text-green-900 text-sm mt-2">
              <li>Rééducation kinésithérapique intensive</li>
              <li>Renforcement des muscles stabilisateurs (quadriceps, ischio-jambiers)</li>
              <li>Proprioception et équilibre</li>
              <li>Résultats bons si patient peu exigeant en sport de pivot</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-2">Traitement chirurgical (ligamentoplastie)</h3>
            <p className="text-blue-900 text-sm">Indiqué chez: sportif, instabilité persistante, patient actif.</p>
            <ul className="list-disc pl-4 space-y-1 text-blue-900 text-sm mt-2">
              <li>Reconstruction par greffe osseuse (Kenneth Jones, DIDT)</li>
              <li>Arthroscopie — technique mini-invasive</li>
              <li>Suivi par rééducation obligatoire: 6-9 mois</li>
              <li>Retour au sport de pivot: 9-12 mois minimum</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">Rôle primordial de la kinésithérapie</h2>
        </div>
        <p className="mb-3 text-emerald-900 font-medium">La kinésithérapie est obligatoire — avant et après la chirurgie.</p>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>Phase préopératoire (2-6 semaines):</strong> récupérer la mobilité, diminuer l'œdème, maintenir la force musculaire. Un quadriceps fort avant l'opération = meilleur résultat post-op.</li>
          <li><strong>Phase J0-J45:</strong> lutte anti-inflammatoire, mobilisation douce, quadricipitale, marche avec béquilles.</li>
          <li><strong>Phase J45-M4:</strong> renforcement progressif, proprioception, vélo, natation.</li>
          <li><strong>Phase M4-M9:</strong> course, changements de direction, préparation au retour sport.</li>
          <li><strong>Tests de retour au sport:</strong> force ischio-jambiers/quadriceps ≥90%, saut monopodal ≥90% du côté sain. Sans critères objectifs = risque de récidive x4.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">Sans rééducation bien conduite, la chirurgie ne suffit pas. C'est le travail du patient qui fait le résultat.</p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      <section className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Bone className="text-blue-600" size={26} />
          <h2 className="text-2xl font-bold text-blue-900">التشريح: الرباط الصليبي الأمامي والخلفي - ما الفرق؟</h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-blue-900">
          <li><strong>الرباط الصليبي الأمامي (LCA):</strong> يمنع الظنبوب من الانزلاق للأمام تحت الفخذ. الأكثر إصابة — خاصة في رياضات المحاور والقفز.</li>
          <li><strong>الرباط الصليبي الخلفي (LCP):</strong> يمنع الظنبوب من الانزلاق للخلف. أقوى من الأمامي، يُصاب عادة بضربة مباشرة على الظنبوب.</li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h2 className="text-2xl font-bold">آليات الإصابة والإحصائيات</h2>
        </div>
        <div className="bg-indigo-50 rounded-lg p-4">
          <p className="text-indigo-900"><strong>إحصائيات:</strong> حوالي 200,000 تمزق رباط صليبي أمامي سنويًا في فرنسا. 70% تحدث بدون تصادم مباشر. النساء لديهن خطر 2-8 أضعاف الرجال بنفس المستوى الرياضي. فئة الذروة: 15-25 سنة.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-800 mb-2">تمزق الرباط الصليبي الأمامي</h3>
            <ul className="list-disc pl-4 space-y-1 text-red-900 text-sm">
              <li>محور مع ركبة منفرجة للخارج</li>
              <li>هبوط القفز على القدم المسطحة</li>
              <li>تغيير اتجاه مفاجئ</li>
              <li>كرة القدم، كرة السلة، التزلج، كرة اليد</li>
            </ul>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="font-bold text-purple-800 mb-2">تمزق الرباط الصليبي الخلفي</h3>
            <ul className="list-disc pl-4 space-y-1 text-purple-900 text-sm">
              <li>صدمة مباشرة على الظنبوب</li>
              <li>السقوط على الركبة المثنية</li>
              <li>فرط تمديد عنيف</li>
              <li>رياضات التماس وحوادث السير</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold">العلاج: جراحة أم لا؟</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-800 mb-2">العلاج المحافظ (بدون جراحة)</h3>
            <p className="text-green-900 text-sm">للأشخاص قليلي النشاط الرياضي، أو التمزق الجزئي.</p>
            <ul className="list-disc pl-4 space-y-1 text-green-900 text-sm mt-2">
              <li>ترويض طبي مكثف</li>
              <li>تقوية العضلات المثبتة</li>
              <li>تمارين التوازن والحس العميق</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-2">العلاج الجراحي (إعادة البناء)</h3>
            <p className="text-blue-900 text-sm">للرياضيين والمرضى النشيطين.</p>
            <ul className="list-disc pl-4 space-y-1 text-blue-900 text-sm mt-2">
              <li>إعادة بناء بطعم عظمي</li>
              <li>تقنية التنظير المفصلي</li>
              <li>تأهيل إلزامي: 6-9 أشهر</li>
              <li>العودة لرياضة المحاور: 9-12 شهرًا</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 border-r-4 border-emerald-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Stethoscope className="text-emerald-600" size={24} />
          <h2 className="text-2xl font-bold text-emerald-900">الدور المحوري للترويض الطبي</h2>
        </div>
        <p className="mb-3 text-emerald-900 font-medium">الترويض الطبي إلزامي — قبل الجراحة وبعدها.</p>
        <ul className="list-disc pl-6 space-y-2 text-emerald-900">
          <li><strong>مرحلة ما قبل الجراحة:</strong> استعادة الحركة، تقليل الوذمة، الحفاظ على القوة. عضلة رباعية رؤوس الفخذ قوية قبل العملية = نتيجة أفضل بعدها.</li>
          <li><strong>المرحلة الأولى:</strong> مكافحة الالتهاب، تحريك ناعم، المشي بالعكازين.</li>
          <li><strong>المرحلة المتوسطة:</strong> تقوية تدريجية، توازن، دراجة، سباحة.</li>
          <li><strong>مرحلة العودة للرياضة:</strong> ركض، تغييرات اتجاه، اختبارات موضوعية قبل القرار.</li>
        </ul>
        <p className="mt-4 text-emerald-900 font-bold italic">بدون ترويض جيد، الجراحة لا تكفي. النتيجة تصنعها جهود المريض.</p>
      </section>
    </div>
  ),
  relatedArticles: [
    { slug: 'rupture-partielle-vs-totale-ligaments', titleFr: 'Rupture partielle vs totale', titleAr: 'التمزق الجزئي مقابل الكلي', icon: <Bone size={20} className="text-medical-600" /> },
    { slug: 'ligaments-collateraux-lcm-lcl', titleFr: 'Ligaments collatéraux LCM & LCL', titleAr: 'الأربطة الجانبية للركبة', icon: <Bone size={20} className="text-medical-600" /> },
    { slug: 'rupture-ligament-croise-anterieur-reeducation', titleFr: 'Rééducation LCA', titleAr: 'تأهيل الرباط الصليبي', icon: <Activity size={20} className="text-medical-600" /> }
  ]
});

export default article;
