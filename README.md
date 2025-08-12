# ITCB Testing Project - Playwright Test Automation Framework

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

## Automated Code Quality

This project automatically fixes code quality issues:

- **Pre-commit**: Auto-fixes formatting and linting before each commit
- **Pre-push**: Final validation and fixes before pushing to remote

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

## Self-Hosted Runners on Hetzner Cloud

This project supports running Playwright tests on cost-effective Hetzner Cloud infrastructure using self-hosted GitHub Actions runners.

### Why Hetzner Cloud?

- **💰 Cost Savings**: Up to 67% cheaper than GitHub-hosted runners
- **🚀 Performance**: Dedicated resources with faster execution
- **🌍 EU-Based**: GDPR-compliant infrastructure in Germany
- **⚡ Scalable**: On-demand server creation and automatic cleanup

### Quick Setup

The setup is surprisingly simple - just add this to your workflow:

```yaml
- name: Self-Hosted GitHub Actions Runner on Hetzner Cloud
  uses: Cyclenerd/hcloud-github-runner@v1.2.0
  with:
    github_token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
    hcloud_token: ${{ secrets.HCLOUD_TOKEN }}
```

### Prerequisites

1. **GitHub Personal Access Token** with Administration permissions
2. **Hetzner Cloud API Token** with read/write access
3. Add both as repository secrets

### Available Workflows

- **`playwright-hetzner.yml`**: Full Playwright test suite on Hetzner Cloud
- **`test-hetzner-runner.yml`**: Verification workflow to test the setup

### Documentation

For detailed setup instructions, troubleshooting, and cost analysis, see:
📖 **[Hetzner Cloud Setup Guide](docs/hetzner-runners-setup.md)**

### Cost Comparison

| Runner Type   | CPU/RAM     | Cost/minute | Use Case         |
| ------------- | ----------- | ----------- | ---------------- |
| GitHub-hosted | 2 CPU, 7GB  | ~$0.008     | Standard CI/CD   |
| Hetzner CPX11 | 2 CPU, 4GB  | ~$0.0013    | Light testing    |
| Hetzner CPX21 | 3 CPU, 8GB  | ~$0.0026    | Playwright tests |
| Hetzner CPX31 | 4 CPU, 16GB | ~$0.0040    | Heavy workloads  |
