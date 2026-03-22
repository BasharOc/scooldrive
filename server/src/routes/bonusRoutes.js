const express = require("express");
const router = express.Router();
const { getBonus, updateBonus } = require("../controllers/bonusController");
const { validateBonus } = require("../middlewares/validation");
const authenticate = require("../middlewares/auth");

// GET /api/bonus - Bonus-Einstellungen abrufen (öffentlich)
router.get("/", getBonus);

// PUT /api/bonus - Bonus-Einstellungen ersetzen (authentifiziert)
router.put("/", authenticate, validateBonus, updateBonus);

module.exports = router;
