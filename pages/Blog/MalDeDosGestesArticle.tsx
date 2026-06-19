import React from 'react';
import { createArticle } from './ArticleTemplate';
import { CheckCircle, XCircle, ArrowUpDown, Dumbbell, Activity, AlertTriangle, Heart } from 'lucide-react';

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
  slug: 'mal-de-dos-bons-gestes-a-eviter',
  titleFr: 'Mal de Dos : Ce Qu\'il Faut Faire et Éviter',
  titleAr: 'آلام الظهر: ما يجب فعله وما يجب تجنبه',
  descriptionFr:
    'Vous avez mal au dos ? Découvrez les bons gestes à adopter et les erreurs courantes à éviter pour soulager rapidement la douleur et éviter les rechutes, conseils de nos kinésithérapeutes.',
  descriptionAr:
    'تعاني من آلام الظهر؟ اكتشف التصرفات الصحيحة والأخطاء الشائعة التي يجب تجنبها لتخفيف الألم بسرعة ومنع النكسات، بنصائح من معالجينا الفيزيائيين.',
  keywordsFr:
    'mal de dos, lombalgie, bons gestes dos, que faire mal de dos, soulager dos, kinésithérapie dos, exercices dos',
  keywordsAr:
    'آلام الظهر, ألم أسفل الظهر, نصائح آلام الظهر, تمارين الظهر, علاج آلام الظهر, ترويض طبي ظهر',
  imageFr: 'https://picsum.photos/seed/mal-dos-gestes-chnider/1600/900',
  imageAr: 'https://picsum.photos/seed/mal-dos-gestes-chnider/1600/900',
  readTimeFr: '7 min de lecture',
  readTimeAr: '7 دقائق قراءة',
  contentFr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <ArrowUpDown className="text-amber-600" size={28} />
          <h2 className="text-2xl font-bold text-amber-900">Le mal de dos, un problème très courant</h2>
        </div>
        <p className="text-amber-800 leading-relaxed">
          Le mal de dos — ou <strong>lombalgie</strong> — touche 8 personnes sur 10 au cours de leur vie.
          Il peut être aigu (suite à un faux mouvement) ou chronique (présent depuis plus de 3 mois).
          La bonne nouvelle ? Avec les bons gestes, on peut soulager la douleur rapidement et surtout éviter qu'elle revienne.
        </p>
      </section>

      {/* Why back pain happens */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-500" size={24} />
          <h2 className="text-2xl font-bold">Pourquoi a-t-on mal au dos ?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: '🪑', text: 'Posture assise prolongée et inadaptée' },
            { icon: '🏗️', text: 'Port de charges lourdes sans technique correcte' },
            { icon: '💪', text: 'Muscles du dos et du ventre trop faibles' },
            { icon: '😰', text: 'Stress et tension psychologique' },
            { icon: '🛏️', text: 'Matelas trop mou ou trop dur' },
            { icon: '🚗', text: 'Longs trajets en voiture sans pauses' },
            { icon: '🏋️', text: 'Surcharge sportive sans échauffement' },
            { icon: '⚖️', text: 'Excès de poids sollicitant les disques' },
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
            <strong>Restez en mouvement :</strong> Contrairement à ce qu'on croit, le repos total prolonge la douleur. Marchez doucement, changez de position régulièrement. Même 10 minutes de marche légère font la différence.
          </DoCard>
          <DoCard>
            <strong>Adoptez la bonne posture assise :</strong> Dos droit, pieds à plat, écran à hauteur des yeux. Utilisez un coussin lombaire si besoin. Faites une pause toutes les 45-60 minutes.
          </DoCard>
          <DoCard>
            <strong>Appliquez de la chaleur sur les muscles tendus :</strong> Une bouillotte ou un coussin chauffant sur le bas du dos relaxe les muscles et réduit la douleur. 15 à 20 minutes suffisent.
          </DoCard>
          <DoCard>
            <strong>Renforcez vos muscles du ventre et du dos :</strong> Des exercices de gainage légers (planche, pont fessier) stabilisent la colonne et préviennent les récidives.
          </DoCard>
          <DoCard>
            <strong>Consultez un kinésithérapeute :</strong> Dès les premières douleurs, une prise en charge précoce évite que la lombalgie aiguë devienne chronique.
          </DoCard>
          <DoCard>
            <strong>Dormez en position fœtale :</strong> Sur le côté, genoux légèrement fléchis, avec un coussin entre les genoux. C'est la position qui soulage le mieux la colonne la nuit.
          </DoCard>
          <DoCard>
            <strong>Pratiquez des étirements doux :</strong> Étirement des ischio-jambiers, de la piriformis et du psoas. 5 minutes le matin peuvent changer votre journée.
          </DoCard>
          <DoCard>
            <strong>Perdez du poids si nécessaire :</strong> Chaque kilo en moins réduit la pression sur les disques intervertébraux. Une perte de 5 à 10 kg peut être transformatrice.
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
            <strong>Ne restez pas allongé plusieurs jours :</strong> Le repos strict au lit est contre-productif. Il affaiblit les muscles, ralentit la guérison et peut transformer une douleur aiguë en douleur chronique.
          </DontCard>
          <DontCard>
            <strong>Évitez de soulever des charges lourdes en se penchant en avant :</strong> Pliez toujours les genoux, gardez le dos droit et serrez la charge contre votre corps. Le dos arqué sous charge est la première cause de hernie discale.
          </DontCard>
          <DontCard>
            <strong>Ne portez pas de talons hauts tous les jours :</strong> Les talons modifient la courbe du dos et augmentent la pression sur les lombaires. Variez avec des chaussures plates et confortables.
          </DontCard>
          <DontCard>
            <strong>Évitez les mouvements brusques en torsion :</strong> Se retourner rapidement, attraper quelque chose sur le côté sans tourner le corps entier — ce sont des gestes dangereux pour les disques.
          </DontCard>
          <DontCard>
            <strong>Ne conduisez pas longtemps sans pause :</strong> Sortez toutes les 1h30 à 2h, marchez 5 minutes et étirez-vous. Les vibrations de la voiture fatiguent les disques.
          </DontCard>
          <DontCard>
            <strong>Ne sautez pas les séances de kinésithérapie :</strong> Un programme incomplet laisse les muscles déséquilibrés et augmente le risque de rechute.
          </DontCard>
          <DontCard>
            <strong>Évitez les abdominaux classiques (crunch) :</strong> En cas de lombalgie, les crunch augmentent la pression discale. Privilégiez le gainage statique (planche).
          </DontCard>
        </div>
      </section>

      {/* Emergency signs */}
      <section className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-600" size={24} />
          <h2 className="text-xl font-bold text-red-900">🚨 Signes d'alarme — Consultez en urgence</h2>
        </div>
        <ul className="space-y-2 text-red-800">
          <li>• Douleur irradiant dans la jambe jusqu'au pied (sciatique)</li>
          <li>• Perte de force dans les jambes ou les pieds</li>
          <li>• Troubles urinaires ou intestinaux associés à la douleur</li>
          <li>• Douleur nocturne intense ne cédant pas au repos</li>
          <li>• Fièvre associée à la douleur dorsale</li>
        </ul>
      </section>

      {/* Exercises section */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Dumbbell className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">3 exercices simples pour soulager le dos</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              num: '1',
              title: 'Le pont fessier',
              desc: 'Allongé sur le dos, genoux fléchis. Montez les fesses lentement en contractant le ventre. Tenez 5 secondes. 10 répétitions. Renforce les fessiers et soulage les lombaires.',
              color: 'bg-blue-50 border-blue-300'
            },
            {
              num: '2',
              title: 'La planche (gainage)',
              desc: 'En appui sur les coudes et les orteils, corps droit. Tenez 20 à 30 secondes sans creuser le dos. 3 séries. Stabilise toute la colonne vertébrale.',
              color: 'bg-green-50 border-green-300'
            },
            {
              num: '3',
              title: 'L\'étirement du chat-vache',
              desc: 'À quatre pattes, alternez dos arrondi (chat) et dos creusé (vache) doucement. 10 répétitions. Mobilise les vertèbres et soulage la tension musculaire.',
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

      {/* Conclusion */}
      <section className="bg-medical-50 border-l-4 border-medical-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-xl font-bold text-medical-900">En résumé</h2>
        </div>
        <p className="text-medical-800 leading-relaxed">
          Le mal de dos est souvent évitable et toujours traitable. L'essentiel est d'agir tôt, de ne pas se résigner à vivre avec la douleur et d'adopter de bons gestes au quotidien. Au Centre Chnider à Casablanca, nos kinésithérapeutes établissent un programme personnalisé pour traiter votre douleur et vous apprendre à protéger votre dos durablement.
        </p>
      </section>
    </div>
  ),
  contentAr: (
    <div className="space-y-8">
      {/* Intro */}
      <section className="bg-amber-50 border-r-4 border-amber-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <ArrowUpDown className="text-amber-600" size={28} />
          <h2 className="text-2xl font-bold text-amber-900">آلام الظهر، مشكلة شائعة جداً</h2>
        </div>
        <p className="text-amber-800 leading-relaxed">
          آلام الظهر — أو <strong>ألم أسفل الظهر</strong> — تُصيب 8 من كل 10 أشخاص خلال حياتهم.
          قد تكون حادة (بعد حركة خاطئة) أو مزمنة (موجودة منذ أكثر من 3 أشهر).
          البشرى الجيدة؟ مع التصرفات الصحيحة، يمكن تخفيف الألم بسرعة وتفادي عودته.
        </p>
      </section>

      {/* Why back pain happens */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-amber-500" size={24} />
          <h2 className="text-2xl font-bold">لماذا نُعاني من آلام الظهر؟</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: '🪑', text: 'الجلوس لفترات طويلة بوضعية غير مناسبة' },
            { icon: '🏗️', text: 'حمل الأثقال بدون تقنية صحيحة' },
            { icon: '💪', text: 'ضعف عضلات البطن والظهر' },
            { icon: '😰', text: 'التوتر والضغط النفسي' },
            { icon: '🛏️', text: 'مرتبة نوم لينة جداً أو صلبة جداً' },
            { icon: '🚗', text: 'رحلات طويلة بالسيارة بدون توقف' },
            { icon: '🏋️', text: 'الإفراط الرياضي بدون إحماء' },
            { icon: '⚖️', text: 'زيادة الوزن التي تُجهد الأقراص الفقرية' },
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
            <strong>ابقَ في حركة:</strong> على عكس ما يُعتقد، الراحة التامة تُطيل الألم. امشِ بلطف، غيّر وضعيتك بانتظام. حتى 10 دقائق من المشي الخفيف تُحدث فرقاً.
          </DoCard>
          <DoCard>
            <strong>اعتمد وضعية جلوس صحيحة:</strong> ظهر مستقيم، قدمان مسطحتان، شاشة على مستوى العينين. استخدم وسادة قطنية إن لزم. توقف كل 45-60 دقيقة.
          </DoCard>
          <DoCard>
            <strong>ضع الدفء على العضلات المشدودة:</strong> كيس الماء الساخن أو الوسادة الحرارية على أسفل الظهر يريح العضلات ويُقلل الألم. 15 إلى 20 دقيقة كافية.
          </DoCard>
          <DoCard>
            <strong>قوّي عضلات البطن والظهر:</strong> تمارين التثبيت الخفيفة (البلانك، الجسر الأرضي) تستقر العمود الفقري وتمنع الانتكاسات.
          </DoCard>
          <DoCard>
            <strong>استشر معالجاً فيزيائياً:</strong> عند أول آلام، التدخل المبكر يمنع تحول ألم الظهر الحاد إلى مزمن.
          </DoCard>
          <DoCard>
            <strong>نَم بوضعية جنينية:</strong> على الجانب، الركبتان منحنيتان قليلاً، وسادة بين الركبتين. هي الوضعية التي تريح العمود الفقري ليلاً.
          </DoCard>
          <DoCard>
            <strong>مارس تمددات خفيفة:</strong> تمدد الخلفية الفخذية، العضلة الكمثرية والقطنية. 5 دقائق صباحاً تُغيّر يومك.
          </DoCard>
          <DoCard>
            <strong>أنقص وزنك إن لزم:</strong> كل كيلوغرام أقل يُقلل الضغط على الأقراص الفقرية. فقدان 5 إلى 10 كيلو قد يكون تحولياً.
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
            <strong>لا تبقَ مستلقياً لأيام:</strong> الراحة الكاملة في الفراش عكسية. تُضعف العضلات، تُبطئ الشفاء وتحول الألم الحاد إلى مزمن.
          </DontCard>
          <DontCard>
            <strong>تجنب رفع الأثقال بالانحناء للأمام:</strong> انحنِ دائماً بالركبتين، ابقِ ظهرك مستقيماً وأمسك الحمل قرب جسمك. الظهر المقوّس تحت ثقل هو السبب الأول للفتق الغضروفي.
          </DontCard>
          <DontCard>
            <strong>لا ترتدِ الكعب العالي يومياً:</strong> الكعب يُغير انحناء الظهر ويزيد الضغط على القطنيات. تنوّع مع أحذية مسطحة ومريحة.
          </DontCard>
          <DontCard>
            <strong>تجنب الحركات المفاجئة مع الالتواء:</strong> الاستدارة السريعة، أخذ شيء من الجانب دون تحريك الجسم كله — تصرفات خطيرة على الأقراص.
          </DontCard>
          <DontCard>
            <strong>لا تقود لفترات طويلة بدون توقف:</strong> توقف كل ساعة ونصف إلى ساعتين، امشِ 5 دقائق وتمدد. اهتزازات السيارة تُتعب الأقراص.
          </DontCard>
          <DontCard>
            <strong>لا تُغادر جلسات الترويض الطبي:</strong> برنامج غير مكتمل يترك العضلات غير متوازنة ويزيد خطر الانتكاس.
          </DontCard>
          <DontCard>
            <strong>تجنب تمارين البطن الكلاسيكية (ليفتنج):</strong> في حالة آلام الظهر، تمارين الكرنش تزيد ضغط الأقراص. فضّل التثبيت الساكن (بلانك).
          </DontCard>
        </div>
      </section>

      {/* Emergency signs */}
      <section className="bg-red-50 border-r-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-600" size={24} />
          <h2 className="text-xl font-bold text-red-900">🚨 علامات تستوجب استشارة طارئة</h2>
        </div>
        <ul className="space-y-2 text-red-800">
          <li>• ألم يمتد في الساق حتى القدم (عرق النسا)</li>
          <li>• فقدان القوة في الساقين أو القدمين</li>
          <li>• اضطرابات بولية أو معوية مصاحبة للألم</li>
          <li>• ألم ليلي شديد لا يتحسن بالراحة</li>
          <li>• حمى مصاحبة لألم الظهر</li>
        </ul>
      </section>

      {/* Exercises */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Dumbbell className="text-medical-600" size={24} />
          <h2 className="text-2xl font-bold">3 تمارين بسيطة لتخفيف آلام الظهر</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              num: '1',
              title: 'الجسر الأرضي',
              desc: 'مستلقٍ على ظهرك، ركبتان منحنيتان. ارفع الأرداف ببطء مع شد البطن. ابقَ 5 ثوانٍ. 10 تكرارات. يُقوي عضلات الأرداف ويُخفف القطنيات.',
              color: 'bg-blue-50 border-blue-300'
            },
            {
              num: '2',
              title: 'البلانك (التثبيت)',
              desc: 'متكئاً على كوعيك وأصابع قدميك، جسم مستقيم. ابقَ 20 إلى 30 ثانية دون تقعير الظهر. 3 جولات. يُثبت العمود الفقري كله.',
              color: 'bg-green-50 border-green-300'
            },
            {
              num: '3',
              title: 'تمدد القطة-البقرة',
              desc: 'على أربع، تناوب بين تقويس الظهر للأعلى (القطة) وتقعيره للأسفل (البقرة) بلطف. 10 تكرارات. يُحرّك الفقرات ويُخفف التوتر العضلي.',
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

      {/* Conclusion */}
      <section className="bg-medical-50 border-r-4 border-medical-600 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="text-medical-600" size={24} />
          <h2 className="text-xl font-bold text-medical-900">باختصار</h2>
        </div>
        <p className="text-medical-800 leading-relaxed">
          آلام الظهر في الغالب قابلة للوقاية ودائماً قابلة للعلاج. الأساس هو التصرف مبكراً، عدم القبول بالعيش مع الألم واعتماد التصرفات الصحيحة يومياً. في مركز شنيدر بالدار البيضاء، يضع معالجونا الفيزيائيون برنامجاً مخصصاً لعلاج ألمك وتعليمك حماية ظهرك بشكل دائم.
        </p>
      </section>
    </div>
  ),
  relatedArticles: [
    {
      slug: 'sciatique-hernie-discale',
      titleFr: 'Sciatique & Hernie Discale',
      titleAr: 'عرق النسا والانزلاق الغضروفي',
      icon: <Activity size={20} className="text-medical-600" />
    },
    {
      slug: 'surpoids-et-sciatique',
      titleFr: 'Surpoids et Sciatique',
      titleAr: 'الوزن الزائد وعرق النسا',
      icon: <ArrowUpDown size={20} className="text-medical-600" />
    },
    {
      slug: 'chaussures-mal-de-dos',
      titleFr: 'Chaussures et Mal de Dos',
      titleAr: 'الأحذية وآلام الظهر',
      icon: <Dumbbell size={20} className="text-medical-600" />
    }
  ]
});

export default article;
