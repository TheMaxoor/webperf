[![Netlify Status](https://api.netlify.com/api/v1/badges/ffb686f7-67ee-417a-8fa7-026104022151/deploy-status)](https://app.netlify.com/sites/dreamy-goldwasser-6db82e/deploys)

# Accessing website

Base URL: https://webperf.mrossignol.fr

Branches are automatically deployed on push event.

# Demo

- Base : https://webperf.mrossignol.fr
- Nettoyage Libs inutilisées : https://clean-js.webperf.mrossignol.fr
- Inclusion des scripts indépendants en Async : https://render-blocking.webperf.mrossignol.fr/
- Redimensionnement des images : https://add-small-pictures.webperf.mrossignol.fr/
- Lazyload images/youtube : https://lazyload-images.webperf.mrossignol.fr/
- Mode production : https://production.webperf.mrossignol.fr/
- Chargement des images en Webp : https://serve-image-in-webp.webperf.mrossignol.fr/

## Commands

Install dependencies :

```bash
npm install
```

Build :

```bash
npm run build
```

```bash
npm run build:dev
npm run build:prod # For minification/uglification
```

Watch :
```bash
npm run watch
```

Local dev start :

```bash
npm run develop
```

Project start :

```bash
npm run start
```
