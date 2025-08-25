# Development Guide

> 🛠️ **Complete setup and workflow guide** for contributors to the ITCB Testing Framework

## 🚀 Getting Started

### Prerequisites

- **Node.js** (LTS version) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** for version control
- **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)

### Initial Setup

```bash
# 1. Clone the repository
git clone https://github.com/ITCB-2/ITCB-Testing.git
cd ITCB-Testing

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install

# 4. Setup environment variables
echo "BASE_URL=https://www.itcb.org.il" > .env

# 5. Verify installation
npm run check
npm run test:sanity
```

### 🔧 Environment Configuration

Create `.env` file in project root:

```bash
# Required
BASE_URL=https://www.itcb.org.il

# Optional
# BROWSER=chromium
# HEADLESS=true
# TIMEOUT=60000
```

## 🔄 Daily Development Workflow

### **🔍 Quality-First Approach**

Every development session should start with quality checks:

```bash
# 1. Quality validation
npm run check              # Full quality check (lint + format + tsc)
npm run fix                # Auto-fix all formatting & linting issues

# 2. Development tools
npm run test:debug         # Step-by-step test debugging
npm run test:headed        # Watch tests execute in browser
npm run codegen            # Generate test code using Playwright
npm run report             # View test results in browser
```

### **⚡ Pre-commit Automation (Husky)**

Every commit automatically runs:

- ✅ **ESLint** (zero warnings enforced)
- ✅ **Prettier** (consistent formatting)
- ✅ **TypeScript** compilation check
- ✅ **Staged files** formatting fix

### **🎯 Development Commands Reference**

| **Command**           | **Purpose**                 | **When to Use**                         |
| --------------------- | --------------------------- | --------------------------------------- |
| `npm run check`       | Full quality validation     | Before starting work, before commits    |
| `npm run fix`         | Auto-fix formatting/linting | When quality check fails                |
| `npm run test:debug`  | Interactive test debugging  | When tests fail or need investigation   |
| `npm run test:headed` | Visual test execution       | Understanding test flow, debugging UI   |
| `npm run codegen`     | Generate test code          | Creating new tests, learning patterns   |
| `npm run report`      | View test results           | After running tests, analyzing failures |

## 📋 Naming Conventions & Standards

### **📄 Page Objects**

- **File**: `SomePage.ts` (PascalCase)
- **Class**: `export class SomePage extends BasePage`
- **Rule**: Always extend `BasePage`
- **Location**: `src/pages/category/`

### **🎯 Locators**

- **File**: `Some_Page.ts` (Snake_Case)
- **Constant**: `SOME_PAGE_LOCATORS`
- **Pattern**: `UPPER_SNAKE_CASE` with `_LOCATORS` suffix
- **Location**: `src/locators/category/`

### **🧪 Test Files**

- **File**: `some-feature.spec.ts` (kebab-case)
- **Pattern**: Always end with `.spec.ts`
- **Location**: `src/tests/category/`

### **🏷️ Test Tags**

- **@sanity**: Critical tests, ~5-10 min execution
- **@regression**: Comprehensive tests, ~30-45 min execution

## 🏗️ Creating New Components

### **Step 1: Create Locator File**

`src/locators/category/New_Page.ts`:

```typescript
export const NEW_PAGE_LOCATORS = {
  submitButton: {role: 'button', name: 'Submit'},
  formSection: {
    usernameField: {role: 'textbox', name: 'Username'},
    passwordField: {role: 'textbox', name: 'Password'},
  },
  navigationMenu: {
    homeLink: {role: 'link', name: 'Home'},
    aboutLink: {role: 'link', name: 'About'},
  },
} as const
```

### **Step 2: Create Page Object**

`src/pages/category/NewPage.ts`:

```typescript
import {BasePage} from '@/core'
import {test} from '@/fixtures'
import {NEW_PAGE_LOCATORS} from '@/locators'

export class NewPage extends BasePage {
  async navigateToPage(): Promise<void> {
    await test.step('Navigate to New Page', async () => {
      await this.gotoURL('/new-page')
      const {submitButton} = NEW_PAGE_LOCATORS
      await this.validateVisibility(submitButton)
    })
  }

  async performAction(username: string): Promise<void> {
    await test.step('Perform main action', async () => {
      const {usernameField, submitButton} = NEW_PAGE_LOCATORS.formSection
      await this.fillInput(usernameField, username)
      await this.clickOnElement(submitButton)
    })
  }
}
```

### **Step 3: Add to Fixtures**

`src/fixtures/testSetup.ts`:

```typescript
// Add to PageFixtures interface
interface PageFixtures {
  // ... existing fixtures
  newPage: NewPage
}

// Add to test extension
const test = base.extend<PageFixtures>({
  // ... existing fixtures
  newPage: async ({page}, use) => await use(new NewPage(page)),
})
```

### **Step 4: Create Test**

`src/tests/category/new-feature.spec.ts`:

```typescript
import {test} from '@/fixtures'

test.describe('New Feature Tests', () => {
  test('should perform action @sanity', async ({newPage}) => {
    await newPage.navigateToPage()
    await newPage.performAction('testuser')
  })

  test('should validate error handling @regression', async ({newPage}) => {
    await newPage.navigateToPage()
    // Test error scenarios
  })
})
```

