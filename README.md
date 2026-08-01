# Shivam Sabbarwal Portfolio

Personal portfolio site at [shivamsabbarwal.dev](https://shivamsabbarwal.dev). Engineering leader and former CTO, currently Senior Software Engineer at Cardata, with 8+ years across fintech, SaaS, geospatial, and enterprise platforms.

## Stack

- **Framework**: Next.js 16 (App Router) with Turbopack and React Compiler
- **UI**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 (`@theme inline`, `@custom-variant`)
- **Animations**: [Motion](https://motion.dev) (`motion/react`)
- **Components**: [Base UI](https://base-ui.com) primitives with custom wrappers in `components/ui/`
- **Icons**: `react-icons/lu` (Lucide) for UI, `react-icons/si` (Simple Icons) for tech logos
- **Forms**: React Hook Form + Zod with a Next.js server action
- **Email**: React Email + Nodemailer for the contact form
- **Theming**: Custom `ThemeContext` with `localStorage` persistence and favicon swap
- **Analytics**: Vercel Analytics and Speed Insights
- **Tooling**: oxlint + ESLint, oxfmt, Bun as the package manager and runtime

## Project structure

No `src/` folder. Source lives at the repository root.

```
app/
  actions/contact.ts       # Server action: send contact email
  resume/                  # /resume route
  layout.tsx               # Root layout + providers
  page.tsx                 # Home (Hero, Timeline, TechStack, Projects, Contact)
  providers.tsx            # ErrorBoundary + ThemeProvider + Toaster
  globals.css              # Tailwind v4 theme tokens + custom utilities

components/
  layout/                  # MainLayout (RSC), Navigation (client), Footer (RSC)
  sections/                # Hero, Timeline, TechStack, Projects (client)
                           # Contact is RSC + ContactForm client leaf
  resume/                  # RSC tree + PrintButton client leaf
  ui/                      # Base UI-backed primitives
  FadeIn.tsx               # Shared motion.div whileInView wrapper
  ErrorBoundary.tsx
  ProjectCard.tsx
  PlaywrightIcon.tsx

constants/                 # NAV_ITEMS, SOCIAL_ICONS, content data
contexts/ThemeContext.tsx  # Custom light/dark theme
emails/ContactEmail.tsx    # React Email template
hooks/
  use-mobile.ts
  useActiveSection.ts       # IntersectionObserver-based active-id tracker
lib/utils.ts               # cn() helper
```

## Routes

| Route     | Purpose                                                              |
| --------- | -------------------------------------------------------------------- |
| `/`       | Main portfolio: Hero, Career, Capabilities, Work, Contact            |
| `/resume` | Printable resume (`?print=true` auto-opens the browser print dialog) |

## Prerequisites

- [Bun](https://bun.sh) 1.3+
- Node.js 20+ (for tooling compatibility)

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Start Next.js dev server (Turbopack)
bun run build        # Production build
bun run start        # Serve the production build
bun run lint         # oxlint + ESLint
bun run lint:fix     # Auto-fix both linters
bun run fmt          # Format with oxfmt
bun run fmt:check    # Check formatting
```

## Environment variables

The contact form uses Gmail SMTP via Nodemailer. Create a `.env.local`:

```
GMAIL_USER=your@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

Generate an app password at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).

## Architecture notes

- **Server-first.** Layouts and static sections are React Server Components wherever possible; `"use client"` is reserved for hooks, browser APIs, Motion, and form state.
- **React Compiler.** Enabled in `next.config.ts`, so there is no manual `useMemo`/`useCallback`/`React.memo` anywhere in the codebase; the compiler handles memoization.
- **No external theme library.** `contexts/ThemeContext.tsx` manages light/dark, persists to `localStorage`, and swaps the favicon on theme change.
- **Content is data.** All timeline entries, projects, tech categories, and resume data live in `constants/content.ts` and are imported directly by the components that render them.
- **Visual system.** VOLTWORKS studio pop: Bricolage Grotesque + Schibsted Grotesk, acid lime and electric magenta on bone paper over green-graphite ink. Interactive hero, scroll-expanding timeline, parallax employer marquee, full-screen mobile menu. The playful, game-like feel is carried entirely by motion, layout, and interaction; the copy stays plain professional English.
- **Career numbers live once.** The real metrics sit inside the timeline entry for the role that produced them, rather than being repeated across sections.
- **Same experience at every size.** Content and signature effects are adapted through scale, count, and reflow rather than hidden behind breakpoints. Motion timing is centralized in `lib/motion.ts`, and every heavier effect is gated on `prefers-reduced-motion`.
- **Sections are dynamically imported** via `next/dynamic` on the home page to keep the initial bundle lean.

## Deployment

Deployed on [Vercel](https://vercel.com). Build command: `bun run build`. Output: `.next`. Vercel auto-detects Next.js; no custom configuration required beyond the two environment variables above.

## License

MIT. See [LICENSE](LICENSE).

## Contact

- Email: [shivam.sabb@gmail.com](mailto:shivam.sabb@gmail.com)
- LinkedIn: [linkedin.com/in/shivamsabbarwal](https://linkedin.com/in/shivamsabbarwal)
- GitHub: [github.com/ShivamSabbarwal](https://github.com/ShivamSabbarwal)
