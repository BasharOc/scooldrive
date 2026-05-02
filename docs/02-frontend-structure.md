# Frontend-Struktur

## Stack

- Next.js 16 mit App Router und `output: "standalone"`.
- React 19.
- TypeScript.
- Tailwind CSS 4 ueber PostCSS.
- Framer Motion fuer einzelne Animationen.
- React Icons.
- EmailJS fuer den Live-Versand der Anmeldung.

## App-Aufbau

`client-next/app/layout.tsx` ist das Root-Layout. Es setzt globale Metadaten, importiert `globals.css` und rendert den `CookieBanner`.

`client-next/app/page.tsx` leitet `/` auf `/de` weiter.

`client-next/app/[locale]/layout.tsx`:

- erlaubt die Locales `de`, `en`, `ar`.
- setzt `lang` und fuer Arabisch `dir="rtl"`.
- laedt `/api/einstellungen` serverseitig ueber `getEinstellungen()`.
- steuert Sichtbarkeit und Nummer des `WhatsAppButton`.
- rendert `LocaleChrome` mit Navbar, Footer und Seiteninhalt.

## Komponentenfamilien

| Familie | Pfad | Inhalt |
| --- | --- | --- |
| Layout | `client-next/components/Layout/` | Locale-Chrome mit Navbar/Footer-Rahmen. |
| Navbar | `client-next/components/Navbar/` | Desktop-Megamenu, Mobile-Menue, Sprachwechsel. |
| Footer | `client-next/components/Footer/` | Footer-Komponente und Typen. |
| Homepage | `client-next/components/Homepage/` | Hero, Angebote, Reviews, Verkehrsregeln, Standort, FAQ. |
| Auto-Fuehrerschein | `client-next/components/AutoFuehrerschein/` | Auto-Seite und Facts/Steps. |
| Auto-Anhaenger | `client-next/components/AutoAnhaenger/` | Hero, Anforderungen, Schritte, Checkliste. |
| Motorrad | `client-next/components/Motorrad/` | Hero, Checkliste, Fakten, Infos, Lizenzschritte. |
| Theoriekurs | `client-next/components/Theoriekurs/` | Kursseite mit Termin-Daten. |
| Intensivkurse | `client-next/components/Intensivkurse/` | Kursseite mit Preis-Daten. |
| Preise | `client-next/components/Preise/` | Preisuebersicht und Preiswidget. |
| Punkte abbauen | `client-next/components/PunkteAbbauen/` | ASF/FES/Punkteabbau-Seite. |
| Anmeldung | `client-next/components/Registration/` | Wizard, State, Submit, Navigation, Kapazitaetsseite. |
| Admin | `client-next/components/Admin/` | Login, Dashboard, Admin-API-Helfer. |
| Blog | `client-next/components/Blog/` | Uebersicht und Artikelansicht. |
| Rechtliches | `client-next/components/LegalPage/` | Impressum, Datenschutz, AGB. |

## Seiten

| Route | Datei | Rolle |
| --- | --- | --- |
| `/` | `client-next/app/page.tsx` | Redirect nach `/de`. |
| `/{locale}` | `client-next/app/[locale]/page.tsx` | Homepage. |
| `/{locale}/auto-fuehrerschein` | `client-next/app/[locale]/auto-fuehrerschein/page.tsx` | Klasse-B/Auto-Fuehrerschein. |
| `/{locale}/auto-anhaenger` | `client-next/app/[locale]/auto-anhaenger/page.tsx` | BE/B96. |
| `/{locale}/motorrad-fuehrerschein` | `client-next/app/[locale]/motorrad-fuehrerschein/page.tsx` | Motorradklassen. |
| `/{locale}/theoriekurs` | `client-next/app/[locale]/theoriekurs/page.tsx` | Theoriekurs mit Termindaten. |
| `/{locale}/intensivkurse` | `client-next/app/[locale]/intensivkurse/page.tsx` | Intensivkurs mit Preis. |
| `/{locale}/preise` | `client-next/app/[locale]/preise/page.tsx` | Preisuebersicht. |
| `/{locale}/punkte-abbauen` | `client-next/app/[locale]/punkte-abbauen/page.tsx` | Punkteabbau. |
| `/{locale}/anmelden` | `client-next/app/[locale]/anmelden/page.tsx` | Anmeldung mit Stop-Pruefung. |
| `/{locale}/maximal-capacity` | `client-next/app/[locale]/maximal-capacity/page.tsx` | Zielseite bei Anmeldung-Stopp. |
| `/{locale}/blogs` | `client-next/app/[locale]/blogs/page.tsx` | Bloguebersicht. |
| `/{locale}/blogs/[slug]` | `client-next/app/[locale]/blogs/[slug]/page.tsx` | Blogartikel. |
| `/{locale}/impressum` | `client-next/app/[locale]/impressum/page.tsx` | Impressum. |
| `/{locale}/datenschutz` | `client-next/app/[locale]/datenschutz/page.tsx` | Datenschutz. |
| `/{locale}/agb` | `client-next/app/[locale]/agb/page.tsx` | AGB. |
| `/login` | `client-next/app/login/page.tsx` | Admin-Login. |
| `/admin` | `client-next/app/admin/page.tsx` | Admin-Dashboard. |

## Datenzugriff im Frontend

Serverseitige oeffentliche Daten:

- `client-next/lib/api.ts`
- `API_BASE_URL`
- fallback auf `NEXT_PUBLIC_API_URL`, falls absolute URL gesetzt.
- letzter Default: `http://localhost:3001/api`.
- `fetchApi()` nutzt Next-Revalidation von 60 Sekunden fuer Einstellungen, Termine, Preise und Oeffnungszeiten.

Clientseitige Anmeldung:

- `client-next/lib/registration-api.ts`
- nutzt `NEXT_PUBLIC_API_URL`.
- Default: `http://localhost:3001/api`.
- speichert Registrierungen und aktualisiert den Emailstatus.

Admin:

- `client-next/app/api/admin/*` proxyt zum Express-Backend.
- `client-next/components/Admin/api.ts` ruft diese Proxy-Routen mit `credentials: "same-origin"` auf.
