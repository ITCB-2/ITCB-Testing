# ITCB Testing Framework

> 🎯 **Comprehensive End-to-End Test Automation** for the Israel Testing Certification Board (ITCB) website using **Playwright + TypeScript**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.49.1-green.svg)](https://playwright.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-brightgreen.svg)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](LICENSE)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-blue.svg)](https://github.com/ITCB-2/ITCB-Testing/actions)

## 🚀 Quick Start

### Prerequisites

- **Node.js** (LTS version)
- **npm** (comes with Node.js)
- **Git** for version control

### Installation & Setup

```bash
# Clone the repository
git clone https://github.com/ITCB-2/ITCB-Testing.git
cd ITCB-Testing

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Setup environment (required)
cp .env.example .env  # Add your BASE_URL

# Run tests
npm test
```

### Verify Installation

```bash
# Quick validation
npm run check        # Code quality check
npm run test:sanity  # Run critical tests only
npm run report       # View test results
```

## 🏗️ Architecture

### **Three-Layer Architecture**

- 🏛️ **Core Layer**: `BasePage` + `LocatorUtils` (foundation classes)
- 📄 **Page Layer**: Business-specific page objects with automatic injection
- 🧪 **Test Layer**: Test specifications using injected dependencies

### **Key Features**

- ✨ **Page Object Model (POM)** with TypeScript
- 🔄 **Dependency Injection** via custom Playwright fixtures
- 🎯 **Automatic Fallback Locators** (CSS → Label → Text → Role)
- 🛡️ **Pre-commit Quality Gates** (ESLint + Prettier + TypeScript)
- 🏷️ **Test Tagging System** (`@sanity`, `@regression`)
- ⚡ **Smart CI/CD Pipeline** with automated and scheduled testing

## 📁 Project Structure

```
📦 ITCB-Testing/
├── 📂 src/
│   ├── 🧩 core/              # Foundation classes
│   │   ├── BasePage.ts       # Base class for all page objects
│   │   └── LocatorUtils.ts   # Smart locator fallback strategies
│   ├── 📄 pages/             # Page Object Model implementation
│   │   ├── main-content/     # Homepage & slider functionality
│   │   ├── navigation/       # Top/bottom menu navigation
│   │   └── content-pages/    # Certification, facts, community pages
│   ├── 🎯 locators/          # Centralized element selectors
│   │   ├── main-content/     # Main page locators
│   │   ├── navigation/       # Menu locators
│   │   └── content-pages/    # Content page locators
│   ├── 🧪 tests/             # Test specifications
│   │   ├── main-content/     # Core functionality tests (@sanity)
│   │   ├── navigation/       # Menu navigation tests (@regression)
│   │   └── content-pages/    # Page-specific tests (@regression)
│   ├── 🔧 fixtures/          # Custom Playwright fixtures
│   ├── 🛠️ helpers/           # Utilities (environment, validation)
│   ├── 📊 data/              # Test data & constants
│   └── 📝 types/             # TypeScript interfaces & types
├── 📂 docs/                  # Comprehensive documentation
├── 📂 .github/               # CI/CD workflows & project config
└── 📂 test-results/          # Generated test artifacts
```

### 🔧 Import Strategy

All internal imports use the `@/` alias for clean, maintainable code:

```typescript
import {BasePage} from '@/core'
import {LOGIN_PAGE_LOCATORS} from '@/locators'
import {envUtils} from '@/helpers'
```

## 🧪 Testing

### **Available Commands**

```bash
# 🚀 Core Testing Commands
npm test                       # Run all tests (full suite)
npm run test:sanity           # Critical functionality only (⚡ fast)
npm run test:regression       # Comprehensive validation
npm run test:chrome           # Single browser (Chromium only)

# 🔍 Development & Debugging
npm run test:debug            # Interactive debugging mode
npm run test:headed           # Visual execution (see browser)
npm run codegen              # Auto-generate test code
npm run report               # Open interactive HTML report

# 📊 Specific Test Categories
npm run test:sanity:chrome    # Fast sanity tests in Chrome only
npm run test:regression:chrome # Regression tests in Chrome only
```

### **🏷️ Test Classification System**

#### **@sanity Tests** (🚨 Critical - Daily CI)

- ⏱️ **Execution Time**: ~5-10 minutes
- 🎯 **Purpose**: Core functionality validation
- 📅 **Schedule**: Runs **every 30 minutes** on CI
- 📊 **Coverage**:
  - Main page content validation
  - Slider functionality (all 5 slides)
  - Core user journeys

#### **@regression Tests** (🔍 Comprehensive - Nightly CI)

- ⏱️ **Execution Time**: ~30-45 minutes
- 🎯 **Purpose**: Full application validation
- 📅 **Schedule**: **Nightly at 2 AM UTC**
- 📊 **Coverage**:
  - Navigation menus (top/bottom)
  - Content pages (certifications, facts, community)
  - Complex user interactions
  - Cross-browser compatibility

### **🎯 Test Organization by Functionality**

| **Category**      | **Tests**                 | **Tag**       | **Coverage**                     |
| ----------------- | ------------------------- | ------------- | -------------------------------- |
| **Main Content**  | `main-content/*.spec.ts`  | `@sanity`     | Homepage, sliders, core content  |
| **Navigation**    | `navigation/*.spec.ts`    | `@regression` | Top/bottom menus, routing        |
| **Content Pages** | `content-pages/*.spec.ts` | `@regression` | Certifications, community, facts |

## 🔧 Development

### **Quality-First Development Workflow**

```bash
# 🔍 Quality Assurance (Pre-commit)
npm run check              # Full quality check (lint + format + tsc)
npm run fix                # Auto-fix all formatting & linting issues
npm run lint:check         # ESLint validation (zero warnings policy)
npm run format:check       # Prettier formatting validation

# 🛠️ Development Tools
npm run codegen            # Generate test code using Playwright
npm run test:debug         # Step-by-step test debugging
npm run test:headed        # Watch tests execute in browser
```

### **🔄 Pre-commit Automation (Husky)**

Every commit automatically runs:

- ✅ **ESLint** (zero warnings enforced)
- ✅ **Prettier** (consistent formatting)
- ✅ **TypeScript** compilation check
- ✅ **Staged files** formatting fix

### **🎯 Development Best Practices**

#### **Creating New Tests**

1. **Classify properly**: Use `@sanity` for critical paths, `@regression` for comprehensive coverage
2. **Follow naming**: `feature-description.spec.ts`
3. **Use fixtures**: Inject page objects via custom fixtures
4. **Include context**: Use `test.step()` for logical grouping

#### **Page Object Development**

1. **Extend BasePage**: Always inherit from `BasePage`
2. **Separate locators**: Keep selectors in dedicated locator files
3. **Use fallback strategies**: Leverage automatic locator resolution
4. **Return promises**: Async methods should return `Promise<void>`

## 🌍 Environment Setup

### **Required Configuration**

Create `.env` file in project root:

```bash
# 🌐 Application Under Test
BASE_URL=https://your-itcb-test-environment.com

# 🔧 Optional: Test Configuration
# BROWSER=chromium
# HEADLESS=true
# TIMEOUT=60000
```

### **Environment Variables**

| Variable    | Required   | Description            | Example                    |
| ----------- | ---------- | ---------------------- | -------------------------- |
| `BASE_URL`  | ✅ **Yes** | Target application URL | `https://itcb-staging.com` |
| `TEST_TAGS` | ❌ No      | Filter tests by tags   | `@sanity`, `@regression`   |
| `CI`        | ❌ No      | CI environment flag    | `true` (auto-detected)     |

### **🔒 Security Notes**

- Never commit `.env` files to version control
- Use GitHub Secrets for CI/CD environment variables
- Validate all required variables on test startup

## 🤝 Contributing

### **🚀 Getting Started**

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a feature branch: `git checkout -b feature/awesome-test`
4. **Follow** the development patterns below

### **📋 Development Guidelines**

#### **Quality Standards**

- ✅ **Zero ESLint warnings** (enforced by pre-commit hooks)
- ✅ **Consistent formatting** (Prettier auto-applied)
- ✅ **TypeScript strict mode** compliance
- ✅ **Test coverage** for new features

#### **Code Organization**

- 📁 **Locators**: `UPPER_SNAKE_CASE_LOCATORS` in separate files
- 📁 **Page Objects**: Extend `BasePage`, use descriptive class names
- 📁 **Tests**: Follow `feature-description.spec.ts` naming
- 📁 **Imports**: Always use `@/` alias for internal modules

#### **Test Development**

- 🏷️ **Tag appropriately**: `@sanity` for critical, `@regression` for comprehensive
- 📝 **Use test.step()**: Group logical actions with descriptive names
- 🎯 **Single responsibility**: One test, one specific functionality
- ⚡ **Performance**: Keep `@sanity` tests fast (<10 minutes total)

### **🔄 Contribution Workflow**

```bash
# 1. Quality check before commit
npm run check

# 2. Auto-fix any issues
npm run fix

# 3. Test your changes
npm run test:sanity

# 4. Commit with descriptive message
git commit -m "feat: add login page validation tests"

# 5. Create Pull Request
```

## 📖 Documentation

### **📚 Comprehensive Guides**

| **Document**                                      | **Purpose**                               | **Audience** |
| ------------------------------------------------- | ----------------------------------------- | ------------ |
| 🏗️ **[Architecture Guide](docs/ARCHITECTURE.md)** | Three-layer architecture, design patterns | Developers   |
| 🛠️ **[Development Guide](docs/DEVELOPMENT.md)**   | Setup, workflow, best practices           | Contributors |
| 🧪 **[Testing Strategy](docs/TESTING.md)**        | Test classification, CI/CD, execution     | QA Engineers |
| 🔧 **[Troubleshooting](docs/TROUBLESHOOTING.md)** | Common issues, debugging, solutions       | All Users    |

### **🔗 Quick Navigation**

- **New to the project?** → Start with [Development Guide](docs/DEVELOPMENT.md)
- **Understanding the code?** → Check [Architecture Guide](docs/ARCHITECTURE.md)
- **Running tests?** → See [Testing Strategy](docs/TESTING.md)
- **Having issues?** → Visit [Troubleshooting](docs/TROUBLESHOOTING.md)

### **📋 Additional Resources**

- 🌐 **[Playwright Documentation](https://playwright.dev/)**
- 📘 **[TypeScript Handbook](https://www.typescriptlang.org/docs/)**
- 🎯 **[Project Issues](https://github.com/ITCB-2/ITCB-Testing/issues)**

## 🔄 CI/CD Pipeline

### **🤖 Automated Testing Schedule**

| **Workflow**              | **Trigger**       | **Frequency**     | **Purpose**                       |
| ------------------------- | ----------------- | ----------------- | --------------------------------- |
| **🚨 Sanity Tests**       | Schedule + Manual | Every 30 minutes  | Critical functionality validation |
| **🌙 Nightly Regression** | Schedule + Manual | Daily at 2 AM UTC | Comprehensive testing             |
| **⚡ Code Quality**       | Push/PR           | On every commit   | Code standards enforcement        |

### **📊 CI/CD Features**

#### **🔧 Quality Gates**

- ✅ **Automated Code Quality**: ESLint + Prettier + TypeScript
- ✅ **Zero Warnings Policy**: Fails on any linting warnings
- ✅ **Pre-commit Hooks**: Quality checks before commits

#### **🧪 Test Execution**

- 🔄 **Cross-browser Testing**: Chrome, Firefox, Safari
- 📱 **Multiple Environments**: Support for different test environments
- 🎯 **Selective Testing**: Manual triggers with tag filtering
- 📸 **Rich Artifacts**: Screenshots, videos, and HTML reports

#### **⚡ Performance Optimizations**

- 🚀 **Parallel Execution**: Tests run concurrently for speed
- 🎯 **Smart Tagging**: Fast sanity tests vs comprehensive regression
- 🔄 **Retries on CI**: Automatic retry for flaky tests
- 📊 **Efficient Reporting**: 30-day artifact retention

### **🎛️ Manual Triggers**

All workflows support manual execution with options:

- **Test Type**: Choose sanity, regression, or full suite
- **Reason**: Document why tests are being run manually
- **Environment**: Specify target environment if needed

### **📈 Monitoring & Alerts**

- 📧 **GitHub Notifications**: Auto-notifications on failures
- 📊 **Test Reports**: Interactive HTML reports with failure details
- 🔍 **Trace Viewer**: Step-by-step execution traces for debugging

---

## 🎯 Project Stats

- **📊 Test Coverage**: Main content (sanity) + Navigation & content pages (regression)
- **🌐 Browser Support**: Chrome, Firefox, Safari (cross-platform)
- **⚡ Execution Speed**: Sanity tests ~5-10 min, Full suite ~30-45 min
- **🔧 Code Quality**: Zero warnings policy with automated formatting
- **📅 CI Frequency**: Every 30 minutes (sanity) + Nightly (regression)

## 🏆 Built With

- **🎭 [Playwright](https://playwright.dev/)** - Modern web testing framework
- **📘 [TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **🔧 [ESLint](https://eslint.org/)** - Code quality and consistency
- **✨ [Prettier](https://prettier.io/)** - Code formatting
- **🎣 [Husky](https://typicode.github.io/husky/)** - Git hooks for quality gates
- **⚡ [GitHub Actions](https://github.com/features/actions)** - CI/CD automation

---

**💙 Built with passion for quality by the ITCB Testing Team**

📫 **Questions or suggestions?** [Open an issue](https://github.com/ITCB-2/ITCB-Testing/issues) or contribute to make testing better!
