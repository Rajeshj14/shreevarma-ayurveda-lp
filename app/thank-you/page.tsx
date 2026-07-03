export default function ThankYouPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-8">
      <div className="absolute inset-0 bg-[#241c18]" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/bg-img.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#241c18]/95 via-[#6f3b2f]/84 to-[#241c18]/92" />

      <section className="relative z-10 mx-auto max-w-3xl rounded-lg border border-white/18 bg-white/12 p-6 text-center text-white shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-[3px] sm:p-10">
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f4d8c3] sm:text-sm">
          Appointment Request Received
        </p>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
          Thank You
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-6 text-white/88 sm:text-lg sm:leading-8">
          Your online consultation details have been submitted successfully. Our
          team will contact you soon to confirm your appointment.
        </p>

        <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
          {["Secure Consultation", "Doctor Guidance", "Personalized Care"].map(
            (item) => (
              <div
                key={item}
                className="rounded-lg border border-white/18 bg-white/12 px-4 py-3 text-sm font-extrabold text-white"
              >
                {item}
              </div>
            )
          )}
        </div>

        <a
          href="/#book"
          className="mx-auto mt-9 table rounded-full bg-white px-8 py-3.5 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-[#6f3b2f] shadow-[0_18px_34px_rgba(0,0,0,0.2)] transition hover:bg-[#f4d8c3]"
        >
          Book Another Consultation
        </a>
      </section>
    </main>
  );
}
