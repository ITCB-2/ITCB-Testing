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
npm run codegen           # Generate test code using Playwright
npm run report            # View test results in browser
```

### **⚡ Pre-commit Automation (Husky)**

Every commit automatically runs:

- ✅ **Biome.js** (zero warnings enforced)
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
- **Class**: `export class SomePage` with `protected page: Page`; use Playwright APIs directly
- **Rule**: No shared base class; use `page.goto()`, `page.getByRole()`, `expect(...).toBeVisible()`, etc.
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
- **@nightly**: Comprehensive tests, ~30-45 min execution

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
import {test} from '@playwright/test'
import {expect, type Page} from '@playwright/test'
import {BASE_URL} from '../../data/urls'
import {NEW_PAGE_LOCATORS} from '../../locators/category/New_Page'

export class NewPage {
	protected page: Page
	constructor(page: Page) {
		this.page = page
	}

	async navigateToPage(): Promise<void> {
		await test.step('Navigate to New Page', async () => {
			await this.page.goto(`${BASE_URL}/new-page`)
			const {submitButton} = NEW_PAGE_LOCATORS
			await expect(
				this.page.getByRole(submitButton.role, {name: submitButton.name}),
			).toBeVisible()
		})
	}

	async performAction(username: string): Promise<void> {
		await test.step('Perform main action', async () => {
			const {usernameField, submitButton} = NEW_PAGE_LOCATORS.formSection
			await this.page
				.getByRole(usernameField.role, {name: usernameField.name})
				.fill(username)
			await this.page
				.getByRole(submitButton.role, {name: submitButton.name})
				.click()
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

	test('should validate error handling @nightly', async ({newPage}) => {
		await newPage.navigateToPage()
		// Test error scenarios
	})
})
```

## 🎯 Development Best Practices

### **🧪 Test Development Guidelines**

#### **Test Classification**

- 🏷️ **@sanity**: Critical functionality, fast execution (<10 min total)
- 🏷️ **@nightly**: Comprehensive validation, longer execution acceptable

#### **Test Structure**

```typescript
test.describe('Feature Area Tests', () => {
	test('should validate core functionality @sanity', async ({page}) => {
		// Fast, essential test
	})

	test('should handle edge cases @nightly', async ({page}) => {
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
export class SomePage {
	protected page: Page
	constructor(page: Page) {
		this.page = page
	}

	// ✅ Good: Descriptive, includes validation
	async navigateToUserProfile(userId: string): Promise<void> {
		await test.step('Navigate to user profile', async () => {
			await this.page.goto(`${BASE_URL}/users/${userId}`)
			const {profileHeader} = USER_PROFILE_LOCATORS
			await expect(
				this.page.getByRole(profileHeader.role, {name: profileHeader.name}),
			).toBeVisible()
		})
	}

	// ✅ Good: Clear business action
	async performLogin(credentials: LoginCredentials): Promise<void> {
		await test.step('Perform user login', async () => {
			const {usernameField, passwordField, submitButton} = LOGIN_LOCATORS
			await this.page
				.getByRole(usernameField.role, {name: usernameField.name})
				.fill(credentials.username)
			await this.page
				.getByRole(passwordField.role, {name: passwordField.name})
				.fill(credentials.password)
			await this.page
				.getByRole(submitButton.role, {name: submitButton.name})
				.click()
		})
	}
}
```

#### **Error Handling**

```typescript
async performCriticalAction(): Promise<void> {
  await test.step('Perform critical action', async () => {
    try {
      await this.page
        .getByRole(CRITICAL_BUTTON_LOCATOR.role, {
          name: CRITICAL_BUTTON_LOCATOR.name,
        })
        .click()
      await expect(this.page).toHaveURL(URLS.successPage)
    } catch (error) {
      throw new Error(`Critical action failed: ${error.message}`)
    }
  })
}
```

### **🔧 Code Quality Standards**

#### **Biome.js Best Practices**

- 🔒 **Zero warnings policy**: All Biome.js rules must pass
- 📝 **Consistent formatting**: Automatic formatting with Biome.js
- ⚡ **Fast execution**: Combined linting and formatting in one tool
- 🛡️ **TypeScript integration**: Built-in TypeScript support

### **🌍 Environment Management**

#### **URLs and Configuration**

```typescript
// ✅ Use centralized URLs from src/data/urls.ts
import {BASE_URL, URLS} from '../../data/urls'
await this.page.goto(BASE_URL)
await this.page.goto(URLS.aboutUs)

// ❌ Don't read process.env directly in tests/pages
const baseUrl = process.env.BASE_URL // Avoid; use src/data/urls.ts
```

#### **Environment Configuration**

- Define `BASE_URL` and `URLS` in `src/data/urls.ts`.
- For local overrides, use `.env` and load in config if needed; keep URLs in `src/data/urls.ts` as the source of truth for tests.

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

## 🔒 Repository Secrets Configuration

### **Required Repository Secrets**

For GitHub Actions workflows to function properly, configure these repository-level secrets:

1. **`BASE_URL`** - Target application URL for testing

   - Go to: Repository Settings → Secrets and variables → Actions
   - Add new repository secret: `BASE_URL=https://www.itcb.org.il`
   - Used by: Sanity tests, Nightly nightly tests

2. **`SLACK_WEBHOOK_URL`** (Optional) - For Slack notifications
   - Add repository secret with your Slack webhook URL
   - Used by: Slack notification workflows

### **Important Notes**

- ✅ **Use repository-level secrets only** (not organization-level)
- ✅ **Never commit secrets** to version control
- ✅ **Use `.env` file** for local development
- ❌ **Avoid organization secrets** for this project

## 🔗 Related Documentation

- **Architecture Details**: [ARCHITECTURE.md](ARCHITECTURE.md)
- **Testing Strategy**: [TESTING.md](TESTING.md)
- **Troubleshooting**: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **CI/CD Workflows**: [../.github/WORKFLOWS.md](../.github/WORKFLOWS.md)
