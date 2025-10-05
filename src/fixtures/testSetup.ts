import {test as base} from '@playwright/test'
import {CommunityMembersSharingPage} from '../pages/content-pages/CommunityMembersSharingPage'
import {DecisionMakerPage} from '../pages/content-pages/DesicionMakerPage'
import {ImportantFactsPage} from '../pages/content-pages/ImportantFactsPage'
import {OurCertificationPage} from '../pages/content-pages/OurCertificationPage'
import {MainPage} from '../pages/main-content/MainPage'
import {SlidersMainPage} from '../pages/main-content/SlidersMainPage'
import {BottomMenuMainPage} from '../pages/navigation/BottomMenuMainPage'
import {TopMenuMainPage} from '../pages/navigation/TopMenuMainPage'
import type {PageFixtures} from '../types/fixtureTypes'

export const test = base.extend<PageFixtures>({
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
  importantFactsPage: async ({page}, use) => {
    await use(new ImportantFactsPage(page))
  },
  ourCertificationPage: async ({page}, use) => {
    await use(new OurCertificationPage(page))
  },
  decisionMakerPage: async ({page}, use) => {
    await use(new DecisionMakerPage(page))
  },
  communityMembersSharingPage: async ({page}, use) => {
    await use(new CommunityMembersSharingPage(page))
  },
})
