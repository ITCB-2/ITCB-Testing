import type {basePageFixtures} from '@netanelh2/playwright-framework'
import type {CommunityMembersSharingPage} from '../pages/content-pages/CommunityMembersSharingPage'
import type {DecisionMakerPage} from '../pages/content-pages/DesicionMakerPage'
import type {ImportantFactsPage} from '../pages/content-pages/ImportantFactsPage'
import type {OurCertificationPage} from '../pages/content-pages/OurCertificationPage'
import type {MainPage} from '../pages/main-content/MainPage'
import type {SlidersMainPage} from '../pages/main-content/SlidersMainPage'
import type {BottomMenuMainPage} from '../pages/navigation/BottomMenuMainPage'
import type {TopMenuMainPage} from '../pages/navigation/TopMenuMainPage'

export interface PageFixtures extends basePageFixtures {
	mainPage: MainPage
	topMenuMainPage: TopMenuMainPage
	bottomMenuMainPage: BottomMenuMainPage
	slidersMainPage: SlidersMainPage
	importantFactsPage: ImportantFactsPage
	ourCertificationPage: OurCertificationPage
	decisionMakerPage: DecisionMakerPage
	communityMembersSharingPage: CommunityMembersSharingPage
}
