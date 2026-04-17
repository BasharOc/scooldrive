import emailjs from "@emailjs/browser";
import {
  createRegistration,
  updateRegistrationEmailStatus,
} from "./registrationApi";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAIL_MODE = (
  import.meta.env.VITE_REISTRATION_EMAIL_MODE ||
  import.meta.env.VITE_REGISTRATION_EMAIL_MODE ||
  "live"
).toLowerCase();

function buildRegistrationEmailPayload({
  formData,
  bonusData,
  activeBonus,
  isFriendDiscount,
  friendName,
}) {
  const rabattText =
    bonusData?.forAll?.aktiv && activeBonus
      ? `Die Person hat einen Rabatt von ${activeBonus.rabattmenge}€`
      : "";
  let freundeRabattText = "";
  let nameVonFreundText = "";

  if (isFriendDiscount) {
    freundeRabattText = bonusData?.forFriend?.rabattmenge
      ? `Die Person hat einen Freunderabatt von ${bonusData.forFriend.rabattmenge}€`
      : "";
    nameVonFreundText = friendName
      ? `Der eingeladene Freund heißt ${friendName}`
      : "";
  }

  return {
    vorname: formData.vorname,
    nachname: formData.nachname,
    email: formData.email,
    telefon: formData.telefon,
    geburtsdatum: formData.geburtsdatum,
    geburtsstadt: formData.geburtsstadt,
    adresse: formData.adresse,
    fahrzeugTyp: formData.fahrzeugTyp,
    spezifischeKlasse: formData.spezifischeKlasse,
    hatFuehrerschein: formData.hatFuehrerschein ? "Ja" : "Nein",
    fuehrerscheinTyp: formData.fuehrerscheinTyp,
    getriebe: formData.getriebe,
    pruefung: formData.pruefung,
    kursart: formData.kursart,
    rabatt: rabattText,
    freundeRabatt: freundeRabattText,
    nameVonFreund: nameVonFreundText,
    isFriendDiscount,
    friendName: isFriendDiscount ? friendName : "",
  };
}

function buildRegistrationStoragePayload({
  formData,
  bonusData,
  activeBonus,
  isFriendDiscount,
  friendName,
}) {
  const emailPayload = buildRegistrationEmailPayload({
    formData,
    bonusData,
    activeBonus,
    isFriendDiscount,
    friendName,
  });

  return {
    ...emailPayload,
    hatFuehrerschein: formData.hatFuehrerschein,
    datenschutz: formData.datenschutz,
    isFriendDiscount,
    friendName: isFriendDiscount ? friendName : "",
  };
}

async function syncEmailStatus({
  savedRegistration,
  emailStatus,
  emailError = "",
}) {
  try {
    await updateRegistrationEmailStatus({
      registrationId: savedRegistration.registration.id,
      clientUpdateToken: savedRegistration.clientUpdateToken,
      emailStatus,
      emailError,
    });
  } catch (error) {
    console.warn("Registration email status sync failed:", error);
  }
}

export async function submitRegistration({
  formData,
  bonusData,
  activeBonus,
  isFriendDiscount,
  friendName,
}) {
  const emailPayload = buildRegistrationEmailPayload({
    formData,
    bonusData,
    activeBonus,
    isFriendDiscount,
    friendName,
  });
  const storagePayload = buildRegistrationStoragePayload({
    formData,
    bonusData,
    activeBonus,
    isFriendDiscount,
    friendName,
  });
  const savedRegistration = await createRegistration(storagePayload);

  if (EMAIL_MODE === "mock") {
    console.info(
      "[registration email mock] EmailJS send skipped.",
      emailPayload,
    );
    await syncEmailStatus({
      savedRegistration,
      emailStatus: "mocked",
    });

    return {
      mocked: true,
      saved: true,
      payload: emailPayload,
      registration: savedRegistration.registration,
    };
  }

  try {
    const emailResult = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      emailPayload,
      PUBLIC_KEY
    );

    await syncEmailStatus({
      savedRegistration,
      emailStatus: "sent",
    });

    return {
      saved: true,
      emailStatus: "sent",
      emailResult,
      registration: savedRegistration.registration,
    };
  } catch (error) {
    await syncEmailStatus({
      savedRegistration,
      emailStatus: "failed",
      emailError: error?.message || "EmailJS Versand fehlgeschlagen",
    });

    return {
      saved: true,
      emailStatus: "failed",
      emailError: error?.message || "EmailJS Versand fehlgeschlagen",
      registration: savedRegistration.registration,
    };
  }
}
