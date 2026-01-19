import {
	BasePage,
	findItemByProperty,
	test,
} from '@netanelh2/playwright-framework'
import type {Page} from '@playwright/test'

export const IMPORTANT_FACTS_PAGE_LOCATORS = {
	title: {
		role: 'heading',
		name: 'עובדות שחשוב שתדעו',
	},

	facts: [
		{
			locator:
				'p:has-text("ISTQB® - International Software Testing Qualification Board")',
			text: 'ISTQB® - International Software Testing Qualification Board',
			name: 'fact-1',
		},
		{
			locator: 'p:has-text("תוכנה בדוקה כהלכה היא התחייבות לאיכות ולמצוינות")',
			text: 'תוכנה בדוקה כהלכה היא התחייבות לאיכות ולמצוינות',
			name: 'fact-2',
		},

		{
			locator: 'p:has-text("להסמכה שלנו 3 רמות: בסיסית, מתקדמת ולמומחים")',
			text: 'להסמכה שלנו 3 רמות: בסיסית, מתקדמת ולמומחים',
			name: 'fact-3',
		},
		{
			locator:
				'p:has-text("גם אם אין לך רקע בתחום, בעזרת מבחן ההסמכה שלנו דלתות עולם ההייטק")',
			text: 'גם אם אין לך רקע בתחום, בעזרת מבחן ההסמכה שלנו דלתות עולם ההייטק',
			name: 'fact-4',
		},
	],
} as const

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
