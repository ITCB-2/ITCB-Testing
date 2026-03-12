import {expect, type Page, test} from '@playwright/test'
import {URLS} from '../../data/urls'
import {MainPage} from '../main-content/MainPage'

export class BottomMenuMainPage extends MainPage {
	public readonly menuLocators = {
		whyISTQB: {
			decisionMakersSharingLink: {
				role: 'link',
				name: 'מקבלי החלטות משתפים',
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
			const {decisionMakersSharingLink} = this.menuLocators.whyISTQB
			const {title} = BottomMenuMainPage.decisionMakersSharingPageLocators
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

	async navigateToMembersOfCommunitySharingPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Members of Community Sharing Page through bottom menu', async () => {
			const {membersOfCommunitySharingLink} = this.menuLocators.whyISTQB
			const {title} = BottomMenuMainPage.membersOfCommunitySharingPageLocators
			await expect(
				this.page
					.locator(membersOfCommunitySharingLink.parent)
					.getByRole(membersOfCommunitySharingLink.role, {
						name: membersOfCommunitySharingLink.name,
					}),
			).toBeVisible()
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

	async navigateToOurCertificationsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Our Certifications Page through bottom menu', async () => {
			const {ourCertificationsLink} = this.menuLocators.whyISTQB
			const {title} = BottomMenuMainPage.ourCertificationsPageLocator
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

	async navigateToHowToPrepareToISTQBTestPageBottomMenu(): Promise<void> {
		await test.step('Navigate to How To Prepare To ISTQB Test Page through bottom menu', async () => {
			const {howToPrepareToISTQBTestLink} = this.menuLocators.whyISTQB
			const {title} = BottomMenuMainPage.howToPrepareToIstqbPageLocator
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
			await this.page.waitForLoadState('domcontentloaded')
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('איך להתכונן למבחן ISTQB')
		})
	}

	async navigateToTermsGlossaryPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Terms Glossary page through bottom menu', async () => {
			const {termsGlossaryLink} = this.menuLocators.ISTQBContent
			const {ISTQBGlossaryAdvancedSearchTitle} =
				BottomMenuMainPage.termsGlossaryPageLocators
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

	async navigateToSyllabusInfoPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Syllabus Info page through bottom menu', async () => {
			const {syllabusInfoLink} = this.menuLocators.ISTQBContent
			const {title} = BottomMenuMainPage.syllabusInfoPageLocators
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
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('כל מה שרציתם לדעת על סילבוס CTFL 4.0')
		})
	}

