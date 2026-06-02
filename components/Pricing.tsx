import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const hostFeatures = [
  "No subscription — pay only per completed booking",
  "Service fee shown transparently before you confirm",
  "Secure escrow — released only after job completion",
  "Full receipt and payment history in your dashboard",
  "PayHere-powered — Central Bank of Sri Lanka licensed",
];
const cleanerFeatures = [
  "Free to apply — no joining fee",
  "18% platform commission per completed job",
  "5% Withholding Tax auto-deducted and remitted to IRD",
  "Paid to your bank within 2 business days",
  "Full earnings breakdown on every payment notification",
];

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-20 lg:py-28 bg-[#FFF8D4] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <AnimateOnScroll className="flex-1 text-center lg:text-left">
            <span className="inline-block text-sm font-semibold text-[#D97706] uppercase tracking-widest mb-4">Transparent Pricing</span>
            <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight mb-4">No hidden fees. Ever.</h2>
            <p className="text-lg text-[#64748B] leading-relaxed">You always see exactly what you pay — and what your cleaner earns — before any money moves.</p>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right" className="flex-shrink-0 w-full max-w-xs">
            <div className="clay-card-cream p-5">
              <Image src="/images/gutter-cleaning-bro.svg" alt="Professional cleaning service illustration" width={280} height={220} loading="lazy" className="w-full h-auto rounded-xl mix-blend-multiply" />
            </div>
          </AnimateOnScroll>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Host */}
          <AnimateOnScroll direction="left">
            <div className="clay-card p-8 h-full">
              <p className="text-xs font-semibold text-[#16A34A] uppercase tracking-widest mb-3">For Hosts</p>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-1">Free to join</h3>
              <p className="text-sm text-[#64748B] mb-6">Pay only for completed bookings with a transparent service fee.</p>
              <div className="clay-card-green p-4 mb-6" role="table" aria-label="Example host booking breakdown">
                <p className="text-xs font-semibold text-[#64748B] uppercase tracking-widest mb-3">Example booking</p>
                {[["Job fee (cleaner)","LKR 2,560"],["Platform service fee","LKR 640"]].map(([k,v])=>(
                  <div key={k} role="row" className="flex items-center justify-between mb-2">
                    <span role="cell" className="text-sm text-[#0F172A]">{k}</span>
                    <span role="cell" className="text-sm font-medium text-[#0F172A] tabular-nums">{v}</span>
                  </div>
                ))}
                <div className="h-px bg-[#BBF7D0] my-2" aria-hidden="true" />
                <div role="row" className="flex items-center justify-between">
                  <span role="cell" className="text-sm font-semibold text-[#0F172A]">Total you pay</span>
                  <span role="cell" className="text-base font-bold text-[#16A34A] tabular-nums">LKR 3,200</span>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {hostFeatures.map(f=>(
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} color="#16A34A" className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-[#64748B]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Cleaner */}
          <AnimateOnScroll direction="right">
            <div className="clay-card p-8 h-full">
              <p className="text-xs font-semibold text-[#D97706] uppercase tracking-widest mb-3">For Cleaners</p>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-1">Free to apply</h3>
              <p className="text-sm text-[#64748B] mb-6">No upfront fees. Commission deducted per completed booking.</p>
              <div className="clay-card-amber p-4 mb-6" role="table" aria-label="Example cleaner payout breakdown">
                <p className="text-xs font-semibold text-[#64748B] uppercase tracking-widest mb-3">Example job payout</p>
                {[["Gross job fee","LKR 3,200",false],["Platform commission (18%)","– LKR 576",true],["Withholding Tax (5%)","– LKR 131",true]].map(([k,v,isRed])=>(
                  <div key={String(k)} role="row" className="flex items-center justify-between mb-2">
                    <span role="cell" className="text-sm text-[#0F172A]">{k}</span>
                    <span role="cell" className={`text-sm font-medium tabular-nums ${isRed?"text-red-500":"text-[#0F172A]"}`}>{v}</span>
                  </div>
                ))}
                <div className="h-px bg-[#FDE68A] my-2" aria-hidden="true" />
                <div role="row" className="flex items-center justify-between">
                  <span role="cell" className="text-sm font-semibold text-[#0F172A]">You receive</span>
                  <span role="cell" className="text-base font-bold text-[#D97706] tabular-nums">LKR 2,493</span>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {cleanerFeatures.map(f=>(
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} color="#D97706" className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-[#64748B]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
