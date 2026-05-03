import { AnimatePresence, motion } from "framer-motion";
import type { MenuItemWithIcon, MenuType, NavbarContent } from "@/components/Navbar/types";

type DesktopMegaMenuProps = {
  hoveredMenu: MenuType | null;
  isMobileMenu: boolean;
  content: NavbarContent;
  menuItems: readonly MenuItemWithIcon[];
  localizedAnmeldenPath: string;
  onNavigate: (path: string) => void;
  onMegaMenuEnter: () => void;
  onMegaMenuLeave: () => void;
};

export default function DesktopMegaMenu({
  hoveredMenu,
  isMobileMenu,
  content,
  menuItems,
  localizedAnmeldenPath,
  onNavigate,
  onMegaMenuEnter,
  onMegaMenuLeave,
}: DesktopMegaMenuProps) {
  return (
    <AnimatePresence>
      {hoveredMenu && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, layout: { duration: 0.25 } }}
          className={`absolute top-full z-40 rounded-b-2xl bg-white p-6 shadow-2xl ${
            isMobileMenu ? "left-1/2 w-[90%] -translate-x-1/2" : "left-0 w-screen max-w-[100%]"
          }`}
          onMouseEnter={onMegaMenuEnter}
          onMouseLeave={onMegaMenuLeave}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredMenu}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.16 }}
            >
              {/* Führerschein Banner */}
              {hoveredMenu === "fuehrerschein" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18 }}
                  className="mb-8 flex flex-col items-center justify-between gap-4 rounded-xl bg-gray-200 px-4 py-4 md:flex-row"
                >
                  <span className="text-center text-lg font-bold text-black md:text-left">
                    {content.fuehrerscheinBanner.text}
                  </span>
                  <button
                    className="cursor-pointer rounded-lg bg-[#F5BB00] px-6 py-3 font-bold text-black transition-all duration-200 hover:scale-105 hover:bg-yellow-400 hover:shadow-xl"
                    onClick={() => onNavigate(localizedAnmeldenPath)}
                  >
                    {content.fuehrerscheinBanner.button}
                  </button>
                </motion.div>
              )}

              {/* Menu Grid */}
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={`${item.title}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.045, duration: 0.16 }}
                    className="group cursor-pointer"
                    onClick={() => onNavigate(item.path)}
                  >
                    <div className="flex h-full cursor-pointer flex-col items-center rounded-xl bg-gray-200 p-4 transition-all group-hover:scale-105 hover:bg-gray-300 hover:shadow-2xl">
                      {item.icon && (
                        <div className="mb-3 flex min-h-[40px] items-center justify-center text-3xl transition-transform duration-200 group-hover:scale-110">
                          {item.icon}
                        </div>
                      )}
                      <p className="mb-2 text-center text-sm font-bold text-black">{item.title}</p>
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
  );
}
