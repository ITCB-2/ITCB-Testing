import type {Page} from '@playwright/test'

export const usefulLinksPage = (page: Page) => {
	const title = page.getByRole('heading', {name: 'קישורים שימושיים'})

	return {
		title,
	}
}
