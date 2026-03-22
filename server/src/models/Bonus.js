const mongoose = require("mongoose");

const bonusSchema = new mongoose.Schema(
  {
    forAll: {
      aktiv: {
        type: Boolean,
        default: false,
      },
      rabattmenge: {
        type: Number,
        min: 0,
        default: 0,
      },
      zeitlimit: {
        type: Number,
        min: 0,
        default: 0, // in Stunden
      },
      expiresAt: {
        type: Date,
        default: null, // Wird automatisch berechnet
      },
    },
    forFriend: {
      aktiv: {
        type: Boolean,
        default: false,
      },
      rabattmenge: {
        type: Number,
        min: 0,
        default: 0,
      },
      zeitlimit: {
        type: Number,
        min: 0,
        default: 0, // in Stunden
      },
      expiresAt: {
        type: Date,
        default: null,
      },
    },
  },
  {
    timestamps: true,
  }
);

// Middleware um expiresAt zu berechnen
bonusSchema.pre("save", function (next) {
  const now = new Date();

  // forAll expiresAt berechnen
  if (this.forAll.aktiv && this.forAll.zeitlimit > 0) {
    this.forAll.expiresAt = new Date(
      now.getTime() + this.forAll.zeitlimit * 60 * 60 * 1000
    );
  } else {
    this.forAll.expiresAt = null;
  }

  // forFriend expiresAt berechnen
  if (this.forFriend.aktiv && this.forFriend.zeitlimit > 0) {
    this.forFriend.expiresAt = new Date(
      now.getTime() + this.forFriend.zeitlimit * 60 * 60 * 1000
    );
  } else {
    this.forFriend.expiresAt = null;
  }

  next();
});

// Method um abgelaufene Boni zu deaktivieren
bonusSchema.methods.checkAndDeactivateExpired = function () {
  const now = new Date();
  let changed = false;

  if (
    this.forAll.aktiv &&
    this.forAll.expiresAt &&
    now > this.forAll.expiresAt
  ) {
    this.forAll.aktiv = false;
    this.forAll.expiresAt = null;
    changed = true;
  }

  if (
    this.forFriend.aktiv &&
    this.forFriend.expiresAt &&
    now > this.forFriend.expiresAt
  ) {
    this.forFriend.aktiv = false;
    this.forFriend.expiresAt = null;
    changed = true;
  }

  return changed;
};

// Static method to get or create default data
bonusSchema.statics.getOrCreateDefault = async function () {
  let bonus = await this.findOne();
  if (!bonus) {
    bonus = await this.create({});
  }

  // Prüfe auf abgelaufene Boni
  const changed = bonus.checkAndDeactivateExpired();
  if (changed) {
    await bonus.save();
  }

  return bonus;
};

module.exports = mongoose.model("Bonus", bonusSchema);
