# Scooldrive Projekt-Dokumentation

Dieses Repository enthaelt die Webseite und das Admin-Backend fuer die Fahrschule Scooldrive Lueneburg.

Die wichtigsten Informationen liegen jetzt in der Dokumentationsmappe:

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

- Frontend: React 19, Vite 6, React Router 7, Tailwind CSS 4, Framer Motion, React Helmet Async.
- Backend: Node.js, Express, MongoDB ueber Mongoose, JWT-Auth fuer Admin-Operationen.
- Betrieb: Docker Compose mit Backend-Container, Nginx-Frontend/Reverse-Proxy und Certbot.
- Fachliche Bereiche: oeffentliche Fahrschul-Seiten, Blog, Anmeldung per EmailJS, Admin-Panel fuer Preise, Termine, Boni, Einstellungen und Oeffnungszeiten.

## Startpunkte im Code

- Frontend-App: `client/src/App.jsx`
- Frontend-Einstieg: `client/src/main.jsx`
- Backend-App: `server/src/app.js`
- API-Basis im Frontend: `client/src/utils/api.js`
- Docker-Orchestrierung: `docker-compose.yml`
- Nginx-Konfiguration: `nginx/nginx.conf`

  
Website: https://fahrschule-lg.scooldrive.com/de 
