import {
	BasePage,
	findItemByProperty,
	test,
} from '@netanelh2/playwright-framework'
import type {Page} from '@playwright/test'

export const COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS = {
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
			positionText: {
				role: 'text',
				name: 'מהנדסת בדיקות',
			},
		},
		{
			name: 'רזאן ביראני',
			img: {
				role: 'img',
				name: 'בודקת תוכנה ידני ומוסמכת ISTQB',
			},
			position: 'בודקת תוכנה ידני ומוסמכת ISTQB',
			positionText: {
				role: 'text',
				name: 'בודקת תוכנה ידני ומוסמכת ISTQB',
			},
		},
		{
			name: 'קובי יונסי',
			img: {
				role: 'img',
				name: 'מנהל בדיקות בעיריית ירושלים',
			},
			position: 'מנהל בדיקות בעיריית ירושלים',
			positionText: {
				role: 'text',
				name: 'מנהל בדיקות בעיריית ירושלים',
			},
		},
		{
			name: 'קטי טרכטמן',
			img: {
				role: 'img',
				name: 'Senior Software QA Lead',
			},
			position: 'Senior Software QA Lead',
			positionText: {
				role: 'text',
				name: 'Senior Software QA Lead',
			},
		},
		{
			name: 'מיכאל טיבין',
			img: {
				role: 'img',
				name: 'Director Engineering, Akamai Technologies',
			},
			position: 'Director Engineering, Akamai Technologies',
			positionText: {
				role: 'text',
				name: 'Director Engineering, Akamai Technologies',
			},
		},
		{
			name: 'מור אבזיז',
			img: {
				role: 'img',
				name: 'מנהלת בדיקות אוטומציה, קווליטסט',
			},
			position: 'מנהלת בדיקות אוטומציה, קווליטסט',
			positionText: {
				role: 'text',
				name: 'מנהלת בדיקות אוטומציה, קווליטסט',
			},
		},
		{
			name: 'עומר פיליפ',
			img: {
				role: 'img',
				name: 'Director, Quality & Operational Excellence',
			},
			position: 'Director, Quality & Operational Excellence',
			positionText: {
				role: 'text',
				name: 'Director, Quality & Operational Excellence',
			},
		},
	],
} as const

type CommunityMemberName =
	(typeof COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS.communityMembersSharingBoxes)[number]['name']

export class CommunityMembersSharingPage extends BasePage {
	constructor(page: Page) {
		super(page)
	}

	async validateLoaded(): Promise<void> {
		await test.step('Validate Community Members Sharing Page Loaded', async () => {
			const {pageTitle} = COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS
			await this.validateVisibility(pageTitle)
		})
	}

	async validateCommunityMembersSharingBoxImg(
		boxName: CommunityMemberName,
	): Promise<void> {
		await test.step(`Validate ${boxName} Box Image`, async () => {
			const box = findItemByProperty(
				COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS.communityMembersSharingBoxes,
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
				COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS.communityMembersSharingBoxes,
				'name',
				boxName,
			)
			await this.validateVisibility(box.positionText)
			await this.validateText(box.positionText, box.position)
		})
	}

	async validateCommunityMembersSharingBoxContent(
		boxName: CommunityMemberName,
	): Promise<void> {
		await test.step(`Validate ${boxName} Box Complete Content`, async () => {
			const box = findItemByProperty(
				COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS.communityMembersSharingBoxes,
				'name',
				boxName,
			)
			await this.validateVisibility(box.img)
			await this.validateVisibility(box.positionText)
			await this.validateText(box.positionText, box.position)
		})
	}

	async validateAllCommunityMembers(): Promise<void> {
		await test.step('Validate All Community Members', async () => {
			for (const member of COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS.communityMembersSharingBoxes) {
				await this.validateCommunityMembersSharingBoxContent(member.name)
			}
		})
	}

	getCommunityMemberNames(): CommunityMemberName[] {
		return COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS.communityMembersSharingBoxes.map(
			(member) => member.name,
		)
	}

	isCommunityMemberExists(memberName: string): boolean {
		return COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS.communityMembersSharingBoxes.some(
			(member) => member.name === memberName,
		)
	}
}
