# Thimira Nirmal — portfolio

A recruiter-facing Next.js portfolio focused on AI engineering, machine learning, and applied AI. The home page is server-rendered; the responsive navigation and project detail dialogs use client components.

## Run locally

```sh
npm ci
npm run dev
```

Visit http://localhost:3000. To check the production build:

```sh
npm run lint
npm run build
npm start
```

## Update content

- `lib/portfolio.ts`: full skill groups, existing experience labels, social links, and résumé URL.
- `lib/project-details.ts`: all seven original projects, full descriptions, images, and links.
- `lib/testimonials.ts`: complete recommendations and supplied attribution.
- `components/project-gallery.tsx`: project cards and accessible native dialog with screenshot selection.
- `app/page.tsx`: introduction, background, recommendation excerpt, and contact section.
- `app/globals.css`: responsive layout, colors, typography, and reduced-motion behavior.
- `app/layout.tsx`: search and social metadata.
- `public/me1.png`: existing portrait.

Project cards and dialogs use the original remote screenshots, with a visible fallback if an image cannot load. No Supabase credentials or Google Fonts requests are required at build time.

## Content to confirm before publishing

This pass uses the existing portfolio's facts. Refresh the résumé, recent employment history, project outcomes, and public repository links before publication. The original portfolio points both the knowledge management and intrusion detection projects to the same repository; confirm those destinations. No new employment dates, seniority, availability, or performance metrics have been invented.

Writing links go to the existing Medium profile. Unimplemented `/blog/[article]` URLs return a real 404 rather than a duplicate homepage.

Legacy components remain in `components/` for reference but are not imported by the new homepage. Two existing hook-dependency lint warnings remain in the old carousel components. The existing Next.js/dependency versions are unchanged; dependency modernization should be verified separately before deployment.

## Accessibility

The site includes a skip link, keyboard-operable native project dialogs with focus return, Escape dismissal, and screenshot selection, visible focus indicators, a mobile navigation button with expanded state, Escape handling within navigation, and reduced-motion support. Check desktop and mobile layouts after changing copy or adding projects.
