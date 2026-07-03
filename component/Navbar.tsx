"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#overview" },
  { label: "Why Choose Us", href: "#why-choose" },
  { label: "Consultation", href: "#book" },
  { label: "Process", href: "#process" },
  { label: "Doctors", href: "#doctors" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Dr. Shreevarma's Wellness home">
      <Image
        src="/logos.webp"
        alt="Dr. Shreevarma's Wellness"
        width={380}
        height={145}
        priority
        className="h-10 w-auto sm:h-12"
      />
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fdf8ef]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Logo />

        {/* Desktop nav + CTA, grouped on the right */}
        <div className="hidden items-center gap-10 lg:flex">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${
                  item.label === "Home"
                    ? "text-[#6f3b2f]"
                    : "text-[#6b6b63] hover:text-[#6f3b2f]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Get in Touch button (desktop) */}
        <a
          href="#book"
          className="inline-block rounded-full bg-[#6f3b2f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#573026]"
        >
          Book Appointment
        </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#2b2b2b] lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition-all duration-200 ${
                mobileOpen ? "top-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 rounded bg-current transition-all duration-200 ${
                mobileOpen ? "top-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden bg-[#fdf8ef] transition-[max-height] duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[560px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6">
          {navItems.map((item) => (
            <li key={item.label} className="border-b border-black/5 py-2">
              <a
                href={item.href}
                className={`block py-2 text-[15px] font-medium ${
                  item.label === "Home" ? "text-[#6f3b2f]" : "text-[#6b6b63]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-6 pb-8">
          <a
            href="#book"
            className="block rounded-full bg-[#6f3b2f] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#573026]"
            onClick={() => setMobileOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
