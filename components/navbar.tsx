"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Download, Menu, X } from "lucide-react";
import { navigationItems, profile } from "@/data/profile";
import { ThemeToggle } from "./theme-toggle";

const TRANSITION_MS = 300;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);
  const menuTriggerRef = useRef<HTMLButtonElement | null>(null);

  const openMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsMenuOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsVisible(true));
    });
  };

  const closeMenu = () => {
    setIsVisible(false);
    closeTimerRef.current = setTimeout(() => setIsMenuOpen(false), TRANSITION_MS);
  };

  const toggleMenu = () => (isMenuOpen ? closeMenu() : openMenu());

  useEffect(() => {
    if (!isMenuOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const menuTrigger = menuTriggerRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const getFocusableElements = () =>
      menuRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }

      if (e.key !== "Tab") return;

      const focusableElements = getFocusableElements();
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (!firstFocusable || !lastFocusable) {
        e.preventDefault();
      } else if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    getFocusableElements()[0]?.focus();

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      (menuTrigger ?? previouslyFocused)?.focus();
    };
  }, [isMenuOpen]);

  const mobileMenu = isMenuOpen
    ? createPortal(
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-x-0 top-[4.5rem] bottom-0 z-[49] overflow-hidden lg:hidden"
        >
          {/* Pure Backdrop Blur Overlay (No dark shade) */}
          <div
            aria-hidden="true"
            onClick={closeMenu}
            style={{
              transition: `opacity ${TRANSITION_MS}ms ease, backdrop-filter ${TRANSITION_MS}ms ease`,
            }}
            className={`absolute inset-0 ${
              isVisible
                ? "opacity-100 backdrop-blur-sm"
                : "opacity-0 backdrop-blur-none"
            }`}
          />

          {/* Glass Slide-Down Menu Drawer */}
          <nav
            ref={menuRef}
            aria-label="Mobile menu navigation"
            style={{
              transition: isVisible
                ? `transform ${TRANSITION_MS}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${TRANSITION_MS}ms ease`
                : `opacity ${TRANSITION_MS}ms ease`,
            }}
            className={`relative z-10 w-full border-b border-black/10 bg-white/20 px-4 py-3.5 shadow-lg backdrop-blur-2xl sm:px-6 dark:border-white/10 dark:bg-white/5 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-0 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-2xl">
              {/* Header label */}
              <div className="mb-2.5 flex items-center justify-between border-b border-black/5 pb-2 dark:border-white/10">
                <span className="font-ui-mono text-[11px] font-semibold tracking-wider text-[var(--accent)] uppercase">
                  {"// Navigation"}
                </span>
                <span className="font-ui-mono text-[11px] text-[var(--text-muted)]">
                  {navigationItems.length} Sections
                </span>
              </div>

              {/* Navigation Links Grid */}
              <div className="grid gap-1 sm:grid-cols-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className="font-ui-mono block rounded-lg px-3 py-2 text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Resume Download CTA */}
              <div className="mt-3 border-t border-black/5 pt-3 dark:border-white/10">
                <a
                  href="/CV ATS Alden V3.pdf"
                  onClick={closeMenu}
                  className="font-ui-mono flex w-full items-center justify-center gap-2 rounded-lg border border-black/10 bg-white/20 px-3 py-2 text-xs font-medium text-[var(--text-primary)] shadow-xs transition hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/15 dark:bg-white/5"
                >
                  <Download
                    aria-hidden="true"
                    size={14}
                    className="text-[var(--accent)]"
                  />
                  <span>Download CV / Resume</span>
                </a>
              </div>
            </div>
          </nav>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-transparent backdrop-blur-xl dark:border-white/5 dark:bg-transparent">
        <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-4 px-6 sm:px-8 lg:px-10">
          <a href="#hero" className="font-ui-mono shrink-0 text-sm font-medium">
            {profile.name}
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden items-center gap-5 lg:flex"
            aria-label="Primary navigation"
          >
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-ui-mono text-xs text-[var(--text-muted)] transition hover:text-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href="/CV ATS Alden V3.pdf"
              className="font-ui-mono inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 text-xs"
            >
              <Download aria-hidden="true" size={14} />
              <span className="hidden sm:inline">Resume</span>
            </a>
            <ThemeToggle />

            {/* Mobile & iPad Burger Button */}
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] lg:hidden"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={toggleMenu}
              ref={menuTriggerRef}
            >
              <span
                className="inline-flex items-center justify-center transition-transform duration-300"
                style={{
                  transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                {isMenuOpen ? (
                  <X aria-hidden="true" size={18} />
                ) : (
                  <Menu aria-hidden="true" size={18} />
                )}
              </span>
            </button>
          </div>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}
