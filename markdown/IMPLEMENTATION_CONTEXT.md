# Portfolio Website — Implementation Context

This document provides persistent implementation context for all AI assistants working on this project.

It exists to prevent re-explaining project decisions across different models or chats.

---

# Project Status

Current Status:

- Architecture finalized.
- Technology stack finalized.
- Folder structure finalized.
- Design system finalized.
- Information architecture finalized.

The implementation roadmap has already been planned.

Current implementation phase:

> Phase 4

Only implement the current phase.

Do not begin future phases unless explicitly instructed.

---

# Project Goal

This project is a production-quality personal portfolio website.

The objective is NOT to create a flashy template.

The objective is to create a clean, elegant, premium portfolio that reflects engineering quality, attention to detail, and long-term maintainability.

The website should feel closer to Stripe, Vercel, Linear, or Apple's product pages than a typical portfolio template.

---

# Source of Truth

The complete markdown specification (portfolio-build-prompt.md) is the authoritative source.

If there is any conflict between implementation decisions and assumptions,

the specification always wins.

Do not reinterpret the specification.

Do not redesign the project.

---

# Design Philosophy

Priorities (highest to lowest):

1. Maintainability
2. Accessibility
3. Performance
4. Responsive Design
5. Visual Polish
6. Animation

Animations should enhance the experience,

never become the experience.

---

# Important Design Decisions

These decisions have already been finalized.

Do NOT change them.

- Single-page vertical scrolling website.
- No horizontal scrolling.
- Sticky navigation.
- Hero at the top.
- Traditional vertical page flow.
- One unified data layer.
- Light and dark theme.
- Geist Sans + Geist Mono.
- CSS design tokens.
- TypeScript strict mode.
- Next.js App Router.
- Tailwind CSS.
- next-themes.
- Vercel deployment.

---

# Implementation Principles

Always:

- write reusable components
- avoid duplicated logic
- avoid unnecessary abstraction
- keep components modular
- keep data separate from UI
- keep styling consistent
- keep TypeScript strict
- prefer readability over cleverness

---

# Coding Standards

Never:

- hardcode colors
- hardcode content inside components
- use any
- duplicate components
- violate accessibility
- ignore prefers-reduced-motion
- introduce libraries unless justified

---

# AI Assistant Rules

Do NOT:

- redesign layouts
- invent new sections
- replace technologies
- change typography
- modify spacing philosophy
- change navigation
- create new project architecture

Only implement what belongs to the current phase.

---

# If Something Is Missing

If implementation details are unspecified,

choose the simplest professional solution.

Do not redesign the website.

---

# Completion Rule

At the end of every implementation phase,

provide:

- completed checklist
- modified files
- architectural notes
- remaining work for future phases

Then stop.

Do not automatically continue into later phases.

Wait for user approval.