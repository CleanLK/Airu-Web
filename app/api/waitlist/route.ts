import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

/* ── Validation helpers ─────────────────────────────────────── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Sri Lankan mobile: 07XXXXXXXX (10 digits) or +94 7XXXXXXXX
const PHONE_RE = /^(?:\+?94|0)7\d{8}$/;

const PROPERTY_TYPES = ["villa", "hotel", "apartment"] as const;
const ROLES = ["host", "cleaner"] as const;

type Json = Record<string, unknown>;

function str(v: unknown, max = 200): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function bad(errors: Record<string, string>) {
  return NextResponse.json({ ok: false, errors }, { status: 400 });
}

export async function POST(req: NextRequest) {
  let body: Json;
  try {
    body = (await req.json()) as Json;
  } catch {
    return bad({ _form: "Invalid request body." });
  }

  // Honeypot — silently accept bots without persisting
  if (str(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const role = str(body.role).toLowerCase();
  if (!ROLES.includes(role as (typeof ROLES)[number])) {
    return bad({ _form: "Unknown waitlist type." });
  }

  const errors: Record<string, string> = {};
  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone).replace(/\s+/g, "");

  if (name.length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";
  if (!PHONE_RE.test(phone)) errors.phone = "Enter a valid Sri Lankan mobile (e.g. 077 123 4567).";
  if (body.consent !== true) errors.consent = "Please accept to continue.";

  const record: Json = {
    role,
    name,
    email,
    phone,
    city: str(body.city),
    submittedAt: new Date().toISOString(),
  };

  if (role === "host") {
    const propertyType = str(body.propertyType).toLowerCase();
    if (!PROPERTY_TYPES.includes(propertyType as (typeof PROPERTY_TYPES)[number])) {
      errors.propertyType = "Select your property type.";
    }
    record.propertyType = propertyType;
    record.portfolio = str(body.portfolio);      // # of properties bucket
    record.size = str(body.size);                // rooms / bedrooms bucket
    record.hostType = str(body.hostType);        // individual / management co.
  } else {
    record.experience = str(body.experience);
    const langs = Array.isArray(body.languages)
      ? body.languages.filter((l): l is string => typeof l === "string").slice(0, 5)
      : [];
    record.languages = langs;
    record.transport = body.transport === true;
    record.nic = str(body.nic, 20);
  }

  if (Object.keys(errors).length > 0) return bad(errors);

  // Best-effort persistence — never fail the request on storage errors.
  try {
    const file =
      process.env.WAITLIST_FILE ?? path.join(process.cwd(), ".data", "waitlist.jsonl");
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.appendFile(file, JSON.stringify(record) + "\n", "utf8");
  } catch (err) {
    console.error("[waitlist] file persistence failed:", err);
  }

  // Optional: forward to a webhook (Slack, Google Sheets, Zapier, etc.)
  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
    } catch (err) {
      console.error("[waitlist] webhook forward failed:", err);
    }
  }

  console.log(`[waitlist] new ${role} signup:`, record.email);
  return NextResponse.json({ ok: true });
}
