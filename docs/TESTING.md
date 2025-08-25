# Testing Guide

## Test Classification & Tagging System

All tests in this project are now classified using Playwright's tagging system to enable efficient test execution based on different scenarios and CI requirements.

### Test Tags

- **@sanity**: Critical tests that verify core functionality and catch major issues
- **@regression**: Comprehensive tests for thorough validation

### Current Test Coverage

Tests are now classified across two categories:

**@sanity tests** (Main Content only):

- Main page core functionality validation
- Content verification
- Slider functionality across all 5 slides

**@regression tests** (Navigation & Content Pages):

- Top menu navigation and content verification
- Bottom menu navigation and content verification
- All menu categories: Why ISTQB, ISTQB Content, Testing In Israel, Additional Information, About ITCB
- Important Facts page validation
- Community Members Sharing functionality
- Our Certifications page and Read More functionality
- Decision Makers Sharing content validation

#### Main Content Tests (@sanity)

- Main page core functionality validation
- Content verification
- Slider functionality across all 5 slides

#### Navigation Tests (@regression)

- Top menu navigation and content verification
- Bottom menu navigation and content verification
- All menu categories: Why ISTQB, ISTQB Content, Testing In Israel, Additional Information, About ITCB

#### Content Pages Tests (@regression)

- Important Facts page validation
- Community Members Sharing functionality
- Our Certifications page and Read More functionality
- Decision Makers Sharing content validation

## Available Test Commands

### Local Development

```bash
# Run all tests
npm test

# Run only sanity tests (recommended for quick validation)
npm run test:sanity

# Run sanity tests in Chrome only (faster)
npm run test:sanity:chrome

# Run regression tests
npm run test:regression

# Debug mode
npm run test:debug

# Headed mode (see browser)
npm run test:headed

# Generate test report
npm run report
```

### Environment Variables for Test Filtering

```bash
# Run specific tagged tests
TEST_TAGS='@sanity' npx playwright test
TEST_TAGS='@regression' npx playwright test

# List tests that would run with specific tags
TEST_TAGS='@sanity' npx playwright test --list
```

## CI/CD Integration

### Automated Scheduling

- **Sanity Tests**: Run every 30 minutes automatically
- **Nightly Regression Tests**: Run every day at 2 AM UTC
- **Code Quality**: Triggered on push/PR

### Triggered Executions

- **Push to main/master**: Full test suite
- **Pull requests**: Full test suite
- **Code quality workflow completion**: Full test suite
- **Manual trigger**: Choose test type (sanity, regression, all)

### CI Jobs Structure

#### Sanity Tests Job

- **Runs on**: Every 30 minutes, manual trigger with 'sanity' type
- **Timeout**: 60 minutes
- **Environment**: `TEST_TAGS: '@sanity'`
- **Command**: `npm run test:sanity`

#### Nightly Regression Tests Job

- **Runs on**: Nightly at 2 AM UTC, manual trigger with 'regression'/'all'
- **Timeout**: 120 minutes
- **Command**: `npx playwright test`

### Artifacts

- Test reports are uploaded with 30-day retention
- Separate reports for each job type: `sanity-playwright-report`, `nightly-regression-playwright-report`
- Code quality artifacts available for 7 days

## Test Structure

### File Organization

```
src/tests/
├── main-content/           # Core page functionality
│   ├── main-page-buttons.spec.ts
│   ├── main-page-validate-content.spec.ts
│   └── sliders-main-page.spec.ts
├── navigation/             # Menu and navigation tests
│   ├── main-page-top-menus.spec.ts
│   └── main-page-bottom-menus.spec.ts
└── content-pages/          # Specific page functionality
    ├── important-facts.spec.ts
    ├── community-members-sharing.spec.ts
    ├── our-certifications.spec.ts
    └── decision-makers-sharing.spec.ts
```

### Tagging Implementation

- **Test Suites**: Add `@sanity` to `test.describe()`
- **Individual Tests**: Add `@sanity` to `test()` calls
- **Consistent Pattern**: Both suite and individual test tags for maximum flexibility

## Best Practices

### Adding New Tests

1. **Classify appropriately**: Choose the right tag based on test criticality
2. **Sanity tests**: Core functionality that must work for basic system operation
3. **Regression tests**: Comprehensive validation for major releases

### Tag Usage Guidelines

- **@sanity**: Maximum 15-20 minutes execution time total
- **@regression**: Can be longer, comprehensive validation

### CI Optimization

- Sanity tests run every 30 minutes to catch critical issues early
- Nightly regression tests provide comprehensive validation
- Manual triggers allow targeted testing when needed
- Code quality checks ensure consistent standards

## Monitoring & Reporting

### Test Results

- View reports via GitHub Actions artifacts
- Local reports: `npm run report`
- Check test execution times and failure patterns

### Maintenance

- Review sanity test execution times monthly
- Ensure sanity tests remain fast and focused on critical paths
- Update tags as test suite evolves

---

This testing strategy ensures reliable CI/CD pipelines while maintaining fast feedback loops for developers and automated quality assurance.
