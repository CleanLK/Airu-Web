import { Banknote, CalendarDays, TrendingUp, BadgeCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const benefits = [
  { icon:Banknote,     title:"Reliable digital income",   desc:"Paid per completed job directly to your bank within 2 business days. No cash, no chasing.", color:"#16A34A", bg:"#DCFCE7" },
  { icon:CalendarDays, title:"You control your schedule", desc:"Accept or decline jobs freely. Set your own availability. No exclusivity — work with multiple platforms.", color:"#2563EB", bg:"#DBEAFE" },
  { icon:TrendingUp,   title:"Grow your reputation",      desc:"Every job builds your rating. Top Rated cleaners get priority matching, premium properties, and higher-value jobs.", color:"#7C3AED", bg:"#EDE9FE" },
  { icon:BadgeCheck,   title:"A professional profile",    desc:"Your verified badge, rating, and job count are visible to hosts. Your work history becomes a portable credential.", color:"#D97706", bg:"#FEF3C7" },
];

const earnings = [
  { jobs:"5 jobs/wk",  gross:"LKR 15,000", net:"~LKR 11,400", pct:33, color:"#16A34A" },
  { jobs:"10 jobs/wk", gross:"LKR 30,000", net:"~LKR 22,800", pct:66, color:"#2563EB" },
  { jobs:"20 jobs/wk", gross:"LKR 60,000", net:"~LKR 45,600", pct:100, color:"#7C3AED" },
];

export default function ForCleaners() {
  return (
    <section id="for-cleaners" aria-labelledby="cleaners-heading" className="py-20 lg:py-28 bg-[#F2F4ED] relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/65 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#E4E8D9]/70 blur-[60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left */}
          <AnimateOnScroll direction="left" className="flex flex-col gap-8">
            <div>
              <span className="inline-block text-sm font-semibold text-[#7A8763] uppercase tracking-widest mb-4">For Cleaners</span>
              <h2 id="cleaners-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight mb-4">
                Turn your skills into a professional career.
              </h2>
              <p className="text-lg text-[#64748B] leading-relaxed">
                Airu gives cleaning professionals access to verified hosts, reliable digital income, and a platform to build their professional reputation.
              </p>
            </div>

            <ul className="flex flex-col gap-3" aria-label="Cleaner benefits">
              {benefits.map(({ icon: Icon, title, desc, color, bg }) => (
                <li key={title} className="clay-card p-4 flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: bg }} aria-hidden="true">
                    <Icon size={20} style={{ color }} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#0F172A] mb-1">{title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a href="#join-cleaner" id="join" className="inline-flex items-center justify-center gap-2.5 min-h-[52px] text-white font-semibold text-[15px] px-9 rounded-2xl btn-primary cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2F4ED] w-fit">
              Apply to Join Airu <ArrowRight size={16} aria-hidden="true" />
            </a>
          </AnimateOnScroll>

          {/* Right — illustration + earnings */}
          <AnimateOnScroll direction="right" className="flex flex-col gap-5">
            <div className="clay-card-navy p-5">
              <Image src="/images/cleaning-service-rafiki.svg" alt="Professional cleaner earning income through the Airu marketplace" width={440} height={300} loading="lazy" className="w-full h-auto rounded-2xl mix-blend-screen opacity-85" />
            </div>

            {/* Earnings — clay cards with per-row accent */}
            <div className="clay-card p-6">
              <h3 className="text-base font-semibold text-[#0F172A] mb-1">Potential Earnings</h3>
              <p className="text-xs text-[#64748B] mb-4">Avg job fee LKR 3,000 · 18% commission + 5% WHT.</p>
              <ul className="flex flex-col gap-2.5">
                {earnings.map(({ jobs, gross, net, pct, color }) => (
                  <li key={jobs} className="rounded-2xl p-3.5 border border-[#E2E8F0]">
                    <div className="flex items-end justify-between mb-2">
                      <div>
                        <p className="text-xs font-medium text-[#64748B]">{jobs} · {gross} gross</p>
                      </div>
                      <p className="text-xl font-bold tabular-nums" style={{ color }}>{net}</p>
                    </div>
                    <div className="h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                      <div className="h-full rounded-full transition-all duration-700" style={{ width:`${pct}%`, background: color }} />
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#64748B] mt-3">* Indicative only. Actual earnings vary by job type and volume.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
