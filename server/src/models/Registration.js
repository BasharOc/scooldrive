const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    fahrzeugTyp: {
      type: String,
      required: true,
      enum: ["auto", "motorrad", "auto-anhaenger"],
    },
    spezifischeKlasse: {
      type: String,
      trim: true,
      default: "",
    },
    vorname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    nachname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    hatFuehrerschein: {
      type: Boolean,
      default: false,
    },
    fuehrerscheinTyp: {
      type: String,
      trim: true,
      default: "",
    },
    getriebe: {
      type: String,
      trim: true,
      default: "",
    },
    pruefung: {
      type: String,
      trim: true,
      default: "",
    },
    kursart: {
      type: String,
      trim: true,
      default: "",
    },
    geburtsdatum: {
      type: Date,
      required: true,
    },
    geburtsstadt: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },
    telefon: {
      type: String,
      required: true,
      trim: true,
      maxlength: 60,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },
    adresse: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },
    datenschutz: {
      type: Boolean,
      required: true,
    },
    isFriendDiscount: {
      type: Boolean,
      default: false,
    },
    friendName: {
      type: String,
      trim: true,
      default: "",
      maxlength: 150,
    },
    rabatt: {
      type: String,
      trim: true,
      default: "",
      maxlength: 300,
    },
    freundeRabatt: {
      type: String,
      trim: true,
      default: "",
      maxlength: 300,
    },
    nameVonFreund: {
      type: String,
      trim: true,
      default: "",
      maxlength: 300,
    },
    emailStatus: {
      type: String,
      enum: ["pending", "sent", "failed", "mocked"],
      default: "pending",
    },
    emailError: {
      type: String,
      trim: true,
      default: "",
      maxlength: 1000,
    },
    source: {
      type: String,
      default: "website",
      trim: true,
      maxlength: 50,
    },
    clientUpdateToken: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

registrationSchema.index({ createdAt: -1 });
registrationSchema.index({ emailStatus: 1, createdAt: -1 });
registrationSchema.index({ email: 1, createdAt: -1 });

module.exports = mongoose.model("Registration", registrationSchema);

