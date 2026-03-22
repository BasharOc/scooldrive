const mongoose = require("mongoose");

const oeffnungszeitenSchema = new mongoose.Schema(
  {
    montag: {
      aktiv: {
        type: Boolean,
        default: true,
      },
      startzeit: {
        type: String,
        default: "08:00",
      },
      endzeit: {
        type: String,
        default: "18:00",
      },
    },
    dienstag: {
      aktiv: {
        type: Boolean,
        default: true,
      },
      startzeit: {
        type: String,
        default: "08:00",
      },
      endzeit: {
        type: String,
        default: "18:00",
      },
    },
    mittwoch: {
      aktiv: {
        type: Boolean,
        default: true,
      },
      startzeit: {
        type: String,
        default: "08:00",
      },
      endzeit: {
        type: String,
        default: "18:00",
      },
    },
    donnerstag: {
      aktiv: {
        type: Boolean,
        default: true,
      },
      startzeit: {
        type: String,
        default: "08:00",
      },
      endzeit: {
        type: String,
        default: "18:00",
      },
    },
    freitag: {
      aktiv: {
        type: Boolean,
        default: true,
      },
      startzeit: {
        type: String,
        default: "08:00",
      },
      endzeit: {
        type: String,
        default: "18:00",
      },
    },
    samstag: {
      aktiv: {
        type: Boolean,
        default: false,
      },
      startzeit: {
        type: String,
        default: "09:00",
      },
      endzeit: {
        type: String,
        default: "14:00",
      },
    },
    sonntag: {
      aktiv: {
        type: Boolean,
        default: false,
      },
      startzeit: {
        type: String,
        default: "09:00",
      },
      endzeit: {
        type: String,
        default: "14:00",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Static method to get or create default data
oeffnungszeitenSchema.statics.getOrCreateDefault = async function () {
  let oeffnungszeiten = await this.findOne();

  if (!oeffnungszeiten) {
    oeffnungszeiten = await this.create({});
  }

  return oeffnungszeiten;
};

module.exports = mongoose.model("Oeffnungszeiten", oeffnungszeitenSchema);
