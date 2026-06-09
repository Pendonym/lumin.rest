"use client";

import { useState, useEffect, useRef } from "react";

export default function TopLoader() {
  const [phase, setPhase] = useState<"loading" | "fading" | "done">("loading");
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (barRef.current) {
          barRef.current.style.width = "100%";
        }
      });
    });

    const fadeTimer = setTimeout(() => setPhase("fading"), 600);
    const doneTimer = setTimeout(() => setPhase("done"), 900);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-transparent">
      <div
        ref={barRef}
        className="h-full bg-[#f8bfd4]"
        style={{
          width: "0%",
          opacity: phase === "fading" ? 0 : 1,
          transition: `width 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease-out`,
        }}
      />
    </div>
  );
}
