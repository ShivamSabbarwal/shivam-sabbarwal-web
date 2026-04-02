# CLAUDE.md

> **Context loaded.** If you see this line, CLAUDE.md is active. When the user asks, confirm with "Context: active."

---

## Self-Update Protocol

This file is the **single source of truth** for all agents working in this repo. It MUST stay current:

- **When to update**: After any conversation where new project patterns, conventions, architectural decisions, renamed/added/removed files, new dependencies, or user preferences are established — update this file before the conversation ends.
- **What to update**: Add new conventions, fix stale paths/layers, reflect dependency changes, add new commands or env vars. Remove anything no longer accurate.
- **What to NEVER change**: The sections marked `<!-- LOCKED -->` below are **user-defined strict rules**. Do not weaken, remove, or reword them. You may only add to locked sections if the user explicitly asks.
- **How to update**: Edit only the specific lines that changed. Do not rewrite the entire file. Keep the format concise — bullet points and tables, not prose.

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
bun run dev              # Start Next.js dev server (Turbopack) — DON'T RUN
bun run build            # Production build — DON'T RUN (CI only)
bun run start            # Serve production build
bun run lint             # Run oxlint + eslint
bun run lint:fix         # Auto-fix lint issues (oxlint then eslint)
```

---

## Architecture

Personal portfolio site: **Next.js 16 App Router** · **React 19** · **Tailwind CSS v4** · **Bun**

### Routes

| Route | Purpose |
|-------|---------|
| `/` | Main portfolio — Hero, Timeline, TechStack, Projects, Contact |
| `/resume` | Printable resume with its own component tree |

### Key Layers

| Layer | Location | Notes |
|---|---|---|
| App shell | `src/app/layout.tsx` → `providers.tsx` | ErrorBoundary → ThemeProvider (custom, not next-themes) |
| Main page layout | `src/components/layout/MainLayout.tsx` | Navigation, Footer, Cursor, FloatingBubbles |
| Sections | `src/components/sections/` | Hero, Timeline, TechStack, Projects, Contact — all `"use client"` |
| Resume | `src/components/resume/` | Self-contained: index.tsx + components/ subfolder |
| UI primitives | `src/components/ui/` | shadcn/ui (badge, button, card, input, label, sheet, sonner, textarea) |
| Brand icons | `src/components/icons/BrandIcons.tsx` | GithubIcon, LinkedinIcon, InstagramIcon (inline SVGs) |
| Server actions | `src/app/actions/contact.ts` | Contact form email via nodemailer + react-email |
| Audio | `src/lib/audio/sounds.ts` | Web Audio API: playClick, playHover, playBounce |
| Constants | `src/constants/index.ts` | NAV_ITEMS, SOCIAL_LINKS, PERFORMANCE config |
| Theme | `src/contexts/ThemeContext.tsx` | Custom light/dark with localStorage persistence |

### Import Alias

`@/*` → `./src/*` (tsconfig.json)

---

## Conventions

- **React 19**: No `import React`. Use named imports (`useState`, `useEffect`, `type ReactNode`). No `React.FC`.
- **Tailwind v4**: Use `bg-linear-to-br` not `bg-gradient-to-br`. CSS uses `@theme inline` and `@custom-variant`.
- **Animations**: Use `motion` package. Import from `"motion/react"` (not `framer-motion`).
- **Icons**: `lucide-react` for general icons. Brand icons from `@/components/icons/BrandIcons`.
- **Icon typing**: `LucideIcon` type from `lucide-react` for icon props (not `any`).
- **Images**: Next.js `<Image>` with `fill`/`sizes`/`priority` — never raw `<img>`.
- **Client components**: `"use client"` only where needed (hooks, browser APIs, motion).
- **Resume styling**: Own system in `src/app/globals.css` resume section — separate from main site's cartoon/3D aesthetic.

---

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `GMAIL_USER` | Contact form sender (`.env.local`) |
| `GMAIL_APP_PASSWORD` | Gmail app password (`.env.local`) |
