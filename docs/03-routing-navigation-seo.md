# Routing, Navigation und SEO

## Routing

Das Frontend nutzt den Next.js App Router.

| Route | Datei |
| --- | --- |
| `/` | `client-next/app/page.tsx` |
| `/{locale}` | `client-next/app/[locale]/page.tsx` |
| `/{locale}/auto-fuehrerschein` | `client-next/app/[locale]/auto-fuehrerschein/page.tsx` |
| `/{locale}/auto-anhaenger` | `client-next/app/[locale]/auto-anhaenger/page.tsx` |
| `/{locale}/motorrad-fuehrerschein` | `client-next/app/[locale]/motorrad-fuehrerschein/page.tsx` |
| `/{locale}/theoriekurs` | `client-next/app/[locale]/theoriekurs/page.tsx` |
| `/{locale}/intensivkurse` | `client-next/app/[locale]/intensivkurse/page.tsx` |
| `/{locale}/preise` | `client-next/app/[locale]/preise/page.tsx` |
| `/{locale}/punkte-abbauen` | `client-next/app/[locale]/punkte-abbauen/page.tsx` |
| `/{locale}/anmelden` | `client-next/app/[locale]/anmelden/page.tsx` |
| `/{locale}/maximal-capacity` | `client-next/app/[locale]/maximal-capacity/page.tsx` |
| `/{locale}/blogs` | `client-next/app/[locale]/blogs/page.tsx` |
| `/{locale}/blogs/[slug]` | `client-next/app/[locale]/blogs/[slug]/page.tsx` |
| `/{locale}/impressum` | `client-next/app/[locale]/impressum/page.tsx` |
| `/{locale}/datenschutz` | `client-next/app/[locale]/datenschutz/page.tsx` |
| `/{locale}/agb` | `client-next/app/[locale]/agb/page.tsx` |
| `/login` | `client-next/app/login/page.tsx` |
| `/admin` | `client-next/app/admin/page.tsx` |

`generateStaticParams()` erzeugt die drei Locales `de`, `en`, `ar` fuer die oeffentlichen Seiten. Ungueltige Locales werden mit `notFound()` beendet.

Der Root-Redirect `/` -> `/de` ist eine normale interne Sprachweiterleitung zur deutschen Lüneburg-Startseite. Er unterscheidet nicht nach User-Agent, Referrer oder Geraet.

## Navigation

Die zentrale Navigation liegt unter `client-next/components/Navbar/`.

- `Navbar.tsx`: Hauptkomponente.
- `DesktopMegaMenu.tsx`: Desktop-Menues.
- `MobileMenu.tsx`: Mobile Navigation.
- `LanguageSwitcher.tsx`: Wechsel zwischen `de`, `en`, `ar`.
- `constants.ts`: Navigationsdaten.
- `helpers.tsx`: Hilfsfunktionen fuer Links/Labels.

`LocaleChrome` bindet Navbar und Footer in das Locale-Layout ein. Links muessen locale-aware sein, also z. B. `/de/preise`, `/en/preise`, `/ar/preise`.

## SEO

SEO wird ueber Next.js `generateMetadata()` umgesetzt.

Gemeinsamer Helfer:

- `client-next/lib/metadata.ts`
- Basisdomain: `https://fahrschule-lg.scooldrive.com`
- erzeugt Canonical, Sprach-Alternates, Open Graph und Twitter Card.

Die meisten oeffentlichen Seiten lesen ihre SEO-Texte aus `client-next/messages/*` und rufen `generatePageMetadata()` auf. Blogartikel erzeugen eigene Article-Metadaten inklusive Coverbild und Alternates in `client-next/app/[locale]/blogs/[slug]/page.tsx`.

Standort-Regel: SEO-Titel, Descriptions, Keywords, Blogtexte und rechtliche Inhalte sind auf Scooldrive Lüneburg ausgerichtet.

Rendering-Regel: Die oeffentlichen Locale-Seiten sind statisch vorgerendert bzw. ISR-Seiten (`Revalidate 1m`). Google und andere Crawler bekommen HTML-Inhalte direkt ausgeliefert, keinen leeren Client-Screen.

Heading-Regel: Pro oeffentlicher Seite genau ein `h1`. Nachfolgende Struktur: `h2` fuer Hauptabschnitte, `h3` fuer Unterabschnitte/Karten, `h4` fuer tiefere Details. Blog-Content darf kein zweites Artikel-`h1` erzeugen.

## Sitemap und Robots

- Sitemap: `client-next/app/sitemap.ts`
- Robots-Datei: `client-next/public/robots.txt`
- `robots.txt` erlaubt die Website grundsaetzlich, schliesst aber `/admin` per `Disallow: /admin` aus.

## Bekannte Routing-Auffaelligkeiten

- Root `/` leitet immer auf `/de`. Eine automatische Locale-Erkennung gibt es aktuell nicht.
- Admin-Routen sind nicht locale-basiert: `/login` und `/admin`.
- Nginx routet `/api/admin/*` an Next und `/api/*` direkt an Express.
