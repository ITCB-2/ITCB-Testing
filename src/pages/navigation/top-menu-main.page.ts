import type {Page} from '@playwright/test'

export const topMenuMainPage = (page: Page) => {
	const navbar = page.locator('#navbarScroll')

	return {
		whyIstqb: {
			button: navbar.getByRole('button', {name: 'למה ®ISTQB?'}),
			decisionMakersSharingLink: navbar.getByRole('link', {
				name: 'מקבלי החלטות משתפים',
			}),
			membersOfCommunitySharingLink: navbar.getByRole('link', {
				name: 'חברי הקהילה משתפים',
			}),
			ourCertificationsLink: navbar.getByRole('link', {
				name: 'ההסמכות שלנו',
			}),
			howToPrepareToIstqbTestLink: navbar.getByRole('link', {
				name: 'איך להתכונן למבחן ISTQB®',
			}),
		},
		istqbContent: {
			button: navbar.getByRole('button', {name: 'תכני ®ISTQB'}),
			termsGlossaryLink: navbar.getByRole('link', {name: 'מילון מונחים'}),
			syllabusInfoLink: navbar.getByRole('link', {
				name: 'כל מה שרציתם לדעת על סילבוס CTFL',
			}),
		},
		testingInIsrael: {
			button: navbar.getByRole('button', {name: 'בדיקות בישראל'}),
			usefulLinksLink: navbar.getByRole('link', {name: 'קישורים שימושיים'}),
			itcbMagazineLink: navbar.getByRole('link', {
				name: 'מגזין "עולם הבדיקות"',
			}),
			podcastsLink: navbar.getByRole('link', {name: 'פודקאסטים'}),
			eventsSummariesLink: navbar.getByRole('link', {name: 'סיכומי אירועים'}),
			tipsLink: navbar.getByRole('link', {name: 'טיפים'}),
		},
		additionalInformation: {
			button: navbar.getByRole('button', {name: 'מידע נוסף'}),
			importantFactsLink: navbar.getByRole('link', {
				name: 'עובדות שחשוב שתדעו',
			}),
			questionsAndAnswersLink: navbar.getByRole('link', {
				name: 'שאלות ותשובות',
			}),
			internationalConferencesLink: navbar.getByRole('link', {
				name: 'כנסים בינלאומיים',
			}),
		},
		aboutItcb: {
			button: navbar.getByRole('button', {name: 'אודות ®ITCB'}),
			boardOfDirectorsLink: navbar.getByRole('link', {
				name: 'הוועד המנהל',
			}),
			advisoryBoardLink: navbar.getByRole('link', {name: 'הוועד המייעץ'}),
			ourPartnersLink: navbar.getByRole('link', {name: 'השותפים שלנו'}),
		},
	}
}
