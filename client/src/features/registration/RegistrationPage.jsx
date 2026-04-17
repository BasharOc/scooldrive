import React, { useCallback, useMemo, useReducer } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import useApiData from "../../../hooks/useAPIData";
import { registrationContent } from "./registrationContent";
import {
  initialRegistrationState,
  TOTAL_REGISTRATION_STEPS,
} from "./registrationInitialState";
import {
  registrationActionTypes,
  registrationReducer,
} from "./registrationReducer";
import {
  getNextRegistrationStep,
  getPreviousRegistrationStep,
} from "./registrationSteps";
import { validateRegistrationStep } from "./registrationValidation";
import { submitRegistration } from "./registrationSubmit";
import RegistrationHeader from "./components/RegistrationHeader";
import RegistrationNavigation from "./components/RegistrationNavigation";
import RegistrationProgress from "./components/RegistrationProgress";
import RegistrationSeo from "./components/RegistrationSeo";
import StepRenderer from "./components/StepRenderer";

export default function RegistrationPage() {
  const { selectedLanguage } = useLanguage();
  const langContent =
    registrationContent[selectedLanguage] || registrationContent.DE;
  const { data: bonusData } = useApiData("bonus");
  const [state, dispatch] = useReducer(
    registrationReducer,
    initialRegistrationState
  );

  const {
    currentStep,
    formData,
    errors,
    isSubmitted,
    isFriendDiscount,
    friendName,
  } = state;

  const activeBonus = useMemo(() => {
    if (bonusData?.forAll?.aktiv) {
      return {
        rabattmenge: bonusData.forAll.rabattmenge,
        zeitlimit: bonusData.forAll.zeitlimit,
      };
    }

    if (bonusData?.forFriend?.aktiv) {
      return {
        rabattmenge: bonusData.forFriend.rabattmenge,
        zeitlimit: bonusData.forFriend.zeitlimit,
      };
    }

    return null;
  }, [bonusData]);

  const setFormData = useCallback((nextFormData) => {
    dispatch({
      type: registrationActionTypes.SET_FORM_DATA,
      payload: nextFormData,
    });
  }, []);

  const validateCurrentStep = useCallback(() => {
    const nextErrors = validateRegistrationStep(
      currentStep,
      formData,
      langContent
    );

    dispatch({
      type: registrationActionTypes.SET_ERRORS,
      payload: nextErrors,
    });

    return Object.keys(nextErrors).length === 0;
  }, [currentStep, formData, langContent]);

  const handleGoBack = () => {
    if (currentStep > 1) {
      dispatch({
        type: registrationActionTypes.SET_STEP,
        payload: getPreviousRegistrationStep(currentStep, formData),
      });
      return;
    }

    window.history.back();
  };

  const handleNext = () => {
    if (!validateCurrentStep()) {
      return;
    }

    dispatch({
      type: registrationActionTypes.SET_STEP,
      payload: getNextRegistrationStep(currentStep, formData),
    });
  };

  const handleSubmit = async () => {
    if (!validateCurrentStep()) {
      return;
    }

    try {
      await submitRegistration({
        formData,
        bonusData,
        activeBonus,
        isFriendDiscount,
        friendName,
      });

      dispatch({
        type: registrationActionTypes.SET_STEP,
        payload: 9,
      });
    } catch {
      alert("Fehler bei der Anmeldung. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <>
      <RegistrationSeo />
      <div className="min-h-screen bg-white">
        <RegistrationHeader
          currentStep={currentStep}
          totalSteps={TOTAL_REGISTRATION_STEPS}
          langContent={langContent}
          activeBonus={activeBonus}
          onBack={handleGoBack}
        />

        <div className="max-w-4xl mx-auto px-6 py-8">
          <RegistrationProgress
            currentStep={currentStep}
            totalSteps={TOTAL_REGISTRATION_STEPS}
          />

          <AnimatePresence mode="wait">
            <Motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <StepRenderer
                currentStep={currentStep}
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                langContent={langContent}
                bonusData={bonusData}
                isFriendDiscount={isFriendDiscount}
                friendName={friendName}
                isSubmitted={isSubmitted}
                onFriendDiscountToggle={(checked) =>
                  dispatch({
                    type: registrationActionTypes.SET_FRIEND_DISCOUNT,
                    payload: checked,
                  })
                }
                onFriendNameChange={(value) =>
                  dispatch({
                    type: registrationActionTypes.SET_FRIEND_NAME,
                    payload: value,
                  })
                }
                onFriendSubmitted={() =>
                  dispatch({
                    type: registrationActionTypes.MARK_FRIEND_SUBMITTED,
                  })
                }
              />
            </Motion.div>
          </AnimatePresence>

          <RegistrationNavigation
            currentStep={currentStep}
            totalSteps={TOTAL_REGISTRATION_STEPS}
            langContent={langContent}
            onNext={handleNext}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}
