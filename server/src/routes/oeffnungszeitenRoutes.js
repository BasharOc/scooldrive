const express = require("express");
const router = express.Router();
const {
  getOeffnungszeiten,
  updateOeffnungszeiten,
} = require("../controllers/oeffnungszeitenController");
const { validateOeffnungszeiten } = require("../middlewares/validation");
const authenticate = require("../middlewares/auth");

// GET /api/oeffnungszeiten - Öffnungszeiten abrufen (öffentlich)
router.get("/", getOeffnungszeiten);

// PUT /api/oeffnungszeiten - Öffnungszeiten ersetzen (authentifiziert)
router.put("/", authenticate, validateOeffnungszeiten, updateOeffnungszeiten);

module.exports = router;
