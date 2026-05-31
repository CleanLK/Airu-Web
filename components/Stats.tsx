const stats = [
  { value:"5-Stage", label:"Vetting process",   sub:"Strictest in Sri Lanka",    color:"#A3B087" },
  { value:"48hr",    label:"Avg onboarding",    sub:"Application to first job",  color:"#FFF8D4" },
  { value:"3 min",   label:"To book a cleaner", sub:"Select, pay, confirmed",    color:"#A3B087" },
  { value:"0",       label:"Shortcuts taken",   sub:"Every check is mandatory",  color:"#FFF8D4" },
];

export default function Stats() {
  return (
    <section aria-label="Platform statistics" className="py-16 bg-[#313647] relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#A3B087]/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#435663]/20 blur-[80px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {stats.map(({ value, label, sub, color }) => (
            <div key={label} className="text-center">
              <dt className="sr-only">{label}</dt>
              <dd>
                <p className="text-4xl lg:text-5xl font-bold mb-1 tabular-nums" style={{ color }}>{value}</p>
                <p className="text-sm font-semibold text-white/80 mb-0.5">{label}</p>
                <p className="text-xs text-white/35">{sub}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
