/* Shared client-side validators (mirror the server) + submit helper. */

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_RE = /^(?:\+?94|0)7\d{8}$/;

export function validateContact(v: { name: string; email: string; phone: string; consent: boolean }) {
  const e: Record<string, string> = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (!PHONE_RE.test(v.phone.replace(/\s+/g, ""))) e.phone = "Enter a valid Sri Lankan mobile (e.g. 077 123 4567).";
  if (!v.consent) e.consent = "Please accept to continue.";
  return e;
}

export type SubmitResult = { ok: boolean; errors?: Record<string, string> };

export async function postWaitlist(payload: Record<string, unknown>): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as SubmitResult;
    if (res.ok && data.ok) return { ok: true };
    return { ok: false, errors: data.errors ?? { _form: "Something went wrong. Please try again." } };
  } catch {
    return { ok: false, errors: { _form: "Network error. Please check your connection and try again." } };
  }
}
