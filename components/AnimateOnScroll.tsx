"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "fade" | "left" | "right";
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) { setVisible(true); setPrefersReduced(true); return; }

    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); }
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initial: Record<string, string> = {
    up:    "opacity-0 translate-y-10",
    fade:  "opacity-0",
    left:  "opacity-0 -translate-x-10",
    right: "opacity-0 translate-x-10",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: prefersReduced ? "0ms" : `${delay}ms` }}
      className={`${
        prefersReduced ? "" : `transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0 translate-y-0" : initial[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
