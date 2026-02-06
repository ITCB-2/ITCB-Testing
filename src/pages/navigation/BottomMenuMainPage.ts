import {test} from '@netanelh2/playwright-framework'
import {expect, type Page} from '@playwright/test'
import {URLS} from '../../data/urls'
import {MainPage} from '../main-content/MainPage'

export class BottomMenuMainPage extends MainPage {
	public static readonly menuLocators = {
		whyISTQB: {
			decisionMakersSharingLink: {
				role: 'link',
				name: 'מקבלי ההחלטות משתפים',
				parent: 'footer',
			},
			membersOfCommunitySharingLink: {
				role: 'link',
				name: 'חברי הקהילה משתפים',
				parent: 'footer',
			},
			ourCertificationsLink: {
				role: 'link',
				name: 'ההסמכות שלנו',
				parent: 'footer',
			},
			howToPrepareToISTQBTestLink: {
				role: 'link',
				name: 'איך להתכונן למבחן ISTQB®',
				parent: 'footer',
			},
		},
		ISTQBContent: {
			termsGlossaryLink: {
				role: 'link',
				name: 'מילון מונחים',
				parent: 'footer',
			},
			syllabusInfoLink: {
				role: 'link',
				name: 'כל מה שרציתם לדעת על סילבוס CTFL',
				parent: 'footer',
			},
		},
		testingInIsrael: {
			usefulLinksLink: {
				role: 'link',
				name: 'קישורים שימושיים',
				parent: 'footer',
			},
			ITCBMagazineLink: {
				role: 'link',
				name: 'מגזין "עולם הבדיקות"',
				parent: 'footer',
			},
			podcastsLink: {
				role: 'link',
				name: 'פודקאסטים',
				parent: 'footer',
			},
			eventsSummariesLink: {
				role: 'link',
				name: 'סיכומי אירועים',
				parent: 'footer',
			},
			tipsLink: {
				role: 'link',
				name: 'טיפים',
				parent: 'footer',
			},
		},
		additionalInformation: {
			importantFactsLink: {
				role: 'link',
				name: 'עובדות שחשוב שתדעו',
				parent: 'footer',
			},
			questionsAndAnswersLink: {
				role: 'link',
				name: 'שאלות ותשובות',
				parent: 'footer',
			},
			internationalConferencesLink: {
				role: 'link',
				name: 'כנסים בינלאומיים',
				parent: 'footer',
			},
		},
		aboutITCB: {
			aboutUsLink: {
				role: 'link',
				name: 'קצת עלינו',
				parent: 'footer',
			},
			boardOfDirectorsLink: {
				role: 'link',
				name: 'הוועד המנהל',
				parent: 'footer',
			},
			advisoryBoardLink: {
				role: 'link',
				name: 'הוועד המייעץ',
				parent: 'footer',
			},
			ourPartnersLink: {
				role: 'link',
				name: 'השותפים שלנו',
				parent: 'footer',
			},
		},
	} as const

	public static readonly aboutUsPageLocators = {
		mainTitle: {role: 'heading', name: 'אודות ®ITCB'},
		boardOfDirectorsTitle: {role: 'heading', name: 'הוועד המנהל'},
		advisoryBoardSection: {
			advisoryBoardTitle: {role: 'heading', name: 'הוועד המייעץ'},
			michalTalTitle: {role: 'heading', name: 'מיכל טל'},
		},
	} as const

	public static readonly decisionMakersSharingPageLocators = {
		title: {role: 'heading', name: 'מקבלי ההחלטות משתפים'},
	} as const

	public static readonly eventsSummariesPageLocators = {
		title: {role: 'heading', name: 'סיכומי אירועים'},
	} as const

	public static readonly howToPrepareToIstqbPageLocator = {
		title: {role: 'heading', name: 'איך להתכונן למבחן ISTQB'},
	} as const

