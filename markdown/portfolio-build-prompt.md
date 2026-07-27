# Portfolio website — build specification

Build a personal portfolio website. Read this entire spec before writing code. Where content is not yet provided, use realistic CS-portfolio placeholder content (not lorem ipsum) so the site is fully functional and reviewable — the real content will be swapped into the `/data` files afterward without touching any components.

## 1. Stack

- Next.js, App Router, TypeScript in strict mode
- Tailwind CSS
- `next-themes` for light/dark mode
- `next/font` for font loading (zero layout shift)
- `lucide-react` for UI icons; add `simple-icons` (or equivalent) if brand logos are needed for social links
- `@vercel/analytics` for Vercel Analytics
- Optional: Framer Motion for scroll-reveal animation (only if it doesn't bloat the bundle — plain CSS + IntersectionObserver is an acceptable substitute)
- Deploy target: Vercel

## 2. Design tokens

Use CSS custom properties in `globals.css`, switched by a `.dark` class (via `next-themes`, `attribute="class"`). Never hardcode hex values in components — always reference the variables (or map them into `tailwind.config.ts` `theme.extend.colors`).

```css
:root {
  --background: #fafafa;
  --surface: #ffffff;
  --border: #e4e4e7;
  --text-primary: #18181b;
  --text-muted: #71717a;
  --accent: #4f46e5;
}

.dark {
  --background: #09090b;
  --surface: #18181b;
  --border: #27272a;
  --text-primary: #fafafa;
  --text-muted: #a1a1aa;
  --accent: #818cf8;
}
```

Accent usage is intentionally singular: links, the hero typewriter cursor, active nav indicator, tag hover state, and focus rings. Don't introduce other accent colors.

## 3. Typography

- Body and headings: **Geist Sans** (via `next/font/google` or the `geist` package), weights 400/500/600.
- Monospace: **Geist Mono**, used ONLY as an accent — never for paragraph body copy. Apply it to: nav logo/wordmark, section eyebrow labels (e.g. `// 03 — education`), the hero's animated role line, dates, tech-stack tags, publication metadata, and secondary buttons.
- This contrast (sans for reading, mono for data/system chrome) is the core visual signature of the site — apply it consistently across every section below.

## 4. Folder structure

```
/app
  layout.tsx              # fonts, theme provider, Analytics, minimal metadata
  page.tsx                # composes all sections in order
  not-found.tsx           # custom themed 404
/components
  navbar.tsx
  theme-toggle.tsx
  theme-provider.tsx
  footer.tsx
  sections/
    hero.tsx
    about.tsx
    education.tsx
    experience.tsx
    publications.tsx
    projects.tsx
  ui/
    tag.tsx
    section-heading.tsx
    project-modal.tsx
/data
  types.ts                # shared TypeScript interfaces
  profile.ts               # name, role(s), bio, skills, certifications, socials, footer copy
  education.ts
  experience.ts
  publications.ts
  projects.ts
  index.ts                 # re-exports everything
/lib
  utils.ts                 # cn() helper, etc.
/public
  images/
    profile/
    projects/
  resume.pdf                # provided directly by the user — no placeholder needed
/styles
  globals.css
```

## 5. Content structure decision

Only full-length (desktop) copy will be provided for now — do not build a short/long dual-content system in this pass. Every text field in `/data` (bio, project descriptions, etc.) is a single string. For mobile responsiveness, rely on typographic scaling and CSS `line-clamp-*` utilities where a block genuinely needs to be visually truncated, not on separate stored content. Shorter, mobile-specific copy (if ever needed) will be requested and generated in a future pass — the data layer should stay simple until then.

## 6. Data layer

Split content by domain, fully typed, so editing content later never requires touching a component. Example shapes (adjust fields as needed once real content is provided):

```ts
// data/types.ts
export interface Profile {
  name: string;
  roles: string[]; // for the hero typewriter, e.g. ["Frontend Engineer", "ML Researcher"]
  tagline: string;
  bio: string;
  softSkills: string[];
  technicalSkills: { category: string; items: string[] }[];
  certifications: { name: string; issuer: string; date: string; url?: string }[];
  socials: { label: string; url: string; icon: string }[];
  contact: { email: string; githubUrl?: string; linkedinUrl?: string };
  footer: { signOff: string; copyrightName: string };
}

export interface EducationEntry {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  honors?: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string | "present";
  bullets: string[];
  stack: string[];
}

export interface Publication {
  title: string;
  venue: string;
  year: number;
  abstract: string;
  links: { label: string; url: string }[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  featured: boolean; // true = shown in "selected work" rows
  links: { label: string; url: string }[];
}
```

## 7. Section specs

**Navbar** — sticky, `position: fixed` top. Backdrop blur with theme-aware translucency: light mode `bg-white/60 backdrop-blur-xl border-b border-black/5`, dark mode `bg-black/40 backdrop-blur-xl border-b border-white/5`. Logo/wordmark in mono font, left. Section links, theme toggle, and a resume-download button (linking to `/resume.pdf`), right.

- _Scroll-spy_: highlight the active section link via `IntersectionObserver` as the user scrolls.
- _Smooth-scroll_ on anchor click (`scroll-behavior: smooth` or a scroll utility).
- _Mobile_: collapses to a hamburger opening a full-screen blurred overlay menu (same glass treatment as the navbar), closing on link click or Escape.

**Hero** — split layout. Left: mono eyebrow tag (e.g. `// currently building things`), name, an animated role line that types/deletes through `profile.roles` with a blinking cursor (respect `prefers-reduced-motion`: fall back to a single static role), the tagline, and two CTAs (resume download, contact — see §10). Right: profile photo in a rounded-square frame (not circular) with a hairline border, and a small floating status pill (`● available for work`) anchored at the bottom edge.

**About** — bio, soft skills as a simple list or inline tags, technical skills grouped by category (languages / frameworks / tools) as mono tag chips, certifications as small cards (name, issuer, date, optional verify link), and a row of social/hyperlink icons (from `profile.socials`).

**Education** — vertical timeline styled like a git commit graph: a vertical line with a commit-dot per entry, each connecting to a card with institution, degree, dates, and honors if present.

**Experience** — tabbed by company (file-tab styling — active tab has a filled/underlined state, mono font for company names). Selected tab shows role, duration, impact bullets, and a row of mono tech-stack tags. Keyboard-operable (arrow keys or tab between company tabs).

**Publications** — a monospace list, each row formatted like a terminal listing: `[year] title ................ venue`. Click/expand a row to reveal the abstract and links (PDF, DOI, code). No card grid here — the terminal-list format is the point.

**Projects** — two-tier:

1. _Selected work_ (`featured: true`, expect 2–3): full-width rows, alternating image left/right, full description, complete tag list, and links (live demo / repo).
2. _Other projects_: compact grid — thumbnail, title, top 2–3 tags. Click opens `project-modal.tsx` with the full description, full tag list, and links. Modal must trap focus and close on Escape.

**Footer** — social icons (repeat from About), a copyright line, and a personal sign-off line, all sourced from `profile.footer` / `profile.socials` — don't hardcode this copy, it will be provided the same way as the other data files. Include a back-to-top link.

**404 page** — themed to match the site (same fonts/colors/nav), not the Next.js default. A light, on-brand line is welcome here (e.g. a mono-styled "404 — route not found" treatment) but keep it tasteful, not gimmicky.

## 8. Theme system — implementation and FOUC prevention

Flash-of-unstyled-theme (a flash of the wrong background color on load) is the most common thing that goes wrong with a light/dark toggle in Next.js. Follow these steps exactly:

1. `npm install next-themes`
2. Create `components/theme-provider.tsx` as a **client component** that re-exports `next-themes`'s `ThemeProvider`:
   ```tsx
   "use client";
   import { ThemeProvider as NextThemesProvider } from "next-themes";
   export function ThemeProvider({
     children,
     ...props
   }: React.ComponentProps<typeof NextThemesProvider>) {
     return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
   }
   ```
3. In `app/layout.tsx`, add `suppressHydrationWarning` to the `<html>` tag. This is required — `next-themes` sets the theme class via an inline script that runs before React hydrates, so without this attribute React will log a hydration mismatch.
4. Wrap `{children}` with `<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>` inside the `<body>`.
5. Do not write a custom script or `localStorage` check to set the theme yourself — `next-themes` automatically injects a small blocking script into `<head>` server-side that reads the stored preference (or system preference) and sets the `class` on `<html>` _before first paint_. A hand-rolled version competing with this is how FOUC bugs get reintroduced.
6. In `theme-toggle.tsx`, the toggle button itself needs a hydration guard, or its icon will visibly flip states right after load: use `useTheme()` from `next-themes`, track a local `mounted` state via `useEffect(() => setMounted(true), [])`, and render a neutral placeholder (or nothing) until `mounted` is true.
7. Test by setting the OS to dark mode and hard-refreshing the page — the background must never flash light before dark is applied. Repeat with OS set to light mode.

## 9. Accessibility

- Verify accent contrast against both background colors (the provided indigo values are chosen to pass at normal text sizes, but check any actual text-on-accent usage).
- Visible `focus-visible` rings using the accent color on every interactive element, including glass buttons that have no visible border by default.
- All images need real `alt` text (profile photo, project screenshots).
- Typewriter animation and any scroll-reveal effects must be wrapped in `prefers-reduced-motion` checks.
- Icon-only buttons (theme toggle, social icons) need `aria-label`.
- Add a skip-to-content link for keyboard users.
- Experience tabs and the project modal must be fully keyboard-operable (modal traps focus, closes on Escape, returns focus to the trigger on close).

## 10. Contact

Keep this minimal — no form, no backend, no API route. The hero's "contact" CTA and/or the footer link out via `mailto:` (using `profile.contact.email`) and/or direct links to GitHub/LinkedIn (`profile.contact.githubUrl` / `linkedinUrl`). That's the entire scope of "contact" for this build.

## 11. Analytics

Add `@vercel/analytics`: import `Analytics` from `@vercel/analytics/next` and render `<Analytics />` once inside the root layout, inside `<body>`. No further configuration needed — it activates automatically once deployed on Vercel.

## 12. Performance

- All fonts via `next/font` with `display: "swap"`.
- All images via `next/image` with explicit `sizes`, including the profile photo and every project image.

## 13. Code quality

- ESLint + Prettier configured, TypeScript strict, no `any`.
- Shared UI (`Tag`, `SectionHeading`, etc.) componentized once and reused across sections rather than duplicated per section.
- No inline magic hex values anywhere — always the CSS variables.
- Short README covering setup and the `/data` editing convention.

## 14. Out of scope for this build

SEO and metadata work (Open Graph tags, favicon polish, sitemap, robots.txt, JSON-LD structured data) is deliberately deferred. A minimal default `metadata` export (page title only) in `layout.tsx` is sufficient for now — don't build out anything further here.
