import type { CookieBannerContent } from "@/components/CookieBanner/types";

export const COOKIE_BANNER_EN: CookieBannerContent = {
  title: "Cookie Settings",
  description:
    "We use cookies to provide you with the best possible experience on our website. Some are necessary for functionality, others help us improve the website and show you relevant content.",
  buttons: {
    acceptAll: "Accept All",
    onlyNecessary: "Only Necessary",
    settings: "Settings",
    saveSettings: "Save Settings",
    backToSimple: "← Back to simple view",
  },
  detailsDescription: "Choose which cookies you want to accept:",
  cookies: {
    necessary: {
      title: "Necessary Cookies",
      badge: "Required",
      description:
        "These cookies are required for the basic functions of the website and cannot be disabled.",
      examples: "Examples: Session management, security, basic functions",
    },
    analytics: {
      title: "Analytics & Performance",
      description:
        "Help us understand how visitors interact with the website (Google Analytics).",
      examples: "Examples: Page views, time spent, anonymous user statistics",
    },
    marketing: {
      title: "Marketing & Advertising",
      description:
        "Used to show you relevant advertising and personalized content.",
      examples:
        "Examples: Retargeting, personalized advertising, social media integration",
    },
  },
  footer: "More information can be found in our",
  privacyLink: "Privacy Policy",
};
