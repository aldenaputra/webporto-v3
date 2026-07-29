import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <section id="education" className="border-b border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="// 02 — education journey;"
          title="Education"
          description="A progression rooted in computer science, data systems, and security-aware computing."
        />

        <div className="mt-10 space-y-8">
          {education.map((entry, index) => (
            <div key={`${entry.institution}-${entry.degree}`} className="relative pl-8">
              <span className="absolute left-0 top-6 h-full w-px bg-[var(--border)]" />
              <span className="absolute left-[-0.2rem] top-6 size-3 rounded-full border-2 border-[var(--accent)] bg-[var(--background)]" />
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-ui-mono text-sm text-[var(--accent)]">
                      {entry.startDate} — {entry.endDate}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">
                      {entry.institution}
                    </h3>
                    <p className="mt-2 text-[var(--text-muted)]">{entry.degree}</p>
                  </div>
                  <div className="text-left md:text-right">
                    {entry.gpa ? (
                      <p className="font-ui-mono text-sm text-[var(--accent)]">
                        GPA {entry.gpa}
                      </p>
                    ) : null}
                    {entry.honors?.length ? (
                      <div className="mt-2 flex flex-wrap justify-start gap-2 md:justify-end">
                        {entry.honors.map((honor) => (
                          <span
                            key={honor}
                            className="font-ui-mono rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
                          >
                            {honor}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>

                {entry.activities?.length ? (
                  <div className="mt-6">
                    <p className="font-ui-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                      Highlights
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--text-muted)]">
                      {entry.activities.map((activity) => (
                        <li key={activity} className="flex gap-2">
                          <span className="mt-2 size-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {entry.courses?.length ? (
                  <div className="mt-6">
                    <p className="font-ui-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                      Relevant coursework
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {entry.courses.map((course) => (
                        <span
                          key={course.code}
                          className="font-ui-mono rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
                        >
                          {course.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
