# Copilot Instructions

## Project Overview

This project is a Playwright test automation framework built with TypeScript using the Page Object Model (POM) pattern. It is designed for end-to-end testing of web applications with a focus on maintainability, reusability, and scalability.

## Architecture Overview

### Three-Layer Architecture

1. **Core Layer**: `BasePage` (extends `LocatorUtils`) provides reusable methods for all page objects
2. **Page Layer**: Specific page objects that implement business actions
3. **Test Layer**: Test specs that use injected page objects via custom fixtures

### Key Dependencies

- All page objects automatically injected via `testSetup.ts` fixtures
- Centralized environment variable access through `envUtils.ts`
- Automatic fallback locator strategies in `LocatorUtils.ts`

## Project Structure

```
src/
├── core/           # BasePage, LocatorUtils - foundation classes
├── pages/          # Page Object Model classes
├── locators/       # Centralized element locators (separate from pages)
├── fixtures/       # Custom Playwright fixtures for dependency injection
├── helpers/        # Environment utilities, shared functions
├── data/           # URLs, test constants (environment-aware)
└── tests/          # Test specification files
```

## Critical Patterns & Conventions

- **Page objects**: `*Page` (e.g., `LoginPage`, `HomePage`) - always extend `BasePage`
- **Locators**: `UPPER_SNAKE_CASE` with `_LOCATORS` suffix (e.g., `LOGIN_PAGE_LOCATORS`)
- **Test files**: end with `.spec.ts`
- **Import alias**: Use `@/` for all internal imports (configured in tsconfig.json)

### Complete Example Pattern

```typescript
// src/locators/Login_Page.ts
export const LOGIN_PAGE_LOCATORS = {
  submitButton: {role: 'button', name: 'Submit'},
  formSection: {
    usernameField: {role: 'textbox', name: 'Username'},
    passwordField: {role: 'textbox', name: 'Password'},
  },
} as const

// src/pages/LoginPage.ts
export class LoginPage extends BasePage {
  async navigateToPage(): Promise<void> {
    await test.step('Navigate to Login Page', async () => {
      const {usernameField} = LOGIN_PAGE_LOCATORS.formSection
      await this.page.goto(BASE_URL)
      await this.validateVisibility(usernameField)
    })
  }
}

// src/tests/login.spec.ts
test.describe('Login Tests', () => {
  test('should validate login', async ({loginPage}) => {
    await loginPage.navigateToPage()
    await loginPage.performLogin()
  })
})
```

### Fixture-Based Dependency Injection

```typescript
// src/fixtures/testSetup.ts - Auto-injection pattern
const test = base.extend<PageFixtures>({
  loginPage: async ({page}, use) => await use(new LoginPage(page)),
  homePage: async ({page}, use) => await use(new HomePage(page)),
})
```

## Development Workflow & Commands

### Quality Automation (Pre-commit Hooks via Husky)

```bash
npm run check          # Lint + format + TypeScript check
npm run fix            # Auto-fix formatting and linting issues
npm run lint:check     # CI-friendly lint check (max-warnings 0)
npm run format:check   # CI-friendly format check
```

### Testing Commands

```bash
npm test               # Run all Playwright tests
npm run test:chrome    # Run tests in Chromium only
npm run test:debug     # Run tests with Playwright inspector
npm run test:headed    # Run tests in headed mode
npm run report         # Open HTML test report
npm run codegen        # Launch Playwright code generator
```

### Development Pattern: Always use VS Code tasks for these commands when available

## Core Guidelines

- All page objects extend `BasePage` and import locators from separate files
- Use `test.step()` for grouping logical actions in page object methods
- Locators support both string and role-based objects; prefer role-based for accessibility
- Use destructured page objects from fixtures in tests (e.g., `{loginPage}`)
- Access environment variables only via `envUtils.ts`
- Use TypeScript interfaces for test data in `@/data`

## Locator Strategy

- Automatic fallback: CSS/XPath → getByLabel → getByText → getByRole
- Locator type: `string | {parent?: string; role: string; name: string}`

## Best Practices

- Keep page objects focused and reusable; use helper functions for common actions
- Prefer role-based locators and descriptive error messages
- Implement retry logic for flaky tests

## Environment & Data

- Use `.env` for secrets (never hardcode)
- Configure multiple environments in Playwright config
- Store test data in `@/data` using interfaces

## Error Handling

- Throw descriptive errors with context
- Use try-catch for locator fallbacks
- Validate environment variables on startup

---

This file is intentionally concise. For standard Playwright/TypeScript practices, follow the official docs. Focus here is on unique project patterns and conventions.
