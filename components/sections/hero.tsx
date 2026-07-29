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
      setDisplayRole(profile.roles[0] ?? "");
      return;
    }

    const fullRole = profile.roles[roleIndex];

    const timeout = window.setTimeout(() => {
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
    }, isDeleting ? 55 : 95);

    return () => window.clearTimeout(timeout);
  }, [displayRole, isDeleting, reducedMotion, roleIndex]);

  const linkedin = profile.socials.find((social) => social.label === "LinkedIn");
  const github = profile.socials.find((social) => social.label === "GitHub");

  return (
    <section id="hero" className="flex min-h-[100svh] items-center border-b border-[var(--border)]">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          {/* italic */}
          <p className="font-ui-mono text-sm text-[var(--accent)]"> 
            // 00 - welcome to my portfolio;
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <div className="mt-6 flex min-h-12 items-center text-2xl font-medium text-[var(--text-muted)] sm:text-3xl lg:text-[2.15rem]">
            <span className="font-ui-mono text-[var(--accent)]">{displayRole}</span>
            <span
              aria-hidden="true"
              className={`ml-1 inline-block h-10 w-[0.12ch] rounded-[1px] bg-[var(--accent)] ${reducedMotion ? "opacity-0" : ""}`}
              style={reducedMotion ? undefined : { animation: "blink 0.9s step-end infinite" }}
            />
          </div>
          <p className="mt-6 text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
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

        <div className="relative mx-auto flex w-full max-w-[32rem] items-end justify-center lg:max-w-[36rem]">
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
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/25 px-3 py-2 text-sm font-light text-white shadow-[0_8px_30px_rgba(255,255,255,0.2)] backdrop-blur-2xl backdrop-saturate-200 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-white/40 before:via-white/10 before:to-transparent before:content-[''] dark:border-white/15 dark:bg-white/10">
              <span className="relative z-10 size-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" aria-hidden="true" />
              <span className="relative z-10">available for work</span>
            </div>
          ) : null}
        </div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-center text-[var(--text-primary)] transition hover:scale-105 hover:text-[var(--accent)]"
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
