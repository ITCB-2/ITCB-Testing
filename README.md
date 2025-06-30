# ITCB Testing - Playwright Test Automation Framework

## Overview

This is a Playwright test automation framework built with TypeScript using the Page Object Model (POM) pattern for end-to-end testing of web applications.

## Code Quality Setup

### Pre-commit Hooks

- **ESLint**: Automatic code linting and fixing
- **Prettier**: Automatic code formatting
- **TypeScript**: Compilation check

### GitHub Actions

- **Code Quality Check**: Runs on every push/PR
- **Lint Check**: ESLint validation
- **Format Check**: Prettier validation
- **TypeScript Check**: Compilation validation

## Available Commands

```bash
# Quality checks
npm run quality-check      # Full quality check (lint + format + tsc)
npm run lint:check         # CI-friendly lint check
npm run format:check       # CI-friendly format check
npm run format:fix         # Format + fix all issues

# Testing
npm run test              # Run all Playwright tests
npm run test:smoke        # Run smoke tests only
npm run test:ci           # Run tests with GitHub reporter

# Development
npm run codegen           # Playwright code generator
npm run report            # Show test report
```

## Project Structure

```
src/
├── core/           # Base classes and utilities
├── pages/          # Page Object Model classes
├── locators/       # Centralized element locators
├── fixtures/       # Custom test fixtures and setup
├── helpers/        # Utility functions and helpers
├── data/           # Test data and constants
└── tests/          # Test specification files
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

3. Run quality check:

   ```bash
   npm run quality-check
   ```

4. Run tests:
   ```bash
   npm test
   ```
