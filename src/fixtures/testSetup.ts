import {BottomMenuMainPage} from '@/pages/BottomMenuMainPage'
import {CommunityMembersSharingPage} from '@/pages/CommunityMembersSharingPage'
import {DecisionMakerPage} from '@/pages/DesicionMakerPage'
import {ImportantFactsPage} from '@/pages/ImportantFactsPage'
import {MainPage} from '@/pages/MainPage'
import {OurCertificationPage} from '@/pages/OurCertificationPage'
import {SlidersMainPage} from '@/pages/SlidersMainPage'
import {TopMenuMainPage} from '@/pages/TopMenuMainPage'
import type {PageFixtures} from '@/types'
import {test as base} from '@playwright/test'

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
