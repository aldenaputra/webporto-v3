"use client";

import { useState, type KeyboardEvent } from "react";

import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

export function Experience() {
  const [activeCompany, setActiveCompany] = useState(0);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const lastIndex = experience.length - 1;
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      nextIndex = index === lastIndex ? 0 : index + 1;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      nextIndex = index === 0 ? lastIndex : index - 1;
    }

    if (nextIndex !== index) {
      setActiveCompany(nextIndex);
    }
  };

  const activeEntry = experience[activeCompany];

  return (
    <section id="experience" className="border-b border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="// 03 — professional work experiences;"
          title="Experience"
          description="Hands-on work across analytics, reporting, and security-aware operational systems."
        />

        <div className="mt-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/70 p-4 shadow-sm sm:p-6 lg:p-8">
          <div
            role="tablist"
            aria-label="Work experience"
            className="flex flex-col gap-2 sm:flex-row"
          >
            {experience.map((entry, index) => {
              const isActive = activeCompany === index;
              return (
                <button
                  key={`${entry.company}-${index}`}
                  id={`tab-${index}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`panel-${index}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveCompany(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`rounded-full border px-4 py-2 text-left font-ui-mono text-sm transition ${
                    isActive
                      ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--surface)]"
                      : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  }`}
                >
                  {entry.company}
                </button>
              );
            })}
          </div>

          <div
            id={`panel-${activeCompany}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCompany}`}
            className="mt-8"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="font-ui-mono text-sm text-[var(--accent)]">
                  {activeEntry.startDate} — {activeEntry.endDate}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">
                  {activeEntry.role}
                </h3>
                <p className="mt-2 text-[var(--text-muted)]">{activeEntry.company}</p>
              </div>
            </div>

            <ul className="mt-8 space-y-3 text-base leading-8 text-[var(--text-muted)]">
              {activeEntry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 size-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="font-ui-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Tech stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeEntry.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
