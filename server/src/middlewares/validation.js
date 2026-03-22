const Joi = require("joi");
const { body, validationResult } = require("express-validator");

// Login Validation
const validateLogin = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }
  next();
};

// Validation Error Handler
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Validierungsfehler",
      errors: errors.array(),
    });
  }
  next();
};

// Bonus Validation
const validateBonus = [
  body("forAll.aktiv")
    .optional()
    .isBoolean()
    .withMessage("forAll.aktiv muss ein Boolean sein"),
  body("forAll.rabattmenge")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("forAll.rabattmenge muss eine positive Zahl sein"),
  body("forAll.zeitlimit")
    .optional()
    .isInt({ min: 0 })
    .withMessage("forAll.zeitlimit muss eine positive Ganzzahl sein"),
  body("forFriend.aktiv")
    .optional()
    .isBoolean()
    .withMessage("forFriend.aktiv muss ein Boolean sein"),
  body("forFriend.rabattmenge")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("forFriend.rabattmenge muss eine positive Zahl sein"),
  body("forFriend.zeitlimit")
    .optional()
    .isInt({ min: 0 })
    .withMessage("forFriend.zeitlimit muss eine positive Ganzzahl sein"),
  handleValidationErrors,
];

// Einstellungen Validation
const validateEinstellungen = [
  body("anmeldungStopp")
    .optional()
    .isBoolean()
    .withMessage("anmeldungStopp muss ein Boolean sein"),
  body("begrenztePlaetze")
    .optional()
    .isBoolean()
    .withMessage("begrenztePlaetze muss ein Boolean sein"),
  body("kontaktOptionen.whatsapp")
    .optional()
    .isBoolean()
    .withMessage("kontaktOptionen.whatsapp muss ein Boolean sein"),
  body("kontaktOptionen.telefon")
    .optional()
    .isBoolean()
    .withMessage("kontaktOptionen.telefon muss ein Boolean sein"),
  handleValidationErrors,
];

// Öffnungszeiten Validation
const validateOeffnungszeiten = [
  // Validierung für jeden Wochentag
  ...[
    "montag",
    "dienstag",
    "mittwoch",
    "donnerstag",
    "freitag",
    "samstag",
    "sonntag",
  ].flatMap((tag) => [
    body(`${tag}.aktiv`)
      .optional()
      .isBoolean()
      .withMessage(`${tag}.aktiv muss ein Boolean sein`),
    body(`${tag}.startzeit`)
      .optional()
      .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
      .withMessage(`${tag}.startzeit muss im Format HH:MM sein`),
    body(`${tag}.endzeit`)
      .optional()
      .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
      .withMessage(`${tag}.endzeit muss im Format HH:MM sein`),
  ]),
  handleValidationErrors,
];

// Preise Validation
const validatePreise = [
  body("grundgebuehrTheoriekurs")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("grundgebuehrTheoriekurs muss eine positive Zahl sein"),
  body("lernapp")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("lernapp muss eine positive Zahl sein"),
  body("uebungsstundePKW")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("uebungsstundePKW muss eine positive Zahl sein"),
  body("sonderfahrtenPKW")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("sonderfahrtenPKW muss eine positive Zahl sein"),
  body("theorieprueung")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("theorieprueung muss eine positive Zahl sein"),
  body("praxispruefung")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("praxispruefung muss eine positive Zahl sein"),
  body("uebungsstundeMotorrad")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("uebungsstundeMotorrad muss eine positive Zahl sein"),
  body("sonderfahrtenMotorrad")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("sonderfahrtenMotorrad muss eine positive Zahl sein"),
  body("sonderfahrtenPKWAnhaenger")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("sonderfahrtenPKWAnhaenger muss eine positive Zahl sein"),
  body("uebungsstundePKWAnhaenger")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("uebungsstundePKWAnhaenger muss eine positive Zahl sein"),
  body("fuehrerscheinantrag")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("fuehrerscheinantrag muss eine positive Zahl sein"),
  body("sehtest")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("sehtest muss eine positive Zahl sein"),
  body("ersteHilfeKurs")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("ersteHilfeKurs muss eine positive Zahl sein"),
  body("passbild")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("passbild muss eine positive Zahl sein"),
  body("anhaengerKlasseB96")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("anhaengerKlasseB96 muss eine positive Zahl sein"),
  body("leichtkraftradB196")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("leichtkraftradB196 muss eine positive Zahl sein"),
  body("motorradKlasseAGrundgebuehr")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("motorradKlasseAGrundgebuehr muss eine positive Zahl sein"),
  body("intensivkursPreis")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("intensivkursPreis muss eine positive Zahl sein"),
  handleValidationErrors,
];

// Termine Validation
const validateTermine = [
  body("titel")
    .notEmpty()
    .withMessage("titel ist erforderlich")
    .isLength({ max: 100 })
    .withMessage("titel darf maximal 100 Zeichen lang sein"),
  body("datum").isISO8601().withMessage("datum muss ein gültiges Datum sein"),
  body("aktiv")
    .optional()
    .isBoolean()
    .withMessage("aktiv muss ein Boolean sein"),
  handleValidationErrors,
];

module.exports = {
  validateLogin,
  validateBonus,
  validateEinstellungen,
  validateOeffnungszeiten,
  validatePreise,
  validateTermine,
  handleValidationErrors,
};
