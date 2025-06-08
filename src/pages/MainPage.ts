import {BasePage} from '@/core/BasePage'
import {BASE_URL} from '@/data/urls'
import {mainPageLocators} from '@/locators/mainPageLocators'
import {type Page} from '@playwright/test'

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }
  async openMainPage(): Promise<void> {
    await this.page.goto(BASE_URL)
    await this.validateText(
      mainPageLocators.importantFactsTitle,
      'עובדות שחשוב שתדע',
    )
  }
}
