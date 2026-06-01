import { ShieldCheck, Timer, Zap, Ban } from "lucide-react";

const stats = [
  { value:"5-Stage", label:"Vetting process",   sub:"Strictest in Sri Lanka",    color:"#C4D0A8", icon:ShieldCheck },
  { value:"48hr",    label:"Avg onboarding",    sub:"Application to first job",  color:"#FFF8D4", icon:Timer },
  { value:"3 min",   label:"To book a cleaner", sub:"Select, pay, confirmed",    color:"#C4D0A8", icon:Zap },
  { value:"0",       label:"Shortcuts taken",   sub:"Every check is mandatory",  color:"#FFF8D4", icon:Ban },
];

export default function Stats() {
  return (
    <section aria-label="Platform statistics" className="py-16 bg-[#313647] relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#A3B087]/14 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#435663]/25 blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-[#FFF8D4]/05 blur-[110px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map(({ value, label, sub, color, icon: Icon }) => (
            <div key={label} className="glass-card p-5 lg:p-6 text-center flex flex-col items-center">
              <dt className="sr-only">{label}</dt>
              <dd className="flex flex-col items-center">
                <span className="glass-pill w-11 h-11 rounded-2xl flex items-center justify-center mb-3" aria-hidden="true">
                  <Icon size={20} style={{ color }} strokeWidth={2} />
                </span>
                <p className="text-4xl lg:text-5xl font-bold mb-1 tabular-nums" style={{ color }}>{value}</p>
                <p className="text-sm font-semibold text-white/85 mb-0.5">{label}</p>
                <p className="text-xs text-white/45">{sub}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
