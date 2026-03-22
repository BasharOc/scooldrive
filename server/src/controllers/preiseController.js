const Preise = require("../models/Preise");

// GET /api/preise - Preise abrufen
const getPreise = async (req, res) => {
  try {
    const preise = await Preise.getOrCreateDefault();
    res.json(preise);
  } catch (error) {
    res.status(500).json({
      message: "Fehler beim Abrufen der Preise",
      error: error.message,
    });
  }
};

// PUT /api/preise - Preise ersetzen
const updatePreise = async (req, res) => {
  try {
    const preise = await Preise.getOrCreateDefault();

    // Alle Preisfelder ersetzen
    const preisFelder = [
      "grundgebuehrTheoriekurs",
      "lernapp",
      "uebungsstundePKW",
      "sonderfahrtenPKW",
      "theorieprueung",
      "praxispruefung",
      "uebungsstundeMotorrad",
      "sonderfahrtenMotorrad",
      "sonderfahrtenPKWAnhaenger",
      "uebungsstundePKWAnhaenger",
      "fuehrerscheinantrag",
      "sehtest",
      "ersteHilfeKurs",
      "passbild",
      "anhaengerKlasseB96",
      "leichtkraftradB196",
      "motorradKlasseAGrundgebuehr",
      "intensivkursPreis",
    ];

    preisFelder.forEach((feld) => {
      if (req.body[feld] !== undefined) {
        preise[feld] = req.body[feld];
      }
    });

    const updatedPreise = await preise.save();
    res.json(updatedPreise);
  } catch (error) {
    res.status(500).json({
      message: "Fehler beim Aktualisieren der Preise",
      error: error.message,
    });
  }
};

module.exports = {
  getPreise,
  updatePreise,
};
