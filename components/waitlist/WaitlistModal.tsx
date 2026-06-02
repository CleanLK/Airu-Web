"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X, Check, ShieldCheck, Sparkles } from "lucide-react";
import HostWaitlistForm from "./HostWaitlistForm";
import CleanerWaitlistForm from "./CleanerWaitlistForm";

type Role = "host" | "cleaner";

const OPEN_HASHES: Record<string, Role> = {
  "#join-host": "host",
  "#join-cleaner": "cleaner",
  "#waitlist": "host",
};

export default function WaitlistModal() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<Role>("host");
  const [done, setDone] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  /* ── Open / close driven by URL hash (deep-linkable) ───────── */
  const syncFromHash = useCallback(() => {
    const hash = window.location.hash;
    if (hash in OPEN_HASHES) {
      lastFocused.current = document.activeElement as HTMLElement;
      setRole(OPEN_HASHES[hash]);
      setDone(false);
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash]);

  const close = useCallback(() => {
    // Clear the hash without adding history or jumping the page.
    history.replaceState(null, "", window.location.pathname + window.location.search);
    setOpen(false);
    lastFocused.current?.focus?.();
  }, []);

  /* ── Body scroll lock + initial focus ──────────────────────── */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      const focusable = panelRef.current?.querySelector<HTMLElement>(
        'input, select, textarea, button, [href], [tabindex]:not([tabindex="-1"])'
      );
      focusable?.focus();
    }, 60);
    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(t);
    };
  }, [open, role, done]);

  /* ── Esc to close + focus trap ─────────────────────────────── */
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const nodes = panelRef.current?.querySelectorAll<HTMLElement>(
        'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
      );
      if (!nodes || nodes.length === 0) return;
      const list = Array.from(nodes).filter((n) => n.offsetParent !== null);
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (!open) return null;

  const isHost = role === "host";

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto"
      aria-hidden={false}
    >
      {/* Background base tint + colored ambient blobs (gives the glass something to refract) */}
      <div aria-hidden="true" className="animate-scrim-in fixed inset-0 bg-[#1B1E29]/55 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-20 w-[460px] h-[460px] rounded-full bg-[#22C55E]/30 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full bg-[#A3B087]/28 blur-[120px]" />
        <div className="absolute -bottom-28 left-1/4 w-[480px] h-[480px] rounded-full bg-[#435663]/45 blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-[#FFF8D4]/10 blur-[140px]" />
      </div>

      {/* Scrim dismiss */}
      <button
        type="button"
        aria-label="Close waitlist"
        onClick={close}
        className="fixed inset-0 cursor-default"
        tabIndex={-1}
      />

      {/* Panel — claymorphism card wrapped in a soft glass halo */}
      <div className="animate-panel-in relative z-10 w-full max-w-xl my-auto">
        {/* Glass glow halo behind the card */}
        <div aria-hidden="true" className="pointer-events-none absolute -inset-3 sm:-inset-4 rounded-[40px] bg-gradient-to-br from-[#22C55E]/30 via-[#A3B087]/18 to-[#313647]/25 blur-2xl" />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        className="relative clay-card !rounded-[28px] p-6 sm:p-8"
      >
        {/* Close */}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="clay-chip clay-pressable absolute top-4 right-4 w-9 h-9 !rounded-full flex items-center justify-center text-[#64748B] hover:text-[#313647] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]"
        >
          <X size={18} aria-hidden="true" />
        </button>

        {done ? (
          /* ── Success state ─────────────────────────────────── */
          <div className="flex flex-col items-center text-center gap-4 py-6">
            <div className="clay-card-green w-16 h-16 !rounded-full flex items-center justify-center">
              <Check size={30} color="#15803D" strokeWidth={3} aria-hidden="true" />
            </div>
            <h2 id="waitlist-title" className="text-2xl font-bold text-[#0F172A]">You&apos;re on the list! 🎉</h2>
            <p className="text-[15px] text-[#64748B] leading-relaxed max-w-sm">
              Thanks for joining the Airu {isHost ? "host" : "cleaner"} waitlist. We&apos;ll be in touch by SMS
              and email as we roll out in Colombo. Welcome aboard.
            </p>
            <button
              type="button"
              onClick={close}
              className="btn-navy mt-2 min-h-[48px] px-8 rounded-2xl text-white font-semibold text-[15px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#313647] focus-visible:ring-offset-2"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Role toggle — segmented clay control */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#F1F5F9] w-full mb-6" role="tablist" aria-label="Waitlist type">
              {(["host", "cleaner"] as Role[]).map((r) => {
                const active = role === r;
                return (
                  <button
                    key={r}
                    role="tab"
                    aria-selected={active}
                    onClick={() => { setRole(r); setDone(false); }}
                    className={`flex-1 min-h-[44px] rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] ${
                      active
                        ? "bg-white text-[#0F172A] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_14px_rgba(49,54,71,0.12)]"
                        : "text-[#64748B] hover:text-[#313647]"
                    }`}
                  >
                    {r === "host" ? "I'm a Host" : "I'm a Cleaner"}
                  </button>
                );
              })}
            </div>

            {/* Heading */}
            <div className="flex items-start gap-3 mb-6 pr-8">
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${isHost ? "bg-[#16A34A]" : "bg-[#313647]"}`}>
                {isHost
                  ? <ShieldCheck size={20} color="white" strokeWidth={2} aria-hidden="true" />
                  : <Sparkles size={20} color="white" strokeWidth={2} aria-hidden="true" />}
              </div>
              <div>
                <h2 id="waitlist-title" className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-tight">
                  {isHost ? "Join the host waitlist" : "Join as a cleaner"}
                </h2>
                <p className="text-sm text-[#64748B] mt-0.5">
                  {isHost
                    ? "Be first to book vetted cleaners for your property in Colombo."
                    : "Get early access to reliable, digitally-paid cleaning jobs."}
                </p>
              </div>
            </div>

            {/* Active form */}
            {isHost
              ? <HostWaitlistForm onSuccess={() => setDone(true)} />
              : <CleanerWaitlistForm onSuccess={() => setDone(true)} />}

            <p className="text-[11px] text-[#94A3B8] mt-5 text-center">
              Your details are kept private and used only to contact you about Airu&apos;s launch.
            </p>
          </>
        )}
      </div>
      </div>
    </div>
  );
}
