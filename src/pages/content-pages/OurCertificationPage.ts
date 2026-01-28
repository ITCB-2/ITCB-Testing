import {
	BasePage,
	findItemByProperty,
	test,
} from '@netanelh2/playwright-framework'
import type {Page} from '@playwright/test'
import type {OurCertificationBoxName} from '../../types/boxNameTypes'

export class OurCertificationPage extends BasePage {
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
				name: 'מקצוען בדיקות בתחילת קרירה',
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
		super(page)
	}

	async validateBoxTitleAndBoxImage(
		boxName: OurCertificationBoxName,
	): Promise<void> {
		await test.step(`Validate Box Title and Image of ${boxName}`, async () => {
			const box = findItemByProperty(
				OurCertificationPage.boxes,
				'name',
				boxName,
			)
			await this.validateText(box.boxTitleLocator, box.titleText)
			await this.validateVisibility(box.boxImageLocator)
		})
	}

	async validateReadMoreSection(
		boxName: OurCertificationBoxName,
	): Promise<void> {
		await test.step(`Validate ${boxName} Read More Section`, async () => {
			const box = findItemByProperty(
				OurCertificationPage.boxes,
				'name',
				boxName,
			)
			await this.validateText(box.subBoxTitle, box.subBoxText)
		})
	}
}


