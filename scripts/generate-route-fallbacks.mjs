import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { getAllStaticRoutes } from './route-catalog.mjs';

const distDir = path.resolve('dist');
const indexFile = path.join(distDir, 'index.html');
const staticFiles = ['robots.txt', 'robot.txt', 'sitemap.xml', 'sitemaps.xml', 'llms.txt'];
const routes = getAllStaticRoutes();
let indexHtml;

const routeTitle = (route) => {
  if (!route || route === 'ar') return 'Centre Chnider | Kinésithérapie à Casablanca';
  const isArabic = route.startsWith('ar/');
  const cleanRoute = isArabic ? route.slice(3) : route;
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
  if (route.startsWith('ar/')) {
    return 'معلومات صحية وترويض طبي مبسطة من مركز شنيدر بالدار البيضاء، مع خدمات داخل العيادة والمنزل ومقالات موثوقة.';
  }
  return 'Centre Chnider à Casablanca : kinésithérapie au cabinet et à domicile, rééducation fonctionnelle et conseils santé fiables.';
};

const buildRouteFallback = (html, route) => {
  const canonical = `https://kinesitherapie.clinaxis.ma/${route}`;
  return html
    .replace(/<html lang="[^"]*">/, `<html lang="${route.startsWith('ar/') ? 'ar' : 'fr'}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${routeTitle(route)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${routeDescription(route)}" />`)
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



