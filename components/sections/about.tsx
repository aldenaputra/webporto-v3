import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { SocialIcon } from "@/components/ui/social-icons";
import { Tag } from "@/components/ui/tag";

export function About() {
  return (
    <section id="about" className="border-b border-[var(--border)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
        <div>
          <SectionHeading
            eyebrow="// 01 — about me;"
            title="About"
            description="A practitioner at the intersection of data, analytics, and security-aware systems."
          />
          <div className="mt-8 space-y-5 text-base leading-8 text-[var(--text-muted)]">
            <p>{profile.bio}</p>
            <p>{profile.tagline}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-ui-mono text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              Soft skills
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.softSkills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-ui-mono text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              Technical skills
            </h3>
            <div className="mt-4 space-y-4">
              {profile.technicalSkills.map((group) => (
                <div key={group.category}>
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {group.category}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-ui-mono text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              Certifications
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {profile.certifications.map((certification) => (
                <div
                  key={certification.name}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-4"
                >
                  <p className="font-medium text-[var(--text-primary)]">
                    {certification.name}
                  </p>
                  {certification.issuer ? (
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      {certification.issuer}
                    </p>
                  ) : null}
                  {certification.date ? (
                    <p className="mt-3 font-ui-mono text-xs text-[var(--accent)]">
                      {certification.date}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-ui-mono text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              Connect
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-[var(--surface)]">
                    <SocialIcon icon={social.icon} />
                  </span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
