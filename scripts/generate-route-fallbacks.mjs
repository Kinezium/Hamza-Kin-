import { mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexFile = path.join(distDir, 'index.html');

const routes = [
  'pathologies',
  'services',
  'a-domicile',
  'a-propos',
  'contact',
  'blog',
  'ar',
  'ar/pathologies',
  'ar/services',
  'ar/a-domicile',
  'ar/a-propos',
  'ar/contact',
  'ar/blog'
];

async function run() {
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
