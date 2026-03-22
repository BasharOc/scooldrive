const mongoose = require("mongoose");

const preiseSchema = new mongoose.Schema(
  {
    grundgebuehrTheoriekurs: {
      type: Number,
      required: true,
      min: 0,
      default: 400,
    },
    lernapp: {
      type: Number,
      required: true,
      min: 0,
      default: 85,
    },
    uebungsstundePKW: {
      type: Number,
      required: true,
      min: 0,
      default: 70,
    },
    sonderfahrtenPKW: {
      type: Number,
      required: true,
      min: 0,
      default: 80,
    },
    theorieprueung: {
      type: Number,
      required: true,
      min: 0,
      default: 50,
    },
    praxispruefung: {
      type: Number,
      required: true,
      min: 0,
      default: 200,
    },
    uebungsstundeMotorrad: {
      type: Number,
      required: true,
      min: 0,
      default: 80,
    },
    sonderfahrtenMotorrad: {
      type: Number,
      required: true,
      min: 0,
      default: 90,
    },
    sonderfahrtenPKWAnhaenger: {
      type: Number,
      required: true,
      min: 0,
      default: 95,
    },
    uebungsstundePKWAnhaenger: {
      type: Number,
      required: true,
      min: 0,
      default: 85,
    },
    fuehrerscheinantrag: {
      type: Number,
      required: true,
      min: 0,
      default: 45.6,
    },
    sehtest: {
      type: Number,
      required: true,
      min: 0,
      default: 6.43,
    },
    ersteHilfeKurs: {
      type: Number,
      required: true,
      min: 0,
      default: 50,
    },
    passbild: {
      type: Number,
      required: true,
      min: 0,
      default: 15,
    },
    anhaengerKlasseB96: {
      type: Number,
      required: true,
      min: 0,
      default: 850,
    },
    leichtkraftradB196: {
      type: Number,
      required: true,
      min: 0,
      default: 950,
    },
    motorradKlasseAGrundgebuehr: {
      type: Number,
      required: true,
      min: 0,
      default: 560,
    },
    intensivkursPreis: {
      type: Number,
      required: true,
      min: 0,
      default: 2499,
    },
  },
  {
    timestamps: true,
  }
);

// Static method to get or create default data
preiseSchema.statics.getOrCreateDefault = async function () {
  let preise = await this.findOne();

  if (!preise) {
    preise = await this.create({});
  }

  return preise;
};

module.exports = mongoose.model("Preise", preiseSchema);
