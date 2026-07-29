"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProjectModal } from "@/components/ui/project-modal";

export function Projects() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  const featuredProjects = useMemo(() => projects.filter((project) => project.featured), []);
  const otherProjects = useMemo(() => projects.filter((project) => !project.featured), []);

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

        <div className="mt-10 space-y-6">
          <ScrollReveal className="space-y-6">
            {featuredProjects.map((project, index) => (
              <article
                key={project.slug}
                className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/80 shadow-sm"
              >
                <div className={`grid gap-8 p-6 lg:grid-cols-2 lg:p-8 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="flex items-center justify-center rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-2">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem]">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="font-ui-mono text-sm text-[var(--accent)]">Selected work</p>
                    <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
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
                          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3.5 py-2 text-sm text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                          {link.label}
                          <ArrowUpRight aria-hidden="true" size={14} />
                        </a>
                      ))}
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3.5 py-2 text-sm text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        View details
                        <ArrowUpRight aria-hidden="true" size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </ScrollReveal>

          {otherProjects.length ? (
            <ScrollReveal className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {otherProjects.map((project) => (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)]/80 p-5 text-left transition hover:border-[var(--accent)]"
                >
                  <div className="overflow-hidden rounded-[1rem] border border-[var(--border)] bg-[var(--surface)]">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                  <p className="mt-4 font-ui-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                    Other project
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </button>
              ))}
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
