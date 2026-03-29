import type {Page} from '@playwright/test'

export const itcbMagazinePage = (page: Page) => {
	const viewAllMagazineIssuesLink = page.getByRole('link', {
		name: 'הצג את כל גליונות המגזין',
	})

	return {
		viewAllMagazineIssuesLink,
	}
}
