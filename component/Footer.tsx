const contactItems = [
  {
    title: "Address",
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" />
        <path d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    ),
    content: (
      <>
        No.3/195, PRV Building,
        <br />
        Parthasarathy Nagar,
        <br />
        Poonamallee Mount High Road,
        <br />
        Manapakkam, Chennai - 600125
      </>
    ),
  },
  {
    title: "Phone",
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
    content: (
      <>
        <a href="tel:+919994244111" className="transition hover:text-[#f4d8c3]">
          +91 99942 44111
        </a>
        <br />
        <a href="tel:+919994211666" className="transition hover:text-[#f4d8c3]">
          +91 99942 11666
        </a>
      </>
    ),
  },
  {
    title: "Email",
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
    content: (
      <a
        href="mailto:healthcare@shreevarma.org"
        className="break-words transition hover:text-[#f4d8c3]"
      >
        healthcare@shreevarma.org
      </a>
    ),
  },
  {
    title: "Website",
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 0 20" />
        <path d="M12 2a15.3 15.3 0 0 0 0 20" />
      </svg>
    ),
    content: (
      <a
        href="https://www.shreevarma.org"
        className="transition hover:text-[#f4d8c3]"
      >
        www.shreevarma.org
      </a>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-white text-[#241c18]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:px-10">
        <h2 className="text-center text-xl font-extrabold sm:text-left">
          Contact Info
        </h2>

        <div className="mt-7 grid gap-7 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
          {contactItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-3 sm:items-start"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ead8c8] bg-[#fff8f1] text-[#7a3f31] shadow-[0_12px_28px_rgba(122,63,49,0.12)]">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#7a3f31]">
                  {item.title}
                </h3>
                <p className="mt-2 text-base font-semibold leading-7 text-[#51433e]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#ead8c8] bg-[#fff8f1] px-4 py-4 text-center text-sm font-semibold tracking-wide text-[#7a3f31] sm:text-base">
        &copy; 2026, DR.SHREEVARMA&apos;S WELLNESS PVT. LTD
      </div>
    </footer>
  );
}
