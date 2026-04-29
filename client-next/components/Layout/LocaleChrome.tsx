"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type { FooterContent } from "@/components/Footer/types";
import type { NavbarContent } from "@/components/Navbar/types";
import type { Locale } from "@/types/i18n";

type LocaleChromeProps = {
  children: React.ReactNode;
  footerContent: FooterContent;
  navbarContent: NavbarContent;
  locale: Locale;
};

const HIDDEN_CHROME_SUFFIXES = ["/anmelden", "/maximal-capacity"];

export default function LocaleChrome({
  children,
  footerContent,
  navbarContent,
  locale,
}: LocaleChromeProps) {
  const pathname = usePathname();
  const hideChrome = HIDDEN_CHROME_SUFFIXES.some((suffix) =>
    pathname.endsWith(suffix)
  );

  return (
    <>
      {hideChrome ? null : <Navbar content={navbarContent} locale={locale} />}
      <main className="flex-1">{children}</main>
      {hideChrome ? null : <Footer content={footerContent} locale={locale} />}
    </>
  );
}
