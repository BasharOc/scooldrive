# Deployment und Umgebung

## Docker Compose

Datei: `docker-compose.yml`

Services:

| Service | Aufgabe |
| --- | --- |
| `backend` | Baut `server/Dockerfile`, startet Express auf Port 3000 im Container. |
| `frontend` | Baut `Dockerfile.next`, startet die Next.js Standalone-App auf Port 3000 im Container. |
| `nginx` | Baut `Dockerfile.nginx`, terminiert HTTPS und proxyt zu Frontend/Backend. |
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

Wichtige Regeln fuer `fahrschule-lg.scooldrive.com`:

- HTTP wird nach HTTPS umgeleitet.
- `/.well-known/acme-challenge/` zeigt auf Certbot-Webroot.
- `/api/admin/` proxyt zu `http://frontend:3000/api/admin/`.
- `/api/` proxyt zu `http://backend:3000/api/`.
- `/` proxyt zu `http://frontend:3000`.

`server.scooldrive.com` proxyt direkt zu `http://backend:3000`.

## Build Images

`Dockerfile.next`:

1. Node 20 Alpine fuer Dependencies.
2. `client-next/package*.json` kopieren.
3. `npm ci`.
4. `client-next/` kopieren.
5. `npm run build`.
6. `.next/standalone`, `.next/static` und `public` in Runner kopieren.
7. `node server.js` starten.

`Dockerfile.nginx`:

1. `nginx:alpine`.
2. `nginx/nginx.conf` nach `/etc/nginx/conf.d/default.conf` kopieren.
3. Ports 80 und 443 exposen.

`server/Dockerfile`:

1. Node 20 Alpine.
2. `server/package*.json` kopieren.
3. Production-Dependencies installieren.
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
API_BASE_URL
NEXT_PUBLIC_API_URL
NEXT_PUBLIC_EMAIL_MODE
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
NEXT_PUBLIC_GA_MEASUREMENT_ID
```

`docker-compose.yml` nutzt `env_file: ./client-next/.env.production`.

Oeffentliche Server-Fetches nutzen zuerst `API_BASE_URL`, dann eine absolute `NEXT_PUBLIC_API_URL`, sonst:

```text
http://localhost:3001/api
```

Clientseitige Registrierung nutzt `NEXT_PUBLIC_API_URL` oder denselben lokalen Default.

## Lokale Entwicklung

Backend:

```bash
cd server
npm install
PORT=3001 npm run dev
```

Frontend:

```bash
cd client-next
npm install
npm run dev
```

Lokales `client-next/.env.local` Beispiel:

```text
API_BASE_URL=http://localhost:3001/api
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_EMAIL_MODE=mock
```

Fuer echten Emailversand:

```text
NEXT_PUBLIC_EMAIL_MODE=live
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```
