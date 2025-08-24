# ITCB Testing Framework

> End-to-end test automation for the Israel Testing Certification Board (ITCB) website using Playwright + TypeScript

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.49-green.svg)](https://playwright.dev/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](LICENSE)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install

# Run tests
npm test
```

## 🏗️ Architecture

- **Page Object Model (POM)** with TypeScript
- **Dependency Injection** via custom fixtures
- **Automatic Fallback Locators** for robust testing
- **Pre-commit Quality Gates** (ESLint + Prettier + TypeScript)

## 📁 Project Structure

```
src/
├── core/         # Base classes (BasePage, LocatorUtils)
├── pages/        # Page objects (main-content, navigation, content-pages)
├── locators/     # Centralized element selectors
├── tests/        # Test specifications
├── fixtures/     # Custom Playwright fixtures
└── helpers/      # Utilities (environment, arrays)
```

## 🧪 Testing

```bash
npm test                  # All tests
npm run test:chrome       # Chrome only
npm run test:debug        # Debug mode
npm run test:headed       # Visual mode
npm run report            # View results
```

## 🔧 Development

```bash
npm run check             # Quality check (lint + format + tsc)
npm run fix               # Auto-fix issues
npm run codegen           # Generate test code
```

## 🌍 Environment Setup

Create `.env` file:

```bash
BASE_URL=your_test_environment_url
```

## 🤝 Contributing

1. **Quality First**: All commits go through automated quality checks
2. **Follow Patterns**: Use existing page object and locator patterns
3. **Test Categories**: Organize tests by functionality (main-content, navigation, content-pages)

### Code Style

- ESLint with zero warnings
- Prettier formatting
- Import alias: `@/` for internal imports

## 📖 Documentation

- **Architecture Details**: See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- **Development Guide**: See [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)
- **Troubleshooting**: See [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)

## 🔄 CI/CD

- **Code Quality**: Automated on every push/PR
- **Cross-browser Testing**: Chrome, Firefox, Safari
- **Test Reports**: Automated artifact generation

---

**Built with ❤️ for ITCB by the Testing Team**
