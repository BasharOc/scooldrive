import type { PreiseApiResponse } from "@/lib/remote-data";
import type { PreiseContent } from "@/messages/preise";

export type LicenseKey = "pkw" | "motorrad" | "anhanger" | "b96" | "b196";

export type VariablePriceConfig = {
  hasPrerequisite: boolean;
  icon: "car" | "motorcycle" | "trailer";
  name: string;
  baseFee: number;
  learningApp: number;
  practiceLesson: number;
  theoryExam: number;
  practicalExam: number;
  specialDrives: {
    ruralRoad: { count: number; price: number };
    highway: { count: number; price: number };
    nightDrive: { count: number; price: number };
    total: number;
  };
};

export type FixedPriceConfig = {
  fixedPrice: number;
  hasPrerequisite: boolean;
  icon: "motorcycle" | "trailer";
  name: string;
};

export type ExtraCostItem = {
  key: string;
  name: string;
  value: number;
};

export const isFixedConfig = (
  config: VariablePriceConfig | FixedPriceConfig,
): config is FixedPriceConfig => "fixedPrice" in config;

export function buildPriceStructure(
  content: PreiseContent,
  remoteData?: PreiseApiResponse | null,
): Record<LicenseKey, VariablePriceConfig | FixedPriceConfig> {
  return {
    pkw: {
      name: content.licenses.pkw,
      icon: "car",
      baseFee: remoteData?.grundgebuehrTheoriekurs ?? 400,
      learningApp: remoteData?.lernapp ?? 85,
      practiceLesson: remoteData?.uebungsstundePKW ?? 70,
      specialDrives: {
        ruralRoad: { count: 5, price: remoteData?.sonderfahrtenPKW ?? 80 },
        highway: { count: 4, price: remoteData?.sonderfahrtenPKW ?? 80 },
        nightDrive: { count: 3, price: remoteData?.sonderfahrtenPKW ?? 80 },
        total: 12,
      },
      theoryExam: remoteData?.theorieprueung ?? 50,
      practicalExam: remoteData?.praxispruefung ?? 200,
      hasPrerequisite: false,
    },
    motorrad: {
      name: content.licenses.motorrad,
      icon: "motorcycle",
      baseFee: remoteData?.motorradKlasseAGrundgebuehr ?? 560,
      learningApp: remoteData?.lernapp ?? 85,
      practiceLesson: remoteData?.uebungsstundeMotorrad ?? 80,
      specialDrives: {
        ruralRoad: { count: 5, price: remoteData?.sonderfahrtenMotorrad ?? 90 },
        highway: { count: 4, price: remoteData?.sonderfahrtenMotorrad ?? 90 },
        nightDrive: {
          count: 3,
          price: remoteData?.sonderfahrtenMotorrad ?? 90,
        },
        total: 12,
      },
      theoryExam: remoteData?.theorieprueung ?? 50,
      practicalExam: remoteData?.praxispruefung ?? 200,
      hasPrerequisite: false,
    },
    anhanger: {
      name: content.licenses.anhanger,
      icon: "trailer",
      baseFee: 200,
      learningApp: remoteData?.lernapp ?? 85,
      practiceLesson: remoteData?.uebungsstundePKWAnhaenger ?? 85,
      specialDrives: {
        ruralRoad: {
          count: 3,
          price: remoteData?.sonderfahrtenPKWAnhaenger ?? 95,
        },
        highway: {
          count: 1,
          price: remoteData?.sonderfahrtenPKWAnhaenger ?? 95,
        },
        nightDrive: {
          count: 1,
          price: remoteData?.sonderfahrtenPKWAnhaenger ?? 95,
        },
        total: 5,
      },
      theoryExam: 0,
      practicalExam: remoteData?.praxispruefung ?? 200,
      hasPrerequisite: true,
    },
    b96: {
      name: content.licenses.b96,
      icon: "trailer",
      fixedPrice: remoteData?.anhaengerKlasseB96 ?? 850,
      hasPrerequisite: true,
    },
    b196: {
      name: content.licenses.b196,
      icon: "motorcycle",
      fixedPrice: remoteData?.leichtkraftradB196 ?? 950,
      hasPrerequisite: true,
    },
  };
}
