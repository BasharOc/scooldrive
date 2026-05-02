import Image from "next/image";
import Link from "next/link";
import {
  FaBolt,
  FaBook,
  FaCalendarAlt,
  FaCar,
  FaCheckCircle,
  FaClock,
  FaGraduationCap,
  FaHandshake,
  FaIdCard,
  FaLightbulb,
  FaRocket,
  FaStar,
  FaTrophy,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import type { PreiseApiResponse } from "@/lib/remote-data";
import type { IntensivkurseContent } from "@/messages/intensivkurse";
import type { Locale } from "@/types/i18n";
import FaqAccordion from "@/components/shared/FaqAccordion";

type IntensivkursePageContentProps = {
  content: IntensivkurseContent;
  locale: Locale;
  remoteData?: {
    preise?: PreiseApiResponse | null;
  } | null;
};

const advantageIcons = {
  bolt: FaBolt,
  bulb: FaLightbulb,
  handshake: FaHandshake,
  calendar: FaCalendarAlt,
} as const;

const stepIcons = {
  "user-plus": FaUserPlus,
  book: FaBook,
  car: FaCar,
  "graduation-cap": FaGraduationCap,
  trophy: FaTrophy,
} as const;

export default function IntensivkursePageContent({
  content,
  locale,
  remoteData,
}: IntensivkursePageContentProps) {
  const packagePrice =
    remoteData?.preise?.intensivkursPreis != null
      ? `${remoteData.preise.intensivkursPreis}€`
      : content.pricing.fallbackPrice;

  return (
    <div className="mt-[80px] min-h-screen bg-gray-50 px-4 pt-20 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
            {content.header.title.split(" ")[0]}
            <span className="text-[#F5BB00]">
              {content.header.title.split(" ").slice(1).join(" ")}
            </span>
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
                    <FaRocket className="text-xl text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-black md:text-3xl">
                    {content.intro.title}
                  </h2>
                </div>
                <p className="mb-6 text-lg leading-relaxed text-gray-600">
                  {content.intro.description}
                </p>

                <div className="mb-4 flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5BB00]">
                    <FaUsers className="text-sm text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black">
                    {content.intro.suitableTitle}
                  </h3>
                </div>
                <p className="leading-relaxed text-gray-600">
                  {content.intro.suitableText}
                </p>
              </div>

              <div className="flex justify-center">
                <div className="h-80 w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 via-red-500 to-pink-600">
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
          <div className="rounded-2xl bg-white p-6 md:p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                {content.advantages.title}
              </h2>
              <p className="text-lg text-gray-600">
                {content.advantages.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {content.advantages.items.map((item) => {
                const Icon = advantageIcons[item.icon];

                return (
                  <div
                    key={item.title}
                    className="rounded-xl bg-gray-50 p-6 text-center hover:shadow-lg"
                  >
                    <div className={`mb-4 flex justify-center ${item.colorClass}`}>
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
              {content.process.title}
            </h2>
            <p className="text-lg text-gray-600">{content.process.subtitle}</p>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute top-0 bottom-0 left-8 z-0 w-0.5 bg-gray-200" />
            <div className="relative mb-8 flex items-center">
              <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5BB00] shadow-lg">
                <span className="text-sm font-bold text-black">
                  {content.process.start}
                </span>
              </div>
            </div>

            {content.process.steps.map((step, index) => {
              const Icon = stepIcons[step.icon];

              return (
                <div
                  key={step.title}
                  className="relative mb-8 flex items-center last:mb-0"
                >
                  <div className="absolute left-8 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-[#F5BB00] shadow-lg" />

                  <div className="ml-20 flex-1">
                    <div className="group rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-start space-x-6">
                        <div className="flex flex-shrink-0 flex-col items-center">
                          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5BB00] text-xl font-bold text-black transition-transform duration-300 group-hover:scale-110">
                            {index + 1}
                          </div>
                          <div className="text-[#F5BB00] transition-transform duration-300 group-hover:scale-110">
                            <Icon className="text-2xl md:text-3xl" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="mb-3 text-xl font-bold text-black transition-colors duration-300 group-hover:text-[#F5BB00] md:text-2xl">
                            {step.title}
                          </h3>
                          <p className="mb-2 text-base leading-relaxed text-gray-600 md:text-lg">
                            {step.description}
                          </p>
                          <p className="text-sm italic text-gray-500">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-6 md:hidden">
            {content.process.steps.map((step, index) => {
              const Icon = stepIcons[step.icon];

              return (
                <div key={step.title} className="rounded-2xl bg-white p-6 shadow-lg">
                  <div className="mb-4 flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00] text-lg font-bold text-black">
                      {index + 1}
                    </div>
                    <div className="text-[#F5BB00]">
                      <Icon className="text-2xl" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-black">{step.title}</h3>
                  <p className="mb-2 text-gray-600">{step.description}</p>
                  <p className="text-sm italic text-gray-500">{step.details}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-24">
          <div className="rounded-2xl bg-white p-6 md:p-8">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00]">
                <FaIdCard className="text-xl text-black" />
              </div>
              <h2 className="text-3xl font-bold text-black md:text-4xl">
                {content.requirements.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {content.requirements.subtitle}
                </h3>
                <div className="space-y-3">
                  {content.requirements.items.map((item) => (
                    <div key={item} className="flex items-start">
                      <FaCheckCircle className="mt-1 mr-3 flex-shrink-0 text-[#F5BB00]" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-orange-50 p-6">
                <div className="mb-4 flex items-center">
                  <FaClock className="mr-3 text-xl text-orange-500" />
                  <h3 className="text-xl font-bold text-orange-800">
                    {content.requirements.noteTitle}
                  </h3>
                </div>
                <p className="leading-relaxed text-orange-700">
                  {content.requirements.noteText}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="rounded-2xl bg-white p-6 md:p-8">
            <div className="mb-8 flex items-center justify-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00]">
                <FaClock className="text-xl text-black" />
              </div>
              <h2 className="text-3xl font-bold text-black md:text-4xl">
                {content.pricing.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-800">
                  {content.pricing.includedTitle}
                </h3>
                <div className="space-y-4">
                  {content.pricing.services.map((service) => (
                    <div key={service} className="flex items-start">
                      <FaCheckCircle className="mt-1 mr-3 flex-shrink-0 text-[#F5BB00]" />
                      <span className="text-gray-600">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-[#F5BB00] to-[#e5a800] p-6 text-center">
                <FaStar className="mx-auto mb-4 text-4xl text-black" />
                <h3 className="mb-4 text-2xl font-bold text-black">
                  {content.pricing.packageTitle}
                </h3>
                <div className="mb-4 text-4xl font-bold text-black">
                  {packagePrice}
                </div>
                <p className="mb-6 text-black opacity-90">
                  {content.pricing.packageDescription}
                </p>
                <div className="space-y-2 text-sm text-black">
                  {content.pricing.extras.map((extra) => (
                    <p key={extra}>{extra}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <FaqAccordion faq={content.faq} />
        </div>

        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl">
            {content.cta.title}
          </h2>
          <Link
            href={`/${locale}/anmelden`}
            className="inline-block rounded-full bg-[#F5BB00] px-10 py-4 text-lg font-bold text-black shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            {content.cta.button}
          </Link>
          <p className="mt-6 text-lg text-gray-600">{content.cta.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
