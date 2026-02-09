import {expect, type Page, test} from '@playwright/test'
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
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page
					.locator(decisionMakersSharingLink.parent)
					.getByRole(decisionMakersSharingLink.role, {
						name: decisionMakersSharingLink.name,
					}),
			).toBeVisible()
			await this.page
				.locator(decisionMakersSharingLink.parent)
				.getByRole(decisionMakersSharingLink.role, {
					name: decisionMakersSharingLink.name,
				})
				.click()

			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('מקבלי ההחלטות משתפים')
		})
	}

	async navigateTOMembersOfCommunitySharingPage(): Promise<void> {
		await test.step('Navigate to Members of Community Sharing Page', async () => {
			const {button, membersOfCommunitySharingLink} =
				TopMenuMainPage.menuLocators.whyISTQB
			const {title} = TopMenuMainPage.membersOfCommunitySharingPageLocators
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await this.page
				.locator(membersOfCommunitySharingLink.parent)
				.getByRole(membersOfCommunitySharingLink.role, {
					name: membersOfCommunitySharingLink.name,
				})
				.click()

			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('חברי הקהילה משתפים')
		})
	}

	async navigateToOurCertificationsPage(): Promise<void> {
		await test.step('Navigate to Our Certifications Page', async () => {
			const {button, ourCertificationsLink} =
				TopMenuMainPage.menuLocators.whyISTQB
			const {title} = TopMenuMainPage.ourCertificationsPageLocator
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page
					.locator(ourCertificationsLink.parent)
					.getByRole(ourCertificationsLink.role, {
						name: ourCertificationsLink.name,
					}),
			).toBeVisible()
			await this.page
				.locator(ourCertificationsLink.parent)
				.getByRole(ourCertificationsLink.role, {
					name: ourCertificationsLink.name,
				})
				.click()
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('ההסמכות שלנו, הקריירה שלך')
		})
	}

	async navigateToHowToPrepareToISTQBTestPage(): Promise<void> {
		await test.step('Navigate to How To Prepare To ISTQB Test Page', async () => {
			const {button, howToPrepareToISTQBTestLink} =
				TopMenuMainPage.menuLocators.whyISTQB
			const {title} = TopMenuMainPage.howToPrepareToIstqbPageLocator
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page
					.locator(howToPrepareToISTQBTestLink.parent)
					.getByRole(howToPrepareToISTQBTestLink.role, {
						name: howToPrepareToISTQBTestLink.name,
					}),
			).toBeVisible()
			await this.page
				.locator(howToPrepareToISTQBTestLink.parent)
				.getByRole(howToPrepareToISTQBTestLink.role, {
					name: howToPrepareToISTQBTestLink.name,
				})
				.click()
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('איך להתכונן למבחן ISTQB')
		})
	}

	async navigateToTermsGlossaryPage(): Promise<void> {
		await test.step('Navigate to Terms Glossary page', async () => {
			const {button, termsGlossaryLink} =
				TopMenuMainPage.menuLocators.ISTQBContent
			const {ISTQBGlossaryAdvancedSearchTitle} =
				TopMenuMainPage.termsGlossaryPageLocators
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page
					.locator(termsGlossaryLink.parent)
					.getByRole(termsGlossaryLink.role, {
						name: termsGlossaryLink.name,
					}),
			).toBeVisible()
			await this.page
				.locator(termsGlossaryLink.parent)
				.getByRole(termsGlossaryLink.role, {
					name: termsGlossaryLink.name,
				})
				.click()
			await expect(
				this.page.getByRole(ISTQBGlossaryAdvancedSearchTitle.role, {
					name: ISTQBGlossaryAdvancedSearchTitle.name,
				}),
			).toContainText('מילון המונחים של ISTQB - תכונות חיפוש מתקדמות')
		})
	}

	async navigateToSyllabusInfoPage(): Promise<void> {
		await test.step('Navigate to Syllabus Info page', async () => {
			const {button, syllabusInfoLink} =
				TopMenuMainPage.menuLocators.ISTQBContent
			const {title} = TopMenuMainPage.syllabusInfoPageLocators
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page
					.locator(syllabusInfoLink.parent)
					.getByRole(syllabusInfoLink.role, {
						name: syllabusInfoLink.name,
					}),
			).toBeVisible()
			await this.page
				.locator(syllabusInfoLink.parent)
				.getByRole(syllabusInfoLink.role, {
					name: syllabusInfoLink.name,
				})
				.click()
			await this.page.waitForLoadState('domcontentloaded')
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('כל מה שרציתם לדעת על סילבוס CTFL 4.0')
		})
	}

	async navigateToUsefulLinksPage(): Promise<void> {
		await test.step('Navigate to Useful Links page', async () => {
			const {button, usefulLinksLink} =
				TopMenuMainPage.menuLocators.testingInIsrael
			const {title} = TopMenuMainPage.usefulLinksLocators
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page
					.locator(usefulLinksLink.parent)
					.getByRole(usefulLinksLink.role, {
						name: usefulLinksLink.name,
					}),
			).toBeVisible()
			await this.page
				.locator(usefulLinksLink.parent)
				.getByRole(usefulLinksLink.role, {
					name: usefulLinksLink.name,
				})
				.click()
			await this.page.waitForLoadState('domcontentloaded')
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('קישורים שימושיים')
		})
	}

	async navigateToITCBMagazinePage(): Promise<void> {
		await test.step('Navigate to ITCB Magazine page', async () => {
			const {button, ITCBMagazineLink} =
				TopMenuMainPage.menuLocators.testingInIsrael
			const {viewAllMagazineIssuesLink} =
				TopMenuMainPage.itcbMagazinePageLocators
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page
					.locator(ITCBMagazineLink.parent)
					.getByRole(ITCBMagazineLink.role, {
						name: ITCBMagazineLink.name,
					}),
			).toBeVisible()
			await this.page
				.locator(ITCBMagazineLink.parent)
				.getByRole(ITCBMagazineLink.role, {
					name: ITCBMagazineLink.name,
				})
				.click()
			await expect(
				this.page.getByRole(viewAllMagazineIssuesLink.role, {
					name: viewAllMagazineIssuesLink.name,
				}),
			).toBeVisible()
		})
	}

	async navigateToPodcastsPage(): Promise<void> {
		await test.step('Navigate to Podcasts page', async () => {
			const {button, podcastsLink} =
				TopMenuMainPage.menuLocators.testingInIsrael
			const {officialPodcastLink} = TopMenuMainPage.podcastsPageLocators
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page.locator(podcastsLink.parent).getByRole(podcastsLink.role, {
					name: podcastsLink.name,
				}),
			).toBeVisible()
			await this.page
				.locator(podcastsLink.parent)
				.getByRole(podcastsLink.role, {
					name: podcastsLink.name,
				})
				.click()
			await this.page.waitForLoadState('domcontentloaded')
			await expect(
				this.page.getByRole(officialPodcastLink.role, {
					name: officialPodcastLink.name,
				}),
			).toBeVisible()
			await expect(
				this.page.getByRole(officialPodcastLink.role, {
					name: officialPodcastLink.name,
				}),
			).toContainText('דף הפודקאסט הרישמי שלנו')
		})
	}

	async navigateToEventsSummariesPage(): Promise<void> {
		await test.step('navigate to Events Summaries page', async () => {
			const {button, eventsSummariesLink} =
				TopMenuMainPage.menuLocators.testingInIsrael
			const {title} = TopMenuMainPage.eventsSummariesPageLocators
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page
					.locator(eventsSummariesLink.parent)
					.getByRole(eventsSummariesLink.role, {
						name: eventsSummariesLink.name,
					}),
			).toBeVisible()
			await this.page
				.locator(eventsSummariesLink.parent)
				.getByRole(eventsSummariesLink.role, {
					name: eventsSummariesLink.name,
				})
				.click()
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('סיכומי אירועים')
		})
	}

	async navigateToTipsPage(): Promise<void> {
		await test.step('Navigate to Tips page', async () => {
			const {button, tipsLink} = TopMenuMainPage.menuLocators.testingInIsrael
			const {title} = TopMenuMainPage.tipsPageLocators
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page.locator(tipsLink.parent).getByRole(tipsLink.role, {
					name: tipsLink.name,
				}),
			).toBeVisible()
			await this.page
				.locator(tipsLink.parent)
				.getByRole(tipsLink.role, {
					name: tipsLink.name,
				})
				.click()
			await this.page.waitForLoadState('domcontentloaded')
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText(
				'טיפים לבודקי תכנה - כאן תמצאו טיפים שנכתבו ע"י חברי קהילת הבדיקות בישראל בכדי לח',
			)
		})
	}

	async navigateToImportantFactsPage(): Promise<void> {
		await test.step('navigate to Important Facts page', async () => {
			const {button, importantFactsLink} =
				TopMenuMainPage.menuLocators.additionalInformation
			const {title} = TopMenuMainPage.importantFactsPageLocators
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await new Promise((r) => setTimeout(r, 300))
			const linkLocator = this.page
				.locator(importantFactsLink.parent)
				.getByRole(importantFactsLink.role, {
					name: importantFactsLink.name,
				})
			await linkLocator.waitFor({state: 'visible', timeout: 10_000})
			await linkLocator.click({timeout: 15_000})
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('עובדות שחשוב שתדעו')
		})
	}

	async navigateToQuestionsAndAnswersPage(): Promise<void> {
		await test.step('Navigate to Questions and Answers page', async () => {
			const {button, questionsAndAnswersLink} =
				TopMenuMainPage.menuLocators.additionalInformation
			const {title} = TopMenuMainPage.questionsAndAnswersPageLocators
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await new Promise((r) => setTimeout(r, 300))
			const linkLocator = this.page
				.locator(questionsAndAnswersLink.parent)
				.getByRole(questionsAndAnswersLink.role, {
					name: questionsAndAnswersLink.name,
				})
			await linkLocator.waitFor({state: 'visible', timeout: 10_000})
			await linkLocator.click({timeout: 15_000})
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('שאלות ותשובות')
		})
	}

	async navigateToInternationalConferencesPage(): Promise<void> {
		await test.step('Navigate to International Conferences page', async () => {
			const {button, internationalConferencesLink} =
				TopMenuMainPage.menuLocators.additionalInformation
			const {title} = TopMenuMainPage.internationalConferencesPageLocators
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await new Promise((r) => setTimeout(r, 300))
			const linkLocator = this.page
				.locator(internationalConferencesLink.parent)
				.getByRole(internationalConferencesLink.role, {
					name: internationalConferencesLink.name,
				})
			await linkLocator.waitFor({state: 'visible', timeout: 10_000})
			await linkLocator.click({timeout: 15_000})
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('כנסים בינלאומיים')
		})
	}

	async navigateToBoardOfDirectorsPage(): Promise<void> {
		await test.step('Navigate to Board of Directors page', async () => {
			const {button, boardOfDirectorsLink} =
				TopMenuMainPage.menuLocators.aboutITCB
			const {boardOfDirectorsTitle} = TopMenuMainPage.aboutUsPageLocators
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page
					.locator(boardOfDirectorsLink.parent)
					.getByRole(boardOfDirectorsLink.role, {
						name: boardOfDirectorsLink.name,
					}),
			).toBeVisible()
			const pagePromise = this.page.context().waitForEvent('page')
			await this.page
				.locator(boardOfDirectorsLink.parent)
				.getByRole(boardOfDirectorsLink.role, {
					name: boardOfDirectorsLink.name,
				})
				.click()
			const newPage = await pagePromise
			await newPage.waitForLoadState()
			const locator = newPage.getByRole(boardOfDirectorsTitle.role, {
				name: boardOfDirectorsTitle.name,
			})
			await expect(locator).toBeVisible({timeout: 10_000})
			await expect(locator).toContainText('הוועד המנהל')
		})
	}

	async navigateToAdvisoryBoardPage(): Promise<void> {
		await test.step('Navigate to Advisory Board page', async () => {
			const {button, advisoryBoardLink} = TopMenuMainPage.menuLocators.aboutITCB
			const {advisoryBoardTitle} =
				TopMenuMainPage.aboutUsPageLocators.advisoryBoardSection
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page
					.locator(advisoryBoardLink.parent)
					.getByRole(advisoryBoardLink.role, {
						name: advisoryBoardLink.name,
					}),
			).toBeVisible()
			const pagePromise = this.page.context().waitForEvent('page')
			await this.page
				.locator(advisoryBoardLink.parent)
				.getByRole(advisoryBoardLink.role, {
					name: advisoryBoardLink.name,
				})
				.click()
			const newPage = await pagePromise
			await newPage.waitForLoadState()
			await expect(
				newPage.getByRole(advisoryBoardTitle.role, {
					name: advisoryBoardTitle.name,
				}),
			).toBeVisible()
			await expect(
				newPage.getByRole(advisoryBoardTitle.role, {
					name: advisoryBoardTitle.name,
				}),
			).toContainText('הוועד המייעץ')
		})
	}

	async navigateToOurPartnersPage(): Promise<void> {
		await test.step('Navigate to Our Partners page', async () => {
			const {button, ourPartnersLink} = TopMenuMainPage.menuLocators.aboutITCB
			const {title} = TopMenuMainPage.ourPartnersPageLocators
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page
					.locator(ourPartnersLink.parent)
					.getByRole(ourPartnersLink.role, {
						name: ourPartnersLink.name,
					}),
			).toBeVisible()
			await this.page
				.locator(ourPartnersLink.parent)
				.getByRole(ourPartnersLink.role, {
					name: ourPartnersLink.name,
				})
				.click()
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('מרכזי הדרכה מוסמכים')
		})
	}
}
