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

Wichtige Felder:

- `grundgebuehrTheoriekurs`
- `lernapp`
- `uebungsstundePKW`
- `sonderfahrtenPKW`
- `theorieprueung`
- `praxispruefung`
- `motorradKlasseAGrundgebuehr`
- `uebungsstundeMotorrad`
- `sonderfahrtenMotorrad`
- `uebungsstundePKWAnhaenger`
- `sonderfahrtenPKWAnhaenger`
- `anhaengerKlasseB96`
- `leichtkraftradB196`
- `fuehrerscheinantrag`
- `sehtest`
- `ersteHilfeKurs`
- `passbild`
- `intensivkursPreis`

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
      "datum": "2026-05-01T00:00:00.000Z",
      "aktiv": true
    }
  ]
}
```

Schema-Felder im Array:

- `titel`: String, required, max 100.
- `datum`: Date, required.
- `aktiv`: Boolean, Default `true`.

Der Controller leert beim Speichern das Array und fuegt maximal ein Terminobjekt ein.

## Einstellungen

Datei: `server/src/models/Einstellungen.js`

Felder:

- `anmeldungStopp`: blockiert die Anmeldung im Frontend.
- `begrenztePlaetze`: Website-Flag fuer begrenzte Plaetze.
- `kontaktOptionen.whatsapp`: steuert den WhatsAppButton im Locale-Layout.
- `kontaktOptionen.telefon`: Kontaktoption fuer UI.

Hinweis: `client-next/lib/remote-data.ts` typisiert optional `kontaktOptionen.whatsappNummer`; das Server-Schema speichert dieses Feld aktuell nicht.

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

## Registration

Datei: `server/src/models/Registration.js`

Speichert echte Anmeldungen aus dem Frontend, bevor EmailJS ausgefuehrt wird. Dadurch bleibt eine Anmeldung erhalten, selbst wenn der Emailversand scheitert.

Wichtige Felder:

- Formularfelder: `fahrzeugTyp`, `spezifischeKlasse`, `vorname`, `nachname`, `hatFuehrerschein`, `fuehrerscheinTyp`, `getriebe`, `pruefung`, `kursart`, `geburtsdatum`, `geburtsstadt`, `telefon`, `email`, `adresse`, `datenschutz`.
- Rabattfelder: `isFriendDiscount`, `friendName`, `rabatt`, `freundeRabatt`, `nameVonFreund`.
- Emailstatus: `pending`, `sent`, `failed`, `mocked`.
- `emailError`: Fehlermeldung, falls EmailJS scheitert.
- `clientUpdateToken`: nicht standardmaessig selektierter Token, mit dem nur der Emailstatus dieses einen Datensatzes aktualisiert werden kann.
- `source`: aktuell `website`.

Indizes:

- `createdAt`
- `emailStatus + createdAt`
- `email + createdAt`
