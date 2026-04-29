import {
  FaCar,
  FaCarSide,
  FaClock,
  FaCog,
  FaMotorcycle,
  FaRocket,
  FaTrailer,
  FaTruck,
} from "react-icons/fa";
import type { RegistrationLocaleContent } from "@/components/Registration/types";

export const REGISTRATION_DE: RegistrationLocaleContent = {
  seo: {
    title: "Anmeldung Führerschein Lüneburg – Jetzt Platz sichern bei Scooldrive",
    description:
      "Jetzt für den Führerschein anmelden: Schnelle und unkomplizierte Anmeldung bei der Fahrschule Scooldrive Lüneburg. Einfach das Formular ausfüllen und Fahrstunden sichern!",
  },
  capacitySeo: {
    title: "Maximale Kapazität erreicht | Scooldrive Lüneburg",
    description:
      "Derzeit sind alle Plätze belegt. Versuchen Sie es bitte später erneut oder kehren Sie zur Startseite zurück.",
  },
  navigation: {
    back: "Zurück",
    title: "Anmeldung",
    stepOf: "Schritt",
    von: "von",
  },
  buttons: {
    next: "Weiter",
    submit: "Jetzt Anmelden",
  },
  steps: {
    step1: {
      title: "Welchen Führerschein möchtest du machen?",
      options: [
        { key: "auto", label: "Auto (Klasse B)", icon: FaCar },
        { key: "motorrad", label: "Motorrad", icon: FaMotorcycle },
        {
          key: "auto-anhaenger",
          label: "Auto mit Anhänger (BE)",
          icon: FaTruck,
        },
      ],
      error: "Bitte wählen Sie einen Fahrzeugtyp",
    },
    step2: {
      title: "Wie ist dein Name?",
      fields: {
        vorname: "Vorname",
        nachname: "Nachname",
      },
      placeholders: {
        vorname: "Dein Vorname",
        nachname: "Dein Nachname",
      },
      error: {
        vorname: "Vorname ist erforderlich",
        nachname: "Nachname ist erforderlich",
      },
    },
    step3: {
      title: "Hast du bereits einen Führerschein?",
      options: {
        no: "Nein, das ist mein erster Führerschein",
        yes: "Ja, ich habe bereits einen Führerschein",
      },
      descriptions: {
        no: "Ich bin Fahranfänger",
        yes: "Ich möchte eine weitere Klasse machen",
      },
      subTitle: "Welchen Führerschein hast du bereits?",
      prerequisiteWarning: {
        title: "Führerschein B erforderlich",
        description:
          "Für die Führerscheinklassen BE und B96 ist ein gültiger Führerschein der Klasse B Voraussetzung.",
      },
      subOptions: [
        { value: "B (Auto)", desc: "Klasse B - PKW bis 3,5t", icon: FaCar },
        {
          value: "BE (Auto mit Anhänger)",
          desc: "Klasse BE - PKW mit Anhänger",
          icon: FaTruck,
        },
        {
          value: "Motorrad",
          desc: "Klasse A/A1/A2 - Motorrad",
          icon: FaMotorcycle,
        },
      ],
    },
    step3_5: {
      title: "Welche spezifische Klasse möchtest du?",
      options: [
        {
          key: "be",
          label: "BE - Anhänger",
          desc: "Klassischer Anhängerführerschein",
          weight: "Bis 3.500kg zul. Gesamtgewicht",
          icon: FaTrailer,
        },
        {
          key: "b96",
          label: "B96 - Leichter Anhänger",
          desc: "Erweiterte Berechtigung für Auto",
          weight: "Bis 4.250kg zul. Gesamtgewicht",
          icon: FaTrailer,
        },
        {
          key: "am",
          label: "AM - Moped/Roller",
          desc: "Zweiräder bis 50ccm",
          weight: "Max. 45 km/h",
          icon: FaMotorcycle,
        },
        {
          key: "a1",
          label: "A1 - Leichtkraftrad",
          desc: "Motorräder bis 125ccm",
          weight: "Max. 11 kW (15 PS)",
          icon: FaMotorcycle,
        },
        {
          key: "a2",
          label: "A2 - Mittlere Motorräder",
          desc: "Motorräder mit beschränkter Leistung",
          weight: "Max. 35 kW (48 PS)",
          icon: FaMotorcycle,
        },
        {
          key: "a",
          label: "A - Schwere Motorräder",
          desc: "Unbeschränkte Motorräder",
          weight: "Keine Leistungsbegrenzung",
          icon: FaMotorcycle,
        },
      ],
      error: "Bitte wählen Sie eine spezifische Klasse",
    },
    step4: {
      title: "Was möchtest du lernen?",
      options: [
        {
          key: "beide",
          label: "Automatik + Schaltgetriebe",
          desc: "(empfohlen)",
          icons: [FaCarSide, FaCog],
        },
        {
          key: "automatik",
          label: "Nur Automatikgetriebe",
          desc: "Eingeschränkte Berechtigung",
          icons: [FaCarSide],
        },
      ],
      error: "Bitte wählen Sie eine Option",
    },
    step5: {
      title: "Welche Prüfung möchtest du machen?",
      options: [
        {
          key: "automatik-pruefung",
          label: "Automatikprüfung",
          desc: "(empfohlen)",
          icon: FaCarSide,
        },
        {
          key: "schalt-pruefung",
          label: "Schaltgetriebeprüfung",
          desc: "Für alle Getriebe berechtigt",
          icon: FaCog,
        },
      ],
      error: "Bitte wählen Sie eine Prüfungsart",
    },
    step6: {
      title: "Welchen Praxis-Kurs möchtest du?",
      theoryInfo: {
        title: "Theoriekurs - Intensiv",
        description:
          "Der Theoriekurs findet in kompakter, intensiver Form statt und bereitet dich optimal auf die Theorieprüfung vor.",
      },
      practiceTitle: "Wähle deine Praxis-Kursart:",
      options: [
        {
          key: "flexibel",
          label: "Flexibler Praxis-Kurs",
          desc: "Lerne in deinem eigenen Tempo",
          icon: FaClock,
        },
        {
          key: "praxis-intensiv",
          label: "Praxis Intensivkurs",
          desc: "Schnell durch die praktische Ausbildung",
          icon: FaRocket,
        },
      ],
      error: "Bitte wählen Sie eine Kursart",
    },
    step7: {
      title: "Deine Auswahl im Überblick",
      summary: {
        fahrzeugTyp: "Fahrzeugtyp",
        name: "Name",
        fuehrerschein: "Führerschein",
        getriebe: "Getriebe",
        pruefung: "Prüfung",
        kursart: "Kursart",
      },
    },
    step8: {
      title: "Vervollständige deine Anmeldung",
      fields: {
        vorname: "Vorname",
        nachname: "Nachname",
        geburtsdatum: "Geburtsdatum",
        geburtsstadt: "Geburtsstadt",
        telefon: "Telefonnummer",
        email: "E-Mail",
        adresse: "Adresse",
        datenschutz: "Ich akzeptiere die Datenschutzbestimmungen",
      },
      placeholders: {
        geburtsstadt: "Deine Geburtsstadt",
        telefon: "+49 123 456789",
        email: "deine@email.de",
        adresse: "Straße, Hausnummer, PLZ, Ort",
      },
      error: {
        vorname: "Vorname ist erforderlich",
        nachname: "Nachname ist erforderlich",
        geburtsdatum: "Geburtsdatum ist erforderlich",
        geburtsstadt: "Geburtsstadt ist erforderlich",
        telefon: "Telefonnummer ist erforderlich",
        email: "E-Mail ist erforderlich",
        adresse: "Adresse ist erforderlich",
        datenschutz: "Sie müssen den Datenschutzbestimmungen zustimmen",
      },
    },
    step9: {
      title: "Herzlichen Glückwunsch!",
      subtitle: "Ihre Anmeldung war erfolgreich!",
      whatsapp: {
        title: "Wir kontaktieren Sie",
        message:
          "Sie erhalten in Kürze eine WhatsApp-Nachricht mit allen weiteren Informationen zu Ihrem Kurs.",
      },
      thankYou: "Vielen Dank für dein Vertrauen!",
      thankYouDetail:
        "Wir freuen uns darauf, Sie auf Ihrem Weg zum Führerschein zu begleiten.",
      button: "Zurück zur Startseite",
    },
    friendDiscount: {
      explanation:
        "Bringe einen Freund mit und ihr beide erhaltet einen Rabatt von {rabattmenge}€. Ihr müsst nur den Namen des Freundes angeben, der ebenfalls einen Kurs bei uns bucht. (Dein Freund sollte auch deinen Namen angeben, damit wir den Rabatt zuordnen können.)",
      toggleLabel: "Freunde-Rabatt beanspruchen",
      friendNameLabel: "Name des Freundes",
      friendNamePlaceholder: "Gib den Namen deines Freundes ein",
      submitButton: "Einreichen",
      skipButton: "Überspringen",
    },
    bonus: {
      save: "Spare {rabattmenge}€!",
      validUntil: "Nur gültig bis {zeitlimit}h",
    },
  },
  capacity: {
    title: "Maximale Kapazität erreicht",
    subtitle: "Es tut uns leid!",
    message:
      "Derzeit sind alle Plätze belegt. Versuchen Sie es bitte zu einem späteren Zeitpunkt erneut.",
    button: "Zurück zur Startseite",
  },
  submissionError: "Fehler bei der Anmeldung. Bitte versuchen Sie es erneut.",
};
