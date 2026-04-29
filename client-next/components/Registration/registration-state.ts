import type {
  RegistrationAction,
  RegistrationFormData,
  RegistrationLocaleContent,
  RegistrationState,
} from "@/components/Registration/types";

export const TOTAL_REGISTRATION_STEPS = 10;

export const initialRegistrationFormData: RegistrationFormData = {
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

export const initialRegistrationState: RegistrationState = {
  currentStep: 1,
  formData: initialRegistrationFormData,
  errors: {},
  isSubmitted: false,
  isFriendDiscount: false,
  friendName: "",
};

export function registrationReducer(
  state: RegistrationState,
  action: RegistrationAction
): RegistrationState {
  switch (action.type) {
    case "SET_STEP":
      return {
        ...state,
        currentStep: action.payload,
      };
    case "SET_FORM_DATA":
      return {
        ...state,
        formData:
          typeof action.payload === "function"
            ? action.payload(state.formData)
            : action.payload,
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload,
      };
    case "SET_FRIEND_DISCOUNT":
      return {
        ...state,
        isFriendDiscount: action.payload,
      };
    case "SET_FRIEND_NAME":
      return {
        ...state,
        friendName: action.payload,
      };
    case "MARK_FRIEND_SUBMITTED":
      return {
        ...state,
        isSubmitted: true,
      };
    default:
      return state;
  }
}

export function getPreviousRegistrationStep(
  currentStep: number,
  formData: RegistrationFormData
) {
  if (currentStep === 3.5) {
    return 3;
  }

  if (currentStep === 6 && formData.fahrzeugTyp === "motorrad") {
    return 3.5;
  }

  if (currentStep === 4 && formData.fahrzeugTyp === "auto-anhaenger") {
    return 3.5;
  }

  return currentStep - 1;
}

export function getNextRegistrationStep(
  currentStep: number,
  formData: RegistrationFormData
) {
  if (currentStep === 2 && formData.fahrzeugTyp === "motorrad") {
    return 3.5;
  }

  if (currentStep === 2 && formData.fahrzeugTyp === "auto") {
    return 4;
  }

  if (currentStep === 2 && formData.fahrzeugTyp === "auto-anhaenger") {
    return 3;
  }

  if (currentStep === 3 && formData.fahrzeugTyp === "auto-anhaenger") {
    return 3.5;
  }

  if (currentStep === 3.5) {
    return formData.fahrzeugTyp === "motorrad" ? 6 : 4;
  }

  return currentStep + 1;
}

export function getSpecificClassOptions(
  formData: RegistrationFormData,
  content: RegistrationLocaleContent
) {
  return content.steps.step3_5.options.filter((option) => {
    if (formData.fahrzeugTyp === "auto-anhaenger") {
      return option.key === "be" || option.key === "b96";
    }

    if (formData.fahrzeugTyp === "motorrad") {
      return (
        option.key === "am" ||
        option.key === "a1" ||
        option.key === "a2" ||
        option.key === "a"
      );
    }

    return false;
  });
}

export function validateRegistrationStep(
  currentStep: number,
  formData: RegistrationFormData,
  content: RegistrationLocaleContent
) {
  const errors: RegistrationState["errors"] = {};

  switch (currentStep) {
    case 1:
      if (!formData.fahrzeugTyp) {
        errors.fahrzeugTyp = content.steps.step1.error;
      }
      break;
    case 2:
      if (!formData.vorname.trim()) {
        errors.vorname = content.steps.step2.error.vorname;
      }
      if (!formData.nachname.trim()) {
        errors.nachname = content.steps.step2.error.nachname;
      }
      break;
    case 3.5:
      if (!formData.spezifischeKlasse) {
        errors.spezifischeKlasse = content.steps.step3_5.error;
      }
      break;
    case 4:
      if (!formData.getriebe) {
        errors.getriebe = content.steps.step4.error;
      }
      break;
    case 5:
      if (!formData.pruefung) {
        errors.pruefung = content.steps.step5.error;
      }
      break;
    case 6:
      if (!formData.kursart) {
        errors.kursart = content.steps.step6.error;
      }
      break;
    case 8:
      if (!formData.vorname.trim()) {
        errors.vorname = content.steps.step8.error.vorname;
      }
      if (!formData.nachname.trim()) {
        errors.nachname = content.steps.step8.error.nachname;
      }
      if (!formData.geburtsdatum) {
        errors.geburtsdatum = content.steps.step8.error.geburtsdatum;
      }
      if (!formData.geburtsstadt.trim()) {
        errors.geburtsstadt = content.steps.step8.error.geburtsstadt;
      }
      if (!formData.telefon.trim()) {
        errors.telefon = content.steps.step8.error.telefon;
      }
      if (!formData.email.trim()) {
        errors.email = content.steps.step8.error.email;
      }
      if (!formData.adresse.trim()) {
        errors.adresse = content.steps.step8.error.adresse;
      }
      if (!formData.datenschutz) {
        errors.datenschutz = content.steps.step8.error.datenschutz;
      }
      break;
    default:
      break;
  }

  return errors;
}
