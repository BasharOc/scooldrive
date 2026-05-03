import Link from "next/link";
import type { Locale } from "@/types/i18n";

type MaximalCapacityPageProps = {
  title: string;
  subtitle: string;
  message: string;
  button: string;
  locale: Locale;
};

export default function MaximalCapacityPage({
  button,
  locale,
  message,
  subtitle,
  title,
}: MaximalCapacityPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#F5BB00]">
            <svg
              className="h-12 w-12 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-black">{title}</h1>
            <h2 className="text-xl font-semibold text-[#F5BB00]">{subtitle}</h2>
          </div>
          <h3 className="text-lg leading-relaxed text-gray-600">{message}</h3>
          <Link
            href={`/${locale}`}
            className="block w-full rounded-lg bg-[#F5BB00] px-8 py-4 font-semibold text-black transition-colors duration-200 hover:bg-[#F5BB00]/90"
          >
            <h4>{button}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
