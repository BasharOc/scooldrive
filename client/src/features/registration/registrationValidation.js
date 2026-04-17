export function validateRegistrationStep(currentStep, formData, langContent) {
  const errors = {};

  switch (currentStep) {
    case 1:
      if (!formData.fahrzeugTyp) {
        errors.fahrzeugTyp = langContent.steps.step1.error;
      }
      break;

    case 2:
      if (!formData.vorname.trim()) {
        errors.vorname = langContent.steps.step2.error.vorname;
      }
      if (!formData.nachname.trim()) {
        errors.nachname = langContent.steps.step2.error.nachname;
      }
      break;

    case 3.5:
      if (!formData.spezifischeKlasse) {
        errors.spezifischeKlasse = langContent.steps.step3_5.error;
      }
      break;

    case 4:
      if (!formData.getriebe) {
        errors.getriebe = langContent.steps.step4.error;
      }
      break;

    case 5:
      if (!formData.pruefung) {
        errors.pruefung = langContent.steps.step5.error;
      }
      break;

    case 6:
      if (!formData.kursart) {
        errors.kursart = langContent.steps.step6.error;
      }
      break;

    case 8:
      if (!formData.vorname.trim()) {
        errors.vorname = langContent.steps.step8.error.vorname;
      }
      if (!formData.nachname.trim()) {
        errors.nachname = langContent.steps.step8.error.nachname;
      }
      if (!formData.geburtsdatum) {
        errors.geburtsdatum = langContent.steps.step8.error.geburtsdatum;
      }
      if (!formData.geburtsstadt.trim()) {
        errors.geburtsstadt = langContent.steps.step8.error.geburtsstadt;
      }
      if (!formData.telefon.trim()) {
        errors.telefon = langContent.steps.step8.error.telefon;
      }
      if (!formData.email.trim()) {
        errors.email = langContent.steps.step8.error.email;
      }
      if (!formData.adresse.trim()) {
        errors.adresse = langContent.steps.step8.error.adresse;
      }
      if (!formData.datenschutz) {
        errors.datenschutz = langContent.steps.step8.error.datenschutz;
      }
      break;

    default:
      break;
  }

  return errors;
}

