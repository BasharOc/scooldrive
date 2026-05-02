# Repository- und Ordnerstruktur

## Root

| Pfad | Aufgabe |
| --- | --- |
| `README.md` | Einstieg in diese Dokumentation. |
| `docs/` | Struktur-, API-, Daten- und Betriebsdokumentation. |
| `client-next/` | Aktuelles Next.js Frontend inklusive Admin UI. |
| `server/` | Express/Mongoose Backend. |
| `docker-compose.yml` | Produktion mit Frontend, Backend, Nginx und Certbot. |
| `Dockerfile.next` | Baut die Next.js Standalone-App. |
| `Dockerfile.nginx` | Baut nur das Nginx-Image mit Konfiguration. |
| `nginx/nginx.conf` | Domains, SSL, Frontend-Proxy und API-Proxies. |

## Client Next

| Pfad | Aufgabe |
| --- | --- |
| `client-next/app/` | Next.js App Router: Layouts, Seiten, API Route Handler. |
| `client-next/app/[locale]/` | Oeffentliche Seiten fuer `de`, `en`, `ar`. |
| `client-next/app/api/admin/` | Next Route Handler als Admin-Proxy zum Express-Backend. |
| `client-next/components/` | UI- und Fachkomponenten nach Bereichen. |
| `client-next/lib/` | API-Helfer, Admin-Auth, Metadaten, Blog-Loader. |
| `client-next/messages/` | Uebersetzungen und statische Inhalte. |
| `client-next/public/` | Videos, Bilder, Blogbilder, Logo, Robots-Datei. |
| `client-next/types/` | Gemeinsame TypeScript-Typen. |

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

## Zentrale Einstiegspunkte

- `client-next/app/page.tsx`: Redirect von `/` nach `/de`.
- `client-next/app/[locale]/layout.tsx`: Locale-Chrome, Navbar, Footer, WhatsAppButton und Settings-Fetch.
- `client-next/app/[locale]/page.tsx`: Homepage.
- `client-next/app/admin/page.tsx`: geschuetzter Admin-Bereich.
- `client-next/app/login/page.tsx`: Admin-Login.
- `server/src/app.js`: Backend-App und API-Mounts.
