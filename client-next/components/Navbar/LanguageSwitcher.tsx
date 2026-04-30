import { FaChevronDown, FaGlobe } from "react-icons/fa";
import { LANGUAGE_OPTIONS } from "@/components/Navbar/constants";
import type { Locale } from "@/types/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (locale: Locale) => void;
  align?: "left" | "right";
};

export default function LanguageSwitcher({
  locale,
  isOpen,
  onToggle,
  onSelect,
  align = "right",
}: LanguageSwitcherProps) {
  const selectedLanguage =
    LANGUAGE_OPTIONS.find((language) => language.locale === locale) ??
    LANGUAGE_OPTIONS[0];

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex cursor-pointer items-center space-x-2 rounded-lg border border-gray-600 bg-gray-800/50 px-3 py-2 text-white transition-colors hover:border-[#F5BB00] hover:text-[#F5BB00]"
      >
        <span className="text-sm font-medium">
          {selectedLanguage.flag} {selectedLanguage.code}
        </span>
        <FaChevronDown className="text-xs" />
      </button>

      {isOpen && (
        <div
          className={`absolute top-full z-50 mt-2 overflow-hidden rounded-lg border border-gray-800 bg-black/95 shadow-2xl backdrop-blur-md ${
            align === "left" ? "left-0" : "right-0"
          }`}
        >
          {LANGUAGE_OPTIONS.map((language) => (
            <button
              key={language.locale}
              onClick={() => onSelect(language.locale)}
              className="flex w-full items-center space-x-2 px-4 py-3 text-left text-white transition-colors hover:bg-[#F5BB00] hover:text-black"
            >
              <span className="text-sm">{language.flag}</span>
              <span className="text-sm font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
