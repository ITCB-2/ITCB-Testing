import type {Page} from '@playwright/test'

export const eventsSummariesPage = (page: Page) => {
	const title = page.getByRole('heading', {name: 'סיכומי אירועים'})

	return {
		title,
	}
}
