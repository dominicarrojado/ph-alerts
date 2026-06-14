# AGENTS

Minimal instructions for AI coding agents working in this repository.

## Scope

- Use this file for repo-wide guidance.
- Link to existing docs instead of duplicating them. Start with [README.md](./README.md) for setup.

## Commands

- Install dependencies: `yarn install`
- Start dev server: `yarn dev` (runs on port `3001`)
- Lint: `yarn lint` (Next.js ESLint)
- Test: `yarn test` (Jest)
- Test watch mode: `yarn test:watch`
- Production build: `yarn build`

## Architecture

- This is a Next.js 13 App Router app using static export.
- Route files live under `app/`, with topic-specific pages under `app/topics/` and category landing pages under `app/categories/`.
- Shared UI lives in `components/`. Low-level shadcn/radix primitives live in `components/ui/`.
- Shared content, enums, constants, and types live in `lib/`. Start with `lib/content.tsx`, `lib/constants.ts`, `lib/enums.ts`, and `lib/types.ts` when changing navigation, topics, or labels.
- Client-side API calls are centralized in `lib/api-hooks.ts` and use `API_URL` from `lib/constants.ts`.

## Notification Channels

Two notification channels are used across topics:

- **Email** — the default for all topics. Uses the `SubscribeForm` component driven by `NotificationSettings` arrays from `lib/content.tsx`.
- **Telegram** — used only for topics that have a dedicated Telegram channel. Uses the `TelegramChannels` component (category pages) or `TelegramLinkButton` (individual topic pages).

Currently, only **Cebu Pacific Flights** has a Telegram channel (`PHAlertsCebuPacificFlights`). All other topics are email-only.

## Categories

| Category     | Route                       | Channel type                                            |
| ------------ | --------------------------- | ------------------------------------------------------- |
| Travel       | `/categories/travel/`       | Telegram (Cebu Pacific) + Email (Jetstar, travel deals) |
| Exam Results | `/categories/exam-results/` | Email only                                              |

Category pages that mix Telegram and email use the `PageSeparator` component between the two sections, following the pattern in `app/categories/travel/page.tsx`.

## Topics

| Topic                | Route                           | Channel                    |
| -------------------- | ------------------------------- | -------------------------- |
| Cebu Pacific Flights | `/topics/cebu-pacific-flights/` | Telegram only              |
| Jetstar Flights      | `/topics/jetstar-flights/`      | Email (via subscribe page) |

## Conventions

- Prefer existing `components/ui/*` primitives and current Tailwind utility patterns before adding new abstractions.
- Keep styling in Tailwind classes. Variant-heavy reusable components should follow the existing `class-variance-authority` pattern.
- Follow the ESLint rules in `.eslintrc.json`: use `async`/`await` instead of `.then()`/`.catch()`, avoid nested ternaries, prefer object shorthand, prefer `const`, keep `console` usage to `console.warn` or `console.error`, and keep files Prettier-clean because formatting violations fail lint.
- Preserve the current font/theme setup in `app/layout.tsx` and token-based Tailwind config in `tailwind.config.ts`.
- Route-level pages use lightweight Jest render tests alongside the page file (`page.test.tsx`). When adding a new route, add or update the matching test.

## Static Export Constraints

- `next.config.js` sets `output: "export"`, `trailingSlash: true`, and `images.unoptimized: true`.
- Avoid changes that require a Node runtime or server-only features unless the export strategy is also updated.
- When adding pages or data flows, make sure they work under static export.

## High-Friction Edits

- Many feature pages are assembled from shared enums/constants/content instead of isolated page-local data. If a topic, channel, or category changes, check `lib/content.tsx`, `lib/constants.ts`, and `lib/enums.ts` together.
- **Adding a new email-only topic:** add the `SubscriptionTopic` enum value in `lib/enums.ts`, add the `NotificationSetting` entry to `NOTIFICATION_SETTINGS` in `lib/content.tsx`, and add it to the relevant `*_NOTIFICATION_SETTINGS` constant for its category page.
- **Adding a new Telegram topic:** add the `TelegramChannel` enum value in `lib/enums.ts`, add a `TopicTitle` enum entry, add a `TelegramPublicChannel` entry to the relevant `*_TELEGRAM_CHANNELS` constant in `lib/content.tsx`, and add a `TelegramLinkButton` to the topic page. If the category page is currently email-only, also add a `TelegramChannels` section with a `PageSeparator` between it and the `SubscribeForm`.
- **Adding a new category:** add the route to `Routes` in `lib/enums.ts`, add the card to `CATEGORY_ITEMS` in `lib/content.tsx`, create the category page under `app/categories/`, and add the relevant `*_NOTIFICATION_SETTINGS` and/or `*_TELEGRAM_CHANNELS` constants.
- New route pages should usually come with a matching `page.test.tsx` so the PR workflow continues to cover render-level regressions.
- The Travel category uses a split approach: `TRAVEL_TELEGRAM_CHANNELS` feeds the `TelegramChannels` section, and `TRAVEL_NOTIFICATION_SETTINGS` (filtered from `NOTIFICATION_SETTINGS`) feeds the `SubscribeForm` section. Keep these two lists in sync when adding travel topics.
- `NEW_FEATURES_NOTIFICATION_SETTING` is automatically appended by `SubscribeForm` when `defaultTopics` is provided — do not include it manually in any `*_NOTIFICATION_SETTINGS` array.
