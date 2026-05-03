"use client";

import { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import type { ReviewsContent } from "@/components/Homepage/types";
import type { Locale } from "@/types/i18n";

type ReviewsSectionProps = {
  content: ReviewsContent;
  locale: Locale;
};

type ReviewCardProps = {
  name: string;
  timeAgo: string;
  text: string;
  rating: number;
};

function ReviewCard({ name, timeAgo, text, rating }: ReviewCardProps) {
  return (
    <article className="mx-3 w-[280px] sm:w-[400px] flex-shrink-0 rounded-[1.7rem] bg-white p-6 text-black shadow-[0_10px_28px_rgba(15,23,42,0.12)]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase text-black">{name}</p>
          <p className="mt-1 text-xs font-medium uppercase text-[#F5BB00]">
            {timeAgo}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <span className="mr-1 text-[28px] font-bold leading-none">G</span>
          {Array.from({ length: rating }).map((_, index) => (
            <FaStar
              key={`${name}-${index}`}
              className="text-sm text-[#F5BB00]"
            />
          ))}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-black/80">{text}</p>
    </article>
  );
}

export default function ReviewsSection({
  content,
  locale,
}: ReviewsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const reversedReviews = [...content.reviews].reverse();
  const isArabic = locale === "ar";

  const setPlayState = (state: "running" | "paused") => {
    if (row1Ref.current) row1Ref.current.style.animationPlayState = state;
    if (row2Ref.current) row2Ref.current.style.animationPlayState = state;
  };

  // Pause when section not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setPlayState(entry.isIntersecting ? "running" : "paused");
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Touch pause – nur Mobile
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onTouchStart = () => setPlayState("paused");
    const onTouchEnd = () => setPlayState("running");

    const onContextMenu = (e: Event) => e.preventDefault();

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });
    el.addEventListener("contextmenu", onContextMenu);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
      el.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  const cardWidth = 424;
  const totalWidth = content.reviews.length * cardWidth;

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-gray-50 py-16 select-none"
    >
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-${totalWidth}px); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-${totalWidth}px); }
          to   { transform: translateX(0); }
        }
        .reviews-row-left  { animation: scrollLeft  72s linear infinite; }
        .reviews-row-right { animation: scrollRight 78s linear infinite; }
      `}</style>

      {/* Header */}
      <div className="mx-auto w-[95%] max-w-[1920px] md:w-[80%]">
        <div className={`mb-12 ${isArabic ? "text-right" : "text-center"}`}>
          <h2 className="whitespace-nowrap text-[clamp(1.4rem,3vw,4.2rem)] font-bold italic text-black">
            {content.title}
          </h2>
        </div>
      </div>

      {/* Fade-Maske + Rows */}
      <div
        dir="ltr"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        {/* Row 1 */}
        <div className="mb-6 overflow-x-hidden py-4">
          <div
            ref={row1Ref}
            className="reviews-row-left flex"
            style={{ width: `${totalWidth * 2}px` }}
          >
            {content.reviews.map((r) => (
              <ReviewCard key={`a-${r.id}`} {...r} />
            ))}
            {content.reviews.map((r) => (
              <ReviewCard key={`b-${r.id}`} {...r} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-x-hidden py-4">
          <div
            ref={row2Ref}
            className="reviews-row-right flex"
            style={{ width: `${totalWidth * 2}px` }}
          >
            {reversedReviews.map((r) => (
              <ReviewCard key={`c-${r.id}`} {...r} />
            ))}
            {reversedReviews.map((r) => (
              <ReviewCard key={`d-${r.id}`} {...r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
