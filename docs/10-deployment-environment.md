# Deployment und Umgebung

## Docker Compose

Datei: `docker-compose.yml`

Services:

| Service | Aufgabe |
| --- | --- |
| `backend` | Baut `server/Dockerfile`, startet Express auf Port 3000 im Container. |
| `nginx` | Baut Frontend ueber `Dockerfile.nginx`, liefert statische SPA aus und proxyt API. |
| `certbot` | Erstellt LetsEncrypt-Zertifikate per Webroot Challenge. |

Netzwerk:

- `app-network`

Volumes:

- `certbot-certs`
- `certbot-www`

## Nginx

Datei: `nginx/nginx.conf`

Konfigurierte Hosts:

- `fahrschule-lg.scooldrive.com`
- `server.scooldrive.com`
- `workpilot.basharfarhat.com`

Wichtige Regeln:

- HTTP wird fuer Hauptdomain und API-Subdomain nach HTTPS umgeleitet.
- `/.well-known/acme-challenge/` zeigt auf Certbot-Webroot.
- SPA-Fallback: `try_files $uri $uri/ /index.html`.
- `/api/` auf Hauptdomain proxyt zu `http://backend:3000/api/`.
- `server.scooldrive.com` proxyt direkt zu `http://backend:3000`.

## Build Images

`Dockerfile.nginx`:

1. Node 20 Alpine als Builder.
2. `client/package*.json` kopieren.
3. `npm install`.
4. Client kopieren.
5. `npm run build`.
6. Build nach Nginx kopieren.

`server/Dockerfile`:

1. Node 20 Alpine.
2. `server/package*.json` kopieren.
3. `npm install --only=production`.
4. Servercode kopieren.
5. Port 3000 exposen.
6. `node src/app.js` starten.

## Backend Environment

Erwartete Variablen:

```text
NODE_ENV
PORT
MONGODB_URI
JWT_SECRET
JWT_EXPIRES_IN
ADMIN_USERNAME
ADMIN_PASSWORD
ALLOWED_ORIGINS
RATE_LIMIT_WINDOW_MS
RATE_LIMIT_MAX_REQUESTS
```

`docker-compose.yml` nutzt `env_file: ./server/.env`.

## Frontend Environment

Erwartete Variablen:

```text
VITE_API_URL
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
VITE_REISTRATION_EMAIL_MODE
VITE_REGISTRATION_EMAIL_MODE
VITE_GA_MEASUREMENT_ID
```

Ohne `VITE_API_URL` nutzt das Frontend:

```text
https://server.scooldrive.com/api
```

## Lokale Entwicklung

Frontend:

```bash
cd client
npm install
npm run dev
```

Backend:

```bash
cd server
npm install
npm run dev
```

Fuer lokale Fullstack-Entwicklung sollte `VITE_API_URL` auf das lokale Backend zeigen, z. B.:

```text
VITE_API_URL=http://localhost:3000/api
```

Fuer lokale Anmeldetests ohne echten EmailJS-Versand:

```text
VITE_REISTRATION_EMAIL_MODE=mock
```

Der korrekt geschriebene Alias `VITE_REGISTRATION_EMAIL_MODE=mock` funktioniert ebenfalls.
