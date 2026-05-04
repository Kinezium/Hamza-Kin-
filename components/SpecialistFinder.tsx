import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Language } from '../types';
import { getDirectoryCities, getDirectorySpecialties, normalizeSpecialtySlug } from '../src/providerDirectoryData';

interface SpecialistFinderProps {
  lang: Language;
}

const SpecialistFinder: React.FC<SpecialistFinderProps> = ({ lang }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const specialties = getDirectorySpecialties();
  const cities = getDirectoryCities();

  const [specialty, setSpecialty] = useState('kinesitherapie');
  const [city, setCity] = useState('casablanca');

  const districtOptions = useMemo(() => {
    const selectedCity = cities.find((item) => item.slug === city);
    return selectedCity?.districts || [];
  }, [cities, city]);

  const [district, setDistrict] = useState(districtOptions[0]?.slug || '');

  React.useEffect(() => {
    const first = districtOptions[0]?.slug || '';
    if (!districtOptions.some((item) => item.slug === district)) {
      setDistrict(first);
    }
  }, [district, districtOptions]);

  const labels = lang === 'fr'
    ? {
        sectionTitle: 'Trouver un specialiste a cote de vous',
        sectionText: 'Medecin, labo, pharmacie, dentiste, clinique, kine, orthophoniste, psychomotricite et autres.',
        openPopup: 'Trouver maintenant',
        popupTitle: 'Filtrer par specialite, ville et quartier',
        specialty: 'Type',
        city: 'Ville',
        district: 'Quartier',
        apply: 'Voir les specialistes',
        close: 'Fermer'
      }
    : {
        sectionTitle: 'ابحث عن متخصص قريب منك',
        sectionText: 'طبيب، مختبر، صيدلية، طبيب اسنان، مصحة، ترويض طبي، تقويم النطق، العلاج الحركي النفسي وغيرها.',
        openPopup: 'ابحث الان',
        popupTitle: 'تصفية حسب التخصص والمدينة والحي',
        specialty: 'النوع',
        city: 'المدينة',
        district: 'الحي',
        apply: 'عرض المتخصصين',
        close: 'اغلاق'
      };

  const onSubmitFilter = () => {
    const base = lang === 'ar' ? '/ar/annuaire' : '/annuaire';
    const params = new URLSearchParams({
      specialty: normalizeSpecialtySlug(specialty),
      city,
      district
    });
    navigate(`${base}?${params.toString()}`);
    setOpen(false);
  };

  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">{labels.sectionTitle}</h2>
          <p className="mt-2 text-slate-700 max-w-3xl">{labels.sectionText}</p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-4 rounded-xl bg-sky-700 px-5 py-3 text-white font-semibold hover:bg-sky-800 transition"
          >
            {labels.openPopup}
          </button>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-900/60 p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <h3 className="text-xl font-bold text-slate-900">{labels.popupTitle}</h3>

            <div className="mt-4 space-y-3">
              <label className="block text-sm font-medium text-slate-700">
                {labels.specialty}
                <select
                  value={specialty}
                  onChange={(event) => setSpecialty(event.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                >
                  {specialties.map((item) => (
                    <option key={item.slug} value={item.slug}>{lang === 'fr' ? item.fr : item.ar}</option>
                  ))}
                </select>
              </label>

              <label className="block text-sm font-medium text-slate-700">
                {labels.city}
                <select
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                >
                  {cities.map((item) => (
                    <option key={item.slug} value={item.slug}>{lang === 'fr' ? item.fr : item.ar}</option>
                  ))}
                </select>
              </label>

              <label className="block text-sm font-medium text-slate-700">
                {labels.district}
                <select
                  value={district}
                  onChange={(event) => setDistrict(event.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                >
                  {districtOptions.map((item) => (
                    <option key={item.slug} value={item.slug}>{lang === 'fr' ? item.fr : item.ar}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {labels.close}
              </button>
              <button
                type="button"
                onClick={onSubmitFilter}
                className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                {labels.apply}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpecialistFinder;
