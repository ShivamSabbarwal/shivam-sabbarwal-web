# CLAUDE.md

> **Context loaded.** If you see this line, CLAUDE.md is active. When the user asks, confirm with "Context: active."

---

## Self-Update Protocol

This file is the **single source of truth** for all agents working in this repo. It MUST stay current:

- **When to update**: After any conversation where new project patterns, conventions, architectural decisions, renamed/added/removed files, new dependencies, or user preferences are established, update this file before the conversation ends.
- **What to update**: Add new conventions, fix stale paths/layers, reflect dependency changes, add new commands or env vars. Remove anything no longer accurate.
- **What to NEVER change**: The sections marked `<!-- LOCKED -->` below are **user-defined strict rules**. Do not weaken, remove, or reword them. You may only add to locked sections if the user explicitly asks.
- **How to update**: Edit only the specific lines that changed. Do not rewrite the entire file. Keep the format concise: bullet points and tables, not prose.

## Cleanup Workflow (mandatory)

After **every** cleanup, refactor, or structural change batch:

1. **Dead-code recheck**: removing one file often exposes newly orphaned exports, constants, deps, or CSS. Grep for imports of anything touched; verify remaining exports still have consumers.
2. **Sync both docs**: update `CLAUDE.md` and `README.md` to match the new reality. Stale docs mislead future agents.

A batch is not "done" until both steps have run.

---

<!-- LOCKED -->

## Strict Rules

1. **Package manager**: Always use `bun`. Never use npm, npx, yarn, pnpm, or pnpx.
2. **Never run `bun run dev`** — assume it's already running.
3. **Never run `bun run build`** — that's only for CI.
4. **Read before edit** — never modify a file you haven't read in the current conversation.
5. **No unnecessary files** — prefer editing existing files over creating new ones.
<!-- /LOCKED -->

---

## Commands

```bash
bun install              # Install dependencies
bun run dev              # Start Next.js dev server (Turbopack), DON'T RUN
bun run build            # Production build, DON'T RUN (CI only)
bun run start            # Serve production build
bun run lint             # Run oxlint + eslint
bun run lint:fix         # Auto-fix lint issues (oxlint then eslint)
```

---

## Architecture

Personal portfolio site: **Next.js 16 App Router** · **React 19** · **Tailwind CSS v4** · **Bun**

### Routes

| Route     | Purpose                                                                          |
| --------- | -------------------------------------------------------------------------------- |
| `/`       | Main portfolio: Hero, Career, Capabilities, Work, FAQ, Contact                   |
| `/resume` | Printable resume with its own component tree                                     |
| `/llms.txt` | Machine-readable identity digest for AI crawlers (static in `public/llms.txt`) |

### Key Layers

| Layer               | Location                           | Notes                                                                                                                      |
| ------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| App shell           | `app/layout.tsx` → `providers.tsx` | ErrorBoundary → ThemeProvider (custom, not next-themes)                                                                    |
| Main page layout    | `components/layout/MainLayout.tsx` | Server component; hosts Navigation + `<main>` + Footer                                                                     |
| Sections            | `components/sections/`             | Hero, Timeline, TechStack, Projects are `"use client"`. Faq and Contact are RSC (+ `ContactForm.tsx` client leaf).         |
| Resume              | `components/resume/`               | `index.tsx` is a client component holding variant state; the section components below it are presentational and take props. `app/resume/AutoPrint.tsx` handles `?print=true`. |
| UI primitives       | `components/ui/`                   | button, input, label, textarea are pure server. sheet + sonner are client (base-ui dialog / theme hook).                   |
| Shared              | `components/FadeIn.tsx`            | Tiny `motion.div` whileInView wrapper. Use to keep section shells RSC while animating children.                            |
| Motion tokens       | `lib/motion.ts`                    | `DURATION`, `EASE_OUT`, `STAGGER`, `VIEWPORT`, `revealUp()`. Pull timing from here; never hand-roll a duration.            |
| SEO / AEO helpers   | `lib/seo.ts`                       | Canonical Person `@id`, FAQ copy, WebSite/WebPage/Person/FAQPage/ProfilePage JSON-LD builders. Keep facts in sync here.   |
| Crawl surfaces      | `app/robots.ts`, `app/sitemap.ts`  | Dynamic robots (incl. AI bot Allows) and sitemap. Do not reintroduce static `public/robots.txt` / `public/sitemap.xml`.   |
| Social cards        | `app/opengraph-image.tsx`          | 1200×630 branded OG/Twitter image via `next/og`. Shared paint lives in `lib/social-card.tsx`; both route files declare their own `runtime`/`alt`/`size`/`contentType` (Next rejects re-exporting those). |
| Scroll hooks        | `hooks/useActiveSection.ts`        | `useActiveSection` drives nav highlighting. `useNearestSection` drives Timeline expansion; its target-line ratio is tuned. |
| Footer / Navigation | `components/layout/`               | Footer is RSC (uses anchor links + `buttonVariants`). Navigation stays client for scroll tracking + sheet. Socials use `rel="me"`. |
| Server actions      | `app/actions/contact.ts`           | Contact form email via nodemailer + react-email                                                                            |
| Constants           | `constants/index.ts`               | NAV_ITEMS, SOCIAL_ICONS; re-exports `constants/content.ts` (PERSONAL, TIMELINE, PROJECTS, resume data)                     |
| Theme               | `contexts/ThemeContext.tsx`        | Custom light/dark with localStorage persistence + favicon swap (`/icon-light.svg` / `/icon-dark.svg`)                      |
| Profile portrait    | `public/assets/profile-pic.jpg`    | Hero + Person JSON-LD. Project cards use theme-aware screenshots under `public/assets/projects/` (`portfolio-site-light.png` / `portfolio-site-dark.png`). Regenerate after any visual change with `bun scripts/capture.mjs ... --settle`, and rename the file when the design changes so cached URLs cannot serve the old shot. OG card stays the branded 1200×630 route. |

