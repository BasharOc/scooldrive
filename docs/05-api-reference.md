# API-Referenz

## Basis-URLs

Lokal:

```text
http://localhost:3001/api
```

Produktion:

```text
https://server.scooldrive.com/api
```

Auf der Hauptdomain proxyt Nginx:

- `/api/admin/*` an Next.js.
- `/api/*` an Express.

## Express Health

| Methode | Pfad | Auth | Zweck |
| --- | --- | --- | --- |
| GET | `/health` | nein | Serverstatus, Timestamp, Uptime. |

## Express Auth

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

Hinweis: Der Frontend-Typ kennt zusaetzlich `kontaktOptionen.whatsappNummer`, das aktuelle Mongoose-Schema speichert dieses Feld nicht explizit.

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

## Registrierungen

| Methode | Pfad | Auth | Zweck |
| --- | --- | --- | --- |
| POST | `/api/registrations` | nein | Anmeldung vor EmailJS sicher in MongoDB speichern. |
| PATCH | `/api/registrations/:id/email-status` | `clientUpdateToken` im Body | EmailJS-Status fuer genau diese Anmeldung nachtragen. |
| GET | `/api/registrations` | Bearer Token | Alle Registrierungen fuer Admin abrufen. |
| GET | `/api/registrations/:id` | Bearer Token | Einzelne Registrierung fuer Admin abrufen. |

Der Server setzt initial `emailStatus: "pending"` und gibt `registration.id` sowie `clientUpdateToken` zurueck. Erlaubte Werte fuer den spaeteren Emailstatus sind `sent`, `failed`, `mocked`.

## Next Admin-Proxy

Diese Routen laufen in `client-next/app/api/admin/*` und sprechen intern Express an.

| Methode | Pfad | Zweck |
| --- | --- | --- |
| POST | `/api/admin/login` | Login, setzt HTTP-only Cookie `scooldrive_admin_token`. |
| POST | `/api/admin/logout` | Logout im Express-Backend und Cookie loeschen. |
| GET | `/api/admin/verify` | Admin-Session pruefen. |
| GET/PUT | `/api/admin/preise` | Preise lesen/speichern. |
| GET/PUT | `/api/admin/termine` | Termin lesen/speichern. |
| GET/PUT | `/api/admin/einstellungen` | Einstellungen lesen/speichern. |
| GET/PUT | `/api/admin/bonus` | Bonus lesen/speichern. |
| GET/PUT | `/api/admin/oeffnungszeiten` | Oeffnungszeiten lesen/speichern. |
| GET | `/api/admin/registrations` | Registrierungen lesen. |
