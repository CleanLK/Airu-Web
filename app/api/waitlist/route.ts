import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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

/* ── Supabase client (server-only, uses service_role) ───────── */
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;

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
  const email = str(body.email).toLowerCase();
  const phone = str(body.phone).replace(/\s+/g, "");

  if (name.length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";
  if (!PHONE_RE.test(phone)) errors.phone = "Enter a valid Sri Lankan mobile (e.g. 077 123 4567).";
  if (body.consent !== true) errors.consent = "Please accept to continue.";

  const row: Record<string, unknown> = {
    role,
    name,
    email,
    phone,
    city: str(body.city) || null,
  };

  if (role === "host") {
    const propertyType = str(body.propertyType).toLowerCase();
    if (!PROPERTY_TYPES.includes(propertyType as (typeof PROPERTY_TYPES)[number])) {
      errors.propertyType = "Select your property type.";
    }
    row.property_type = propertyType;
    row.portfolio = str(body.portfolio) || null;
    row.size = str(body.size) || null;
    row.host_type = str(body.hostType) || null;
  } else {
    row.experience = str(body.experience) || null;
    const langs = Array.isArray(body.languages)
      ? body.languages.filter((l): l is string => typeof l === "string").slice(0, 5)
      : [];
    row.languages = langs;
    row.transport = body.transport === true;
    row.nic = str(body.nic, 20) || null;
  }

  if (Object.keys(errors).length > 0) return bad(errors);

  if (!supabase) {
    console.error("[waitlist] Supabase env vars missing — set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY");
    return NextResponse.json(
      { ok: false, errors: { _form: "Server not configured. Please try again later." } },
      { status: 500 }
    );
  }

  const { error } = await supabase.from("waitlist").insert(row);

  if (error) {
    if (error.code === "23505") {
      return bad({ email: "This email is already on the waitlist." });
    }
    console.error("[waitlist] insert failed:", error);
    return NextResponse.json(
      { ok: false, errors: { _form: "Could not save your signup. Please try again." } },
      { status: 500 }
    );
  }

  // Optional: forward to a webhook (Slack, Google Sheets, Zapier, etc.)
  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...row, submitted_at: new Date().toISOString() }),
      });
    } catch (err) {
      console.error("[waitlist] webhook forward failed:", err);
    }
  }

  console.log(`[waitlist] new ${role} signup:`, email);
  return NextResponse.json({ ok: true });
}
