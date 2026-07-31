"use client";

import Image from "next/image";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Tag } from "@/components/ui/tag";

export function Experience() {
  return (
    <section id="experience" className="border-b border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <ScrollReveal>
          <SectionHeading
            eyebrow="// 03 — professional work experiences;"
            title="Experience"
            description="My professional journey, from data science to analytics and engineering."
          />
        </ScrollReveal>

        {/* ── Desktop layout ── */}
        {/* Each entry: [4:3 image card] + [description card, fills rest] side by side */}
        {/* ── Desktop layout ── */}
        <div className="mt-12 hidden md:flex flex-col gap-8">
          {experience.map((entry, index) => {
            const periodLabel =
              entry.endDate === "present"
                ? `${entry.startDate} — Present`
                : entry.startDate === entry.endDate
                  ? entry.startDate
                  : `${entry.startDate} — ${entry.endDate}`;

            return (
              <ScrollReveal
                key={`desk-${entry.company}-${entry.role}-${index}`}
                delay={index * 110}
              >
                <div className="grid grid-cols-[320px_minmax(320px,1fr)] gap-5 items-stretch">
                {/* Image Card */}
                <div className="relative h-[240px] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
                  {entry.image ? (
                    <Image
                      src={entry.image}
                      alt={`${entry.role} at ${entry.company}`}
                      fill
                      quality={95}
                      sizes="(min-width: 768px) 320px, calc(100vw - 3rem)"
                      className="object-cover object-center"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[var(--background)]">
                      <span className="font-ui-mono text-4xl font-bold text-[var(--accent)]/30">
                        {entry.company.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description Card */}
                <div className="min-w-[320px] rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-sm transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-md">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)] leading-snug">
                        {entry.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                        {entry.company}
                      </p>
                    </div>

                    <div className="flex shrink-0 flex-col items-end gap-1.5">
                      <span className="font-ui-mono text-xs text-[var(--text-muted)]">
                        {periodLabel}
                      </span>

                      {entry.type && (
                        <span className="inline-flex rounded-md border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 font-ui-mono text-[11px] text-[var(--text-muted)]">
                          {entry.type}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mt-5 h-px w-full bg-[var(--border)]" />

                  {/* Bullet Points */}
                  <ul className="mt-5 space-y-2.5">
                    {entry.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-6 text-[var(--text-muted)]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]/60" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  {entry.stack.length > 0 && (
                    <div className="mt-5">
                      <p className="mb-2.5 font-ui-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                        Tech Stack
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {entry.stack.map((item) => (
                          <Tag key={item}>{item}</Tag>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── Mobile layout ── */}
        {/* Compact single card: fixed-height image on top, info block below */}
        <div className="mt-10 flex flex-col gap-4 md:hidden">
          {experience.map((entry, index) => {
            const periodLabel =
              entry.endDate === "present"
                ? `${entry.startDate} — Present`
                : entry.startDate === entry.endDate
                  ? entry.startDate
                  : `${entry.startDate} — ${entry.endDate}`;

            return (
              <ScrollReveal
                key={`mob-${entry.company}-${entry.role}-${index}`}
                delay={index * 110}
              >
                <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
                {/* Compact image — fixed height, no 4:3 ratio */}
                {entry.image && (
                  <div className="relative w-full h-44">
                    <Image
                      src={entry.image}
                      alt={`${entry.role} at ${entry.company}`}
                      fill
                      className="object-cover object-top"
                      sizes="calc(100vw - 2rem)"
                    />
                  </div>
                )}

                {/* Info block */}
                <div className="px-4 pt-3.5 pb-4">
                  {/* Title + period row */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-[var(--text-primary)] leading-snug">
                      {entry.role}, {entry.company}
                    </h3>
                    <span className="font-ui-mono text-[11px] text-[var(--text-muted)] shrink-0 mt-0.5">
                      {periodLabel}
                    </span>
                  </div>

                  {/* First bullet as lead summary */}
                  <p className="mt-1.5 text-sm leading-5 text-[var(--accent)]/80">
                    {entry.bullets[0]}
                  </p>

                  {/* Remaining bullets */}
                  {entry.bullets.length > 1 && (
                    <ul className="mt-2 space-y-1">
                      {entry.bullets.slice(1).map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2 text-xs leading-5 text-[var(--text-muted)]"
                        >
                          <span
                            className="mt-1.5 size-1 shrink-0 rounded-full bg-[var(--accent)]"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack */}
                  {entry.stack.length > 0 && (
                    <div className="mt-3">
                      <p className="font-ui-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-1.5">
                        Tech Stack:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {entry.stack.map((item) => (
                          <Tag key={item} className="text-[11px] px-2 py-0.5">
                            {item}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  )}
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
