# Centre Chnider - Site Officiel

Projet web institutionnel du Centre Chnider, conçu et développé par la société Clinaxis.

## A propos de Clinaxis

Clinaxis est une société qui conçoit des solutions médicales et paramédicales:

- Gestion des cabinets
- Suivi des patients
- Facturation
- Solutions dédiées aux familles des patients
- E-learning pour les patients et leurs familles
- Education thérapeutique des patients et des parents
- Création de sites web pour les partenaires, centres médicaux et paramédicaux

Site officiel: https://clinaxis.ma

## Lancement en local

Prerequis:

- Node.js

Installation et execution:

1. Installer les dependances:
   ```bash
   npm install
   ```
2. Lancer le serveur de developpement:
   ```bash
   npm run dev
   ```

## Build production

```bash
npm run build
```

## Deploiement SPA (BrowserRouter)

Ce projet utilise des URLs propres (`/page`) et necessite un fallback vers `index.html` en production.

Nginx:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

Hebergement statique avec `serve`:

```bash
npx serve dist --single --config serve.json
```

Fallback statique optionnel apres build:

```bash
npm run build:fallbacks
```
