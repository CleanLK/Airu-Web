import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airu — Sri Lanka's Trusted Cleaning Marketplace for Airbnb Hosts",
  description:
    "Book vetted, background-checked cleaners for your Airbnb property in Sri Lanka. NIC verified, police cleared, trained professionals — booked in minutes, tracked in real time.",
  keywords: "cleaning marketplace, Airbnb cleaning, Sri Lanka, vetted cleaners, Colombo, Zeno",
  openGraph: {
    title: "Airu — On-Demand Cleaning for Airbnb Hosts",
    description: "Sri Lanka's first vetted cleaning marketplace for short-term rental hosts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* UX: Skip link for keyboard users (WCAG 2.4.1) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
