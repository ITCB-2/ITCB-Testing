import type {Page} from '@playwright/test'

export const internationalConferencesPage = (page: Page) => {
	const title = page.getByRole('heading', {
		name: 'כנסים בינלאומיים. מחירים מיוחדים. רק לקהילת בודקי ישראל!',
	})

	return {
		title,
	}
}
