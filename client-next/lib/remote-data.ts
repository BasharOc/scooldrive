import type { Locale } from "@/types/i18n";

export type TermineApiItem = {
  aktiv: boolean;
  datum: string;
};

export type TermineApiResponse = {
  termine: TermineApiItem[];
};

export type PreiseApiResponse = {
  grundgebuehrTheoriekurs?: number;
  lernapp?: number;
  uebungsstundePKW?: number;
  sonderfahrtenPKW?: number;
  theorieprueung?: number;
  praxispruefung?: number;
  motorradKlasseAGrundgebuehr?: number;
  uebungsstundeMotorrad?: number;
  sonderfahrtenMotorrad?: number;
  uebungsstundePKWAnhaenger?: number;
  sonderfahrtenPKWAnhaenger?: number;
  anhaengerKlasseB96?: number;
  leichtkraftradB196?: number;
  fuehrerscheinantrag?: number;
  sehtest?: number;
  ersteHilfeKurs?: number;
  passbild?: number;
  intensivkursPreis?: number;
};

const getLocaleTag = (locale: Locale) => {
  if (locale === "de") {
    return "de-DE";
  }

  if (locale === "en") {
    return "en-US";
  }

  return "ar-SA";
};

export const getUpcomingTerminLabel = (
  locale: Locale,
  termineData?: TermineApiResponse | null
) => {
  if (!termineData?.termine?.length) {
    return null;
  }

  const today = new Date();
  const nextTermin = termineData.termine
    .filter((termin) => termin.aktiv && new Date(termin.datum) > today)
    .sort(
      (a, b) =>
        new Date(a.datum).getTime() - new Date(b.datum).getTime()
    )[0];

  if (!nextTermin) {
    return null;
  }

  return new Date(nextTermin.datum).toLocaleDateString(getLocaleTag(locale), {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
