export type HomeSeo = {
  title: string;
  description: string;
};

export type HeroContent = {
  badge: string;
  title1: string;
  title2: string;
  features: readonly string[];
  cta: string;
  warning?: string;
};

export type LicenseOption = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  path: string;
  icon: "car" | "trailer" | "motorcycle";
};

export type LicenseOptionsContent = {
  header1: string;
  header2: string;
  cta: string;
  options: readonly LicenseOption[];
  more: string;
};

export type PersonalFeature = {
  icon: "calendar" | "user" | "gear";
  title: string;
  description: string;
};

export type PersonalApproachContent = {
  header1: string;
  header2: string;
  header2Highlight: string;
  description: string;
  features: readonly PersonalFeature[];
  bottomText1: string;
  bottomText2: string;
  bottomText3: string;
  cta: string;
  ctaPath: string;
  closing: string;
};

export type Review = {
  id: number;
  name: string;
  timeAgo: string;
  text: string;
  rating: number;
};

export type ReviewsContent = {
  title: string;
  reviews: readonly Review[];
};

export type TrafficRule = {
  id: number;
  label: string;
  icon: "trophy" | "cone" | "circle" | "timer" | "eye" | "bars" | "smile";
  accent: boolean;
};

export type TrafficRulesContent = {
  title: string;
  subtitle: string;
  badgeText: readonly string[];
  rules: readonly TrafficRule[];
};

export type SchoolLocationContent = {
  title: string;
  subtitle: string;
  infoTitle: string;
  addressTitle: string;
  contactLabels: {
    phone: string;
    email: string;
    hours: string;
  };
  cta: string;
  schoolInfo: {
    name: string;
    street: string;
    city: string;
    country: string;
    phone: string;
    email: string;
    hours: string;
    mapEmbedUrl: string;
    directionsUrl: string;
  };
};

export type SchoolLocationRuntimeData = {
  hours?: string;
  phoneEnabled?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqContent = {
  title: string;
  items: readonly FaqItem[];
};

export type HomeContent = {
  seo: HomeSeo;
  hero: HeroContent;
  licenseOptions: LicenseOptionsContent;
  personalApproach: PersonalApproachContent;
  reviews: ReviewsContent;
  trafficRules: TrafficRulesContent;
  schoolLocation: SchoolLocationContent;
  faq: FaqContent;
};
