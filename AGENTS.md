# AI Coding Agent Guide

Purpose: Make agents instantly productive in this Playwright + TypeScript test framework by codifying how this repo is structured, how to run it, and how to extend it safely.

## Project Shape (big picture)

- Test stack: Playwright + TypeScript using a functional page-factory style.
- Layers: `pages/` (locator factories), `tests/` (specs), and `constants/` (shared routes).
- Test dir: Playwright runs from `src` (see `playwright.config.ts`); specs live under `src/tests`.

## How Things Work

- Page modules export factory functions like `mainPage(page)` or `topMenuMainPage(page)` from `kebab-case.page.ts` files. Each factory closes over `page` and returns locators plus parameterized locator builders only. No classes or inheritance.
- Locators live inside the page factories that use them. Do not reintroduce a separate `src/locators/**` layer.
- Routes live in `src/constants/routes.ts` as `ROUTES`; `playwright.config.ts` owns `use.baseURL`, so specs should navigate with route constants like `page.goto(ROUTES.home)`.
- UI specs import `test` / `expect` directly from `@playwright/test` and instantiate page factories locally from Playwright's `{page}` fixture.
- Specs own navigation, clicks, waits, URL assertions, and content assertions. If you need a helper, keep it in the spec file so the scenario stays visible while debugging.
- If this repo ever needs real shared fixtures, add a real `src/fixtures/base-test-fixture.ts` using `base.extend(...)`; do not add passthrough fixture wrappers that only re-export Playwright.
- Playwright config: retries only in CI; traces/videos/screenshots kept on failures.

## Conventions That Matter

- Page modules: export `camelCasePage(page)` or `camelCaseComponent(page)` functions from `kebab-case.page.ts` or `kebab-case.component.ts` files in `src/pages/**`.
- Page API: return reusable `Locator`s and parameterized locator builders only. Do not hide business flows or assertions inside page factories.
- Module sizing: keep one page factory per `*.page.ts` file; do not group multiple pages into a shared `.page` module.
- Page internals: keep page-specific helper data, lookup helpers, and locator builders inside the page function itself rather than at module scope.
- Page internals style: prefer direct keyed access or direct locator builders over small lookup helpers when the helper adds ceremony without reducing real complexity.
- Routing: use `ROUTES` from `src/constants/routes.ts` instead of hardcoded URLs.
- Tests: place under `src/tests/**`, name with `.spec.ts`, and instantiate page factories locally inside the test or `beforeEach`.
- Steps: keep scenario structure, clicks, waits, URL checks, and assertions in specs; do not wrap page-factory code in `test.step(...)`.
- Tags: classify suites with `@sanity` or `@nightly` in describe titles to enable targeted runs (see commands below).
- Quality gate: TypeScript type-checking is enforced in CI and pre-commit.
- Locator style: prefer role/test-id locators; use CSS only when role-based targeting is not practical.

## Typical Addition (minimal example)

```ts
// src/pages/main-content/main.page.ts
import type {Page} from '@playwright/test'

export const mainPage = (page: Page) => ({
	acceptCookiesButton: page.getByRole('button', {name: 'הבנתי!'}),
	allFactsLink: page.getByRole('link', {name: 'לכל העובדות'}),
})

// src/tests/main.spec.ts
import {expect, test} from '@playwright/test'
import {ROUTES} from '../constants/routes'
import {mainPage} from '../pages/main-content/main.page'

test.describe('Main Page @sanity', () => {
	test('loads and shows content', async ({page}) => {
		const main = mainPage(page)
		await page.goto(ROUTES.home)
		await main.acceptCookiesButton.click()
		await expect(main.acceptCookiesButton).not.toBeVisible()
		await expect(main.allFactsLink).toBeVisible()
	})
})
```

## Run, Debug, Quality

- Install once: `npm install && npx playwright install`
- All tests: `npm test` (runs locally with Playwright; no Docker)
- Sanity set: `npm run test:sanity` (sets `TEST_TAGS='@sanity'`)
- Nightly set: `npm run test:nightly` (sets `TEST_TAGS='@nightly'`)
- Report viewer: `npm run report`
- Type-check: `npm run type-check`
- Quality gates: `npm run quality:check` and `npm run quality:fix`

Notes

- **Local**: All test commands run **without Docker**—Playwright runs directly on the host.
- **CI**: Tests run **only inside Docker** (`docker compose build` then `docker compose run --rm test-runner npm run test:sanity` or `npm run test:nightly`).
- Retries apply only in CI (see `playwright.config.ts`).
- Prefer role-based locators inside page/component factories and avoid inline CSS/XPath in specs.
- Keep page factory modules focused on locators; use Playwright actions, waits, and assertions directly in specs.
- Add component factories under `src/pages/components/**` when a reusable UI region deserves its own abstraction.

## URLs

- Define `ROUTES` in `src/constants/routes.ts`.
- In specs, import from `../../constants/routes` and navigate with route constants (e.g., `await page.goto(ROUTES.home)`).

Reference Files

- `src/constants/routes.ts` — route constants
- `playwright.config.ts` — test dir, reporters, retries, tags
- `package.json` — scripts for test/quality
