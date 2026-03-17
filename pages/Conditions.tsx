import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { CONTENT, PHONE_NUMBER } from '../constants';
import SEOHead from '../components/SEOHead';
import { Activity, AlertCircle, Zap, Bone, Dumbbell, Stethoscope, Brain, Baby, Flame, ArrowUpDown } from 'lucide-react';

interface ConditionsProps {
  lang: Language;
}

const getConditionIcon = (iconName?: string) => {
  switch (iconName) {
    case 'Zap': return <Zap size={28} />;
    case 'Spine': return <ArrowUpDown size={28} />;
    case 'Dumbbell': return <Dumbbell size={28} />;
    case 'Bone': return <Bone size={28} />;
    case 'Stethoscope': return <Stethoscope size={28} />;
    case 'Brain': return <Brain size={28} />;
    case 'Baby': return <Baby size={28} />;
    case 'Flame': return <Flame size={28} />;
    default: return <Activity size={28} />;
  }
};

const Conditions: React.FC<ConditionsProps> = ({ lang }) => {
  const t = CONTENT[lang];
  const prefix = lang === 'ar' ? '/ar' : '';

  return (
    <>
      <SEOHead 
        title={t.seo.conditionsTitle} 
        description={t.seo.conditionsDesc} 
        keywords={lang === 'fr' ? 'kiné ainchoq, kiné sbata, kiné casablanca, kiné casa, kiné autour de moi, hernie discale, sciatique, arthrose, paralysie faciale, AVC, rhumatologie, lombalgie, cervicalgie, traumatologie sport' : 'مروض طبي الدار البيضاء, مروض قريب مني, عين الشق, سباتة, علاج الانزلاق الغضروفي, عرق النسا, علاج المفاصل, علاج الأعصاب'}
      />
      
      <div className="bg-medical-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{t.conditions.title}</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t.conditions.subtitle}</p>
          <p className="text-slate-700 max-w-3xl mx-auto mt-4">
            {lang === 'fr' ? (
              <>
                Nous traitons les cas de <strong>hernie discale</strong>, <strong>sciatique</strong>, <strong>arthrose</strong> et douleurs chroniques.
                Découvrez nos <Link to={`${prefix}/services`} className="text-medical-700 font-semibold hover:underline">services de kinésithérapie</Link>
                {' '}et l’option <Link to={`${prefix}/a-domicile`} className="text-medical-700 font-semibold hover:underline">kiné à domicile à Casablanca</Link>.
              </>
            ) : (
              <>
                نعالج حالات <strong>الانزلاق الغضروفي</strong> و<strong>عرق النسا</strong> و<strong>خشونة المفاصل</strong> والآلام المزمنة.
                تعرفوا على <Link to={`${prefix}/services`} className="text-medical-700 font-semibold hover:underline">خدمات الترويض الطبي</Link>
                {' '}وخيار <Link to={`${prefix}/a-domicile`} className="text-medical-700 font-semibold hover:underline">الترويض المنزلي بالدار البيضاء</Link>.
              </>
            )}
          </p>
          <p className="text-medical-800 bg-medical-100 border border-medical-200 rounded-lg px-4 py-3 max-w-3xl mx-auto mt-5 font-semibold">
            {lang === 'fr'
              ? 'Tarifs de prise en charge a partir de 200 DH selon la pathologie et le bilan initial.'
              : 'الأسعار تبدأ من 200 درهم حسب نوع الحالة والتقييم الأولي.'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.conditions.items.map((item, index) => (
            <div key={item.id} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6 rounded-2xl border border-medical-100 bg-gradient-to-br from-medical-50 via-white to-blue-50 p-6 flex items-center gap-4">
                <div className="w-14 h-14 bg-medical-600 text-white rounded-xl flex items-center justify-center shrink-0">
                  {getConditionIcon(item.iconName)}
                </div>
                <div>
                  <p className="text-sm text-slate-500">
                    {lang === 'fr' ? 'Pathologie traitée' : 'الحالة المعالجة'}
                  </p>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                </div>
              </div>
              <div className="w-14 h-14 bg-medical-100 text-medical-600 rounded-full flex items-center justify-center mb-6">
                {getConditionIcon(item.iconName)}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {item.description}
              </p>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex gap-3 items-start">
                <AlertCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <div>
                  <span className="font-bold text-red-700 block mb-1">
                    {lang === 'fr' ? 'Symptômes :' : 'الأعراض :'}
                  </span>
                  <span className="text-red-600">{item.symptoms}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                 <span className="text-sm text-gray-400">
                    {lang === 'fr' ? 'Consultation recommandée' : 'ينصح بالاستشارة'}
                 </span>
                 <a href={`tel:${PHONE_NUMBER}`} className="text-medical-600 font-bold hover:underline">
                    {lang === 'fr' ? 'Réserver →' : 'حجز ←'}
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internal backlinks */}
      <section className="bg-medical-50 border-t border-medical-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-700 mb-4 text-lg">
            {lang === 'fr' ? (
              <>Intéressé(e) par nos{' '}
                <Link to={`${prefix}/services`} className="text-medical-700 font-semibold hover:underline">services de kinésithérapie</Link>
                {' '}ou notre offre{' '}
                <Link to={`${prefix}/a-domicile`} className="text-medical-700 font-semibold hover:underline">kiné à domicile à Casablanca</Link> ?
              </>
            ) : (
              <>هل تودون الاطلاع على{' '}
                <Link to={`${prefix}/services`} className="text-medical-700 font-semibold hover:underline">خدمات الترويض</Link>
                {' '}أو{' '}
                <Link to={`${prefix}/a-domicile`} className="text-medical-700 font-semibold hover:underline">خدمة الترويض المنزلي</Link>؟
              </>
            )}
          </p>
          <Link
            to={`${prefix}/contact`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-medical-600 text-white font-bold rounded-xl hover:bg-medical-700 transition shadow-sm"
          >
            {lang === 'fr' ? 'Prendre RDV →' : '← حجز موعد'}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Conditions;