import { MainPage } from '@/pages/MainPage'
import {RegisterToTestPage} from '@/pages/RegisterToTestPage'
import type {BrowserContext, Page} from '@playwright/test'
import {test as base} from '@playwright/test'

interface PageFixtures {
  context: BrowserContext
  page: Page
  mainPage: MainPage
  registerToTestPage: RegisterToTestPage
}

const test = base.extend<PageFixtures>({
  context: async ({browser}, use) => {
    const context = await browser.newContext()
    await use(context)
    await context.close()
  },
  page: async ({context}, use) => {
    const page = await context.newPage()
    await use(page)
  },
  mainPage: async ({page}, use) => {
    await use(new MainPage(page))
  },
  
  registerToTestPage: async ({ page }, use) => {
    await use(new RegisterToTestPage(page))
  }

})

export default test
