import {
	BasePage,
	findItemByProperty,
	test,
} from '@netanelh2/playwright-framework'
import type {Page} from '@playwright/test'

export const DECISION_MAKERS_SHARING_PAGE_LOCATORS = {
	title: {
		role: 'heading',
		name: 'מקבלי ההחלטות משתפים',
	},
	decisionMakersSharingBoxes: [
		{
			name: 'kobiYonasiBox',
			img: {
				role: 'img',
				name: 'מנהל בדיקות בעיריית ירושלים',
			},
		},
		{
			name: 'ketyTrachtmanBox',
			img: {
				role: 'img',
				name: 'Senior Software QA Lead',
			},
		},
		{
			name: 'michaelTivinBox',
			img: {
				role: 'img',
				name: 'Director Engineering, Akamai',
			},
		},
		{
			name: 'MorAbazizBox',
			img: {
				role: 'img',
				name: 'מנהלת בדיקות אוטומציה, קווליטסט',
			},
		},
		{
			name: 'omerPhilipovBox',
			img: {
				role: 'img',
				name: 'Director, Quality &',
			},
		},
	],
} as const

type DecisionMakerBoxName =
	(typeof DECISION_MAKERS_SHARING_PAGE_LOCATORS.decisionMakersSharingBoxes)[number]['name']

export class DecisionMakerPage extends BasePage {
	constructor(page: Page) {
		super(page)
	}
	async validateDecisionMakersSharingBoxContent(
		decisionMakerBox: DecisionMakerBoxName,
	): Promise<void> {
		const {decisionMakersSharingBoxes} = DECISION_MAKERS_SHARING_PAGE_LOCATORS
		await test.step(`Validate ${decisionMakerBox} Box Content`, async () => {
			const decisionMakersSharingBox = findItemByProperty(
				decisionMakersSharingBoxes,
				'name',
				decisionMakerBox,
			)
			await this.validateVisibility(decisionMakersSharingBox.img)
		})
	}
}
