import {test} from '@netanelh2/playwright-framework'
import type {Page} from '@playwright/test'
import {MainPage} from '../main-content/MainPage'

export class TopMenuMainPage extends MainPage {
	public static readonly menuLocators = {
		whyISTQB: {
			button: {
				parent: '#navbarScroll',
				role: 'button' as const,
				name: 'למה ®ISTQB?',
			},
			decisionMakersSharingLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'מקבלי החלטות משתפים',
			},
			membersOfCommunitySharingLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'חברי הקהילה משתפים',
			},
			ourCertificationsLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'ההסמכות שלנו',
			},
			howToPrepareToISTQBTestLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'איך להתכונן למבחן ISTQB®',
			},
		},
		ISTQBContent: {
			button: {
				parent: '#navbarScroll',
				role: 'button' as const,
				name: 'תכני ®ISTQB',
			},
			termsGlossaryLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'מילון מונחים',
			},
			syllabusInfoLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'כל מה שרציתם לדעת על סילבוס CTFL',
			},
		},
		testingInIsrael: {
			button: {
				parent: '#navbarScroll',
				role: 'button' as const,
				name: 'בדיקות בישראל',
			},
			usefulLinksLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'קישורים שימושיים',
			},
			ITCBMagazineLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'מגזין "עולם הבדיקות"',
			},
			podcastsLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'פודקאסטים',
			},
			eventsSummariesLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'סיכומי אירועים',
			},
			tipsLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'טיפים',
			},
		},
		additionalInformation: {
			button: {
				parent: '#navbarScroll',
				role: 'button' as const,
				name: 'מידע נוסף',
			},
			importantFactsLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'עובדות שחשוב שתדעו',
			},
			questionsAndAnswersLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'שאלות ותשובות',
			},
			internationalConferencesLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'כנסים בינלאומיים',
			},
		},
		aboutITCB: {
			button: {
				parent: '#navbarScroll',
				role: 'button' as const,
				name: 'אודות ®ITCB',
			},
			boardOfDirectorsLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'הוועד המנהל',
			},
			advisoryBoardLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'הוועד המייעץ',
			},
			ourPartnersLink: {
				parent: '#navbarScroll',
				role: 'link' as const,
				name: 'השותפים שלנו',
			},
		},
	} as const

	public static readonly aboutUsPageLocators = {
		mainTitle: {role: 'heading' as const, name: 'אודות ®ITCB'},
		boardOfDirectorsTitle: {role: 'heading' as const, name: 'הוועד המנהל'},
		advisoryBoardSection: {
			advisoryBoardTitle: {role: 'heading' as const, name: 'הוועד המייעץ'},
			michalTalTitle: {role: 'heading' as const, name: 'מיכל טל'},
		},
	} as const

	public static readonly decisionMakersSharingPageLocators = {
		title: {role: 'heading' as const, name: 'מקבלי ההחלטות משתפים'},
	} as const

	public static readonly eventsSummariesPageLocators = {
		title: {role: 'heading' as const, name: 'סיכומי אירועים'},
	} as const

	public static readonly howToPrepareToIstqbPageLocator = {
		title: {role: 'heading' as const, name: 'איך להתכונן למבחן ISTQB'},
	} as const

	public static readonly importantFactsPageLocators = {
		title: {role: 'heading' as const, name: 'עובדות שחשוב שתדעו'},
	} as const

	public static readonly internationalConferencesPageLocators = {
		title: {role: 'heading' as const, name: 'כנסים בינלאומיים'},
	} as const

	public static readonly itcbMagazinePageLocators = {
		viewAllMagazineIssuesLink: {
			role: 'link' as const,
			name: 'הצג את כל גליונות המגזין',
		},
	} as const

	public static readonly membersOfCommunitySharingPageLocators = {
		title: {role: 'heading' as const, name: 'חברי הקהילה משתפים'},
	} as const

	public static readonly ourCertificationsPageLocator = {
		title: {role: 'heading' as const, name: 'ההסמכות שלנו, הקריירה שלך'},
	} as const

	public static readonly ourPartnersPageLocators = {
		title: {role: 'heading' as const, name: 'מרכזי הדרכה מוסמכים'},
	} as const

	public static readonly podcastsPageLocators = {
		officialPodcastLink: {
			role: 'link' as const,
			name: 'דף הפודקאסט הרישמי שלנו',
		},
	} as const

	public static readonly questionsAndAnswersPageLocators = {
		title: {role: 'heading' as const, name: 'שאלות ותשובות'},
	} as const

	public static readonly syllabusInfoPageLocators = {
		title: {
			role: 'heading' as const,
			name: 'כל מה שרציתם לדעת על סילבוס CTFL 4.0',
		},
	} as const

	public static readonly termsGlossaryPageLocators = {
		ISTQBGlossaryAdvancedSearchTitle: {
			role: 'heading' as const,
			name: 'מילון המונחים של ISTQB - תכונות חיפוש מתקדמות',
		},
	} as const

	public static readonly tipsPageLocators = {
		title: {
			role: 'heading' as const,
			name: 'טיפים לבודקי תכנה - כאן תמצאו טיפים שנכתבו ע"י חברי קהילת הבדיקות בישראל בכדי לח',
		},
	} as const

	public static readonly usefulLinksLocators = {
		title: {role: 'heading' as const, name: 'קישורים שימושיים'},
	} as const

	constructor(page: Page) {
		super(page)
	}

	async navigateToDecisionMakersSharingPage(): Promise<void> {
		await test.step('Navigate to Decision Makers Sharing Page', async () => {
			const {button, decisionMakersSharingLink} =
				TopMenuMainPage.menuLocators.whyISTQB
			const {title} = TopMenuMainPage.decisionMakersSharingPageLocators
			await this.hoverOnElement(button)
			await this.validateVisibility(decisionMakersSharingLink)
			await this.clickOnElement(decisionMakersSharingLink)

			await this.validateText(title, 'מקבלי ההחלטות משתפים')
		})
	}
	async navigateTOMembersOfCommunitySharingPage(): Promise<void> {
		await test.step('Navigate to Members of Community Sharing Page', async () => {
			const {button, membersOfCommunitySharingLink} =
				TopMenuMainPage.menuLocators.whyISTQB
			const {title} = TopMenuMainPage.membersOfCommunitySharingPageLocators
			await this.hoverOnElement(button)
			await this.clickOnElement(membersOfCommunitySharingLink)

			await this.validateText(title, 'חברי הקהילה משתפים')
		})
	}

	async navigateToOurCertificationsPage(): Promise<void> {
		await test.step('Navigate to Our Certifications Page', async () => {
			const {button, ourCertificationsLink} =
				TopMenuMainPage.menuLocators.whyISTQB
			const {title} = TopMenuMainPage.ourCertificationsPageLocator
			await this.hoverOnElement(button)
			await this.validateVisibility(ourCertificationsLink)
			await this.clickOnElement(ourCertificationsLink)
			await this.validateText(title, 'ההסמכות שלנו, הקריירה שלך')
		})
	}

	async navigateToHowToPrepareToISTQBTestPage(): Promise<void> {
		await test.step('Navigate to How To Prepare To ISTQB Test Page', async () => {
			const {button, howToPrepareToISTQBTestLink} =
				TopMenuMainPage.menuLocators.whyISTQB
			const {title} = TopMenuMainPage.howToPrepareToIstqbPageLocator
			await this.hoverOnElement(button)
			await this.validateVisibility(howToPrepareToISTQBTestLink)
			await this.clickOnElement(howToPrepareToISTQBTestLink)
			await this.validateText(title, 'איך להתכונן למבחן ISTQB')
		})
	}

	async navigateToTermsGlossaryPage(): Promise<void> {
		await test.step('Navigate to Terms Glossary page', async () => {
			const {button, termsGlossaryLink} =
				TopMenuMainPage.menuLocators.ISTQBContent
			const {ISTQBGlossaryAdvancedSearchTitle} =
				TopMenuMainPage.termsGlossaryPageLocators
			await this.hoverOnElement(button)
			await this.validateVisibility(termsGlossaryLink)
			await this.clickOnElement(termsGlossaryLink)
			await this.validateText(
				ISTQBGlossaryAdvancedSearchTitle,
				'מילון המונחים של ISTQB - תכונות חיפוש מתקדמות',
			)
		})
	}
	async navigateToSyllabusInfoPage(): Promise<void> {
		await test.step('Navigate to Syllabus Info page', async () => {
			const {button, syllabusInfoLink} =
				TopMenuMainPage.menuLocators.ISTQBContent
			const {title} = TopMenuMainPage.syllabusInfoPageLocators
			await this.hoverOnElement(button)
			await this.validateVisibility(syllabusInfoLink)
			await this.clickOnElement(syllabusInfoLink)
			await this.page.waitForLoadState('domcontentloaded')
			await this.validateText(title, 'כל מה שרציתם לדעת על סילבוס CTFL 4.0')
		})
	}

	async navigateToUsefulLinksPage(): Promise<void> {
		await test.step('Navigate to Useful Links page', async () => {
			const {button, usefulLinksLink} =
				TopMenuMainPage.menuLocators.testingInIsrael
			const {title} = TopMenuMainPage.usefulLinksLocators
			await this.hoverOnElement(button)
			await this.validateVisibility(usefulLinksLink)
			await this.clickOnElement(usefulLinksLink)
			await this.page.waitForLoadState('domcontentloaded')
			await this.validateText(title, 'קישורים שימושיים')
		})
	}
	async navigateToITCBMagazinePage(): Promise<void> {
		await test.step('Navigate to ITCB Magazine page', async () => {
			const {button, ITCBMagazineLink} =
				TopMenuMainPage.menuLocators.testingInIsrael
			const {viewAllMagazineIssuesLink} =
				TopMenuMainPage.itcbMagazinePageLocators
			await this.hoverOnElement(button)
			await this.validateVisibility(ITCBMagazineLink)
			await this.clickOnElement(ITCBMagazineLink)
			await this.validateVisibility(viewAllMagazineIssuesLink)
		})
	}
	async navigateToPodcastsPage(): Promise<void> {
		await test.step('Navigate to Podcasts page', async () => {
			const {button, podcastsLink} =
				TopMenuMainPage.menuLocators.testingInIsrael
			const {officialPodcastLink} = TopMenuMainPage.podcastsPageLocators
			await this.hoverOnElement(button)
			await this.validateVisibility(podcastsLink)
			await this.clickOnElement(podcastsLink)
			await this.page.waitForLoadState('domcontentloaded')
			await this.validateVisibility(officialPodcastLink)
			await this.validateText(officialPodcastLink, 'דף הפודקאסט הרישמי שלנו')
		})
	}
	async navigateToEventsSummariesPage(): Promise<void> {
		await test.step('navigate to Events Summaries page', async () => {
			const {button, eventsSummariesLink} =
				TopMenuMainPage.menuLocators.testingInIsrael
			const {title} = TopMenuMainPage.eventsSummariesPageLocators
			await this.hoverOnElement(button)
			await this.validateVisibility(eventsSummariesLink)
			await this.clickOnElement(eventsSummariesLink)
			await this.validateText(title, 'סיכומי אירועים')
		})
	}
	async navigateToTipsPage(): Promise<void> {
		await test.step('Navigate to Tips page', async () => {
			const {button, tipsLink} = TopMenuMainPage.menuLocators.testingInIsrael
			const {title} = TopMenuMainPage.tipsPageLocators
			await this.hoverOnElement(button)
			await this.validateVisibility(tipsLink)
			await this.clickOnElement(tipsLink)
			await this.page.waitForLoadState('domcontentloaded')
			await this.validateText(
				title,
				'טיפים לבודקי תכנה - כאן תמצאו טיפים שנכתבו ע"י חברי קהילת הבדיקות בישראל בכדי לח',
			)
		})
	}

	async navigateToImportantFactsPage(): Promise<void> {
		await test.step('navigate to Important Facts page', async () => {
			const {button, importantFactsLink} =
				TopMenuMainPage.menuLocators.additionalInformation
			const {title} = TopMenuMainPage.importantFactsPageLocators
			await this.hoverOnElement(button)
			await this.validateVisibility(importantFactsLink)
			await this.clickOnElement(importantFactsLink)
			await this.validateText(title, 'עובדות שחשוב שתדעו')
		})
	}
	async navigateToQuestionsAndAnswersPage(): Promise<void> {
		await test.step('Navigate to Questions and Answers page', async () => {
			const {button, questionsAndAnswersLink} =
				TopMenuMainPage.menuLocators.additionalInformation
			const {title} = TopMenuMainPage.questionsAndAnswersPageLocators
			await this.hoverOnElement(button)
			await this.validateVisibility(questionsAndAnswersLink)
			await this.clickOnElement(questionsAndAnswersLink)
			await this.validateText(title, 'שאלות ותשובות')
		})
	}
	async navigateToInternationalConferencesPage(): Promise<void> {
		await test.step('Navigate to International Conferences page', async () => {
			const {button, internationalConferencesLink} =
				TopMenuMainPage.menuLocators.additionalInformation
			const {title} = TopMenuMainPage.internationalConferencesPageLocators
			await this.hoverOnElement(button)
			await this.validateVisibility(internationalConferencesLink)
			await this.clickOnElement(internationalConferencesLink)
			await this.validateText(title, 'כנסים בינלאומיים')
		})
	}

	async navigateToBoardOfDirectorsPage(): Promise<void> {
		await test.step('Navigate to Board of Directors page', async () => {
			const {button, boardOfDirectorsLink} =
				TopMenuMainPage.menuLocators.aboutITCB
			const {boardOfDirectorsTitle} = TopMenuMainPage.aboutUsPageLocators
			await this.hoverOnElement(button)
			await this.clickOnElement(boardOfDirectorsLink)
			await this.validateText(boardOfDirectorsTitle, 'הוועד המנהל')
		})
	}
	async navigateToAdvisoryBoardPage(): Promise<void> {
		await test.step('Navigate to Advisory Board page', async () => {
			const {button, advisoryBoardLink} = TopMenuMainPage.menuLocators.aboutITCB
			const {advisoryBoardTitle} =
				TopMenuMainPage.aboutUsPageLocators.advisoryBoardSection
			await this.hoverOnElement(button)
			await this.validateVisibility(advisoryBoardLink)

			const pagePromise = this.page.context().waitForEvent('page')
			await this.clickOnElement(advisoryBoardLink)

			const newPage = await pagePromise
			await newPage.waitForLoadState()

			await this.validateVisibility(advisoryBoardTitle)
			await this.validateText(advisoryBoardTitle, 'הוועד המייעץ')
		})
	}
	async navigateToOurPartnersPage(): Promise<void> {
		await test.step('Navigate to Our Partners page', async () => {
			const {button, ourPartnersLink} = TopMenuMainPage.menuLocators.aboutITCB
			const {title} = TopMenuMainPage.ourPartnersPageLocators
			await this.hoverOnElement(button)
			await this.validateVisibility(ourPartnersLink)
			await this.clickOnElement(ourPartnersLink)
			await this.validateText(title, 'מרכזי הדרכה מוסמכים')
		})
	}
}
