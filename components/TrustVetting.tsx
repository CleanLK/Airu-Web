import { ClipboardCheck, ScanFace, ShieldCheck, BookOpen, FileSignature, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const stages = [
  { n:"01", icon:ClipboardCheck, title:"Application & Auto-Screening",  tag:"Automated",    tagColor:"#16A34A",  tagBg:"#DCFCE7",  desc:"NIC format validation, age check (18+), OTP-verified mobile, duplicate detection. Automated — zero staff time for rejected applicants." },
  { n:"02", icon:ScanFace,       title:"Identity Verification",         tag:"Face-match AI", tagColor:"#2563EB",  tagBg:"#DBEAFE",  desc:"NIC scan (both sides) + live selfie matched using facial recognition (iDenfy). Three-tier routing: auto-pass, manual review, or reject." },
  { n:"03", icon:ShieldCheck,    title:"Background Check",              tag:"Police Cleared",tagColor:"#D97706",  tagBg:"#FEF3C7",  desc:"Police Clearance Certificate from Sri Lanka Police — self-obtained, staff-verified. Two personal references contacted by phone." },
  { n:"04", icon:BookOpen,       title:"Orientation & Assessment",      tag:"Certified",     tagColor:"#7C3AED",  tagBg:"#EDE9FE",  desc:"Three self-paced training modules: Platform Rules, Cleaning Standards, Legal & Privacy. Mandatory 20-question quiz — 75% pass mark." },
  { n:"05", icon:FileSignature,  title:"Agreement & Activation",        tag:"Legally Bound", tagColor:"#0891B2",  tagBg:"#CCFBF1",  desc:"Digital signing of Contractor Agreement, Conduct Policy, and PDPA Consent. Bank verified. Profile activated with Probationary badge." },
];

const stats = [
  { value:"48hr",  label:"Average vetting time", color:"#16A34A" },
  { value:"7",     label:"Checks per cleaner",   color:"#2563EB" },
  { value:"3",     label:"Trust tiers",          color:"#7C3AED" },
  { value:"100%",  label:"Digitally signed",     color:"#D97706" },
];

export default function TrustVetting() {
  return (
    <section id="trust" aria-labelledby="trust-heading" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E4E8D9]/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#FFF8D4]/70 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">Trust & Safety</span>
          <h2 id="trust-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight mb-4">
            Every cleaner is vetted.{" "}
            <span className="text-[#16A34A]">No exceptions.</span>
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Our 5-stage process is the strictest in Sri Lanka. No cleaner appears on Airu without completing every step.
          </p>
        </AnimateOnScroll>

        {/* Stats — each with its own accent color */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14" role="list" aria-label="Vetting statistics">
          {stats.map(({ value, label, color }, i) => (
            <AnimateOnScroll key={label} delay={i * 60} direction="up">
              <div role="listitem" className="clay-card p-5 text-center">
                <p className="text-3xl font-bold mb-1 tabular-nums" style={{ color }}>{value}</p>
                <p className="text-xs font-medium text-[#64748B] leading-snug">{label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Timeline */}
          <div className="lg:col-span-3" role="list" aria-label="5-stage vetting process">
            <div className="relative flex flex-col gap-4">
              <div aria-hidden="true" className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-[#16A34A] via-[#7C3AED]/40 to-transparent hidden sm:block" />
              {stages.map(({ n, icon: Icon, title, desc, tag, tagColor, tagBg }, i) => (
                <AnimateOnScroll key={n} direction="left" delay={i * 70}>
                  <article role="listitem" className="relative flex gap-5 sm:gap-7">
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-white shadow-md" style={{ background: `linear-gradient(135deg, ${tagColor}, ${tagColor}cc)` }}>
                      <Icon size={17} color="white" strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="flex-1 clay-card p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-semibold uppercase tracking-widest opacity-40" style={{ color: tagColor }}>Stage {n}</span>
                          <h3 className="text-base font-semibold text-[#0F172A]">{title}</h3>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0" style={{ color: tagColor, background: tagBg }}>
                          <CheckCircle2 size={11} aria-hidden="true" />
                          {tag}
                        </span>
                      </div>
                      <p className="text-sm text-[#64748B] leading-relaxed">{desc}</p>
                    </div>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Right illustration */}
          <AnimateOnScroll direction="right" className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="clay-card-purple p-5 flex flex-col gap-4">
              <Image src="/images/cleaning-service-pana-alt.svg" alt="Illustration of a vetted and certified cleaning professional" width={340} height={320} loading="lazy" className="w-full h-auto rounded-2xl mix-blend-multiply" />
              <div className="clay-card p-4 text-center">
                <p className="text-sm text-[#64748B]">No other platform in Sri Lanka operates this level of cleaner verification.</p>
                <p className="text-sm font-bold text-[#0F172A] mt-1">Airu is the new trust standard.</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
