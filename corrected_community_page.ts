import {
	BasePage,
	findItemByProperty,
	test,
} from '@netanelh2/playwright-framework'
import type {Page} from '@playwright/test'

type CommunityMemberName =
	| 'הילה קדוש'
	| 'רזאן ביראני'
	| 'קובי יונסי'
	| 'קטי טרכטמן'
	| 'מיכאל טיבין'
	| 'מור אבזיז'
	| 'עומר פיליפ'

export class CommunityMembersSharingPage extends BasePage {
	private readonly pageTitle = {
		role: 'heading' as const,
		name: 'חברי הקהילה משתפים',
	}

	private readonly communityMembers = [
		{
			name: 'הילה קדוש' as const,
			img: {
				role: 'img' as const,
				name: 'מהנדסת בדיקות',
			},
			position: 'מהנדסת בדיקות',
			positionText: {
				role: 'text' as const,
				name: 'מהנדסת בדיקות',
			},
		},
		{
			name: 'רזאן ביראני' as const,
			img: {
				role: 'img' as const,
				name: 'בודקת תוכנה ידני ומוסמכת ISTQB',
			},
			position: 'בודקת תוכנה ידני ומוסמכת ISTQB',
			positionText: {
				role: 'text' as const,
				name: 'בודקת תוכנה ידני ומוסמכת ISTQB',
			},
		},
		{
			name: 'קובי יונסי' as const,
			img: {
				role: 'img' as const,
				name: 'מנהל בדיקות בעיריית ירושלים',
			},
			position: 'מנהל בדיקות בעיריית ירושלים',
			positionText: {
				role: 'text' as const,
				name: 'מנהל בדיקות בעיריית ירושלים',
			},
		},
		{
			name: 'קטי טרכטמן' as const,
			img: {
				role: 'img' as const,
				name: 'Senior Software QA Lead',
			},
			position: 'Senior Software QA Lead',
			positionText: {
				role: 'text' as const,
				name: 'Senior Software QA Lead',
			},
		},
		{
			name: 'מיכאל טיבין' as const,
			img: {
				role: 'img' as const,
				name: 'Director Engineering, Akamai Technologies',
			},
			position: 'Director Engineering, Akamai Technologies',
			positionText: {
				role: 'text' as const,
				name: 'Director Engineering, Akamai Technologies',
			},
		},
		{
			name: 'מור אבזיז' as const,
			img: {
				role: 'img' as const,
				name: 'מנהלת בדיקות אוטומציה, קווליטסט',
			},
			position: 'מנהלת בדיקות אוטומציה, קווליטסט',
			positionText: {
				role: 'text' as const,
				name: 'מנהלת בדיקות אוטומציה, קווליטסט',
			},
		},
		{
			name: 'עומר פיליפ' as const,
			img: {
				role: 'img' as const,
				name: 'Director, Quality & Operational Excellence',
			},
			position: 'Director, Quality & Operational Excellence',
			positionText: {
				role: 'text' as const,
				name: 'Director, Quality & Operational Excellence',
			},
		},
	] as const

	constructor(page: Page) {
		super(page)
	}

	async validateLoaded(): Promise<void> {
		await test.step('Validate Community Members Sharing Page Loaded', async () => {
			await this.validateVisibility(this.pageTitle)
		})
	}

	async validateCommunityMembersSharingBoxImg(
		boxName: CommunityMemberName,
	): Promise<void> {
		await test.step(`Validate ${boxName} Box Image`, async () => {
			const box = findItemByProperty(this.communityMembers, 'name', boxName)
			await this.validateVisibility(box.img)
		})
	}

	async validateCommunityMembersSharingBoxPosition(
		boxName: CommunityMemberName,
	): Promise<void> {
		await test.step(`Validate ${boxName} Box Position`, async () => {
			const box = findItemByProperty(this.communityMembers, 'name', boxName)
			await this.validateVisibility(box.positionText)
			await this.validateText(box.positionText, box.position)
		})
	}

	async validateCommunityMembersSharingBoxContent(
		boxName: CommunityMemberName,
	): Promise<void> {
		await test.step(`Validate ${boxName} Box Complete Content`, async () => {
			const box = findItemByProperty(this.communityMembers, 'name', boxName)
			await this.validateVisibility(box.img)
			await this.validateVisibility(box.positionText)
			await this.validateText(box.positionText, box.position)
		})
	}

	async validateAllCommunityMembers(): Promise<void> {
		await test.step('Validate All Community Members', async () => {
			for (const member of this.communityMembers) {
				await this.validateCommunityMembersSharingBoxContent(member.name)
			}
		})
	}

	getCommunityMemberNames(): CommunityMemberName[] {
		return this.communityMembers.map((member) => member.name)
	}

	isCommunityMemberExists(memberName: string): boolean {
		return this.communityMembers.some((member) => member.name === memberName)
	}

	getCommunityMember(memberName: CommunityMemberName) {
		return findItemByProperty(this.communityMembers, 'name', memberName)
	}
}
