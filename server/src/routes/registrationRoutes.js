const express = require("express");
const router = express.Router();
const {
  createRegistration,
  getRegistrations,
  getRegistrationById,
  updateRegistrationEmailStatus,
} = require("../controllers/registrationController");
const authenticate = require("../middlewares/auth");
const {
  validateRegistration,
  validateRegistrationEmailStatus,
} = require("../middlewares/validation");

// POST /api/registrations - Anmeldung speichern (oeffentlich)
router.post("/", validateRegistration, createRegistration);

// PATCH /api/registrations/:id/email-status - EmailJS-Status nachtragen
router.patch(
  "/:id/email-status",
  validateRegistrationEmailStatus,
  updateRegistrationEmailStatus,
);

// GET /api/registrations - Anmeldungen fuer Admin abrufen
router.get("/", authenticate, getRegistrations);

// GET /api/registrations/:id - Einzelne Anmeldung fuer Admin abrufen
router.get("/:id", authenticate, getRegistrationById);

module.exports = router;

