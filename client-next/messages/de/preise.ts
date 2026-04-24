export const PREISE_DE = {
  seo: {
    title: "Fahrschule Preise Lüneburg – Kosten für Führerschein bei Scooldrive",
    description:
      "Transparente Preise für den Führerschein in Lüneburg: Alle Kosten für Auto, Motorrad und Anhänger Führerschein auf einen Blick.",
  },
  header: {
    title: "UNSERE",
    highlight: " PREISE",
    subtitle:
      "Transparente Preise ohne versteckte Kosten. Wähle deine Führerscheinklasse und erhalte eine detaillierte Kostenübersicht.",
  },
  licenses: {
    pkw: "PKW (Klasse B)",
    motorrad: "Motorrad (Klasse A/A1/A2/AM)",
    anhanger: "Anhänger (Klasse BE)",
    b96: "Anhänger (Klasse B96)",
    b196: "Leichtkraftrad (Klasse B196)",
  },
  prerequisite: "Führerschein B Voraussetzung",
  sections: {
    basePrices: "Basispreise",
    baseFee: "Grundgebühr",
    learningApp: "Lernapp",
    practiceLesson: "Übungsstunde",
    specialDrives: "Sonderfahrten",
    ruralRoad: "Überlandfahrt",
    highway: "Autobahnfahrt",
    nightDrive: "Nachtfahrt",
    theoryExam: "Theorieprüfung",
    practicalExam: "Praxisprüfung",
    schoolTotal: "Gesamt (Fahrschule)",
    extraCosts: "Zusätzliche Behörden- & Prüfungskosten",
    extraCostsTotal: "Zusatzkosten gesamt:",
    totalCosts: "Gesamtkosten",
  },
  calculations: {
    lessons: "Stunden",
    total: "Gesamt",
  },
  extraCosts: [
    {
      key: "fuehrerscheinantrag",
      name: "Führerscheinantrag",
      fallbackPrice: 43.4,
    },
    { key: "sehtest", name: "Sehtest", fallbackPrice: 6.43 },
    {
      key: "ersteHilfeKurs",
      name: "Erste-Hilfe-Kurs",
      fallbackPrice: 45,
    },
    { key: "passbild", name: "Passbild", fallbackPrice: 10 },
  ],
  warning: {
    title: "Wichtige Hinweise:",
    points: [
      {
        label: "Individuelle Kosten",
        text: "Der Endpreis kann je nach persönlichen Fähigkeiten und benötigten Zusatzstunden variieren",
      },
      {
        label: "Flexible Zahlung",
        text: "Du zahlst nur pro absolvierte Fahrstunde - keine Vorauszahlung des Gesamtbetrags",
      },
      {
        label: "Transparenz",
        text: "Keine versteckten Kosten - du behältst immer die Kontrolle über deine Ausgaben",
      },
    ],
  },
  finalSection: {
    description: "Alle Kosten transparent aufgeschlüsselt",
    cta: "Jetzt anmelden und durchstarten!",
  },
} as const;
