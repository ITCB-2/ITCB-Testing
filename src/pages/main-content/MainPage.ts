import {
	BasePage,
	findItemByProperty,
	test,
} from '@netanelh2/playwright-framework'
import {expect, type Page} from '@playwright/test'
import {BASE_URL} from '../../data/urls'
import {ImportantFactsPage} from '../content-pages/ImportantFactsPage'
import {OurCertificationPage} from '../content-pages/OurCertificationPage'

export class MainPage extends BasePage {
	// ✅ Class variables ישירים - לא בתוך אובייקט
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
		super(page)
	}

	async openMainPage(): Promise<void> {
		await test.step('Open Main Page', async () => {
			await this.page.goto(BASE_URL)
			await this.pressOkToCookies()
			await this.validateText(MainPage.importantFactsTitle, 'עובדות שחשוב שתדע')
		})
	}

	async pressOkToCookies(): Promise<void> {
		await test.step('Accept Cookies', async () => {
			await this.clickOnElement(MainPage.acceptCookiesButton)
			await expect(
				this.extractLocator(MainPage.acceptCookiesButton),
			).not.toBeVisible()
		})
	}

	async validateContactOnMainPage(): Promise<void> {
		await test.step('Validate Contact on Main Page', async () => {
			await this.validateVisibility(MainPage.allFactsLink)
			await this.validateVisibility(MainPage.ITCBLogo)
			await this.validateText(MainPage.ourCertificationsTitle, 'ההסמכות שלנו')
			await this.validateVisibility(MainPage.allCertificationsLink)
			await this.validateText(
				MainPage.decisionMakersSharingTitle,
				'מקבלי ההחלטות משתפים',
			)
		})
	}

	async clickOnAllFactsButton(): Promise<void> {
		await test.step('Click on All Facts Button and Validate Facts Page Content', async () => {
			await this.clickOnElement(MainPage.allFactsLink)
			await this.validateText(ImportantFactsPage.title, 'עובדות שחשוב שתדעו')
		})
	}

	async clickOnViewAllCertificationsButton(): Promise<void> {
		await test.step('Click on View All Certifications Button', async () => {
			await this.clickOnElement(MainPage.allCertificationsLink)
		})
	}

	async clickOnReadMoreButton(boxName: OurCertificationBoxName): Promise<void> {
		await test.step(`Click on ${boxName} Read More Button `, async () => {
			const box = findItemByProperty(
				OurCertificationPage.boxes,
				'name',
				boxName,
			)
			await this.clickOnElement(box.readMoreButton)
		})
	}

	async clickOnDecisionMakersSharingButton(): Promise<void> {
		await test.step('Click on Decision Makers Sharing Button', async () => {
			await this.clickOnElement(MainPage.decisionMakersSharingLink)
		})
	}

	async clickOnCommunityMembersSharingButton(): Promise<void> {
		await test.step('Click on Community Members Sharing Button', async () => {
			await this.clickOnElement(MainPage.communityMembersSharingLink)
		})
	}
}

// הטיפוס נגזר מהקלאס ✅
type OurCertificationBoxName =
	(typeof OurCertificationPage.boxes)[number]['name']
