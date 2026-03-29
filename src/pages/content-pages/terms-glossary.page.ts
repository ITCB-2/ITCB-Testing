import type {Page} from '@playwright/test'

export const termsGlossaryPage = (page: Page) => {
	const title = page.getByRole('heading', {name: 'מילון מונחים'})
	const advancedSearchTitle = page.getByRole('heading', {
		name: 'מילון המונחים של ISTQB - תכונות חיפוש מתקדמות',
	})

	return {
		title,
		advancedSearchTitle,
	}
}
