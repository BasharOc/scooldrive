const Termine = require("../models/Termine");

// GET /api/termine - Termine abrufen
const getTermine = async (req, res) => {
  try {
    const termineData = await Termine.getOrCreateDefault();
    res.json(termineData);
  } catch (error) {
    res.status(500).json({
      message: "Fehler beim Abrufen der Termine",
      error: error.message,
    });
  }
};

// PUT /api/termine - Termine ersetzen
const updateTermine = async (req, res) => {
  try {
    const termineData = await Termine.getOrCreateDefault();

    // Array leeren und neues Objekt hinzufügen
    termineData.termine = [];

    if (req.body && req.body.titel) {
      termineData.termine.push(req.body);
    }

    const updatedTermine = await termineData.save();
    res.json(updatedTermine);
  } catch (error) {
    res.status(500).json({
      message: "Fehler beim Aktualisieren der Termine",
      error: error.message,
    });
  }
};

module.exports = {
  getTermine,
  updateTermine,
};
