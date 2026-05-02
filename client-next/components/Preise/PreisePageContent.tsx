import type { PreiseApiResponse } from "@/lib/remote-data";
import type { PreiseContent } from "@/messages/preise";
import type { Locale } from "@/types/i18n";
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

  return (
    <div className="mt-[80px] min-h-screen bg-gray-50 px-4 py-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="pt-[40px] mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
            {content.header.title}
            <span className="text-[#F5BB00]">{content.header.highlight}</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
            {content.header.subtitle}
          </p>
        </div>
        <LicensePriceWidget
          structure={structure}
          extraCosts={extraCosts}
          content={content}
          locale={locale}
        />
      </div>
    </div>
  );
}
