import Image from "next/image";
import Link from "next/link";
import {
  FaBook,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaCog,
  FaLaptop,
  FaLeaf,
  FaRoad,
  FaExclamationTriangle,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import { getUpcomingTerminLabel, type TermineApiResponse } from "@/lib/remote-data";
import type { TheoriekursContent } from "@/messages/theoriekurs";
import type { Locale } from "@/types/i18n";
import FaqAccordion from "@/components/shared/FaqAccordion";

type TheoriekursPageContentProps = {
  content: TheoriekursContent;
  locale: Locale;
  remoteData?: {
    termine?: TermineApiResponse | null;
  } | null;
};

const courseIcons = {
  road: FaRoad,
  warning: FaExclamationTriangle,
  users: FaUsers,
  leaf: FaLeaf,
  gear: FaCog,
} as const;

const advantageIcons = {
  laptop: FaLaptop,
  clock: FaClock,
  users: FaUsers,
} as const;

export default function TheoriekursPageContent({
  content,
  locale,
  remoteData,
}: TheoriekursPageContentProps) {
  const nextDate = getUpcomingTerminLabel(locale, remoteData?.termine);
  const announcementTitle = nextDate
    ? content.nextCourse.datedTitle.replace("{date}", nextDate)
    : content.nextCourse.fallbackTitle;

  return (
    <div className="mt-[100px] min-h-screen bg-gray-50 px-4 pt-20 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="rounded-2xl bg-gradient-to-r from-[#F5BB00] to-[#e5a800] p-6 text-center shadow-2xl md:p-8">
            <div className="mb-4 flex items-center justify-center">
              <FaCalendarAlt className="mr-3 text-3xl text-black" />
              <h2 className="text-2xl font-bold text-black md:text-3xl">
                {announcementTitle}
              </h2>
            </div>
            <p className="mb-6 text-lg text-black opacity-90 md:text-xl">
              {content.nextCourse.subtitle}
            </p>
            <Link
              href={`/${locale}/anmelden`}
              className="inline-flex items-center rounded-full border-2 border-black bg-black px-8 py-3 text-lg font-bold text-[#F5BB00] shadow-lg transition-all duration-300 hover:border-[#F5BB00] hover:bg-[#F5BB00] hover:text-black"
            >
              <FaUserCheck className="mr-2" />
              {content.nextCourse.buttonText}
            </Link>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
            {content.header.title}
            <span className="text-[#F5BB00]">{content.header.highlight}</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
            {content.header.subtitle}
          </p>
        </div>

        <div className="mb-24">
          <div className="rounded-2xl bg-white p-6 md:p-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00]">
                    <FaBook className="text-xl text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-black md:text-3xl">
                    {content.intro.title}
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-600">
                  {content.intro.description}
                </p>
              </div>

              <div className="flex justify-center">
                <div className="h-80 w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-400">
                  <Image
                    src={content.intro.imageSrc}
                    alt={content.intro.imageAlt}
                    width={900}
                    height={640}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
              {content.courseContents.title}
            </h2>
            <p className="text-lg text-gray-600">
              {content.courseContents.subtitle}
            </p>
          </div>

          <div className="overflow-x-auto px-8">
            <div className="flex min-w-max justify-center gap-8 pb-8">
              {content.courseContents.items.map((item) => {
                const Icon = courseIcons[item.icon];

                return (
                  <div key={item.title} className="flex-shrink-0 text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#F5BB00] text-black md:h-32 md:w-32">
                      <Icon className="text-3xl" />
                    </div>
                    <h3 className="max-w-24 text-sm font-bold leading-tight text-black md:max-w-32 md:text-base">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="rounded-2xl bg-white p-6 md:p-8">
            <h2 className="mb-8 text-center text-3xl font-bold text-black md:text-4xl">
              {content.advantages.title}
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {content.advantages.items.map((item) => {
                const Icon = advantageIcons[item.icon];

                return (
                  <div key={item.title} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5BB00]">
                      <Icon className="text-xl text-black" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-black">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-24">
          <FaqAccordion faq={content.faq} />
        </div>

        <div className="mb-24">
          <div className="rounded-2xl bg-gradient-to-r from-[#F5BB00] to-[#e5a800] p-6 text-center shadow-2xl md:p-8">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
              {content.price.title}
            </h2>
            <div className="mb-4 text-5xl font-bold text-black md:text-6xl">
              {content.price.amount}
            </div>
            <div className="mb-6 text-lg text-black opacity-90 md:text-xl">
              {content.price.description}
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-black">
              {content.price.details.map((detail) => (
                <div key={detail} className="flex items-center">
                  <FaCheckCircle className="mr-2" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href={`/${locale}/anmelden`}
            className="inline-block rounded-full bg-[#F5BB00] px-10 py-4 text-lg font-bold text-black shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            {content.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
