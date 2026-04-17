# Content, Sprache und Assets

## Sprache

Zentrale Datei: `client/src/contexts/LanguageContext.jsx`

Der Context stellt bereit:

- `selectedLanguage`
- `setSelectedLanguage`
- `languages`
- `translations`
- `t`

Unterstuetzte Sprachen:

- `DE`
- `EN`
- `AR`

Die Navbar speichert die Auswahl in `localStorage.selectedLanguage`.

## Uebersetzungsstruktur

Der globale `LanguageContext` enthaelt vor allem:

- Navbar-Texte
- Fuehrerschein-Menue
- Termine/Info-Menue
- Homepage-Hero
- Fuehrerschein-Auswahl

Viele grosse Seiten definieren zusaetzlich eigene lokale `content`-Objekte fuer DE/EN/AR, zum Beispiel:

- `client/src/features/registration/registrationContent.jsx`
- `TheorieKursPage.jsx`
- `IntensivKursPage.jsx`
- `PreisePage.jsx`
- `PunkteAbbauenPage.jsx`
- Komponenten in Homepage, Auto, Anhaenger und Motorrad.

## Blog

Datei: `client/src/helpers/blogarticles.js`

Struktur:

- Array `blogArticles`
- jedes Element hat `slug`, optional `thumbnail`, und `translations`
- jede Sprache hat `title`, `teaser`, `content`, optional `meta`
- `content` ist HTML-String und wird in der Artikelansicht gerendert

Aktuelle Slugs:

- `geblitzt-was-tun`
- `aufbauseminar-asf-lueneburg`
- `fahreignungsseminar-punkteabbau-lueneburg`
- `fuehrerscheinpruefung-tipps-lueneburg`
- `fuehrerschein-verloren-entzogen-lueneburg`
- `nachschulung-auffrischungskurs-lueneburg`
- `fuehrerschein-lueneburg-dauer-wartezeiten`
- `fuehrerschein-kosten-lueneburg-preise`
- `fuehrerschein-umschreiben-lueneburg`

Blogbilder liegen in `client/public/blog/`.

## Assets

Wichtige Dateien in `client/public/`:

| Asset | Verwendung |
| --- | --- |
| `logo.png` | Navbar und Branding. |
| `logo-icon.png` | SEO/Open-Graph-Bild. |
| `hero-video.mp4` | Homepage-Hero. |
| `auto-video.mp4` | Auto-Seiten. |
| `anhanger-video.mp4` | Anhaenger-Seiten. |
| `motorrad-video.mp4` | Motorrad-Seiten. |
| `auto-anhanger.png` | Anhaenger-Bild. |
| `auto-anhanger-mobile.png` | Navbar/Mobile-Anhaenger-Icon. |
| `motorcycle.jpg` | Motorrad-Bild. |
| `innovative-methode.jpg` | Content-Bild. |
| `intensivkurs.jpg` | Intensivkurs-Bild. |
| `sitemap.xml` | Sitemap fuer Suchmaschinen. |

## Google Analytics und Cookies

`client/src/pages/CookieBanner.jsx`:

- liest/schreibt `localStorage.cookieConsent`
- nutzt Framer Motion fuer Banner/Modal
- laedt Google Analytics nur nach Zustimmung
- Script-Loader: `client/src/helpers/loadGAScript.jsx`
- Measurement ID: `VITE_GA_MEASUREMENT_ID`

## Statische Styles

- `client/src/index.css`: Tailwind Import und globale Overflow/Font-Regeln.
- `client/src/components/Homepage/*.css`: einzelne CSS-Dateien fuer Homepage-Komponenten.
