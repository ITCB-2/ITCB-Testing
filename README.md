# ITCB Testing Framework

> 🎯 **End-to-End Test Automation** for the Israel Testing Certification Board (ITCB) website using **Playwright + TypeScript**

📖 **[Complete Documentation Index](docs/DOCUMENTATION_INDEX.md)**

## 🏆 Built With

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.49.1-green.svg)](https://playwright.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-brightgreen.svg)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](LICENSE)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-blue.svg)](https://github.com/ITCB-2/ITCB-Testing/actions)

## ✨ Key Features

- **Page Object Model (POM)** with TypeScript and dependency injection
- **Automatic Fallback Locators** with intelligent element resolution
- **Quality-First Development** with pre-commit hooks and zero-warning policy
- **Smart Test Classification** using `@sanity` and `@nightly` tags
- **Intelligent Retry Logic** - Critical tests get automatic retries in CI
- **Automated CI/CD Pipeline** with scheduled testing and rich reporting

## 🚀 Quick Start

### Prerequisites

- **Node.js** (LTS version)
- **npm** (comes with Node.js)
- **Git** for version control

### Installation

```bash
# Clone and setup
git clone https://github.com/ITCB-2/ITCB-Testing.git
cd ITCB-Testing
npm install
npx playwright install

# Environment setup (required)
echo "BASE_URL=https://www.itcb.org.il" > .env

# Verify installation
npm run test:sanity
```

### Essential Commands

```bash
# Quality & Development
npm run check        # Code quality validation
npm run fix          # Auto-fix formatting/linting
npm run codegen      # Generate test code

# Testing
npm test            # Run all tests
npm run test:sanity # Fast critical tests (~5 min)
npm run test:debug  # Interactive debugging
npm run report      # View test results
```

## Running Tests: Local vs CI

### Local (no Docker)

Tests run directly on your machine with Playwright. No Docker required.

```bash
npm test              # Run all tests
npm run test:sanity   # Fast critical tests (~5 min)
npm run test:nightly  # Full suite
npm run test:headed   # With browser UI
npm run test:debug    # Debug mode
npm run report        # View HTML report
```

Install browsers once: `npx playwright install`

### CI only (Docker)

In GitHub Actions, tests run **only inside Docker**:

1. **Build**: `docker compose build`
2. **Run**: `docker compose run --rm test-runner npm run test:sanity` (or `npm run test:nightly`)

Same npm scripts as local; execution is in a container. No Docker is used when you run `npm test` locally.

## 🔄 Smart Retry Configuration

Our CI environment includes intelligent retry logic that automatically provides additional attempts for critical test failures:

### **Retry Behavior**

| **Environment**       | **Test Type**    | **Retries** | **Use Case**                      |
| --------------------- | ---------------- | ----------- | --------------------------------- |
| **Local Development** | All tests        | 0           | Immediate feedback                |
| **CI Environment**    | General tests    | 0           | Fast failure detection            |
| **CI Environment**    | `@sanity` tests  | 2           | Critical functionality protection |
| **CI Environment**    | `@nightly` tests | 2           | Stability assurance               |

### **Automatic Detection**

The retry system automatically detects:

- ✅ CI environment (`process.env.CI`)
- ✅ Test categories via tags (`@sanity`, `@nightly`)
- ✅ Targeted test commands (`npm run test:sanity`, `npm run test:nightly`)

> 📋 **Details**: See [Retry Configuration Guide](docs/RETRY_CONFIGURATION.md) for complete implementation details.

## 🎯 For Different Users

### **🆕 New Developer**

→ **Start here**: [Development Guide](docs/DEVELOPMENT.md)

- Complete setup instructions
- Development workflow
- Code patterns and conventions

### **🏗️ Understanding Architecture**

→ **Read**: [Architecture Guide](docs/ARCHITECTURE.md)

- Three-layer design patterns
- Dependency injection system
- Locator strategies

### **🧪 QA Engineer / Tester**

→ **See**: [Testing Guide](docs/TESTING.md)

- Test classification system
- Execution strategies
- CI/CD pipeline details

### **🔧 DevOps / CI Maintainer**

→ **Check**: [GitHub Workflows](.github/WORKFLOWS.md) | [Retry Configuration](docs/RETRY_CONFIGURATION.md)

- Automated testing schedules
- Intelligent retry logic for critical tests
- Workflow configuration
- Artifact management

### **❓ Having Issues?**

→ **Visit**: [Troubleshooting Guide](docs/TROUBLESHOOTING.md)

- Common problems and solutions
- Debugging strategies
- Performance tips

## 📚 Documentation

| **Document**                                              | **Purpose**                 | **Audience** |
| --------------------------------------------------------- | --------------------------- | ------------ |
| 🏗️ **[Architecture](docs/ARCHITECTURE.md)**               | Technical design patterns   | Developers   |
| 🛠️ **[Development](docs/DEVELOPMENT.md)**                 | Setup and workflow guide    | Contributors |
| 🧪 **[Testing](docs/TESTING.md)**                         | Test strategy and execution | QA Engineers |
| 🔄 **[Retry Configuration](docs/RETRY_CONFIGURATION.md)** | CI retry behavior and setup | DevOps/QA    |
| 🔧 **[Troubleshooting](docs/TROUBLESHOOTING.md)**         | Common issues and solutions | All Users    |
| ⚙️ **[CI/CD Workflows](.github/WORKFLOWS.md)**            | Automated testing pipeline  | DevOps       |

📖 **[Complete Documentation Index](docs/DOCUMENTATION_INDEX.md)**

## 🏆 Built With

- **🎭 [Playwright](https://playwright.dev/)** - Modern web testing framework
- **📘 [TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **🔧 [Biome](https://biomejs.dev/)** - Code quality and formatting
- **🎣 [Husky](https://typicode.github.io/husky/)** - Git hooks for quality gates
- **⚡ [GitHub Actions](https://github.com/features/actions)** - CI/CD automation

---

**💙 Built with passion for quality by the ITCB Testing Team**

📫 **Questions or suggestions?** [Open an issue](https://github.com/ITCB-2/ITCB-Testing/issues) or contribute to make testing better!
