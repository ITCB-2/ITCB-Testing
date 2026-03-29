import type {Page} from '@playwright/test'

export const tipsPage = (page: Page) => {
	const title = page.getByRole('heading', {
		name: 'טיפים לבודקי תכנה - כאן תמצאו טיפים שנכתבו ע"י חברי קהילת הבדיקות בישראל בכדי לח',
	})

	return {
		title,
	}
}
