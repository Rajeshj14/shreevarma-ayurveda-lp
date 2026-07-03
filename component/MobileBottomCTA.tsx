const PhoneIcon = () => (
  <svg
    aria-hidden="true"
    className="h-[16px] w-[16px] shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    aria-hidden="true"
    className="h-[16px] w-[16px] shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <path d="M3 10h18" />
    <rect x="3" y="4" width="18" height="18" rx="2" />
  </svg>
);

export default function MobileBottomCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-2 pb-[calc(8px+env(safe-area-inset-bottom))] lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2 rounded-full border border-[#ead8c8] bg-white/96 p-1.5 shadow-[0_-10px_34px_rgba(66,45,32,0.18)] backdrop-blur-md">
        <a
          href="tel:+919994244111"
          className="flex min-w-0 min-h-10 items-center justify-center gap-1.5 overflow-hidden rounded-full border border-[#6f3b2f] bg-white px-2 text-[12px] font-extrabold uppercase tracking-[0.03em] text-[#6f3b2f] shadow-sm"
        >
          <PhoneIcon />
          <span className="min-w-0 truncate">Call Now</span>
        </a>
        <a
          href="#book"
          className="flex min-w-0 min-h-10 items-center justify-center gap-1.5 overflow-hidden rounded-full bg-[#6f3b2f] px-2 text-[12px] font-extrabold uppercase tracking-[0.03em] text-white shadow-[0_10px_22px_rgba(111,59,47,0.24)]"
        >
          <CalendarIcon />
          <span className="min-w-0 truncate">Book Now</span>
        </a>
      </div>
    </div>
  );
}
