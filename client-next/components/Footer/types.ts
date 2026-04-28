export type FooterLink = {
  label: string;
  path: string;
};

export type FooterSection = {
  title: string;
  links: readonly FooterLink[];
};

export type FooterContent = {
  callToAction: string;
  callToActionButton: string;
  companyInfo: {
    name: string;
    location: string;
    description: string;
  };
  sections: readonly FooterSection[];
  bottom: {
    copyright: string;
    links: readonly FooterLink[];
    notice: string;
    noticeUrl: string;
  };
};

export type LegalSection = {
  heading: string;
  details: readonly string[];
};

export type LegalPageContent = {
  seo: {
    title: string;
    description: string;
    path: string;
  };
  title: string;
  sections: readonly LegalSection[];
};

export type LegalContent = {
  impressum: LegalPageContent;
  datenschutz: LegalPageContent;
  agb: LegalPageContent;
};
