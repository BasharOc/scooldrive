const mongoose = require("mongoose");

const termineSchema = new mongoose.Schema(
  {
    termine: [
      {
        titel: {
          type: String,
          required: true,
          trim: true,
          maxlength: 100,
        },
        datum: {
          type: Date,
          required: true,
        },
        aktiv: {
          type: Boolean,
          default: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Static method to get or create default data
termineSchema.statics.getOrCreateDefault = async function () {
  let termineData = await this.findOne();

  if (!termineData) {
    termineData = await this.create({
      termine: [
        {
          titel: "Theoriekurs",
          datum: new Date("2025-10-27"),
          uhrzeit: "18:00",
          beschreibung: "Grundlagen der Verkehrstheorie",
          maxTeilnehmer: 20,
          aktiv: true,
        },
      ],
    });
  }

  return termineData;
};

module.exports = mongoose.model("Termine", termineSchema);
