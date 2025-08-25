# Test Specifications

This directory contains all test specifications organized by functionality and tagged for efficient execution.

## 📁 Test Organization

### 🚨 **Main Content** (`main-content/`) - `@sanity`

Critical functionality tests that run every 30 minutes:

- **`main-page-validate-content.spec.ts`** - Core homepage content validation
- **`main-page-buttons.spec.ts`** - Essential button functionality
- **`sliders-main-page.spec.ts`** - Image slider functionality (all 5 slides)

**⏱️ Target Execution**: 5-10 minutes total
**🎯 Purpose**: Catch critical issues immediately

### 🔍 **Navigation** (`navigation/`) - `@regression`

Comprehensive navigation testing:

- **`main-page-top-menus.spec.ts`** - Top navigation menu validation
- **`main-page-bottom-menus.spec.ts`** - Footer navigation testing

**Coverage**: All menu categories (Why ISTQB, ISTQB Content, Testing In Israel, etc.)

### 📄 **Content Pages** (`content-pages/`) - `@regression`

Detailed page-specific functionality:

- **`important-facts.spec.ts`** - Important facts page validation
- **`community-members-sharing.spec.ts`** - Community interaction features
- **`our-certifications.spec.ts`** - Certification info and "Read More" functionality
- **`decision-makers-sharing.spec.ts`** - Decision maker content validation

## 🏷️ Test Classification

### **@sanity Tests**

```typescript
test.describe('Main Content Validation @sanity', () => {
  test('should validate core page content', async ({mainPage}) => {
    // Critical functionality test
  })
})
```

**Characteristics**:

- ⚡ Fast execution (individual tests < 2 minutes)
- 🎯 Core user journeys only
- 🚨 High priority failure alerts
- 📅 Runs every 30 minutes on CI

### **@regression Tests**

```typescript
test.describe('Navigation Menu Tests @regression', () => {
  test('should validate top menu navigation', async ({topMenuMainPage}) => {
    // Comprehensive validation
  })
})
```

**Characteristics**:

- 🔍 Comprehensive coverage
- 📊 Detailed validation scenarios
- 🌙 Nightly execution (2 AM UTC)
- 🌐 Cross-browser testing

## 🧪 Test Execution

### Local Development

```bash
# Run all tests
npm test

# Run specific categories
npm run test:sanity           # Critical tests only
npm run test:regression       # Comprehensive tests

# Run specific files
npx playwright test main-content/
npx playwright test navigation/main-page-top-menus.spec.ts

# Debug mode
npm run test:debug navigation/main-page-top-menus.spec.ts
```

### Environment Variables

```bash
# Filter by tags
TEST_TAGS='@sanity' npm test
TEST_TAGS='@regression' npm test

# Target specific environment
BASE_URL='https://staging.example.com' npm test
```

## 📊 Test Patterns

### **Page Object Injection**

All tests use injected page objects via custom fixtures:

```typescript
test('example test', async ({
  mainPage, // Injected MainPage instance
  topMenuMainPage, // Injected TopMenuMainPage instance
  importantFactsPage, // Injected ImportantFactsPage instance
}) => {
  await mainPage.navigateToPage()
  await topMenuMainPage.clickAboutMenu()
  await importantFactsPage.validateContent()
})
```

### **Test Structure**

```typescript
test.describe('Feature Group @tag', () => {
  test('should perform specific action', async ({pageObject}) => {
    // Arrange
    await pageObject.navigateToPage()

    // Act
    await pageObject.performAction()

    // Assert (handled in page object methods)
  })
})
```

## 🔧 Adding New Tests

1. **Choose appropriate directory**: Based on functionality area
2. **Select correct tag**: `@sanity` for critical, `@regression` for comprehensive
3. **Follow naming convention**: `feature-description.spec.ts`
4. **Use injected page objects**: Leverage existing fixtures
5. **Include test.step()**: For logical grouping and reporting

## 📈 Performance Guidelines

### Sanity Tests (@sanity)

- ⚡ Keep individual tests under 2 minutes
- 🎯 Focus on critical paths only
- 📊 Total execution should be 5-10 minutes
- 🚫 Avoid complex scenarios

### Regression Tests (@regression)

- 🔍 Comprehensive scenario coverage
- 📊 Total execution 30-45 minutes acceptable
- 🌐 Cross-browser compatibility testing
- 📱 Complex user interactions

## 🚀 Best Practices

- **Single Responsibility**: One test should validate one specific functionality
- **Descriptive Names**: Test names should clearly indicate what is being tested
- **Proper Tagging**: Ensure correct `@sanity` or `@regression` classification
- **Use Fixtures**: Always use injected page objects, not direct instantiation
- **Error Context**: Include meaningful error messages and context
