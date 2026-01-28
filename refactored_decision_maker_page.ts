import {
	BasePage,
	findItemByProperty,
	test,
} from '@netanelh2/playwright-framework'
import type {Page} from '@playwright/test'

export class DecisionMakerPage extends BasePage {
	public static readonly _LOCATORS = {
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

	private readonly locators = DecisionMakerPage._LOCATORS

	constructor(page: Page) {
		super(page)
	}

	async validateDecisionMakersSharingBoxContent(
		decisionMakerBox: DecisionMakerBoxName,
	): Promise<void> {
		await test.step(`Validate ${decisionMakerBox} Box Content`, async () => {
			const decisionMakersSharingBox = findItemByProperty(
				this.locators.decisionMakersSharingBoxes,
				'name',
				decisionMakerBox,
			)
			await this.validateVisibility(decisionMakersSharingBox.img)
		})
	}
}

type DecisionMakerBoxName =
	(typeof DecisionMakerPage._LOCATORS.decisionMakersSharingBoxes)[number]['name']
