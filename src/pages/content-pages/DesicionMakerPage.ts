import {
	BasePage,
	findItemByProperty,
	test,
} from '@netanelh2/playwright-framework'
import type {Page} from '@playwright/test'
import type {DecisionMakerBoxName} from '../../types/boxNameTypes'

export class DecisionMakerPage extends BasePage {
	// ✅ Class variables ישירים - לא בתוך אובייקט
	public static readonly title = {
		role: 'heading',
		name: 'מקבלי ההחלטות משתפים',
	} as const

	public static readonly decisionMakersSharingBoxes = [
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
	] as const

	constructor(page: Page) {
		super(page)
	}

	async validateDecisionMakersSharingBoxContent(
		decisionMakerBox: DecisionMakerBoxName,
	): Promise<void> {
		await test.step(`Validate ${decisionMakerBox} Box Content`, async () => {
			const decisionMakersSharingBox = findItemByProperty(
				DecisionMakerPage.decisionMakersSharingBoxes,
				'name',
				decisionMakerBox,
			)
			await this.validateVisibility(decisionMakersSharingBox.img)
		})
	}
}
