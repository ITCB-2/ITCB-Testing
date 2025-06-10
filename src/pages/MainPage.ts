import {BasePage} from '@/core/BasePage'
import {BASE_URL} from '@/data/urls'
import {decisionMakersSharingLocators} from '@/locators/decisionMakersSharingLocators'
import {mainPageLocators} from '@/locators/mainPageLocators'
import {membersOfComunnitySharingLocators} from '@/locators/membersOfComunnitySharingLocators'
import {expect, type Page} from '@playwright/test'

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }
  async openMainPage(): Promise<void> {
    await this.page.goto(BASE_URL)
    await this.pressOkToCookies()
    await this.validateText(mainPageLocators.title, 'עובדות שחשוב שתדע')
  }

  async pressOkToCookies(): Promise<void> {
    await this.clickOnElement(mainPageLocators.acceptCookiesButton)
    await expect(
      this.extractLocator(mainPageLocators.acceptCookiesButton),
    ).not.toBeVisible()
  }

  async gotoDecisionMakersSharingPage(): Promise<void> {
    const {whyISTQB} = mainPageLocators.menuLinks
    await this.hoverOnElement(whyISTQB.button)
    await this.clickOnElement(whyISTQB.decisionMakersSharingLink)
    await this.validateText(
      decisionMakersSharingLocators.title,
      'מקבלי החלטות משתפים',
    )
  }

  async gotoMembersOfComunnitySharing(): Promise<void> {
    const {whyISTQB} = mainPageLocators.menuLinks
    await this.hoverOnElement(whyISTQB.membersOfComunnitySharingLink)
    await this.clickOnElement(whyISTQB.membersOfComunnitySharingLink)
    await this.validateText(
      membersOfComunnitySharingLocators.title,
      'חברי הקהילה משתפים',
    )
  }
}
