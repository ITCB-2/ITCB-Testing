import type {Page} from '@playwright/test'

export const questionsAndAnswersPage = (page: Page) => {
	const title = page.getByRole('heading', {name: 'שאלות ותשובות'})

	return {
		title,
	}
}
