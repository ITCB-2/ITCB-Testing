# Core Framework Components

This directory contains the foundation classes that power the entire test automation framework. These components provide reusable functionality for all page objects and establish the framework's architecture.

## 📁 Core Components

### 🏛️ **BasePage.ts**

The foundational class that all page objects inherit from.

**Key Features**:

- ✨ **Common Methods**: Provides reusable interactions for all page objects
- 🔄 **Automatic Retries**: Built-in retry logic for flaky elements
- 📊 **Error Handling**: Consistent error reporting and context
- 🎯 **Validation Helpers**: Standard validation methods
- 📝 **Test Step Integration**: Automatic test.step() wrapping

**Inherited by**: All page objects in `../pages/`

### 🎯 **LocatorUtils.ts**

Smart locator resolution with automatic fallback strategies.

**Key Features**:

- 🔄 **Automatic Fallbacks**: Multiple locator strategies tried in sequence
- 🎯 **Role-Based Priority**: Accessibility-first locator resolution
- 📊 **Error Context**: Detailed failure information
- ⚡ **Performance Optimized**: Efficient locator caching
- 🛡️ **Type Safety**: Full TypeScript support

**Resolution Order**:

1. CSS/XPath selectors (if string provided)
2. getByLabel (accessibility labels)
3. getByText (visible text content)
4. getByRole (ARIA roles and names)

## 🏗️ Inheritance Hierarchy

```
LocatorUtils                    # Smart locator strategies
    ↓
BasePage extends LocatorUtils   # Common page functionality
    ↓
[All Page Objects]             # Specific page implementations
    ↓
Tests                          # Test specifications
```

## 🔧 BasePage Methods

### **Navigation & Page Control**

```typescript
// Navigate to specific URLs with validation
async navigateToUrl(url: string): Promise<void>

// Wait for page load completion
async waitForPageLoad(): Promise<void>

// Reload page with validation
async refreshPage(): Promise<void>
```

### **Element Interactions**

```typescript
// Smart clicking with retry logic
async clickOnElement(locator: StringOrRoleLocatorType): Promise<void>

// Text input with validation
async fillInput(locator: StringOrRoleLocatorType, text: string): Promise<void>

// Dropdown selection
async selectOption(locator: StringOrRoleLocatorType, value: string): Promise<void>

// Checkbox and radio interactions
async checkElement(locator: StringOrRoleLocatorType): Promise<void>
async uncheckElement(locator: StringOrRoleLocatorType): Promise<void>
```

### **Validation Methods**

```typescript
// Element visibility validation
async validateVisibility(locator: StringOrRoleLocatorType): Promise<void>

// Text content validation
async validateTextContent(locator: StringOrRoleLocatorType, expected: string): Promise<void>

// Attribute validation
async validateAttribute(locator: StringOrRoleLocatorType, attribute: string, expected: string): Promise<void>

// URL validation
async validateCurrentUrl(expectedUrl: string): Promise<void>
```

### **Waiting Strategies**

```typescript
// Wait for element to appear
async waitForElement(locator: StringOrRoleLocatorType): Promise<void>

// Wait for element to disappear
async waitForElementToDisappear(locator: StringOrRoleLocatorType): Promise<void>

// Wait for custom conditions
async waitForCondition(condition: () => Promise<boolean>): Promise<void>
```

## 🎯 LocatorUtils Capabilities

### **Locator Type Support**

```typescript
// String locators (CSS/XPath)
await this.clickOnElement('.submit-button')
await this.clickOnElement('#login-form')

// Role-based locators (recommended)
await this.clickOnElement({role: 'button', name: 'Submit'})

// Complex role locators with parent context
await this.clickOnElement({
  parent: '.modal-container',
  role: 'button',
  name: 'Confirm',
})
```

### **Automatic Fallback Example**

When you use a role-based locator like:

```typescript
{role: 'button', name: 'Submit'}
```

LocatorUtils automatically tries:

1. `page.getByRole('button', {name: 'Submit'})`
2. `page.getByLabel('Submit')`
3. `page.getByText('Submit')`
4. `page.locator('[role="button"]').filter({hasText: 'Submit'})`

### **Error Context**

Failed locators provide detailed context:

