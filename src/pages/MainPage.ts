import {BasePage} from '@/core/BasePage'
import {BASE_URL} from '@/data/urls'
import test from '@/fixtures/testSetup'
import {DECISION_MAKERS_SHARING_PAGE_LOCATORS} from '@/locators/Decision_Makers_Sharing'
import {MAIN_PAGE_LOCATORS} from '@/locators/Main_Page'
import {MEMBERS_OF_COMMUNITY_SHARING_PAGE_LOCATORS} from '@/locators/Members_Of_Comunnity_Sharing'
import {expect, type Page} from '@playwright/test'

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }
  async openMainPage(): Promise<void> {
    await test.step('Open Main Page', async () => {
      await this.page.goto(BASE_URL)
      await this.pressOkToCookies()
      await this.validateText(MAIN_PAGE_LOCATORS.title, 'עובדות שחשוב שתדע')
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

  async navigateToDecisionMakersSharingPage(): Promise<void> {
    await test.step('Navigate to Decision Makers Sharing Page', async () => {
      const {button, decisionMakersSharingLink} =
        MAIN_PAGE_LOCATORS.menuLinks.whyISTQB
      const {title} = DECISION_MAKERS_SHARING_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.validateVisibility(decisionMakersSharingLink)
      await this.clickOnElement(decisionMakersSharingLink)
      // Wait for the section to be visible after scrolling
      await this.validateText(title, 'מקבלי ההחלטות משתפים')
    })
  }

  async navigateTOMembersOfComunnitySharingPage(): Promise<void> {
    await test.step('Navigate to Members of Community Sharing Page', async () => {
      const {button, membersOfComunnitySharingLink} =
        MAIN_PAGE_LOCATORS.menuLinks.whyISTQB
      const {title} = MEMBERS_OF_COMMUNITY_SHARING_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.clickOnElement(membersOfComunnitySharingLink)
      // Wait for the section to be visible after scrolling
      await this.validateText(title, 'חברי הקהילה משתפים')
    })
  }
}
