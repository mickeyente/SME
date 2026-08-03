# NDPA Copilot — Frontend

Next.js (App Router) + Tailwind, structured so each phase of the roadmap has an
obvious home. Design system lives in one place so Phase 1's dashboard and
Phase 5's chat interface share the same visual language.

## Folder structure

```
src/
├── app/                    # routes (Next.js App Router)
│   ├── layout.tsx          # root layout — wraps everything in AppShell
│   ├── page.tsx            # redirects to /dashboard for now
│   ├── assessment/         # Phase 1 — onboarding survey
│   ├── dashboard/          # Phase 1 — score breakdown (built as demo)
│   ├── policies/           # Phase 2 — upload + generated policy review
│   ├── integrations/       # Phase 3 — OAuth / integrations hub
│   ├── security-logs/      # Phase 4 — scan history + alert timeline
│   └── ciso/               # Phase 5 — conversational Virtual CISO
├── components/
│   ├── ui/                 # design-system primitives (Button, Card, ScoreSeal)
│   ├── layout/              # AppShell, nav — shared chrome
│   ├── assessment/         # survey-question components (add here for Phase 1)
│   └── dashboard/          # score-breakdown components (add here for Phase 1)
├── design-system/
│   └── tokens.ts           # risk-level → color/label mapping (single source of truth)
├── lib/                    # api.ts (FastAPI client), utils
├── hooks/
├── types/
└── styles/
    └── globals.css         # CSS variables — the actual color/type values
```

**Rule of thumb:** a component used by only one phase's page lives in
`components/<phase-name>/`. Anything reused across 2+ phases (buttons, cards,
the score seal, alert chips) lives in `components/ui/`.

## Design system — "The Seal"

- **Palette** (`src/styles/globals.css`): deep navy (`--color-ink`) for
  authority, warm off-white paper background, amber accent for CTAs, and a
  three-color risk system (safe/caution/risk) used *only* for score states —
  never as decoration elsewhere. This keeps risk color meaningful: if
  something is green, it means compliant, full stop.
- **Type**: Inter for body (small, fast-loading, legible on low-bandwidth
  mobile), General Sans for display/headings (bold, confident — install via
  `@fontsource/general-sans`, already in package.json), JetBrains Mono for the
  score digits and any registry/reference numbers — it should feel like
  reading a certificate, not a dashboard widget.
- **Signature element**: `ScoreSeal` (`components/ui/ScoreSeal.tsx`) — a
  circular gauge styled like an official stamp. It's the one shape a
  non-technical SME owner learns to read once and trusts everywhere: the big
  dashboard hero, small list chips, alert cards in Phase 4, and the CISO chat
  bubbles in Phase 5.
- All risk-state logic (what counts as "safe" vs "caution" vs "risk", what
  label to show) is centralized in `design-system/tokens.ts` — when the
  Cybersecurity Analyst's scoring formula changes in Phase 1, this is the only
  file the frontend should need to touch to stay in sync.

## Getting started

```bash
npm install
npm run dev
```

Visit `/dashboard` to see the design system in action (mock data — swap for
the real API once the Backend Developer's scoring endpoint is live).

## Next steps for Phase 1

1. Build the actual survey in `app/assessment/` + `components/assessment/`
   (multi-step form, ideally one question per screen given low-bandwidth/mobile
   audience).
2. Replace `MOCK_RESULT` in `app/dashboard/page.tsx` with a real fetch to the
   FastAPI risk-scoring endpoint via `lib/api.ts`.
3. Add empty/error states for the dashboard (no survey completed yet, API
   failure) — write these in the interface's voice: explain what happened and
   what to do next, don't apologize.
