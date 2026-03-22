const express = require("express");
const router = express.Router();
const {
  getTermine,
  updateTermine,
} = require("../controllers/termineController");
const { validateTermine } = require("../middlewares/validation");
const authenticate = require("../middlewares/auth");

// GET /api/termine - Termine abrufen (öffentlich)
router.get("/", getTermine);

// PUT /api/termine - Termine ersetzen (authentifiziert)
router.put("/", authenticate, validateTermine, updateTermine);

module.exports = router;
