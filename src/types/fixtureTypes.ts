import type {BrowserContext, Page} from '@playwright/test'
import type {CommunityMembersSharingPage} from '../pages/content-pages/CommunityMembersSharingPage'
import type {DecisionMakerPage} from '../pages/content-pages/DesicionMakerPage'
import type {ImportantFactsPage} from '../pages/content-pages/ImportantFactsPage'
import type {OurCertificationPage} from '../pages/content-pages/OurCertificationPage'
import type {MainPage} from '../pages/main-content/MainPage'
import type {SlidersMainPage} from '../pages/main-content/SlidersMainPage'
import type {BottomMenuMainPage} from '../pages/navigation/BottomMenuMainPage'
import type {TopMenuMainPage} from '../pages/navigation/TopMenuMainPage'

export type BaseFixtures = {
	context: BrowserContext
	page: Page
}

export interface PageFixtures extends BaseFixtures {
	mainPage: MainPage
	topMenuMainPage: TopMenuMainPage
	bottomMenuMainPage: BottomMenuMainPage
	slidersMainPage: SlidersMainPage
	importantFactsPage: ImportantFactsPage
	ourCertificationPage: OurCertificationPage
	decisionMakerPage: DecisionMakerPage
	communityMembersSharingPage: CommunityMembersSharingPage
}
