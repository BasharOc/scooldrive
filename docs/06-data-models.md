# Datenmodelle

Alle Modelle liegen in `server/src/models/`.

## Admin

Datei: `server/src/models/Admin.js`

Felder:

| Feld | Typ | Zweck |
| --- | --- | --- |
| `username` | String, unique | Admin-Loginname. |
| `password` | String | Gehashter Passwortwert. |
| `isActive` | Boolean | Aktiviert/deaktiviert Admin. |
| `lastLogin` | Date/null | Letzter Login. |
| `loginAttempts` | Number | Fehlversuche. |
| `lockUntil` | Date/null | Sperre nach zu vielen Fehlversuchen. |

Verhalten:

- `pre("save")` hasht neue/geaenderte Passwoerter mit bcrypt und Salt-Rounds 12.
- Virtual `isLocked` prueft, ob `lockUntil` in der Zukunft liegt.
- `comparePassword()` erhoeht Fehlversuche und sperrt nach 5 falschen Versuchen fuer 30 Minuten.

## Preise

Datei: `server/src/models/Preise.js`

Single-Document-Konfiguration fuer Preiswerte. Alle Felder sind `Number`, required, `min: 0`, mit Defaults.

Default-Beispiele:

- `grundgebuehrTheoriekurs`: 400
- `lernapp`: 85
- `uebungsstundePKW`: 70
- `sonderfahrtenPKW`: 80
- `praxispruefung`: 200
- `intensivkursPreis`: 2499

Statische Methode:

- `getOrCreateDefault()`: gibt erstes Dokument zurueck oder erstellt eins aus Defaults.

## Termine

Datei: `server/src/models/Termine.js`

Struktur:

```json
{
  "termine": [
    {
      "titel": "Theoriekurs",
      "datum": "2025-10-27T00:00:00.000Z",
      "aktiv": true
    }
  ]
}
```

Schema-Felder im Array:

- `titel`: String, required, max 100.
- `datum`: Date, required.
- `aktiv`: Boolean, Default `true`.

Default-Erzeugung enthaelt weitere Felder wie `uhrzeit`, `beschreibung` und `maxTeilnehmer`, die im Schema nicht explizit definiert sind. Mit Mongoose Strict-Defaults werden nicht definierte Felder normalerweise nicht persistiert.

## Einstellungen

Datei: `server/src/models/Einstellungen.js`

Felder:

- `anmeldungStopp`: blockiert die Anmeldung im Frontend.
- `begrenztePlaetze`: zeigt begrenzte Plaetze bzw. ist als Website-Flag vorgesehen.
- `kontaktOptionen.whatsapp`: steuert WhatsAppButton im `MainLayout`.
- `kontaktOptionen.telefon`: Kontaktoption fuer UI.

## Bonus

Datei: `server/src/models/Bonus.js`

Zwei Bonusarten:

- `forAll`
- `forFriend`

Jede Bonusart hat:

- `aktiv`
- `rabattmenge`
- `zeitlimit` in Stunden
- `expiresAt`

Verhalten:

- Beim Speichern wird `expiresAt` berechnet, wenn `aktiv` und `zeitlimit > 0` sind.
- `checkAndDeactivateExpired()` deaktiviert abgelaufene Boni.
- `getOrCreateDefault()` prueft beim Lesen auf Ablauf und speichert ggf. die Deaktivierung.

## Oeffnungszeiten

Datei: `server/src/models/Oeffnungszeiten.js`

Felder:

- `montag`
- `dienstag`
- `mittwoch`
- `donnerstag`
- `freitag`
- `samstag`
- `sonntag`

Jeder Tag hat:

- `aktiv`
- `startzeit`
- `endzeit`

Defaults:

- Montag bis Freitag: aktiv, `08:00` bis `18:00`.
- Samstag und Sonntag: inaktiv, `09:00` bis `14:00`.

