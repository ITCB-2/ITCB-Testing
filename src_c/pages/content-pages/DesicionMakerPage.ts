import {expect, type Page, test} from '@playwright/test'
import type {DecisionMakerBoxName} from '../../types/boxNameTypes'

export class DecisionMakerPage {
	protected page: Page

	public static readonly title = {
		role: 'heading',
		name: 'מקבלי ההחלטות משתפים',
	} as const

	public static readonly decisionMakersSharingBoxes = [
		{
			name: 'omerPhilipovBox',
			img: {
				role: 'img',
				name: 'Director, Quality & Operational Excellence',
			},
		},
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
	] as const

	constructor(page: Page) {
		this.page = page
	}

	async validateDecisionMakersSharingBoxContent(
		decisionMakerBox: DecisionMakerBoxName,
	): Promise<void> {
		await test.step(`Validate ${decisionMakerBox} Box Content`, async () => {
			const decisionMakersSharingBox =
				DecisionMakerPage.decisionMakersSharingBoxes.find(
					(b) => b.name === decisionMakerBox,
				)
			if (!decisionMakersSharingBox)
				throw new Error(`Box not found: ${decisionMakerBox}`)
			await expect(
				this.page.getByRole(decisionMakersSharingBox.img.role, {
					name: decisionMakersSharingBox.img.name,
				}),
			).toBeVisible()
		})
	}
}
