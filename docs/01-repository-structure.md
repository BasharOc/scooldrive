# Repository- und Ordnerstruktur

## Root

| Pfad | Aufgabe |
| --- | --- |
| `README.md` | Einstieg in diese Dokumentation. |
| `docs/` | Struktur-, API-, Daten- und Betriebsdokumentation. |
| `client/` | Vite/React Frontend. |
| `server/` | Express/Mongoose Backend. |
| `docker-compose.yml` | Produktion mit Backend, Nginx und Certbot. |
| `Dockerfile.nginx` | Baut das Frontend und liefert es per Nginx aus. |
| `nginx/nginx.conf` | Domains, SSL, SPA-Fallback und API-Proxies. |
| `.gitignore` | Ausgeschlossene Dateien. |

## Client

| Pfad | Aufgabe |
| --- | --- |
| `client/src/App.jsx` | Zentrales Routing und globale Provider. |
| `client/src/main.jsx` | React Root Mount. |
| `client/src/index.css` | Globale Tailwind-Einbindung und Basis-CSS. |
| `client/src/App.css` | Vite-Template-Reste, aktuell nicht aktiv in `App.jsx` importiert. |
| `client/src/pages/` | Seiten mit Route-Bezug. |
| `client/src/components/` | Wiederverwendbare UI- und Fachkomponenten. |
| `client/src/components/AnmeldeSteps/` | Einzelne Schritte des Anmeldeformulars. |
| `client/src/contexts/` | React Contexts, aktuell Sprache. |
| `client/src/layouts/` | Layout-Huelle fuer oeffentliche Seiten. |
| `client/src/helpers/` | Blogdaten und Google-Analytics-Script-Loader. |
| `client/src/utils/` | API-Konstanten. |
| `client/hooks/` | Gemeinsamer API-Fetch-Hook. |
| `client/public/` | Statische Bilder, Videos, Blogbilder und Sitemap. |

## Server

| Pfad | Aufgabe |
| --- | --- |
| `server/src/app.js` | Express App, Middleware, Routen, Fehlerbehandlung, Listen-Port. |
| `server/src/config/db.js` | MongoDB-Verbindung. |
| `server/src/routes/` | Express Router pro Ressource. |
| `server/src/controllers/` | Request-Logik pro Ressource. |
| `server/src/models/` | Mongoose Schemas und Default-Erzeugung. |
| `server/src/middlewares/` | JWT-Auth und Request-Validierung. |
| `server/src/utils/initializeAdmin.js` | Initialer Admin aus Environment-Variablen. |
| `server/Dockerfile` | Production Image fuer Express. |

## Groesse der relevanten Bereiche

Das Projekt hat ungefaehr 19.500 Zeilen in den gezaehlten Frontend- und Backend-Dateien. Besonders grosse Dateien sind:

- `client/src/pages/PunkteAbbauenPage.jsx`
- `client/src/pages/AnmeldungPage.jsx`
- `client/src/pages/PreisePage.jsx`
- `client/src/pages/IntensivKursPage.jsx`
- `client/src/components/Motorrad/MotorradLicenseSteps MotorradLicenseSteps.jsx`
- `client/src/components/Navbar.jsx`
- `client/src/helpers/blogarticles.js`

