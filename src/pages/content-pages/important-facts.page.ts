import type {Page} from '@playwright/test'

export const importantFactsPage = (page: Page) => {
	const title = page.getByRole('heading', {name: 'עובדות שחשוב שתדעו'})

	const importantFacts = {
		'fact-1': {
			locator:
				'p:has-text("ISTQB® - International Software Testing Qualification Board")',
		},
		'fact-2': {
			locator: 'p:has-text("תוכנה בדוקה כהלכה היא התחייבות לאיכות ולמצוינות")',
		},
		'fact-3': {
			locator: 'p:has-text("להסמכה שלנו 3 רמות: בסיסית, מתקדמת ולמומחים")',
		},
		'fact-4': {
			locator:
				'p:has-text("גם אם אין לך רקע בתחום, בעזרת מבחן ההסמכה שלנו דלתות עולם ההייטק")',
		},
	} as const
	type FactName = keyof typeof importantFacts
	const factNames = Object.keys(importantFacts) as FactName[]

	return {
		title,
		factNames,
		fact: (factName: FactName) =>
			page.locator(importantFacts[factName].locator),
	}
}