### Import Alias

`@/*` → `./*` (tsconfig.json)

---

## Conventions

- **React 19**: No `import React`. Use named imports (`useState`, `useEffect`, `type ReactNode`). No `React.FC`.
- **React Compiler**: Enabled via `reactCompiler: true` in `next.config.ts`. Do not add `useMemo`, `useCallback`, or `React.memo`; the compiler handles memoization. Write plain functions and values.
- **Tailwind v4**: Use `bg-linear-to-br` not `bg-gradient-to-br`. CSS uses `@theme inline` and `@custom-variant`.
- **Animations**: Use `motion` package. Import from `"motion/react"` (not `framer-motion`).
- **Icons**: `react-icons/lu` (Lucide) for UI icons, `react-icons/si` (Simple Icons) for brand/tech logos. Social icon map shared via `SOCIAL_ICONS` in `constants/index.ts`.
- **Images**: Next.js `<Image>` with `fill`/`sizes`/`priority`, never raw `<img>`.
- **Client components**: `"use client"` only where needed (hooks, browser APIs, motion).
- **Visual system**: “VOLTWORKS” studio pop. Bricolage Grotesque (heading) + Schibsted Grotesk (body), acid lime `--primary` + electric magenta `--accent` + hazard amber on bone paper over green-graphite ink. Playful hard-edge cards, floating stickers, parallax, 3D tilt. Avoid cream/terracotta, purple AI gradients, and boring executive brochure layouts.
- **Texture restraint**: Global grain, one signature `.dot-field` halftone (Hero + TechStack), and `.scanlines` on ink slabs. That is the whole set. Do not give each section its own background pattern; plain sections create the scroll rhythm.
- **Copy rules**: No em dashes or en dashes in user-facing copy; rewrite with commas, colons, or separate sentences. Date ranges read “Jul 2025 to Jul 2026”. No filler (leverage, elevate, unlock, seamless, robust, passionate, journey). Never invent employers, titles, dates, metrics, certifications, or awards; he holds no certifications.
- **Voice**: One voice everywhere, including metadata, form labels, buttons, errors, and empty states: warm, confident, direct. A senior engineer who is good at this and comfortable with executives and engineers alike. Never corporate, never clipped or cold for effect, never bubbly. If a string sounds like a different author wrote it, rewrite it.
- **Content architecture**: Every fact gets one home. Hero states positioning: a short niche qualifier in the eyebrow plus the locked hero statement, nothing else. Timeline carries the career proof (its subheading names the three headline outcomes with attribution; the rail holds the detail). Capabilities frames leadership problems (`CAPABILITY_PRACTICES`) with tools as evidence (`TECH_CATEGORIES`). Projects is independent craft only, clearly secondary to the day job. Contact opens the conversation and routes it with the intent field. FAQ is a quiet post-contact briefing, not a nav item: native `<details>`, copy from `FAQ_ITEMS`. Preserve the exact hero statement: “I build technology that keeps pace with ambition, creating products, platforms, and engineering foundations that help companies grow.”
- **Do not restate a metric across sections**: a number belongs to the Timeline entry that produced it, and may appear once more in the Timeline subheading as summary. Do not build parallel “selected outcomes” or “career case study” blocks that repeat it; that reads as padding.
- **Discoverability**: Keep `lib/seo.ts`, on-page FAQ, JSON-LD `@graph`, and `public/llms.txt` factually aligned. AI crawlers are explicitly allowed in `app/robots.ts`. 404 is `noindex`.
- **No vanity tech counters**: Do not resurrect Languages/Frameworks/Cloud count strips. Tools stay as evidence under problem-framed groups.
- **No game vocabulary**: The site should *feel* like a game through motion, layout, and interaction, never through words. Banned from user-facing copy: XP, level, stage, quest, campaign, loadout, slot, equipped, mods, unlock, player, run, chapter, objectives, achievement. Use plain professional English a recruiter reads without decoding. Do not compensate by making the copy jokey.
- **Career + craft**: Timeline auto-expands the nearest card via `useNearestSection` (collapse others). Content in `constants/content.ts` balances leadership arc with creative energy. The real career metrics live inside the relevant Timeline entries; there is no separate metrics section, and no trophy/badge framing.
- **“Former CTO” restraint**: Factual, but do not repeat it. Allowed in the Remittor AI timeline entry and once in page metadata for search. Everywhere else, convey scope and capability without the title.
- **Cross-device parity**: Phone, tablet, and desktop must deliver the same experience. Do not drop content or signature effects behind a breakpoint; adapt via scale, count, spacing, and reflow. Anything revealed on hover needs a visible resting state. Verify at 375/390/430, 768/834/1024, and 1280/1440/1920 in both themes.
- **Mobile hero**: Portrait card is `order-1` and the text block `order-2`, flipping at `md`. Keep the headline and primary CTA above the fold at 375x667. The three connected portrait markers and the three-stat block are present at every width; the markers use an opaque `--card` fill so they clear normal text contrast.
- **Mobile nav**: Full-viewport bottom sheet with large numbered links, not a plain side drawer list.
- **Website vs. resume copy**: The website is lead generation, so keep it concise and compelling. The resume is an interview generator, so preserve enough attributed technical detail, scope, and business impact for hiring teams to evaluate senior engineering leadership readiness.
- **Resume styling**: Own system in `components/resume/resume.css`, print-optimized and separate from the main site aesthetic. ATS constraints are load-bearing: single column, no tables or text boxes, ATS-safe font stack, standard section names, and real heading/list semantics. Resume headings must opt out of the global `h1-h6` display font. Keep section headings **title case**, never small all-caps or wide tracking: both cause PDF extraction to return `E X P E R I E N C E`, which stops an ATS from segmenting the document. Bullets render an inline marker in a grid cell so extraction keeps reading order instead of stranding markers at the page end. Contact icons are decorative SVG and safe; the contact text must stay real text. Verify changes by extracting text from a generated PDF, not by eye.
- **Resume variants**: `RESUME_VARIANTS` in `constants/content.ts` holds `engineer` (default) and `leader`. Same employers, dates, and metrics; only emphasis, bullet wording, and skill grouping differ. Never let the two drift factually. Selection lives in `components/resume/useResumeVariant.ts`: press and hold (~1500ms, pointer-based so it works on touch), double-click, or `?variant=leader`. Whatever is on screen is what prints. A screen-only badge confirms the active variant and is `print:hidden`. **Every mechanism must stay usable without a keyboard**, since the common path is printing from a phone. For the same reason the nav opens `/resume` without `?print=true`: auto-printing on arrival leaves no chance to choose a variant.
- **Resume metric bolding**: `Experience.tsx` bolds only figures ending in `%` or `+`. Do not broaden the pattern; a looser rule emphasised version numbers like "React 17 to 19" and library names like "D3.js".
- **No src/ folder**: All source code is at root (`app/`, `components/`, `lib/`, `hooks/`, `constants/`, `contexts/`, `emails/`).

---

## Environment Variables

| Variable             | Purpose                            |
| -------------------- | ---------------------------------- |
| `GMAIL_USER`         | Contact form sender (`.env.local`) |
| `GMAIL_APP_PASSWORD` | Gmail app password (`.env.local`)  |
