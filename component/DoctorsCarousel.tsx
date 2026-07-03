"use client";

import { useEffect, useRef } from "react";

const doctors = [
  {
    name: "Dr. Shreevarma",
    credentials: "BAMS, MSc",
    image: "/shreevarma-1.webp",
    experience: "25+ Years of Clinical Experience",
    role: "Ayurveda Physician",
    highlights: [
      "Expert in Chronic Disease Management",
      "Personalized Ayurvedic Treatment",
      "98% Positive Patient Feedback",
    ],
  },
  {
    name: "Dr. Gowthaman",
    credentials: "BAMS",
    image: "/Gowtham-1.webp",
    experience: "24+ Years of Experience",
    role: "Ayurveda Physician",
    highlights: [
      "Holistic Health & Wellness Expert",
      "Natural Treatment Plans",
      "96% Positive Patient Feedback",
    ],
  },
  {
    name: "Dr. Jayaroopa",
    credentials: "BSMS, MD",
    image: "/jayaroopa-1.webp",
    experience: "12+ Years of Experience",
    role: "Siddha Physician",
    highlights: [
      "Women's Health & Lifestyle Disorders",
      "Traditional Siddha Treatments",
      "98% Positive Patient Feedback",
    ],
  },
  {
    name: "Dr. Hemala",
    credentials: "BAMS",
    image: "/Dr.Hemala-1.webp",
    experience: "10+ Years of Experience",
    role: "Ayurveda Physician",
    highlights: [
      "Lifestyle & Preventive Care",
      "Personalized Ayurvedic Consultation",
      "96% Positive Patient Feedback",
    ],
  },
];

function getInitials(name: string) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function DoctorsCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const getGroupWidth = () => carousel.scrollWidth / 3;
    carousel.scrollLeft = getGroupWidth();

    const tick = () => {
      const groupWidth = getGroupWidth();

      if (!isPausedRef.current && groupWidth > 0) {
        carousel.scrollLeft += 0.45;
      }

      if (carousel.scrollLeft >= groupWidth * 2) {
        carousel.scrollLeft -= groupWidth;
      } else if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft += groupWidth;
      }

      animationRef.current = requestAnimationFrame(tick);
    };

    animationRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const scrollDoctors = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "left" ? -370 : 370,
      behavior: "smooth",
    });
  };

  return (
    <section id="doctors" className="scroll-mt-24 overflow-hidden px-4 py-11 sm:px-8 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="sv-animate-top mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6f3b2f] sm:text-sm sm:tracking-[0.22em]">
            Expert Care
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#241c18] sm:text-5xl">
            Meet Our Expert Doctors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#6b625b] sm:text-base">
            Consult experienced Ayurveda and Siddha physicians through secure
            online appointments.
          </p>
        </div>

        <div
          className="sv-animate-left sv-delay-1 relative overflow-hidden pb-2"
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
          }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#fbf6ee] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#fbf6ee] to-transparent sm:w-24" />

          <button
            type="button"
            aria-label="Previous doctors"
            onClick={() => scrollDoctors("left")}
            className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8dac8] bg-white/95 text-[#6f3b2f] shadow-[0_10px_24px_rgba(66,45,32,0.16)] transition hover:bg-[#6f3b2f] hover:text-white sm:left-3 sm:h-12 sm:w-12"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next doctors"
            onClick={() => scrollDoctors("right")}
            className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8dac8] bg-white/95 text-[#6f3b2f] shadow-[0_10px_24px_rgba(66,45,32,0.16)] transition hover:bg-[#6f3b2f] hover:text-white sm:right-3 sm:h-12 sm:w-12"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div
            ref={carouselRef}
            className="overflow-x-auto scroll-smooth px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex w-max">
              {[0, 1, 2].map((groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex shrink-0 gap-6 pr-6"
                  aria-hidden={groupIndex !== 1}
                >
                  {doctors.map((doctor) => (
                    <article
                      key={`${doctor.name}-${groupIndex}`}
                      className="flex w-[290px] shrink-0 flex-col overflow-hidden rounded-lg border border-[#e8dac8] bg-white shadow-[0_18px_45px_rgba(66,45,32,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(66,45,32,0.14)] sm:w-[340px]"
                    >
                      <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#efe2d3]">
                        <div className="absolute inset-0 flex items-center justify-center bg-[#6f3b2f] text-5xl font-extrabold text-white/90">
                          {getInitials(doctor.name)}
                        </div>
                        <img
                          src={doctor.image}
                          alt={`${doctor.name} profile photo`}
                          className="relative z-[1] h-full w-full object-cover object-top transition duration-500 hover:scale-105"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                        <div className="absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-[#241c18]/75 to-transparent" />
                        <p className="absolute bottom-4 left-4 z-[3] rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-[#6f3b2f] shadow-sm">
                          {doctor.experience}
                        </p>
                      </div>

                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <div className="flex items-center justify-between gap-2.5">
                          <h3 className="min-w-0 flex-1 whitespace-nowrap text-[21px] font-extrabold leading-tight text-[#241c18] sm:text-[23px]">
                            {doctor.name}
                          </h3>
                          <div className="shrink-0 rounded-full bg-[#6f3b2f]/10 px-2.5 py-1 text-[11px] font-bold leading-5 text-[#6f3b2f] sm:text-xs">
                            {doctor.credentials}
                          </div>
                        </div>

                        <p className="mt-2 text-sm font-semibold text-[#6b625b]">
                          {doctor.role}
                        </p>

                        <ul className="mt-5 flex flex-1 flex-col gap-3 border-t border-[#eee2d4] pt-5 text-sm leading-5 text-[#4f4a45]">
                          {doctor.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3">
                              <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#6f3b2f]/12">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#6f3b2f]" />
                              </span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <a
          href="#book"
          className="sv-animate-bottom sv-delay-2 mx-auto mt-9 table rounded-full bg-[#6f3b2f] px-8 py-3.5 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_12px_24px_rgba(111,59,47,0.22)] transition-colors hover:bg-[#573026]"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
}
