import {BasePage} from '@/core/BasePage'
import {BASE_URL} from '@/data/urls'
import test from '@/fixtures/testSetup'
import {IMPORTANT_FACTS_PAGE_LOCATORS} from '@/locators/Important_Facts'
import {MAIN_PAGE_LOCATORS} from '@/locators/Main_Page'
import {OUR_CERTIFICATIONS_PAGE_LOCATOR} from '@/locators/Our_Certification'
import {expect, type Page} from '@playwright/test'

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }
  async openMainPage(): Promise<void> {
    await test.step('Open Main Page', async () => {
      const {importantFactsTitle} = MAIN_PAGE_LOCATORS.importantFactsSection
      await this.page.goto(BASE_URL)
      await this.pressOkToCookies()
      await this.validateText(importantFactsTitle, 'עובדות שחשוב שתדע')
    })
  }

  async pressOkToCookies(): Promise<void> {
    await test.step('Accept Cookies', async () => {
      await this.clickOnElement(MAIN_PAGE_LOCATORS.acceptCookiesButton)
      await expect(
        this.extractLocator(MAIN_PAGE_LOCATORS.acceptCookiesButton),
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
      await this.validateVisibility(allFactsLink)
      await this.validateVisibility(ITCBLogo)
      await this.validateText(ourCertificationsTitle, 'ההסמכות שלנו')
      await this.validateVisibility(allCertificationsLink)
      await this.validateText(
        decisionMakersSharingTitle,
        'מקבלי ההחלטות משתפים',
      )
    })
  }

  async clickOnAllFactsButton(): Promise<void> {
    await test.step('Click on All Facts Button and Validate Facts Page Content', async () => {
      const {allFactsLink} = MAIN_PAGE_LOCATORS.importantFactsSection
      await this.clickOnElement(allFactsLink)
      const {title} = IMPORTANT_FACTS_PAGE_LOCATORS
      await this.validateText(title, 'עובדות שחשוב שתדעו')
    })
  }
  async clickOnViewAllCertificationsButton(): Promise<void> {
    await test.step('Click on View All Certifications Button', async () => {
      const {allCertificationsLink} =
        MAIN_PAGE_LOCATORS.ourCertificationsSection

      await this.clickOnElement(allCertificationsLink)
    })
  }

  async clickOnReadMoreButton(boxName: string): Promise<void> {
    await test.step(`Click on ${boxName} Read More Button `, async () => {
      const box = OUR_CERTIFICATIONS_PAGE_LOCATOR.boxes.find(
        (b) => b.name === boxName,
      )
      if (!box) {
        throw new Error(`Box with name "${boxName}" not found`)
      }
      await this.clickOnElement(box.readMoreButton)
    })
  }

  async clickOnDecisionMakersSharingButton(): Promise<void> {
    await test.step('Click on Decision Makers Sharing Button', async () => {
      const {decisionMakersSharingLink} =
        MAIN_PAGE_LOCATORS.decisionMakersSharingSection

      await this.clickOnElement(decisionMakersSharingLink)
    })
  }
  async clickOnCommunityMembersSharingButton(): Promise<void> {
    await test.step('Click on Community Members Sharing Button', async () => {
      const {communityMembersSharingLink} =
        MAIN_PAGE_LOCATORS.communityMembersSharingSection

      await this.clickOnElement(communityMembersSharingLink)
    })
  }
}
