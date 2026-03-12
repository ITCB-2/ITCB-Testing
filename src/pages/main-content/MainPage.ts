import {expect, type Page, test} from '@playwright/test'
import {BASE_URL} from '../../data/urls'
import type {OurCertificationBoxName} from '../../types/boxNameTypes'
import {ImportantFactsPage} from '../content-pages/ImportantFactsPage'
import {OurCertificationPage} from '../content-pages/OurCertificationPage'

export class MainPage {
	protected page: Page

	public static readonly ITCBLogo = {
		role: 'img',
		name: 'Logo',
	} as const

	public static readonly acceptCookiesButton = {
		role: 'button',
		name: 'הבנתי!',
	} as const

	public static readonly importantFactsTitle = {
		role: 'heading',
		name: 'עובדות שחשוב שתדע',
	} as const

	public static readonly allFactsLink = {
		role: 'link',
		name: 'לכל העובדות',
	} as const

	public static readonly ourCertificationsTitle = {
		role: 'heading',
		name: 'ההסמכות שלנו, הקריירה שלך',
	} as const

	public static readonly allCertificationsLink = {
		role: 'link',
		name: 'לכל ההסמכות',
	} as const

	public static readonly decisionMakersSharingTitle = {
		role: 'heading',
		name: 'מקבלי ההחלטות משתפים',
	} as const

	public static readonly decisionMakersSharingLink =
		'a[href*="recommendations"][href*="type=1"]:not(footer a):not(nav a)' as const

	public static readonly communityMembersSharingTitle = {
		role: 'heading',
		name: 'חברי הקהילה משתפים',
	} as const

	public static readonly communityMembersSharingLink =
		'a[href*="recommendations"][href*="type=0"]:not(footer a):not(nav a)' as const

	constructor(page: Page) {
		this.page = page
	}

	async openMainPage(): Promise<void> {
		await test.step('Open Main Page', async () => {
			await this.page.goto(BASE_URL)
			await this.pressOkToCookies()
			await expect(
				this.page.getByRole(MainPage.importantFactsTitle.role, {
					name: MainPage.importantFactsTitle.name,
				}),
			).toBeVisible()
		})
	}

	async pressOkToCookies(): Promise<void> {
		await test.step('Accept Cookies', async () => {
			await this.page
				.getByRole(MainPage.acceptCookiesButton.role, {
					name: MainPage.acceptCookiesButton.name,
				})
				.click()
			await expect(
				this.page.getByRole(MainPage.acceptCookiesButton.role, {
					name: MainPage.acceptCookiesButton.name,
				}),
			).not.toBeVisible()
		})
	}

	async validateContactOnMainPage(): Promise<void> {
		await test.step('Validate Contact on Main Page', async () => {
			await expect(
				this.page.getByRole(MainPage.allFactsLink.role, {
					name: MainPage.allFactsLink.name,
				}),
			).toBeVisible()
			await expect(
				this.page.getByRole(MainPage.ITCBLogo.role, {
					name: MainPage.ITCBLogo.name,
				}),
			).toBeVisible()
			await expect(
				this.page.getByRole(MainPage.ourCertificationsTitle.role, {
					name: MainPage.ourCertificationsTitle.name,
				}),
			).toContainText('ההסמכות שלנו')
			await expect(
				this.page.getByRole(MainPage.allCertificationsLink.role, {
					name: MainPage.allCertificationsLink.name,
				}),
			).toBeVisible()
			await expect(
				this.page.getByRole(MainPage.decisionMakersSharingTitle.role, {
					name: MainPage.decisionMakersSharingTitle.name,
				}),
			).toContainText('מקבלי ההחלטות משתפים')
		})
	}

	async clickOnAllFactsButton(): Promise<void> {
		await test.step('Click on All Facts Button and Validate Facts Page Content', async () => {
			await this.page
				.getByRole(MainPage.allFactsLink.role, {
					name: MainPage.allFactsLink.name,
				})
				.click()
			await expect(
				this.page.getByRole(ImportantFactsPage.title.role, {
					name: ImportantFactsPage.title.name,
				}),
			).toContainText('עובדות שחשוב שתדעו')
		})
	}

	async clickOnViewAllCertificationsButton(): Promise<void> {
		await test.step('Click on View All Certifications Button', async () => {
			await this.page
				.getByRole(MainPage.allCertificationsLink.role, {
					name: MainPage.allCertificationsLink.name,
				})
				.click()
		})
	}

	async clickOnReadMoreButton(boxName: OurCertificationBoxName): Promise<void> {
		await test.step(`Click on ${boxName} Read More Button `, async () => {
			const box = OurCertificationPage.boxes.find((b) => b.name === boxName)
			if (!box) throw new Error(`Box not found: ${boxName}`)
			await this.page.locator(box.readMoreButton).click()
		})
	}

	async clickOnDecisionMakersSharingButton(): Promise<void> {
		await test.step('Click on Decision Makers Sharing Button', async () => {
			await this.page.locator(MainPage.decisionMakersSharingLink).click()
		})
	}

	async clickOnCommunityMembersSharingButton(): Promise<void> {
		await test.step('Click on Community Members Sharing Button', async () => {
			await this.page.locator(MainPage.communityMembersSharingLink).click()
		})
	}
}
