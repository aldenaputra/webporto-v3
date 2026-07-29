# Portfolio Website

A production-ready personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Vercel Analytics. Content is separated from presentation so future updates can be made through the typed data layer rather than component changes.

## Development

```bash
npm install
npm run dev
npm run lint
npm run format:check
npm run build
```

## Content editing

Portfolio content lives in the `/data` modules and is consumed by the sections through typed interfaces. Update the relevant module in `/data` when changing profile information, experience, education, publications, or project details.

## Required assets

- `public/CV Alden Ardiwinata Putra 2026.pdf`
- `public/pic2.png`
- Project images referenced by the project entries in `data/projects.ts`

The root layout owns the global providers, fonts, navigation, footer, skip link, and Analytics. `styles/globals.css` is the single source of design-token color values, and `next-themes` controls the `.dark` class.
