"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";

import type { Project } from "@/data/types";
import { Tag } from "@/components/ui/tag";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    triggerRef.current = previouslyFocused instanceof HTMLButtonElement ? previouslyFocused : null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }

      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        );

        if (!focusable?.length) {
          event.preventDefault();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );
    const firstFocusable = focusable?.[0];
    firstFocusable?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--background)]/80 p-4 backdrop-blur-sm">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-2xl"
      >
        <div className="flex items-start justify-between border-b border-[var(--border)] px-6 py-5">
          <div>
            <p className="font-ui-mono text-sm text-[var(--accent)]">Project details</p>
            <h2 id={titleId} className="mt-2 text-xl font-semibold text-[var(--text-primary)]">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[var(--border)] p-2 text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            aria-label="Close project details"
          >
            <X aria-hidden="true" size={16} />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
          <div className="overflow-hidden rounded-[1.25rem] border border-[var(--border)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(min-width: 1280px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-[var(--text-muted)]">
            {project.description}
          </p>

          <div className="mt-6">
            <p className="font-ui-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>

          {project.links.length ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[var(--border)] px-3.5 py-2 text-sm text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
