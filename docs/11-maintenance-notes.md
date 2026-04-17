# Wartung und Auffaelligkeiten

Diese Datei sammelt Dinge, die beim genauen Lesen aufgefallen sind. Sie ist keine Fehlerliste im Sinne eines Reviews, sondern eine praktische Wartungsnotiz.

## Routing und Links

- `App.jsx` definiert `/AGB`, `Footer.jsx` navigiert nach `/agb`. Vereinheitlichen.
- `Footer.jsx` navigiert nach `/cookie-settings`, aber es gibt keine Route dafuer.
- In `Navbar.jsx` existiert intern einmal ein Mapping auf `/blog`, aktiv navigiert wird aber nach `/blogs`.

## Backend

- `server/src/routes/userRoutes.js` ist nicht gemountet und importiert `../models/User`, das im Repository nicht existiert.
- In `app.js` ist `authLimiter` definiert, aber fuer `/api/auth` auskommentiert.
- Default-Kommentar beim globalen Rate Limit sagt "15 minutes", der Default ist aber `15 * 100 * 1000`, also 1.500.000 ms bzw. 25 Minuten.
- `Termine` ist als Array modelliert, Controller und Admin-UI behandeln aber nur genau einen Termin.
- `Termine.getOrCreateDefault()` setzt Default-Felder wie `uhrzeit`, `beschreibung`, `maxTeilnehmer`, die nicht im Schema stehen.

## Frontend

- `client/src/App.css` enthaelt Vite-Template-CSS und wird von `App.jsx` nicht importiert.
- `client/README.md` ist noch der Standard-Vite-README und beschreibt das Produkt nicht.
- `client/src/contexts/LanguageContext.jsx` importiert `warning` aus `framer-motion`, nutzt es aber nicht.
- `Navbar.jsx` liest `window.innerWidth` direkt beim Rendern. Das ist in reinen Browser-SPAs ok, waere aber bei SSR problematisch.
- Viele Seiten haben grosse lokale Content-Objekte. Fuer langfristige Pflege koennte eine zentrale Content-Struktur helfen.

## API-Konsistenz

- Public GET-Responses geben rohe Mongoose-Dokumente zurueck, waehrend Auth-Responses `{ success, message, ... }` nutzen. Fuer Clients waere ein einheitliches Response-Format wartungsfreundlicher.
- Fehlerantworten unterscheiden sich je nach Controller und Middleware.
- Schreib-Endpunkte nutzen `PUT`, ersetzen aber teils nur vorhandene Felder und teils ganze Teilstrukturen.

## Sicherheit

- JWT liegt in `localStorage`. Das ist einfach, erhoeht aber die Wichtigkeit von XSS-Schutz.
- Cookie Consent laedt GA erst nach Zustimmung, gut. Pruefen, ob bei abgelehnter Zustimmung bereits vorhandene Analytics-Skripte entfernt werden muessen.
- Admin-Initialisierung erstellt den ersten Admin aus `.env`. Nach dem ersten Start sollten Default-Credentials nicht weiterverwendet werden.

## Datenpflege

- Preisfeld `theorieprueung` ist im Code konsistent so geschrieben, enthaelt aber einen Tippfehler im Feldnamen. Eine Umbenennung waere migrationsrelevant.
- Blogartikel verweisen teilweise auf Bildpfade. Fuer neue Artikel immer pruefen, ob `client/public/blog/<slug>.jpg` existiert oder `default.jpg` greift.
- Sprachtexte sind teils zentral und teils komponentenlokal. Neue Sprachen muessen daher an mehreren Stellen gepflegt werden.

