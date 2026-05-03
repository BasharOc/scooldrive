"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import type { Review } from "@/components/Homepage/types";
import type { Locale } from "@/types/i18n";

// Deterministic vertical offsets — no Math.random() → no hydration mismatch
const OFFSETS_PX = [0, 20, -15, 35, -10, 38, -22, 14, -30, 8];

type Props = {
  reviews: readonly Review[];
  locale: Locale;
};

export default function ReviewsCarouselClient({ reviews, locale }: Props) {
  const isArabic = locale === "ar";
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    updateArrows();
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const amount = card ? card.offsetWidth + 20 : 300;
    // RTL: flip direction so arrows feel natural
    el.scrollBy({ left: (isArabic ? -dir : dir) * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scroll(-1)}
        disabled={isArabic ? !canRight : !canLeft}
        className="absolute left-0 top-[42%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#E7E8EC] bg-white shadow-md transition-opacity disabled:pointer-events-none disabled:opacity-0"
      >
        <FaChevronLeft className="text-sm text-black" />
      </button>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        onScroll={updateArrows}
        dir="ltr"
        className="flex items-start snap-x snap-mandatory gap-5 overflow-x-auto pb-12 pt-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-[8%] md:px-[2%]"
      >
        {reviews.map((review, i) => (
          <article
            key={review.id}
            style={{
              marginTop: OFFSETS_PX[i % OFFSETS_PX.length] + "px",
            }}
            className="w-[84%] shrink-0 snap-center rounded-[1.7rem] border border-[#E7E8EC] bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.12)] select-none md:w-[47%]"
          >
            {/* Card header */}
            <div className={`mb-5 flex items-center justify-between gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
              {/* Name + time */}
              <div className={isArabic ? "text-right" : ""}>
                <p className="text-base font-extrabold uppercase tracking-wide text-black">
                  {review.name}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase text-[#F5BB00]">
                  {review.timeAgo}
                </p>
              </div>
              {/* G + stars */}
              <div className={`flex shrink-0 flex-col items-center gap-1 ${isArabic ? "items-end" : "items-center"}`}>
                <span className="text-2xl font-black leading-none text-black">G</span>
                <div className={`flex gap-0.5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <FaStar
                      key={`${review.id}-${idx}`}
                      className="text-xs text-[#F5BB00]"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p
              className={`text-sm leading-relaxed text-black/80 ${
                isArabic ? "text-right" : ""
              }`}
            >
              {review.text}
            </p>
          </article>
        ))}
      </div>

      {/* Right arrow */}
      <button
        type="button"
        aria-label="Next"
        onClick={() => scroll(1)}
        disabled={isArabic ? !canLeft : !canRight}
        className="absolute right-0 top-[42%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#E7E8EC] bg-white shadow-md transition-opacity disabled:pointer-events-none disabled:opacity-0"
      >
        <FaChevronRight className="text-sm text-black" />
      </button>
    </div>
  );
}
