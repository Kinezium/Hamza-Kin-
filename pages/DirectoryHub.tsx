import React, { useMemo, useState, useCallback } from 'react';
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom';
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
  getSpecialtyBySlug,
  normalizeSpecialtySlug
} from '../src/providerDirectoryData';

interface DirectoryHubProps {
  lang: Language;
}

const DirectoryHub: React.FC<DirectoryHubProps> = ({ lang }) => {
  const { specialty, city, district, profileSlug } = useParams();
  const [searchParams] = useSearchParams();

  const resolvedSpecialtySlug = normalizeSpecialtySlug(specialty || searchParams.get('specialty') || '');
  const resolvedCitySlug = (city || searchParams.get('city') || '').trim().toLowerCase();
  const resolvedDistrictSlug = (district || searchParams.get('district') || '').trim().toLowerCase();

  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applySpecialty, setApplySpecialty] = useState(resolvedSpecialtySlug || 'kinesitherapie');
  const [applyCity, setApplyCity] = useState(resolvedCitySlug || 'casablanca');
  const [applyDistrict, setApplyDistrict] = useState(resolvedDistrictSlug || '');

  const navigate = useNavigate();
  // Search/filter state (annuaire homepage)
  const [searchText, setSearchText] = useState('');
  const [searchSpecialty, setSearchSpecialty] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [searchDistrict, setSearchDistrict] = useState('');

  const handleSearch = useCallback(() => {
    const sp = normalizeSpecialtySlug(searchText || searchSpecialty);
    const ct = searchCity.trim().toLowerCase();
    const dt = searchDistrict.trim().toLowerCase();
    if (sp && ct && dt) {
      navigate(`${prefix}/annuaire/${sp}/${ct}/${dt}`);
    } else if (sp && ct) {
      navigate(`${prefix}/annuaire/${sp}/${ct}`);
    } else if (sp) {
      navigate(`${prefix}/annuaire/${sp}`);
    } else if (ct) {
      // no specialty but city → go to annuaire with city query
      navigate(`${prefix}/annuaire?city=${ct}${dt ? `&district=${dt}` : ''}`);
    }
  }, [searchText, searchSpecialty, searchCity, searchDistrict, navigate, prefix]);

  const prefix = lang === 'ar' ? '/ar' : '';

  const labels = useMemo(() => (lang === 'fr'
    ? {
        homeTitle: 'Annuaire medical Maroc — Trouvez un praticien pres de chez vous',
        homeDesc: 'Annuaire medical bilingue Maroc: kinesitherapie, orthophonie, medecins, pharmacies, laboratoires, cliniques et 25 specialites medicales et paramedicales.',
        chooseSpecialty: 'Parcourir par specialite',
        chooseCity: 'Choisir une ville',
        chooseDistrict: 'Choisir un quartier',
        noProfiles: 'Aucun partenaire actif dans ce quartier pour le moment.',
        applyBtn: 'Devenir partenaire dans ce quartier',
        searchPlaceholder: 'Kinesitherapie, Cardiologue, Pharmacie...',
        searchBtn: 'Rechercher',
        allSpecialties: 'Toutes les specialites',
        allCities: 'Toutes les villes',
        allDistricts: 'Tous les quartiers',
        partnerBadge: 'Partenaire verifie',
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
        homeTitle: 'الدليل الطبي بالمغرب — ابحث عن ممارس صحي قريب منك',
        homeDesc: 'دليل طبي ثنائي اللغة بالمغرب: الترويض الطبي، تقويم النطق، الاطباء، الصيدليات، المختبرات، المصحات و25 تخصصا طبيا وشبه طبي.',
        chooseSpecialty: 'تصفح حسب التخصص',
        chooseCity: 'اختيار المدينة',
        chooseDistrict: 'اختيار الحي',
        noProfiles: 'لا يوجد شريك نشط في هذا الحي حاليا.',
        applyBtn: 'انضم كشريك في هذا الحي',
        searchPlaceholder: 'ترويض طبي، طبيب قلب، صيدلية...',
        searchBtn: 'بحث',
        allSpecialties: 'جميع التخصصات',
        allCities: 'جميع المدن',
        allDistricts: 'جميع الاحياء',
        partnerBadge: 'شريك موثوق',
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

  const currentSpecialty = resolvedSpecialtySlug ? getSpecialtyBySlug(resolvedSpecialtySlug) : null;
  const currentCity = resolvedCitySlug ? getCityBySlug(resolvedCitySlug) : null;
  const currentDistrict = resolvedCitySlug && resolvedDistrictSlug ? getDistrictBySlug(resolvedCitySlug, resolvedDistrictSlug) : null;
  const currentProfile = (resolvedSpecialtySlug && resolvedCitySlug && resolvedDistrictSlug && profileSlug)
    ? findProfile({ specialtySlug: resolvedSpecialtySlug, citySlug: resolvedCitySlug, districtSlug: resolvedDistrictSlug, profileSlug })
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
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                ✓ {lang === 'fr' ? 'Partenaire verifie' : 'شريك موثوق'}
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

      {/* Hero / breadcrumb bar */}
      <div className="bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-700 text-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">{seo.title}</h1>

          {/* Search engine — only on homepage */}
          {!resolvedSpecialtySlug && (
            <div className="mt-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-5 md:p-6 max-w-3xl">
              <p className="text-sky-100 font-semibold mb-4 text-sm uppercase tracking-wider">
                {lang === 'fr' ? '🔍 Trouver un praticien partenaire' : '🔍 ابحث عن ممارس شريك'}
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder={lang === 'fr' ? 'Kinesitherapie, Cardiologue, Pharmacie...' : 'ترويض طبي، طبيب قلب، صيدلية...'}
                  className="w-full rounded-xl bg-white text-slate-900 placeholder-slate-400 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <select
                    value={searchSpecialty}
                    onChange={(e) => setSearchSpecialty(e.target.value)}
                    className="rounded-xl bg-white text-slate-900 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
                  >
                    <option value="">{lang === 'fr' ? 'Toutes les spécialités' : 'جميع التخصصات'}</option>
                    {specialties.map((s) => (
                      <option key={s.slug} value={s.slug}>{(s as any).icon} {lang === 'fr' ? s.fr : s.ar}</option>
                    ))}
                  </select>
                  <select
                    value={searchCity}
                    onChange={(e) => { setSearchCity(e.target.value); setSearchDistrict(''); }}
                    className="rounded-xl bg-white text-slate-900 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
                  >
                    <option value="">{lang === 'fr' ? 'Toutes les villes' : 'جميع المدن'}</option>
                    {cities.map((c) => (
                      <option key={c.slug} value={c.slug}>{lang === 'fr' ? c.fr : c.ar}</option>
                    ))}
                  </select>
                  <select
                    value={searchDistrict}
                    onChange={(e) => setSearchDistrict(e.target.value)}
                    className="rounded-xl bg-white text-slate-900 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
                    disabled={!searchCity}
                  >
                    <option value="">{lang === 'fr' ? 'Tous les quartiers' : 'جميع الأحياء'}</option>
                    {searchCity && (cities.find((c) => c.slug === searchCity)?.districts || []).map((d) => (
                      <option key={d.slug} value={d.slug}>{lang === 'fr' ? d.fr : d.ar}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  onClick={handleSearch}
                  className="self-start rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-2.5 text-sm transition"
                >
                  {lang === 'fr' ? 'Rechercher' : 'بحث'}
                </button>
              </div>
            </div>
          )}

          {/* Breadcrumb for sub-pages */}
          {(resolvedSpecialtySlug || resolvedCitySlug) && (
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              <Link to={`${prefix}/annuaire`} className="rounded-full bg-white/15 px-3 py-1.5 hover:bg-white/25 transition">{lang === 'fr' ? 'Annuaire' : 'الدليل'}</Link>
              {currentSpecialty && <Link to={`${prefix}/annuaire/${currentSpecialty.slug}`} className="rounded-full bg-white/15 px-3 py-1.5 hover:bg-white/25 transition">{(currentSpecialty as any).icon} {lang === 'fr' ? currentSpecialty.fr : currentSpecialty.ar}</Link>}
              {currentCity && currentSpecialty && <Link to={`${prefix}/annuaire/${currentSpecialty.slug}/${currentCity.slug}`} className="rounded-full bg-white/15 px-3 py-1.5 hover:bg-white/25 transition">{lang === 'fr' ? currentCity.fr : currentCity.ar}</Link>}
              {currentDistrict && currentSpecialty && currentCity && <Link to={`${prefix}/annuaire/${currentSpecialty.slug}/${currentCity.slug}/${currentDistrict.slug}`} className="rounded-full bg-white/20 border border-white/30 px-3 py-1.5">{lang === 'fr' ? currentDistrict.fr : currentDistrict.ar}</Link>}
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {!resolvedSpecialtySlug && (
          <section className="space-y-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{labels.chooseSpecialty}</h2>
                <p className="text-slate-500 mt-1 text-sm">
                  {lang === 'fr'
                    ? 'Cabinets, centres et praticiens partenaires partout au Maroc'
                    : 'عيادات، مراكز وممارسون شركاء في جميع أنحاء المغرب'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {specialties.map((item) => (
                <Link
                  key={item.slug}
                  to={`${prefix}/annuaire/${item.slug}`}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-center hover:border-sky-300 hover:shadow-md transition group"
                >
                  <span className="text-3xl" role="img" aria-hidden="true">{(item as any).icon || '🏥'}</span>
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-sky-700 leading-tight">
                    {lang === 'fr' ? item.fr : item.ar}
                  </span>
                </Link>
              ))}
            </div>

            {/* Popular cities quick links */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {lang === 'fr' ? 'Villes populaires' : 'المدن الرائجة'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cities.slice(0, 10).map((c) => (
                  <Link
                    key={c.slug}
                    to={`${prefix}/annuaire/kinesitherapie/${c.slug}`}
                    className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600 hover:border-sky-300 hover:text-sky-700 transition"
                  >
                    📍 {lang === 'fr' ? c.fr : c.ar}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {resolvedSpecialtySlug && currentSpecialty && !resolvedCitySlug && (
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

        {resolvedSpecialtySlug && currentSpecialty && resolvedCitySlug && currentCity && !resolvedDistrictSlug && (
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
              <h3 className="text-xl font-bold text-slate-900 mb-1">{labels.cityProfiles}</h3>
              <p className="text-slate-600 mb-4">
                {lang === 'fr'
                  ? `Nos ${currentSpecialty.fr} a ${currentCity.fr}`
                  : `${currentSpecialty.ar} في ${currentCity.ar}`}
              </p>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {cityProfiles.map((profile) => renderProfileCard(profile))}
              </div>
            </div>
          </section>
        )}

        {resolvedSpecialtySlug && currentSpecialty && resolvedCitySlug && currentCity && resolvedDistrictSlug && currentDistrict && !profileSlug && (
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

        {resolvedSpecialtySlug && !currentSpecialty && (
          <p className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
            {lang === 'fr' ? 'Specialite non trouvee.' : 'التخصص غير موجود.'}
          </p>
        )}
        {resolvedCitySlug && !currentCity && (
          <p className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
            {lang === 'fr' ? 'Ville non trouvee.' : 'المدينة غير موجودة.'}
          </p>
        )}
        {resolvedDistrictSlug && !currentDistrict && (
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
