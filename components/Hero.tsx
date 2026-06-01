import { ShieldCheck, Star, BadgeCheck, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#313647] pt-20"
    >
      {/* Multi-color ambient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#A3B087]/16 blur-[110px]" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-[#435663]/20 blur-[100px]" />
        <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full bg-[#A3B087]/10 blur-[80px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "56px 56px" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-24">

          {/* Left */}
          <div className="flex flex-col gap-8">
            {/* Pill */}
            <div className="glass-pill inline-flex items-center gap-2.5 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22C55E]" aria-hidden="true" />
              <span className="text-xs font-semibold text-white/75 uppercase tracking-widest">Now live in Colombo</span>
            </div>

            <div className="flex flex-col gap-5">
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-white leading-[1.08] tracking-tight">
                Sri Lanka&apos;s trusted{" "}
                <span className="gradient-text-green">cleaning marketplace</span>{" "}
                for Airbnb hosts.
              </h1>
              <p className="text-lg sm:text-xl text-white/55 leading-relaxed max-w-lg">
                On-demand, background-checked cleaners — booked in minutes, tracked in real time. No WhatsApp chases. No unverified strangers in your property.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#join-host" className="inline-flex items-center justify-center gap-2.5 min-h-[52px] text-white font-semibold text-[15px] px-9 rounded-2xl btn-primary cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#313647]">
                Join as a Host <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#join-cleaner" className="inline-flex items-center justify-center min-h-[52px] text-white/80 hover:text-white font-semibold text-[15px] px-9 rounded-2xl border border-white/20 hover:border-white/35 hover:bg-white/8 transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#313647]">
                Join as a Cleaner
              </a>
            </div>

            {/* Trust badges — glass chips */}
            <div className="flex flex-wrap gap-2.5" role="list" aria-label="Trust signals">
              {[
                { icon: BadgeCheck, label: "NIC Verified",    color: "#22C55E" },
                { icon: ShieldCheck, label: "Police Cleared", color: "#60A5FA" },
                { icon: Star,        label: "5-Star Rated",   color: "#FBBF24" },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} role="listitem" className="glass-pill flex items-center gap-2 rounded-full px-4 py-2.5 min-h-[44px]">
                  <Icon size={15} style={{ color }} strokeWidth={2.5} aria-hidden="true" />
                  <span className="text-sm font-medium text-white/80">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — illustration in clay card (keeps bg so image is visible on dark) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer glow ring */}
              <div aria-hidden="true" className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-[#A3B087]/22 via-[#435663]/14 to-[#313647]/12 blur-xl" />

              {/* Clay card — white bg so illustration renders properly */}
              <div className="relative clay-card p-5 lg:p-6">
                <Image
                  src="/images/cleaning-service-pana.svg"
                  alt="Professional cleaner getting a property guest-ready for Airbnb hosts"
                  width={480}
                  height={420}
                  priority
                  className="w-full h-auto rounded-2xl mix-blend-multiply"
                />
              </div>

              {/* Floating card — top left */}
              <div className="absolute -top-5 -left-8 clay-card p-3 flex items-center gap-3 z-20 max-w-[180px]">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#22C55E] to-[#15803D] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={18} color="white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0F172A] leading-tight">Cleaner Verified</p>
                  <p className="text-xs text-[#64748B]">Kasun · Top Rated</p>
                </div>
              </div>

              {/* Floating card — bottom right */}
              <div className="absolute -bottom-4 -right-6 clay-card p-3 flex items-center gap-3 z-20 max-w-[190px]">
                <div className="w-10 h-10 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M4 9L8 13L14 6" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0F172A] leading-tight">Job Complete</p>
                  <p className="text-xs text-[#64748B]">Photos uploaded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
