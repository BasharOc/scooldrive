import type { Locale } from "@/types/i18n";

export type TermineApiItem = {
  aktiv: boolean;
  datum: string;
  titel?: string;
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

export type BonusApiConfig = {
  aktiv?: boolean;
  rabattmenge?: number;
  zeitlimit?: number;
  expiresAt?: string | null;
};

export type BonusApiResponse = {
  forAll?: BonusApiConfig;
  forFriend?: BonusApiConfig;
};

export type EinstellungenApiResponse = {
  anmeldungStopp?: boolean;
  begrenztePlaetze?: boolean;
  kontaktOptionen?: {
    whatsapp?: boolean;
    telefon?: boolean;
    whatsappNummer?: string;
  };
};

export type OeffnungszeitTag = {
  aktiv: boolean;
  startzeit: string;
  endzeit: string;
};

export type OeffnungszeitenApiResponse = {
  montag: OeffnungszeitTag;
  dienstag: OeffnungszeitTag;
  mittwoch: OeffnungszeitTag;
  donnerstag: OeffnungszeitTag;
  freitag: OeffnungszeitTag;
  samstag: OeffnungszeitTag;
  sonntag: OeffnungszeitTag;
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

export const formatOeffnungszeiten = (
  oeffnungszeiten?: OeffnungszeitenApiResponse | null
) => {
  if (!oeffnungszeiten) {
    return null;
  }

  const wochentage: Array<keyof OeffnungszeitenApiResponse> = [
    "montag",
    "dienstag",
    "mittwoch",
    "donnerstag",
    "freitag",
    "samstag",
    "sonntag",
  ];
  const tageKurz = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  const aktiveZeiten = wochentage.flatMap((tag, index) => {
    const tagData = oeffnungszeiten[tag];

    if (!tagData?.aktiv) {
      return [];
    }

    return [
      {
        tag: tageKurz[index],
        startzeit: tagData.startzeit,
        endzeit: tagData.endzeit,
        index,
      },
    ];
  });

  if (aktiveZeiten.length === 0) {
    return "Geschlossen";
  }

  const gruppen: typeof aktiveZeiten[] = [];
  let aktuelleGruppe = [aktiveZeiten[0]];

  for (let index = 1; index < aktiveZeiten.length; index += 1) {
    const vorheriger = aktiveZeiten[index - 1];
    const aktueller = aktiveZeiten[index];

    if (
      aktueller.index === vorheriger.index + 1 &&
      aktueller.startzeit === vorheriger.startzeit &&
      aktueller.endzeit === vorheriger.endzeit
    ) {
      aktuelleGruppe.push(aktueller);
      continue;
    }

    gruppen.push(aktuelleGruppe);
    aktuelleGruppe = [aktueller];
  }

  gruppen.push(aktuelleGruppe);

  return gruppen
    .map((gruppe) => {
      const zeiten = `${gruppe[0].startzeit} - ${gruppe[0].endzeit}`;

      if (gruppe.length === 1) {
        return `${gruppe[0].tag}: ${zeiten}`;
      }

      return `${gruppe[0].tag}-${gruppe[gruppe.length - 1].tag}: ${zeiten}`;
    })
    .join(", ");
};
