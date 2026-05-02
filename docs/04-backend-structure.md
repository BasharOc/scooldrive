# Backend-Struktur

## Stack

- Node.js mit CommonJS.
- Express 4.
- MongoDB ueber Mongoose 8.
- JWT fuer Admin-Auth.
- bcryptjs fuer Passwort-Hashing.
- express-rate-limit.
- Joi und express-validator fuer Validierung.
- dotenv fuer Environment.

## Express App

`server/src/app.js` macht:

1. `.env` laden.
2. Express, CORS und Rate Limiting konfigurieren.
3. MongoDB verbinden.
4. Admin-User initialisieren.
5. JSON und URL-encoded Body Parser aktivieren.
6. Healthcheck bereitstellen.
7. API-Routen mounten.
8. 404-Handler und globalen Error-Handler registrieren.
9. Server auf `PORT` oder `3000` starten.

## Routen-Mounts

| Mount | Router |
| --- | --- |
| `/api/auth` | `server/src/routes/authRoutes.js` |
| `/api/preise` | `server/src/routes/preiseRoutes.js` |
| `/api/termine` | `server/src/routes/termineRoutes.js` |
| `/api/einstellungen` | `server/src/routes/einstellungenRoutes.js` |
| `/api/bonus` | `server/src/routes/bonusRoutes.js` |
| `/api/oeffnungszeiten` | `server/src/routes/oeffnungszeitenRoutes.js` |
| `/api/registrations` | `server/src/routes/registrationRoutes.js` |

`server/src/routes/userRoutes.js` existiert noch, wird aber nicht gemountet und verweist auf ein nicht vorhandenes `User`-Model.

## Controller-Muster

Die Ressourcen `Preise`, `Termine`, `Einstellungen`, `Bonus` und `Oeffnungszeiten` folgen dem gleichen Grundmuster:

- `GET /`: Lade ein existierendes Dokument oder erstelle Default-Daten.
- `PUT /`: Lade Default-Dokument, aktualisiere erlaubte Felder, speichere.

Diese Ressourcen sind als Single-Document-Konfiguration gedacht. `Termine` ist im Modell zwar ein Array, die aktuelle Admin-UI und der Controller behandeln aber praktisch einen aktuellen Termin.

## Middleware

`server/src/middlewares/auth.js`:

- erwartet `Authorization: Bearer <token>`.
- verifiziert JWT mit `JWT_SECRET`.
- laedt Admin per `decoded.id`.
- blockiert inaktive oder fehlende Admins.
- setzt `req.admin`.

`server/src/middlewares/validation.js`:

- `validateLogin` mit Joi.
- ressourcenspezifische Validatoren mit `express-validator`.
- `handleValidationErrors` gibt Status 400 mit Fehlerliste zurueck.

## Fehlerbehandlung

Der globale Error-Handler behandelt:

- Mongoose `ValidationError`.
- Duplicate-Key-Fehler.
- JWT-Fehler.
- `TokenExpiredError`.
- generische Serverfehler.

In Production wird die genaue Fehlermeldung versteckt.
