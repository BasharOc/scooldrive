import { FaClock, FaDirections, FaEnvelope, FaPhone } from "react-icons/fa";
import type { SchoolLocationContent } from "@/components/Homepage/types";

type SchoolLocationSectionProps = {
  content: SchoolLocationContent;
};

export default function SchoolLocationSection({
  content,
}: SchoolLocationSectionProps) {
  const info = content.schoolInfo;

  return (
    <section className="bg-gray-50 py-10 md:py-14">
      <div className="mx-auto w-[80%] max-w-[1600px] px-4 md:px-8">
        {/* Header */}
        <div className="mx-auto mb-7 max-w-5xl text-center">
          <h2 className="text-[clamp(2rem,3vw,3.4rem)] font-bold italic uppercase leading-none text-[#1F2C3F]">
            {content.title}
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-[clamp(0.9rem,1vw,1.15rem)] leading-relaxed text-slate-500">
            {content.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="grid items-start gap-8 xl:grid-cols-[1.08fr_0.92fr]">
          {/* Info Section */}
          <div className="rounded-[2rem] bg-white px-8 py-7 shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
            <h3 className="mb-1 text-[clamp(1.55rem,1.8vw,2.35rem)] font-bold text-black">
              {content.infoTitle}
            </h3>

            {/* Address */}
            <div className="mb-4">
              <div className="mb-4 text-[clamp(1rem,1.05vw,1.35rem)] font-bold uppercase text-[#F5BB00]">
                {content.addressTitle}
              </div>
              <div className="space-y-0 text-[clamp(0.95rem,1vw,1.2rem)] leading-relaxed text-slate-600">
                <div>{info.name}</div>
                <div>{info.street}</div>
                <div>{info.city}</div>
                <div>{info.country}</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5BB00] text-sm text-black">
                  <FaPhone />
                </div>
                <div>
                  <div className="text-[clamp(0.85rem,0.9vw,1rem)] uppercase text-slate-400">
                    {content.contactLabels.phone}
                  </div>
                  <a
                    href={`tel:${info.phone}`}
                    className="text-[clamp(0.95rem,1vw,1.2rem)] font-bold text-slate-700 hover:underline"
                  >
                    {info.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5BB00] text-sm text-black">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-[clamp(0.85rem,0.9vw,1rem)] uppercase text-slate-400">
                    {content.contactLabels.email}
                  </div>
                  <a
                    href={`mailto:${info.email}`}
                    className="text-[clamp(0.95rem,1vw,1.2rem)] font-bold text-slate-700 hover:underline"
                  >
                    {info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5BB00] text-sm text-black">
                  <FaClock />
                </div>
                <div>
                  <div className="text-[clamp(0.85rem,0.9vw,1rem)] uppercase text-slate-400">
                    {content.contactLabels.hours}
                  </div>
                  <div className="text-[clamp(0.95rem,1vw,1.2rem)] font-bold text-slate-700">
                    {info.hours}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <a
                href={info.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#F5BB00] px-8 py-3 text-[clamp(0.95rem,1vw,1.15rem)] font-bold uppercase text-black transition-colors hover:bg-yellow-400"
              >
                <FaDirections />
                {content.cta}
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="overflow-hidden rounded-[2rem] bg-[#E9EDF4] shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
            <iframe
              src={info.mapEmbedUrl}
              className="h-[420px] w-full"
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
