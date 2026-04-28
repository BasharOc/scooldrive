import type { FooterContent } from "@/components/Footer/types";

export const FOOTER_EN: FooterContent = {
  callToAction: "SIGN UP FOR YOUR DRIVER'S LICENSE NOW.",
  callToActionButton: "SIGN UP NOW",
  companyInfo: {
    name: "Scool Drive",
    location: "Driving School Lüneburg",
    description:
      "Can you drive? The driver's license - The ticket to a new world - Scool Drive Driving Schools - The No.1 Driving School - Guaranteed mobility & no unnecessary driving lessons!",
  },
  sections: [
    {
      title: "GET YOUR DRIVER'S LICENSE",
      links: [
        { label: "Car License", path: "/auto-fuehrerschein" },
        { label: "Car Trailer", path: "/auto-anhaenger" },
        { label: "Motorcycle License", path: "/motorrad-fuehrerschein" },
      ],
    },
    {
      title: "OTHERS",
      links: [{ label: "Our Appointments", path: "/theoriekurs" }],
    },
  ],
  bottom: {
    copyright: "© 2025 Scool Drive Driving School Lüneburg GbR",
    links: [
      { label: "Imprint", path: "/impressum" },
      { label: "Privacy Policy", path: "/datenschutz" },
      { label: "Terms and Conditions", path: "/agb" },
    ],
    notice: "Open “https://Scool Drive-in” in a new tab",
    noticeUrl: "https://fahrschule-lg.scooldrive.com",
  },
};
