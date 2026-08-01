# Learnings

## 2026-07-31 — Confirm employment facts before resume copy
- **Status**: pending
- **Context**: Portfolio redesign asked for Cardata start date but not title/scope; draft assumed Senior Software Engineer from public job posting.
- **Lesson**: When updating resume/timeline with a new employer, confirm title, location, and early-scope bullets before writing achievements — especially for roles started recently where inventing impact would be dishonest.
- **Action**: pending

## 2026-07-31 — Leadership brief ≠ executive brochure layout
- **Status**: pending
- **Context**: User wanted leadership-ready portfolio; first pass used a boring executive dossier layout and lost creative personality + interactive timeline/menu behaviors.
- **Lesson**: When the brief mixes leadership credibility with personal/creative energy, do not default to Swiss/executive brochure templates. Keep distinctive layout, motion, and playful craft while elevating copy. Preserve existing interaction patterns users liked (scroll-expand timeline, expressive mobile nav) unless asked to remove them.
- **Action**: pending

## 2026-07-31 — Playwright needs sandbox + platform overrides on this machine
- **Status**: pending
- **Context**: Visual verification of the hero/mobile layout kept failing three different ways before it worked: the sandboxed shell redirects `PLAYWRIGHT_BROWSERS_PATH` to an empty cache, Playwright 1.59 misreads macOS 27 as `mac-x64` and looks for a nonexistent binary, and Chromium segfaults (SIGSEGV) under the sandbox even once the path resolves.
- **Lesson**: To drive a real browser in this repo, run the command with `required_permissions: ["all"]` and set both `PLAYWRIGHT_BROWSERS_PATH="$HOME/Library/Caches/ms-playwright"` and `PLAYWRIGHT_HOST_PLATFORM_OVERRIDE="mac15-arm64"`. Playwright is already in `node_modules`, so no install step is needed. Do this up front instead of debugging the three failures again.
- **Action**: pending

## 2026-07-31 — Gamified framing is fine; trophy framing is not
- **Status**: pending
- **Context**: Owner rejected the "Achievements unlocked" band under the hero ("weird ... unless I'm talking about like I have my PMP certification, which I don't"), while explicitly liking the rest of the gamified HUD aesthetic, the parallax, and the scroll-expanding timeline.
- **Lesson**: For a personal portfolio, career metrics must read as track record with attribution (number + result + which employer produced it), never as badges, trophies, checkmarks, or "unlocked" counters. Game-console styling on navigation, cards, and section labels is welcome; the trophy-case metaphor for a person's career is not. When removing a disliked section, re-home the numbers and the well-liked motion rather than deleting both.
- **Action**: captured as a convention in `CLAUDE.md` (Conventions → "Career numbers")

## 2026-07-31 — A metaphor in the brief is a design direction, not a vocabulary
- **Status**: pending
- **Context**: The brief suggested XP, quest logs, skill trees, and loadouts as framing devices. Those words ended up as literal UI labels ("Class / Level / Status", "Objectives", "Loadout · 4 slots", "Player 2 · Enter name", "End of run"). The owner wanted the game *feel*, and said there should be no gaming terminology at all.
- **Lesson**: When a brief describes a product through a metaphor, treat it as direction for motion, layout, and interaction, never as user-facing copy. Ask which layer the metaphor belongs to before writing strings. A recruiter or executive must be able to read every label without decoding it. When stripping the vocabulary, do not compensate by making the copy jokey; the design layer already carries the personality.
- **Action**: captured as a convention in `CLAUDE.md` (Conventions → "No game vocabulary")

## 2026-07-31 — Measure scroll-driven layout, do not reason about it
- **Status**: pending
- **Context**: Timeline cards expanded too late and landed half off-screen. I twice picked a trigger offset by reasoning about the geometry, and was wrong both times, because a collapsing card above the active one shifts it by an amount I kept mis-estimating. Only after building a harness that logged each hand-off did the relationship become clear (landing ≈ line − expandedHeight/2 + collapsedHeight), which gave the right value in one shot: 2/8, 8/8, 5/8 cards landing correctly became 7/8, 8/8, 8/8.
- **Lesson**: For any scroll-driven behavior where an element's own size changes, build the measurement harness before tuning a constant. Log the state at the moment of the transition, not at fixed scroll offsets, and exclude samples from past the end of the section or the numbers will be dominated by irrelevant tail state. Then fit the constant to the data.
- **Action**: pending

## 2026-07-31 — Resolve computed colours through a canvas, never a regex
- **Status**: pending
- **Context**: A contrast check parsed `getComputedStyle(el).color` with a number regex. This repo defines colours in `oklch()`, which Chrome returns as `oklch(0.23 0.02 158)`, so the regex read the lightness/chroma/hue triple as RGB bytes and reported every badge at 1.0-1.5:1. The CSS was actually fine; the measurement was not. Real values were 18.3:1 light and 14.4:1 dark.
- **Lesson**: To get real sRGB bytes from any CSS colour, paint it into a 1x1 canvas over a known backdrop and read `getImageData`. This handles `oklch`, `color()`, `lab`, and alpha compositing for free. Also: when a verification reports that *everything* fails uniformly, suspect the harness before rewriting the code.
- **Action**: pending

## 2026-08-01 — Website copy and resume copy have different conversion jobs
- **Status**: pending
- **Context**: A site-wide brevity pass improved the portfolio but stripped implementation detail, ownership scope, and technical context from the resume, making it less useful to recruiters and hiring managers.
- **Lesson**: Optimize portfolio copy for attention and continued reading. Optimize resume copy for interview conversion with attributed scope, implementation detail, and measurable outcomes. Keep the positioning consistent, but never apply the website's compression target mechanically to resume bullets.
- **Action**: captured as a convention in `CLAUDE.md` (Conventions → "Website vs. resume copy")

## 2026-08-01 — Verify document accessibility by extracting, not by looking
- **Status**: pending
- **Context**: A resume looked correct on screen while its PDF extracted headings as `E X P E R I E N C E` and stranded every bullet marker at the end of the page. Both defects are invisible visually and both break ATS parsing. Diagnosis took three wrong guesses (letter-spacing, webfont, `text-transform`) before a DOM-level A/B test showed small all-caps was the trigger.
- **Lesson**: For any document whose real consumer is a parser (resume PDFs, invoices, exported reports), verify by extracting the output and reading it back, and treat extraction order as a requirement. When several styling properties could explain a rendering artifact, run one controlled A/B in the live DOM instead of changing properties one at a time and re-rendering.
- **Action**: captured as a convention in `CLAUDE.md` (Conventions → "Resume styling")
