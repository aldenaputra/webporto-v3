"use client";

import Image from "next/image";
import { ArrowDownRight, Mail } from "lucide-react";
import { useEffect, useState } from "react";

import { profile } from "@/data/profile";

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

  return (
    <section id="hero" className="border-b border-[var(--border)]">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-ui-mono text-sm text-[var(--accent)]">
            // currently building things
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <div className="mt-6 flex min-h-10 items-center text-2xl font-medium text-[var(--text-muted)] sm:text-3xl">
            <span className="font-ui-mono text-[var(--accent)]">{displayRole}</span>
            <span
              aria-hidden="true"
              className={`ml-1 inline-block h-6 w-[0.6ch] rounded-sm bg-[var(--accent)] ${reducedMotion ? "opacity-0" : "animate-pulse"}`}
            />
          </div>
          <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/CV Alden Ardiwinata Putra 2026.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              View resume
              <ArrowDownRight aria-hidden="true" size={16} />
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Mail aria-hidden="true" size={16} />
              Contact
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-end justify-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm">
            <Image
              src={profile.image.src}
              alt={profile.image.alt}
              width={720}
              height={900}
              className="h-auto w-full rounded-[1.5rem] object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>
          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/90 px-3 py-2 text-sm text-[var(--text-muted)] backdrop-blur">
            <span className="size-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
            available for work
          </div>
        </div>
      </div>
    </section>
  );
}
