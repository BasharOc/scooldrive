import type { ReactNode } from "react";
import type { Locale } from "@/types/i18n";

export type MenuType = "fuehrerschein" | "termine";

export type MenuItem = {
  title: string;
  description: string;
  path: string;
};

export type MenuItemWithIcon = MenuItem & {
  icon?: ReactNode;
};

export type MobileMenuSection = {
  key: MenuType;
  title: string;
  delay: number;
  submenu: readonly MenuItemWithIcon[];
};

export type NavbarContent = {
  languageCode: "DE" | "EN" | "AR";
  branchLabel: string;
  branchName: string;
  menuLabel: string;
  logoAlt: string;
  trailerAlt: string;
  homePath: string;
  fuehrerscheinPath: string;
  anmeldenPath: string;
  fuehrerschein: string;
  termine: string;
  anmelden: string;
  fuehrerscheinBanner: {
    text: string;
    button: string;
  };
  fuehrerscheinItems: readonly MenuItem[];
  termineItems: readonly MenuItem[];
};

export type NavbarProps = {
  content: NavbarContent;
  locale: Locale;
};
