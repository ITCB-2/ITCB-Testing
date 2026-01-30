# AI Coding Agent Guide

Purpose: Make agents instantly productive in this Playwright + TypeScript test framework by codifying how this repo is structured, how to run it, and how to extend it safely.

## Project Shape (big picture)

- Test stack: Playwright + TypeScript using a 3-layer model.
- Layers: `pages/` (Page Objects), `tests/` (specs) with fixtures in `fixtures/` and locators in `locators/`.
- Test dir: Playwright runs specs from `src/tests` (see `playwright.config.ts`).

## How Things Work

- Page Objects hold a `page: Page` and use Playwright APIs directly (`page.goto()`, `page.getByRole()`, `expect(...).toBeVisible()`, etc.). No shared base class.
- Locators are centralized under `src/locators/**`; prefer role-based objects over raw selector strings.
- Fixtures (`src/fixtures/testSetup.ts`) inject ready-to-use page objects into tests (e.g., `{mainPage, topMenuMainPage, ...}`) via the custom `test` export from `@playwright/test`.
- URLs: use `BASE_URL` and `URLS` from `src/data/urls.ts`; do not read `process.env` directly in tests/pages.
- Playwright config: retries only in CI and only when tag-filtering (via `TEST_TAGS`) for `@sanity`/`@nightly`; traces/videos/screenshots kept on failures.

## Conventions That Matter

- Page Objects: `*Page` classes in `src/pages/**` with `protected page: Page`; expose high-level business actions using Playwright actions and assertions directly.
- Locator names: `UPPER_SNAKE_CASE` with `_LOCATORS` suffix (e.g., `LOGIN_PAGE_LOCATORS`).
- Locators: role-based `{ role, name }` or with `parent`; string selectors for CSS when needed.
  - Preferred: `{ role: 'button', name: 'Submit' }` or with parent `{ parent: '#navbarScroll', role: 'link', name: 'Menu' }`.
- Tests: place under `src/tests/**`, name with `.spec.ts`.
- Steps: group meaningful actions with `test.step(...)` from `@playwright/test` inside page methods where helpful.
- Tags: classify suites with `@sanity` or `@nightly` in describe titles to enable targeted runs (see commands below).
- Lint/format: Biome.js is enforced; formatting violations fail CI. Follow rules in `biome.json` (tests have relaxed rules).
- Locator resolution (from code):
  - For string locators: `page.locator(selector)`.
  - For role locators: `page.getByRole(role, { name })`, with optional parent via `page.locator(parent).getByRole(role, { name })`.

## Typical Addition (minimal example)

```ts
// src/locators/content-pages/Login_Page.ts
export const LOGIN_PAGE_LOCATORS = {
	form: {parent: '#login', role: 'textbox', name: 'Username'},
	submit: {role: 'button', name: 'Submit'},
} as const

// src/pages/LoginPage.ts
import {test} from '@playwright/test'
import {expect, type Page} from '@playwright/test'
import {BASE_URL} from '../../data/urls'
import {LOGIN_PAGE_LOCATORS as L} from '../../locators/content-pages/Login_Page'

export class LoginPage {
	protected page: Page
	constructor(page: Page) {
		this.page = page
	}
	async navigateTo(): Promise<void> {
		await this.page.goto(`${BASE_URL}/login`)
	}
	async validateLoaded(): Promise<void> {
		await expect(
			this.page
				.locator(L.form.parent)
				.getByRole(L.form.role, {name: L.form.name}),
		).toBeVisible()
	}
}

// src/tests/main.spec.ts (fixture-based injection)
import {test} from '../fixtures'
test.describe('Main Page @sanity', () => {
	test('loads and shows content', async ({mainPage}) => {
		await mainPage.openMainPage()
		await mainPage.validateContactOnMainPage()
	})
})
```

## Run, Debug, Quality

- Install once: `npm install && npx playwright install`
- All tests: `npm test` (runs locally with Playwright; no Docker)
- Sanity set: `npm run test:sanity` (sets `TEST_TAGS='@sanity'`)
- Full suite: `npm run test:nightly` (sets `TEST_TAGS='@nightly'`)
- Chromium only: `npm run test:chrome`
- Debug inspector: `npm run test:debug`
- Report viewer: `npm run report`
- Quality gates: `npm run check` (lint + format check + `tsc`)
- Auto-fix: `npm run fix`
- Lint only: `npm run lint:check`
- Format check: `npm run format:check`

Notes

- **Local**: All test commands run **without Docker**—Playwright runs directly on the host.
- **CI**: Tests run **only inside Docker** (`docker compose build` then `docker compose run --rm test-runner npm run test:sanity` or `npm run test:nightly`).
- Retries apply only in CI when `TEST_TAGS` targets `@sanity`/`@nightly` (see `playwright.config.ts`).
- Prefer role-based locators from `src/locators/**` and avoid inline CSS/XPath in tests.
- Use `BASE_URL` and `URLS` from `src/data/urls.ts`; define in code or via env as needed (never commit secrets).
- Keep page classes small; use Playwright actions and assertions directly in page methods.

## URLs

- Define `BASE_URL` and `URLS` in `src/data/urls.ts` (e.g., `export const BASE_URL = 'https://www.example.com'`).
- In pages, import from `../../data/urls` and compose full paths when navigating (e.g., `await this.page.goto(BASE_URL + '/login')`).

Reference Files

- `src/fixtures/testSetup.ts` — fixture-based dependency injection (extends `@playwright/test`)
- `src/data/urls.ts` — base URL and route constants
- `src/types/fixtureTypes.ts` — fixture typing
- `playwright.config.ts` — test dir, reporters, retries, tags
- `package.json` — scripts for test/quality
