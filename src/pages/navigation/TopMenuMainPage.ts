import {expect, type Page, test} from '@playwright/test'
import {ABOUT_US_PAGE_LOCATORS} from '../../locators/content-pages/About_Us'
import {DECISION_MAKERS_SHARING_PAGE_LOCATORS} from '../../locators/content-pages/Decision_Makers_Sharing'
import {EVENTS_SUMMARIES_PAGE_LOCATORS} from '../../locators/content-pages/Events_Summaries'
import {HOW_TO_PREPARE_TO_ISTQB_PAGE_LOCATOR} from '../../locators/content-pages/How_To_Prepare_To_ISTQB'
import {IMPORTANT_FACTS_PAGE_LOCATORS} from '../../locators/content-pages/Important_Facts'
import {INTERNATIONAL_CONFERENCES_PAGE_LOCATORS} from '../../locators/content-pages/International_Conferences'
import {ITCB_MAGAZINE_PAGE_LOCATORS} from '../../locators/content-pages/ITCB_Magazine'
import {MEMBERS_OF_COMMUNITY_SHARING_PAGE_LOCATORS} from '../../locators/content-pages/Members_Of_Community_Sharing'
import {OUR_CERTIFICATIONS_PAGE_LOCATOR} from '../../locators/content-pages/Our_Certification'
import {OUR_PARTNERS_PAGE_LOCATORS} from '../../locators/content-pages/Our_Partners'
import {PODCASTS_PAGE_LOCATORS} from '../../locators/content-pages/Podcasts'
import {QUESTIONS_AND_ANSWERS_PAGE_LOCATORS} from '../../locators/content-pages/Questions_And_Answers'
import {SYLLABUS_INFO_PAGE_LOCATORS} from '../../locators/content-pages/Syllabus_Info'
import {TERMS_GLOSSARY_PAGE_LOCATORS} from '../../locators/content-pages/Terms_Glossary'
import {TIPS_PAGE_LOCATORS} from '../../locators/content-pages/Tips'
import {USEFUL_LINKS_LOCATORS} from '../../locators/content-pages/Useful_Links'
import {TOP_MENU_MAIN_PAGE_LOCATORS} from '../../locators/navigation/Top_Main_Menu'
import {MainPage} from '../main-content/MainPage'

export class TopMenuMainPage extends MainPage {
	constructor(page: Page) {
		super(page)
	}

	async navigateToDecisionMakersSharingPage(): Promise<void> {
		await test.step('Navigate to Decision Makers Sharing Page', async () => {
			const {button, decisionMakersSharingLink} =
				TOP_MENU_MAIN_PAGE_LOCATORS.whyISTQB
			const {title} = DECISION_MAKERS_SHARING_PAGE_LOCATORS
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
				TOP_MENU_MAIN_PAGE_LOCATORS.whyISTQB
			const {title} = MEMBERS_OF_COMMUNITY_SHARING_PAGE_LOCATORS
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
				TOP_MENU_MAIN_PAGE_LOCATORS.whyISTQB
			const {title} = OUR_CERTIFICATIONS_PAGE_LOCATOR
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
				TOP_MENU_MAIN_PAGE_LOCATORS.whyISTQB
			const {title} = HOW_TO_PREPARE_TO_ISTQB_PAGE_LOCATOR
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
				TOP_MENU_MAIN_PAGE_LOCATORS.ISTQBContent
			const {ISTQBGlossaryAdvancedSearchTitle} = TERMS_GLOSSARY_PAGE_LOCATORS
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
				TOP_MENU_MAIN_PAGE_LOCATORS.ISTQBContent
			const {title} = SYLLABUS_INFO_PAGE_LOCATORS
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
				TOP_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {title} = USEFUL_LINKS_LOCATORS
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
				TOP_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {viewAllMagazineIssuesLink} = ITCB_MAGAZINE_PAGE_LOCATORS
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
			const {button, podcastsLink} = TOP_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {officialPodcastLink} = PODCASTS_PAGE_LOCATORS
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page
					.locator(podcastsLink.parent)
					.getByRole(podcastsLink.role, {name: podcastsLink.name}),
			).toBeVisible()
			await this.page
				.locator(podcastsLink.parent)
				.getByRole(podcastsLink.role, {name: podcastsLink.name})
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
				TOP_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {title} = EVENTS_SUMMARIES_PAGE_LOCATORS
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
			const {button, tipsLink} = TOP_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {title} = TIPS_PAGE_LOCATORS
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await expect(
				this.page
					.locator(tipsLink.parent)
					.getByRole(tipsLink.role, {name: tipsLink.name}),
			).toBeVisible()
			await this.page
				.locator(tipsLink.parent)
				.getByRole(tipsLink.role, {name: tipsLink.name})
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
				TOP_MENU_MAIN_PAGE_LOCATORS.additionalInformation
			const {title} = IMPORTANT_FACTS_PAGE_LOCATORS
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
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

	async navigateToQuestionsAndAnswersPage(): Promise<void> {
		await test.step('Navigate to Questions and Answers page', async () => {
			const {button, questionsAndAnswersLink} =
				TOP_MENU_MAIN_PAGE_LOCATORS.additionalInformation
			const {title} = QUESTIONS_AND_ANSWERS_PAGE_LOCATORS
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
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

	async navigateToInternationalConferencesPage(): Promise<void> {
		await test.step('Navigate to International Conferences page', async () => {
			const {button, internationalConferencesLink} =
				TOP_MENU_MAIN_PAGE_LOCATORS.additionalInformation
			const {title} = INTERNATIONAL_CONFERENCES_PAGE_LOCATORS
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
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

	async navigateToBoardOfDirectorsPage(): Promise<void> {
		await test.step('Navigate to Board of Directors page', async () => {
			const {button, boardOfDirectorsLink} =
				TOP_MENU_MAIN_PAGE_LOCATORS.aboutITCB
			const {boardOfDirectorsTitle} = ABOUT_US_PAGE_LOCATORS
			await this.page
				.locator(button.parent)
				.getByRole(button.role, {name: button.name})
				.hover()
			await this.page
				.locator(boardOfDirectorsLink.parent)
				.getByRole(boardOfDirectorsLink.role, {
					name: boardOfDirectorsLink.name,
				})
				.click()
			await expect(
				this.page.getByRole(boardOfDirectorsTitle.role, {
					name: boardOfDirectorsTitle.name,
				}),
			).toContainText('הוועד המנהל')
		})
	}

	async navigateToAdvisoryBoardPage(): Promise<void> {
		await test.step('Navigate to Advisory Board page', async () => {
			const {button, advisoryBoardLink} = TOP_MENU_MAIN_PAGE_LOCATORS.aboutITCB
			const {advisoryBoardTitle} = ABOUT_US_PAGE_LOCATORS.advisoryBoardSection
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
			const {button, ourPartnersLink} = TOP_MENU_MAIN_PAGE_LOCATORS.aboutITCB
			const {title} = OUR_PARTNERS_PAGE_LOCATORS
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
