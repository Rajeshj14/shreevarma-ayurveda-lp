"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    title: "Joint & Body Pain",
    description:
      "Bone and joint diseases affect the skeletal system and the tissues that connect, support, and protect the body.",
    image: "/Bone-Joints.webp",
    facts: ["Osteoarthritis", "Rheumatoid Arthritis", "Osteoporosis"],
  },
  {
    title: "Digestive Disorders",
    description:
      "Support for acidity, bloating, constipation, appetite changes, and gut discomfort with personalized care.",
    image: "/Digestive-Health.webp",
    facts: ["Acidity", "Constipation", "Bloating"],
  },
  {
    title: "Skin Problems",
    description:
      "Traditional care for recurring skin concerns with focus on internal balance and lifestyle triggers.",
    image: "/Skin-Dieses.webp",
    facts: ["Acne", "Eczema", "Psoriasis"],
  },
  {
    title: "Hair Fall & Hair Thinning",
    description:
      "Holistic consultation for hair fall patterns, scalp health, nutrition, and stress-related thinning.",
    image: "/Nervous-Disorder.webp",
    facts: ["Hair Fall", "Dandruff", "Thinning"],
  },
  {
    title: "Hormonal Imbalance",
    description:
      "Ayurvedic assessment for cycle changes, mood shifts, weight concerns, and energy imbalance.",
    image: "/Blood-Disorder.webp",
    facts: ["Irregular Cycles", "Fatigue", "Mood Swings"],
  },
  {
    title: "Women's Health Concerns",
    description:
      "Focused support for women's wellness across menstrual health, lifestyle concerns, and recovery.",
    image: "/Women-Health.webp",
    facts: ["Period Pain", "PCOS", "Menopause"],
  },
  {
    title: "Men's Wellness",
    description:
      "Confidential consultation for vitality, stress, sleep, digestion, and preventive health support.",
    image: "/male-Health.webp",
    facts: ["Vitality", "Stress", "Stamina"],
  },
  {
    title: "Diabetes Support",
    description:
      "Lifestyle-led support for sugar control, metabolism, digestion, and long-term wellness routines.",
    image: "/Diabetes.webp",
    facts: ["Sugar Control", "Metabolism", "Diet Care"],
  },
  {
    title: "Stress & Sleep Disorders",
    description:
      "Calming care for stress, disturbed sleep, low energy, and nervous system imbalance.",
    image: "/Mental-Health.webp",
    facts: ["Stress", "Insomnia", "Anxiety"],
  },
  {
    title: "Weight Management",
    description:
      "Personalized plans for healthy weight, digestion, metabolism, routine correction, and food habits.",
    image: "/Obesity.webp",
    facts: ["Obesity", "Cravings", "Metabolism"],
  },
  {
    title: "PCOS/PCOD",
    description:
      "Support for irregular periods, weight changes, acne, hair concerns, and hormonal balance.",
    image: "/Women-Health.webp",
    facts: ["Irregular Periods", "Acne", "Weight Gain"],
  },
  {
    title: "Thyroid Support",
    description:
      "Guidance for fatigue, weight changes, hair fall, mood changes, and metabolism support.",
    image: "/Thyroid.webp",
    facts: ["Fatigue", "Weight Changes", "Hair Fall"],
  },
];

export default function WhyChoose() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes shreevarmaReasonsSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); }
        }
      `}</style>

      <section
        id="why-choose"
        ref={ref}
        className="relative overflow-hidden bg-[#f8efe5] px-5 py-11 sm:px-8 lg:px-10"
      >
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#6f3b2f]/8" />
        <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#d8b98f]/20" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <h2
            className={`mx-auto max-w-3xl text-center text-3xl font-extrabold leading-tight text-[#241c18] transition duration-1000 sm:text-5xl ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Conditions We 
            <span className="ml-2 text-[#6f3b2f]">Commonly Treat</span>
          </h2>

          <div className="mt-10 overflow-hidden pb-2">
            <div className="flex w-max gap-5 [animation:shreevarmaReasonsSlide_44s_linear_infinite] hover:[animation-play-state:paused] max-sm:[animation-duration:72s]">
              {[...reasons, ...reasons].map((reason, index) => (
                <article
                  key={`${reason.title}-${index}`}
                  aria-hidden={index >= reasons.length}
                  className={`relative flex min-h-[390px] w-[300px] shrink-0 flex-col justify-end overflow-hidden rounded-lg border border-[#e5d4c4] bg-white p-5 shadow-[0_18px_42px_rgba(66,45,32,0.08)] transition duration-700 hover:-translate-y-1 hover:bg-[#fffaf3] hover:shadow-[0_24px_50px_rgba(66,45,32,0.14)] sm:w-[340px] ${
                    visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{
                    transitionDelay: visible
                      ? `${0.12 + (index % reasons.length) * 0.1}s`
                      : "0s",
                  }}
                >
                  <Image
                    src={reason.image}
                    alt={index >= reasons.length ? "" : reason.title}
                    fill
                    sizes="(min-width: 640px) 340px, 300px"
                    className="z-0 object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#241c18]/95 via-[#241c18]/68 to-[#241c18]/20" />
                  <div className="relative z-10 rounded-lg border border-white/18 bg-[#241c18]/58 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.22)] backdrop-blur-[2px]">
                    <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#f4d8c3]">
                      Quick Facts
                    </p>
                    <h3 className="text-2xl font-extrabold leading-tight text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-white/92">
                      {reason.description}
                    </p>

                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {reason.facts.map((fact) => (
                        <div
                          key={fact}
                          className="flex min-h-14 items-center justify-center rounded-md border border-white/30 bg-white/22 px-2 text-center text-[11px] font-extrabold leading-tight text-white shadow-sm backdrop-blur-sm"
                        >
                          {fact}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <a
            href="#book"
            className={`mx-auto mt-10 table rounded-full border border-[#6f3b2f] px-7 py-3 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-[#6f3b2f] transition duration-700 hover:bg-[#6f3b2f] hover:text-white ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </>
  );
}
