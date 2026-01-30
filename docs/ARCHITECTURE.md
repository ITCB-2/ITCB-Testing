# Architecture Guide

## Three-Layer Architecture

### 1. Page Layer

- Page objects with `protected page: Page` using Playwright APIs directly
- No shared base class; actions and assertions use `page.goto()`, `page.getByRole()`, `expect(...).toBeVisible()`, etc.
- Organized by functionality: main-content, navigation, content-pages

### 2. Test Layer

- Test specs using injected page objects via custom fixtures
- Organized to match page structure

## Key Design Principles

### Dependency Injection

All page objects automatically injected via custom fixtures in `src/fixtures/testSetup.ts`:

```typescript
const test = base.extend<PageFixtures>({
  mainPage: async ({page}, use) => await use(new MainPage(page)),
  topMenuMainPage: async ({page}, use) => await use(new TopMenuMainPage(page)),
})
```

### Centralized Locators

- All locators in separate files under `src/locators/`
- Prevents coupling between page objects and selectors
- Supports both string selectors and role-based objects (`{ role, name }` or with `parent`)
- In code: use `page.locator(selector)` for strings; `page.getByRole(role, { name })` or `page.locator(parent).getByRole(role, { name })` for role objects

## Import Strategy

- Use `@/` alias for all internal imports
- Avoid circular dependencies by importing specific modules
- Barrel exports in index.ts files for external consumption
