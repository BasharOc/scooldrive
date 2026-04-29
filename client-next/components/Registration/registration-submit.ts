import {
  createRegistration,
  updateRegistrationEmailStatus,
} from "@/lib/registration-api";
import type { RegistrationSubmitPayload } from "@/components/Registration/types";

const getEmailMode = () => {
  const explicitMode = process.env.NEXT_PUBLIC_EMAIL_MODE?.trim().toLowerCase();

  if (explicitMode) {
    return explicitMode;
  }

  return process.env.NODE_ENV === "production" ? "live" : "mock";
};

function buildRegistrationEmailPayload({
  activeBonus,
  bonusData,
  formData,
  friendName,
  isFriendDiscount,
}: RegistrationSubmitPayload) {
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

function buildRegistrationStoragePayload(payload: RegistrationSubmitPayload) {
  const emailPayload = buildRegistrationEmailPayload(payload);

  return {
    ...emailPayload,
    hatFuehrerschein: payload.formData.hatFuehrerschein,
    datenschutz: payload.formData.datenschutz,
    isFriendDiscount: payload.isFriendDiscount,
    friendName: payload.isFriendDiscount ? payload.friendName : "",
  };
}

async function syncEmailStatus({
  emailError = "",
  emailStatus,
  savedRegistration,
}: {
  savedRegistration: Awaited<ReturnType<typeof createRegistration>>;
  emailStatus: "sent" | "failed" | "mocked";
  emailError?: string;
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

export async function submitRegistration(payload: RegistrationSubmitPayload) {
  const emailPayload = buildRegistrationEmailPayload(payload);
  const storagePayload = buildRegistrationStoragePayload(payload);
  const savedRegistration = await createRegistration(storagePayload);
  const emailMode = getEmailMode();

  if (emailMode !== "live") {
    console.info("[registration email mock] EmailJS send skipped.", emailPayload);
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

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    await syncEmailStatus({
      savedRegistration,
      emailStatus: "failed",
      emailError: "EmailJS configuration missing",
    });

    return {
      saved: true,
      emailStatus: "failed",
      emailError: "EmailJS configuration missing",
      registration: savedRegistration.registration,
    };
  }

  try {
    const emailjsModule = await import("@emailjs/browser");
    const emailResult = await emailjsModule.default.send(
      serviceId,
      templateId,
      emailPayload,
      publicKey
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
    const emailError =
      error instanceof Error ? error.message : "EmailJS Versand fehlgeschlagen";

    await syncEmailStatus({
      savedRegistration,
      emailStatus: "failed",
      emailError,
    });

    return {
      saved: true,
      emailStatus: "failed",
      emailError,
      registration: savedRegistration.registration,
    };
  }
}
