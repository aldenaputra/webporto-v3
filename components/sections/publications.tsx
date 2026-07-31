"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { publications } from "@/data/publications";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Publications() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="publications" className="border-b border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <ScrollReveal>
          <SectionHeading
            eyebrow="// 04 — research and publications;"
            title="Publications"
            description="Selected work that spans research, forecasting, and systems thinking."
          />
        </ScrollReveal>

        <div className="mt-10 space-y-3 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/70 p-3 shadow-sm sm:p-4">
          {publications.map((publication, index) => {
            const isOpen = openIndex === index;
            const contentId = `publication-${index}-content`;
            return (
              <ScrollReveal key={publication.title} delay={index * 110}>
                <div className="overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="flex w-full flex-col gap-3 px-4 py-4 text-left sm:px-5"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div className="min-w-0">
                        <p className="font-ui-mono text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
                          [{publication.year}] {publication.venue}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
                          {publication.conferenceName} ({publication.venue})
                        </p>
                        <p className="mt-2 text-base font-medium text-[var(--text-primary)]">
                          {publication.title}
                        </p>
                      </div>
                      <span className="font-ui-mono text-xs text-[var(--text-muted)]">
                        {isOpen ? "collapse" : "expand"}
                      </span>
                    </div>
                  </button>

                  <div
                    id={contentId}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="border-t border-[var(--border)] px-4 py-4 sm:px-5">
                        <p className="text-sm leading-8 text-[var(--text-muted)]">
                          {publication.abstract}
                        </p>
                        {publication.links.length ? (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {publication.links.map((link) => (
                              <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="font-ui-mono inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-3 py-1.5 text-xs font-medium text-white transition hover:opacity-90"
                              >
                                {link.label}
                                <ArrowUpRight aria-hidden="true" size={13} />
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
