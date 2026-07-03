"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    dropdown: [
      { label: "Home Default", href: "/" },
      { label: "Home Alternate", href: "/" },
    ],
  },
  { label: "Services", href: "/services" },
  {
    label: "Pages",
    href: "/pages",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    dropdown: [
      { label: "Blog Grid", href: "/blog" },
      { label: "Blog Details", href: "/blog" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 8"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fdf8ef]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Logo />

        {/* Desktop nav + CTA, grouped on the right */}
        <div className="hidden items-center gap-10 lg:flex">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${
                  item.label === "Home"
                    ? "text-[#6f3b2f]"
                    : "text-[#6b6b63] hover:text-[#6f3b2f]"
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronIcon className="h-2.5 w-2.5 text-current" />
                )}
              </Link>

              {item.dropdown && (
                <ul
                  className={`absolute left-1/2 top-full z-50 mt-3 w-48 -translate-x-1/2 rounded-xl border border-black/5 bg-white p-2 shadow-lg transition-all duration-150 ${
                    openDropdown === item.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  {item.dropdown.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href}
                        className="block rounded-lg px-3 py-2 text-sm text-[#6b6b63] hover:bg-[#fdf8ef] hover:text-[#6f3b2f]"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Get in Touch button (desktop) */}
        <Link
          href="/contact"
          className="inline-block rounded-full bg-[#6f3b2f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#573026]"
        >
          Get in Touch
        </Link>
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
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className={`py-2 text-[15px] font-medium ${
                    item.label === "Home"
                      ? "text-[#6f3b2f]"
                      : "text-[#6b6b63]"
                  }`}
                  onClick={() => !item.dropdown && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={() =>
                      setOpenDropdown((v) =>
                        v === item.label ? null : item.label
                      )
                    }
                    className="flex h-8 w-8 items-center justify-center text-[#6b6b63]"
                  >
                    <ChevronIcon
                      className={`h-2.5 w-2.5 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {item.dropdown && (
                <ul
                  className={`flex flex-col gap-1 overflow-hidden pl-4 transition-[max-height] duration-200 ${
                    openDropdown === item.label ? "max-h-40" : "max-h-0"
                  }`}
                >
                  {item.dropdown.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href}
                        className="block py-1.5 text-sm text-[#6b6b63]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="px-6 pb-8">
          <Link
            href="/contact"
            className="block rounded-full bg-[#6f3b2f] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#573026]"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
