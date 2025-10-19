import {
	BasePage,
	findItemByProperty,
	test,
} from '@netanelh2/playwright-framework'
import type {Page} from '@playwright/test'
import {IMPORTANT_FACTS_PAGE_LOCATORS} from '../../locators/content-pages/Important_Facts'

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
