# Routing, Navigation und SEO

## Routen in `client/src/App.jsx`

| Route | Komponente | Layout |
| --- | --- | --- |
| `/` | `HomePage` | `MainLayout` |
| `/fuehrerschein` | `AutoFuhrerscheinPage` | `MainLayout` |
| `/auto-fuehrerschein` | `AutoPage` | `MainLayout` |
| `/auto-anhaenger` | `AutoAnhangerPage` | `MainLayout` |
| `/motorrad-fuehrerschein` | `MotorradPage` | `MainLayout` |
| `/theoriekurs` | `TheorieKursPage` | `MainLayout` |
| `/intensivkurse` | `IntensivKursPage` | `MainLayout` |
| `/preise` | `PreisePage` | `MainLayout` |
| `/punkte-abbauen` | `PunkteAbbauenPage` | `MainLayout` |
| `/impressum` | `Impressum` | `MainLayout` |
| `/AGB` | `AGB` | `MainLayout` |
| `/datenschutz` | `Datenschutz` | `MainLayout` |
| `/anmelden` | `AnmeldungLeitung` | eigenes Layout |
| `/maximal-capacity` | `MaximalCapacity` | eigenes Layout |
| `/blogs` | `BlogOverview` | `MainLayout` |
| `/blogs/:slug` | `BlogArticlePage` | `MainLayout` |
| `/login` | `Login` | eigenes Layout |
| `/admin` | `ProtectedRoute(AdminApp)` | eigenes Layout |

## Navigation

`client/src/components/Navbar.jsx` ist die zentrale Navigation:

- Desktop: fixed Navbar, Hover-Megamenu, Sprachwahl, CTA zur Anmeldung.
- Mobile: Slide-in-Menue mit Untermenues.
- Sprache wird aus `LanguageContext` gelesen und in `localStorage.selectedLanguage` gespeichert.
- Navigationsziele werden teils ueber Titeltexte gemappt. Dadurch sind Titeltexte fachlich relevant fuer Routing.

Wichtige Navigationsziele:

- Fuehrerschein-Menue: Auto, Anhaenger, Motorrad.
- Termine/Info-Menue: Theoriekurs, Intensivkurse, Preise, Punkte abbauen, Blog.
- CTA: `/anmelden`.

`client/src/components/Footer.jsx` enthaelt weitere Navigationslinks, inklusive rechtlicher Seiten.

## SEO

SEO wird ueber `react-helmet-async` umgesetzt:

- `title`
- `description`
- Open Graph Tags
- Twitter Card Tags
- Canonical Links

Die meisten oeffentlichen Seiten enthalten eigene Helmet-Bloecke. Blogartikel ziehen Metadaten aus `blogArticles`.

## Bekannte Routing-Auffaelligkeiten

- `App.jsx` definiert `/AGB` gross geschrieben, `Footer.jsx` navigiert aber nach `/agb` klein geschrieben. Das ist bei Browser-Routing relevant, weil Pfade case-sensitive sein koennen.
- In `Navbar.jsx` wird bei einem `termineItems` Mapping fuer Blog intern einmal `/blog` berechnet, die Klicklogik navigiert spaeter aber nach `/blogs`. Aktiv genutzt wird die Klicklogik.
- `Footer.jsx` navigiert nach `/cookie-settings`; dafuer existiert aktuell keine Route in `App.jsx`.
