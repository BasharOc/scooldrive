const Einstellungen = require("../models/Einstellungen");

// GET /api/einstellungen - Einstellungen abrufen
const getEinstellungen = async (req, res) => {
  try {
    const einstellungen = await Einstellungen.getOrCreateDefault();
    res.json(einstellungen);
  } catch (error) {
    res.status(500).json({
      message: "Fehler beim Abrufen der Einstellungen",
      error: error.message,
    });
  }
};

// PUT /api/einstellungen - Einstellungen ersetzen
const updateEinstellungen = async (req, res) => {
  try {
    const einstellungen = await Einstellungen.getOrCreateDefault();

    // Alle Felder ersetzen
    einstellungen.anmeldungStopp =
      req.body.anmeldungStopp !== undefined
        ? req.body.anmeldungStopp
        : einstellungen.anmeldungStopp;
    einstellungen.begrenztePlaetze =
      req.body.begrenztePlaetze !== undefined
        ? req.body.begrenztePlaetze
        : einstellungen.begrenztePlaetze;
    einstellungen.kontaktOptionen =
      req.body.kontaktOptionen || einstellungen.kontaktOptionen;

    const updatedEinstellungen = await einstellungen.save();
    res.json(updatedEinstellungen);
  } catch (error) {
    res.status(500).json({
      message: "Fehler beim Aktualisieren der Einstellungen",
      error: error.message,
    });
  }
};

module.exports = {
  getEinstellungen,
  updateEinstellungen,
};