	public static readonly importantFactsPageLocators = {
		title: {role: 'heading', name: 'עובדות שחשוב שתדעו'},
	} as const

	public static readonly internationalConferencesPageLocators = {
		title: {
			role: 'heading',
			name: 'כנסים בינלאומיים',
		},
	} as const

	public static readonly itcbMagazinePageLocators = {
		viewAllMagazineIssuesLink: {role: 'link', name: 'הצג את כל גליונות המגזין'},
	} as const

	public static readonly membersOfCommunitySharingPageLocators = {
		title: {role: 'heading', name: 'חברי הקהילה משתפים'},
	} as const

	public static readonly ourCertificationsPageLocator = {
		title: {role: 'heading', name: 'ההסמכות שלנו, הקריירה שלך'},
	} as const

	public static readonly ourPartnersPageLocators = {
		title: {role: 'heading', name: 'מרכזי הדרכה מוסמכים'},
	} as const

	public static readonly podcastsPageLocators = {
		officialPodcastLink: {role: 'link', name: 'דף הפודקאסט הרישמי שלנו'},
	} as const

	public static readonly questionsAndAnswersPageLocators = {
		title: {role: 'heading', name: 'שאלות ותשובות'},
	} as const

	public static readonly syllabusInfoPageLocators = {
		title: {role: 'heading', name: 'כל מה שרציתם לדעת על סילבוס CTFL 4.0'},
	} as const

	public static readonly termsGlossaryPageLocators = {
		ISTQBGlossaryAdvancedSearchTitle: {
			role: 'heading',
			name: 'מילון המונחים של ISTQB - תכונות חיפוש מתקדמות',
		},
	} as const

	public static readonly tipsPageLocators = {
		title: {
			role: 'heading',
			name: 'טיפים לבודקי תכנה - כאן תמצאו טיפים שנכתבו ע"י חברי קהילת הבדיקות בישראל בכדי לח',
		},
	} as const

	public static readonly usefulLinksLocators = {
		title: {role: 'heading', name: 'קישורים שימושיים'},
	} as const

	constructor(page: Page) {
		super(page)
	}

	async navigateToDecisionMakersSharingPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Decision Makers Sharing Page through bottom menu', async () => {
			const {decisionMakersSharingLink} =
				BottomMenuMainPage.menuLocators.whyISTQB
			const {title} = BottomMenuMainPage.decisionMakersSharingPageLocators
			await this.validateVisibility(decisionMakersSharingLink)
			await this.clickOnElement(decisionMakersSharingLink)
			await this.validateText(title, 'מקבלי ההחלטות משתפים')
		})
	}

	async navigateToMembersOfCommunitySharingPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Members of Community Sharing Page through bottom menu', async () => {
			const {membersOfCommunitySharingLink} =
				BottomMenuMainPage.menuLocators.whyISTQB
			const {title} = BottomMenuMainPage.membersOfCommunitySharingPageLocators
			await this.validateVisibility(membersOfCommunitySharingLink)
			await this.clickOnElement(membersOfCommunitySharingLink)
			await this.validateText(title, 'חברי הקהילה משתפים')
		})
	}

	async navigateToOurCertificationsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Our Certifications Page through bottom menu', async () => {
			const {ourCertificationsLink} = BottomMenuMainPage.menuLocators.whyISTQB
			const {title} = BottomMenuMainPage.ourCertificationsPageLocator
			await this.validateVisibility(ourCertificationsLink)
			await this.clickOnElement(ourCertificationsLink)
			await this.validateText(title, 'ההסמכות שלנו, הקריירה שלך')
		})
	}

	async navigateToHowToPrepareToISTQBTestPageBottomMenu(): Promise<void> {
		await test.step('Navigate to How To Prepare To ISTQB Test Page through bottom menu', async () => {
			const {howToPrepareToISTQBTestLink} =
				BottomMenuMainPage.menuLocators.whyISTQB
			const {title} = BottomMenuMainPage.howToPrepareToIstqbPageLocator
			await this.validateVisibility(howToPrepareToISTQBTestLink)
			await this.clickOnElement(howToPrepareToISTQBTestLink)
			await this.page.waitForLoadState('domcontentloaded')
			await this.validateText(title, 'איך להתכונן למבחן ISTQB')
		})
	}

	async navigateToTermsGlossaryPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Terms Glossary page through bottom menu', async () => {
			const {termsGlossaryLink} = BottomMenuMainPage.menuLocators.ISTQBContent
			const {ISTQBGlossaryAdvancedSearchTitle} =
				BottomMenuMainPage.termsGlossaryPageLocators
			await this.validateVisibility(termsGlossaryLink)
			await this.clickOnElement(termsGlossaryLink)
			await this.validateText(
				ISTQBGlossaryAdvancedSearchTitle,
				'מילון המונחים של ISTQB - תכונות חיפוש מתקדמות',
			)
		})
	}

	async navigateToSyllabusInfoPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Syllabus Info page through bottom menu', async () => {
			const {syllabusInfoLink} = BottomMenuMainPage.menuLocators.ISTQBContent
			const {title} = BottomMenuMainPage.syllabusInfoPageLocators
			await this.validateVisibility(syllabusInfoLink)
			await this.clickOnElement(syllabusInfoLink)
			await this.validateText(title, 'כל מה שרציתם לדעת על סילבוס CTFL 4.0')
		})
	}

	async navigateToUsefulLinksPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Useful Links page through bottom menu', async () => {
			const {usefulLinksLink} = BottomMenuMainPage.menuLocators.testingInIsrael
			const {title} = BottomMenuMainPage.usefulLinksLocators
			await this.validateVisibility(usefulLinksLink)
			await this.clickOnElement(usefulLinksLink)
			await this.validateText(title, 'קישורים שימושיים')
		})
	}

	async navigateToITCBMagazinePageBottomMenu(): Promise<void> {
		await test.step('Navigate to ITCB Magazine page through bottom menu', async () => {
			const {ITCBMagazineLink} = BottomMenuMainPage.menuLocators.testingInIsrael
			const {viewAllMagazineIssuesLink} =
				BottomMenuMainPage.itcbMagazinePageLocators
			await this.validateVisibility(ITCBMagazineLink)
			await this.clickOnElement(ITCBMagazineLink)
			await this.validateVisibility(viewAllMagazineIssuesLink)
		})
	}

	async navigateToPodcastsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Podcasts page through bottom menu', async () => {
			const {podcastsLink} = BottomMenuMainPage.menuLocators.testingInIsrael
			const {officialPodcastLink} = BottomMenuMainPage.podcastsPageLocators
			await this.validateVisibility(podcastsLink)
			await this.clickOnElement(podcastsLink)
			await this.validateVisibility(officialPodcastLink)
		})
	}

	async navigateToEventsSummariesPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Events Summaries page through bottom menu', async () => {
			const {eventsSummariesLink} =
				BottomMenuMainPage.menuLocators.testingInIsrael
			const {title} = BottomMenuMainPage.eventsSummariesPageLocators
			await this.validateVisibility(eventsSummariesLink)
			await this.clickOnElement(eventsSummariesLink)
			await this.validateText(title, 'סיכומי אירועים')
		})
	}

	async navigateToTipsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Tips page through bottom menu', async () => {
			const {tipsLink} = BottomMenuMainPage.menuLocators.testingInIsrael
			const {title} = BottomMenuMainPage.tipsPageLocators
			await this.validateVisibility(tipsLink)
			await this.clickOnElement(tipsLink)
			await this.validateText(
				title,
				'טיפים לבודקי תכנה - כאן תמצאו טיפים שנכתבו ע"י חברי קהילת הבדיקות בישראל בכדי לח',
			)
		})
	}

	async navigateToImportantFactsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Important Facts page through bottom menu', async () => {
			const {importantFactsLink} =
				BottomMenuMainPage.menuLocators.additionalInformation
			const {title} = BottomMenuMainPage.importantFactsPageLocators
			await this.validateVisibility(importantFactsLink)
			await this.clickOnElement(importantFactsLink)
			await this.validateText(title, 'עובדות שחשוב שתדעו')
		})
	}

	async navigateToQuestionsAndAnswersPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Questions and Answers page through bottom menu', async () => {
			const {questionsAndAnswersLink} =
				BottomMenuMainPage.menuLocators.additionalInformation
			const {title} = BottomMenuMainPage.questionsAndAnswersPageLocators
			await this.validateVisibility(questionsAndAnswersLink)
			await this.clickOnElement(questionsAndAnswersLink)
			await this.validateText(title, 'שאלות ותשובות')
		})
	}

	async navigateToInternationalConferencesPageBottomMenu(): Promise<void> {
		await test.step('Navigate to International Conferences page through bottom menu', async () => {
			const {internationalConferencesLink} =
				BottomMenuMainPage.menuLocators.additionalInformation
			const {title} = BottomMenuMainPage.internationalConferencesPageLocators
			await this.validateVisibility(internationalConferencesLink)
			await this.clickOnElement(internationalConferencesLink)
			await this.validateText(title, 'כנסים בינלאומיים')
		})
	}

	async navigateToAboutUsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to About Us page through bottom menu', async () => {
			const {aboutUsLink} = BottomMenuMainPage.menuLocators.aboutITCB
			await this.validateVisibility(aboutUsLink)
			await this.clickOnElement(aboutUsLink)
			const pageContent = this.page.getByText('ITCB® - Israel Testing')
			await this.validateURL(URLS.aboutUs)
			await expect(pageContent).toContainText('ITCB® - Israel Testing')
		})
	}

	async navigateToBoardOfDirectorsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Board of Directors page through bottom menu', async () => {
			const {boardOfDirectorsLink} = BottomMenuMainPage.menuLocators.aboutITCB
			const {boardOfDirectorsTitle} = BottomMenuMainPage.aboutUsPageLocators
			await this.validateVisibility(boardOfDirectorsLink)
			const pagePromise = this.page.context().waitForEvent('page')
			await this.clickOnElement(boardOfDirectorsLink)
			const newPage = await pagePromise
			await newPage.waitForLoadState()
			const locator = newPage.getByRole(boardOfDirectorsTitle.role, {
				name: boardOfDirectorsTitle.name,
			})
			await expect(locator).toBeVisible({timeout: 10000})
			await expect(locator).toContainText('הוועד המנהל')
		})
	}

	async navigateToAdvisoryBoardPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Advisory Board page through bottom menu', async () => {
			const {advisoryBoardLink} = BottomMenuMainPage.menuLocators.aboutITCB
			const {advisoryBoardTitle} =
				BottomMenuMainPage.aboutUsPageLocators.advisoryBoardSection
			await this.validateVisibility(advisoryBoardLink)
			const pagePromise = this.page.context().waitForEvent('page')
			await this.clickOnElement(advisoryBoardLink)
			const newPage = await pagePromise
			await newPage.waitForLoadState()
			const locator = newPage.getByRole(advisoryBoardTitle.role, {
				name: advisoryBoardTitle.name,
			})
			await expect(locator).toBeVisible({timeout: 10000})
			await expect(locator).toContainText('הוועד המייעץ')
		})
	}

	async navigateToOurPartnersPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Our Partners page through bottom menu', async () => {
			const {ourPartnersLink} = BottomMenuMainPage.menuLocators.aboutITCB
			const {title} = BottomMenuMainPage.ourPartnersPageLocators
			await this.validateVisibility(ourPartnersLink)
			await this.clickOnElement(ourPartnersLink)
			await this.validateText(title, 'מרכזי הדרכה מוסמכים')
		})
	}
}
