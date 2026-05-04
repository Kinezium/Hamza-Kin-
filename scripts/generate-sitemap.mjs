import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { getAllStaticRoutes } from './route-catalog.mjs';

const baseUrl = 'https://kinesitherapie.clinaxis.ma';
const today = new Date().toISOString().slice(0, 10);

const toUrl = (route) => `${baseUrl}/${route}`;
const isArabic = (route) => route === 'ar' || route.startsWith('ar/');
const routePriority = (route) => {
  if (!route || route === 'ar') return '1.0';
  if (route.includes('/annuaire/')) return '0.85';
  if (route.startsWith('annuaire')) return '0.9';
  if (route.includes('/blog/')) return '0.8';
  if (route === 'blog' || route === 'ar/blog') return '0.85';
  return '0.75';
};

const routeChangeFreq = (route) => {
  if (route.includes('/blog/')) return 'weekly';
  if (route.includes('/annuaire/')) return 'weekly';
  if (route.startsWith('annuaire')) return 'daily';
  return 'monthly';
};

const pairRoute = (route) => {
  if (route === 'ar') return '';
  if (route.startsWith('ar/')) return route.slice(3);
  return `ar/${route}`;
};

const sanitizeRoutes = (routes) =>
  routes.filter((route) => route !== 'LTM' && route !== 'espace-praticien' && route !== 'ar/espace-praticien');

const buildUrlEntry = (route) => {
  const frRoute = isArabic(route) ? pairRoute(route) : route;
  const arRoute = isArabic(route) ? route : pairRoute(route);
  const loc = route ? toUrl(route) : `${baseUrl}/`;
  const frHref = frRoute ? toUrl(frRoute) : `${baseUrl}/`;
  const arHref = arRoute ? toUrl(arRoute) : `${baseUrl}/ar`;

  return `  <url>\n    <loc>${loc}</loc>\n    <xhtml:link rel="alternate" hreflang="fr" href="${frHref}" />\n    <xhtml:link rel="alternate" hreflang="ar" href="${arHref}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${frHref}" />\n    <lastmod>${today}</lastmod>\n    <changefreq>${routeChangeFreq(route)}</changefreq>\n    <priority>${routePriority(route)}</priority>\n  </url>`;
};

const buildSitemapXml = (routes) => {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...routes.map(buildUrlEntry),
    '</urlset>'
  ];

  return `${lines.join('\n')}\n`;
};

const buildSitemapIndexXml = () => `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${baseUrl}/sitemap.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n</sitemapindex>\n`;

async function run() {
  const routes = sanitizeRoutes(getAllStaticRoutes());
  const frRootRoute = '';
  if (!routes.includes('ar')) routes.push('ar');

  const routeSet = new Set([frRootRoute, ...routes]);
  const orderedRoutes = Array.from(routeSet).sort((a, b) => a.localeCompare(b));

  const sitemapPath = path.resolve('sitemap.xml');
  const sitemapIndexPath = path.resolve('sitemaps.xml');

  await writeFile(sitemapPath, buildSitemapXml(orderedRoutes), 'utf8');
  await writeFile(sitemapIndexPath, buildSitemapIndexXml(), 'utf8');

  console.log(`Generated sitemap.xml with ${orderedRoutes.length} URLs.`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
