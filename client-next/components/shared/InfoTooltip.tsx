"use client";

import { useState, useEffect, useRef } from "react";
import { FaInfoCircle } from "react-icons/fa";

type Position =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "right"
  | "left";

type InfoTooltipProps = {
  content: React.ReactNode;
  position?: Position;
  className?: string;
};

const popupClasses: Record<Position, string> = {
  "top-right": "bottom-full right-0 mb-3",
  "top-left": "bottom-full left-0 mb-3",
  "bottom-right": "top-full right-0 mt-3",
  "bottom-left": "top-full left-0 mt-3",
  right: "left-full bottom-0 ml-3",
  left: "right-full bottom-0 mr-3",
};

// CSS-border triangles — zero-size element, purely visual
const tailClasses: Record<Position, string> = {
  "top-right":
    "absolute -bottom-3 right-4 h-0 w-0 border-x-[10px] border-x-transparent border-t-[12px] border-t-white",
  "top-left":
    "absolute -bottom-3 left-4 h-0 w-0 border-x-[10px] border-x-transparent border-t-[12px] border-t-white",
  "bottom-right":
    "absolute -top-3 right-4 h-0 w-0 border-x-[10px] border-x-transparent border-b-[12px] border-b-white",
  "bottom-left":
    "absolute -top-3 left-4 h-0 w-0 border-x-[10px] border-x-transparent border-b-[12px] border-b-white",
  right:
    "absolute bottom-4 -left-3 h-0 w-0 border-y-[10px] border-y-transparent border-r-[12px] border-r-white",
  left: "absolute bottom-4 -right-3 h-0 w-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-white",
};

export default function InfoTooltip({
  content,
  position = "top-right",
  className,
}: InfoTooltipProps) {
  const [hoverOpen, setHoverOpen] = useState(false);
  const [tapOpen, setTapOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isOpen = hoverOpen || tapOpen;

  // Hide on scroll (mobile)
  useEffect(() => {
    if (!tapOpen) return;
    const close = () => setTapOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [tapOpen]);

  // Hide on outside click / touch
  useEffect(() => {
    if (!tapOpen) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setTapOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [tapOpen]);

  return (
    // Outer div carries the positioning className (e.g. "absolute top-[25%] -right-5")
    // without conflicting with the inner relative context.
    <div className={className}>
      <div ref={ref} className="relative inline-flex">
        <button
          type="button"
          aria-label="Info"
          className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#F5BB00] shadow-md transition-colors duration-200 hover:bg-[#F5BB00] hover:text-black ${
            tapOpen ? "bg-[#F5BB00] text-black" : "bg-white text-[#F5BB00]"
          }`}
          onMouseEnter={() => setHoverOpen(true)}
          onMouseLeave={() => setHoverOpen(false)}
          onClick={(e) => {
            e.stopPropagation();
            setTapOpen((v) => !v);
          }}
        >
          <FaInfoCircle className="text-lg" />
        </button>

        {isOpen && (
          <div
            className={`absolute z-50 w-72 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/10 ${popupClasses[position]}`}
          >
            <div aria-hidden="true" className={tailClasses[position]} />
            {content}
          </div>
        )}
      </div>
    </div>
  );
}
