"use client";

import Image from "next/image";
import { useState } from "react";

type IconProps = {
  className?: string;
};

const LeafIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 4 13c0-4.5 4-8 11-9 1 7-2 11-4 12" />
    <path d="M4 13c3.5 0 6.5-1.5 9-4" />
  </svg>
);

const PulseIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 12h4l2-7 4 14 2-7h6" />
  </svg>
);

const GlobeIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
  </svg>
);

const CertifiedDoctorIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M4 22a8 8 0 0 1 16 0" />
    <path d="M12 16v4" />
    <path d="M10 18h4" />
  </svg>
);

const LockIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const LaptopIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="4" width="16" height="11" rx="1.5" />
    <path d="M2 19h20" />
  </svg>
);

const faqs = [
  {
    Icon: LeafIcon,
    q: "25+ Years of Clinical Excellence",
    a: "Trusted by thousands of patients with decades of experience in authentic Ayurvedic healthcare.",
  },
  {
    Icon: PulseIcon,
    q: "Traditional Nadi Pariksha Expertise",
    a: "Our doctors combine traditional pulse diagnosis with modern online consultation for accurate health assessment.",
  },
  {
    Icon: GlobeIcon,
    q: "Trusted Across 40+ Countries",
    a: "Patients from around the world choose Shreevarma for authentic Ayurvedic and Siddha care.",
  },
  {
    Icon: CertifiedDoctorIcon,
    q: "Certified Medical Professionals",
    a: "Consult qualified BAMS and MD-certified Ayurveda & Siddha doctors.",
  },
  {
    Icon: LockIcon,
    q: "Complete Privacy & Data Security",
    a: "Your consultation and medical information remain 100% confidential.",
  },
  {
    Icon: LaptopIcon,
    q: "Consult from Anywhere",
    a: "Skip travel and waiting time. Receive expert guidance from your home through secure online consultations.",
  },
];

const ArrowIcon = () => (
  <svg
    className="h-6 w-6 text-white sm:h-7 sm:w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const QuestionIcon = () => (
  <svg
    className="h-5 w-5 text-[#6f3b2f] sm:h-[22px] sm:w-[22px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1.5 1.1-1.5 2.2" />
    <path d="M12 17.5h.01" />
  </svg>
);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section id="faq" className="scroll-mt-24 px-4 py-11 sm:px-8 sm:py-14 lg:px-10">
      <div className="sv-animate-top mx-auto mb-7 max-w-3xl text-center sm:mb-10">
        <h2 className="text-2xl font-extrabold leading-tight text-[#241c18] sm:text-5xl">
          Why Choose Shreevarma{" "}
          <span className="text-[#6f3b2f]">Online Consultation?</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="sv-animate-left relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#e8dac8] shadow-[0_18px_42px_rgba(66,45,32,0.12)]">
            <Image
              src="/images2.png"
              alt="Shreevarma doctor consulting a patient"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 420px, 90vw"
            />
          </div>

          <div className="absolute -right-5 -top-5 h-24 w-24 sm:-right-6 sm:-top-6 sm:h-28 sm:w-28">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full [animation:spin_14s_linear_infinite]"
            >
              <defs>
                <path
                  id="faqCirclePath"
                  d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
              </defs>
              <circle cx="50" cy="50" r="48" fill="#6f3b2f" />
              <text fill="#f3d7bd" fontSize="7.4" fontWeight="700" letterSpacing="1.5">
                <textPath href="#faqCirclePath" startOffset="0%">
                  Book a Consultation &#8226; Book a Consultation &#8226;
                </textPath>
              </text>
            </svg>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <ArrowIcon />
            </div>
          </div>

          <div className="absolute -bottom-5 left-4 flex max-w-[230px] items-center gap-3 rounded-xl bg-[#6f3b2f] px-4 py-3.5 shadow-[0_12px_28px_rgba(111,59,47,0.28)] sm:left-6 sm:max-w-[260px] sm:gap-4 sm:px-5 sm:py-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white sm:h-11 sm:w-11">
              <QuestionIcon />
            </span>
            <p className="text-xs font-extrabold leading-snug text-white sm:text-sm">
              Your Health Questions,
              <br />
              Answered by Experts
            </p>
          </div>
        </div>

        <div className="sv-animate-right sv-delay-2 space-y-3.5 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-xl border transition ${
                  isOpen
                    ? "border-[#e4d6c8] bg-[#f7f4f0]"
                    : "border-[#e8dac8] bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 sm:gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6f3b2f] sm:h-10 sm:w-10">
                      <faq.Icon className="h-4.5 w-4.5 text-white sm:h-5 sm:w-5" />
                    </span>
                    <span className="text-sm font-extrabold text-[#241c18] sm:text-base">
                      {faq.q}
                    </span>
                  </span>
                  <span className="shrink-0 text-2xl font-bold leading-none text-[#6f3b2f]">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="flex gap-2.5 text-sm leading-6 text-[#6b625b] sm:text-base sm:leading-7">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6f3b2f]" />
                      <span>{faq.a}</span>
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
