import {expect, type Page, test} from '@playwright/test'
import {BASE_URL} from '../../data/urls'
import {IMPORTANT_FACTS_PAGE_LOCATORS} from '../../locators/content-pages/Important_Facts'
import {OUR_CERTIFICATIONS_PAGE_LOCATOR} from '../../locators/content-pages/Our_Certification'
import {MAIN_PAGE_LOCATORS} from '../../locators/main-content/Main_Page'

type OurCertificationBoxName =
	(typeof OUR_CERTIFICATIONS_PAGE_LOCATOR.boxes)[number]['name']

export class MainPage {
	protected page: Page

	constructor(page: Page) {
		this.page = page
	}

	async openMainPage(): Promise<void> {
		await test.step('Open Main Page', async () => {
			const {importantFactsTitle} = MAIN_PAGE_LOCATORS.importantFactsSection
			await this.page.goto(BASE_URL)
			await this.pressOkToCookies()
			await expect(
				this.page.getByRole(importantFactsTitle.role, {
					name: importantFactsTitle.name,
				}),
			).toContainText('עובדות שחשוב שתדע')
		})
	}

	async pressOkToCookies(): Promise<void> {
		await test.step('Accept Cookies', async () => {
			const {acceptCookiesButton} = MAIN_PAGE_LOCATORS
			await this.page
				.getByRole(acceptCookiesButton.role, {
					name: acceptCookiesButton.name,
				})
				.click()
			await expect(
				this.page.getByRole(acceptCookiesButton.role, {
					name: acceptCookiesButton.name,
				}),
			).not.toBeVisible()
		})
	}

	async validateContactOnMainPage(): Promise<void> {
		await test.step('Validate Contact on Main Page', async () => {
			const {ITCBLogo} = MAIN_PAGE_LOCATORS
			const {allFactsLink} = MAIN_PAGE_LOCATORS.importantFactsSection
			const {ourCertificationsTitle, allCertificationsLink} =
				MAIN_PAGE_LOCATORS.ourCertificationsSection
			const {decisionMakersSharingTitle} =
				MAIN_PAGE_LOCATORS.decisionMakersSharingSection
			await expect(
				this.page.getByRole(allFactsLink.role, {name: allFactsLink.name}),
			).toBeVisible()
			await expect(
				this.page.getByRole(ITCBLogo.role, {name: ITCBLogo.name}),
			).toBeVisible()
			await expect(
				this.page.getByRole(ourCertificationsTitle.role, {
					name: ourCertificationsTitle.name,
				}),
			).toContainText('ההסמכות שלנו')
			await expect(
				this.page.getByRole(allCertificationsLink.role, {
					name: allCertificationsLink.name,
				}),
			).toBeVisible()
			await expect(
				this.page.getByRole(decisionMakersSharingTitle.role, {
					name: decisionMakersSharingTitle.name,
				}),
			).toContainText('מקבלי ההחלטות משתפים')
		})
	}

	async clickOnAllFactsButton(): Promise<void> {
		await test.step('Click on All Facts Button and Validate Facts Page Content', async () => {
			const {allFactsLink} = MAIN_PAGE_LOCATORS.importantFactsSection
			const {title} = IMPORTANT_FACTS_PAGE_LOCATORS
			await this.page
				.getByRole(allFactsLink.role, {name: allFactsLink.name})
				.click()
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('עובדות שחשוב שתדעו')
		})
	}

	async clickOnViewAllCertificationsButton(): Promise<void> {
		await test.step('Click on View All Certifications Button', async () => {
			const {allCertificationsLink} =
				MAIN_PAGE_LOCATORS.ourCertificationsSection
			await this.page
				.getByRole(allCertificationsLink.role, {
					name: allCertificationsLink.name,
				})
				.click()
		})
	}

	async clickOnReadMoreButton(boxName: OurCertificationBoxName): Promise<void> {
		await test.step(`Click on ${boxName} Read More Button `, async () => {
			const box = OUR_CERTIFICATIONS_PAGE_LOCATOR.boxes.find(
				(b) => b.name === boxName,
			)
			if (!box) throw new Error(`Box not found: ${boxName}`)
			await this.page.locator(box.readMoreButton).click()
		})
	}

	async clickOnDecisionMakersSharingButton(): Promise<void> {
		await test.step('Click on Decision Makers Sharing Button', async () => {
			const {decisionMakersSharingLink} =
				MAIN_PAGE_LOCATORS.decisionMakersSharingSection
			await this.page.locator(decisionMakersSharingLink).click()
		})
	}

	async clickOnCommunityMembersSharingButton(): Promise<void> {
		await test.step('Click on Community Members Sharing Button', async () => {
			const {communityMembersSharingLink} =
				MAIN_PAGE_LOCATORS.communityMembersSharingSection
			await this.page.locator(communityMembersSharingLink).click()
		})
	}
}
