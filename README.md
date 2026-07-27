# Portfolio Website

Personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Vercel Analytics. Content is separated from presentation so future updates do not require component changes.

## Development

```bash
npm run dev
npm run lint
npm run format:check
npm run build
```

## Content editing

All portfolio content belongs in `/data`. Components consume these typed modules rather than embedding portfolio copy. The current content is deliberate Phase 1 placeholder data and will be replaced in later phases.

## Required assets

- `public/resume.pdf`
- `public/images/profile/pic2.png`
- Project images under `public/images/projects/`, with paths recorded in `data/projects.ts`

The root layout owns global providers, fonts, navigation/footer, skip link, and Analytics. `styles/globals.css` is the single source of design-token color values; `next-themes` controls the `.dark` class.
