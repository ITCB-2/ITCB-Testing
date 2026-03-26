# Testing Guide

> 🧪 **Comprehensive testing strategy** for the ITCB Testing Framework, including test classification, execution, and CI/CD integration.

## 🏷️ Test Classification & Tagging System

All tests use Playwright's tagging system to enable efficient execution based on different scenarios and CI requirements.

### **Test Tags Overview**

| **Tag**      | **Purpose**                          | **Execution Time** | **CI Schedule**   | **Coverage**       |
| ------------ | ------------------------------------ | ------------------ | ----------------- | ------------------ |
| **@sanity**  | Critical functionality validation    | ~5-10 minutes      | Every 2 hours     | Core features only |
| **@nightly** | Comprehensive application validation | ~30-45 minutes     | Daily at 2 AM UTC | Full feature set   |

### **@sanity Tests** - Critical Path Validation

**Purpose**: Fast feedback on core functionality

- ⏱️ **Execution Time**: 5-10 minutes maximum
- 🎯 **Coverage Focus**: Essential user journeys
- 📅 **CI Schedule**: Every 2 hours
- 🚨 **Failure Impact**: Immediate attention required

**Current @sanity Coverage**:

- Main page core functionality validation
- Content verification and display
- Slider functionality across all 5 slides
- Critical navigation paths

**Example @sanity Test**:

```typescript
test('should validate main page content @sanity', async ({mainPage}) => {
	await mainPage.navigateToPage()
	await mainPage.validateMainContent()
	await mainPage.validateSlidersDisplay()
})
```

### **@nightly Tests** - Comprehensive Validation

**Purpose**: Thorough application validation

- ⏱️ **Execution Time**: 30-45 minutes
- 🎯 **Coverage Focus**: All features and edge cases
- 📅 **CI Schedule**: Nightly at 2 AM UTC
- 🔍 **Failure Impact**: Investigation during business hours

**Current @nightly Coverage**:

- **Navigation Tests**: Top menu & bottom menu navigation and content verification
- **Content Pages**: Important Facts, Community Members Sharing, Our Certifications, Decision Makers Sharing
- **Menu Categories**: Why ISTQB, ISTQB Content, Testing In Israel, Additional Information, About ITCB
- **Interactive Features**: Read More functionality, dynamic content loading

## 🚀 Test Execution Commands

### **Local vs CI**

- **Local**: All commands below run **without Docker**—Playwright runs directly on your machine. Use `npm test`, `npm run test:sanity`, etc.
- **CI**: Tests run **only inside Docker**. The pipeline runs `docker compose build` then `docker compose run --rm test-runner npm run test:sanity` (or `npm run test:nightly`). Same npm scripts; execution is in a container.

### **Core Testing Commands**

```bash
# 🎯 Primary Test Execution
npm test                       # Run all tests (full suite)
npm run test:sanity           # Critical functionality only (⚡ fast)
npm run test:nightly       # Comprehensive validation

# 🔍 Development & Debugging
npm run test:debug            # Interactive debugging mode
npm run codegen              # Auto-generate test code
npm run report               # Open interactive HTML report
```

### **Test Execution Strategy**

| **Command**            | **Use Case**                      | **Duration** | **Best For**        |
| ---------------------- | --------------------------------- | ------------ | ------------------- |
| `npm test`             | Full validation before deployment | 30-45 min    | Release preparation |
| `npm run test:sanity`  | Quick feedback during development | 5-10 min     | Active development  |
| `npm run test:nightly` | Comprehensive feature validation  | 30-45 min    | Feature completion  |
| `npm run test:debug`   | Investigation and troubleshooting | Variable     | Debugging failures  |

### **Advanced Execution Options**

#### **Browser-Specific Testing**

```bash
# Single-browser execution (use Playwright CLI directly)
npx playwright test --project=chromium  # Chromium only
npx playwright test --project=firefox   # Firefox only
npx playwright test --project=webkit    # WebKit
```

#### **Environment-Specific Testing**

```bash
# Different environments (if configured)
BASE_URL=https://staging.itcb.org.il npm test
BASE_URL=https://dev.itcb.org.il npm run test:sanity
```

#### **Custom Test Filtering**

