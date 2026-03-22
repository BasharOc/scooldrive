const Oeffnungszeiten = require("../models/Oeffnungszeiten");

// GET /api/oeffnungszeiten - Öffnungszeiten abrufen
const getOeffnungszeiten = async (req, res) => {
  try {
    const oeffnungszeiten = await Oeffnungszeiten.getOrCreateDefault();
    res.json(oeffnungszeiten);
  } catch (error) {
    res.status(500).json({
      message: "Fehler beim Abrufen der Öffnungszeiten",
      error: error.message,
    });
  }
};

// PUT /api/oeffnungszeiten - Öffnungszeiten ersetzen
const updateOeffnungszeiten = async (req, res) => {
  try {
    const oeffnungszeiten = await Oeffnungszeiten.getOrCreateDefault();

    // Alle Wochentage ersetzen
    const wochentage = [
      "montag",
      "dienstag",
      "mittwoch",
      "donnerstag",
      "freitag",
      "samstag",
      "sonntag",
    ];

    wochentage.forEach((tag) => {
      if (req.body[tag]) {
        oeffnungszeiten[tag] = req.body[tag];
      }
    });

    const updatedOeffnungszeiten = await oeffnungszeiten.save();
    res.json(updatedOeffnungszeiten);
  } catch (error) {
    res.status(500).json({
      message: "Fehler beim Aktualisieren der Öffnungszeiten",
      error: error.message,
    });
  }
};

module.exports = {
  getOeffnungszeiten,
  updateOeffnungszeiten,
};
