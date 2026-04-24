import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "@/components/Navbar/LanguageSwitcher";
import type { MenuType, NavbarContent } from "@/components/Navbar/types";
import type { Locale } from "@/types/i18n";

type NavbarHeaderProps = {
  content: NavbarContent;
  locale: Locale;
  isMobileMenuOpen: boolean;
  isLanguageDropdownOpen: boolean;
  onToggleLanguageDropdown: () => void;
  onLanguageSelect: (locale: Locale) => void;
  onNavigate: (path: string) => void;
  onMenuEnter: (menuType: MenuType) => void;
  onMenuLeave: () => void;
  onToggleMobileMenu: () => void;
  localizedHomePath: string;
  localizedFuehrerscheinPath: string;
  localizedAnmeldenPath: string;
};

export default function NavbarHeader({
  content,
  locale,
  isMobileMenuOpen,
  isLanguageDropdownOpen,
  onToggleLanguageDropdown,
  onLanguageSelect,
  onNavigate,
  onMenuEnter,
  onMenuLeave,
  onToggleMobileMenu,
  localizedHomePath,
  localizedFuehrerscheinPath,
  localizedAnmeldenPath,
}: NavbarHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      {/* Logo und Filialinfo */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center px-3 py-2">
          <Link href={localizedHomePath}>
            <Image
              src="/logo.png"
              alt={content.logoAlt}
              width={180}
              height={45}
              className="h-[45px] w-auto object-contain"
              style={{ width: "auto", maxHeight: 45 }}
            />
          </Link>
        </div>

        <div className="hidden flex-col text-white md:flex">
          <div className="text-sm font-bold">{content.branchLabel}</div>
          <div className="text-lg font-bold text-[#F5BB00]">{content.branchName}</div>
        </div>

        {/* Mobile Language Switch */}
        <div className="md:hidden">
          <LanguageSwitcher
            locale={locale}
            isOpen={isLanguageDropdownOpen}
            onToggle={onToggleLanguageDropdown}
            onSelect={onLanguageSelect}
            align="left"
          />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden items-center space-x-2 md:flex">
        <div
          className="relative"
          onMouseEnter={() => onMenuEnter("fuehrerschein")}
          onMouseLeave={onMenuLeave}
        >
          <Link
            href={localizedFuehrerscheinPath}
            className="flex cursor-pointer items-center space-x-1 rounded-lg px-3 py-2 font-bold text-[#F5BB00] transition-all duration-200 hover:scale-105 hover:bg-[#F5BB00]/10 hover:text-[#F5BB00] hover:shadow-lg"
          >
            <span>{content.fuehrerschein}</span>
            <FaChevronDown className="text-xs" />
          </Link>
        </div>

        <div
          className="relative"
          onMouseEnter={() => onMenuEnter("termine")}
          onMouseLeave={onMenuLeave}
        >
          <button className="flex cursor-pointer items-center space-x-1 rounded-lg px-3 py-2 font-bold text-white transition-all duration-200 hover:scale-105 hover:bg-[#F5BB00]/10 hover:text-[#F5BB00] hover:shadow-lg">
            <span>{content.termine}</span>
            <FaChevronDown className="text-xs" />
          </button>
        </div>

        <LanguageSwitcher
          locale={locale}
          isOpen={isLanguageDropdownOpen}
          onToggle={onToggleLanguageDropdown}
          onSelect={onLanguageSelect}
        />

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="cursor-pointer rounded-lg bg-[#F5BB00] px-6 py-2 font-bold text-black transition-all duration-200 hover:bg-yellow-400 hover:shadow-xl"
          onClick={() => onNavigate(localizedAnmeldenPath)}
        >
          {content.anmelden}
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={onToggleMobileMenu}
          className="p-2 text-white transition-colors hover:text-[#F5BB00]"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </div>
  );
}
