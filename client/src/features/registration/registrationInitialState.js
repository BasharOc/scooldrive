export const TOTAL_REGISTRATION_STEPS = 10;

export const initialRegistrationFormData = {
  fahrzeugTyp: "",
  vorname: "",
  nachname: "",
  hatFuehrerschein: false,
  spezifischeKlasse: "",
  fuehrerscheinTyp: "",
  getriebe: "",
  pruefung: "",
  kursart: "",
  geburtsdatum: "",
  geburtsstadt: "",
  telefon: "",
  email: "",
  adresse: "",
  datenschutz: false,
};

export const initialRegistrationState = {
  currentStep: 1,
  formData: initialRegistrationFormData,
  errors: {},
  isSubmitted: false,
  isFriendDiscount: false,
  friendName: "",
};

