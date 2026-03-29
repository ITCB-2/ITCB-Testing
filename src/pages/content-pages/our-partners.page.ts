import type {Page} from '@playwright/test'

export const ourPartnersPage = (page: Page) => {
	const title = page.getByRole('heading', {name: 'מרכזי הדרכה מוסמכים'})

	return {
		title,
	}
}
