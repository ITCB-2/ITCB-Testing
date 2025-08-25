# Source Code Directory

This directory contains the complete test automation framework source code organized in a modular, maintainable structure.

## 📁 Directory Overview

### 🧩 **Core** (`core/`)

Foundation classes that provide reusable functionality:

- `BasePage.ts` - Base class for all page objects
- `LocatorUtils.ts` - Smart locator fallback strategies

### 📄 **Pages** (`pages/`)

Page Object Model implementation organized by functionality:

- `main-content/` - Homepage and slider components
- `navigation/` - Top and bottom menu navigation
- `content-pages/` - Certification, community, and informational pages

### 🎯 **Locators** (`locators/`)

Centralized element selectors separate from page logic:

- Organized to match page structure
- Support both CSS/XPath and role-based selectors
- Enable easy maintenance and updates

### 🧪 **Tests** (`tests/`)

Test specifications using dependency injection:

- `main-content/` - Core functionality tests (`@sanity`)
- `navigation/` - Menu and navigation tests (`@regression`)
- `content-pages/` - Page-specific tests (`@regression`)

### 🔧 **Fixtures** (`fixtures/`)

Custom Playwright fixtures for dependency injection:

- `testSetup.ts` - Page object injection configuration
- Enables clean test code with injected dependencies

### 🛠️ **Helpers** (`helpers/`)

Utility functions and configuration:

- `envUtils.ts` - Environment variable management
- Shared functions for common operations

### 📊 **Data** (`data/`)

Test data and constants:

- Environment-aware configuration
- URL definitions and test constants

### 📝 **Types** (`types/`)

TypeScript interfaces and type definitions:

- `fixtureTypes.ts` - Page fixture interfaces
- `locatorTypes.ts` - Locator type definitions

## 🔗 Import Strategy

All imports use the `@/` alias for clean, maintainable code:

```typescript
// ✅ Correct
import {BasePage} from '@/core'
import {LOGIN_PAGE_LOCATORS} from '@/locators'
import {envUtils} from '@/helpers'

// ❌ Avoid
import {BasePage} from '../core/BasePage'
import {LOGIN_PAGE_LOCATORS} from '../../locators/Login_Page'
```

## 🏗️ Architecture Principles

1. **Separation of Concerns**: Locators, page logic, and tests are separated
2. **Dependency Injection**: Page objects injected via custom fixtures
3. **Inheritance**: All page objects extend `BasePage`
4. **Automatic Fallbacks**: Smart locator resolution strategies
5. **Type Safety**: Full TypeScript support with strict mode

## 🚀 Getting Started

For detailed development instructions, see:

- [Architecture Guide](../docs/ARCHITECTURE.md)
- [Development Guide](../docs/DEVELOPMENT.md)
- [Testing Strategy](../docs/TESTING.md)
