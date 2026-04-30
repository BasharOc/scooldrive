import { FaClock, FaDirections, FaEnvelope, FaPhone } from "react-icons/fa";
import type {
  SchoolLocationContent,
  SchoolLocationRuntimeData,
} from "@/components/Homepage/types";

type SchoolLocationSectionProps = {
  content: SchoolLocationContent;
  runtimeData?: SchoolLocationRuntimeData;
};

export default function SchoolLocationSection({
  content,
  runtimeData,
}: SchoolLocationSectionProps) {
  const info = content.schoolInfo;
  const hoursText = runtimeData?.hours || info.hours;
  const phoneEnabled = runtimeData?.phoneEnabled ?? true;

  return (
    <section className="bg-gray-50 py-10 md:py-14">
      <div className="mx-auto w-[95%] md:w-[80%] max-w-[1600px] px-4 md:px-8">
        {/* Header */}
        <div className="mx-auto mb-7 max-w-5xl text-center">
          <h2 className="text-[clamp(2rem,3vw,3.4rem)] font-bold italic uppercase leading-none text-[#1F2C3F]">
            {content.title}
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-[clamp(0.9rem,1vw,1.15rem)] leading-relaxed text-slate-500">
            {content.subtitle}
          </p>
        </div>

        {/* Content – Stack auf Mobile, Grid auf Desktop */}
        <div className="flex flex-col gap-6 xl:grid xl:grid-cols-[1.08fr_0.92fr] xl:items-start xl:gap-8">
          {/* Info Card */}
          <div className="rounded-[2rem] bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.1)] md:px-8 md:py-7">
            <h3 className="mb-3 text-[clamp(1.3rem,1.8vw,2.35rem)] font-bold text-black">
              {content.infoTitle}
            </h3>

            {/* Address */}
            <div className="mb-4">
              <div className="mb-2 text-[clamp(0.85rem,1.05vw,1.35rem)] font-bold uppercase text-[#F5BB00]">
                {content.addressTitle}
              </div>
              <div className="text-[clamp(0.9rem,1vw,1.2rem)] leading-snug text-slate-600">
                <div>{info.name}</div>
                <div>{info.street}</div>
                <div>{info.city}</div>
                <div>{info.country}</div>
              </div>
            </div>

            {/* Kontakt */}
            <div className="space-y-3">
              {phoneEnabled && (
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5BB00] text-sm text-black">
                    <FaPhone />
                  </div>
                  <div>
                    <div className="text-[clamp(0.75rem,0.9vw,1rem)] uppercase text-slate-400">
                      {content.contactLabels.phone}
                    </div>
                    <a
                      href={`tel:${info.phone}`}
                      className="text-[clamp(0.9rem,1vw,1.2rem)] font-bold text-slate-700 hover:underline"
                    >
                      {info.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5BB00] text-sm text-black">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-[clamp(0.75rem,0.9vw,1rem)] uppercase text-slate-400">
                    {content.contactLabels.email}
                  </div>
                  <a
                    href={`mailto:${info.email}`}
                    className="text-[clamp(0.9rem,1vw,1.2rem)] font-bold text-slate-700 hover:underline"
                  >
                    {info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5BB00] text-sm text-black">
                  <FaClock />
                </div>
                <div>
                  <div className="text-[clamp(0.75rem,0.9vw,1rem)] uppercase text-slate-400">
                    {content.contactLabels.hours}
                  </div>
                  <div className="text-[clamp(0.9rem,1vw,1.2rem)] font-bold text-slate-700">
                    {hoursText}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-5">
              <a
                href={info.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F5BB00] px-8 py-3 text-[clamp(0.9rem,1vw,1.15rem)] font-bold uppercase text-black transition-colors hover:bg-yellow-400 md:w-auto"
              >
                <FaDirections />
                {content.cta}
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-[2rem] bg-[#E9EDF4] shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
            <iframe
              src={info.mapEmbedUrl}
              className="h-[320px] w-full md:h-[420px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
