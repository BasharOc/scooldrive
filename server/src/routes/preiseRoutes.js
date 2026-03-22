const express = require("express");
const router = express.Router();
const { getPreise, updatePreise } = require("../controllers/preiseController");
const { validatePreise } = require("../middlewares/validation");
const authenticate = require("../middlewares/auth");

// GET /api/preise - Preise abrufen (öffentlich)
router.get("/", getPreise);

// PUT /api/preise - Preise ersetzen (authentifiziert)
router.put("/", authenticate, validatePreise, updatePreise);

module.exports = router;
