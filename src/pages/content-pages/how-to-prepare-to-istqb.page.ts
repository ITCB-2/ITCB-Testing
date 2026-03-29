import type {Page} from '@playwright/test'

export const howToPrepareToIstqbPage = (page: Page) => {
	const title = page.getByRole('heading', {name: 'איך להתכונן למבחן ISTQB'})

	return {
		title,
	}
}
