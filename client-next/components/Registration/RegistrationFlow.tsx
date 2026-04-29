"use client";

import { useEffect, useMemo, useReducer, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import RegistrationHeader from "@/components/Registration/RegistrationHeader";
import RegistrationNavigation from "@/components/Registration/RegistrationNavigation";
import RegistrationProgress from "@/components/Registration/RegistrationProgress";
import RegistrationStepRenderer from "@/components/Registration/RegistrationStepRenderer";
import {
  getNextRegistrationStep,
  getPreviousRegistrationStep,
  initialRegistrationState,
  registrationReducer,
  TOTAL_REGISTRATION_STEPS,
  validateRegistrationStep,
} from "@/components/Registration/registration-state";
import { submitRegistration } from "@/components/Registration/registration-submit";
import type { ActiveBonus } from "@/components/Registration/types";
import type { BonusApiResponse } from "@/lib/remote-data";
import { getBonus } from "@/lib/registration-api";
import { registrationByLocale } from "@/messages/registration";
import type { Locale } from "@/types/i18n";

export default function RegistrationFlow({
  locale,
}: {
  locale: Locale;
}) {
  const router = useRouter();
  const [bonusData, setBonusData] = useState<BonusApiResponse | null>(null);
  const [state, dispatch] = useReducer(registrationReducer, initialRegistrationState);
  const content = registrationByLocale[locale];
  const {
    currentStep,
    errors,
    formData,
    friendName,
    isFriendDiscount,
    isSubmitted,
  } = state;

  useEffect(() => {
    let active = true;

    getBonus()
      .then((data) => {
        if (active) {
          setBonusData(data);
        }
      })
      .catch((error) => {
        console.error("Failed to load bonus data for registration:", error);
      });

    return () => {
      active = false;
    };
  }, []);

  const activeBonus = useMemo<ActiveBonus>(() => {
    if (bonusData?.forAll?.aktiv) {
      return {
        rabattmenge: bonusData.forAll.rabattmenge || 0,
        zeitlimit: bonusData.forAll.zeitlimit || 0,
      };
    }

    if (bonusData?.forFriend?.aktiv) {
      return {
        rabattmenge: bonusData.forFriend.rabattmenge || 0,
        zeitlimit: bonusData.forFriend.zeitlimit || 0,
      };
    }

    return null;
  }, [bonusData]);

  const setFormData = (
    nextFormData:
      | typeof formData
      | ((previous: typeof formData) => typeof formData)
  ) => {
    dispatch({
      type: "SET_FORM_DATA",
      payload: nextFormData,
    });
  };

  const validateCurrentStep = () => {
    const nextErrors = validateRegistrationStep(currentStep, formData, content);

    dispatch({
      type: "SET_ERRORS",
      payload: nextErrors,
    });

    return Object.keys(nextErrors).length === 0;
  };

  const handleGoBack = () => {
    if (currentStep > 1) {
      dispatch({
        type: "SET_STEP",
        payload: getPreviousRegistrationStep(currentStep, formData),
      });
      return;
    }

    router.back();
  };

  const handleNext = () => {
    if (!validateCurrentStep()) {
      return;
    }

    dispatch({
      type: "SET_STEP",
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
        type: "SET_STEP",
        payload: 9,
      });
    } catch (error) {
      console.error("Registration submit failed:", error);
      window.alert(content.submissionError);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <RegistrationHeader
        currentStep={currentStep}
        totalSteps={TOTAL_REGISTRATION_STEPS}
        content={content}
        activeBonus={activeBonus}
        onBack={handleGoBack}
      />
      <div className="mx-auto max-w-4xl px-6 py-8">
        <RegistrationProgress
          currentStep={currentStep}
          totalSteps={TOTAL_REGISTRATION_STEPS}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <RegistrationStepRenderer
              currentStep={currentStep}
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              content={content}
              bonusData={bonusData}
              isFriendDiscount={isFriendDiscount}
              friendName={friendName}
              isSubmitted={isSubmitted}
              onFriendDiscountToggle={(checked) =>
                dispatch({
                  type: "SET_FRIEND_DISCOUNT",
                  payload: checked,
                })
              }
              onFriendNameChange={(value) =>
                dispatch({
                  type: "SET_FRIEND_NAME",
                  payload: value,
                })
              }
              onFriendSubmitted={() =>
                dispatch({
                  type: "MARK_FRIEND_SUBMITTED",
                })
              }
              locale={locale}
            />
          </motion.div>
        </AnimatePresence>
        <RegistrationNavigation
          currentStep={currentStep}
          totalSteps={TOTAL_REGISTRATION_STEPS}
          content={content}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
