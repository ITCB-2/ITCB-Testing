import {BasePage} from '@/core/BasePage'
import {BASE_URL} from '@/data/urls'
import {type Page} from '@playwright/test'

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }
  async openMainPage(): Promise<void> {
    await this.page.goto(BASE_URL)
    //! I need to Assert עובדות שחשוב שתדע title in the main page with validateText method
  }
}
