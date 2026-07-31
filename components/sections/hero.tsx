"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

import { profile } from "@/data/profile";
import { SocialIcon } from "@/components/ui/social-icons";

export function Hero() {
  const [displayRole, setDisplayRole] = useState(profile.roles[0] ?? "");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || profile.roles.length === 0) {
      return;
    }

    const fullRole = profile.roles[roleIndex];

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (displayRole.length < fullRole.length) {
            setDisplayRole(fullRole.slice(0, displayRole.length + 1));
          } else {
            window.setTimeout(() => setIsDeleting(true), 1200);
          }
        } else if (displayRole.length > 0) {
          setDisplayRole(fullRole.slice(0, displayRole.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % profile.roles.length);
        }
      },
      isDeleting ? 55 : 95,
    );

    return () => window.clearTimeout(timeout);
  }, [displayRole, isDeleting, reducedMotion, roleIndex]);

  const linkedin = profile.socials.find((social) => social.label === "LinkedIn");
  const github = profile.socials.find((social) => social.label === "GitHub");

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center border-b border-[var(--border)]"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-10 lg:py-28">
        {/* Profile Image Column (First on Mobile, Second on Desktop) */}
        <div className="order-first flex flex-col items-center justify-center lg:relative lg:order-last lg:mx-auto lg:block lg:w-full lg:max-w-[36rem]">
          {/* Mobile Spotlight Avatar View (< lg) */}
          <div className="relative lg:hidden">
            <div className="relative size-48 overflow-hidden rounded-full border-4 border-[var(--border)] bg-[var(--surface)] p-1.5 shadow-2xl ring-4 ring-[var(--accent)]/15 sm:size-56">
              <Image
                src={profile.image.src}
                alt={profile.image.alt}
                width={400}
                height={400}
                className="h-full w-full rounded-full object-cover"
                priority
              />
            </div>
            {profile.availableForWork ? (
              <div className="absolute left-1/2 top-full mt-1.5 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-[var(--border)] bg-white px-2 py-0.5 text-[9px] font-medium text-[var(--text-primary)] shadow-sm backdrop-blur-sm dark:border-white/20 dark:bg-black/45 dark:text-white">
                <span
                  className="size-1 rounded-full bg-emerald-500 shadow-[0_0_0_2px_rgba(16,185,129,0.2)]"
                  aria-hidden="true"
                />
                <span>Available for work</span>
              </div>
            ) : null}
          </div>

          {/* Desktop Full Portrait Card View (lg:) */}
          <div className="relative mx-auto hidden w-full max-w-[36rem] lg:block">
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm">
              <Image
                src={profile.image.src}
                alt={profile.image.alt}
                width={760}
                height={960}
                className="h-auto w-full rounded-[1.5rem] object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
                priority
              />
            </div>
            {profile.availableForWork ? (
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white px-3 py-2 text-sm font-medium text-[var(--text-primary)] shadow-sm backdrop-blur-sm dark:border-white/20 dark:bg-black/45 dark:text-white">
                <span
                  className="size-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]"
                  aria-hidden="true"
                />
                <span>Available for work</span>
              </div>
            ) : null}
          </div>
        </div>

        {/* Text Content Column (Second on Mobile, First on Desktop) */}
        <div className="order-last mx-auto max-w-2xl text-center lg:order-first lg:mx-0 lg:text-left">
          {/* italic */}
          <p className="font-ui-mono text-sm text-[var(--accent)]">
            {"// 00 - welcome to my portfolio;"}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:mt-5 sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <div className="mt-2.5 flex min-h-10 items-center justify-center text-xl font-medium text-[var(--text-muted)] sm:mt-5 sm:min-h-12 sm:text-3xl lg:justify-start lg:text-[2.15rem]">
            <span className="font-ui-mono text-[var(--accent)]">{displayRole}</span>
            <span
              aria-hidden="true"
              className={`ml-1 inline-block h-7 w-[0.12ch] rounded-[1px] bg-[var(--accent)] sm:h-10 ${reducedMotion ? "opacity-0" : ""}`}
              style={
                reducedMotion
                  ? undefined
                  : { animation: "blink 0.9s step-end infinite" }
              }
            />
          </div>
          <p className="mt-2.5 text-base leading-relaxed text-[var(--text-muted)] sm:mt-5 sm:text-xl sm:leading-8">
            {profile.tagline}
          </p>

          {/* CTA & Social Buttons Container */}
          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            {/* Row 1: Action CTA Buttons */}
            <div className="flex w-full items-center justify-center gap-3 sm:w-auto">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                My experiences
              </a>
              <a
                href="/CV ATS Alden V3.pdf"
                className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                View resume
              </a>
            </div>

            {/* Row 2: Social Icons (Dedicated line on mobile, inline on desktop) */}
            <div className="flex w-full items-center justify-center gap-3 sm:w-auto">
              {linkedin ? (
                <a
                  href={linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit LinkedIn"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <SocialIcon icon="linkedin" />
                </a>
              ) : null}
              {github ? (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit GitHub"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <SocialIcon icon="github" />
                </a>
              ) : null}
              <a
                href={`mailto:${profile.contact.email}`}
                aria-label="Send an email"
                className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Mail aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Downward Scroll Arrow (hidden on mobile < sm) */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center justify-center text-[var(--text-primary)] transition hover:scale-105 hover:text-[var(--accent)] sm:flex"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-8 animate-[bounce_1.8s_ease-in-out_infinite]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="m6 13 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
