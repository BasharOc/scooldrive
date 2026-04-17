# Anmeldeprozess

## Einstieg

Die Route `/anmelden` rendert nicht direkt das Formular, sondern `AnmeldungLeitung`.

`client/src/pages/AnmeldungLeitung.jsx`:

1. laedt `/api/einstellungen`
2. prueft `einstellungen.anmeldungStopp`
3. leitet bei aktivem Stop zu `/maximal-capacity`
4. rendert sonst `AnmeldungPage`

## Formular

Hauptdatei: `client/src/pages/AnmeldungPage.jsx`

Hilfskomponenten: `client/src/components/AnmeldeSteps/`

Das Formular arbeitet mit:

- `currentStep`
- `formData`
- `errors`
- `isFriendDiscount`
- `friendName`
- Bonusdaten aus `useApiData("bonus")`

## FormData-Felder

```json
{
  "fahrzeugTyp": "",
  "vorname": "",
  "nachname": "",
  "hatFuehrerschein": false,
  "spezifischeKlasse": "",
  "fuehrerscheinTyp": "",
  "getriebe": "",
  "pruefung": "",
  "kursart": "",
  "geburtsdatum": "",
  "geburtsstadt": "",
  "telefon": "",
  "email": "",
  "adresse": "",
  "datenschutz": false
}
```

## Schrittlogik

| Schritt | Komponente | Inhalt |
| --- | --- | --- |
| 1 | `Step1` | Fahrzeugtyp: Auto, Motorrad, Auto-Anhaenger. |
| 2 | `Step2` | Vorname, Nachname. |
| 3 | `Step3` | Vorhandener Fuehrerschein, besonders fuer Anhaenger relevant. |
| 3.5 | `Step3_5` | Spezifische Klasse: BE/B96 oder AM/A1/A2/A. |
| 4 | `Step4` | Getriebeauswahl. |
| 5 | `Step5` | Pruefungsart. |
| 6 | `Step6` | Kursart. |
| 7 | `Step7` | Zusammenfassung. |
| 8 | `Step8` | Persoenliche Daten und Datenschutz. |
| 9 | `Step9` | Erfolg/WhatsApp-Dankesseite. |

`totalSteps` ist aktuell `10`, obwohl der sichtbare Abschluss bei Schritt 9 liegt. Die Navigation blendet bei Schritt 9 den Weiter-Button aus.

## Abzweigungen

- Auto: Schritt 2 springt direkt zu Schritt 4.
- Motorrad: Schritt 2 springt zu Schritt 3.5, danach zu Schritt 6.
- Auto-Anhaenger: Schritt 2 geht zu Schritt 3, dann Schritt 3.5, dann Schritt 4.
- Bei Anhaenger wird in `Step3` angezeigt, dass Klasse B Voraussetzung ist, wenn kein Fuehrerschein vorhanden ist.

## Validierung

Validiert werden:

- Schritt 1: Fahrzeugtyp.
- Schritt 2: Vorname, Nachname.
- Schritt 3.5: spezifische Klasse.
- Schritt 4: Getriebe.
- Schritt 5: Pruefung.
- Schritt 6: Kursart.
- Schritt 8: Name, Geburtsdatum, Geburtsstadt, Telefon, Email, Adresse, Datenschutz.

## EmailJS

Beim Submit in Schritt 8 wird `emailjs.send()` aufgerufen mit:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Uebertragene Felder:

- Name und Kontaktdaten
- Geburtsdaten und Adresse
- Fuehrerschein-/Kursauswahl
- allgemeiner Rabatt
- Freunde-Rabatt
- Name des werbenden Freundes

## Bonus-Einbindung

`AnmeldungPage` laedt `/api/bonus`:

- `forAll` wird als allgemeiner Rabatt angezeigt.
- `forFriend` blendet in Schritt 8 eine Freunde-Rabatt-Option ein.
- `BonusNavbar` zeigt aktive Boni global im Layout als Ticker.