```
❌ Failed to locate element
🎯 Attempted locator: {role: 'button', name: 'Submit'}
🔍 Strategies tried:
  1. getByRole('button', {name: 'Submit'}) - Not found
  2. getByLabel('Submit') - Not found
  3. getByText('Submit') - Not found
  4. Complex selector fallback - Not found
📄 Page URL: https://example.com/login
⏰ Timestamp: 2025-01-20T10:30:45Z
```

## 🛠️ Usage Patterns

### **Page Object Implementation**

```typescript
import {BasePage} from '@/core'
import {LOGIN_PAGE_LOCATORS} from '@/locators'

export class LoginPage extends BasePage {
  async performLogin(username: string, password: string): Promise<void> {
    await test.step('Perform Login', async () => {
      const {usernameField, passwordField, submitButton} = LOGIN_PAGE_LOCATORS.form

      // Use inherited methods
      await this.fillInput(usernameField, username)
      await this.fillInput(passwordField, password)
      await this.clickOnElement(submitButton)

      // Use inherited validation
      await this.validateCurrentUrl('/dashboard')
    })
  }
}
```

### **Error Handling**

```typescript
export class SomePage extends BasePage {
  async performAction(): Promise<void> {
    await test.step('Perform Critical Action', async () => {
      try {
        await this.clickOnElement(CRITICAL_BUTTON_LOCATOR)
      } catch (error) {
        throw new Error(`Critical action failed: ${error.message}`)
      }
    })
  }
}
```

## 📊 Advanced Features

### **Retry Configuration**

BasePage includes intelligent retry logic:

- **Default Retries**: 3 attempts with exponential backoff
- **Timeout Handling**: Configurable timeouts per operation
- **Context Preservation**: Error context maintained across retries

### **Performance Optimization**

- **Locator Caching**: Frequently used locators are cached
- **Batch Operations**: Multiple validations combined when possible
- **Smart Waiting**: Optimized wait strategies for different scenarios

### **Integration with Playwright**

- **Test Step Wrapping**: Automatic test.step() integration
- **Screenshot Capture**: Automatic screenshots on failures
- **Trace Integration**: Full trace support for debugging

## 🔧 Configuration

### **Environment Integration**

```typescript
// BasePage automatically uses environment configuration
import {envUtils} from '@/helpers'

// Automatic base URL resolution
const baseUrl = envUtils.getBaseUrl()
```

### **Timeout Configuration**

```typescript
// Default timeouts (configurable via environment)
const DEFAULT_TIMEOUT = 30000 // 30 seconds
const RETRY_ATTEMPTS = 3 // 3 retry attempts
const RETRY_DELAY = 1000 // 1 second between retries
```

## 🚀 Extending Core Classes

### **Custom BasePage Extensions**

```typescript
import {BasePage} from '@/core'

export class CustomBasePage extends BasePage {
  // Add project-specific methods
  async performCustomAction(): Promise<void> {
    // Custom implementation using BasePage methods
  }

  // Override methods if needed
  async validateVisibility(locator: StringOrRoleLocatorType): Promise<void> {
    // Custom validation logic
    await super.validateVisibility(locator)
    // Additional custom checks
  }
}
```

### **Custom Locator Strategies**

```typescript
import {LocatorUtils} from '@/core'

export class CustomLocatorUtils extends LocatorUtils {
  // Add custom locator resolution strategies
  protected async resolveCustomLocator(locator: CustomLocatorType): Promise<Locator> {
    // Custom implementation
  }
}
```

## 🔗 Type Integration

### **Supported Locator Types**

```typescript
// String locators
type StringLocator = string

// Role-based locators
type RoleLocator = {
  role: string
  name: string
  parent?: string
}

// Union type for flexibility
type StringOrRoleLocatorType = StringLocator | RoleLocator
```

## 🎯 Best Practices

### **Method Consistency**

- Always return `Promise<void>` for async methods
- Use descriptive parameter names
- Include proper error handling
- Add meaningful test.step() descriptions

### **Error Messages**

- Provide context about what failed
- Include the attempted action
- Reference the specific locator used
- Add page state information

### **Performance Considerations**

- Use appropriate wait strategies
- Minimize unnecessary validations
- Batch operations when possible
- Cache frequently used elements

## 🔗 Related Documentation

- **Page Objects**: See `../pages/README.md`
- **Locators**: See `../locators/README.md`
- **Types**: See `../types/README.md`
- **Architecture**: See `../../docs/ARCHITECTURE.md`
