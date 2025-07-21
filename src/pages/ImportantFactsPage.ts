import test from '@/fixtures/testSetup'
import {type Page} from '@playwright/test'
import {IMPORTANT_FACTS_PAGE_LOCATORS} from '@/locators/Important_Facts'
import {BasePage} from '../core/BasePage'

export class ImportantFactsPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }
  async validateImportantFact(factName: string): Promise<void> {
    await test.step(`Validate Important Fact ${factName}`, async () => {
      const fact = IMPORTANT_FACTS_PAGE_LOCATORS.facts.find(
        (f) => f.name === factName,
      )
      if (!fact) {
        throw new Error(`Fact with name "${factName}" not found`)
      }

      await this.validateText(fact.locator, fact.text)
    })
  }
}
