"use client";

import { useState } from "react";

import { publications } from "@/data/publications";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

export function Publications() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="publications" className="border-b border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="// 05 — publications"
          title="Publications"
          description="Selected work that spans research, forecasting, and systems thinking."
        />

        <div className="mt-10 space-y-3 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/70 p-3 shadow-sm sm:p-4">
          {publications.map((publication, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={publication.title} className="overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full flex-col gap-3 px-4 py-4 text-left sm:px-5"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div className="min-w-0">
                      <p className="font-ui-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                        [{publication.year}] {publication.venue}
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

                {isOpen ? (
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
                            className="font-ui-mono rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
