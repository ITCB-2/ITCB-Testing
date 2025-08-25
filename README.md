# ITCB Testing Framework

> 🎯 **End-to-End Test Automation** for the Israel Testing Certification Board (| 🔧 **[Troubleshooting](docs/TROUBLESHOOTING.md)** | Common issues and solutions | All Users |
> | ⚙️ **[CI/CD Workflows](.github/README.md)** | Automated testing pipeline | DevOps |

📖 **[Complete Documentation Index](docs/DOCUMENTATION_INDEX.md)**

## 🏆 Built Withwebsite using **Playwright + TypeScript**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.49.1-green.svg)](https://playwright.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-brightgreen.svg)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](LICENSE)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-blue.svg)](https://github.com/ITCB-2/ITCB-Testing/actions)

## ✨ Key Features

- **Page Object Model (POM)** with TypeScript and dependency injection
- **Automatic Fallback Locators** with intelligent element resolution
- **Quality-First Development** with pre-commit hooks and zero-warning policy
- **Smart Test Classification** using `@sanity` and `@regression` tags
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

→ **Check**: [GitHub Workflows](.github/README.md)

- Automated testing schedules
- Workflow configuration
- Artifact management

### **❓ Having Issues?**

→ **Visit**: [Troubleshooting Guide](docs/TROUBLESHOOTING.md)

- Common problems and solutions
- Debugging strategies
- Performance tips

## � Documentation

| **Document**                                      | **Purpose**                 | **Audience** |
| ------------------------------------------------- | --------------------------- | ------------ |
| 🏗️ **[Architecture](docs/ARCHITECTURE.md)**       | Technical design patterns   | Developers   |
| 🛠️ **[Development](docs/DEVELOPMENT.md)**         | Setup and workflow guide    | Contributors |
| 🧪 **[Testing](docs/TESTING.md)**                 | Test strategy and execution | QA Engineers |
| 🔧 **[Troubleshooting](docs/TROUBLESHOOTING.md)** | Common issues and solutions | All Users    |
| ⚙️ **[CI/CD Workflows](.github/README.md)**       | Automated testing pipeline  | DevOps       |

� **[Complete Documentation Index](docs/README.md)**

## 🏆 Built With

- **🎭 [Playwright](https://playwright.dev/)** - Modern web testing framework
- **📘 [TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **🔧 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)** - Code quality and formatting
- **🎣 [Husky](https://typicode.github.io/husky/)** - Git hooks for quality gates
- **⚡ [GitHub Actions](https://github.com/features/actions)** - CI/CD automation

---

**💙 Built with passion for quality by the ITCB Testing Team**

📫 **Questions or suggestions?** [Open an issue](https://github.com/ITCB-2/ITCB-Testing/issues) or contribute to make testing better!