## 🎯 Development Best Practices

### **🧪 Test Development Guidelines**

#### **Test Classification**

- 🏷️ **@sanity**: Critical functionality, fast execution (<10 min total)
- 🏷️ **@regression**: Comprehensive validation, longer execution acceptable

#### **Test Structure**

```typescript
test.describe('Feature Area Tests', () => {
  test('should validate core functionality @sanity', async ({page}) => {
    // Fast, essential test
  })

  test('should handle edge cases @regression', async ({page}) => {
    // Comprehensive validation
  })
})
```

#### **Test Organization**

- 📁 **Group related tests** in describe blocks
- 📝 **Use descriptive names** that explain business value
- 🎯 **One assertion per test** when possible for clarity
- 📊 **Include test.step()** for logical action grouping

### **📄 Page Object Best Practices**

#### **Method Design**

```typescript
export class SomePage extends BasePage {
  // ✅ Good: Descriptive, includes validation
  async navigateToUserProfile(userId: string): Promise<void> {
    await test.step('Navigate to user profile', async () => {
      await this.gotoURL(`/users/${userId}`)
      await this.validateVisibility(USER_PROFILE_LOCATORS.profileHeader)
    })
  }

  // ✅ Good: Clear business action
  async performLogin(credentials: LoginCredentials): Promise<void> {
    await test.step('Perform user login', async () => {
      const {usernameField, passwordField, submitButton} = LOGIN_LOCATORS
      await this.fillInput(usernameField, credentials.username)
      await this.fillInput(passwordField, credentials.password)
      await this.clickOnElement(submitButton)
    })
  }
}
```

#### **Error Handling**

```typescript
async performCriticalAction(): Promise<void> {
  await test.step('Perform critical action', async () => {
    try {
      await this.clickOnElement(CRITICAL_BUTTON_LOCATOR)
      await this.validateURL('/success-page')
    } catch (error) {
      throw new Error(`Critical action failed: ${error.message}`)
    }
  })
}
```

### **🔧 Code Quality Standards**

#### **Import Organization**

```typescript
// ✅ Correct import order
import {BasePage} from '@/core' // Framework imports first
import {test} from '@/fixtures' // Test utilities
import {USER_PROFILE_LOCATORS} from '@/locators' // Project imports
import {expect, type Page} from '@playwright/test' // External libraries last
```

#### **TypeScript Best Practices**

- 🔒 **Use strict types**: Avoid `any`, prefer specific interfaces
- 📝 **Document complex types**: Use JSDoc for business logic interfaces
- ⚡ **Leverage inference**: Let TypeScript infer simple types
- 🛡️ **Validate inputs**: Check parameters in public methods

### **🌍 Environment Management**

#### **Accessing Environment Variables**

```typescript
// ✅ Always use envUtils
import {getEnvCredentials} from '@/helpers'
const baseUrl = getEnvCredentials('BASE_URL')

// ❌ Never access directly
const baseUrl = process.env.BASE_URL // Don't do this
```

#### **Environment Configuration**

```typescript
// src/data/config.ts
export interface TestConfig {
  baseUrl: string
  timeout: number
  retries: number
}

export const getTestConfig = (): TestConfig => ({
  baseUrl: getEnvCredentials('BASE_URL'),
  timeout: parseInt(getEnvCredentials('TIMEOUT') || '30000'),
  retries: parseInt(getEnvCredentials('RETRIES') || '2'),
})
```

## 🔄 Contribution Workflow

### **🎯 Feature Development Process**

1. **🔍 Planning Phase**

   ```bash
   # Create feature branch
   git checkout -b feature/user-authentication-tests

   # Run quality check
   npm run check
   ```

2. **🛠️ Development Phase**

   ```bash
   # Develop with continuous validation
   npm run test:debug     # Test specific functionality
   npm run test:headed    # Visual validation
   npm run fix           # Fix any quality issues
   ```

3. **✅ Validation Phase**

   ```bash
   # Final validation before commit
   npm run check         # Full quality check
   npm run test:sanity   # Ensure core functionality intact

   # Commit (triggers pre-commit hooks automatically)
   git commit -m "feat: add user authentication validation tests"
   ```

4. **🚀 Submission Phase**
   ```bash
   # Push and create PR
   git push origin feature/user-authentication-tests
   # Create Pull Request via GitHub UI
   ```

### **🔍 Code Review Guidelines**

#### **For Authors**

- ✅ Include test execution results in PR description
- ✅ Document any new patterns or approaches used
- ✅ Ensure all quality checks pass
- ✅ Add screenshots/videos for UI test changes

#### **For Reviewers**

- 🔍 **Functionality**: Do tests accurately reflect business requirements?
- 📊 **Performance**: Are test execution times reasonable?
- 🎯 **Maintainability**: Are patterns consistent with existing codebase?
- 🔧 **Quality**: Do all quality gates pass?

## 🔗 Related Documentation

- **Architecture Details**: [ARCHITECTURE.md](ARCHITECTURE.md)
- **Testing Strategy**: [TESTING.md](TESTING.md)
- **Troubleshooting**: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **CI/CD Workflows**: [../.github/README.md](../.github/README.md)
