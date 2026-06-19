import React from 'react';
import { createArticle } from './ArticleTemplate';
import { CheckCircle, XCircle, Smartphone, ArrowUpDown, Dumbbell, AlertTriangle, Heart, Activity } from 'lucide-react';

const DoCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-start gap-3 bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
    <CheckCircle className="text-green-600 mt-0.5 shrink-0" size={20} />
    <span className="text-green-900">{children}</span>
  </div>
);

const DontCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-start gap-3 bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
    <XCircle className="text-red-500 mt-0.5 shrink-0" size={20} />
    <span className="text-red-900">{children}</span>
  </div>
);

const article = createArticle({
  slug: 'cervicalgie-bons-gestes-posture',
  titleFr: 'Cervicalgie : Les Bons Gestes et Erreurs à Éviter',
  titleAr: 'ألم الرقبة: التصرفات الصحيحة والأخطاء الشائعة',
  descriptionFr:
    'Douleur au cou ou cervicalgie ? Apprenez les bons gestes quotidiens et les erreurs classiques à éviter pour soulager et prévenir les douleurs cervicales. Conseils pratiques de kinésithérapie.',
  descriptionAr:
    'تعاني من ألم في الرقبة؟ تعلم التصرفات اليومية الصحيحة والأخطاء الكلاسيكية التي يجب تجنبها لتخفيف آلام الرقبة والوقاية منها. نصائح عملية من الترويض الطبي.',
  keywordsFr:
    'cervicalgie, douleur cou, mal de cou, hernie cervicale, bons gestes cervicale, posture cou, kinésithérapie cervicale',
  keywordsAr:
    'ألم الرقبة, آلام عنق الرحم, الفتق الرقبي, وضعية الرقبة, تمارين الرقبة, ترويض طبي رقبة',
  imageFr: 'https://picsum.photos/seed/cervicalgie-gestes-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/cervicalgie-gestes-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <ArrowUpDown className="text-teal-600" size={28} />
          <h2 className="text-2xl font-bold text-teal-900">Comprendre la cervicalgie</h2>
        </div>
        <p className="text-teal-800 leading-relaxed">
          La <strong>cervicalgie</strong> désigne toute douleur localisée dans la nuque et les vertèbres cervicales (C1 à C7).
          Elle peut s'accompagner de maux de tête, de douleurs irradiant vers l'épaule, de sensations de fourmillements dans les bras ou d'une raideur matinale.
          Aujourd'hui, avec les écrans omniprésents et le télétravail, la cervicalgie est l'une des douleurs musculo-squelettiques les plus fréquentes, y compris chez les jeunes.
        </p>
      </section>

      {/* Causes */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-500" size={24} />
          <h2 className="text-2xl font-bold">Les principales causes de cervicalgie</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: '📱', text: 'Téléphone regardé tête penchée en avant' },
            { icon: '💻', text: 'Écran mal positionné (trop bas ou trop haut)' },
            { icon: '😴', text: 'Mauvaise position de sommeil (oreiller inadapté)' },
            { icon: '🚗', text: 'Conduite prolongée avec siège mal réglé' },
            { icon: '😰', text: 'Stress et contractures musculaires' },
            { icon: '🏋️', text: 'Sport avec impact au niveau du cou' },
            { icon: '🪑', text: 'Bureau mal aménagé (chaise, écran, clavier)' },
            { icon: '🛋️', text: 'Regarder la télé dans une position tordue' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3 text-sm">
              <span className="text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What to DO */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={28} />
          <h2 className="text-2xl font-bold text-green-800">✅ Ce qu'il faut FAIRE</h2>
        </div>
        <div className="space-y-3">
          <DoCard>
            <strong>Positionnez votre écran à la bonne hauteur :</strong> Le haut de l'écran doit être à hauteur des yeux ou légèrement en dessous. Vous ne devriez ni baisser ni lever la tête en regardant l'écran.
          </DoCard>
          <DoCard>
            <strong>Faites des pauses actives toutes les 45 minutes :</strong> Levez-vous, marchez 2 minutes, et faites 5 rotations douces de la tête droite-gauche puis des demi-cercles avant-arrière.
          </DoCard>
          <DoCard>
            <strong>Choisissez le bon oreiller :</strong> Un oreiller à mémoire de forme adapté à votre position de sommeil (côté ou dos) maintient la courbure naturelle du cou toute la nuit.
          </DoCard>
          <DoCard>
            <strong>Consultez un kinésithérapeute :</strong> Les techniques manuelles cervicales (mobilisations, massages, étirements guidés) donnent souvent des résultats spectaculaires en quelques séances.
          </DoCard>
          <DoCard>
            <strong>Renforcez vos muscles du cou et des épaules :</strong> Des muscles profonds forts sont le meilleur soutien pour votre colonne cervicale. Des exercices simples comme les isométriques cervicaux font des merveilles.
          </DoCard>
          <DoCard>
            <strong>Appliquez de la chaleur sur la nuque :</strong> Une bouillotte tiède sur les muscles trapèzes relâche la tension et soulage la douleur en 15-20 minutes.
          </DoCard>
          <DoCard>
            <strong>Adoptez une posture de tête neutre :</strong> Oreilles alignées avec les épaules, menton légèrement rentré. Vérifiez votre posture plusieurs fois par jour en travaillant.
          </DoCard>
        </div>
      </section>

      {/* What NOT to do */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-500" size={28} />
          <h2 className="text-2xl font-bold text-red-700">❌ Ce qu'il faut ÉVITER</h2>
        </div>
        <div className="space-y-3">
          <DontCard>
            <strong>Évitez de regarder votre téléphone tête penchée :</strong> Pencher la tête à 30° multiplie le poids apparent de la tête par 3 (de 5 kg à 18 kg !). Tenez votre téléphone à hauteur des yeux.
          </DontCard>
          <DontCard>
            <strong>Ne dormez pas sur le ventre :</strong> C'est la pire position pour le cou. Elle force une rotation extrême pendant des heures et provoque des contractures sévères au réveil.
          </DontCard>
          <DontCard>
            <strong>N'utilisez pas trop d'oreillers :</strong> Un seul oreiller bien choisi vaut mieux que plusieurs empilés qui surchargent la courbure du cou.
          </DontCard>
          <DontCard>
            <strong>Évitez les craquements du cou "faits maison" :</strong> Manipuler soi-même sa nuque peut endommager les ligaments et les artères vertébrales. Laissez ça à un professionnel.
          </DontCard>
          <DontCard>
            <strong>Ne conduisez pas sans appuie-tête bien réglé :</strong> En cas de freinage brusque, un appuie-tête mal réglé aggrave les lésions cervicales (effet whiplash).
          </DontCard>
          <DontCard>
            <strong>Évitez de porter de lourds sacs sur une seule épaule :</strong> Cela crée un déséquilibre musculaire qui surcharge les muscles cervicaux d'un côté.
          </DontCard>
          <DontCard>
            <strong>Ne négligez pas les fourmillements dans les bras :</strong> Un engourdissement ou une douleur irradiant dans le bras peut signaler une hernie cervicale. Consultez sans attendre.
          </DontCard>
        </div>
      </section>

      {/* Exercises */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Dumbbell className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">4 exercices quotidiens pour le cou</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              num: '1',
              title: 'Isométrique avant — résistance de la main',
              desc: 'Posez votre main sur le front. Poussez la tête en avant, résistez avec la main sans bouger. Tenez 5 secondes. 10 répétitions. Renforce les fléchisseurs profonds.',
              color: 'bg-blue-50 border-blue-300'
            },
            {
              num: '2',
              title: 'Rétraction cervicale (chin tuck)',
              desc: 'Assis droit, rentrez le menton doucement en faisant un double menton. Tenez 5 secondes. 10 répétitions. Corrige la tête en avant et soulage les douleurs cervicales.',
              color: 'bg-green-50 border-green-300'
            },
            {
              num: '3',
              title: 'Étirement du trapèze supérieur',
              desc: 'Penchez doucement la tête vers l\'épaule droite, maintenez la main gauche contre votre cuisse. Tenez 30 secondes de chaque côté. Relâche les tensions musculaires.',
              color: 'bg-amber-50 border-amber-300'
            },
            {
              num: '4',
              title: 'Rotation douce du cou',
              desc: 'Tournez la tête lentement vers la droite au maximum confortable, tenez 3 secondes, revenez au centre, puis à gauche. 10 séries. Améliore la mobilité cervicale.',
              color: 'bg-purple-50 border-purple-300'
            }
          ].map(ex => (
            <div key={ex.num} className={`flex gap-4 p-5 rounded-lg border ${ex.color}`}>
              <div className="w-10 h-10 bg-medical-600 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">{ex.num}</div>
              <div>
                <p className="font-bold text-gray-900 text-lg mb-1">{ex.title}</p>
                <p className="text-gray-700 text-sm">{ex.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alert signs */}
      <section className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-600" size={24} />
          <h2 className="text-xl font-bold text-red-900">🚨 Consultez d'urgence si vous avez :</h2>
        </div>
        <ul className="space-y-2 text-red-800">
          <li>• Douleur cervicale sévère après un accident de voiture</li>
          <li>• Fourmillements ou perte de force dans les deux bras</li>
          <li>• Difficultés à marcher ou à maintenir l'équilibre</li>
          <li>• Douleur cervicale avec fièvre et raideur de la nuque</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="bg-medical-50 border-l-4 border-medical-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-xl font-bold text-medical-900">En résumé</h2>
        </div>
        <p className="text-medical-800 leading-relaxed">
          La cervicalgie est souvent le résultat de nos habitudes quotidiennes. Quelques ajustements simples de posture et d'ergonomie, combinés à un programme de renforcement musculaire guidé par un kinésithérapeute, permettent de retrouver un cou sans douleur durablement.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-teal-50 border-r-4 border-teal-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <ArrowUpDown className="text-teal-600" size={28} />
          <h2 className="text-2xl font-bold text-teal-900">فهم آلام الرقبة</h2>
        </div>
        <p className="text-teal-800 leading-relaxed">
          تشير <strong>آلام الرقبة</strong> إلى أي ألم في منطقة الفقرات العنقية (C1 إلى C7).
          قد يترافق مع صداع، آلام تمتد نحو الكتف، تنميل في الذراعين أو تيبس صباحي.
          اليوم، مع الشاشات في كل مكان والعمل عن بُعد، آلام الرقبة أصبحت من أكثر آلام الجهاز العضلي الهيكلي شيوعاً حتى لدى الشباب.
        </p>
      </section>

      {/* Causes */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-500" size={24} />
          <h2 className="text-2xl font-bold">الأسباب الرئيسية لآلام الرقبة</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: '📱', text: 'النظر للهاتف برأس منحنٍ للأمام' },
            { icon: '💻', text: 'شاشة في وضع غير مناسب (منخفضة أو مرتفعة جداً)' },
            { icon: '😴', text: 'وضعية نوم خاطئة (وسادة غير مناسبة)' },
            { icon: '🚗', text: 'قيادة مطولة بكرسي غير معدّل جيداً' },
            { icon: '😰', text: 'التوتر والتشنجات العضلية' },
            { icon: '🏋️', text: 'الرياضة مع تأثير على الرقبة' },
            { icon: '🪑', text: 'مكتب غير مُهيَّأ جيداً (كرسي، شاشة، لوحة مفاتيح)' },
            { icon: '🛋️', text: 'مشاهدة التلفزيون بوضعية ملتوية' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3 text-sm">
              <span className="text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What to DO */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-green-600" size={28} />
          <h2 className="text-2xl font-bold text-green-800">✅ ما يجب فعله</h2>
        </div>
        <div className="space-y-3">
          <DoCard>
            <strong>ضع شاشتك على الارتفاع الصحيح:</strong> يجب أن يكون أعلى الشاشة على مستوى العينين أو أسفل بقليل. لا يجب أن تخفض أو ترفع رأسك للنظر إليها.
          </DoCard>
          <DoCard>
            <strong>خذ استراحات نشطة كل 45 دقيقة:</strong> انهض، امشِ دقيقتين، وافعل 5 دورات خفيفة للرأس يميناً-يساراً ثم نصف دوائر أمام-خلف.
          </DoCard>
          <DoCard>
            <strong>اختر الوسادة المناسبة:</strong> وسادة ذاكرة مناسبة لوضعية نومك (على الجانب أو الظهر) تحافظ على الانحناء الطبيعي للرقبة طوال الليل.
          </DoCard>
          <DoCard>
            <strong>استشر معالجاً فيزيائياً:</strong> التقنيات اليدوية العنقية (تعبئة، تدليك، تمدد موجّه) تعطي نتائج باهرة في جلسات قليلة.
          </DoCard>
          <DoCard>
            <strong>قوّي عضلات رقبتك وكتفيك:</strong> العضلات العميقة القوية هي أفضل دعامة لعمودك الفقري العنقي. تمارين بسيطة كالإيزومترك الرقبي تعطي نتائج رائعة.
          </DoCard>
          <DoCard>
            <strong>ضع الدفء على القفا:</strong> كيس ماء دافئ على عضلات الشبكية يرخي التوتر ويخفف الألم في 15-20 دقيقة.
          </DoCard>
          <DoCard>
            <strong>اعتمد وضعية رأس محايدة:</strong> الأذنان على مستوى الكتفين، الذقن مدخل بخفة. تحقق من وضعيتك عدة مرات يومياً خلال العمل.
          </DoCard>
        </div>
      </section>

      {/* What NOT to do */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-500" size={28} />
          <h2 className="text-2xl font-bold text-red-700">❌ ما يجب تجنبه</h2>
        </div>
        <div className="space-y-3">
          <DontCard>
            <strong>تجنب النظر لهاتفك برأس منحنٍ:</strong> إمالة الرأس 30 درجة تضاعف وزن الرأس الظاهري ثلاث مرات (من 5 كجم إلى 18 كجم!). أمسك هاتفك على مستوى عينيك.
          </DontCard>
          <DontCard>
            <strong>لا تنَم على بطنك:</strong> هي أسوأ وضعية للرقبة. تُجبرها على دوران قصوى لساعات وتسبب تشنجات شديدة عند الاستيقاظ.
          </DontCard>
          <DontCard>
            <strong>لا تستخدم وسائد كثيرة:</strong> وسادة واحدة مختارة جيداً أفضل من عدة وسائد متراكمة تُجهد انحناء الرقبة.
          </DontCard>
          <DontCard>
            <strong>تجنب "تفقيع" الرقبة بنفسك:</strong> التعامل الذاتي مع الرقبة قد يتلف الأربطة والشرايين الفقرية. اترك ذلك للمختص.
          </DontCard>
          <DontCard>
            <strong>لا تقد بدون مسند للرأس معدّل جيداً:</strong> في حالة كبح مفاجئ، مسند الرأس غير المعدّل يُفاقم آفات الرقبة (تأثير السوط).
          </DontCard>
          <DontCard>
            <strong>تجنب حمل حقائب ثقيلة على كتف واحدة:</strong> يخلق عدم توازن عضلي يُثقل عضلات الرقبة من جانب واحد.
          </DontCard>
          <DontCard>
            <strong>لا تتجاهل تنميل الذراعين:</strong> الخدر أو الألم الممتد في الذراع قد يدل على فتق رقبي. استشر فوراً.
          </DontCard>
        </div>
      </section>

      {/* Exercises */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Dumbbell className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">4 تمارين يومية للرقبة</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              num: '1',
              title: 'مقاومة الرأس للأمام',
              desc: 'ضع يدك على جبهتك. ادفع الرأس للأمام، قاوم باليد دون التحرك. ابقَ 5 ثوانٍ. 10 تكرارات. يُقوي المُثبِّطات العميقة.',
              color: 'bg-blue-50 border-blue-300'
            },
            {
              num: '2',
              title: 'سحب الذقن (Chin Tuck)',
              desc: 'جالساً منتصباً، أدخل الذقن بلطف مع عمل ذقن مزدوجة. ابقَ 5 ثوانٍ. 10 تكرارات. يُصحح الرأس المتقدم ويُخفف آلام الرقبة.',
              color: 'bg-green-50 border-green-300'
            },
            {
              num: '3',
              title: 'تمدد عضلة الشبكية',
              desc: 'أمِل الرأس بلطف نحو الكتف اليمنى، ضع اليد اليسرى على فخذك. ابقَ 30 ثانية من كل جانب. يُرخي توترات العضلات.',
              color: 'bg-amber-50 border-amber-300'
            },
            {
              num: '4',
              title: 'دوران خفيف للرأس',
              desc: 'أدر رأسك ببطء إلى اليمين بقدر ما يريح، ابقَ 3 ثوانٍ، عد للمركز ثم لليسار. 10 مجموعات. يُحسّن حركة الرقبة.',
              color: 'bg-purple-50 border-purple-300'
            }
          ].map(ex => (
            <div key={ex.num} className={`flex gap-4 p-5 rounded-lg border ${ex.color}`}>
              <div className="w-10 h-10 bg-medical-600 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">{ex.num}</div>
              <div>
                <p className="font-bold text-gray-900 text-lg mb-1">{ex.title}</p>
                <p className="text-gray-700 text-sm">{ex.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alert signs */}
      <section className="bg-red-50 border-r-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-600" size={24} />
          <h2 className="text-xl font-bold text-red-900">🚨 استشر بشكل عاجل إذا كان لديك:</h2>
        </div>
        <ul className="space-y-2 text-red-800">
          <li>• ألم رقبة شديد بعد حادث سيارة</li>
          <li>• تنميل أو فقدان قوة في كلتا الذراعين</li>
          <li>• صعوبة في المشي أو الحفاظ على التوازن</li>
          <li>• ألم رقبة مع حمى وتيبس القفا</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="bg-medical-50 border-r-4 border-medical-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-xl font-bold text-medical-900">باختصار</h2>
        </div>
        <p className="text-medical-800 leading-relaxed">
          آلام الرقبة في الغالب نتيجة عاداتنا اليومية. بعض التعديلات البسيطة في الوضعية والإرغونوميا، مع برنامج تقوية عضلي يوجهه معالج فيزيائي، تسمح باستعادة رقبة بدون ألم بشكل دائم.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'telephone-cervicalgie-hernie-cervicale',
      titleFr: 'Téléphone et Hernie Cervicale',
      titleAr: 'الهاتف والفتق الرقبي',
      icon: <Smartphone size={20} className="text-medical-600" />
    },
    {
      slug: 'mal-de-dos-bons-gestes-a-eviter',
      titleFr: 'Mal de Dos : À Faire et À Éviter',
      titleAr: 'آلام الظهر: ما يجب فعله وتجنبه',
      icon: <ArrowUpDown size={20} className="text-medical-600" />
    },
    {
      slug: 'posture-ergonomie',
      titleFr: 'Posture & Ergonomie',
      titleAr: 'الوضعية والإرغونوميا',
      icon: <Activity size={20} className="text-medical-600" />
    }
  ]
});

export default article;
