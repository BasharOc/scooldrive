export const AUTO_ANHAENGER_DE = {
  seo: {
    title: "Auto Anhänger Führerschein Lüneburg – Klasse BE & B96 bei Scooldrive",
    description:
      "Auto Anhänger Führerschein (Klasse BE & B96) in Lüneburg: Flexible Termine, moderne Fahrzeuge und erfahrene Fahrlehrer bei Scooldrive. Jetzt für den Anhänger-Führerschein anmelden!",
  },
  hero: {
    badge: "Anhängerführerschein Klasse BE",
    title: [
      "Dein großer Anhängerführerschein.",
      "Damit alles da ankommt,",
      "wo du es haben willst.",
    ],
    description: [
      "Anhängerführerschein für größere Lasten",
      "Praxisorientierte Schulungen",
      "Flexibel und effizient lernen",
    ],
    buttonText: "Jetzt Unabhängig werden",
  },
  facts: {
    title: "Anhängerführerschein Bedingungen",
    items: [
      { icon: "weight", title: "Anhänger bis", content: "3.500 KG" },
      {
        icon: "calendar",
        title: "Mindestalter",
        content: "18 Jahre / 17 mit BF17",
      },
      {
        icon: "id-card",
        title: "Voraussetzungen",
        content: "Autoführerschein",
      },
      { icon: "clock", title: "Ausbildungsdauer", content: "Ab einem Tag" },
    ],
  },
  steps: {
    title: "Dein Weg zum",
    titleHighlight: "Anhängerführerschein",
    subtitle:
      "Je nach deinem aktuellen Führerschein-Status begleiten wir dich durch den passenden Prozess.",
    options: {
      withoutLicense: "Noch kein Führerschein",
      withLicense: "Autoführerschein vorhanden",
    },
    noTheoryRequired: "✨ Keine Theoriestunden notwendig!",
    startLabel: "START",
    cta: {
      withLicense: "Anhängerführerschein starten!",
      withoutLicense: "Führerschein + Anhänger beginnen!",
    },
    items: {
      withoutLicense: [
        {
          id: 1,
          title: "Anmeldung",
          description: "Online auf der Website oder vor Ort in Lüneburg",
        },
        {
          id: 2,
          title: "Theoretischen Unterricht besuchen",
          description:
            "Vorgeschriebener Theorieunterricht für den Anhängerführerschein",
        },
        {
          id: 3,
          title: "Praktische Fahrstunden nehmen",
          description: "Vorgeschriebene Fahrstunden mit Anhänger absolvieren",
        },
        {
          id: 4,
          title: "Theoretische Prüfung",
          description:
            "Meist nicht nötig bei BE - informiere dich bei der Fahrschule",
        },
        {
          id: 5,
          title: "Praktische Prüfung ablegen",
          description: "Fahrt mit Fahrlehrer und Prüfer erfolgreich bestehen",
        },
        {
          id: 6,
          title: "Führerschein erhalten",
          description: "Neuen Führerschein bekommen und Gespanne fahren dürfen",
        },
      ],
      withLicense: [
        {
          id: 1,
          title: "Anmeldung",
          description: "Online auf der Website oder vor Ort in Lüneburg",
        },
        {
          id: 2,
          title: "Fahrstunden nehmen",
          description: "Praktische Fahrstunden mit dem Anhänger absolvieren",
        },
        {
          id: 3,
          title: "Praktische Prüfung machen",
          description:
            "Praktische Prüfung für den Anhängerführerschein ablegen",
        },
        {
          id: 4,
          title: "Führerschein abholen",
          description:
            "Neuen Führerschein erhalten und größere Anhänger fahren",
        },
      ],
    },
  },
  checklist: {
    title: "Du brauchst",
    items: [
      {
        icon: "user",
        title: "Biometrisches Passfoto",
        description: "Aktuelles biometrisches Foto nach EU-Standards",
      },
      {
        icon: "credit-card",
        title: "Führerschein Klasse B",
        description: "Gültiger Führerschein der entsprechenden Klasse",
      },
      {
        icon: "shield",
        title: "Erste-Hilfe-Kurs",
        description: "Bescheinigung über absolvierte Erste-Hilfe-Ausbildung",
      },
      {
        icon: "credit-card",
        title: "Anerkannter, amtlicher Ausweis",
        description: "(z.B. Personalausweis, Reisepass)",
      },
      {
        icon: "eye",
        title: "Sehtest-Bescheinigung",
        description: "(nicht älter als zwei Jahre)",
      },
    ],
  },
} as const;
