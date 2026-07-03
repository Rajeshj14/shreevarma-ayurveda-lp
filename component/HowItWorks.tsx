type IconProps = {
  className?: string;
};

const CalendarIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <path d="M3 10h18" />
    <rect x="3" y="4" width="18" height="18" rx="2" />
  </svg>
);

const DoctorIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M4 22a8 8 0 0 1 16 0" />
    <path d="M12 16v4" />
    <path d="M10 18h4" />
  </svg>
);

const VideoIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="7" width="13" height="10" rx="2" />
    <path d="m16 10 5-3v10l-5-3" />
  </svg>
);

const PlanIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 3h6l1 2h3v17H5V5h3l1-2Z" />
    <path d="M9 12h6" />
    <path d="M9 16h4" />
  </svg>
);

const steps = [
  {
    Icon: CalendarIcon,
    title: "Step 1",
    desc: "Book your online consultation.",
  },
  {
    Icon: DoctorIcon,
    title: "Step 2",
    desc: "Choose your preferred doctor and available time slot.",
  },
  {
    Icon: VideoIcon,
    title: "Step 3",
    desc: "Consult securely through video or phone.",
  },
  {
    Icon: PlanIcon,
    title: "Step 4",
    desc: "Receive a personalized Ayurvedic or Siddha treatment plan and medicine recommendations.",
  },
];

const TOTAL_H = 500;
const CARD_H = 175;
const LINE_H = 22;
const CIRCLE_D = 56;
const SPACER_H = TOTAL_H - CARD_H - LINE_H - CIRCLE_D;

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#f8efe5]"
      style={{ backgroundColor: "#f8efe5" }}
    >
      <style>{`
        @keyframes shreevarmaProcessBgZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
      `}</style>
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.04] [animation:shreevarmaProcessBgZoom_18s_ease-in-out_infinite]"
        style={{ backgroundImage: "url('/bg-img.png')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[#f8efe5]/70" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#6f3b2f]/8" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#d8b98f]/20" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10 lg:py-16">
        <div className="sv-animate-top mx-auto mb-10 max-w-[760px] text-center sm:mb-12 lg:mb-14">
          <h2 className="text-[24px] font-extrabold leading-[1.1] tracking-tight text-[#241c18] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]">
            How It <span className="text-[#6f3b2f]">Works</span>
          </h2>
        </div>

        <div className="relative hidden lg:block" style={{ height: `${TOTAL_H}px` }}>
          <div
            className="absolute left-0 right-0 bg-[#e4d6c8]"
            style={{ top: `${CARD_H + LINE_H + CIRCLE_D / 2}px`, height: "2px" }}
          />

          <div className="grid h-full grid-cols-4">
            {steps.map((step, index) => {
              const above = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={`${above ? "sv-animate-top" : "sv-animate-bottom"} sv-delay-${index + 1} flex flex-col items-center px-1`}
                >
                  {above ? (
                    <>
                      <StepCard step={step} />
                      <div className="w-[2px] bg-[#e4d6c8]" style={{ height: `${LINE_H}px` }} />
                      <StepCircle step={step} />
                      <div style={{ height: `${SPACER_H}px` }} />
                    </>
                  ) : (
                    <>
                      <div style={{ height: `${SPACER_H}px` }} />
                      <StepCircle step={step} />
                      <div className="w-[2px] bg-[#e4d6c8]" style={{ height: `${LINE_H}px` }} />
                      <StepCard step={step} />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative lg:hidden">
          <div className="absolute bottom-5 left-6 top-5 w-[2px] bg-[#e4d6c8] sm:left-7" />
          <div className="space-y-4 sm:space-y-5">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`${index % 2 === 0 ? "sv-animate-left" : "sv-animate-right"} sv-delay-${index + 1} relative flex items-start gap-3 sm:gap-4`}
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6f3b2f] shadow-[0_4px_16px_rgba(111,59,47,0.35)] sm:h-14 sm:w-14">
                  <step.Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                </div>
                <div className="min-w-0 flex-1 rounded-2xl border border-[#e4d6c8] bg-white p-4 shadow-[0_2px_14px_rgba(111,59,47,0.07)] sm:p-5">
                  <div className="mb-2.5 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fbf6ee] sm:h-10 sm:w-10">
                      <step.Icon className="h-5 w-5 text-[#6f3b2f]" />
                    </div>
                  </div>
                  <h4 className="mb-2 text-[16px] font-extrabold leading-snug text-[#241c18] sm:text-[18px] md:text-[20px]">
                    {step.title}
                  </h4>
                  <p className="text-[14px] leading-relaxed text-[#6b625b] sm:text-[15px] md:text-[16px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

type Step = (typeof steps)[number];

function StepCard({ step }: { step: Step }) {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-[#e4d6c8] bg-white p-4 shadow-[0_2px_14px_rgba(111,59,47,0.07)]"
      style={{ height: `${CARD_H}px` }}
    >
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fbf6ee]">
          <step.Icon className="h-5 w-5 text-[#6f3b2f]" />
        </div>
      </div>
      <h4 className="mb-2 text-[13px] font-extrabold leading-snug text-[#241c18] lg:text-[14px]">
        {step.title}
      </h4>
      <p className="text-[12px] leading-relaxed text-[#6b625b] lg:text-[13px]">
        {step.desc}
      </p>
    </div>
  );
}

function StepCircle({ step }: { step: Step }) {
  return (
    <div
      className="relative z-10 flex shrink-0 items-center justify-center rounded-full bg-[#6f3b2f] shadow-[0_4px_16px_rgba(111,59,47,0.40)]"
      style={{ width: `${CIRCLE_D}px`, height: `${CIRCLE_D}px` }}
    >
      <step.Icon className="h-7 w-7 text-white" />
    </div>
  );
}
