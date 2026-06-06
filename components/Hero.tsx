import { ShieldCheck, Star, BadgeCheck, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#313647] pt-20"
    >
      {/* Multi-color ambient blobs — slowly drift & breathe (see globals.css) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-blob-a absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#A3B087]/16 blur-[110px]" />
        <div className="hero-blob-b absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-[#435663]/20 blur-[100px]" />
        <div className="hero-blob-c absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full bg-[#A3B087]/10 blur-[80px]" />
        <div className="hero-blob-d absolute top-10 left-1/4 w-[360px] h-[360px] rounded-full bg-[#22C55E]/10 blur-[90px]" />
        {/* Subtle grid with slow parallax drift */}
        <div className="hero-grid absolute -inset-10 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "56px 56px" }}
        />
        {/* Clean-shine sweep — light catching a just-cleaned surface */}
        <div className="hero-sheen absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-24">

          {/* Left */}
          <div className="flex flex-col gap-8">
            {/* Pill */}
            <div className="clay-pill-dark inline-flex items-center gap-2.5 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
              <span className="text-xs font-semibold text-white/75 uppercase tracking-widest">Now live in Colombo</span>
            </div>

            <div className="flex flex-col gap-5">
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-white leading-[1.08] tracking-tight">
                Sri Lanka&apos;s trusted{" "}
                <span className="text-[#22C55E]">cleaning marketplace</span>{" "}
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
                { icon: ShieldCheck, label: "Police Cleared", color: "#22C55E" },
                { icon: Star,        label: "5-Star Rated",   color: "#FBBF24" },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} role="listitem" className="clay-pill-dark flex items-center gap-2 rounded-full px-4 py-2.5 min-h-[44px]">
                  <Icon size={15} style={{ color }} strokeWidth={2.5} aria-hidden="true" />
                  <span className="text-sm font-medium text-white/80">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — illustration in clay card with a live verification feed.
              Proof cards populate in sequence (NIC → Police → rating), then settle.
              Pure CSS; the global prefers-reduced-motion rule renders them static. */}
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

              {/* Live verification feed — proof cards (decorative, summarised for SR below) */}
              <div aria-hidden="true">
                {/* (1) NIC verified — top left */}
                <div
                  className="proof-card absolute -top-5 -left-6 sm:-left-8 clay-card p-3 flex items-center gap-3 z-20"
                  style={{ ["--in-delay" as string]: "0.45s", ["--float-delay" as string]: "1.07s", ["--float-dur" as string]: "5.6s" }}
                >
                  <div className="proof-stamp w-10 h-10 rounded-2xl bg-[#16A34A] flex items-center justify-center flex-shrink-0" style={{ ["--stamp-delay" as string]: "0.7s" }}>
                    <BadgeCheck size={18} color="white" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F172A] leading-tight">NIC Verified</p>
                    <p className="text-xs text-[#64748B]">Identity confirmed</p>
                  </div>
                </div>

                {/* (2) Police cleared — bottom left */}
                <div
                  className="proof-card absolute -bottom-6 -left-4 sm:-left-7 clay-card p-3 flex items-center gap-3 z-20"
                  style={{ ["--in-delay" as string]: "0.78s", ["--float-delay" as string]: "1.40s", ["--float-dur" as string]: "6.4s" }}
                >
                  <div className="proof-stamp w-10 h-10 rounded-2xl bg-[#16A34A] flex items-center justify-center flex-shrink-0" style={{ ["--stamp-delay" as string]: "1.03s" }}>
                    <ShieldCheck size={18} color="white" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F172A] leading-tight">Police Cleared</p>
                    <p className="text-xs text-[#64748B]">Background checked</p>
                  </div>
                </div>

                {/* (3) Rating — right, with a live pulse */}
                <div
                  className="proof-card absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-7 clay-card px-3.5 py-3 z-20"
                  style={{ ["--in-delay" as string]: "1.11s", ["--float-delay" as string]: "1.73s", ["--float-dur" as string]: "6s" }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="live-dot w-2 h-2 rounded-full bg-[#22C55E]" />
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#64748B]">Live</span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <Star size={16} fill="#FBBF24" color="#FBBF24" strokeWidth={0} aria-hidden="true" />
                    <span className="text-lg font-bold text-[#0F172A] leading-none tabular-nums">4.9</span>
                  </div>
                  <p className="mt-1 text-xs text-[#64748B] tabular-nums">320+ cleans done</p>
                </div>
              </div>

              {/* Screen-reader summary of the animated feed */}
              <p className="sr-only">
                Every Airu cleaner is NIC verified and police background checked, with an average rating of 4.9 stars across more than 320 completed cleans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