```bash
# Run specific test files
npx playwright test src/tests/main-content/
npx playwright test src/tests/navigation/main-page-top-menus.spec.ts

# Run tests with custom grep pattern
npx playwright test --grep "slider"
npx playwright test --grep "@sanity"
```

## 🎯 Test Organization by Functionality

### **Directory Structure & Coverage**

```
src/tests/
├── 📂 main-content/          # @sanity tests
│   ├── main-page-validate-content.spec.ts
│   ├── main-page-buttons.spec.ts
│   └── sliders-main-page.spec.ts
├── 📂 navigation/            # @nightly tests
│   ├── main-page-top-menus.spec.ts
│   └── main-page-bottom-menus.spec.ts
└── 📂 content-pages/         # @nightly tests
    ├── important-facts.spec.ts
    ├── community-members-sharing.spec.ts
    ├── our-certifications.spec.ts
    └── decision-makers-sharing.spec.ts
```

### **Test Coverage Matrix**

| **Category**      | **Files**                 | **Tag**    | **Coverage**                     | **Execution Time** |
| ----------------- | ------------------------- | ---------- | -------------------------------- | ------------------ |
| **Main Content**  | `main-content/*.spec.ts`  | `@sanity`  | Homepage, sliders, core content  | ~3-5 min           |
| **Navigation**    | `navigation/*.spec.ts`    | `@nightly` | Top/bottom menus, routing        | ~10-15 min         |
| **Content Pages** | `content-pages/*.spec.ts` | `@nightly` | Certifications, community, facts | ~15-25 min         |

### **Detailed Test Breakdown**

#### **@sanity Tests (Main Content)**

- **main-page-validate-content.spec.ts**: Core page content validation
- **main-page-buttons.spec.ts**: Essential button functionality
- **sliders-main-page.spec.ts**: All 5 slider components validation

#### **@nightly Tests (Navigation)**

- **Top Menu Categories**:
  - Why ISTQB (Decision makers sharing, Community sharing, Certifications)
  - ISTQB Content (Syllabus, Terms glossary, Certified testers list)
  - Testing In Israel (Useful links, Magazine, Podcasts, Events, Tips)
  - Additional Information (Important facts, International conferences)
  - About ITCB (About us, Our partners, Contact us, Q&A)
- **Bottom Menu**: Mirror navigation with footer-specific elements

#### **@nightly Tests (Content Pages)**

- **Important Facts**: Content validation and navigation
- **Community Members Sharing**: User testimonials and content
- **Our Certifications**: Certification details and "Read More" functionality
- **Decision Makers Sharing**: Leadership testimonials and content

## 🤖 CI/CD Integration & Automation

### **Automated Testing Schedule**

| **Workflow**           | **Trigger**       | **Frequency**     | **Tests Executed**   | **Purpose**                       |
| ---------------------- | ----------------- | ----------------- | -------------------- | --------------------------------- |
| **🚨 Sanity Tests**    | Schedule + Manual | Every 2 hours     | `@sanity` only       | Critical functionality monitoring |
| **🌙 Nightly nightly** | Schedule + Manual | Daily at 2 AM UTC | Full test suite      | Comprehensive validation          |
| **⚡ Code Quality**    | Push/PR           | On every commit   | Code validation only | Quality gate enforcement          |

### **CI/CD Pipeline Features**

#### **🔧 Quality Gates**

- ✅ **Automated Code Quality**: TypeScript validation in CI
- ✅ **Pre-commit Hooks**: Local quality checks before commits

#### **🧪 Test Execution Optimization**

- 🔄 **Cross-browser Testing**: Chrome, Firefox, Safari (parallel execution)
- 📱 **Multiple Environments**: Support for staging, production, development
- 🎯 **Selective Testing**: Tag-based filtering (`@sanity` vs `@nightly`)
- 📸 **Rich Artifacts**: Screenshots, videos, HTML reports, trace files

#### **⚡ Performance Features**

- 🚀 **Parallel Execution**: Tests run concurrently across browsers
- 🎯 **Smart Scheduling**: Frequent sanity tests, comprehensive nightly runs
- 🔄 **Automatic Retries**: CI retries flaky tests automatically
- 📊 **Efficient Reporting**: 2-day artifact retention with detailed traces

