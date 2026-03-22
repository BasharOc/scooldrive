const express = require("express");
const router = express.Router();
const {
  getEinstellungen,
  updateEinstellungen,
} = require("../controllers/einstellungenController");
const { validateEinstellungen } = require("../middlewares/validation");
const authenticate = require("../middlewares/auth");

// GET /api/einstellungen - Einstellungen abrufen (öffentlich)
router.get("/", getEinstellungen);

// PUT /api/einstellungen - Einstellungen ersetzen (authentifiziert)
router.put("/", authenticate, validateEinstellungen, updateEinstellungen);

module.exports = router;
