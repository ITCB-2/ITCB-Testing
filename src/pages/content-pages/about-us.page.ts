import type {Page} from '@playwright/test'

export const aboutUsPage = (page: Page) => {
	const title = page.getByRole('heading', {name: 'אודות ®ITCB'})
	const boardOfDirectorsTitle = page.getByRole('heading', {
		name: 'הוועד המנהל',
	})
	const advisoryBoardTitle = page.getByRole('heading', {name: 'הוועד המייעץ'})
	const michalTalTitle = page.getByRole('heading', {name: 'מיכל טל'})

	return {
		title,
		boardOfDirectorsTitle,
		advisoryBoardTitle,
		michalTalTitle,
	}
}
