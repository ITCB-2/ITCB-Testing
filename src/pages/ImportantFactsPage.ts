import {BasePage} from '@/core/BasePage'
import test from '@/fixtures/testSetup'
import {findItemByProperty} from '@/helpers/arrayUtils'
import {IMPORTANT_FACTS_PAGE_LOCATORS} from '@/locators/Important_Facts'
import {type Page} from '@playwright/test'

type FactName = (typeof IMPORTANT_FACTS_PAGE_LOCATORS.facts)[number]['name']

export class ImportantFactsPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }
  async validateImportantFact(factName: FactName): Promise<void> {
    await test.step(`Validate Important Fact ${factName}`, async () => {
      const {facts} = IMPORTANT_FACTS_PAGE_LOCATORS
      const fact = findItemByProperty(facts, 'name', factName)

      await this.validateText(fact.locator, fact.text)
    })
  }
}
