const mongoose = require("mongoose");

const einstellungenSchema = new mongoose.Schema(
  {
    anmeldungStopp: {
      type: Boolean,
      default: false,
    },
    begrenztePlaetze: {
      type: Boolean,
      default: false,
    },
    kontaktOptionen: {
      whatsapp: {
        type: Boolean,
        default: true,
      },
      telefon: {
        type: Boolean,
        default: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

// Static method to get or create default data
einstellungenSchema.statics.getOrCreateDefault = async function () {
  let einstellungen = await this.findOne();

  if (!einstellungen) {
    einstellungen = await this.create({});
  }

  return einstellungen;
};

module.exports = mongoose.model("Einstellungen", einstellungenSchema);
