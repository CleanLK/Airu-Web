"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "How It Works",  href: "#how-it-works" },
  { label: "Trust & Safety", href: "#trust" },
  { label: "For Cleaners",  href: "#for-cleaners" },
  { label: "Pricing",       href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /* Outer wrapper — floating pill */
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4">
      <header
        role="banner"
        className={`w-full max-w-6xl bg-white/70 backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-white/60 ring-1 ring-inset ring-white/40 transition-all duration-200 ${
          scrolled
            ? "shadow-[0_12px_40px_rgba(49,54,71,0.16),inset_0_1px_0_rgba(255,255,255,0.9)]"
            : "shadow-[0_2px_16px_rgba(49,54,71,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]"
        }`}
      >
        {/* 3-column grid: logo | nav | ctas */}
        <div className="grid grid-cols-3 items-center h-13 px-4 sm:px-5">

          {/* Logo — left */}
          <a
            href="#"
            className="flex items-center gap-2 cursor-pointer flex-shrink-0 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-lg"
            aria-label="Airu — home"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#22C55E] to-[#15803D] flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9 2C9 2 4 5.5 4 10C4 12.76 6.24 15 9 15C11.76 15 14 12.76 14 10C14 5.5 9 2 9 2Z" fill="white" opacity="0.9"/>
                <path d="M9 6C9 6 6.5 8 6.5 10.5C6.5 11.88 7.62 13 9 13C10.38 13 11.5 11.88 11.5 10.5C11.5 8 9 6 9 6Z" fill="white"/>
              </svg>
            </div>
            <span className="text-[15px] font-semibold text-[#0F172A] tracking-tight">Airu</span>
          </a>

          {/* Nav links — center */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center justify-center gap-0.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13.5px] font-medium text-[#374151] hover:text-[#0F172A] px-3.5 py-1.5 rounded-lg hover:bg-[#F1F5F9] transition-all duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTAs — right */}
          <div className="hidden lg:flex items-center justify-end gap-1.5">
            <a
              href="#for-cleaners"
              className="text-[13.5px] font-medium text-[#374151] hover:text-[#0F172A] px-3.5 py-1.5 rounded-lg hover:bg-[#F1F5F9] transition-all duration-150 cursor-pointer whitespace-nowrap"
            >
              Join as Cleaner
            </a>
            <a
              href="#book"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-white bg-[#313647] hover:bg-[#3D4258] px-4 py-1.5 rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap shadow-sm"
            >
              I&apos;m a Host <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Mobile hamburger — right col on small screens */}
          <div className="flex lg:hidden justify-end">
            <button
              onClick={() => setOpen(!open)}
              className="min-w-9.5 min-h-9.5 flex items-center justify-center text-[#374151] rounded-lg hover:bg-[#F1F5F9] transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            className="lg:hidden border-t border-[#F1F5F9] px-4 py-3 flex flex-col gap-0.5"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="min-h-11 flex items-center text-[14px] font-medium text-[#374151] hover:text-[#0F172A] hover:bg-[#F8FAFC] rounded-lg px-3 cursor-pointer transition-all duration-150"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3 mt-1 border-t border-[#F1F5F9]">
              <a
                href="#for-cleaners"
                onClick={() => setOpen(false)}
                className="min-h-10.5 inline-flex items-center justify-center text-[14px] font-medium text-[#374151] border border-[#E2E8F0] rounded-lg px-4 cursor-pointer hover:bg-[#F8FAFC] transition-colors duration-150"
              >
                Join as Cleaner
              </a>
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="min-h-10.5 inline-flex items-center justify-center gap-1.5 text-[14px] font-semibold text-white bg-[#313647] hover:bg-[#3D4258] rounded-lg px-4 cursor-pointer transition-colors duration-150 shadow-sm"
              >
                I&apos;m a Host <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
