# API-Referenz

Basis im Produktiv-Fallback:

```text
https://server.scooldrive.com/api
```

Im Frontend ueberschreibbar mit:

```text
VITE_API_URL
```

## Health

| Methode | Pfad | Auth | Zweck |
| --- | --- | --- | --- |
| GET | `/health` | nein | Serverstatus, Timestamp, Uptime. |

## Auth

| Methode | Pfad | Auth | Body | Antwort |
| --- | --- | --- | --- | --- |
| POST | `/api/auth/login` | nein | `{ username, password }` | `{ success, message, token, admin }` |
| GET | `/api/auth/verify` | Bearer Token | keines | `{ success, message, admin }` |
| POST | `/api/auth/logout` | Bearer Token | keines | `{ success, message }` |

Login-Validierung:

- `username`: String, 3 bis 50 Zeichen.
- `password`: String, mindestens 6 Zeichen.

## Preise

| Methode | Pfad | Auth | Zweck |
| --- | --- | --- | --- |
| GET | `/api/preise` | nein | Preis-Konfiguration lesen. |
| PUT | `/api/preise` | Bearer Token | Preisfelder aktualisieren. |

Erlaubte Preisfelder:

- `grundgebuehrTheoriekurs`
- `lernapp`
- `uebungsstundePKW`
- `sonderfahrtenPKW`
- `theorieprueung`
- `praxispruefung`
- `uebungsstundeMotorrad`
- `sonderfahrtenMotorrad`
- `sonderfahrtenPKWAnhaenger`
- `uebungsstundePKWAnhaenger`
- `fuehrerscheinantrag`
- `sehtest`
- `ersteHilfeKurs`
- `passbild`
- `anhaengerKlasseB96`
- `leichtkraftradB196`
- `motorradKlasseAGrundgebuehr`
- `intensivkursPreis`

Alle Preisfelder werden als nicht-negative Zahl validiert, sofern sie im Request enthalten sind.

## Termine

| Methode | Pfad | Auth | Zweck |
| --- | --- | --- | --- |
| GET | `/api/termine` | nein | Termin-Dokument lesen. |
| PUT | `/api/termine` | Bearer Token | Aktuellen Termin ersetzen. |

Body fuer PUT:

```json
{
  "titel": "Theoriekurs",
  "datum": "2026-05-01",
  "aktiv": true
}
```

Wichtig: Der Controller leert das Array `termine` und fuegt hoechstens ein Terminobjekt ein. Mehrere Termine werden aktuell nicht als Batch gespeichert.

## Einstellungen

| Methode | Pfad | Auth | Zweck |
| --- | --- | --- | --- |
| GET | `/api/einstellungen` | nein | Oeffentliche Website-Einstellungen lesen. |
| PUT | `/api/einstellungen` | Bearer Token | Einstellungen aktualisieren. |

Body-Struktur:

```json
{
  "anmeldungStopp": false,
  "begrenztePlaetze": false,
  "kontaktOptionen": {
    "whatsapp": true,
    "telefon": true
  }
}
```

## Bonus

| Methode | Pfad | Auth | Zweck |
| --- | --- | --- | --- |
| GET | `/api/bonus` | nein | Bonus-Konfiguration lesen und abgelaufene Boni deaktivieren. |
| PUT | `/api/bonus` | Bearer Token | Bonus-Konfiguration aktualisieren. |

Body-Struktur:

```json
{
  "forAll": {
    "aktiv": true,
    "rabattmenge": 50,
    "zeitlimit": 24
  },
  "forFriend": {
    "aktiv": false,
    "rabattmenge": 25,
    "zeitlimit": 24
  }
}
```

`expiresAt` wird vom Mongoose `pre("save")` Hook aus `zeitlimit` berechnet.

## Oeffnungszeiten

| Methode | Pfad | Auth | Zweck |
| --- | --- | --- | --- |
| GET | `/api/oeffnungszeiten` | nein | Oeffnungszeiten lesen. |
| PUT | `/api/oeffnungszeiten` | Bearer Token | Wochentage aktualisieren. |

Jeder Wochentag hat:

```json
{
  "aktiv": true,
  "startzeit": "08:00",
  "endzeit": "18:00"
}
```

Zeitfelder werden im Format `HH:MM` validiert.

## Registrierungen

| Methode | Pfad | Auth | Zweck |
| --- | --- | --- | --- |
| POST | `/api/registrations` | nein | Anmeldung vor EmailJS sicher in MongoDB speichern. |
| PATCH | `/api/registrations/:id/email-status` | `clientUpdateToken` | EmailJS-Status fuer genau diese Anmeldung nachtragen. |
| GET | `/api/registrations` | Bearer Token | Alle Registrierungen fuer Admin abrufen. |
| GET | `/api/registrations/:id` | Bearer Token | Einzelne Registrierung fuer Admin abrufen. |

POST-Body entspricht der Formular-/Email-Payload, inklusive:

- `fahrzeugTyp`
- `spezifischeKlasse`
- `vorname`
- `nachname`
- `hatFuehrerschein`
- `fuehrerscheinTyp`
- `getriebe`
- `pruefung`
- `kursart`
- `geburtsdatum`
- `geburtsstadt`
- `telefon`
- `email`
- `adresse`
- `datenschutz`
- `isFriendDiscount`
- `friendName`
- `rabatt`
- `freundeRabatt`
- `nameVonFreund`

Der Server setzt initial `emailStatus: "pending"` und gibt `registration.id` sowie einen `clientUpdateToken` zurueck. Dieser Token darf nur den Emailstatus derselben Anmeldung aktualisieren, aber keine Daten lesen.

PATCH-Body fuer Emailstatus:

```json
{
  "clientUpdateToken": "token-aus-post-response",
  "emailStatus": "mocked",
  "emailError": ""
}
```

Erlaubte Werte fuer `emailStatus`: `sent`, `failed`, `mocked`.
