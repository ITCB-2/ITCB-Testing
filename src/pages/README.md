# Page Objects

This directory contains the Page Object Model (POM) implementation organized by functionality areas. All page objects extend `BasePage` and use dependency injection for clean, maintainable test code.

## 📁 Directory Structure

### 🏠 **Main Content** (`main-content/`)

Core homepage functionality:

- **`MainPage.ts`** - Homepage navigation and content validation
- **`SlidersMainPage.ts`** - Image slider interactions and validation

### 🧭 **Navigation** (`navigation/`)

Menu and navigation components:

- **`TopMenuMainPage.ts`** - Top navigation menu interactions
- **`BottomMenuMainPage.ts`** - Footer navigation and links

### 📄 **Content Pages** (`content-pages/`)

Specific page implementations:

- **`ImportantFactsPage.ts`** - Important facts page interactions
- **`OurCertificationPage.ts`** - Certification information page
- **`CommunityMembersSharingPage.ts`** - Community features
- **`DecisionMakerPage.ts`** - Decision maker content page

## 🏗️ Architecture Pattern

### **Base Class Inheritance**

All page objects extend `BasePage` which provides:

```typescript
export class SomePage extends BasePage {
  async navigateToPage(): Promise<void> {
    await test.step('Navigate to Some Page', async () => {
      // Navigation logic with validation
    })
  }

  async performAction(): Promise<void> {
    await test.step('Perform specific action', async () => {
      // Action implementation
    })
  }
}
```

### **Automatic Dependency Injection**

Page objects are automatically injected via `testSetup.ts` fixtures:

```typescript
// ✅ In tests - page objects are injected
test('example', async ({mainPage, topMenuMainPage}) => {
  await mainPage.navigateToPage()
  await topMenuMainPage.clickMenu('About')
})

// ❌ Avoid manual instantiation
test('example', async ({page}) => {
  const mainPage = new MainPage(page) // Don't do this
})
```

## 🎯 Locator Integration

Page objects import locators from separate files for maintainability:

```typescript
import {MAIN_PAGE_LOCATORS} from '@/locators'

export class MainPage extends BasePage {
  async clickSubmitButton(): Promise<void> {
    const {submitButton} = MAIN_PAGE_LOCATORS.formSection
    await this.clickOnElement(submitButton)
  }
}
```

**Benefits**:

- 🔧 **Separation of concerns**: Logic vs selectors
- 🔄 **Easy maintenance**: Update selectors without touching page logic
- 🎯 **Reusability**: Locators can be shared across multiple page objects

## 🛠️ Common Methods Pattern

### **Navigation Methods**

```typescript
async navigateToPage(): Promise<void> {
  await test.step('Navigate to Page Name', async () => {
    await this.page.goto(TARGET_URL)
    await this.validateVisibility(PAGE_IDENTIFIER_LOCATOR)
  })
}
```

### **Action Methods**

```typescript
async performSpecificAction(): Promise<void> {
  await test.step('Perform Specific Action', async () => {
    await this.clickOnElement(ACTION_BUTTON_LOCATOR)
    await this.validateAction() // Include validation
  })
}
```

### **Validation Methods**

```typescript
async validatePageContent(): Promise<void> {
  await test.step('Validate Page Content', async () => {
    await this.validateVisibility(REQUIRED_ELEMENT_LOCATOR)
    await this.validateTextContent(TEXT_ELEMENT_LOCATOR, expectedText)
  })
}
```

## 🔧 Method Guidelines

### **Async/Await Pattern**

- All methods should be `async` and return `Promise<void>`
- Use `await` for all Playwright operations
- Handle asynchronous operations properly

### **Test Steps**

- Wrap logical operations in `test.step()` for reporting
- Use descriptive step names that explain the action
- Group related operations under meaningful steps

### **Error Handling**

```typescript
async performAction(): Promise<void> {
  await test.step('Perform Action', async () => {
    try {
      await this.clickOnElement(BUTTON_LOCATOR)
    } catch (error) {
      throw new Error(`Failed to perform action: ${error.message}`)
    }
  })
}
```

## 🎯 Inherited Capabilities

All page objects inherit these methods from `BasePage`:

### **Element Interactions**

- `clickOnElement(locator)` - Smart clicking with retries
- `fillInput(locator, text)` - Text input with validation
- `selectOption(locator, value)` - Dropdown selections

### **Validations**

- `validateVisibility(locator)` - Element visibility checks
- `validateTextContent(locator, expected)` - Text validation
- `validateAttribute(locator, attribute, expected)` - Attribute checks

### **Waiting Strategies**

- `waitForElement(locator)` - Element appearance
- `waitForNavigation()` - Page load completion
- `waitForCondition(condition)` - Custom conditions

## 📊 Page Object Best Practices

### **Single Responsibility**

Each page object should represent one logical page or component:

```typescript
// ✅ Good - focused responsibility
export class LoginPage extends BasePage {
  async performLogin(username: string, password: string): Promise<void> {}
  async validateLoginForm(): Promise<void> {}
}

// ❌ Avoid - mixed responsibilities
export class LoginAndDashboardPage extends BasePage {
  async performLogin(): Promise<void> {}
  async navigateToDashboard(): Promise<void> {}
  async validateDashboardData(): Promise<void> {}
}
```

### **Method Naming**

- **Actions**: `performAction()`, `clickButton()`, `fillForm()`
- **Navigation**: `navigateToPage()`, `goToSection()`
- **Validation**: `validateContent()`, `validateForm()`

### **Return Values**

- Most methods should return `Promise<void>`
- Return data only when the method's purpose is data retrieval
- Include validation within action methods when possible

## 🚀 Adding New Page Objects

1. **Create the page class**: Extend `BasePage`
2. **Import locators**: From corresponding locator file
3. **Implement methods**: Following the established patterns
4. **Add to fixtures**: Register in `testSetup.ts`
5. **Export from index**: Add to `pages/index.ts`

### Example Implementation:

```typescript
// 1. Create class
export class NewPage extends BasePage {
  async navigateToPage(): Promise<void> {
    await test.step('Navigate to New Page', async () => {
      const {pageIdentifier} = NEW_PAGE_LOCATORS
      await this.page.goto(NEW_PAGE_URL)
      await this.validateVisibility(pageIdentifier)
    })
  }
}

// 2. Add to fixtures (testSetup.ts)
newPage: async ({page}, use) => await use(new NewPage(page)),

// 3. Export (index.ts)
export * from './path/NewPage'
```

## 🔗 Related Documentation

- **Locator Patterns**: See `../locators/README.md`
- **Base Classes**: See `../core/README.md`
- **Test Implementation**: See `../tests/README.md`
- **Architecture Details**: See `../../docs/ARCHITECTURE.md`
