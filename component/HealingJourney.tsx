const highlights = [
  "Consultation Fee: \u20B9500",
  "Mon - Sat | 10 AM - 7 PM",
  "100% Secure & Private",
];

export default function HealingJourney() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-16 lg:px-10">
      <div className="absolute inset-0 bg-[#241c18]" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/bg-img.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#241c18]/95 via-[#6f3b2f]/82 to-[#241c18]/88" />

      <div className="relative z-10 mx-auto max-w-5xl text-center text-white">
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f4d8c3] sm:text-sm">
          Online Ayurveda Consultation
        </p>
        <h2 className="sv-animate-top mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
          Start Your Healing Journey Today
        </h2>
        <p className="sv-animate-bottom sv-delay-1 mx-auto mt-4 max-w-2xl text-sm font-medium leading-6 text-white/86 sm:text-lg sm:leading-8">
          Get trusted Ayurvedic care from experienced specialists without
          leaving your home.
        </p>

        <div className="sv-animate-left sv-delay-2 mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/18 bg-white/12 px-4 py-3 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(0,0,0,0.18)] backdrop-blur-[2px]"
            >
              <span className="mr-2 text-[#f4d8c3]">✓</span>
              {item}
            </div>
          ))}
        </div>

        <a
          href="#book"
          className="mx-auto mt-9 flex w-full max-w-[420px] items-center justify-center rounded-full bg-white px-5 py-3.5 text-center text-[12px] font-extrabold uppercase leading-5 tracking-[0.06em] text-[#6f3b2f] shadow-[0_18px_34px_rgba(0,0,0,0.2)] transition hover:bg-[#f4d8c3] sm:table sm:w-auto sm:max-w-none sm:px-8 sm:text-sm sm:leading-normal sm:tracking-[0.12em]"
        >
          Book Your Online Consultation Now
        </a>
      </div>
    </section>
  );
}
