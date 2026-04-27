import { mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexFile = path.join(distDir, 'index.html');
const staticFiles = ['robots.txt', 'robot.txt', 'sitemap.xml', 'sitemaps.xml'];

const routes = [
  'LTM',
  'pathologies',
  'services',
  'a-domicile',
  'a-propos',
  'contact',
  'convention',
  'blog',
  'blog/sciatique-hernie-discale',
  'blog/lombalgie-cervicalgie',
  'blog/traumatologie-sport',
  'blog/arthrose-genou',
  'blog/douleurs-epaules-capsulite',
  'blog/migraines-cephalees',
  'blog/kine-pediatrique',
  'blog/readaptation-post-avc',
  'blog/posture-ergonomie',
  'blog/recuperation-sportive-prevention-blessures',
  'blog/avc-signes-alerte-reeducation-precoce',
  'blog/entorse-cheville-kinesitherapie',
  'blog/rupture-ligament-croise-anterieur-reeducation',
  'blog/fracture-tibia-reeducation-marche',
  'gallerie',
  'ar',
  'ar/pathologies',
  'ar/services',
  'ar/a-domicile',
  'ar/a-propos',
  'ar/contact',
  'ar/convention',
  'ar/blog',
  'ar/blog/sciatique-hernie-discale',
  'ar/blog/lombalgie-cervicalgie',
  'ar/blog/traumatologie-sport',
  'ar/blog/arthrose-genou',
  'ar/blog/douleurs-epaules-capsulite',
  'ar/blog/migraines-cephalees',
  'ar/blog/kine-pediatrique',
  'ar/blog/readaptation-post-avc',
  'ar/blog/posture-ergonomie',
  'ar/blog/recuperation-sportive-prevention-blessures',
  'ar/blog/avc-signes-alerte-reeducation-precoce',
  'ar/blog/entorse-cheville-kinesitherapie',
  'ar/blog/rupture-ligament-croise-anterieur-reeducation',
  'ar/blog/fracture-tibia-reeducation-marche',
  'ar/gallerie'
];

async function run() {
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
    await copyFile(indexFile, path.join(routeDir, 'index.html'));
  }
  console.log(`Generated static fallbacks for ${routes.length} routes.`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});



