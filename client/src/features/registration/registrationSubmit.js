import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function submitRegistration({
  formData,
  bonusData,
  activeBonus,
  isFriendDiscount,
  friendName,
}) {
  const rabattText = bonusData?.forAll?.aktiv
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

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
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
    },
    PUBLIC_KEY
  );
}

