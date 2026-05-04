import { mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { getAllStaticRoutes } from './route-catalog.mjs';

const distDir = path.resolve('dist');
const indexFile = path.join(distDir, 'index.html');
const staticFiles = ['robots.txt', 'robot.txt', 'sitemap.xml', 'sitemaps.xml'];
const routes = getAllStaticRoutes();

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



