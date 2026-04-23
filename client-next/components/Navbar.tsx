"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBalanceScale,
  FaBars,
  FaBook,
  FaCar,
  FaChevronDown,
  FaGlobe,
  FaInfoCircle,
  FaMotorcycle,
  FaRocket,
  FaTag,
  FaTimes,
} from "react-icons/fa";

type LanguageCode = "DE" | "EN" | "AR";

type MenuItem = {
  title: string;
  description: string;
  path: string;
};

type NavbarContent = {
  languageCode: LanguageCode;
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
  fuehrerscheinItems: MenuItem[];
  termineItems: MenuItem[];
};

type NavbarProps = {
  navbarDe: NavbarContent;
  navbarEn: NavbarContent;
  navbarAr: NavbarContent;
  language?: LanguageCode;
  onLanguageChange?: (language: LanguageCode) => void;
};

const LANGUAGES = [
  { code: "DE" as const, name: "Deutsch", flag: "🇩🇪" },
  { code: "EN" as const, name: "English", flag: "🇬🇧" },
  { code: "AR" as const, name: "العربية", flag: "🇸🇦" },
];

export default function Navbar({
  navbarDe,
  navbarEn,
  navbarAr,
  language = "DE",
  onLanguageChange,
}: NavbarProps) {
  const router = useRouter();
  const [hoveredMenu, setHoveredMenu] = useState<"fuehrerschein" | "termine" | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>(() => {
    if (typeof window === "undefined") {
      return language;
    }

    const storedLanguage = window.localStorage.getItem("selectedLanguage") as LanguageCode | null;
    return storedLanguage && ["DE", "EN", "AR"].includes(storedLanguage) ? storedLanguage : language;
  });
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const translations: Record<LanguageCode, NavbarContent> = {
    DE: navbarDe,
    EN: navbarEn,
    AR: navbarAr,
  };

  const t = translations[selectedLanguage];

  const fuehrerscheinIcons = [
    <FaCar key="car" className="text-black text-4xl" />,
    <Image
      key="trailer"
      src="/auto-anhanger-mobile.png"
      alt={t.trailerAlt}
      width={70}
      height={40}
      className="w-auto object-contain max-w-[70px]"
      style={{ minWidth: 44, minHeight: 28 }}
    />,
    <FaMotorcycle key="motorcycle" className="text-black text-4xl" />,
    <FaBook key="theory" className="text-black text-4xl" />,
    <FaRocket key="intensive" className="text-black text-4xl" />,
    <FaTag key="prices" className="text-black text-4xl" />,
    <FaBalanceScale key="points" className="text-black text-4xl" />,
  ];

  useEffect(() => {
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
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const handleNavigate = (path: string) => {
    setHoveredMenu(null);
    setIsMobileMenuOpen(false);
    router.push(path);
  };

  const getMenuItems = (menuType: "fuehrerschein" | "termine") => {
    if (menuType === "fuehrerschein") {
      return t.fuehrerscheinItems.map((item, idx) => ({
        ...item,
        icon: fuehrerscheinIcons[idx],
      }));
    }

    return t.termineItems.map((item, idx) => ({
      ...item,
      icon:
        item.title === "Blog" || item.title === "المدونة" ? (
          <FaInfoCircle className="text-black text-4xl" />
        ) : (
          fuehrerscheinIcons[idx + 3]
        ),
    }));
  };

  const handleMenuEnter = (menuType: "fuehrerschein" | "termine") => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }

    setHoveredMenu(menuType);
  };

  const handleMenuLeave = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 250);
  };

  const handleMegaMenuEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleMegaMenuLeave = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 250);
  };

  const handleLanguageSelection = (langCode: LanguageCode) => {
    setSelectedLanguage(langCode);
    window.localStorage.setItem("selectedLanguage", langCode);
    setShowLanguageDropdown(false);
    onLanguageChange?.(langCode);
  };

  const mobileMenus = [
    {
      key: "fuehrerschein",
      title: t.fuehrerschein,
      delay: 0.3,
      hasSubmenu: true,
      submenu: getMenuItems("fuehrerschein"),
    },
    {
      key: "termine",
      title: t.termine,
      delay: 0.4,
      hasSubmenu: true,
      submenu: getMenuItems("termine"),
    },
  ];

  return (
    <div className="fixed z-50 w-full top-8 left-1/2 mb-32 max-w-[90%] -translate-x-1/2">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative rounded-2xl border border-gray-800 bg-black/90 px-6 py-[5px] shadow-2xl backdrop-blur-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center px-3 py-2">
              <Link href={t.homePath}>
                <Image
                  src="/logo.png"
                  alt={t.logoAlt}
                  width={180}
                  height={45}
                  className="h-[45px] w-auto object-contain"
                  style={{ maxHeight: 45 }}
                />
              </Link>
            </div>

            <div className="hidden flex-col text-white md:flex">
              <div className="text-sm font-bold">{t.branchLabel}</div>
              <div className="text-lg font-bold text-[#F5BB00]">{t.branchName}</div>
            </div>

            <div className="relative md:hidden">
              <button
                onClick={() => setShowLanguageDropdown((prev) => !prev)}
                className="flex cursor-pointer items-center space-x-2 rounded-lg border border-gray-600 bg-gray-800/50 px-3 py-2 text-white transition-colors hover:border-[#F5BB00] hover:text-[#F5BB00]"
              >
                <FaGlobe className="text-sm" />
                <span className="text-sm font-medium">
                  {LANGUAGES.find((lang) => lang.code === selectedLanguage)?.flag} {selectedLanguage}
                </span>
                <FaChevronDown className="text-xs" />
              </button>

              {showLanguageDropdown && (
                <div className="absolute left-0 top-full z-50 mt-2 overflow-hidden rounded-lg border border-gray-800 bg-black/95 shadow-2xl backdrop-blur-md">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelection(lang.code)}
                      className="flex w-full items-center space-x-2 px-4 py-3 text-left text-white transition-colors hover:bg-[#F5BB00] hover:text-black"
                    >
                      <span className="text-sm">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden items-center space-x-2 md:flex">
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter("fuehrerschein")}
              onMouseLeave={handleMenuLeave}
            >
              <Link
                href={t.fuehrerscheinPath}
                className="flex cursor-pointer items-center space-x-1 rounded-lg px-3 py-2 font-bold text-[#F5BB00] transition-all duration-200 hover:scale-105 hover:bg-[#F5BB00]/10 hover:text-[#F5BB00] hover:shadow-lg"
              >
                <span>{t.fuehrerschein}</span>
                <FaChevronDown className="text-xs" />
              </Link>
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter("termine")}
              onMouseLeave={handleMenuLeave}
            >
              <button className="flex cursor-pointer items-center space-x-1 rounded-lg px-3 py-2 font-bold text-white transition-all duration-200 hover:scale-105 hover:bg-[#F5BB00]/10 hover:text-[#F5BB00] hover:shadow-lg">
                <span>{t.termine}</span>
                <FaChevronDown className="text-xs" />
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown((prev) => !prev)}
                className="flex cursor-pointer items-center space-x-2 rounded-lg border border-gray-600 bg-gray-800/50 px-3 py-2 text-white transition-colors hover:border-[#F5BB00] hover:text-[#F5BB00]"
              >
                <FaGlobe className="text-sm" />
                <span className="text-sm font-medium">
                  {LANGUAGES.find((lang) => lang.code === selectedLanguage)?.flag} {selectedLanguage}
                </span>
                <FaChevronDown className="text-xs" />
              </button>

              {showLanguageDropdown && (
                <div className="absolute right-0 top-full mt-2 overflow-hidden rounded-lg border border-gray-800 bg-black/95 shadow-2xl backdrop-blur-md">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelection(lang.code)}
                      className="flex w-full items-center space-x-2 px-4 py-3 text-left text-white transition-colors hover:bg-[#F5BB00] hover:text-black"
                    >
                      <span className="text-sm">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer rounded-lg bg-[#F5BB00] px-6 py-2 font-bold text-black transition-all duration-200 hover:bg-yellow-400 hover:shadow-xl"
              onClick={() => handleNavigate(t.anmeldenPath)}
            >
              {t.anmelden}
            </motion.button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2 text-white transition-colors hover:text-[#F5BB00]"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {hoveredMenu && !isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, layout: { duration: 0.25 } }}
              className={`absolute top-full z-40 rounded-b-2xl bg-white p-6 shadow-2xl ${
                isMobileMenu ? "left-1/2 w-[90%] -translate-x-1/2" : "left-0 w-screen max-w-[100%]"
              }`}
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.16 }}
                >
                  {hoveredMenu === "fuehrerschein" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.18 }}
                      className="mb-8 flex flex-col items-center justify-between gap-4 rounded-xl bg-gray-200 px-4 py-4 md:flex-row"
                    >
                      <span className="text-center text-lg font-bold text-black md:text-left">
                        {t.fuehrerscheinBanner.text}
                      </span>
                      <button
                        className="cursor-pointer rounded-lg bg-[#F5BB00] px-6 py-3 font-bold text-black transition-all duration-200 hover:scale-105 hover:bg-yellow-400 hover:shadow-xl"
                        onClick={() => handleNavigate(t.anmeldenPath)}
                      >
                        {t.fuehrerscheinBanner.button}
                      </button>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                    {getMenuItems(hoveredMenu).map((item, index) => (
                      <motion.div
                        key={`${item.title}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: index * 0.045, duration: 0.16 }}
                        className="group cursor-pointer"
                        onClick={() => handleNavigate(item.path)}
                      >
                        <div className="flex h-full cursor-pointer flex-col items-center rounded-xl bg-gray-200 p-4 transition-all group-hover:scale-105 hover:bg-gray-300 hover:shadow-2xl">
                          {item.icon && (
                            <div
                              className="mb-3 flex min-h-[40px] items-center justify-center text-3xl transition-transform duration-200 group-hover:scale-110"
                            >
                              {item.icon}
                            </div>
                          )}
                          <h3 className="mb-2 text-center text-sm font-bold text-black">{item.title}</h3>
                          <p className="text-center text-xs text-black">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 z-50 h-screen w-screen bg-white md:hidden"
            style={{
              minHeight: "100dvh",
              ...(isMobileMenuOpen
                ? { left: "-5.6%", top: "-4.2vh", position: "absolute" }
                : {}),
            }}
          >
            <div className="h-full w-full bg-white">
              <div className="flex h-full flex-col bg-white">
                <div className="flex items-center justify-between border-b border-gray-200 bg-white p-6">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/logo.png"
                      alt={t.logoAlt}
                      width={70}
                      height={40}
                      className="max-h-[40px] max-w-[70px]"
                    />
                  </div>
                  <div className="text-2xl font-bold text-black">{t.menuLabel}</div>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-black">
                    <FaTimes size={24} />
                  </button>
                </div>

                <div className="bg-white p-6">
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex w-full items-center justify-center space-x-2 rounded-xl bg-[#F5BB00] py-4 text-lg font-bold text-black"
                    onClick={() => handleNavigate(t.anmeldenPath)}
                  >
                    <span>{t.anmelden}</span>
                    <span>→</span>
                  </motion.button>
                </div>

                <div className="flex-1 overflow-y-auto bg-white px-6">
                  {mobileMenus.map((item, index) => (
                    <motion.div
                      key={`${item.key}-${index}`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: item.delay, duration: 0.4 }}
                      className="border-b border-gray-200 bg-white py-4"
                    >
                      <button
                        onClick={() =>
                          setExpandedMobileMenu((prev) => (prev === item.key ? null : item.key))
                        }
                        className="mb-4 flex w-full items-center justify-between bg-white text-left group"
                      >
                        <span className="text-xl font-bold text-black transition-colors group-hover:text-[#F5BB00]">
                          {item.title}
                        </span>
                        <motion.span
                          animate={{ rotate: expandedMobileMenu === item.key ? 90 : 0 }}
                          className="text-2xl text-[#F5BB00] transition-transform"
                        >
                          →
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {expandedMobileMenu === item.key && item.hasSubmenu && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-1 gap-3">
                              {item.submenu.map((subItem, subIndex) => (
                                <motion.div
                                  key={`${subItem.title}-${subIndex}`}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: subIndex * 0.1, duration: 0.3 }}
                                  className="flex cursor-pointer items-center space-x-3 rounded-lg bg-gray-100 p-3 transition-colors hover:bg-[#F5BB00] hover:text-black"
                                  onClick={() => handleNavigate(subItem.path)}
                                >
                                  {subItem.icon && (
                                    <div className="flex-shrink-0 text-xl text-black">{subItem.icon}</div>
                                  )}
                                  <div className="flex-1">
                                    <h4 className="text-sm font-bold text-black">{subItem.title}</h4>
                                    <p className="text-xs text-gray-600">{subItem.description}</p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-6 bg-white p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center"
                  >
                    <div className="text-sm font-medium text-gray-500">{t.branchLabel}</div>
                    <div className="text-2xl font-bold text-[#F5BB00]">{t.branchName}</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex justify-center"
                  >
                    <select
                      value={selectedLanguage}
                      onChange={(event) =>
                        handleLanguageSelection(event.target.value as LanguageCode)
                      }
                      className="min-w-[200px] rounded-xl border border-gray-300 bg-gray-100 px-6 py-3 text-center text-lg font-medium"
                    >
                      {LANGUAGES.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.flag} {lang.name}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
