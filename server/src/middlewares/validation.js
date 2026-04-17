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

// Registration Validation
const validateRegistration = [
  body("fahrzeugTyp")
    .isIn(["auto", "motorrad", "auto-anhaenger"])
    .withMessage("fahrzeugTyp ist ungueltig"),
  body("spezifischeKlasse")
    .optional({ checkFalsy: true })
    .isString()
    .trim()
    .isLength({ max: 100 })
    .withMessage("spezifischeKlasse darf maximal 100 Zeichen lang sein"),
  body("vorname")
    .notEmpty()
    .withMessage("vorname ist erforderlich")
    .trim()
    .isLength({ max: 100 })
    .withMessage("vorname darf maximal 100 Zeichen lang sein"),
  body("nachname")
    .notEmpty()
    .withMessage("nachname ist erforderlich")
    .trim()
    .isLength({ max: 100 })
    .withMessage("nachname darf maximal 100 Zeichen lang sein"),
  body("hatFuehrerschein")
    .optional()
    .isBoolean()
    .withMessage("hatFuehrerschein muss ein Boolean sein"),
  body("fuehrerscheinTyp")
    .optional({ checkFalsy: true })
    .isString()
    .trim()
    .isLength({ max: 150 })
    .withMessage("fuehrerscheinTyp darf maximal 150 Zeichen lang sein"),
  body("getriebe")
    .optional({ checkFalsy: true })
    .isString()
    .trim()
    .isLength({ max: 100 })
    .withMessage("getriebe darf maximal 100 Zeichen lang sein"),
  body("pruefung")
    .optional({ checkFalsy: true })
    .isString()
    .trim()
    .isLength({ max: 100 })
    .withMessage("pruefung darf maximal 100 Zeichen lang sein"),
  body("kursart")
    .optional({ checkFalsy: true })
    .isString()
    .trim()
    .isLength({ max: 100 })
    .withMessage("kursart darf maximal 100 Zeichen lang sein"),
  body("geburtsdatum")
    .isISO8601()
    .withMessage("geburtsdatum muss ein gueltiges Datum sein"),
  body("geburtsstadt")
    .notEmpty()
    .withMessage("geburtsstadt ist erforderlich")
    .trim()
    .isLength({ max: 150 })
    .withMessage("geburtsstadt darf maximal 150 Zeichen lang sein"),
  body("telefon")
    .notEmpty()
    .withMessage("telefon ist erforderlich")
    .trim()
    .isLength({ max: 60 })
    .withMessage("telefon darf maximal 60 Zeichen lang sein"),
  body("email")
    .isEmail()
    .withMessage("email muss gueltig sein")
    .normalizeEmail()
    .isLength({ max: 254 })
    .withMessage("email darf maximal 254 Zeichen lang sein"),
  body("adresse")
    .notEmpty()
    .withMessage("adresse ist erforderlich")
    .trim()
    .isLength({ max: 500 })
    .withMessage("adresse darf maximal 500 Zeichen lang sein"),
  body("datenschutz")
    .isBoolean()
    .withMessage("datenschutz muss ein Boolean sein")
    .custom((value) => value === true || value === "true")
    .withMessage("datenschutz muss akzeptiert werden"),
  body("isFriendDiscount")
    .optional()
    .isBoolean()
    .withMessage("isFriendDiscount muss ein Boolean sein"),
  body("friendName")
    .optional({ checkFalsy: true })
    .isString()
    .trim()
    .isLength({ max: 150 })
    .withMessage("friendName darf maximal 150 Zeichen lang sein"),
  body("rabatt")
    .optional({ checkFalsy: true })
    .isString()
    .trim()
    .isLength({ max: 300 })
    .withMessage("rabatt darf maximal 300 Zeichen lang sein"),
  body("freundeRabatt")
    .optional({ checkFalsy: true })
    .isString()
    .trim()
    .isLength({ max: 300 })
    .withMessage("freundeRabatt darf maximal 300 Zeichen lang sein"),
  body("nameVonFreund")
    .optional({ checkFalsy: true })
    .isString()
    .trim()
    .isLength({ max: 300 })
    .withMessage("nameVonFreund darf maximal 300 Zeichen lang sein"),
  handleValidationErrors,
];

const validateRegistrationEmailStatus = [
  body("clientUpdateToken")
    .notEmpty()
    .withMessage("clientUpdateToken ist erforderlich")
    .isLength({ min: 32, max: 128 })
    .withMessage("clientUpdateToken ist ungueltig"),
  body("emailStatus")
    .isIn(["sent", "failed", "mocked"])
    .withMessage("emailStatus ist ungueltig"),
  body("emailError")
    .optional({ checkFalsy: true })
    .isString()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("emailError darf maximal 1000 Zeichen lang sein"),
  handleValidationErrors,
];

module.exports = {
  validateLogin,
  validateBonus,
  validateEinstellungen,
  validateOeffnungszeiten,
  validatePreise,
  validateTermine,
  validateRegistration,
  validateRegistrationEmailStatus,
  handleValidationErrors,
};
