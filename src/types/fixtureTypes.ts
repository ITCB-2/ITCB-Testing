import type {BrowserContext, Page} from '@playwright/test'
import type {BottomMenuMainPage} from '../pages/BottomMenuMainPage'
import type {CommunityMembersSharingPage} from '../pages/CommunityMembersSharingPage'
import type {DecisionMakerPage} from '../pages/DesicionMakerPage'
import type {ImportantFactsPage} from '../pages/ImportantFactsPage'
import type {MainPage} from '../pages/MainPage'
import type {OurCertificationPage} from '../pages/OurCertificationPage'
import type {SlidersMainPage} from '../pages/SlidersMainPage'
import type {TopMenuMainPage} from '../pages/TopMenuMainPage'

export interface PageFixtures {
  context: BrowserContext
  page: Page
  mainPage: MainPage
  topMenuMainPage: TopMenuMainPage
  bottomMenuMainPage: BottomMenuMainPage
  slidersMainPage: SlidersMainPage
  importantFactsPage: ImportantFactsPage
  ourCertificationPage: OurCertificationPage
  decisionMakerPage: DecisionMakerPage
  communityMembersSharingPage: CommunityMembersSharingPage
}
