import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { getAllStaticRoutes } from './route-catalog.mjs';

const distDir = path.resolve('dist');
const indexFile = path.join(distDir, 'index.html');
const staticFiles = ['robots.txt', 'robot.txt', 'sitemap.xml', 'sitemaps.xml', 'llms.txt'];
const routes = getAllStaticRoutes();
let indexHtml;

const routeTitle = (route) => {
  if (!route) return 'Centre Chnider | Kinésithérapie à Casablanca';
  if (route === 'ar') return 'الترويض الطبي بالدار البيضاء | مركز شنيدر';
  const isArabic = route.startsWith('ar/');
  const cleanRoute = isArabic ? route.slice(3) : route;
  const knownTitles = {
    'a-domicile': 'Kiné à domicile à Casablanca | Centre Chnider',
    'a-domicile-geriatrie-casablanca': 'Kiné gériatrique à domicile à Casablanca | Centre Chnider',
    'ar/a-domicile': 'الترويض الطبي في المنزل بالدار البيضاء | مركز شنيدر',
    'ar/a-domicile-geriatrie-casablanca': 'الترويض المنزلي للمسنين بالدار البيضاء | مركز شنيدر'
  };
  if (knownTitles[route]) return knownTitles[route];
  if (cleanRoute === 'blog') return isArabic ? 'مدونة الترويض الطبي | مركز شنيدر' : 'Blog kinésithérapie | Centre Chnider';
  const label = cleanRoute
    .split('/')
    .pop()
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return isArabic ? `${label} | مركز شنيدر` : `${label} | Centre Chnider`;
};

const routeDescription = (route) => {
  const descriptions = {
    'a-domicile': 'Kinésithérapie à domicile à Casablanca : rééducation fonctionnelle, suivi personnalisé et informations sur les zones d’intervention du Centre Chnider.',
    'a-domicile-geriatrie-casablanca': 'Rééducation gériatrique à domicile à Casablanca : mobilité, équilibre, prévention des chutes et accompagnement de l’autonomie par le Centre Chnider.',
    'ar/a-domicile': 'خدمات الترويض الطبي وإعادة التأهيل في المنزل بالدار البيضاء من مركز شنيدر، مع متابعة مناسبة للحالة ومعلومات عن مناطق التدخل.',
    'ar/a-domicile-geriatrie-casablanca': 'إعادة تأهيل كبار السن في المنزل بالدار البيضاء: الحركة والتوازن والوقاية من السقوط والحفاظ على الاستقلالية مع مركز شنيدر.'
  };
  if (descriptions[route]) return descriptions[route];

  const isArabic = route === 'ar' || route.startsWith('ar/');
  if (isArabic) {
    const label = routeTitle(route).replace(' | مركز شنيدر', '');
    return `${label}: معلومات صحية مبسطة وإرشادات حول الترويض الطبي وإعادة التأهيل من مركز شنيدر بالدار البيضاء.`;
  }
  const label = routeTitle(route).replace(' | Centre Chnider', '');
  return `${label} : informations pratiques et conseils de rééducation proposés par le Centre Chnider, cabinet de kinésithérapie à Casablanca.`;
};

const buildRouteFallback = (html, route) => {
  const canonical = `https://kinesitherapie.clinaxis.ma/${route}`;
  const title = routeTitle(route);
  const description = routeDescription(route);
  return html
    .replace(/<html lang="[^"]*">/, `<html lang="${route === 'ar' || route.startsWith('ar/') ? 'ar' : 'fr'}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`)
    .replace('</head>', `    <link rel="canonical" href="${canonical}" />\n  </head>`);
};

async function run() {
  indexHtml = await readFile(indexFile, 'utf8');
  for (const staticFile of staticFiles) {
    const sourcePath = path.resolve(staticFile);
    const destinationPath = path.join(distDir, staticFile);
    try {
      await copyFile(sourcePath, destinationPath);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
  }

  for (const route of routes) {
    const routeDir = path.join(distDir, route);
    await mkdir(routeDir, { recursive: true });
    await writeFile(path.join(routeDir, 'index.html'), buildRouteFallback(indexHtml, route), 'utf8');
  }
  console.log(`Generated static fallbacks for ${routes.length} routes.`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});



