export type MotorradSeo = {
  title: string;
  description: string;
};

export type MotorradHeroContent = {
  badge: string;
  title: readonly string[];
  description: readonly string[];
  buttonText: string;
};

export type MotorradChecklistItem = {
  icon:
    | "user"
    | "helmet"
    | "shield"
    | "credit-card"
    | "eye";
  title: string;
  description: string;
};

export type MotorradChecklistContent = {
  title: string;
  items: readonly MotorradChecklistItem[];
};

export type MotorradFact = {
  title: string;
  description: string;
};

export type MotorradFactsContent = {
  title: string;
  items: readonly MotorradFact[];
};

export type MotorradInformationContent = {
  title: string;
  paragraphs: readonly string[];
  imageAlt: string;
};

export type MotorradStep = {
  title: string;
  description: string;
  details: readonly string[];
};

export type MotorradStepsContent = {
  header: {
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  tabs: {
    A1: string;
    A2: string;
    A: string;
  };
  ageInfo: {
    A1: string;
    A2: string;
    A: string;
  };
  startLabel: string;
  cta: {
    A1: string;
    A2: string;
    A: string;
  };
  items: {
    A1: readonly MotorradStep[];
    A2: readonly MotorradStep[];
    A: readonly MotorradStep[];
  };
};

export type MotorradContent = {
  seo: MotorradSeo;
  hero: MotorradHeroContent;
  checklist: MotorradChecklistContent;
  facts: MotorradFactsContent;
  information: MotorradInformationContent;
  steps: MotorradStepsContent;
};
