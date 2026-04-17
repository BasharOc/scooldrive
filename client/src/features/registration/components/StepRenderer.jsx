import React from "react";
import Step1 from "../../../components/AnmeldeSteps/Step1";
import Step2 from "../../../components/AnmeldeSteps/Step2";
import Step3 from "../../../components/AnmeldeSteps/Step3";
import Step4 from "../../../components/AnmeldeSteps/Step4";
import Step5 from "../../../components/AnmeldeSteps/Step5";
import Step6 from "../../../components/AnmeldeSteps/Step6";
import Step7 from "../../../components/AnmeldeSteps/Step7";
import Step8 from "../../../components/AnmeldeSteps/Step8";
import Step9 from "../../../components/AnmeldeSteps/Step9";
import Step3_5 from "../../../components/AnmeldeSteps/Step3_5";
import { getSpecificClassOptions } from "../registrationSteps";
import FriendDiscountBox from "./FriendDiscountBox";

export default function StepRenderer({
  currentStep,
  formData,
  setFormData,
  errors,
  langContent,
  bonusData,
  isFriendDiscount,
  friendName,
  isSubmitted,
  onFriendDiscountToggle,
  onFriendNameChange,
  onFriendSubmitted,
}) {
  switch (currentStep) {
    case 1:
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={langContent.steps.step1}
        />
      );

    case 2:
      return (
        <Step2
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={langContent.steps.step2}
        />
      );

    case 3:
      return (
        <Step3
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={langContent.steps.step3}
        />
      );

    case 3.5:
      return (
        <Step3_5
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={{
            ...langContent.steps.step3_5,
            options: getSpecificClassOptions(formData, langContent),
          }}
        />
      );

    case 4:
      return (
        <Step4
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={langContent.steps.step4}
        />
      );

    case 5:
      return (
        <Step5
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={langContent.steps.step5}
        />
      );

    case 6:
      return (
        <Step6
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={langContent.steps.step6}
        />
      );

    case 7:
      return (
        <Step7 formData={formData} langContent={langContent.steps.step7} />
      );

    case 8:
      return (
        <>
          <Step8
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            langContent={langContent.steps.step8}
          />
          <FriendDiscountBox
            bonusData={bonusData}
            langContent={langContent}
            isFriendDiscount={isFriendDiscount}
            friendName={friendName}
            isSubmitted={isSubmitted}
            onToggle={onFriendDiscountToggle}
            onFriendNameChange={onFriendNameChange}
            onMarkSubmitted={onFriendSubmitted}
          />
        </>
      );

    case 9:
      return (
        <Step9 formData={formData} langContent={langContent.steps.step9} />
      );

    default:
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={langContent.steps.step1}
        />
      );
  }
}

