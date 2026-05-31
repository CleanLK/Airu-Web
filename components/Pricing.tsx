import { CheckCircle2 } from "lucide-react";
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
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/75 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#F2F4ED]/70 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-[#D97706] uppercase tracking-widest mb-4">Transparent Pricing</span>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight mb-4">No hidden fees. Ever.</h2>
          <p className="text-lg text-[#64748B] leading-relaxed">You always see exactly what you pay — and what your cleaner earns — before any money moves.</p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Host */}
          <AnimateOnScroll direction="left">
            <div className="clay-card p-8 relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#16A34A] to-[#22C55E] rounded-t-[24px]" aria-hidden="true" />
              <div className="absolute top-0 right-0 bg-gradient-to-br from-[#16A34A] to-[#15803D] text-white text-xs font-semibold px-4 py-1.5 rounded-bl-2xl rounded-tr-[24px]">For Hosts</div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-1 mt-4">Free to join</h3>
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
            <div className="clay-card p-8 relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D97706] to-[#F59E0B] rounded-t-[24px]" aria-hidden="true" />
              <div className="absolute top-0 right-0 bg-gradient-to-br from-[#D97706] to-[#B45309] text-white text-xs font-semibold px-4 py-1.5 rounded-bl-2xl rounded-tr-[24px]">For Cleaners</div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-1 mt-4">Free to apply</h3>
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
