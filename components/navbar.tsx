"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navigationItems, profile } from "@/data/profile";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-visible border-b border-black/5 bg-transparent backdrop-blur-xl dark:border-white/5 dark:bg-transparent">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-4 px-6 sm:px-8 lg:px-10">
        <a href="#hero" className="font-ui-mono shrink-0 text-sm font-medium">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`font-ui-mono text-xs transition ${
                  isActive ? "text-[var(--accent)]" : "text-[var(--text-muted)] hover:text-[var(--accent)]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href="/CV Alden Ardiwinata Putra 2026.pdf"
            className="font-ui-mono inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 text-xs"
          >
            <Download aria-hidden="true" size={14} />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-muted)] md:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-[var(--background)]/80 px-6 py-24 backdrop-blur-xl md:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="w-full max-w-sm rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/90 p-6 shadow-2xl"
          >
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-2xl px-4 py-3 font-ui-mono text-base transition ${
                    isActive ? "bg-[var(--accent)] text-[var(--surface)]" : "text-[var(--text-primary)] hover:bg-[var(--surface)]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
