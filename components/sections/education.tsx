"use client";

import { useState } from "react";
import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ChevronDown, BookOpen, Users } from "lucide-react";

interface ExpandableSectionProps {
  title: string;
  count?: number;
  icon: React.ComponentType<{ className?: string }>;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

function ExpandableSection({
  title,
  count,
  icon: Icon,
  defaultOpen = false,
  children,
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mt-4 border-t border-[var(--border)] pt-3">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-1 text-left font-ui-mono text-xs font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors group cursor-pointer"
      >
        <span className="flex items-center gap-2">
          <Icon className="size-3.5 text-[var(--accent)] group-hover:scale-110 transition-transform" />
          <span>{title}</span>
          {count !== undefined && count > 0 && (
            <span className="rounded-full bg-[var(--accent)]/10 px-2 py-0.5 text-[10px] text-[var(--accent)] font-semibold">
              {count}
            </span>
          )}
        </span>
        <ChevronDown
          className={`size-4 text-[var(--text-muted)] transition-transform duration-200 ${isOpen ? "rotate-180 text-[var(--accent)]" : ""
            }`}
        />
      </button>

      {isOpen && (
        <div className="mt-2.5 max-h-44 overflow-y-auto pr-1.5 text-xs leading-relaxed text-[var(--text-muted)] space-y-2 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
          {children}
        </div>
      )}
    </div>
  );
}

const colorStyles = [
  {
    node: "border-blue-500 bg-white dark:bg-[var(--surface)] text-blue-500 shadow-blue-500/20",
    badge: "text-blue-600 dark:text-blue-400",
  },
  {
    node: "border-indigo-500 bg-white dark:bg-[var(--surface)] text-indigo-500 shadow-indigo-500/20",
    badge: "text-indigo-600 dark:text-indigo-400",
  },
  {
    node: "border-fuchsia-500 bg-white dark:bg-[var(--surface)] text-fuchsia-500 shadow-fuchsia-500/20",
    badge: "text-fuchsia-600 dark:text-fuchsia-400",
  },
];

export function Education() {
  return (
    <section id="education" className="border-b border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <ScrollReveal>
          <SectionHeading
            eyebrow="// 02 — education journey;"
            title="Education"
            description="My academic journey from high school to master's degree."
          />
        </ScrollReveal>

        {/* Timeline container */}
        <div className="mt-14 relative">
          {/* Horizontal Timeline Bar across top on desktop */}
          <div className="hidden md:block absolute top-4 left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 rounded-full -z-10" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {education.map((entry, index) => {
              const theme = colorStyles[index % colorStyles.length];

              return (
                <ScrollReveal
                  key={`${entry.institution}-${entry.degree}`}
                  delay={index * 110}
                  className="flex h-full flex-col"
                >
                  {/* Timeline Circle Node */}
                  <div className="hidden md:flex justify-center mb-6">
                    <div
                      className={`size-8 rounded-full border-4 ${theme.node} shadow-md flex items-center justify-center transition-transform hover:scale-110`}
                    >
                      <div className="size-2 rounded-full bg-current" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                    <div>
                      {/* Level Badge */}
                      {entry.level && (
                        <p className={`font-medium text-sm sm:text-base ${theme.badge}`}>
                          {entry.level}
                        </p>
                      )}

                      {/* Institution Name */}
                      <h3 className="mt-1 text-lg font-bold text-[var(--text-primary)]">
                        {entry.institution}
                      </h3>

                      {/* Degree / Major */}
                      <p className="mt-1 text-xs sm:text-sm text-[var(--text-muted)] leading-snug">
                        {entry.degree}
                      </p>

                      {/* Dates */}
                      <p className="mt-2 font-ui-mono text-xs text-[var(--text-muted)]">
                        {entry.startDate} - {entry.endDate}
                      </p>

                      {/* GPA / Grade */}
                      {entry.gpa && (
                        <p className="mt-3 font-ui-mono text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                          Grade: {entry.gpa}
                        </p>
                      )}

                      {/* Honors / Achievements */}
                      {entry.honors?.length ? (
                        <ul className="mt-3 space-y-1 text-xs text-[var(--text-muted)]">
                          {entry.honors.map((honor) => (
                            <li key={honor} className="flex items-center gap-1.5">
                              <span className="size-1 rounded-full bg-[var(--text-muted)] shrink-0" />
                              <span>{honor}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>

                    {/* Expandable Sections */}
                    <div className="mt-2">
                      {/* Activities & Volunteering Expandable */}
                      {entry.activities?.length ? (
                        <ExpandableSection
                          title="Activities & Volunteering"
                          count={entry.activities.length}
                          icon={Users}
                        >
                          <ul className="space-y-2">
                            {entry.activities.map((activity) => (
                              <li key={activity} className="flex items-start gap-2">
                                <span className="mt-1.5 size-1 rounded-full bg-[var(--accent)] shrink-0" />
                                <span className="leading-snug">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </ExpandableSection>
                      ) : null}

                      {/* Relevant Courses Expandable */}
                      {entry.courses?.length ? (
                        <ExpandableSection
                          title="Relevant Courses"
                          count={entry.courses.length}
                          icon={BookOpen}
                        >
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {entry.courses.map((course) => (
                              <span
                                key={course.code}
                                className="font-ui-mono rounded-md border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                                title={`Course Code: ${course.code}`}
                              >
                                {course.name}
                              </span>
                            ))}
                          </div>
                        </ExpandableSection>
                      ) : null}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

