# Frontend-Struktur

## Stack

- React 19
- Vite 6 mit `@vitejs/plugin-react-swc`
- React Router 7
- Tailwind CSS 4 ueber `@tailwindcss/vite`
- Framer Motion fuer Animationen
- React Icons
- React Helmet Async fuer SEO
- EmailJS fuer Anmeldungsmails

## App-Aufbau

`client/src/main.jsx` rendert `App` in `#root`.

`client/src/App.jsx` legt die globalen Provider und Routen an:

- `LanguageProvider`
- `HelmetProvider`
- `BrowserRouter`
- globales Scroll-Verhalten ueber `ScrollToTop`
- Cookie-Banner ausserhalb der Routenelemente

Oeffentliche Seiten werden meist in `MainLayout` gerendert. Admin und Anmeldung haben eigene Layouts.

## Layout-Schicht

`client/src/layouts/MainLayout.jsx`:

- laedt `/api/einstellungen`
- blendet `WhatsAppButton` nur ein, wenn `kontaktOptionen.whatsapp` aktiv ist
- rendert `BonusNavbar`, `Navbar`, `main`, `Footer`
- zeigt einen Fehlertext, wenn Einstellungen nicht geladen werden koennen

## Komponentenfamilien

| Familie | Pfad | Inhalt |
| --- | --- | --- |
| Global | `client/src/components/` | Navbar, Footer, BonusTicker, WhatsAppButton, ScrollToTop. |
| Homepage | `client/src/components/Homepage/` | Hero, Fahrschul-Angebote, Reviews, Verkehrsregeln, Standort, FAQ, Kontaktformular. |
| Auto | `client/src/components/AutoPage/` | Klasse-B-Hero, Fakten, Ausbildungsschritte. |
| Fuehrerschein-Uebersicht | `client/src/components/auto-führerschein/` | Hero, Scheinwahl, Bild/Text, Drei-Schritte-Abschnitt. |
| Anhaenger | `client/src/components/AutoAnhanger/` | Hero, Anforderungen, Schritte, weitere Voraussetzungen. |
| Motorrad | `client/src/components/Motorrad/` | Hero, Anforderungen, Fakten, Infos, Lizenzschritte. |
| Anmeldung | `client/src/components/AnmeldeSteps/` | Step1 bis Step9 plus Step3_5. |
| Anmeldung Feature | `client/src/features/registration/` | Page, Reducer, Content, Validierung, Submit und UI-Bausteine fuer den Wizard. |
| Admin | `client/src/pages/Admin/components/` | Formulare fuer Backend-Ressourcen. |

## Seiten

| Seite | Datei | Rolle |
| --- | --- | --- |
| Homepage | `client/src/pages/HomePage.jsx` | Startseite mit Hero, Angeboten, Reviews, Standort und FAQ. |
| Fuehrerschein | `client/src/pages/AutoFuhrerscheinPage.jsx` | Uebersichtsseite fuer Fuehrerscheinwahl. |
| Auto | `client/src/pages/AutoPage.jsx` | Klasse-B-Unterseite. |
| Anhaenger | `client/src/pages/AutoAnhangerPage.jsx` | BE/B96-Unterseite. |
| Motorrad | `client/src/pages/MotorradPage.jsx` | Motorradklassen-Unterseite. |
| Theoriekurs | `client/src/pages/TheorieKursPage.jsx` | Kursinfo mit Termin-Daten aus API. |
| Intensivkurs | `client/src/pages/IntensivKursPage.jsx` | Intensivkursinfo mit Preis-Daten aus API. |
| Preise | `client/src/pages/PreisePage.jsx` | Preisuebersicht mit API-Daten. |
| Punkte abbauen | `client/src/pages/PunkteAbbauenPage.jsx` | ASF/FES/Punkteabbau-Landingpage. |
| Anmeldung | `client/src/pages/AnmeldungPage.jsx` | Kompatibler Wrapper auf `features/registration/RegistrationPage.jsx`. |
| Anmeldung-Leitung | `client/src/pages/AnmeldungLeitung.jsx` | Gate vor Anmeldung, prueft `anmeldungStopp`. |
| Kapazitaet | `client/src/pages/MaximalCapacity.jsx` | Zielseite bei aktivem Anmeldung-Stopp. |
| Blog | `client/src/pages/Blog/BlogOverview.jsx` | Liste statischer Blogartikel. |
| Blogartikel | `client/src/pages/Blog/BlogArticlePage.jsx` | Einzelartikel anhand `slug`. |
| Rechtliches | `client/src/pages/LegalNotice.jsx` | Impressum, Datenschutz und AGB. |
| Login | `client/src/pages/Admin/Login.jsx` | Admin-Login. |
| Admin | `client/src/pages/Admin/AdminApp.jsx` | Admin-Dashboard. |

Im Admin-Dashboard ist `Registrierungen` eingebunden. Diese Komponente liest `/api/registrations` mit Admin-JWT und zeigt gespeicherte Anmeldungen inklusive Emailstatus.

## Datenzugriff im Frontend

`client/src/utils/api.js` definiert:

```js
const API_BASE =
  import.meta.env.VITE_API_URL || "https://server.scooldrive.com/api";
```

`client/hooks/useAPIData.jsx` kapselt einfache GET-Abfragen:

- State: `data`, `loading`, `error`
- initialer Fetch bei `endpoint`
- `refetch()` fuer erneutes Laden

Einige Komponenten nutzen weiterhin direkte `fetch()`-Aufrufe mit `API_BASE`, besonders Admin-Komponenten und Layout-Gates.