	async navigateToUsefulLinksPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Useful Links page through bottom menu', async () => {
			const {usefulLinksLink} = this.menuLocators.testingInIsrael
			const {title} = BottomMenuMainPage.usefulLinksLocators
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
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('קישורים שימושיים')
		})
	}

	async navigateToITCBMagazinePageBottomMenu(): Promise<void> {
		await test.step('Navigate to ITCB Magazine page through bottom menu', async () => {
			const {ITCBMagazineLink} = this.menuLocators.testingInIsrael
			const {viewAllMagazineIssuesLink} =
				BottomMenuMainPage.itcbMagazinePageLocators
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

	async navigateToPodcastsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Podcasts page through bottom menu', async () => {
			const {podcastsLink} = this.menuLocators.testingInIsrael
			const {officialPodcastLink} = BottomMenuMainPage.podcastsPageLocators
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
			await expect(
				this.page.getByRole(officialPodcastLink.role, {
					name: officialPodcastLink.name,
				}),
			).toBeVisible()
		})
	}

	async navigateToEventsSummariesPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Events Summaries page through bottom menu', async () => {
			const {eventsSummariesLink} = this.menuLocators.testingInIsrael
			const {title} = BottomMenuMainPage.eventsSummariesPageLocators
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

	async navigateToTipsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Tips page through bottom menu', async () => {
			const {tipsLink} = this.menuLocators.testingInIsrael
			const {title} = BottomMenuMainPage.tipsPageLocators
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
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('טיפים לבודקי תכנה')
		})
	}

	async navigateToImportantFactsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Important Facts page through bottom menu', async () => {
			const {importantFactsLink} = this.menuLocators.additionalInformation
			const {title} = BottomMenuMainPage.importantFactsPageLocators
			await expect(
				this.page
					.locator(importantFactsLink.parent)
					.getByRole(importantFactsLink.role, {
						name: importantFactsLink.name,
					}),
			).toBeVisible()
			await this.page
				.locator(importantFactsLink.parent)
				.getByRole(importantFactsLink.role, {
					name: importantFactsLink.name,
				})
				.click()
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('עובדות שחשוב שתדעו')
		})
	}

	async navigateToQuestionsAndAnswersPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Questions and Answers page through bottom menu', async () => {
			const {questionsAndAnswersLink} = this.menuLocators.additionalInformation
			const {title} = BottomMenuMainPage.questionsAndAnswersPageLocators
			await expect(
				this.page
					.locator(questionsAndAnswersLink.parent)
					.getByRole(questionsAndAnswersLink.role, {
						name: questionsAndAnswersLink.name,
					}),
			).toBeVisible()
			await this.page
				.locator(questionsAndAnswersLink.parent)
				.getByRole(questionsAndAnswersLink.role, {
					name: questionsAndAnswersLink.name,
				})
				.click()
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('שאלות ותשובות')
		})
	}

	async navigateToInternationalConferencesPageBottomMenu(): Promise<void> {
		await test.step('Navigate to International Conferences page through bottom menu', async () => {
			const {internationalConferencesLink} =
				this.menuLocators.additionalInformation
			const {title} = BottomMenuMainPage.internationalConferencesPageLocators
			await expect(
				this.page
					.locator(internationalConferencesLink.parent)
					.getByRole(internationalConferencesLink.role, {
						name: internationalConferencesLink.name,
					}),
			).toBeVisible()
			await this.page
				.locator(internationalConferencesLink.parent)
				.getByRole(internationalConferencesLink.role, {
					name: internationalConferencesLink.name,
				})
				.click()
			await expect(
				this.page.getByRole(title.role, {name: title.name}),
			).toContainText('כנסים בינלאומיים')
		})
	}

	async navigateToAboutUsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to About Us page through bottom menu', async () => {
			const {aboutUsLink} = this.menuLocators.aboutITCB
			await expect(
				this.page.locator(aboutUsLink.parent).getByRole(aboutUsLink.role, {
					name: aboutUsLink.name,
				}),
			).toBeVisible()
			await this.page
				.locator(aboutUsLink.parent)
				.getByRole(aboutUsLink.role, {
					name: aboutUsLink.name,
				})
				.click()
			const pageContent = this.page.getByText('ITCB® - Israel Testing')
			const escaped = URLS.aboutUs
				.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
				.replace(/\\\/\\\?/, '\\/?\\?')
			await expect(this.page).toHaveURL(new RegExp(`^${escaped}$`))
			await expect(pageContent).toContainText('ITCB® - Israel Testing')
		})
	}

	async navigateToBoardOfDirectorsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Board of Directors page through bottom menu', async () => {
			const {boardOfDirectorsLink} = this.menuLocators.aboutITCB
			const {boardOfDirectorsTitle} = BottomMenuMainPage.aboutUsPageLocators
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
			await expect(locator).toBeVisible({timeout: 10000})
			await expect(locator).toContainText('הוועד המנהל')
		})
	}

	async navigateToAdvisoryBoardPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Advisory Board page through bottom menu', async () => {
			const {advisoryBoardLink} = this.menuLocators.aboutITCB
			const {advisoryBoardTitle} =
				BottomMenuMainPage.aboutUsPageLocators.advisoryBoardSection
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
			const locator = newPage.getByRole(advisoryBoardTitle.role, {
				name: advisoryBoardTitle.name,
			})
			await expect(locator).toBeVisible({timeout: 10000})
			await expect(locator).toContainText('הוועד המייעץ')
		})
	}

	async navigateToOurPartnersPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Our Partners page through bottom menu', async () => {
			const {ourPartnersLink} = this.menuLocators.aboutITCB
			const {title} = BottomMenuMainPage.ourPartnersPageLocators
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
