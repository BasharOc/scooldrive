import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { LANGUAGE_OPTIONS } from "@/components/Navbar/constants";
import type { MobileMenuSection, NavbarContent } from "@/components/Navbar/types";
import type { Locale } from "@/types/i18n";

type MobileMenuProps = {
  content: NavbarContent;
  locale: Locale;
  isOpen: boolean;
  expandedMenu: string | null;
  mobileMenus: readonly MobileMenuSection[];
  localizedAnmeldenPath: string;
  onClose: () => void;
  onNavigate: (path: string) => void;
  onExpandMenu: (menuKey: string) => void;
  onLanguageSelect: (locale: Locale) => void;
};

export default function MobileMenu({
  content,
  locale,
  isOpen,
  expandedMenu,
  mobileMenus,
  localizedAnmeldenPath,
  onClose,
  onNavigate,
  onExpandMenu,
  onLanguageSelect,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed left-0 top-0 z-50 h-screen w-screen bg-white md:hidden"
          style={{
            minHeight: "100dvh",
            ...(isOpen ? { left: "-5.6%", top: "-4.2vh", position: "absolute" } : {}),
          }}
        >
          <div className="h-full w-full bg-white">
            <div className="flex h-full flex-col bg-white">
              {/* Mobile Header */}
              <div className="flex items-center justify-between border-b border-gray-200 bg-white p-6">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/logo.png"
                    alt={content.logoAlt}
                    width={70}
                    height={40}
                    className="max-h-[40px] max-w-[70px]"
                  />
                </div>
                <div className="text-2xl font-bold text-black">{content.menuLabel}</div>
                <button onClick={onClose} className="p-2 text-black">
                  <FaTimes size={24} />
                </button>
              </div>

              {/* Mobile CTA */}
              <div className="bg-white p-6">
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex w-full items-center justify-center space-x-2 rounded-xl bg-[#F5BB00] py-4 text-lg font-bold text-black"
                  onClick={() => onNavigate(localizedAnmeldenPath)}
                >
                  <span>{content.anmelden}</span>
                  <span>→</span>
                </motion.button>
              </div>

              {/* Mobile Menu Items */}
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
                      onClick={() => onExpandMenu(item.key)}
                      className="group mb-4 flex w-full items-center justify-between bg-white text-left"
                    >
                      <span className="text-xl font-bold text-black transition-colors group-hover:text-[#F5BB00]">
                        {item.title}
                      </span>
                      <motion.span
                        animate={{ rotate: expandedMenu === item.key ? 90 : 0 }}
                        className="text-2xl text-[#F5BB00] transition-transform"
                      >
                        →
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {expandedMenu === item.key && (
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
                                onClick={() => onNavigate(subItem.path)}
                              >
                                {subItem.icon && (
                                  <div className="flex-shrink-0 text-xl text-black">{subItem.icon}</div>
                                )}
                                <div className="flex-1">
                                  <p className="text-sm font-bold text-black">{subItem.title}</p>
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

              {/* Mobile Footer */}
              <div className="space-y-6 bg-white p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-center"
                >
                  <div className="text-sm font-medium text-gray-500">{content.branchLabel}</div>
                  <div className="text-2xl font-bold text-[#F5BB00]">{content.branchName}</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex justify-center"
                >
                  <select
                    value={locale}
                    onChange={(event) => onLanguageSelect(event.target.value as Locale)}
                    className="min-w-[200px] rounded-xl border border-gray-300 bg-gray-100 px-6 py-3 text-center text-lg font-medium"
                  >
                    {LANGUAGE_OPTIONS.map((language) => (
                      <option key={language.locale} value={language.locale}>
                        {language.flag} {language.name}
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
  );
}
