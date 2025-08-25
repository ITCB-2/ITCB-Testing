# Locators

This directory contains all element selectors organized separately from page objects for better maintainability and reusability.

## 📁 Directory Structure

Locators are organized to mirror the page structure:

### 🏠 **Main Content** (`main-content/`)

- `Main_Page.ts` - Homepage element selectors
- `Sliders_Main_Page.ts` - Slider component selectors

### 🧭 **Navigation** (`navigation/`)

- `Top_Menu_Main_Page.ts` - Top navigation selectors
- `Bottom_Menu_Main_Page.ts` - Footer navigation selectors

### 📄 **Content Pages** (`content-pages/`)

- `Important_Facts.ts` - Important facts page selectors
- `Our_Certification.ts` - Certification page selectors
- `Community_Members_Sharing.ts` - Community page selectors
- `Decision_Makers_Sharing.ts` - Decision maker page selectors
- And many more...

## 🎯 Locator Patterns

### **Naming Convention**

- **File Names**: `Page_Name.ts` (using underscores)
- **Constants**: `PAGE_NAME_LOCATORS` (UPPER_SNAKE_CASE)
- **Properties**: Descriptive camelCase names

### **Standard Structure**

```typescript
export const PAGE_NAME_LOCATORS = {
  // Direct elements
  submitButton: {role: 'button', name: 'Submit'},
  titleText: '.page-title',

  // Grouped sections
  formSection: {
    usernameField: {role: 'textbox', name: 'Username'},
    passwordField: {role: 'textbox', name: 'Password'},
    loginButton: {role: 'button', name: 'Log In'},
  },

  // Navigation elements
  menuItems: {
    home: {role: 'link', name: 'Home'},
    about: {role: 'link', name: 'About Us'},
  },
} as const
```

## 🔧 Locator Types

### **String Locators**

Traditional CSS selectors and XPath:

```typescript
const LOCATORS = {
  cssSelector: '.my-class',
  idSelector: '#my-id',
  xpathSelector: '//div[@class="my-class"]',
  complexSelector: 'div.container > .item:nth-child(2)',
}
```

### **Role-Based Locators**

Accessibility-focused selectors (recommended):

```typescript
const LOCATORS = {
  // Simple role locator
  button: {role: 'button', name: 'Click Me'},

  // Locator with parent context
  nestedButton: {
    parent: '.form-container',
    role: 'button',
    name: 'Submit Form',
  },

  // Complex role locator
  specificLink: {
    parent: 'nav[aria-label="Main"]',
    role: 'link',
    name: 'Products',
  },
}
```

## 🎯 Smart Fallback Strategy

The `LocatorUtils` class automatically implements fallback strategies:

1. **CSS/XPath** - Direct selector matching
2. **getByLabel** - Accessibility label matching
3. **getByText** - Visible text content matching
4. **getByRole** - ARIA role and name matching

```typescript
// This locator will try multiple strategies automatically
const button = {role: 'button', name: 'Submit'}

// Fallback sequence:
// 1. page.getByRole('button', {name: 'Submit'})
// 2. page.getByLabel('Submit')
// 3. page.getByText('Submit')
// 4. page.locator('[role="button"]').filter({hasText: 'Submit'})
```

## 📊 Locator Organization

### **Logical Grouping**

Group related elements for better organization:

```typescript
export const FORM_PAGE_LOCATORS = {
  // Page-level elements
  pageTitle: '.page-title',
  loadingSpinner: '.loading',

  // Form-specific grouping
  personalInfo: {
    firstName: {role: 'textbox', name: 'First Name'},
    lastName: {role: 'textbox', name: 'Last Name'},
    email: {role: 'textbox', name: 'Email'},
  },

  // Action buttons
  actions: {
    save: {role: 'button', name: 'Save'},
    cancel: {role: 'button', name: 'Cancel'},
    reset: {role: 'button', name: 'Reset Form'},
  },

  // Validation messages
  errors: {
    general: '.error-message',
    fieldSpecific: '.field-error',
  },
} as const
```

### **Hierarchical Structure**

```typescript
export const NAVIGATION_LOCATORS = {
  topMenu: {
    container: '.top-navigation',
    logo: '.logo',
    mainItems: {
      home: {role: 'link', name: 'Home'},
      products: {role: 'link', name: 'Products'},
      about: {role: 'link', name: 'About'},
    },
    userMenu: {
      trigger: {role: 'button', name: 'User Menu'},
      dropdown: '.user-dropdown',
      items: {
        profile: {role: 'link', name: 'Profile'},
        settings: {role: 'link', name: 'Settings'},
        logout: {role: 'link', name: 'Logout'},
      },
    },
  },
} as const
```

