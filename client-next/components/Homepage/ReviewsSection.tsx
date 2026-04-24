"use client";

import { motion } from "framer-motion";
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
    <article className="mx-4 w-[400px] flex-shrink-0 rounded-[1.7rem] bg-white p-6 text-black shadow-[0_10px_28px_rgba(15,23,42,0.12)]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold uppercase text-black">{name}</h3>
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
  const cardWidth = 432;
  const totalWidth = cardWidth * content.reviews.length;
  const reversedReviews = [...content.reviews].reverse();
  const isArabic = locale === "ar";

  return (
    <section className="overflow-hidden bg-gray-50 py-16">
      <div className="mx-auto w-[80%] max-w-[1920px]">
        {/* Header */}
        <div className={`mb-12 text-center ${isArabic ? "text-right" : ""}`}>
          <h2 className="text-[clamp(2.4rem,3vw,4.2rem)] font-bold italic text-black">
            {content.title}
          </h2>
        </div>
      </div>

      {/* Floating Reviews Container */}
      <div className="relative" dir="ltr">
        {/* First Row - Moving right-to-left */}
        <div className="mb-8">
          <motion.div
            className="flex"
            dir="ltr"
            animate={{ x: [0, -totalWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 72,
                ease: "linear",
              },
            }}
            style={{ width: `${totalWidth * 2}px` }}
          >
            {content.reviews.map((review) => (
              <ReviewCard key={`first-${review.id}`} {...review} />
            ))}
            {content.reviews.map((review) => (
              <ReviewCard key={`second-${review.id}`} {...review} />
            ))}
          </motion.div>
        </div>

        {/* Second Row - Moving left-to-right */}
        <div>
          <motion.div
            className="flex"
            dir="ltr"
            animate={{ x: [-totalWidth, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 78,
                ease: "linear",
              },
            }}
            style={{ width: `${totalWidth * 2}px` }}
          >
            {reversedReviews.map((review) => (
              <ReviewCard key={`third-${review.id}`} {...review} />
            ))}
            {reversedReviews.map((review) => (
              <ReviewCard key={`fourth-${review.id}`} {...review} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
