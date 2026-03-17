import { mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexFile = path.join(distDir, 'index.html');
const staticFiles = ['robots.txt', 'robot.txt', 'sitemap.xml', 'sitemaps.xml'];

const routes = [
  'pathologies',
  'services',
  'a-domicile',
  'a-propos',
  'contact',
  'blog',
  'blog/sciatica-herniated-disc',
  'blog/back-pain',
  'blog/sports-injuries',
  'blog/knee-osteoarthritis',
  'blog/shoulder-pain',
  'blog/migraines-headaches',
  'blog/pediatric-physiotherapy',
  'blog/post-stroke',
  'blog/posture-ergonomics',
  'blog/sports-recovery',
  'gallerie',
  'ar',
  'ar/pathologies',
  'ar/services',
  'ar/a-domicile',
  'ar/a-propos',
  'ar/contact',
  'ar/blog',
  'ar/blog/sciatica-herniated-disc',
  'ar/blog/back-pain',
  'ar/blog/sports-injuries',
  'ar/blog/knee-osteoarthritis',
  'ar/blog/shoulder-pain',
  'ar/blog/migraines-headaches',
  'ar/blog/pediatric-physiotherapy',
  'ar/blog/post-stroke',
  'ar/blog/posture-ergonomics',
  'ar/blog/sports-recovery',
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
