export type AutoAnhaengerSeo = {
  title: string;
  description: string;
};

export type AutoAnhaengerHeroContent = {
  badge: string;
  title: readonly string[];
  description: readonly string[];
  buttonText: string;
};

export type AutoAnhaengerFact = {
  icon: "weight" | "calendar" | "id-card" | "clock";
  title: string;
  content: string;
};

export type AutoAnhaengerFactsContent = {
  title: string;
  items: readonly AutoAnhaengerFact[];
};

export type AutoAnhaengerStep = {
  id: number;
  title: string;
  description: string;
};

export type AutoAnhaengerStepsContent = {
  title: string;
  titleHighlight: string;
  subtitle: string;
  options: {
    withoutLicense: string;
    withLicense: string;
  };
  noTheoryRequired: string;
  startLabel: string;
  cta: {
    withLicense: string;
    withoutLicense: string;
  };
  items: {
    withoutLicense: readonly AutoAnhaengerStep[];
    withLicense: readonly AutoAnhaengerStep[];
  };
};

export type AutoAnhaengerRequirement = {
  icon: "user" | "credit-card" | "shield" | "eye";
  title: string;
  description: string;
};

export type AutoAnhaengerChecklistContent = {
  title: string;
  items: readonly AutoAnhaengerRequirement[];
};

export type AutoAnhaengerContent = {
  seo: AutoAnhaengerSeo;
  hero: AutoAnhaengerHeroContent;
  facts: AutoAnhaengerFactsContent;
  steps: AutoAnhaengerStepsContent;
  checklist: AutoAnhaengerChecklistContent;
};
