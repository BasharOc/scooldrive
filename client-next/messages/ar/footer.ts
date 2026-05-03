import type { FooterContent } from "@/components/Footer/types";

export const FOOTER_AR: FooterContent = {
  callToAction: "سجل للحصول على رخصة القيادة الآن.",
  callToActionButton: "سجل الآن.",
  companyInfo: {
    name: "Scool Drive",
    location: "مدرسة القيادة لونيبورغ",
    description:
      "هل يمكنك القيادة؟ رخصة القيادة - التذكرة إلى عالم جديد - مدارس القيادة Scool Drive - مدرسة القيادة رقم 1 - التنقل المضمون وعدم وجود دروس قيادة غير ضرورية!",
  },
  sections: [
    {
      title: "احصل على رخصة القيادة الخاصة بك",
      links: [
        { label: "رخصة السيارة", path: "/auto-fuehrerschein" },
        { label: "مقطورة السيارة", path: "/auto-anhaenger" },
        { label: "رخصة الدراجة النارية", path: "/motorrad-fuehrerschein" },
      ],
    },
    {
      title: "أخرى",
      links: [
        { label: "مواعيدنا", path: "/theoriekurs" },
        { label: "دورات مكثفة", path: "/intensivkurse" },
        { label: "الأسعار", path: "/preise" },
        { label: "تخفيض النقاط", path: "/punkte-abbauen" },
        { label: "المدونة", path: "/blogs" },
        { label: "سجل الآن", path: "/anmelden" },
      ],
    },
  ],
  bottom: {
    copyright: "© 2025 Scool Drive مدرسة القيادة لونيبورغ GbR",
    links: [
      { label: "الإشعار القانوني", path: "/impressum" },
      { label: "سياسة الخصوصية", path: "/datenschutz" },
      { label: "الشروط والأحكام", path: "/agb" },
      { label: "خريطة الموقع", path: "/sitemap" },
    ],
    notice: "افتح “https://Scool Drive-in” في علامة تبويب جديدة",
    noticeUrl: "https://fahrschule-lg.scooldrive.com",
  },
};
