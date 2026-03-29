import type {Page} from '@playwright/test'

export const decisionMakersSharingPage = (page: Page) => {
	const title = page.getByText('מקבלי החלטות משתפים', {exact: true}).first()

	const decisionMakers = {
		omerPhilipovBox: {
			imageName: 'Director, Quality &',
		},
		kobiYonasiBox: {
			imageName: 'מנהל בדיקות בעיריית ירושלים',
		},
		ketyTrachtmanBox: {
			imageName: 'Senior Software QA Lead',
		},
	} as const
	type DecisionMakerBoxName = keyof typeof decisionMakers
	const boxNames = Object.keys(decisionMakers) as DecisionMakerBoxName[]

	return {
		title,
		boxNames,
		boxImage: (boxName: DecisionMakerBoxName) =>
			page.getByRole('img', {name: decisionMakers[boxName].imageName}),
	}
}
