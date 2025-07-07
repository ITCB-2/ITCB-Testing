import {BasePage} from '@/core/BasePage'
import {BASE_URL} from '@/data/urls'
import test from '@/fixtures/testSetup'
import {MAIN_PAGE_LOCATORS} from '@/locators/Main_Page'
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
}
