import {test as base, type BrowserContext, type Page} from '@playwright/test'

interface PageFixtures {
  context: BrowserContext
  page: Page
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
})

export default test
