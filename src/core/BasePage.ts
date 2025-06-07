import type {Locator, Page} from '@playwright/test'
import {expect} from '@playwright/test'

type stringOrRoleLocatorType = string | {role: string; name: string}

export class BasePage {
  protected page: Page

  constructor(page: Page) {
    this.page = page
  }
  private _findLocatorByString(locator: string): Locator {
    // Try each method in sequence and return the first one that works
    const strategies = [
      () => this.page.locator(locator),
      () => this.page.getByLabel(locator),
      () => this.page.getByText(locator),
    ]
    for (const strategy of strategies) {
      try {
        return strategy()
      } catch {
        continue
      }
    }
    throw new Error(`Unable to find element with string locator: ${locator}`)
  }

  // Handle Generic Locator, byRole, byLabel, byText
  private _extractLocator(locator: stringOrRoleLocatorType): Locator {
    try {
      // Try generic locator
      if (typeof locator === 'string') {
        return this._findLocatorByString(locator)
        // Try role and name
      } else if (
        typeof locator === 'object' &&
        locator !== null &&
        'role' in locator &&
        'name' in locator
      ) {
        const {role, name} = locator
        return this.page.getByRole(role as any, {
          name: name,
        })
      } else {
        throw new Error(
          `Locator "${locator}" is not a valid string or role object.`,
        )
      }
    } catch {
      throw new Error(`Unable to find element with locator: ${locator}`)
    }
  }

  protected async validateText(
    locator: stringOrRoleLocatorType,
    text: string,
  ): Promise<void> {
    const extractedLocator = this._extractLocator(locator)
    try {
      await expect(extractedLocator).toHaveText(text)
    } catch {
      try {
        await expect(extractedLocator).toContainText(text)
      } catch (error) {
        throw new Error(
          `Element with locator "${locator}" does not contain text "${text}". Error: ${error}`,
        )
      }
    }
  }

  protected async validateURL(expectedURL: string): Promise<void> {
    await expect(this.page).toHaveURL(expectedURL)
  }

  protected async gotoURL(url: string): Promise<void> {
    await this.page.goto(url)
  }

  protected async clickOnElement(
    locator: stringOrRoleLocatorType,
  ): Promise<void> {
    const extractedLocator: Locator = this._extractLocator(locator)
    await extractedLocator.click()
  }

  protected async fillInput(locator: string, text: string): Promise<void> {
    const extractedLocator: Locator = this._extractLocator(locator)
    await extractedLocator.fill(text)
  }
}
