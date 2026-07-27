import { Download } from "lucide-react";
import { navigationItems, profile } from "@/data/profile";
import { ThemeToggle } from "./theme-toggle";
export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/60 backdrop-blur-xl dark:border-white/5 dark:bg-black/40">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-4 px-6 sm:px-8 lg:px-10">
        <a href="#hero" className="font-ui-mono shrink-0 text-sm font-medium">
          {profile.name}
        </a>
        <nav
          className="hidden items-center gap-5 md:flex"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-ui-mono text-xs text-[var(--text-muted)] hover:text-[var(--accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <a
            href="/resume.pdf"
            className="font-ui-mono inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 text-xs"
          >
            <Download aria-hidden="true" size={14} />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
