import React, { useMemo, useState } from 'react';
import {
  AdminSiteConfig,
  CustomBlogPost,
  CustomPageLink,
  DEFAULT_ADMIN_CONFIG,
  GalleryImageItem,
  applyAdminTheme,
  readAdminConfig,
  saveAdminConfig,
  slugify
} from '../src/adminConfig';

const inputClass = 'w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500';
const cardClass = 'bg-white border border-slate-200 rounded-2xl p-5 shadow-sm';

const LoginView: React.FC<{
  onLogin: () => void;
}> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const current = readAdminConfig();
    if (username === current.credentials.username && password === current.credentials.password) {
      window.sessionStorage.setItem('ltm-admin-auth', 'ok');
      setError('');
      onLogin();
      return;
    }
    setError('Identifiants invalides.');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Dashboard Admin LTM</h1>
        <p className="text-slate-600 mb-6">Gestion du site kinesitherapie.clinaxis.ma/LTM</p>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">Login</label>
            <input className={inputClass} value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Password</label>
            <input type="password" className={inputClass} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button type="submit" className="w-full rounded-lg bg-sky-600 text-white font-semibold py-2 hover:bg-sky-700 transition">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Dashboard Admin LTM';
    const meta = document.querySelector('meta[name="robots"]') || document.createElement('meta');
    meta.setAttribute('name', 'robots');
    meta.setAttribute('content', 'noindex,nofollow');
    if (!meta.parentElement) {
      document.head.appendChild(meta);
    }
  }, []);

  const [isAuth, setIsAuth] = useState(() => window.sessionStorage.getItem('ltm-admin-auth') === 'ok');
  const [draft, setDraft] = useState<AdminSiteConfig>(() => readAdminConfig());
  const [status, setStatus] = useState('');

  const heroImagesText = useMemo(() => draft.media.heroImages.join('\n'), [draft.media.heroImages]);

  const update = <K extends keyof AdminSiteConfig>(key: K, value: AdminSiteConfig[K]) => {
    setDraft((prev) => ({ ...prev, [key]: value }));
  };

  const saveAll = () => {
    saveAdminConfig(draft);
    applyAdminTheme(draft.theme);
    setStatus('Configuration sauvegardee avec succes.');
    setTimeout(() => setStatus(''), 2500);
  };

  const addPageLink = () => {
    const next: CustomPageLink = {
      id: `link-${Date.now()}`,
      labelFr: 'Nouveau lien',
      labelAr: 'رابط جديد',
      pathFr: '/',
      pathAr: '/ar'
    };
    update('pageLinks', [...draft.pageLinks, next]);
  };

  const addGalleryImage = () => {
    const next: GalleryImageItem = {
      src: '',
      altFr: 'Image galerie',
      altAr: 'صورة المعرض'
    };
    update('media', {
      ...draft.media,
      galleryImages: [...draft.media.galleryImages, next]
    });
  };

  const addCustomPost = () => {
    const titleFr = 'Nouvel article';
    const slug = slugify(titleFr) || `article-${Date.now()}`;
    const next: CustomBlogPost = {
      id: `post-${Date.now()}`,
      slug,
      titleFr,
      titleAr: 'مقال جديد',
      descFr: 'Description courte',
      descAr: 'وصف مختصر',
      contentFr: 'Contenu de votre article en francais.',
      contentAr: 'محتوى المقال بالعربية.',
      image: 'https://picsum.photos/seed/ltm-admin/1200/700',
      readTimeFr: '4 min',
      readTimeAr: '4 دقائق',
      createdAt: new Date().toISOString()
    };
    update('customBlogPosts', [next, ...draft.customBlogPosts]);
  };

  const logout = () => {
    window.sessionStorage.removeItem('ltm-admin-auth');
    setIsAuth(false);
  };

  if (!isAuth) {
    return <LoginView onLogin={() => setIsAuth(true)} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard Admin</h1>
            <p className="text-slate-600">Gestion contact, liens, pages, blog, photos, theme et compte admin.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={saveAll} className="rounded-lg bg-emerald-600 text-white px-4 py-2 font-semibold hover:bg-emerald-700 transition">
              Sauvegarder
            </button>
            <button onClick={() => setDraft(DEFAULT_ADMIN_CONFIG)} className="rounded-lg bg-amber-500 text-white px-4 py-2 font-semibold hover:bg-amber-600 transition">
              Reinitialiser
            </button>
            <button onClick={logout} className="rounded-lg bg-slate-700 text-white px-4 py-2 font-semibold hover:bg-slate-800 transition">
              Deconnexion
            </button>
          </div>
        </div>

        {status && <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg p-3">{status}</div>}

        <section className={cardClass}>
          <h2 className="text-xl font-semibold mb-4">1) Informations de contact et reseaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Telephone</label>
              <input className={inputClass} value={draft.contact.phone} onChange={(e) => update('contact', { ...draft.contact, phone: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Numero WhatsApp (format international)</label>
              <input className={inputClass} value={draft.contact.whatsappNumber} onChange={(e) => update('contact', { ...draft.contact, whatsappNumber: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-slate-600 mb-1">Adresse</label>
              <input className={inputClass} value={draft.contact.address} onChange={(e) => update('contact', { ...draft.contact, address: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-slate-600 mb-1">Lien Google Maps (ouverture)</label>
              <input className={inputClass} value={draft.contact.mapsLink} onChange={(e) => update('contact', { ...draft.contact, mapsLink: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-slate-600 mb-1">URL embed Google Maps (iframe)</label>
              <textarea rows={3} className={inputClass} value={draft.contact.mapEmbedUrl} onChange={(e) => update('contact', { ...draft.contact, mapEmbedUrl: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Facebook</label>
              <input className={inputClass} value={draft.contact.social.facebook} onChange={(e) => update('contact', { ...draft.contact, social: { ...draft.contact.social, facebook: e.target.value } })} />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Instagram</label>
              <input className={inputClass} value={draft.contact.social.instagram} onChange={(e) => update('contact', { ...draft.contact, social: { ...draft.contact.social, instagram: e.target.value } })} />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">LinkedIn</label>
              <input className={inputClass} value={draft.contact.social.linkedin} onChange={(e) => update('contact', { ...draft.contact, social: { ...draft.contact.social, linkedin: e.target.value } })} />
            </div>
          </div>
        </section>

        <section className={cardClass}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold">2) Liens des pages (personnalises)</h2>
            <button onClick={addPageLink} className="rounded-lg bg-sky-600 text-white px-3 py-1.5 text-sm">Ajouter lien</button>
          </div>
          <div className="space-y-3">
            {draft.pageLinks.map((link, index) => (
              <div key={link.id} className="grid grid-cols-1 md:grid-cols-5 gap-2 border border-slate-200 rounded-lg p-3 bg-slate-50">
                <input className={inputClass} value={link.labelFr} onChange={(e) => {
                  const copy = [...draft.pageLinks];
                  copy[index] = { ...link, labelFr: e.target.value };
                  update('pageLinks', copy);
                }} />
                <input className={inputClass} value={link.labelAr} onChange={(e) => {
                  const copy = [...draft.pageLinks];
                  copy[index] = { ...link, labelAr: e.target.value };
                  update('pageLinks', copy);
                }} />
                <input className={inputClass} value={link.pathFr} onChange={(e) => {
                  const copy = [...draft.pageLinks];
                  copy[index] = { ...link, pathFr: e.target.value };
                  update('pageLinks', copy);
                }} />
                <input className={inputClass} value={link.pathAr} onChange={(e) => {
                  const copy = [...draft.pageLinks];
                  copy[index] = { ...link, pathAr: e.target.value };
                  update('pageLinks', copy);
                }} />
                <button className="rounded-lg bg-red-600 text-white px-3 py-2" onClick={() => update('pageLinks', draft.pageLinks.filter((item) => item.id !== link.id))}>
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className={cardClass}>
          <h2 className="text-xl font-semibold mb-4">3) Theme du site</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Couleur principale</label>
              <input type="color" className="w-full h-10" value={draft.theme.primary} onChange={(e) => update('theme', { ...draft.theme, primary: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Couleur principale foncee</label>
              <input type="color" className="w-full h-10" value={draft.theme.primaryDark} onChange={(e) => update('theme', { ...draft.theme, primaryDark: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Accent</label>
              <input type="color" className="w-full h-10" value={draft.theme.accent} onChange={(e) => update('theme', { ...draft.theme, accent: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Footer</label>
              <input type="color" className="w-full h-10" value={draft.theme.footerBackground} onChange={(e) => update('theme', { ...draft.theme, footerBackground: e.target.value })} />
            </div>
          </div>
        </section>

        <section className={cardClass}>
          <h2 className="text-xl font-semibold mb-4">4) Photos (ajouter, modifier, supprimer)</h2>
          <div className="mb-6">
            <label className="block text-sm text-slate-600 mb-1">Photos slider accueil (une URL par ligne)</label>
            <textarea
              rows={5}
              className={inputClass}
              value={heroImagesText}
              onChange={(e) => {
                const list = e.target.value.split('\n').map((x) => x.trim()).filter(Boolean);
                update('media', { ...draft.media, heroImages: list });
              }}
            />
          </div>

          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-slate-800">Galerie</h3>
            <button onClick={addGalleryImage} className="rounded-lg bg-sky-600 text-white px-3 py-1.5 text-sm">Ajouter photo</button>
          </div>
          <div className="space-y-3">
            {draft.media.galleryImages.map((img, idx) => (
              <div key={`${img.src}-${idx}`} className="grid grid-cols-1 md:grid-cols-4 gap-2 border border-slate-200 rounded-lg p-3 bg-slate-50">
                <input className={inputClass} value={img.src} onChange={(e) => {
                  const copy = [...draft.media.galleryImages];
                  copy[idx] = { ...img, src: e.target.value };
                  update('media', { ...draft.media, galleryImages: copy });
                }} placeholder="URL image" />
                <input className={inputClass} value={img.altFr} onChange={(e) => {
                  const copy = [...draft.media.galleryImages];
                  copy[idx] = { ...img, altFr: e.target.value };
                  update('media', { ...draft.media, galleryImages: copy });
                }} placeholder="Alt FR" />
                <input className={inputClass} value={img.altAr} onChange={(e) => {
                  const copy = [...draft.media.galleryImages];
                  copy[idx] = { ...img, altAr: e.target.value };
                  update('media', { ...draft.media, galleryImages: copy });
                }} placeholder="Alt AR" />
                <button className="rounded-lg bg-red-600 text-white px-3 py-2" onClick={() => {
                  update('media', { ...draft.media, galleryImages: draft.media.galleryImages.filter((_, i) => i !== idx) });
                }}>
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className={cardClass}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold">5) Blog (ajouter et gerer des articles)</h2>
            <button onClick={addCustomPost} className="rounded-lg bg-sky-600 text-white px-3 py-1.5 text-sm">Ajouter article</button>
          </div>
          <div className="space-y-4">
            {draft.customBlogPosts.map((post, idx) => (
              <div key={post.id} className="border border-slate-200 rounded-lg p-4 bg-slate-50 space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <input className={inputClass} value={post.titleFr} onChange={(e) => {
                    const copy = [...draft.customBlogPosts];
                    copy[idx] = { ...post, titleFr: e.target.value, slug: slugify(e.target.value) || post.slug };
                    update('customBlogPosts', copy);
                  }} placeholder="Titre FR" />
                  <input className={inputClass} value={post.titleAr} onChange={(e) => {
                    const copy = [...draft.customBlogPosts];
                    copy[idx] = { ...post, titleAr: e.target.value };
                    update('customBlogPosts', copy);
                  }} placeholder="Titre AR" />
                  <input className={inputClass} value={post.slug} onChange={(e) => {
                    const copy = [...draft.customBlogPosts];
                    copy[idx] = { ...post, slug: slugify(e.target.value) };
                    update('customBlogPosts', copy);
                  }} placeholder="Slug" />
                  <button className="rounded-lg bg-red-600 text-white px-3 py-2" onClick={() => update('customBlogPosts', draft.customBlogPosts.filter((item) => item.id !== post.id))}>
                    Supprimer
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <input className={inputClass} value={post.descFr} onChange={(e) => {
                    const copy = [...draft.customBlogPosts];
                    copy[idx] = { ...post, descFr: e.target.value };
                    update('customBlogPosts', copy);
                  }} placeholder="Description FR" />
                  <input className={inputClass} value={post.descAr} onChange={(e) => {
                    const copy = [...draft.customBlogPosts];
                    copy[idx] = { ...post, descAr: e.target.value };
                    update('customBlogPosts', copy);
                  }} placeholder="Description AR" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <input className={inputClass} value={post.image} onChange={(e) => {
                    const copy = [...draft.customBlogPosts];
                    copy[idx] = { ...post, image: e.target.value };
                    update('customBlogPosts', copy);
                  }} placeholder="URL image" />
                  <input className={inputClass} value={post.readTimeFr} onChange={(e) => {
                    const copy = [...draft.customBlogPosts];
                    copy[idx] = { ...post, readTimeFr: e.target.value };
                    update('customBlogPosts', copy);
                  }} placeholder="Temps lecture FR" />
                  <input className={inputClass} value={post.readTimeAr} onChange={(e) => {
                    const copy = [...draft.customBlogPosts];
                    copy[idx] = { ...post, readTimeAr: e.target.value };
                    update('customBlogPosts', copy);
                  }} placeholder="Temps lecture AR" />
                </div>
                <textarea rows={4} className={inputClass} value={post.contentFr} onChange={(e) => {
                  const copy = [...draft.customBlogPosts];
                  copy[idx] = { ...post, contentFr: e.target.value };
                  update('customBlogPosts', copy);
                }} placeholder="Contenu FR (retours ligne autorises)" />
                <textarea rows={4} className={inputClass} value={post.contentAr} onChange={(e) => {
                  const copy = [...draft.customBlogPosts];
                  copy[idx] = { ...post, contentAr: e.target.value };
                  update('customBlogPosts', copy);
                }} placeholder="Contenu AR" />
              </div>
            ))}
            {draft.customBlogPosts.length === 0 && (
              <p className="text-slate-500">Aucun article personnalise pour le moment.</p>
            )}
          </div>
        </section>

        <section className={cardClass}>
          <h2 className="text-xl font-semibold mb-4">6) Compte admin (login/password)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Nouveau login</label>
              <input className={inputClass} value={draft.credentials.username} onChange={(e) => update('credentials', { ...draft.credentials, username: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Nouveau password</label>
              <input className={inputClass} type="password" value={draft.credentials.password} onChange={(e) => update('credentials', { ...draft.credentials, password: e.target.value })} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
