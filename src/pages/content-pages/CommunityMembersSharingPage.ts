import {
	BasePage,
	findItemByProperty,
	test,
} from '@netanelh2/playwright-framework'
import {expect, type Page} from '@playwright/test'
import type {CommunityMemberName} from '../../types/boxNameTypes'

export class CommunityMembersSharingPage extends BasePage {
	public static readonly pageTitle = {
		role: 'heading',
		name: 'חברי הקהילה משתפים',
	} as const

	public static readonly communityMembersSharingBoxes = [
		{
			name: 'הילה קדוש',
			img: {
				role: 'img',
				name: 'מהנדסת בדיקות',
			},
			position: 'מהנדסת בדיקות',
		},
		{
			name: 'רזאן ביראני',
			img: {
				role: 'img',
				name: 'בודקת תוכנה ידני ומוסמכת ISTQB',
			},
			position: 'בודקת תוכנה ידני ומוסמכת ISTQB',
		},
		{
			name: 'קובי יונסי',
			img: {
				role: 'img',
				name: 'מנהל בדיקות בעיריית ירושלים',
			},
			position: 'מנהל בדיקות בעיריית ירושלים',
		},
		{
			name: 'קטי טרכטמן',
			img: {
				role: 'img',
				name: 'Senior Software QA Lead',
			},
			position: 'Senior Software QA Lead',
		},
		{
			name: 'מיכאל טיבין',
			img: {
				role: 'img',
				name: 'Director Engineering, Akamai Technologies',
			},
			position: 'Director Engineering, Akamai Technologies',
		},
		{
			name: 'מור אבזיז',
			img: {
				role: 'img',
				name: 'מנהלת בדיקות אוטומציה, קווליטסט',
			},
			position: 'מנהלת בדיקות אוטומציה, קווליטסט',
		},
		{
			name: 'עומר פיליפ',
			img: {
				role: 'img',
				name: 'Director, Quality & Operational Excellence',
			},
			position: 'Director, Quality & Operational Excellence',
		},
	] as const

	constructor(page: Page) {
		super(page)
	}

	async validateLoaded(): Promise<void> {
		await test.step('Validate Community Members Sharing Page Loaded', async () => {
			await this.validateVisibility(CommunityMembersSharingPage.pageTitle)
		})
	}

	async validateCommunityMembersSharingBoxImg(
		boxName: CommunityMemberName,
	): Promise<void> {
		await test.step(`Validate ${boxName} Box Image`, async () => {
			const box = findItemByProperty(
				CommunityMembersSharingPage.communityMembersSharingBoxes,
				'name',
				boxName,
			)
			await this.validateVisibility(box.img)
		})
	}

	async validateCommunityMembersSharingBoxPosition(
		boxName: CommunityMemberName,
	): Promise<void> {
		await test.step(`Validate ${boxName} Box Position`, async () => {
			const box = findItemByProperty(
				CommunityMembersSharingPage.communityMembersSharingBoxes,
				'name',
				boxName,
			)
			const positionText = this.page.getByText(box.position)
			await expect(positionText).toBeVisible()
			await expect(positionText).toContainText(box.position)
		})
	}

	async validateCommunityMembersSharingBoxContent(
		boxName: CommunityMemberName,
	): Promise<void> {
		await test.step(`Validate ${boxName} Box Complete Content`, async () => {
			const box = findItemByProperty(
				CommunityMembersSharingPage.communityMembersSharingBoxes,
				'name',
				boxName,
			)
			await this.validateVisibility(box.img)
			const positionText = this.page.getByText(box.position)
			await expect(positionText).toBeVisible()
			await expect(positionText).toContainText(box.position)
		})
	}
}


