import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Language } from '../types';
import {
  filterProfiles,
  findProfile,
  getCityBySlug,
  getDirectoryCities,
  getDirectorySpecialties,
  getDirectoryWhatsapp,
  getDistrictBySlug,
  getSpecialtyBySlug
} from '../src/providerDirectoryData';

interface DirectoryHubProps {
  lang: Language;
}

const DirectoryHub: React.FC<DirectoryHubProps> = ({ lang }) => {
  const { specialty, city, district, profileSlug } = useParams();
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applySpecialty, setApplySpecialty] = useState(specialty || 'kinesitherapie');
  const [applyCity, setApplyCity] = useState(city || 'casablanca');
  const [applyDistrict, setApplyDistrict] = useState(district || '');

  const prefix = lang === 'ar' ? '/ar' : '';

  const labels = useMemo(() => (lang === 'fr'
    ? {
        homeTitle: 'Annuaire medical Maroc: specialites, villes, quartiers et profils verifies',
        homeDesc: 'Annuaire SEO medical bilingue au Maroc: kinesitherapie, orthophonie, radiologie, laboratoire, psychomotricite, clinique et medecins multispecialites.',
        chooseSpecialty: 'Choisir une specialite',
        chooseCity: 'Choisir une ville',
        chooseDistrict: 'Choisir un quartier',
        noProfiles: 'Aucun profil actif dans ce quartier pour le moment.',
        applyBtn: 'Postuler pour ce quartier',
        ctaWhatsApp: 'Contacter sur WhatsApp',
        districtSection: 'Quartiers disponibles',
        cityProfiles: 'Profils principaux de la ville',
        districtProfiles: 'Profils de ce quartier',
        homePractitioners: 'Praticiens a domicile',
        map: 'Localisation',
        hours: 'Horaires',
        services: 'Services',
        email: 'Email',
        phone: 'Telephone',
        intro: 'Pages SEO croisees par specialite, ville et quartier pour une meilleure visibilite locale.',
        profilePageSuffix: 'profil complet, services, horaires, galerie et localisation'
      }
    : {
        homeTitle: 'دليل طبي بالمغرب: تخصصات ومدن واحياء وملفات موثوقة',
        homeDesc: 'دليل طبي ثنائي اللغة يشمل الترويض الطبي، تقويم النطق، الاشعة، المختبر، العلاج الحركي النفسي، المصحات والطب متعدد التخصصات.',
        chooseSpecialty: 'اختيار التخصص',
        chooseCity: 'اختيار المدينة',
        chooseDistrict: 'اختيار الحي',
        noProfiles: 'لا توجد ملفات نشطة في هذا الحي حاليا.',
        applyBtn: 'التقديم لهذا الحي',
        ctaWhatsApp: 'التواصل عبر واتساب',
        districtSection: 'الاحياء المتاحة',
        cityProfiles: 'ملفات رئيسية داخل المدينة',
        districtProfiles: 'ملفات هذا الحي',
        homePractitioners: 'ممارسون منزليون',
        map: 'الموقع',
        hours: 'مواعيد العمل',
        services: 'الخدمات',
        email: 'البريد الالكتروني',
        phone: 'الهاتف',
        intro: 'صفحات SEO متقاطعة حسب التخصص والمدينة والحي لرفع الظهور المحلي.',
        profilePageSuffix: 'ملف كامل، خدمات، مواعيد، معرض وصلة الموقع'
      }), [lang]);

  const specialties = getDirectorySpecialties();
  const cities = getDirectoryCities();

  const currentSpecialty = specialty ? getSpecialtyBySlug(specialty) : null;
  const currentCity = city ? getCityBySlug(city) : null;
  const currentDistrict = city && district ? getDistrictBySlug(city, district) : null;
  const currentProfile = (specialty && city && district && profileSlug)
    ? findProfile({ specialtySlug: specialty, citySlug: city, districtSlug: district, profileSlug })
    : null;

  const seo = useMemo(() => {
    if (currentProfile) {
      const title = lang === 'fr'
        ? `${currentProfile.nameFr} | ${labels.profilePageSuffix}`
        : `${currentProfile.nameAr} | ${labels.profilePageSuffix}`;
      const description = lang === 'fr'
        ? `${currentProfile.descriptionFr} ${currentProfile.addressFr}.`
        : `${currentProfile.descriptionAr} ${currentProfile.addressAr}.`;
      const keywords = lang === 'fr'
        ? `${currentProfile.specialtySlug}, ${currentProfile.citySlug}, ${currentProfile.districtSlug}, profil medical, centre, domicile`
        : `${currentProfile.specialtySlug}, ${currentProfile.citySlug}, ${currentProfile.districtSlug}, ملف طبي, مركز, منزلي`;
      return { title, description, keywords };
    }

    if (currentDistrict && currentSpecialty && currentCity) {
      const title = lang === 'fr'
        ? `${currentSpecialty.fr} a ${currentDistrict.fr} ${currentCity.fr} | 2 profils + domicile`
        : `${currentSpecialty.ar} في ${currentDistrict.ar} ${currentCity.ar} | ملفان + منزلي`;
      const description = lang === 'fr'
        ? `Comparez les profils ${currentSpecialty.fr} a ${currentDistrict.fr}, ${currentCity.fr} avec horaires, services, galerie, contact et localisation.`
        : `قارنوا ملفات ${currentSpecialty.ar} في ${currentDistrict.ar}، ${currentCity.ar} مع المواعيد والخدمات والمعرض ووسائل التواصل.`;
      const keywords = lang === 'fr'
        ? `${currentSpecialty.fr} ${currentDistrict.fr}, ${currentSpecialty.fr} ${currentCity.fr}, profil quartier`
        : `${currentSpecialty.ar} ${currentDistrict.ar}, ${currentSpecialty.ar} ${currentCity.ar}, ملف حي`;
      return { title, description, keywords };
    }

    if (currentCity && currentSpecialty) {
      const title = lang === 'fr'
        ? `${currentSpecialty.fr} a ${currentCity.fr} | quartiers et profils`
        : `${currentSpecialty.ar} في ${currentCity.ar} | احياء وملفات`;
      const description = lang === 'fr'
        ? `Page ville ${currentSpecialty.fr} ${currentCity.fr}: liste des quartiers, profils centres et praticiens a domicile.`
        : `صفحة المدينة ${currentSpecialty.ar} ${currentCity.ar}: قائمة الاحياء، ملفات المراكز والممارسين المنزليين.`;
      const keywords = lang === 'fr'
        ? `${currentSpecialty.fr} ${currentCity.fr}, quartier, centre, domicile`
        : `${currentSpecialty.ar} ${currentCity.ar}, حي, مركز, منزلي`;
      return { title, description, keywords };
    }

    if (currentSpecialty) {
      const title = lang === 'fr'
        ? `${currentSpecialty.fr} Maroc | villes, quartiers et profils`
        : `${currentSpecialty.ar} المغرب | مدن واحياء وملفات`;
      const description = lang === 'fr'
        ? `Consultez les pages ${currentSpecialty.fr} par ville et quartier avec profils detailles et contact direct.`
        : `تصفحوا صفحات ${currentSpecialty.ar} حسب المدينة والحي مع ملفات مفصلة وتواصل مباشر.`;
      const keywords = lang === 'fr'
        ? `${currentSpecialty.fr}, maroc, ville, quartier, profil`
        : `${currentSpecialty.ar}, المغرب, مدينة, حي, ملف`;
      return { title, description, keywords };
    }

    return {
      title: labels.homeTitle,
      description: labels.homeDesc,
      keywords: lang === 'fr'
        ? 'annuaire medical maroc, kinesitherapie, orthophonie, radiologie, laboratoire, clinique'
        : 'دليل طبي المغرب, الترويض الطبي, تقويم النطق, الاشعة, المختبر, المصحة'
    };
  }, [currentCity, currentDistrict, currentProfile, currentSpecialty, labels, lang]);

  const whatsappNumber = getDirectoryWhatsapp();

  const cityProfiles = currentSpecialty && currentCity
    ? filterProfiles({ specialtySlug: currentSpecialty.slug, citySlug: currentCity.slug, districtSlug: 'ville' })
    : [];

  const districtProfiles = currentSpecialty && currentCity && currentDistrict
    ? filterProfiles({ specialtySlug: currentSpecialty.slug, citySlug: currentCity.slug, districtSlug: currentDistrict.slug, type: 'center' })
    : [];

  const districtHomeProfiles = currentSpecialty && currentCity
    ? filterProfiles({ specialtySlug: currentSpecialty.slug, citySlug: currentCity.slug, type: 'home' })
    : [];

  const cityDistrictCounts = useMemo(() => {
    if (!currentSpecialty || !currentCity) return [];

    return currentCity.districts.map((districtItem) => {
      const count = filterProfiles({
        specialtySlug: currentSpecialty.slug,
        citySlug: currentCity.slug,
        districtSlug: districtItem.slug,
        type: 'center'
      }).length;
      return { district: districtItem, count };
    });
  }, [currentCity, currentSpecialty]);

  const openApplyWhatsApp = () => {
    const s = getSpecialtyBySlug(applySpecialty);
    const c = getCityBySlug(applyCity);
    const d = c?.districts.find((item) => item.slug === applyDistrict);
    const message = lang === 'fr'
      ? `Bonjour, je souhaite postuler pour ouvrir un profil. Specialite: ${s?.fr || applySpecialty}. Ville: ${c?.fr || applyCity}. Quartier: ${d?.fr || applyDistrict || '-'}.`
      : `السلام عليكم، اود التقديم لاضافة ملف. التخصص: ${s?.ar || applySpecialty}. المدينة: ${c?.ar || applyCity}. الحي: ${d?.ar || applyDistrict || '-'}.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderProfileCard = (profile: any) => {
    const profileName = lang === 'fr' ? profile.nameFr : profile.nameAr;
    const profileDescription = lang === 'fr' ? profile.descriptionFr : profile.descriptionAr;
    const profileAddress = lang === 'fr' ? profile.addressFr : profile.addressAr;
    const profileServices = lang === 'fr' ? profile.servicesFr : profile.servicesAr;
    const profileHours = lang === 'fr' ? profile.hoursFr : profile.hoursAr;
    const profilePath = `${prefix}/annuaire/${profile.specialtySlug}/${profile.citySlug}/${profile.districtSlug}/${profile.slug}`;

    return (
      <article key={`${profile.slug}-${profile.citySlug}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-start gap-4">
          <img src={profile.logo} alt={profileName} className="h-16 w-16 rounded-xl object-cover border border-slate-200" loading="lazy" />
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-slate-900">{profileName}</h3>
            <p className="text-sm text-slate-600">{profileDescription}</p>
            {profile.isVerified && (
              <span className="mt-2 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                {lang === 'fr' ? 'Profil verifie' : 'ملف موثوق'}
              </span>
            )}
          </div>
        </div>

        <ul className="mt-4 space-y-1 text-sm text-slate-700">
          <li><strong>{labels.phone}:</strong> {profile.phone}</li>
          <li><strong>{labels.email}:</strong> {profile.email}</li>
          <li><strong>{labels.hours}:</strong> {profileHours}</li>
          <li><strong>{labels.map}:</strong> {profileAddress}</li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {profileServices.slice(0, 4).map((service: string) => (
            <span key={service} className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">{service}</span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Link to={profilePath} className="rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800 transition">
            {lang === 'fr' ? 'Voir profil complet' : 'عرض الملف الكامل'}
          </Link>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent((lang === 'fr' ? `Bonjour, je souhaite contacter ${profile.nameFr}.` : `السلام عليكم، اريد التواصل مع ${profile.nameAr}.`))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-100 transition"
          >
            {labels.ctaWhatsApp}
          </a>
        </div>
      </article>
    );
  };

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} keywords={seo.keywords} />

      <div className="bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-700 text-white py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{seo.title}</h1>
          <p className="mt-4 max-w-3xl text-sky-50 text-lg">{labels.intro}</p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <Link to={`${prefix}/annuaire`} className="rounded-full bg-white/15 px-3 py-1.5 hover:bg-white/25 transition">{lang === 'fr' ? 'Accueil annuaire' : 'الصفحة الرئيسية للدليل'}</Link>
            {currentSpecialty && <Link to={`${prefix}/annuaire/${currentSpecialty.slug}`} className="rounded-full bg-white/15 px-3 py-1.5 hover:bg-white/25 transition">{lang === 'fr' ? currentSpecialty.fr : currentSpecialty.ar}</Link>}
            {currentCity && currentSpecialty && <Link to={`${prefix}/annuaire/${currentSpecialty.slug}/${currentCity.slug}`} className="rounded-full bg-white/15 px-3 py-1.5 hover:bg-white/25 transition">{lang === 'fr' ? currentCity.fr : currentCity.ar}</Link>}
            {currentDistrict && currentSpecialty && currentCity && <Link to={`${prefix}/annuaire/${currentSpecialty.slug}/${currentCity.slug}/${currentDistrict.slug}`} className="rounded-full bg-white/15 px-3 py-1.5 hover:bg-white/25 transition">{lang === 'fr' ? currentDistrict.fr : currentDistrict.ar}</Link>}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {!specialty && (
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{labels.chooseSpecialty}</h2>
              <p className="text-slate-600">{seo.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {specialties.map((item) => (
                <Link
                  key={item.slug}
                  to={`${prefix}/annuaire/${item.slug}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-sky-300 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-bold text-slate-900">{lang === 'fr' ? item.fr : item.ar}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {lang === 'fr'
                      ? `Voir les villes et quartiers pour ${item.fr}`
                      : `عرض المدن والاحياء لتخصص ${item.ar}`}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {specialty && currentSpecialty && !city && (
          <section className="space-y-7">
            <h2 className="text-2xl font-bold text-slate-900">{labels.chooseCity}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {cities.map((cityItem) => (
                <Link
                  key={cityItem.slug}
                  to={`${prefix}/annuaire/${currentSpecialty.slug}/${cityItem.slug}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-sky-300 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-bold text-slate-900">{lang === 'fr' ? cityItem.fr : cityItem.ar}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {lang === 'fr'
                      ? `${currentSpecialty.fr} par quartier + profils domicile`
                      : `${currentSpecialty.ar} حسب الاحياء + ممارسون منزليون`}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {specialty && currentSpecialty && city && currentCity && !district && (
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{labels.districtSection}</h2>
              <p className="text-slate-600 mt-1">
                {lang === 'fr'
                  ? `Page locale ${currentSpecialty.fr} ${currentCity.fr}.`
                  : `صفحة محلية ${currentSpecialty.ar} ${currentCity.ar}.`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {cityDistrictCounts.map(({ district: districtItem, count }) => (
                <Link
                  key={districtItem.slug}
                  to={`${prefix}/annuaire/${currentSpecialty.slug}/${currentCity.slug}/${districtItem.slug}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-sky-300 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-bold text-slate-900">{lang === 'fr' ? districtItem.fr : districtItem.ar}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {lang === 'fr' ? `${count} profils centres` : `${count} ملفات مراكز`}
                  </p>
                </Link>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{labels.cityProfiles}</h3>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {cityProfiles.map((profile) => renderProfileCard(profile))}
              </div>
            </div>
          </section>
        )}

        {specialty && currentSpecialty && city && currentCity && district && currentDistrict && !profileSlug && (
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{labels.districtProfiles}</h2>
              <p className="text-slate-600 mt-1">
                {lang === 'fr'
                  ? `${currentSpecialty.fr} a ${currentDistrict.fr}, ${currentCity.fr}`
                  : `${currentSpecialty.ar} في ${currentDistrict.ar}، ${currentCity.ar}`}
              </p>
            </div>

            {districtProfiles.length > 0 ? (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {districtProfiles.map((profile) => renderProfileCard(profile))}
              </div>
            ) : (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-amber-800 font-semibold">{labels.noProfiles}</p>
                <button
                  type="button"
                  onClick={() => {
                    setApplySpecialty(currentSpecialty.slug);
                    setApplyCity(currentCity.slug);
                    setApplyDistrict(currentDistrict.slug);
                    setShowApplyModal(true);
                  }}
                  className="mt-3 rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700 transition"
                >
                  {labels.applyBtn}
                </button>
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{labels.homePractitioners}</h3>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {districtHomeProfiles.map((profile) => renderProfileCard(profile))}
              </div>
            </div>
          </section>
        )}

        {currentProfile && (
          <section className="space-y-8">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col lg:flex-row gap-6">
                <img src={currentProfile.logo} alt={lang === 'fr' ? currentProfile.nameFr : currentProfile.nameAr} className="h-28 w-28 rounded-2xl object-cover border border-slate-200" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{lang === 'fr' ? currentProfile.nameFr : currentProfile.nameAr}</h2>
                  <p className="mt-2 text-slate-700">{lang === 'fr' ? currentProfile.descriptionFr : currentProfile.descriptionAr}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href={`tel:${currentProfile.phone}`} className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition">{labels.phone}: {currentProfile.phone}</a>
                    <a href={`mailto:${currentProfile.email}`} className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition">{labels.email}: {currentProfile.email}</a>
                    <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lang === 'fr' ? `Bonjour, je souhaite un rendez-vous avec ${currentProfile.nameFr}.` : `السلام عليكم، اريد موعدا مع ${currentProfile.nameAr}.`)}`} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition">{labels.ctaWhatsApp}</a>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm text-slate-700">
                <p><strong>{labels.hours}:</strong> {lang === 'fr' ? currentProfile.hoursFr : currentProfile.hoursAr}</p>
                <p><strong>{labels.map}:</strong> {lang === 'fr' ? currentProfile.addressFr : currentProfile.addressAr}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {(lang === 'fr' ? currentProfile.servicesFr : currentProfile.servicesAr).map((service: string) => (
                  <span key={service} className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">{service}</span>
                ))}
              </div>

              <div className="mt-6">
                <a href={currentProfile.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800 transition">
                  {lang === 'fr' ? 'Ouvrir la localisation' : 'فتح الموقع'}
                </a>
              </div>
            </article>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{lang === 'fr' ? 'Galerie du centre (6 photos)' : 'معرض المركز (6 صور)'}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {currentProfile.gallery.map((image: string, index: number) => (
                  <img key={image} src={image} alt={`${lang === 'fr' ? currentProfile.nameFr : currentProfile.nameAr} ${index + 1}`} className="h-52 w-full rounded-xl object-cover border border-slate-200" loading="lazy" decoding="async" />
                ))}
              </div>
            </section>
          </section>
        )}

        {specialty && !currentSpecialty && (
          <p className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
            {lang === 'fr' ? 'Specialite non trouvee.' : 'التخصص غير موجود.'}
          </p>
        )}
        {city && !currentCity && (
          <p className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
            {lang === 'fr' ? 'Ville non trouvee.' : 'المدينة غير موجودة.'}
          </p>
        )}
        {district && !currentDistrict && (
          <p className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
            {lang === 'fr' ? 'Quartier non trouve.' : 'الحي غير موجود.'}
          </p>
        )}
        {profileSlug && !currentProfile && (
          <p className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
            {lang === 'fr' ? 'Profil non trouve.' : 'الملف غير موجود.'}
          </p>
        )}
      </div>

      {showApplyModal && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-900/60 px-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-slate-900">{labels.applyBtn}</h3>
            <p className="mt-1 text-sm text-slate-600">
              {lang === 'fr'
                ? 'Confirmez specialite, ville et quartier puis envoyez votre demande.'
                : 'اكدوا التخصص والمدينة والحي ثم ارسلوا طلبكم.'}
            </p>

            <div className="mt-4 space-y-3">
              <label className="block text-sm font-medium text-slate-700">
                {labels.chooseSpecialty}
                <select value={applySpecialty} onChange={(event) => setApplySpecialty(event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2">
                  {specialties.map((item) => (
                    <option key={item.slug} value={item.slug}>{lang === 'fr' ? item.fr : item.ar}</option>
                  ))}
                </select>
              </label>

              <label className="block text-sm font-medium text-slate-700">
                {labels.chooseCity}
                <select value={applyCity} onChange={(event) => {
                  const nextCity = event.target.value;
                  setApplyCity(nextCity);
                  const nextDistrict = getCityBySlug(nextCity)?.districts[0]?.slug || '';
                  setApplyDistrict(nextDistrict);
                }} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2">
                  {cities.map((item) => (
                    <option key={item.slug} value={item.slug}>{lang === 'fr' ? item.fr : item.ar}</option>
                  ))}
                </select>
              </label>

              <label className="block text-sm font-medium text-slate-700">
                {labels.chooseDistrict}
                <select value={applyDistrict} onChange={(event) => setApplyDistrict(event.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2">
                  {(getCityBySlug(applyCity)?.districts || []).map((item) => (
                    <option key={item.slug} value={item.slug}>{lang === 'fr' ? item.fr : item.ar}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button type="button" onClick={() => setShowApplyModal(false)} className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                {lang === 'fr' ? 'Fermer' : 'اغلاق'}
              </button>
              <button type="button" onClick={openApplyWhatsApp} className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                {labels.ctaWhatsApp}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DirectoryHub;
