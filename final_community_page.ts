import {
	BasePage,
	findItemByProperty,
	test,
} from '@netanelh2/playwright-framework'
import type {Page} from '@playwright/test'

export class CommunityMembersSharingPage extends BasePage {
	private readonly COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS = {
		pageTitle: {
			role: 'heading',
			name: 'חברי הקהילה משתפים',
		},
		communityMembersSharingBoxes: [
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
		],
	} as const

	constructor(page: Page) {
		super(page)
	}

	async validateLoaded(): Promise<void> {
		await test.step('Validate Community Members Sharing Page Loaded', async () => {
			const {pageTitle} = this.COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS
			await this.validateVisibility(pageTitle)
		})
	}

	async validateCommunityMembersSharingBoxImg(
		boxName: (typeof this.COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS.communityMembersSharingBoxes)[number]['name'],
	): Promise<void> {
		await test.step(`Validate ${boxName} Box Image`, async () => {
			const box = findItemByProperty(
				this.COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS
					.communityMembersSharingBoxes,
				'name',
				boxName,
			)
			await this.validateVisibility(box.img)
		})
	}

	async validateCommunityMembersSharingBoxPosition(
		boxName: (typeof this.COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS.communityMembersSharingBoxes)[number]['name'],
	): Promise<void> {
		await test.step(`Validate ${boxName} Box Position`, async () => {
			const box = findItemByProperty(
				this.COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS
					.communityMembersSharingBoxes,
				'name',
				boxName,
			)
			await this.validateText(box.img, box.position)
		})
	}

	async validateCommunityMembersSharingBoxContent(
		boxName: (typeof this.COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS.communityMembersSharingBoxes)[number]['name'],
	): Promise<void> {
		await test.step(`Validate ${boxName} Box Complete Content`, async () => {
			const box = findItemByProperty(
				this.COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS
					.communityMembersSharingBoxes,
				'name',
				boxName,
			)
			await this.validateVisibility(box.img)
			await this.validateText(box.img, box.position)
		})
	}
}
