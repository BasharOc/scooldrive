const Bonus = require("../models/Bonus");

// GET /api/bonus - Bonus-Einstellungen abrufen
const getBonus = async (req, res) => {
  try {
    const bonus = await Bonus.getOrCreateDefault();
    res.json(bonus);
  } catch (error) {
    res.status(500).json({
      message: "Fehler beim Abrufen der Bonus-Einstellungen",
      error: error.message,
    });
  }
};

// PUT /api/bonus - Bonus-Einstellungen ersetzen
const updateBonus = async (req, res) => {
  try {
    const bonus = await Bonus.getOrCreateDefault();

    // Alle Felder ersetzen
    bonus.forAll = req.body.forAll || bonus.forAll;
    bonus.forFriend = req.body.forFriend || bonus.forFriend;

    // Das save() wird automatisch die expiresAt Felder berechnen
    const updatedBonus = await bonus.save();

    res.json(updatedBonus);
  } catch (error) {
    res.status(500).json({
      message: "Fehler beim Aktualisieren der Bonus-Einstellungen",
      error: error.message,
    });
  }
};

module.exports = {
  getBonus,
  updateBonus,
};
