import { CalendarDays, Zap, MapPin, Sparkles, CreditCard, Star } from "lucide-react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  { n:"01", icon:CalendarDays, title:"Book",   desc:"Select property, date, time, and job type. Browse verified cleaners. Pay securely via PayHere. Confirmed in under 3 minutes." },
  { n:"02", icon:Zap,          title:"Match",  desc:"Platform matches your job to the best available vetted cleaner based on rating, distance, and availability." },
  { n:"03", icon:MapPin,       title:"Track",  desc:"Watch your cleaner's live location on a map. GPS-stamped check-in on arrival. Real-time status updates throughout." },
  { n:"04", icon:Sparkles,     title:"Clean",  desc:"Cleaner follows the platform checklist and your specific instructions. Before and after photos uploaded on completion." },
  { n:"05", icon:CreditCard,   title:"Pay",    desc:"Payment held in escrow from confirmation. Released to the cleaner automatically after the job is completed." },
  { n:"06", icon:Star,         title:"Review", desc:"Rate your cleaner after every job. Top performers earn priority matching and access to premium properties." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="hiw-heading" className="py-20 lg:py-28 bg-[#F2F4ED] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + illustration */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <AnimateOnScroll className="flex-1 text-center lg:text-left">
            <h2 id="hiw-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#313647] leading-tight tracking-tight mb-4">
              Six steps. Spotless property.
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed max-w-lg">
              Everything from booking to payment on one platform — no calls, no surprises.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right" className="flex-shrink-0 w-full max-w-xs lg:max-w-sm">
            <div className="clay-card-sage p-4">
              <Image src="/images/cleaning-office-amico.svg" alt="Illustration of a professional cleaning a property" width={340} height={280} loading="lazy" className="w-full h-auto rounded-xl mix-blend-multiply" />
            </div>
          </AnimateOnScroll>
        </div>

        {/* Step cards — navy icon accent */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map(({ n, icon: Icon, title, desc }, i) => (
            <AnimateOnScroll key={n} direction="up" delay={i * 70}>
              <article className="clay-card p-6 lg:p-7 h-full group">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-5xl font-bold text-[#E4E8D9] select-none tabular-nums group-hover:text-[#C4D0A8] transition-colors duration-200" aria-hidden="true">{n}</span>
                  <div className="w-11 h-11 rounded-2xl bg-[#313647] flex items-center justify-center flex-shrink-0">
                    <Icon size={20} color="white" strokeWidth={2} aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#313647] mb-2">{title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{desc}</p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-12 flex justify-center" delay={200}>
          <div className="clay-card-sage px-6 py-3.5 !rounded-full text-sm font-medium text-[#7A8763]">
            Average booking confirmed in under 3 minutes
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
