import { NextRequest, NextResponse } from "next/server";

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 100;  // per IP per window

interface WindowEntry {
  count: number;
  resetAt: number;
}

// Module-level store — persists within a single process/edge isolate.
// On Vercel Edge Runtime isolates may be short-lived, but this still
// provides meaningful protection on self-hosted and dev environments.
const store = new Map<string, WindowEntry>();

function pruneStore(now: number): void {
  for (const [key, entry] of store) {
    if (entry.resetAt <= now) store.delete(key);
  }
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export function middleware(req: NextRequest): NextResponse {
  const now = Date.now();
  const ip = getClientIp(req);

  // Prune stale entries ~5% of requests to keep memory bounded
  if (Math.random() < 0.05) pruneStore(now);

  const entry = store.get(ip);

  if (!entry || entry.resetAt <= now) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  } else if (entry.count < MAX_REQUESTS) {
    entry.count++;
  } else {
    const retryAfterSeconds = Math.ceil((entry.resetAt - now) / 1000);
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
        "Content-Type": "text/plain",
      },
    });
  }

  const res = NextResponse.next();

  // Security headers applied to every HTML response
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.headers.set("X-DNS-Prefetch-Control", "on");

  return res;
}

export const config = {
  matcher: [
    // Apply to all routes except Next.js internals and public static assets
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};
