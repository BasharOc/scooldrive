import type { IconType } from "react-icons";
import type { BonusApiResponse } from "@/lib/remote-data";
import type { Locale } from "@/types/i18n";

export type VehicleType = "auto" | "motorrad" | "auto-anhaenger";
export type SpecificClassKey = "be" | "b96" | "am" | "a1" | "a2" | "a";
export type GearboxChoice = "beide" | "automatik";
export type ExamChoice = "automatik-pruefung" | "schalt-pruefung";
export type CourseChoice = "flexibel" | "praxis-intensiv";

export type RegistrationFormData = {
  fahrzeugTyp: VehicleType | "";
  vorname: string;
  nachname: string;
  hatFuehrerschein: boolean;
  spezifischeKlasse: SpecificClassKey | "";
  fuehrerscheinTyp: string;
  getriebe: GearboxChoice | "";
  pruefung: ExamChoice | "";
  kursart: CourseChoice | "";
  geburtsdatum: string;
  geburtsstadt: string;
  telefon: string;
  email: string;
  adresse: string;
  datenschutz: boolean;
};

export type RegistrationErrors = Partial<Record<keyof RegistrationFormData, string>> & {
  spezifischeKlasse?: string;
};

export type RegistrationState = {
  currentStep: number;
  formData: RegistrationFormData;
  errors: RegistrationErrors;
  isSubmitted: boolean;
  isFriendDiscount: boolean;
  friendName: string;
};

export type RegistrationAction =
  | { type: "SET_STEP"; payload: number }
  | {
      type: "SET_FORM_DATA";
      payload:
        | RegistrationFormData
        | ((previous: RegistrationFormData) => RegistrationFormData);
    }
  | { type: "SET_ERRORS"; payload: RegistrationErrors }
  | { type: "SET_FRIEND_DISCOUNT"; payload: boolean }
  | { type: "SET_FRIEND_NAME"; payload: string }
  | { type: "MARK_FRIEND_SUBMITTED" };

export type RegistrationVehicleOption = {
  key: VehicleType;
  label: string;
  icon: IconType;
};

export type RegistrationExistingLicenseOption = {
  value: string;
  desc: string;
  icon: IconType;
};

export type RegistrationSpecificClassOption = {
  key: SpecificClassKey;
  label: string;
  desc: string;
  weight: string;
  icon: IconType;
};

export type RegistrationIconOption = {
  key: string;
  label: string;
  desc: string;
  icon: IconType;
};

export type RegistrationGearboxOption = {
  key: GearboxChoice;
  label: string;
  desc: string;
  icons: IconType[];
};

export type RegistrationStepContent = {
  step1: {
    title: string;
    options: RegistrationVehicleOption[];
    error: string;
  };
  step2: {
    title: string;
    fields: {
      vorname: string;
      nachname: string;
    };
    placeholders: {
      vorname: string;
      nachname: string;
    };
    error: {
      vorname: string;
      nachname: string;
    };
  };
  step3: {
    title: string;
    options: {
      no: string;
      yes: string;
    };
    descriptions: {
      no: string;
      yes: string;
    };
    subTitle: string;
    prerequisiteWarning: {
      title: string;
      description: string;
    };
    subOptions: RegistrationExistingLicenseOption[];
  };
  step3_5: {
    title: string;
    options: RegistrationSpecificClassOption[];
    error: string;
  };
  step4: {
    title: string;
    options: RegistrationGearboxOption[];
    error: string;
  };
  step5: {
    title: string;
    options: RegistrationIconOption[];
    error: string;
  };
  step6: {
    title: string;
    theoryInfo: {
      title: string;
      description: string;
    };
    practiceTitle: string;
    options: RegistrationIconOption[];
    error: string;
  };
  step7: {
    title: string;
    summary: {
      fahrzeugTyp: string;
      name: string;
      fuehrerschein: string;
      getriebe: string;
      pruefung: string;
      kursart: string;
    };
  };
  step8: {
    title: string;
    fields: {
      vorname: string;
      nachname: string;
      geburtsdatum: string;
      geburtsstadt: string;
      telefon: string;
      email: string;
      adresse: string;
      datenschutz: string;
    };
    placeholders: {
      geburtsstadt: string;
      telefon: string;
      email: string;
      adresse: string;
    };
    error: {
      vorname: string;
      nachname: string;
      geburtsdatum: string;
      geburtsstadt: string;
      telefon: string;
      email: string;
      adresse: string;
      datenschutz: string;
    };
  };
  step9: {
    title: string;
    subtitle: string;
    whatsapp: {
      title: string;
      message: string;
    };
    thankYou: string;
    thankYouDetail: string;
    button: string;
  };
  friendDiscount: {
    explanation: string;
    toggleLabel: string;
    friendNameLabel: string;
    friendNamePlaceholder: string;
    submitButton: string;
    skipButton: string;
  };
  bonus: {
    save: string;
    validUntil: string;
  };
};

export type RegistrationLocaleContent = {
  seo: {
    title: string;
    description: string;
  };
  capacitySeo: {
    title: string;
    description: string;
  };
  navigation: {
    back: string;
    title: string;
    stepOf: string;
    von: string;
  };
  buttons: {
    next: string;
    submit: string;
  };
  steps: RegistrationStepContent;
  capacity: {
    title: string;
    subtitle: string;
    message: string;
    button: string;
  };
  submissionError: string;
};

export type RegistrationPageContentProps = {
  locale: Locale;
  content: RegistrationLocaleContent;
};

export type ActiveBonus = {
  rabattmenge: number;
  zeitlimit: number;
} | null;

export type RegistrationSubmitPayload = {
  formData: RegistrationFormData;
  bonusData?: BonusApiResponse | null;
  activeBonus: ActiveBonus;
  isFriendDiscount: boolean;
  friendName: string;
};
