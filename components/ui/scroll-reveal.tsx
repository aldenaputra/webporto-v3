"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollReveal({
  children,
  className = "",
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setReducedMotion(mediaQuery.matches);

    updateReducedMotion();
    mediaQuery.addEventListener("change", updateReducedMotion);

    if (reducedMotion) {
      setIsVisible(true);
      return () => mediaQuery.removeEventListener("change", updateReducedMotion);
    }

    const element = elementRef.current;
    if (!element) {
      return () => mediaQuery.removeEventListener("change", updateReducedMotion);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", updateReducedMotion);
    };
  }, [once, reducedMotion]);

  return (
    <div
      ref={elementRef}
      className={`${className} transition-all duration-700 ease-out ${
        isVisible || reducedMotion
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
