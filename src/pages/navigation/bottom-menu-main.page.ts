import type {Page} from '@playwright/test'

export const bottomMenuMainPage = (page: Page) => {
	const footer = page.locator('footer')

	return {
		whyIstqb: {
			decisionMakersSharingLink: footer.getByRole('link', {
				name: 'מקבלי החלטות משתפים',
			}),
			membersOfCommunitySharingLink: footer.getByRole('link', {
				name: 'חברי הקהילה משתפים',
			}),
			ourCertificationsLink: footer.getByRole('link', {
				name: 'ההסמכות שלנו',
			}),
			howToPrepareToIstqbTestLink: footer.getByRole('link', {
				name: 'איך להתכונן למבחן ISTQB®',
			}),
		},
		istqbContent: {
			termsGlossaryLink: footer.getByRole('link', {name: 'מילון מונחים'}),
			syllabusInfoLink: footer.getByRole('link', {
				name: 'כל מה שרציתם לדעת על סילבוס CTFL',
			}),
		},
		testingInIsrael: {
			usefulLinksLink: footer.getByRole('link', {name: 'קישורים שימושיים'}),
			itcbMagazineLink: footer.getByRole('link', {
				name: 'מגזין "עולם הבדיקות"',
			}),
			podcastsLink: footer.getByRole('link', {name: 'פודקאסטים'}),
			eventsSummariesLink: footer.getByRole('link', {name: 'סיכומי אירועים'}),
			tipsLink: footer.getByRole('link', {name: 'טיפים'}),
		},
		additionalInformation: {
			importantFactsLink: footer.getByRole('link', {
				name: 'עובדות שחשוב שתדעו',
			}),
			questionsAndAnswersLink: footer.getByRole('link', {
				name: 'שאלות ותשובות',
			}),
			internationalConferencesLink: footer.getByRole('link', {
				name: 'כנסים בינלאומיים',
			}),
		},
		aboutItcb: {
			aboutUsLink: footer.getByRole('link', {name: 'קצת עלינו'}),
			boardOfDirectorsLink: footer.getByRole('link', {
				name: 'הוועד המנהל',
			}),
			advisoryBoardLink: footer.getByRole('link', {name: 'הוועד המייעץ'}),
			ourPartnersLink: footer.getByRole('link', {name: 'השותפים שלנו'}),
		},
	}
}
