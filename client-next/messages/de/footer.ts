import type { FooterContent } from "@/components/Footer/types";

export const FOOTER_DE: FooterContent = {
  callToAction: "MELDE DICH JETZT ZUM FÜHRERSCHEIN AN.",
  callToActionButton: "JETZT ANMELDEN",
  companyInfo: {
    name: "Scool Drive",
    location: "Fahrschule Lüneburg",
    description:
      "Kannst Du Auto? Der Führerschein - Das Ticket in eine neue Welt - Scool Drive Fahrschulen - Die Fahrschule Nr.1 - Garantierte Mobilität & keine Fahrstunde zu viel!",
  },
  sections: [
    {
      title: "FÜHRERSCHEIN MACHEN",
      links: [
        { label: "Autoführerschein", path: "/auto-fuehrerschein" },
        { label: "Auto-Anhänger", path: "/auto-anhaenger" },
        { label: "Motorradführerschein", path: "/motorrad-fuehrerschein" },
      ],
    },
    {
      title: "SONSTIGES",
      links: [{ label: "Unsere Termine", path: "/theoriekurs" }],
    },
  ],
  bottom: {
    copyright: "© 2025 Scool Drive Fahrschule Lüneburg GbR",
    links: [
      { label: "Impressum", path: "/impressum" },
      { label: "Datenschutz", path: "/datenschutz" },
      { label: "AGB", path: "/agb" },
      { label: "Sitemap", path: "/sitemap" },
    ],
    notice: "„https://Scool Drive-in“ in neuem Tab öffnen",
    noticeUrl: "https://fahrschule-lg.scooldrive.com",
  },
};
