import emailjs from "@emailjs/browser";

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
  };
}

export async function submitRegistration({
  formData,
  bonusData,
  activeBonus,
  isFriendDiscount,
  friendName,
}) {
  const payload = buildRegistrationEmailPayload({
    formData,
    bonusData,
    activeBonus,
    isFriendDiscount,
    friendName,
  });

  if (EMAIL_MODE === "mock") {
    console.info("[registration email mock] EmailJS send skipped.", payload);
    return {
      mocked: true,
      payload,
    };
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
}
