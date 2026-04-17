export function getPreviousRegistrationStep(currentStep, formData) {
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

export function getNextRegistrationStep(currentStep, formData) {
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

export function getSpecificClassOptions(formData, langContent) {
  return langContent.steps.step3_5.options.filter((option) => {
    if (formData.fahrzeugTyp === "auto-anhaenger") {
      return ["be", "b96"].includes(option.key);
    }

    if (formData.fahrzeugTyp === "motorrad") {
      return ["am", "a1", "a2", "a"].includes(option.key);
    }

    return false;
  });
}

