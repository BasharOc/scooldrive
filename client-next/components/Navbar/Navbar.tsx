"use client";

import { useEffect, useRef, useState } from "react";
import DesktopMegaMenu from "@/components/Navbar/DesktopMegaMenu";
import {
  getLocalizedSwitchPath,
  getMenuItems,
  getMobileMenus,
  localizePath,
} from "@/components/Navbar/helpers";
import MobileMenu from "@/components/Navbar/MobileMenu";
import NavbarHeader from "@/components/Navbar/NavbarHeader";
import type { MenuType, NavbarProps } from "@/components/Navbar/types";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar({ content, locale }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  // Welches Desktop-Megamenu gerade offen ist.
  const [hoveredMenu, setHoveredMenu] = useState<MenuType | null>(null);
  // Sichtbarkeit des Sprach-Dropdowns im Header.
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  // Öffnet und schließt das komplette Mobile-Slide-in-Menü.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Merkt sich, welches Mobile-Untermenü aktuell aufgeklappt ist.
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  // Unterscheidet zwischen Desktop- und Mobile-Viewport.
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  // Puffer für das verzögerte Schließen des Megamenüs.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lokalisierte Zielpfade für die festen Navbar-Einstiege.
  const localizedHomePath = localizePath(content.homePath, locale);
  const localizedFuehrerscheinPath = localizePath(content.fuehrerscheinPath, locale);
  const localizedAnmeldenPath = localizePath(content.anmeldenPath, locale);
  // Menüeinträge für das gerade aktive Desktop-Megamenu.
  const megaMenuItems = hoveredMenu ? getMenuItems(hoveredMenu, content) : [];
  // Mobile-Menüsektionen werden aus dem Content abgeleitet.
  const mobileMenus = getMobileMenus(content);

  useEffect(() => {
    // Hält fest, ob wir uns unterhalb des Mobile-Breakpoints bewegen.
    const handleResize = () => {
      setIsMobileMenu(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Räumt einen laufenden Close-Timer beim Unmount sicher auf.
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  // Schließt offene UI-Zustände und navigiert danach zur Zielseite.
  const handleNavigate = (path: string) => {
    setHoveredMenu(null);
    setShowLanguageDropdown(false);
    setIsMobileMenuOpen(false);
    router.push(path);
  };

  // Baut aus aktuellem Pfad + neuer Sprache die passende Locale-URL.
  const handleLanguageSelection = (nextLocale: typeof locale) => {
    handleNavigate(getLocalizedSwitchPath(pathname, nextLocale));
  };

  // Öffnet das gewünschte Megamenu und stoppt evtl. laufende Schließ-Timer.
  const handleMenuEnter = (menuType: MenuType) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }

    setHoveredMenu(menuType);
  };

  // Startet ein leicht verzögertes Schließen für ruhigeres Hover-Verhalten.
  const handleMenuLeave = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 250);
  };

  // Hält das Megamenu offen, solange der Cursor im Panel bleibt.
  const handleMegaMenuEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  // Schließt das Megamenu verzögert, wenn der Cursor das Panel verlässt.
  const handleMegaMenuLeave = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 250);
  };

  // Klappt im Mobile-Menü jeweils genau eine Sektion auf oder zu.
  const handleExpandMobileMenu = (menuKey: string) => {
    setExpandedMobileMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  return (
    <div className="fixed left-1/2 top-[calc(env(safe-area-inset-top)+1rem)] z-50 mb-32 w-full max-w-[90%] -translate-x-1/2">
      <nav className="relative rounded-2xl border border-gray-800 bg-black/90 px-6 shadow-2xl backdrop-blur-md">
        {/* Header zeigt Logo, Hauptnavigation, CTA, Sprachwechsel und Mobile-Trigger. */}
        <NavbarHeader
          content={content}
          locale={locale}
          // Der Header braucht den Open-State, um das Burger-Icon richtig zu wechseln.
          isMobileMenuOpen={isMobileMenuOpen}
          // Damit Desktop und Mobile denselben Dropdown-Zustand verwenden.
          isLanguageDropdownOpen={showLanguageDropdown}
          // Öffnet oder schließt das Sprach-Dropdown beim Klick auf den Switcher.
          onToggleLanguageDropdown={() => setShowLanguageDropdown((prev) => !prev)}
          // Sprachwechsel wird zentral in der Elternkomponente berechnet.
          onLanguageSelect={handleLanguageSelection}
          // Header-Buttons wie CTA sollen denselben Navigationspfad benutzen wie der Rest.
          onNavigate={handleNavigate}
          // Hover-Handler steuern das Öffnen der Desktop-Megamenüs.
          onMenuEnter={handleMenuEnter}
          onMenuLeave={handleMenuLeave}
          // Burger-Button toggelt das komplette Mobile-Menü.
          onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
          // Diese Pfade sind schon lokalisiert, damit der Header selbst nichts mehr berechnen muss.
          localizedHomePath={localizedHomePath}
          localizedFuehrerscheinPath={localizedFuehrerscheinPath}
          localizedAnmeldenPath={localizedAnmeldenPath}
        />

        {/* DesktopMegaMenu rendert das große Hover-Panel unterhalb der Navbar. */}
        <DesktopMegaMenu
          // Auf Mobile soll kein Desktop-Megamenu sichtbar bleiben.
          hoveredMenu={!isMobileMenuOpen ? hoveredMenu : null}
          // Wird für die Breiten-/Positionierungslogik des Panels verwendet.
          isMobileMenu={isMobileMenu}
          content={content}
          // Alle Karten-Links werden hier schon mit der aktuellen Locale versehen.
          menuItems={megaMenuItems.map((item) => ({
            ...item,
            path: localizePath(item.path, locale),
          }))}
          // Banner-CTA braucht denselben lokalisierten Zielpfad wie der Header-CTA.
          localizedAnmeldenPath={localizedAnmeldenPath}
          // Klicks auf Banner und Karten sollen zentral navigieren und UI-Zustände zurücksetzen.
          onNavigate={handleNavigate}
          // Diese Handler sorgen dafür, dass das Panel beim Hovern nicht flackert.
          onMegaMenuEnter={handleMegaMenuEnter}
          onMegaMenuLeave={handleMegaMenuLeave}
        />
      </nav>

      {/* MobileMenu ist das komplette Slide-in-Menü für kleine Viewports. */}
      <MobileMenu
        content={content}
        locale={locale}
        // Steuert, ob das Overlay überhaupt gerendert und animiert wird.
        isOpen={isMobileMenuOpen}
        // MobileMenu braucht zu wissen, welche Sektion offen ist.
        expandedMenu={expandedMobileMenu}
        // Auch hier werden die Pfade vorab lokalisiert, damit die Unterkomponente rein präsentational bleibt.
        mobileMenus={mobileMenus.map((menu) => ({
          ...menu,
          submenu: menu.submenu.map((item) => ({
            ...item,
            path: localizePath(item.path, locale),
          })),
        }))}
        // CTA im Mobile-Menü benutzt denselben lokalisierten Pfad wie überall sonst.
        localizedAnmeldenPath={localizedAnmeldenPath}
        // Schließt das Slide-in-Menü per Close-Button.
        onClose={() => setIsMobileMenuOpen(false)}
        // Navigation aus dem Mobile-Menü soll dieselbe zentrale Cleanup-Logik nutzen.
        onNavigate={handleNavigate}
        // Untermenüs werden von oben zentral aufgeklappt.
        onExpandMenu={handleExpandMobileMenu}
        // Sprachwechsel unten im Mobile-Menü läuft über dieselbe Locale-Logik.
        onLanguageSelect={handleLanguageSelection}
      />
    </div>
  );
}
