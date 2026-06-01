import { MapPin, ShieldCheck, Camera, Zap, MessageSquareOff, CreditCard, Clock, BadgeCheck } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function BentoFeatures() {
  return (
    <section aria-labelledby="features-heading" className="py-20 lg:py-28 bg-[#313647] relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#A3B087]/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#435663]/25 blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FFF8D4]/04 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-[#A3B087] uppercase tracking-widest mb-4">Platform Features</span>
          <h2 id="features-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-lg text-white/55 leading-relaxed">
            Airu handles every part of the cleaning job lifecycle — from first tap to final payment.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ gridAutoRows: "176px" }}>

          {/* GPS — large 2×2 */}
          <AnimateOnScroll direction="fade" className="col-span-2 row-span-2">
            <div className="relative h-full rounded-[28px] overflow-hidden bg-[#3D4258] p-6 lg:p-8 flex flex-col justify-between"
              style={{ border: "1.5px solid rgba(255,255,255,0.12)", boxShadow: "inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -5px 0 rgba(0,0,0,0.30), 0 16px 56px rgba(0,0,0,0.30)" }}
            >
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage:"linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)", backgroundSize:"32px 32px" }}
              />
              <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-[#435663]/40 blur-3xl" />
              <div aria-hidden="true" className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#A3B087]/20 blur-2xl" />

              <svg aria-hidden="true" className="absolute inset-0 w-full h-full" viewBox="0 0 400 360" preserveAspectRatio="xMidYMid slice">
                <path d="M60 280 Q100 220 160 200 Q220 180 260 140 Q300 100 340 80" stroke="rgba(163,176,135,0.50)" strokeWidth="2" fill="none" strokeDasharray="6 4"/>
                <circle cx="60" cy="280" r="5" fill="#A3B087" opacity="0.70"/>
                <circle cx="340" cy="80" r="8" fill="#A3B087" opacity="0.95"/>
                <circle cx="340" cy="80" r="18" fill="#A3B087" opacity="0.15"/>
                <circle cx="220" cy="162" r="6" fill="#E4E8D9"/>
                <circle cx="220" cy="162" r="14" fill="#A3B087" opacity="0.25"/>
              </svg>

              <div className="relative z-10">
                <div className="glass-pill w-11 h-11 rounded-2xl flex items-center justify-center mb-4">
                  <MapPin size={22} color="#C4D0A8" strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug mb-2">Real-time cleaner tracking</h3>
                <p className="text-sm text-white/55 leading-relaxed max-w-xs">Watch your cleaner travel to your property live on a map. GPS-stamped check-in and check-out on every job.</p>
              </div>

              <div className="glass-pill relative z-10 flex items-center gap-2 rounded-full px-3.5 py-2 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#A3B087] flex-shrink-0 animate-pulse" aria-hidden="true" />
                <span className="text-xs font-semibold text-white/80">Kasun is 4 mins away</span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Vetting — sage */}
          <AnimateOnScroll direction="up" delay={60} className="col-span-1 row-span-1">
            <div className="clay-card-sage h-full p-5 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/80 border border-[#A3B087]/40 flex items-center justify-center">
                <ShieldCheck size={19} color="#7A8763" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#313647] tabular-nums">5-Stage</p>
                <p className="text-sm font-medium text-[#4A5340] mt-0.5">Vetting process</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Photos — amber */}
          <AnimateOnScroll direction="up" delay={100} className="col-span-1 row-span-1">
            <div className="clay-card-amber h-full p-5 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/80 border border-[#FDE68A]/60 flex items-center justify-center">
                <Camera size={19} color="#D97706" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <p className="text-base font-bold text-[#313647] leading-snug">Before &amp; after photos</p>
                <p className="text-sm font-medium text-[#7A5C0A] mt-0.5">Uploaded every job</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* 3-min booking — cream */}
          <AnimateOnScroll direction="up" delay={80} className="col-span-1 row-span-1">
            <div className="clay-card-cream h-full p-5 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/80 border border-[#D4BC60]/40 flex items-center justify-center">
                <Zap size={19} color="#435663" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#313647] tabular-nums">&lt; 3 min</p>
                <p className="text-sm font-medium text-[#5A4A20] mt-0.5">To confirm a booking</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* No WhatsApp — sage */}
          <AnimateOnScroll direction="up" delay={120} className="col-span-1 row-span-1">
            <div className="clay-card-sage h-full p-5 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/80 border border-[#A3B087]/40 flex items-center justify-center">
                <MessageSquareOff size={19} color="#7A8763" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <p className="text-base font-bold text-[#313647] leading-snug">No WhatsApp chaos</p>
                <p className="text-sm font-medium text-[#4A5340] mt-0.5">One platform, everything</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Statement — wide 2×1 */}
          <AnimateOnScroll direction="left" delay={60} className="col-span-2 row-span-1">
            <div className="clay-card h-full p-6 flex items-center gap-5 overflow-hidden relative">
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#F0FDF4] via-white to-white opacity-90 pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#22C55E] to-[#15803D] flex items-center justify-center shadow-md shadow-green-300/30 flex-shrink-0 relative z-10">
                <BadgeCheck size={22} color="white" strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="relative z-10 min-w-0">
                <p className="text-lg lg:text-xl font-bold text-[#313647] leading-snug">Every cleaner is NIC-verified, police-cleared &amp; trained.</p>
                <p className="text-sm text-[#64748B] mt-1">No cleaner appears on Airu without completing all 5 vetting stages.</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Escrow — navy */}
          <AnimateOnScroll direction="up" delay={100} className="col-span-1 row-span-1">
            <div className="clay-card-navy h-full p-5 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/12 border border-white/20 flex items-center justify-center">
                <CreditCard size={19} color="#FFF8D4" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <p className="text-base font-bold text-white leading-snug">Escrow payments</p>
                <p className="text-sm text-white/65 mt-0.5">Released after completion</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* 48hr — amber */}
          <AnimateOnScroll direction="up" delay={140} className="col-span-1 row-span-1">
            <div className="clay-card-amber h-full p-5 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/80 border border-[#FDE68A]/60 flex items-center justify-center">
                <Clock size={19} color="#D97706" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#313647] tabular-nums">48hr</p>
                <p className="text-sm font-medium text-[#7A5C0A] mt-0.5">Avg cleaner onboarding</p>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
