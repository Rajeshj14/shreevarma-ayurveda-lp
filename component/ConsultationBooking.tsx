"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const bookingDetails = [
  "Consultation Fee: \u20B9500 per Session",
  "Availability: Monday - Saturday",
  "Consultation Timings: 10:00 AM - 7:00 PM",
  "100% Private & Secure Consultations",
  "Easy Online Appointment Booking",
];

const concernOptions = [
  "Joint & Body Pain",
  "Digestive Disorders",
  "Skin Problems",
  "Hair Fall & Hair Thinning",
  "Hormonal Imbalance",
  "Women's Health Concerns",
  "Men's Wellness",
  "Diabetes Support",
  "Stress & Sleep Disorders",
  "Weight Management",
  "PCOS/PCOD",
  "Thyroid Support",
  "Other Concern",
];

const inputClass =
  "w-full rounded-md border border-[#e2d3c2] bg-white px-3.5 py-3 text-sm font-semibold text-[#241c18] outline-none transition placeholder:text-[#9b8f84] focus:border-[#6f3b2f] focus:ring-4 focus:ring-[#6f3b2f]/10 sm:px-4";

export default function ConsultationBooking() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      source: "Online Consultation Form",
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      concern: String(formData.get("concern") || ""),
      description: String(formData.get("description") || ""),
      pageUrl: window.location.href,
    };

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to submit the form");
      }

      router.push("/thank-you");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="scroll-mt-24 px-4 py-11 sm:px-8 sm:py-8 lg:mb-6 lg:px-10">
      <div className="sv-animate-top mx-auto mb-7 max-w-3xl text-center sm:mb-8">
        <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#241c18] sm:text-5xl">
          Book Your Ayurveda <span className="ml-2 text-[#6f3b2f]">Consultation</span> 
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-6 text-[#6b625b] sm:text-base sm:leading-7">
          Share your details and health concern to connect with Shreevarma
          doctors for secure online Ayurvedic and Siddha guidance.
        </p>
      </div>

      <div  className="mx-auto grid max-w-6xl items-stretch gap-4 sm:gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="sv-animate-left sv-delay-2 flex h-full flex-col rounded-lg border border-[#e8dac8] bg-[#6f3b2f] p-5 text-white shadow-[0_18px_42px_rgba(66,45,32,0.12)] sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f3d7bd] sm:text-sm sm:tracking-[0.2em]">
            Online Consultation
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:mt-4 sm:text-4xl">
            Book Your Online Consultation Now
          </h2>

          <ul className="mt-5 space-y-3.5 sm:mt-7 sm:space-y-4">
            {bookingDetails.map((detail) => (
              <li key={detail} className="flex gap-3 text-sm font-semibold leading-6">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/16">
                  <span className="h-2 w-2 rounded-full bg-[#f3d7bd]" />
                </span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <div  className="max-sm:mt-5 mt-auto rounded-lg border border-white/18 bg-white/10 p-4">
            <p className="text-sm font-bold text-[#f8e8d8]">
              Personal Ayurveda and Siddha guidance from certified doctors,
              wherever you are.
            </p>
          </div>
        </div>

        <form  id="book"
          onSubmit={handleSubmit}
          className="sv-animate-bottom sv-delay-3 h-full rounded-lg border border-[#e8dac8] bg-white p-5 shadow-[0_18px_42px_rgba(66,45,32,0.08)] sm:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6f3b2f] sm:text-sm sm:tracking-[0.2em]">
            Appointment Form
          </p>
          <h3 className="mt-3 text-xl font-extrabold leading-tight text-[#241c18] sm:text-2xl">
            Share Your Details
          </h3>

          <div className="mt-5 grid gap-4 sm:mt-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-[#4f4a45]">
                Name
                <input
                  className={inputClass}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-[#4f4a45]">
                Email
                <input
                  className={inputClass}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-[#4f4a45]">
                Phone Number
                <input
                  className={inputClass}
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-[#4f4a45]">
                Concern
                <select
                  className={`${inputClass} appearance-none`}
                  name="concern"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select your concern
                  </option>
                  {concernOptions.map((concern) => (
                    <option key={concern} value={concern}>
                      {concern}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold text-[#4f4a45]">
              Description
              <textarea
                className={`${inputClass} min-h-32 resize-none leading-6`}
                name="description"
                placeholder="Briefly describe your concern"
                required
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mx-auto mt-6 flex w-full max-w-[300px] justify-center rounded-full bg-[#6f3b2f] px-5 py-3.5 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_12px_24px_rgba(111,59,47,0.22)] transition hover:bg-[#573026] disabled:cursor-not-allowed disabled:opacity-70 sm:max-w-[360px] sm:px-6 sm:tracking-[0.12em]"
          >
            {isSubmitting ? "Submitting..." : "Book Appointment"}
          </button>

          {submitError && (
            <p className="mt-3 text-center text-sm font-semibold text-red-700">
              {submitError}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
