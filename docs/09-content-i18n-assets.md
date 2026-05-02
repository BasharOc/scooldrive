# Content, Sprache und Assets

## Sprache

Unterstuetzte Locales:

- `de`
- `en`
- `ar`

Definition:

- `client-next/types/i18n.ts`

Locale-Routen liegen unter:

- `client-next/app/[locale]/`

`client-next/app/[locale]/layout.tsx` setzt `lang={locale}` und fuer Arabisch `dir="rtl"`.

## Uebersetzungsstruktur

Zentrale Content-Dateien liegen unter `client-next/messages/`.

Beispiele:

- `client-next/messages/home.ts`
- `client-next/messages/preise.ts`
- `client-next/messages/punkte-abbauen.ts`
- `client-next/messages/registration.ts`
- `client-next/messages/legal.ts`

Die eigentlichen Sprachdaten liegen in Unterordnern:

- `client-next/messages/de/`
- `client-next/messages/en/`
- `client-next/messages/ar/`

Die Root-Dateien exportieren meistens locale-gebuendelte Maps wie `homeByLocale`, `preiseByLocale` oder `registrationByLocale`.

## Blog

Blog-Loader:

- `client-next/lib/content/blogs.ts`

Artikel liegen pro Sprache als TypeScript-Dateien:

- `client-next/messages/de/blogs/*.ts`
- `client-next/messages/en/blogs/*.ts`
- `client-next/messages/ar/blogs/*.ts`

Ein Blogartikel gilt nur als vollstaendig, wenn derselbe Slug in allen drei Locale-Ordnern existiert.

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

Blogbilder liegen in:

- `client-next/public/blog/`

## Assets

Wichtige Dateien in `client-next/public/`:

| Asset | Verwendung |
| --- | --- |
| `logo.png` | Navbar und Branding. |
| `logo-icon.jpg` | Icon/SEO-Bild. |
| `hero-video.mp4` | Homepage-Hero. |
| `auto-video.mp4` | Auto-Seiten. |
| `anhanger-video.mp4` | Anhaenger-Seiten. |
| `motorrad-video.mp4` | Motorrad-Seiten. |
| `auto-anhanger.png` | Anhaenger-Bild. |
| `auto-anhanger-mobile.png` | Mobile-/Navbar-Bild. |
| `motorcycle.jpg` | Motorrad-Bild. |
| `innovative-methode.jpg` | Content-Bild. |
| `intensivkurs.jpg` | Intensivkurs-Bild. |
| `aufbau.png` | Content-Bild. |
| `placeholder.jpg` | Fallback-Bild. |
| `robots.txt` | Robots-Datei. |

## Google Analytics und Cookies

Cookie-Banner:

- `client-next/components/CookieBanner/CookieBanner.tsx`

Script-Loader:

- `client-next/components/CookieBanner/load-gtag.ts`

Environment:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

Google Analytics wird erst nach Zustimmung geladen.

## Statische Styles

- `client-next/app/globals.css`: Tailwind Import, globale Variablen und Basisstyles.
- Komponenten nutzen ueberwiegend Tailwind-Klassen direkt in TSX.
