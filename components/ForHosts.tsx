import { Clock, MapPin, Camera, ShieldCheck, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const benefits = [
  { icon:ShieldCheck, title:"Only vetted cleaners",    desc:"NIC-verified, police-cleared, reference-checked, and trained. Every cleaner shows their trust badge before you book.", color:"#16A34A", bg:"#DCFCE7" },
  { icon:Clock,       title:"Book in under 3 minutes", desc:"Property, time slot, cleaner — done. Payment captured securely at confirmation via PayHere.", color:"#D97706", bg:"#FEF3C7" },
  { icon:MapPin,      title:"Real-time tracking",      desc:"Live map tracking. GPS-stamped check-in and check-out — full digital audit trail on every job.", color:"#16A34A", bg:"#DCFCE7" },
  { icon:Camera,      title:"Before & after photos",   desc:"Mandatory photo uploads at job start and completion. Stored 90 days. Your primary evidence for any dispute.", color:"#D97706", bg:"#FEF3C7" },
];

export default function ForHosts() {
  return (
    <section id="for-hosts" aria-labelledby="hosts-heading" className="py-20 lg:py-28 bg-[#FFF8D4] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — illustration + booking card */}
          <AnimateOnScroll direction="left" className="order-2 lg:order-1">
            <div className="relative">
              <div className="clay-card-sage p-5 lg:p-6 relative overflow-hidden">
                <Image src="/images/cleaning-service-cuate.svg" alt="Airbnb host booking a professional cleaner through the Airu app" width={460} height={380} loading="lazy" className="w-full h-auto rounded-2xl mix-blend-multiply" />
              </div>
              {/* Booking card floated below */}
              <div className="clay-card p-4 mt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">Booking Confirmed</span>
                  <span className="text-xs bg-[#16A34A] text-white font-semibold px-2.5 py-1 rounded-full">✓ Paid</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">K</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#0F172A] truncate">Kasun Perera</p>
                    <div className="flex items-center gap-1">
                      <Star size={12} fill="#D97706" color="#D97706" aria-hidden="true" />
                      <span className="text-xs text-[#64748B]">4.9 · Top Rated · 120 jobs</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-xs text-[#64748B]">Today</p>
                    <p className="text-sm font-bold text-[#0F172A]">LKR 3,200</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right — copy */}
          <AnimateOnScroll direction="right" className="order-1 lg:order-2 flex flex-col gap-8">
            <div>
              <span className="inline-block text-sm font-semibold text-[#16A34A] uppercase tracking-widest mb-4">For Hosts</span>
              <h2 id="hosts-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight mb-4">
                Your property. Guest-ready. Every time.
              </h2>
              <p className="text-lg text-[#64748B] leading-relaxed">
                Stop relying on informal contacts and WhatsApp chases. Airu gives Airbnb hosts a professional, accountable cleaning service built for the short-term rental turnover model.
              </p>
            </div>

            <ul className="flex flex-col gap-3" aria-label="Host benefits">
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

            <a href="#join-host" id="book" className="inline-flex items-center justify-center gap-2.5 min-h-[52px] text-white font-semibold text-[15px] px-9 rounded-2xl btn-primary cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 w-fit">
              Join as a Host <ArrowRight size={16} aria-hidden="true" />
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
