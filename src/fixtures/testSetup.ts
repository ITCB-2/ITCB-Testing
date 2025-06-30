import {MainPage} from '@/pages/MainPage'
import {test as base, type BrowserContext, type Page} from '@playwright/test'

interface PageFixtures {
  context: BrowserContext
  page: Page
  mainPage: MainPage
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
})

export default test
