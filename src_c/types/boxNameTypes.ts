import type {CommunityMembersSharingPage} from '../pages/content-pages/CommunityMembersSharingPage'
import type {DecisionMakerPage} from '../pages/content-pages/DesicionMakerPage'
import type {ImportantFactsPage} from '../pages/content-pages/ImportantFactsPage'
import type {OurCertificationPage} from '../pages/content-pages/OurCertificationPage'

export type CommunityMemberName =
	(typeof CommunityMembersSharingPage.communityMembersSharingBoxes)[number]['name']

export type DecisionMakerBoxName =
	(typeof DecisionMakerPage.decisionMakersSharingBoxes)[number]['name']

export type FactName = (typeof ImportantFactsPage.facts)[number]['name']

export type OurCertificationBoxName =
	(typeof OurCertificationPage.boxes)[number]['name']
