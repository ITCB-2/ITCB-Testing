import type {Page} from '@playwright/test'

export const syllabusInfoPage = (page: Page) => {
	const title = page.getByRole('heading', {
		name: 'כל מה שרציתם לדעת על סילבוס CTFL 4.0',
	})

	return {
		title,
	}
}
