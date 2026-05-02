# Anmeldeprozess

## Einstieg

Die Route `/{locale}/anmelden` rendert `client-next/app/[locale]/anmelden/page.tsx`.

Ablauf:

1. Locale pruefen.
2. SEO-Metadaten aus `registrationByLocale`.
3. `getEinstellungen()` laden.
4. Bei `settings.anmeldungStopp` nach `/{locale}/maximal-capacity` weiterleiten.
5. Sonst `RegistrationFlow` rendern.

## Formular

Hauptdateien:

- `client-next/components/Registration/RegistrationFlow.tsx`
- `client-next/components/Registration/registration-state.ts`
- `client-next/components/Registration/registration-submit.ts`
- `client-next/components/Registration/RegistrationStepRenderer.tsx`

Das Formular arbeitet mit:

- `currentStep`
- `formData`
- `errors`
- `isFriendDiscount`
- `friendName`
- `isSubmitted`
- Bonusdaten aus `getBonus()`

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

| Schritt | Inhalt |
| --- | --- |
| 1 | Fahrzeugtyp: Auto, Motorrad, Auto-Anhaenger. |
| 2 | Vorname, Nachname. |
| 3 | Vorhandener Fuehrerschein, besonders fuer Anhaenger relevant. |
| 3.5 | Spezifische Klasse: BE/B96 oder AM/A1/A2/A. |
| 4 | Getriebeauswahl. |
| 5 | Pruefungsart. |
| 6 | Kursart. |
| 7 | Zusammenfassung. |
| 8 | Persoenliche Daten und Datenschutz. |
| 9 | Erfolg/WhatsApp-Dankesseite. |

`TOTAL_REGISTRATION_STEPS` ist aktuell `10`, obwohl der sichtbare Abschluss bei Schritt 9 liegt. Die Navigation blendet bei Schritt 9 den Weiter-Button aus.

## Abzweigungen

- Auto: Schritt 2 springt direkt zu Schritt 4.
- Motorrad: Schritt 2 springt zu Schritt 3.5, danach zu Schritt 6.
- Auto-Anhaenger: Schritt 2 geht zu Schritt 3, dann Schritt 3.5, dann Schritt 4.
- Bei Anhaenger wird in Schritt 3 angezeigt, dass Klasse B Voraussetzung ist, wenn kein Fuehrerschein vorhanden ist.

## Validierung

Validiert werden:

- Schritt 1: Fahrzeugtyp.
- Schritt 2: Vorname, Nachname.
- Schritt 3.5: spezifische Klasse.
- Schritt 4: Getriebe.
- Schritt 5: Pruefung.
- Schritt 6: Kursart.
- Schritt 8: Name, Geburtsdatum, Geburtsstadt, Telefon, Email, Adresse, Datenschutz.

## Speicherung und EmailJS

Beim Submit in Schritt 8 wird zuerst eine Registrierung in MongoDB gespeichert:

```text
POST /api/registrations
```

Erst danach wird EmailJS ausgefuehrt oder im Mock-Modus uebersprungen. Anschliessend wird der Emailstatus im Backend aktualisiert:

```text
PATCH /api/registrations/:id/email-status
```

Dadurch bleibt die Anmeldung im Adminbereich sichtbar, auch wenn EmailJS scheitert.

Email-Modus:

- `NEXT_PUBLIC_EMAIL_MODE=live`: echter EmailJS-Versand.
- Andere Werte oder fehlende Variable: Mock-Modus in Development.
- In Production ist der Default `live`.

EmailJS nutzt:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Bonus-Einbindung

`RegistrationFlow` laedt `/api/bonus`:

- `forAll` wird als allgemeiner Rabatt angezeigt.
- `forFriend` blendet in Schritt 8 eine Freunde-Rabatt-Option ein.
- Sind beide aktiv, wird fuer `activeBonus` zuerst `forAll` verwendet.
