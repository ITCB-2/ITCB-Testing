import type {Page} from '@playwright/test'

export const podcastsPage = (page: Page) => {
	const title = page.getByRole('heading', {name: 'פודקאסטים', exact: true})
	const officialPodcastLink = page.getByRole('link', {
		name: 'דף הפודקאסט הרישמי שלנו',
	})

	return {
		title,
		officialPodcastLink,
	}
}
