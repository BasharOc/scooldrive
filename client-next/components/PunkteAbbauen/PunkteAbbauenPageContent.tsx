import Image from "next/image";
import {
  FaBook,
  FaCar,
  FaCarCrash,
  FaCheckCircle,
  FaExclamationTriangle,
  FaEye,
  FaGraduationCap,
  FaInfoCircle,
  FaQuestionCircle,
  FaRoad,
  FaRoute,
  FaShieldAlt,
  FaStar,
  FaStopwatch,
  FaTrophy,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import type { PunkteAbbauenContent } from "@/messages/punkte-abbauen";
import FaqAccordion from "@/components/shared/FaqAccordion";

type PunkteAbbauenPageContentProps = {
  content: PunkteAbbauenContent;
};

const structureIcons = {
  "graduation-cap": FaGraduationCap,
  route: FaRoute,
  users: FaUsers,
  stopwatch: FaStopwatch,
} as const;

const processIcons = {
  "user-plus": FaUserPlus,
  book: FaBook,
  car: FaCar,
  "graduation-cap": FaGraduationCap,
  trophy: FaTrophy,
} as const;

const topicIcons = {
  shield: FaShieldAlt,
  warning: FaExclamationTriangle,
  road: FaRoad,
  eye: FaEye,
} as const;

const WHATSAPP_SVG_PATH =
  "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z";

export default function PunkteAbbauenPageContent({
  content,
}: PunkteAbbauenPageContentProps) {
  return (
    <div className="mt-[80px] min-h-screen bg-gray-50 px-4 pt-20 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-[#F5BB00]">ASF</span>{" "}
            <span className="text-black">AUFBAUSEMINAR</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
            {content.header.subtitle}
          </p>
        </div>

        <div className="mb-24">
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00]">
                    <FaInfoCircle className="text-xl text-black" />
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
                    <FaQuestionCircle className="text-sm text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black">
                    {content.intro.whenTitle}
                  </h3>
                </div>
                <p className="leading-relaxed text-gray-600">
                  {content.intro.whenText}
                </p>
              </div>

              <div className="flex justify-center">
                <div className="h-80 w-full max-w-md overflow-hidden rounded-2xl">
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
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                {content.violations.title}
              </h2>
              <p className="text-lg text-gray-600">{content.violations.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-gray-100 p-6">
                <div className="mb-4 flex items-center">
                  <FaCarCrash className="mr-3 text-xl text-gray-700" />
                  <h3 className="font-bold text-gray-800">
                    {content.violations.aViolations.title}
                  </h3>
                </div>
                <p className="mb-4 text-sm text-gray-600">
                  {content.violations.aViolations.subtitle}
                </p>
                <ul className="space-y-2">
                  {content.violations.aViolations.examples.map((example) => (
                    <li key={example} className="flex items-center text-gray-700">
                      <FaCheckCircle className="mr-2 flex-shrink-0 text-sm text-[#F5BB00]" />
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-gray-100 p-6">
                <div className="mb-4 flex items-center">
                  <FaExclamationTriangle className="mr-3 text-xl text-gray-600" />
                  <h3 className="font-bold text-gray-800">
                    {content.violations.bViolations.title}
                  </h3>
                </div>
                <p className="mb-4 text-sm text-gray-600">
                  {content.violations.bViolations.subtitle}
                </p>
                <ul className="space-y-2">
                  {content.violations.bViolations.examples.map((example) => (
                    <li key={example} className="flex items-center text-gray-700">
                      <FaCheckCircle className="mr-2 flex-shrink-0 text-sm text-[#F5BB00]" />
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                {content.structure.title}
              </h2>
              <p className="text-lg text-gray-600">{content.structure.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {content.structure.cards.map((card) => {
                const Icon = structureIcons[card.icon];

                return (
                  <div key={card.title} className="rounded-xl bg-gray-100 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00]">
                      <Icon className="text-black" />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-800">{card.title}</h3>
                    <p className="mb-2 text-sm text-gray-600">{card.description}</p>
                    {card.meta ? (
                      <p className="mb-2 text-xs text-gray-500">{card.meta}</p>
                    ) : null}
                    {card.badge ? (
                      <span className="rounded-full bg-[#F5BB00] px-3 py-1 text-xs font-bold text-black">
                        {card.badge}
                      </span>
                    ) : null}
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
            <div className="absolute top-0 bottom-0 left-8 z-0 w-0.5 bg-gray-300" />

            {content.process.steps.map((step, index) => {
              const Icon = processIcons[step.icon];

              return (
                <div
                  key={step.title}
                  className="relative mb-8 flex items-center last:mb-0"
                >
                  <div className="absolute left-8 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-[#F5BB00] shadow-lg" />

                  <div className="ml-20 flex-1">
                    <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-start space-x-6">
                        <div className="flex flex-shrink-0 flex-col items-center">
                          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5BB00] text-xl font-bold text-black transition-transform duration-300 group-hover:scale-110">
                            {index + 1}
                          </div>
                          <div className="text-gray-600 transition-colors duration-300 group-hover:text-[#F5BB00]">
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
                          <p className="text-sm italic text-gray-500">{step.details}</p>
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
              const Icon = processIcons[step.icon];

              return (
                <div key={step.title} className="rounded-2xl bg-white p-6 shadow-lg">
                  <div className="mb-4 flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00] text-lg font-bold text-black">
                      {index + 1}
                    </div>
                    <div className="text-gray-600">
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
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                {content.topics.title}
              </h2>
              <p className="text-lg text-gray-600">{content.topics.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {content.topics.items.map((topic) => {
                const Icon = topicIcons[topic.icon];

                return (
                  <div
                    key={topic.title}
                    className="rounded-xl bg-gray-100 p-6 text-center transition-shadow duration-300 hover:shadow-lg"
                  >
                    <div className="mb-4 flex justify-center text-[#F5BB00]">
                      <Icon className="text-2xl" />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-800">{topic.title}</h3>
                    <p className="text-sm text-gray-600">{topic.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                {content.advantages.title}
              </h2>
              <p className="text-lg text-gray-600">{content.advantages.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {content.advantages.items.map((item) => (
                <div key={item.title} className="rounded-xl bg-gray-100 p-6 text-center">
                  <h3 className="mb-2 font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                  {content.requirements.title}
                </h2>
                <p className="mb-6 text-lg text-gray-600">{content.requirements.subtitle}</p>
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
                  <FaExclamationTriangle className="mr-3 text-xl text-orange-500" />
                  <h3 className="text-xl font-bold text-orange-800">
                    {content.requirements.warningTitle}
                  </h3>
                </div>
                <p className="leading-relaxed text-orange-700">
                  {content.requirements.warningText}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                  {content.pricing.title}
                </h2>
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
                  {content.pricing.price}
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

        <div className="rounded-2xl bg-gradient-to-r from-black to-gray-800 p-8 text-center md:p-12">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg">
              <svg className="h-9 w-9 text-white" fill="currentColor" viewBox="0 0 448 512">
                <path d={WHATSAPP_SVG_PATH} />
              </svg>
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {content.cta.title}
          </h2>
          <p className="mb-8 text-lg text-gray-300 md:text-xl">
            {content.cta.subtitle}
          </p>
          <a
            href="https://wa.me/4917626863142"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-10 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] active:scale-95"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512">
              <path d={WHATSAPP_SVG_PATH} />
            </svg>
            {content.cta.whatsappButton}
          </a>
        </div>
      </div>
    </div>
  );
}
