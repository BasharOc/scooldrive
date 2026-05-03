# Wartung und Auffaelligkeiten

Diese Datei sammelt Dinge, die beim erneuten Lesen des Projekts aufgefallen sind. Sie ist keine Fehlerliste im Sinne eines Reviews, sondern eine praktische Wartungsnotiz.

## Next/Frontend

- `client-next/README.md` wurde produktbezogen aktualisiert, sollte aber bei neuen Workflows mitgezogen werden.
- `client-next/lib/metadata.ts` nutzt als Open-Graph-Bild `/logo-icon.png`, vorhanden ist aktuell `client-next/public/logo-icon.jpg`.
- `client-next/public/vite.svg` ist noch aus dem alten Template uebrig.
- `TOTAL_REGISTRATION_STEPS` ist `10`, der sichtbare Abschluss liegt bei Schritt 9. Das kann im Fortschrittsbalken bewusst sein, wirkt aber pruefenswert.

## Standort und SEO

- Projektstandort ist Lüneburg. Neue Default-Metadaten, Blogtexte, Alt-Texte, Dokumentation und Seitentitel muessen bei Scooldrive Lüneburg bleiben.
- Oeffentliche Seiten sollen weiterhin genau ein fachliches `h1` ausgeben und statisch/ISR crawlbar bleiben.
- `client-next/components/Homepage/LicenseOptionsSection.tsx` nutzt fuer das App-Mockup `client-next/public/fuhrerschein_gold_app_framed.svg`; keinen zusaetzlichen Phone-Frame im TSX darum bauen.

## API und Datenmodell

- `EinstellungenApiResponse` kennt optional `kontaktOptionen.whatsappNummer`, das Mongoose-Schema `Einstellungen` speichert dieses Feld aktuell nicht explizit.
- Preisfeld `theorieprueung` ist im Code konsistent so geschrieben, enthaelt aber einen Tippfehler im Feldnamen. Eine Umbenennung waere migrationsrelevant.
- `Termine` ist als Array modelliert, Controller und Admin-UI behandeln aber nur genau einen Termin.
- `Termine.getOrCreateDefault()` setzt Default-Felder wie `uhrzeit`, `beschreibung`, `maxTeilnehmer`, die nicht im Schema stehen.
- Public GET-Responses geben rohe Mongoose-Dokumente zurueck, waehrend Auth-Responses `{ success, message, ... }` nutzen. Einheitliche Response-Formate wuerden Clients vereinfachen.

## Backend

- `server/src/routes/userRoutes.js` ist nicht gemountet und importiert `../models/User`, das im Repository nicht existiert.
- In `server/src/app.js` ist `authLimiter` definiert, aber fuer `/api/auth` auskommentiert.
- Der Kommentar beim globalen Rate Limit sagt "15 minutes", der Default ist aber `15 * 100 * 1000`, also 25 Minuten.
- `allowedOrigins` enthaelt noch `http://localhost:5173`, was aus der alten Vite-App stammt.

## Deployment

- `docker-compose.yml` baut jetzt ein separates `frontend`-Image mit `Dockerfile.next`; `Dockerfile.nginx` liefert keine statische SPA mehr aus, sondern nur Nginx.
- Certbot fordert Zertifikate fuer `fahrschule-lg.scooldrive.com` und `server.scooldrive.com` an. `nginx.conf` enthaelt zusaetzlich `workpilot.basharfarhat.com`, dessen Zertifikat in dieser Compose-Command nicht mit angefordert wird.

## Content

- Blogartikel muessen pro Slug in allen drei Locale-Ordnern vorhanden sein, sonst werden sie vom Loader nicht in die vollstaendige Liste aufgenommen.
- Neue Blogbilder sollten unter `client-next/public/blog/<slug>.jpg` liegen oder bewusst auf `default.jpg`/ein bestehendes Cover verweisen.
- Sprachtexte sind inzwischen groesstenteils zentralisiert, aber fachliche Textaenderungen sollten trotzdem jeweils in `de`, `en` und `ar` geprueft werden.
