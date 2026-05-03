import type { PreiseApiResponse } from "@/lib/remote-data";
import { createSectionNav } from "@/lib/section-nav";
import type { PreiseContent } from "@/messages/preise";
import type { Locale } from "@/types/i18n";
import SectionNav from "@/components/shared/SectionNav";
import LicensePriceWidget from "./LicensePriceWidget";
import { buildPriceStructure } from "./priceConfig";
import type { ExtraCostItem } from "./priceConfig";

type PreisePageContentProps = {
  content: PreiseContent;
  locale: Locale;
  remoteData?: PreiseApiResponse | null;
};

export default function PreisePageContent({
  content,
  locale,
  remoteData,
}: PreisePageContentProps) {
  const structure = buildPriceStructure(content, remoteData);

  const extraCosts: ExtraCostItem[] = content.extraCosts.map((item) => ({
    key: item.key,
    name: item.name,
    value: remoteData?.[item.key] ?? item.fallbackPrice,
  }));
  const sectionNav = createSectionNav(locale, [
    { id: "ueberblick", label: "intro" },
    { id: "preise", label: "prices" },
  ]);

  return (
    <div className="mt-[80px] min-h-screen bg-gray-50 px-4 py-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div
          id="ueberblick"
          className="mb-12 scroll-mt-28 pt-[40px] text-center md:scroll-mt-32"
        >
          <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
            {content.header.title}
            <span className="text-[#F5BB00]">{content.header.highlight}</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
            {content.header.subtitle}
          </p>
        </div>
        <SectionNav content={sectionNav} className="mb-12 rounded-b-[28px]" />
        <section id="preise" className="scroll-mt-28 md:scroll-mt-32">
          <LicensePriceWidget
            structure={structure}
            extraCosts={extraCosts}
            content={content}
            locale={locale}
          />
        </section>
      </div>
    </div>
  );
}
