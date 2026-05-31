import { X, CheckCircle } from "lucide-react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const rows = [
  { before:"Unverified strangers with full property access",        after:"NIC-verified + police-cleared + face-matched cleaners only" },
  { before:"Coordination chaos over WhatsApp with no audit trail",  after:"End-to-end booking, tracking, and payment on one platform" },
  { before:"Inconsistent quality ruining your Airbnb ratings",      after:"Standardised checklists + mandatory before & after photos" },
  { before:"Cash payments with no records or WHT compliance",       after:"Digital payments via PayHere — WHT auto-deducted" },
];

export default function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-heading" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-[#E11D48] uppercase tracking-widest mb-4">The Problem</span>
          <h2 id="problem-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight mb-4">
            Sri Lanka&apos;s cleaning market is broken.
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Airbnb hosts are giving strangers property access based on a WhatsApp recommendation. Airu fixes that — completely.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          <AnimateOnScroll direction="left">
            <div className="clay-card p-7 lg:p-8 h-full" style={{ background:"#FFF1F2", borderColor:"rgba(253,164,175,0.4)", boxShadow:"inset 0 2px 0 rgba(255,255,255,1),inset 0 -3px 0 rgba(225,29,72,.07),0 8px 32px rgba(225,29,72,.07),0 2px 8px rgba(225,29,72,.04)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <X size={18} color="#E11D48" strokeWidth={2.5} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A]">Without Airu</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {rows.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={10} color="#E11D48" strokeWidth={3} aria-hidden="true" />
                    </div>
                    <p className="text-sm text-[#64748B] leading-relaxed">{r.before}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={80}>
            <div className="clay-card p-5 flex items-center justify-center">
              <Image src="/images/cleaning-service-rafiki-alt.svg" alt="Illustration showing informal vs professional cleaning" width={300} height={300} loading="lazy" className="w-full h-auto mix-blend-multiply" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div className="clay-card-sage p-7 lg:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-white/70 border border-[#A3B087]/40 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={18} color="#7A8763" strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-[#313647]">With Airu</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {rows.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/70 border border-[#A3B087]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={11} color="#7A8763" strokeWidth={2.5} aria-hidden="true" />
                    </div>
                    <p className="text-sm text-[#3A4230] font-medium leading-relaxed">{r.after}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll className="mt-14 text-center" delay={100}>
          <figure>
            <blockquote className="text-xl sm:text-2xl font-semibold text-[#0F172A] max-w-3xl mx-auto leading-snug">
              &ldquo;Airu is Airbnb&apos;s missing piece in Sri Lanka — the trusted, on-demand cleaning layer that turns a guest checkout into a guest-ready property.&rdquo;
            </blockquote>
          </figure>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
