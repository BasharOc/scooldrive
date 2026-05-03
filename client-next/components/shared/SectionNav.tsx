export type SectionNavItem = {
  id: string;
  label: string;
};

export type SectionNavContent = {
  ariaLabel: string;
  items: readonly SectionNavItem[];
};

type SectionNavProps = {
  content: SectionNavContent;
  className?: string;
};

export default function SectionNav({ content, className = "" }: SectionNavProps) {
  return (
    <nav
      aria-label={content.ariaLabel}
      className={`border-b border-gray-200 bg-white ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max items-center justify-start gap-2 md:min-w-0 md:justify-center md:gap-3">
            {content.items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="shrink-0 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 transition-colors hover:border-[#F5BB00] hover:bg-[#F5BB00] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5BB00] md:px-5"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
