const cols = {
  Platform: [
    { label:"How It Works",   href:"#how-it-works" },
    { label:"Trust & Safety", href:"#trust" },
    { label:"Pricing",        href:"#pricing" },
  ],
  Hosts: [
    { label:"Book a Cleaner",      href:"#book" },
    { label:"Property Dashboard",  href:"#" },
    { label:"Cancellation Policy", href:"#" },
  ],
  Cleaners: [
    { label:"Apply to Join",    href:"#join" },
    { label:"How Payouts Work", href:"#" },
    { label:"Vetting Process",  href:"#trust" },
  ],
  Company: [
    { label:"About Zeno",            href:"#" },
    { label:"Contact",               href:"#" },
    { label:"Privacy Policy (PDPA)", href:"#" },
  ],
};

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#313647] relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#A3B087]/8 blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#435663]/15 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-5 cursor-pointer w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] rounded-lg" aria-label="Airu — home">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#22C55E] to-[#15803D] flex items-center justify-center shadow-lg shadow-green-900/30 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M9 2C9 2 4 5.5 4 10C4 12.76 6.24 15 9 15C11.76 15 14 12.76 14 10C14 5.5 9 2 9 2Z" fill="white" opacity="0.9"/>
                  <path d="M9 6C9 6 6.5 8 6.5 10.5C6.5 11.88 7.62 13 9 13C10.38 13 11.5 11.88 11.5 10.5C11.5 8 9 6 9 6Z" fill="white"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Airu</span>
            </a>
            <p className="text-sm text-white/45 leading-relaxed mb-4">Sri Lanka&apos;s trusted on-demand cleaning marketplace for Airbnb hosts and short-term rental managers.</p>
            <span className="glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-white/55">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3B087]" aria-hidden="true" />
              Colombo, Sri Lanka · Launching 2025
            </span>
          </div>

          {Object.entries(cols).map(([section, items]) => (
            <nav key={section} aria-label={`${section} links`}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">{section}</h4>
              <ul className="flex flex-col gap-3">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-white/45 hover:text-white/80 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#22C55E] rounded">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="h-px bg-white/8 mb-8" aria-hidden="true" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 text-center sm:text-left">© 2025 Zeno Pvt Ltd. All rights reserved. Airu is a trademark of Zeno.</p>
          <div className="flex items-center gap-6">
            {["Privacy Policy","Terms of Service","PDPA Rights"].map(label=>(
              <a key={label} href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#22C55E] rounded">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
