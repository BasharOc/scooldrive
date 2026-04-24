import Image from "next/image";
import {
  FaBalanceScale,
  FaBook,
  FaCar,
  FaInfoCircle,
  FaMotorcycle,
  FaRocket,
  FaTag,
} from "react-icons/fa";
import { LANGUAGE_OPTIONS } from "@/components/Navbar/constants";
import type {
  MenuItemWithIcon,
  MenuType,
  MobileMenuSection,
  NavbarContent,
} from "@/components/Navbar/types";
import type { Locale } from "@/types/i18n";

export const localizePath = (path: string, locale: Locale) => {
  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
};

export const getLocalizedSwitchPath = (pathname: string | null, nextLocale: Locale) => {
  const targetLanguage =
    LANGUAGE_OPTIONS.find((language) => language.locale === nextLocale) ?? LANGUAGE_OPTIONS[0];
  const currentPathWithoutLocale = pathname?.replace(/^\/(de|en|ar)(?=\/|$)/, "") || "";
  const normalizedPath = currentPathWithoutLocale || "/";

  return normalizedPath === "/" ? targetLanguage.href : `${targetLanguage.href}${normalizedPath}`;
};

export const getFuehrerscheinIcons = (trailerAlt: string) => [
  <FaCar key="car" className="text-black text-4xl" />,
  <Image
    key="trailer"
    src="/auto-anhanger-mobile.png"
    alt={trailerAlt}
    width={70}
    height={40}
    className="w-auto max-w-[70px] object-contain"
    style={{ minWidth: 44, minHeight: 28 }}
  />,
  <FaMotorcycle key="motorcycle" className="text-black text-4xl" />,
  <FaBook key="theory" className="text-black text-4xl" />,
  <FaRocket key="intensive" className="text-black text-4xl" />,
  <FaTag key="prices" className="text-black text-4xl" />,
  <FaBalanceScale key="points" className="text-black text-4xl" />,
];

export const getMenuItems = (
  menuType: MenuType,
  content: NavbarContent,
): readonly MenuItemWithIcon[] => {
  const fuehrerscheinIcons = getFuehrerscheinIcons(content.trailerAlt);

  if (menuType === "fuehrerschein") {
    return content.fuehrerscheinItems.map((item, idx) => ({
      ...item,
      icon: fuehrerscheinIcons[idx],
    }));
  }

  return content.termineItems.map((item, idx) => ({
    ...item,
    icon:
      item.path === "/blogs" ? (
        <FaInfoCircle className="text-black text-4xl" />
      ) : (
        fuehrerscheinIcons[idx + 3]
      ),
  }));
};

export const getMobileMenus = (content: NavbarContent): readonly MobileMenuSection[] => [
  {
    key: "fuehrerschein",
    title: content.fuehrerschein,
    delay: 0.3,
    submenu: getMenuItems("fuehrerschein", content),
  },
  {
    key: "termine",
    title: content.termine,
    delay: 0.4,
    submenu: getMenuItems("termine", content),
  },
];