### **Manual Test Triggers**

All CI workflows support manual execution with customizable parameters:

```yaml
# Example: Manual workflow trigger options
workflow_dispatch:
  inputs:
    test_type:
      description: 'Type of tests to run'
      required: true
      default: 'sanity'
      type: choice
      options: ['sanity', 'nightly', 'all']
    reason:
      description: 'Reason for manual execution'
      required: false
      default: 'Manual test validation'
    browser:
      description: 'Browser selection'
      required: false
      default: 'all'
      type: choice
      options: ['all', 'chrome', 'firefox', 'safari']
```

### **Monitoring & Alerts**

#### **Failure Notifications**

- 📧 **GitHub Notifications**: Automatic notifications on workflow failures
- 🔍 **Detailed Reports**: HTML reports with failure screenshots and traces
- 📊 **Trend Analysis**: Test execution trends and success rates

#### **Artifact Management**

| **Artifact Type**   | **Retention Period** | **Contents**                      |
| ------------------- | -------------------- | --------------------------------- |
| **Test Reports**    | 30 days              | HTML reports, screenshots, videos |
| **Trace Files**     | 30 days              | Playwright execution traces       |
| **Quality Results** | 7 days               | Linting results, compilation logs |

## 🛠️ Test Development & Maintenance

### **Adding New Tests**

#### **Classification Guidelines**

1. **@sanity**: Critical functionality that MUST work for basic system operation
   - Maximum 15-20 minutes total execution time
   - Core user journeys only
   - High-value, high-frequency functionality

2. **@nightly**: Comprehensive validation for feature completeness
   - Can take longer execution time
   - Edge cases and error scenarios
   - Complete feature coverage

#### **Development Process**

```typescript
// 1. Classify appropriately
test.describe('Feature Tests', () => {
	test('should validate core functionality @sanity', async ({page}) => {
		// Critical path only
	})

	test('should handle edge cases @nightly', async ({page}) => {
		// Comprehensive validation
	})
})

// 2. Use consistent patterns
test('should perform user action @sanity', async ({somePage}) => {
	await somePage.navigateToPage()
	await somePage.performCriticalAction()
	await somePage.validateExpectedOutcome()
})
```

### **Quality Standards**

#### **Test Structure**

- 📝 **Descriptive names** that reflect business value
- 🎯 **Single responsibility** per test
- 📊 **Proper assertions** with clear expected outcomes
- 🔄 **test.step()** for logical action grouping

#### **Performance Guidelines**

- ⚡ **Sanity tests**: Keep individual tests under 2-3 minutes
- 🔍 **nightly tests**: Focus on thoroughness over speed
- 🎯 **Targeted execution**: Use specific test files for focused testing
- 📈 **Monitor trends**: Track execution times and optimize slow tests

## 📊 Debugging & Troubleshooting

### **Development Tools**

#### **Interactive Debugging**

```bash
npm run test:debug          # Playwright Inspector
npm run codegen            # Generate test code
```

#### **Execution Analysis**

```bash
npm run report              # HTML test report
npx playwright show-trace   # Detailed execution traces
npx playwright test --list  # List all tests by tag
```

### **Common Debugging Scenarios**

#### **Test Failures**

1. **Check Screenshots**: Available in test reports
2. **Review Traces**: Step-by-step execution details
3. **Run in Headed Mode**: Visual debugging
4. **Use Debug Mode**: Interactive investigation

#### **Performance Issues**

1. **Profile Test Duration**: Use built-in reporting
2. **Optimize Locators**: Review fallback strategies
3. **Reduce Scope**: Focus sanity tests on critical paths
4. **Parallel Execution**: Verify browser distribution

## 🔗 Related Documentation

- **Architecture Details**: [ARCHITECTURE.md](ARCHITECTURE.md)
- **Development Workflow**: [DEVELOPMENT.md](DEVELOPMENT.md)
- **CI/CD Configuration**: [../.github/WORKFLOWS.md](../.github/WORKFLOWS.md)
- **Troubleshooting Guide**: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

---

**🎯 Testing Philosophy**: Fast feedback through smart classification, comprehensive coverage through automated schedules, and reliable execution through quality engineering practices.
