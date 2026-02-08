import {expect, type Page, test} from '@playwright/test'
import type {OurCertificationBoxName} from '../../types/boxNameTypes'

export class OurCertificationPage {
	protected page: Page

	public static readonly title = {
		role: 'heading',
		name: 'ההסמכות שלנו, הקריירה שלך',
	} as const

	public static readonly entryLevelTabBtn = {
		role: 'button',
		name: 'מקצוען בדיקות בתחילת קריירה',
	} as const

	public static readonly testLeadTab = {
		role: 'button',
		name: 'מוביל בדיקות',
	} as const

	public static readonly expertTesterTab = {
		role: 'button',
		name: 'בודק מומחה',
	} as const

	public static readonly testingCertificationForDevelopersTab = {
		role: 'button',
		name: 'הסמכת בדיקות למפתחים',
	} as const

	public static readonly boxes = [
		{
			name: 'entryLevelTestingProfessional',
			boxTitleLocator: 'p:has-text("מקצוען בדיקות בתחילת קריירה")',
			titleText: 'מקצוען בדיקות בתחילת קריירה',
			boxImageLocator: {
				role: 'img',
				name: 'מקצוען בדיקות בתחילת קריירה',
			},
			readMoreButton: 'a:has-text("קרא עוד") >> nth=0',
			subBoxTitle: 'h3:has-text("Agile Tester Foundation level") >> nth=0',
			subBoxText: 'Agile Tester Foundation level',
		},
		{
			name: 'testLead',
			boxTitleLocator: 'p:has-text("מוביל בדיקות")',
			titleText: 'מוביל בדיקות',
			boxImageLocator: {
				role: 'img',
				name: 'מוביל בדיקות',
			},
			readMoreButton: 'a:has-text("קרא עוד") >> nth=1',
			subBoxTitle: {
				role: 'heading',
				name: 'מנהלים (ATM)',
			},
			subBoxText: 'מנהלים (ATM)',
		},
		{
			name: 'expertTester',
			boxTitleLocator: 'p:has-text("בודק מומחה")',
			titleText: 'בודק מומחה',
			boxImageLocator: {
				role: 'img',
				name: 'בודק מומחה',
			},
			readMoreButton: 'a:has-text("קרא עוד") >> nth=2',
			subBoxTitle: {
				role: 'heading',
				name: 'אנליסטים (ATA)',
			},
			subBoxText: 'אנליסטים (ATA)',
		},
		{
			name: 'testingCertificationForDevelopers',
			boxTitleLocator: 'p:has-text("הסמכת בדיקות למפתחים")',
			titleText: 'הסמכת בדיקות למפתחים',
			boxImageLocator: {
				role: 'img',
				name: 'הסמכת בדיקות למפתחים',
			},
			readMoreButton: 'a:has-text("קרא עוד") >> nth=3',
			subBoxTitle: 'h3:has-text("Foundation Level") >> nth=0',
			subBoxText: 'Foundation Level',
		},
	] as const

	constructor(page: Page) {
		this.page = page
	}

	async validateBoxTitleAndBoxImage(
		boxName: OurCertificationBoxName,
	): Promise<void> {
		await test.step(`Validate Box Title and Image of ${boxName}`, async () => {
			const box = OurCertificationPage.boxes.find((b) => b.name === boxName)
			if (!box) throw new Error(`Box not found: ${boxName}`)
			await expect(this.page.locator(box.boxTitleLocator)).toContainText(
				box.titleText,
			)
			await expect(
				this.page.getByRole(box.boxImageLocator.role, {
					name: box.boxImageLocator.name,
				}),
			).toBeVisible()
		})
	}

	async validateReadMoreSection(
		boxName: OurCertificationBoxName,
	): Promise<void> {
		await test.step(`Validate ${boxName} Read More Section`, async () => {
			const box = OurCertificationPage.boxes.find((b) => b.name === boxName)
			if (!box) throw new Error(`Box not found: ${boxName}`)
			const subBoxTitle =
				typeof box.subBoxTitle === 'string'
					? this.page.locator(box.subBoxTitle)
					: this.page.getByRole(box.subBoxTitle.role, {
							name: box.subBoxTitle.name,
						})
			await expect(subBoxTitle).toContainText(box.subBoxText)
		})
	}
}
