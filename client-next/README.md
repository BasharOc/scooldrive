# Scooldrive Next Frontend

Aktuelles Frontend fuer Scooldrive auf Basis von Next.js 16 App Router, React 19, TypeScript und Tailwind CSS 4.

## Entwicklung

```bash
npm install
npm run dev
```

Die App laeuft standardmaessig auf `http://localhost:3000`. Der Express-Server wird lokal unter `http://localhost:3001/api` erwartet.

## Environment

Lokale Datei:

```text
client-next/.env.local
```

Typische Werte:

```text
API_BASE_URL=http://localhost:3001/api
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_EMAIL_MODE=mock
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

`API_BASE_URL` wird serverseitig genutzt. `NEXT_PUBLIC_API_URL` wird fuer clientseitige Anmeldung und als Fallback genutzt.

## Wichtige Pfade

- `app/[locale]/`: oeffentliche Seiten fuer `de`, `en`, `ar`.
- `app/api/admin/`: Route Handler als Admin-Proxy zum Express-Backend.
- `components/`: UI- und Fachkomponenten.
- `lib/`: API-Helfer, Admin-Auth, SEO-Metadaten, Blog-Loader.
- `messages/`: lokalisierte Inhalte.
- `public/`: Bilder, Videos, Blog-Cover und Robots-Datei.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Mehr Projektdokumentation liegt im Root unter `docs/`.
