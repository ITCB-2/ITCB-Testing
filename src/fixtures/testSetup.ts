import {MainPage} from '@/pages/MainPage'
import {TopMenuMainPage} from '@/pages/TopMenuMainPage'
import {BottomMenuMainPage} from '../pages/BottomMenuMainPage'
import {SlidersMainPage} from '../pages/SlidersMainPage'
import {test as base, type BrowserContext, type Page} from '@playwright/test'

interface PageFixtures {
  context: BrowserContext
  page: Page
  mainPage: MainPage
  topMenuMainPage: TopMenuMainPage
  bottomMenuMainPage: BottomMenuMainPage
  slidersMainPage: SlidersMainPage
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
  topMenuMainPage: async ({page}, use) => {
    await use(new TopMenuMainPage(page))
  },
  bottomMenuMainPage: async ({page}, use) => {
    await use(new BottomMenuMainPage(page))
  },
  slidersMainPage: async ({page}, use) => {
    await use(new SlidersMainPage(page))
  },
})

export default test
