"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { WhatsAppButtonContent } from "@/components/WhatsAppButton/types";

type WhatsAppButtonProps = {
  content: WhatsAppButtonContent;
  enabled?: boolean;
  phoneNumber?: string;
};

const DEFAULT_PHONE_NUMBER = "+4917626863142";

export default function WhatsAppButton({
  content,
  enabled = true,
  phoneNumber = DEFAULT_PHONE_NUMBER,
}: WhatsAppButtonProps) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      return;
    }

    let timeoutId: number | null = null;
    const interval = window.setInterval(() => {
      setIsExpanded(true);

      timeoutId = window.setTimeout(() => {
        setIsExpanded(false);
      }, 3000);
    }, 10000);

    return () => {
      window.clearInterval(interval);
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [isMobile]);

  if (!enabled || pathname?.split("/")[2] === "anmelden") {
    return null;
  }

  const handleWhatsAppClick = () => {
    const normalizedPhone = phoneNumber.replace("+", "");
    const url = `https://wa.me/${normalizedPhone}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsExpanded(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 sm:right-10 lg:right-20">
      <motion.div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              initial={{ opacity: 0, width: 0, x: 20 }}
              animate={{ opacity: 1, width: "auto", x: 0 }}
              exit={{ opacity: 0, width: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute right-0 top-1/2 mr-16 -translate-y-1/2 overflow-hidden rounded-lg bg-[#25D366] shadow-xl"
            >
              <div className="whitespace-nowrap px-4 py-3">
                <div className="text-sm leading-tight font-medium text-white">
                  <div>{content.question}</div>
                  <div>{content.message}</div>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2">
                <div className="h-0 w-0 border-b-4 border-l-8 border-b-transparent border-l-[#25D366] border-t-4 border-t-transparent" />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={handleWhatsAppClick}
          className="group flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:shadow-2xl"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 20px 40px rgba(37, 211, 102, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
          aria-label="Open WhatsApp chat"
        >
          <svg
            className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          <div className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        </motion.button>
      </motion.div>
    </div>
  );
}
