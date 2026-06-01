import { ArrowRight, ShieldCheck, Clock, BadgeCheck } from "lucide-react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="py-20 lg:py-28 bg-[#F2F4ED]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="relative bg-[#313647] rounded-[32px] p-10 lg:p-16 overflow-hidden"
            style={{ boxShadow: "inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -6px 0 rgba(0,0,0,0.30), 0 24px 80px rgba(49,54,71,0.45)" }}
          >
            {/* Palette-matched blobs */}
            <div aria-hidden="true" className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#A3B087]/16 blur-3xl -translate-x-1/3 -translate-y-1/3" />
            <div aria-hidden="true" className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#435663]/25 blur-3xl translate-x-1/4 translate-y-1/4" />
            <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FFF8D4]/05 blur-3xl" />
            <div aria-hidden="true" className="absolute inset-5 rounded-[26px] border border-white/6 pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Copy */}
              <div className="flex flex-col gap-6 text-center lg:text-left">
                <span className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 w-fit mx-auto lg:mx-0 text-xs font-semibold text-[#C4D0A8] uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3B087]" aria-hidden="true" />
                  Get Started
                </span>
                <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight">
                  Ready for a cleaner property after every checkout?
                </h2>
                <p className="text-lg text-white/55 leading-relaxed">
                  Join Airbnb hosts in Colombo who have switched to a verified, professional cleaning service they can actually rely on.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
                  <a href="#book" className="inline-flex items-center justify-center gap-2.5 min-h-[54px] text-white font-semibold text-[15px] px-10 rounded-2xl btn-primary cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#313647]">
                    Book Your First Clean <ArrowRight size={16} aria-hidden="true" />
                  </a>
                  <a href="#for-cleaners" className="inline-flex items-center justify-center min-h-[54px] text-white/75 hover:text-white font-semibold text-[15px] px-10 rounded-2xl border border-white/20 hover:border-white/35 hover:bg-white/8 transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#313647]">
                    Join as a Cleaner
                  </a>
                </div>

                {/* Frosted trust strip */}
                <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5" aria-label="Reassurances">
                  {[
                    { icon: BadgeCheck,  label: "Verified cleaners" },
                    { icon: ShieldCheck, label: "Escrow protected" },
                    { icon: Clock,       label: "No subscription" },
                  ].map(({ icon: Icon, label }) => (
                    <li key={label} className="glass-pill flex items-center gap-2 rounded-full px-3.5 py-2 min-h-[40px]">
                      <Icon size={14} color="#C4D0A8" strokeWidth={2.5} aria-hidden="true" />
                      <span className="text-xs font-medium text-white/80">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Illustration */}
              <div className="rounded-2xl overflow-hidden">
                <Image src="/images/cleaning-service-bro.svg" alt="Friendly cleaning professional ready to help Airbnb hosts" width={360} height={300} loading="lazy" className="w-full h-auto mix-blend-screen opacity-90" />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