## 🛠️ Best Practices

### **Prefer Role-Based Locators**

```typescript
// ✅ Good - accessible and resilient
submitButton: {role: 'button', name: 'Submit Form'}

// ❌ Avoid when possible - brittle
submitButton: '#submit-btn-form-123'
```

### **Use Descriptive Names**

```typescript
// ✅ Good - clear purpose
const LOCATORS = {
  primaryNavigationMenu: {role: 'navigation', name: 'Main'},
  userProfileAvatar: '.user-avatar',
  searchResultsContainer: '.search-results',
}

// ❌ Avoid - unclear purpose
const LOCATORS = {
  nav1: '.nav',
  img2: '.img',
  div3: '.container',
}
```

### **Group Related Elements**

```typescript
// ✅ Good - logical grouping
const LOCATORS = {
  loginForm: {
    username: {role: 'textbox', name: 'Username'},
    password: {role: 'textbox', name: 'Password'},
    submitButton: {role: 'button', name: 'Log In'},
  },
}

// ❌ Avoid - flat structure for related elements
const LOCATORS = {
  loginUsername: {role: 'textbox', name: 'Username'},
  loginPassword: {role: 'textbox', name: 'Password'},
  loginSubmit: {role: 'button', name: 'Log In'},
}
```

### **Use Type Safety**

Always add `as const` to enable TypeScript type inference:

```typescript
export const PAGE_LOCATORS = {
  button: {role: 'button', name: 'Click Me'},
} as const // ← Important for type safety
```

## 🔧 Usage in Page Objects

### **Import and Destructure**

```typescript
import {LOGIN_PAGE_LOCATORS} from '@/locators'

export class LoginPage extends BasePage {
  async performLogin(): Promise<void> {
    // Destructure for clean code
    const {username, password, submitButton} = LOGIN_PAGE_LOCATORS.loginForm

    await this.fillInput(username, 'testuser')
    await this.fillInput(password, 'password123')
    await this.clickOnElement(submitButton)
  }
}
```

### **Hierarchical Access**

```typescript
async navigateMenu(): Promise<void> {
  const {mainItems} = NAVIGATION_LOCATORS.topMenu

  await this.clickOnElement(mainItems.products)
  await this.validateVisibility(mainItems.about)
}
```

## 📊 Complex Locator Examples

### **Dynamic Content**

```typescript
export const DYNAMIC_LOCATORS = {
  // For tables with variable content
  tableRow: (index: number) => `tr:nth-child(${index})`,

  // For dynamic IDs
  dynamicButton: (id: string) => `[data-testid="button-${id}"]`,

  // For text-based selections
  menuItemByText: (text: string) => ({role: 'menuitem', name: text}),
} as const
```

### **Modal and Overlay Elements**

```typescript
export const MODAL_LOCATORS = {
  overlay: '.modal-overlay',
  container: {
    parent: '.modal-overlay',
    role: 'dialog',
    name: 'Confirmation',
  },
  content: {
    title: '.modal-title',
    message: '.modal-message',
  },
  actions: {
    confirm: {
      parent: '.modal-overlay',
      role: 'button',
      name: 'Confirm',
    },
    cancel: {
      parent: '.modal-overlay',
      role: 'button',
      name: 'Cancel',
    },
  },
} as const
```

## 🚀 Adding New Locators

1. **Create appropriate file**: Match page object structure
2. **Follow naming convention**: `Page_Name.ts` and `PAGE_NAME_LOCATORS`
3. **Use logical grouping**: Organize related elements
4. **Prefer role-based**: Use accessibility-focused selectors
5. **Add type safety**: Include `as const`
6. **Export from index**: Add to `locators/index.ts`

### Example:

```typescript
// File: src/locators/content-pages/New_Page.ts
export const NEW_PAGE_LOCATORS = {
  pageIdentifier: '.new-page',

  contentSection: {
    title: {role: 'heading', name: 'Page Title'},
    description: '.page-description',
  },

  actionButtons: {
    primary: {role: 'button', name: 'Primary Action'},
    secondary: {role: 'button', name: 'Secondary Action'},
  },
} as const

// Add to index.ts
export * from './content-pages/New_Page'
```

## 🔗 Related Documentation

- **Page Objects**: See `../pages/README.md`
- **Base Classes**: See `../core/README.md`
- **TypeScript Types**: See `../types/README.md`
- **Architecture Guide**: See `../../docs/ARCHITECTURE.md`
