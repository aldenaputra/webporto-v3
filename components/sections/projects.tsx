"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProjectModal } from "@/components/ui/project-modal";

const featuredProjects = projects.filter((project) => project.featured);
const archivedProjects = projects.filter((project) => !project.featured);

export function Projects() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(
    null,
  );

  return (
    <section id="projects" className="border-b border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <ScrollReveal>
          <SectionHeading
            eyebrow="// 05 — personal and academic projects;"
            title="Projects"
            description="Selected work that spans security, data systems, and applied analytics."
          />
        </ScrollReveal>

        <div className="mt-12 space-y-16 lg:mt-16 lg:space-y-20">
          <ScrollReveal className="space-y-5">
            <IndexHeading label="Selected case files" count={featuredProjects.length} />
            {featuredProjects.map((project, index) => (
              <article
                key={project.slug}
                className="group border-y border-[var(--border)] py-7 transition-colors duration-200 hover:border-[var(--accent)]/50 sm:py-9"
              >
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start lg:gap-12">
                  <div>
                    <div className="font-ui-mono flex items-center gap-3 text-xs text-[var(--text-muted)]">
                      <span className="text-[var(--accent)]">
                        CASE {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px w-7 bg-[var(--border)]"
                      />
                      <span>ENGINEERING STUDY</span>
                    </div>
                    <h3 className="mt-5 max-w-3xl text-2xl leading-tight font-semibold text-[var(--text-primary)] sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-muted)] sm:text-lg sm:leading-8">
                      {project.description}
                    </p>

                    {project.mobileHighlights?.length ? (
                      <div className="mt-7 grid gap-3 border-l-2 border-[var(--accent)]/40 pl-4 sm:grid-cols-3 sm:gap-5">
                        {project.mobileHighlights.map((highlight) => (
                          <p
                            key={highlight}
                            className="text-sm leading-6 text-[var(--text-primary)]"
                          >
                            {highlight}
                          </p>
                        ))}
                      </div>
                    ) : null}

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.stack.slice(0, 5).map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                        >
                          {link.label}
                          <ArrowUpRight aria-hidden="true" size={15} />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="border border-[var(--border)] bg-[var(--surface)] p-2 transition-colors duration-200 group-hover:border-[var(--accent)]/40">
                    <div className="font-ui-mono flex items-center justify-between border-b border-[var(--border)] px-2 py-2 text-[10px] tracking-[0.16em] text-[var(--text-muted)] uppercase">
                      <span>Preview</span>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div
                      className="relative mt-2 aspect-[4/3] overflow-hidden bg-[var(--background)]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(135deg, transparent 0 8px, color-mix(in srgb, var(--border) 72%, transparent) 8px 10px)",
                      }}
                    >
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(min-width: 1024px) 304px, (min-width: 640px) 50vw, 100vw"
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </ScrollReveal>

          {archivedProjects.length ? (
            <ScrollReveal>
              <IndexHeading label="Index" count={archivedProjects.length} />
              <div className="mt-5 border-y border-[var(--border)]">
                {archivedProjects.map((project, index) => (
                  <button
                    key={project.slug}
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="group grid w-full gap-3 border-b border-[var(--border)] px-1 py-5 text-left transition-colors last:border-b-0 hover:bg-[var(--surface)] sm:grid-cols-[3.5rem_minmax(0,1fr)_minmax(12rem,0.7fr)_auto] sm:items-center sm:gap-5 sm:px-3"
                  >
                    <span className="font-ui-mono text-xs text-[var(--accent)]">
                      {String(index + featuredProjects.length + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-medium text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[var(--text-muted)] sm:hidden">
                        {project.mobileDescription ?? project.description}
                      </p>
                    </div>
                    <p className="font-ui-mono hidden text-xs leading-5 text-[var(--text-muted)] sm:block">
                      {project.stack.slice(0, 3).join(" · ")}
                    </p>
                    <span className="font-ui-mono inline-flex items-center gap-2 text-xs text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]">
                      View case
                      <ArrowRight aria-hidden="true" size={15} />
                    </span>
                  </button>
                ))}
              </div>
            </ScrollReveal>
          ) : null}
        </div>
      </div>

      {activeProject ? (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      ) : null}
    </section>
  );
}

function IndexHeading({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center gap-4">
      <p className="font-ui-mono text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
        {label}
      </p>
      <span aria-hidden="true" className="h-px flex-1 bg-[var(--border)]" />
      <span className="font-ui-mono text-xs text-[var(--text-muted)]">
        {String(count).padStart(2, "0")}
      </span>
    </div>
  );
}
