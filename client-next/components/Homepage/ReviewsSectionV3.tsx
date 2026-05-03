import ReviewsCarouselClient from "@/components/Homepage/ReviewsCarouselClient";
import type { ReviewsContent } from "@/components/Homepage/types";
import type { Locale } from "@/types/i18n";

const GOOGLE_REVIEWS_URL =
  "https://www.google.de/maps/place/Fahrschule+Scool+Drive+GbR/@53.2465387,10.4084606,537m/data=!3m1!1e3!4m8!3m7!1s0x47b1dd8e8516531f:0x6c7614d57b654a2c!8m2!3d53.2465387!4d10.4110355!9m1!1b1!16s%2Fg%2F11t3fshp10?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D";

const ALL_REVIEWS_LABEL: Record<Locale, string> = {
  de: "Alle Bewertungen auf Google Maps sehen",
  en: "See all reviews on Google Maps",
  ar: "عرض جميع التقييمات على خرائط Google",
};

type Props = {
  content: ReviewsContent;
  locale: Locale;
};

export default function ReviewsSectionV3({ content, locale }: Props) {
  const isArabic = locale === "ar";

  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto w-[95%] max-w-[1920px] md:w-[80%]">
        <h2
          className={`mb-4 text-[clamp(1.4rem,3vw,4.2rem)] font-bold italic text-black ${
            isArabic ? "text-right" : "text-center"
          }`}
        >
          {content.title}
        </h2>
        <div className={`mb-10 ${isArabic ? "text-right" : "text-center"}`}>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-black underline underline-offset-2 transition-colors hover:text-[#F5BB00]"
          >
            {ALL_REVIEWS_LABEL[locale]}
          </a>
        </div>
        <ReviewsCarouselClient reviews={content.reviews} locale={locale} />
      </div>
    </section>
  );
}
