import type { CookieBannerContent } from "@/components/CookieBanner/types";

export const COOKIE_BANNER_DE: CookieBannerContent = {
  title: "Cookie-Einstellungen",
  description:
    "Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige sind notwendig für die Funktionalität, andere helfen uns, die Website zu verbessern und Ihnen relevante Inhalte zu zeigen.",
  buttons: {
    acceptAll: "Alle akzeptieren",
    onlyNecessary: "Nur notwendige",
    settings: "Einstellungen",
    saveSettings: "Einstellungen speichern",
    backToSimple: "← Zurück zur einfachen Ansicht",
  },
  detailsDescription: "Wählen Sie, welche Cookies Sie akzeptieren möchten:",
  cookies: {
    necessary: {
      title: "Notwendige Cookies",
      badge: "Erforderlich",
      description:
        "Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.",
      examples:
        "Beispiele: Session-Management, Sicherheit, grundlegende Funktionen",
    },
    analytics: {
      title: "Analyse & Performance",
      description:
        "Helfen uns zu verstehen, wie Besucher mit der Website interagieren (Google Analytics).",
      examples:
        "Beispiele: Seitenaufrufe, Verweildauer, anonyme Nutzerstatistiken",
    },
    marketing: {
      title: "Marketing & Werbung",
      description:
        "Werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte zu zeigen.",
      examples:
        "Beispiele: Retargeting, personalisierte Werbung, Social Media Integration",
    },
  },
  footer: "Weitere Informationen finden Sie in unserer",
  privacyLink: "Datenschutzerklärung",
};
