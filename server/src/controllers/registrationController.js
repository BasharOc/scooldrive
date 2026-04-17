const crypto = require("crypto");
const mongoose = require("mongoose");
const Registration = require("../models/Registration");

const createClientUpdateToken = () => crypto.randomBytes(32).toString("hex");

const createRegistration = async (req, res) => {
  try {
    const registration = await Registration.create({
      ...req.body,
      emailStatus: "pending",
      emailError: "",
      source: "website",
      clientUpdateToken: createClientUpdateToken(),
    });

    res.status(201).json({
      success: true,
      message: "Anmeldung gespeichert",
      registration: {
        id: registration._id,
        emailStatus: registration.emailStatus,
        createdAt: registration.createdAt,
      },
      clientUpdateToken: registration.clientUpdateToken,
    });
  } catch (error) {
    console.error("Create registration error:", error);
    res.status(500).json({
      success: false,
      message: "Fehler beim Speichern der Anmeldung",
      error: error.message,
    });
  }
};

const getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find()
      .sort({ createdAt: -1 })
      .limit(500);

    res.json({
      success: true,
      count: registrations.length,
      registrations,
    });
  } catch (error) {
    console.error("Get registrations error:", error);
    res.status(500).json({
      success: false,
      message: "Fehler beim Abrufen der Anmeldungen",
      error: error.message,
    });
  }
};

const getRegistrationById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Ungueltige Anmelde-ID",
      });
    }

    const registration = await Registration.findById(req.params.id);

    if (!registration) {
      return res.status(404).json({
        success: false,
        message: "Anmeldung nicht gefunden",
      });
    }

    res.json({
      success: true,
      registration,
    });
  } catch (error) {
    console.error("Get registration by id error:", error);
    res.status(500).json({
      success: false,
      message: "Fehler beim Abrufen der Anmeldung",
      error: error.message,
    });
  }
};

const updateRegistrationEmailStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { clientUpdateToken, emailStatus, emailError } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Ungueltige Anmelde-ID",
      });
    }

    const registration = await Registration.findOne({
      _id: id,
      clientUpdateToken,
    }).select("+clientUpdateToken");

    if (!registration) {
      return res.status(404).json({
        success: false,
        message: "Anmeldung nicht gefunden oder Token ungueltig",
      });
    }

    registration.emailStatus = emailStatus;
    registration.emailError = emailError || "";
    await registration.save();

    res.json({
      success: true,
      message: "Email-Status aktualisiert",
      registration: {
        id: registration._id,
        emailStatus: registration.emailStatus,
        emailError: registration.emailError,
        updatedAt: registration.updatedAt,
      },
    });
  } catch (error) {
    console.error("Update registration email status error:", error);
    res.status(500).json({
      success: false,
      message: "Fehler beim Aktualisieren des Email-Status",
      error: error.message,
    });
  }
};

module.exports = {
  createRegistration,
  getRegistrations,
  getRegistrationById,
  updateRegistrationEmailStatus,
};

