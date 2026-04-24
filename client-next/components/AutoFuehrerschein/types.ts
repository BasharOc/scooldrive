export type AutoFuehrerscheinSeo = {
  title: string;
  description: string;
};

export type AutoFuehrerscheinHeroContent = {
  badge: string;
  title: readonly string[];
  description: readonly string[];
  buttonText: string;
};

export type AutoFuehrerscheinFact = {
  icon: "car" | "calendar" | "clipboard-check" | "cogs" | "wrench";
  title: string;
  content: string;
};

export type AutoFuehrerscheinFactsContent = {
  title: string;
  items: readonly AutoFuehrerscheinFact[];
};

export type AutoFuehrerscheinStep = {
  id: number;
  title: string;
  description: string;
  icon:
    | "user-plus"
    | "eye"
    | "id-card"
    | "book"
    | "clipboard-check"
    | "car"
    | "graduation-cap"
    | "trophy";
};

export type AutoFuehrerscheinStepsContent = {
  title: string;
  subtitle: string;
  options: {
    automatic: string;
    automaticManual: string;
  };
  hints: {
    automatic: string;
    automaticManual: string;
  };
  cta: {
    automatic: string;
    automaticManual: string;
  };
  startLabel: string;
  items: {
    automatic: readonly AutoFuehrerscheinStep[];
    automaticManual: readonly AutoFuehrerscheinStep[];
  };
};

export type AutoFuehrerscheinContent = {
  seo: AutoFuehrerscheinSeo;
  hero: AutoFuehrerscheinHeroContent;
  facts: AutoFuehrerscheinFactsContent;
  steps: AutoFuehrerscheinStepsContent;
};
