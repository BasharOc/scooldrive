# Scooldrive Projekt-Dokumentation

Dieses Repository enthaelt die Webseite, den Next.js-Adminbereich und das Express-Backend fuer die Fahrschule Scooldrive.

Die wichtigsten Informationen liegen in der Dokumentationsmappe:

- [Projektueberblick](docs/00-project-overview.md)
- [Repository- und Ordnerstruktur](docs/01-repository-structure.md)
- [Frontend-Struktur](docs/02-frontend-structure.md)
- [Routing, Navigation und SEO](docs/03-routing-navigation-seo.md)
- [Backend-Struktur](docs/04-backend-structure.md)
- [API-Referenz](docs/05-api-reference.md)
- [Datenmodelle](docs/06-data-models.md)
- [Admin, Auth und Sicherheit](docs/07-admin-auth-security.md)
- [Anmeldeprozess](docs/08-registration-flow.md)
- [Content, Sprache und Assets](docs/09-content-i18n-assets.md)
- [Deployment und Umgebung](docs/10-deployment-environment.md)
- [Wartung und Auffaelligkeiten](docs/11-maintenance-notes.md)

## Kurzbild

- Frontend: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion.
- Backend: Node.js, Express 4, MongoDB ueber Mongoose, JWT-Auth fuer Admin-Operationen.
- Admin: Next.js-Seiten mit HTTP-only Session-Cookie und Proxy-Routen unter `/api/admin/*`.
- Betrieb: Docker Compose mit `frontend`, `backend`, `nginx` und `certbot`.
- Fachliche Bereiche: mehrsprachige Fahrschul-Seiten, Blog, Anmeldung mit EmailJS-Status, Admin-Panel fuer Preise, Termine, Boni, Einstellungen, Oeffnungszeiten und Registrierungen.

## Startpunkte im Code

- Frontend-App: `client-next/app/`
- Locale-Layout: `client-next/app/[locale]/layout.tsx`
- Admin-UI: `client-next/app/admin/page.tsx`, `client-next/components/Admin/AdminDashboard.tsx`
- Frontend API-Helfer: `client-next/lib/api.ts`, `client-next/lib/registration-api.ts`
- Admin-Proxy: `client-next/app/api/admin/_lib.ts`
- Backend-App: `server/src/app.js`
- Docker-Orchestrierung: `docker-compose.yml`
- Nginx-Konfiguration: `nginx/nginx.conf`

Website: https://fahrschule-lg.scooldrive.com/de

## Lokal starten

```bash
cd server
npm install
PORT=3001 npm run dev
```

```bash
cd client-next
npm install
npm run dev
```

Das Next-Frontend laeuft standardmaessig auf `http://localhost:3000`. Das lokale Backend wird von `client-next` standardmaessig unter `http://localhost:3001/api` erwartet.
