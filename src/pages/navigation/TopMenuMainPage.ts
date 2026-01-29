import {test} from '@netanelh2/playwright-framework'
import type {Page} from '@playwright/test'
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
import {MainPage} from '../../pages/main-content/MainPage'

export class TopMenuMainPage extends MainPage {
	constructor(page: Page) {
		super(page)
	}

	async navigateToDecisionMakersSharingPage(): Promise<void> {
		await test.step('Navigate to Decision Makers Sharing Page', async () => {
			const {button, decisionMakersSharingLink} =
				TOP_MENU_MAIN_PAGE_LOCATORS.whyISTQB
			const {title} = DECISION_MAKERS_SHARING_PAGE_LOCATORS
			await this.hoverOnElement(button)
			await this.validateVisibility(decisionMakersSharingLink)
			await this.clickOnElement(decisionMakersSharingLink)

			await this.validateText(title, 'מקבלי ההחלטות משתפים')
		})
	}
	async navigateTOMembersOfCommunitySharingPage(): Promise<void> {
		await test.step('Navigate to Members of Community Sharing Page', async () => {
			const {button, membersOfCommunitySharingLink} =
				TOP_MENU_MAIN_PAGE_LOCATORS.whyISTQB
			const {title} = MEMBERS_OF_COMMUNITY_SHARING_PAGE_LOCATORS
			await this.hoverOnElement(button)
			await this.clickOnElement(membersOfCommunitySharingLink)

			await this.validateText(title, 'חברי הקהילה משתפים')
		})
	}

	async navigateToOurCertificationsPage(): Promise<void> {
		await test.step('Navigate to Our Certifications Page', async () => {
			const {button, ourCertificationsLink} =
				TOP_MENU_MAIN_PAGE_LOCATORS.whyISTQB
			const {title} = OUR_CERTIFICATIONS_PAGE_LOCATOR
			await this.hoverOnElement(button)
			await this.validateVisibility(ourCertificationsLink)
			await this.clickOnElement(ourCertificationsLink)
			await this.validateText(title, 'ההסמכות שלנו, הקריירה שלך')
		})
	}

	async navigateToHowToPrepareToISTQBTestPage(): Promise<void> {
		await test.step('Navigate to How To Prepare To ISTQB Test Page', async () => {
			const {button, howToPrepareToISTQBTestLink} =
				TOP_MENU_MAIN_PAGE_LOCATORS.whyISTQB
			const {title} = HOW_TO_PREPARE_TO_ISTQB_PAGE_LOCATOR
			await this.hoverOnElement(button)
			await this.validateVisibility(howToPrepareToISTQBTestLink)
			await this.clickOnElement(howToPrepareToISTQBTestLink)
			await this.validateText(title, 'איך להתכונן למבחן ISTQB')
		})
	}

	async navigateToTermsGlossaryPage(): Promise<void> {
		await test.step('Navigate to Terms Glossary page', async () => {
			const {button, termsGlossaryLink} =
				TOP_MENU_MAIN_PAGE_LOCATORS.ISTQBContent
			const {ISTQBGlossaryAdvancedSearchTitle} = TERMS_GLOSSARY_PAGE_LOCATORS
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
				TOP_MENU_MAIN_PAGE_LOCATORS.ISTQBContent
			const {title} = SYLLABUS_INFO_PAGE_LOCATORS
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
				TOP_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {title} = USEFUL_LINKS_LOCATORS
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
				TOP_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {viewAllMagazineIssuesLink} = ITCB_MAGAZINE_PAGE_LOCATORS
			await this.hoverOnElement(button)
			await this.validateVisibility(ITCBMagazineLink)
			await this.clickOnElement(ITCBMagazineLink)
			await this.validateVisibility(viewAllMagazineIssuesLink)
		})
	}
	async navigateToPodcastsPage(): Promise<void> {
		await test.step('Navigate to Podcasts page', async () => {
			const {button, podcastsLink} = TOP_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {officialPodcastLink} = PODCASTS_PAGE_LOCATORS
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
				TOP_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {title} = EVENTS_SUMMARIES_PAGE_LOCATORS
			await this.hoverOnElement(button)
			await this.validateVisibility(eventsSummariesLink)
			await this.clickOnElement(eventsSummariesLink)
			await this.validateText(title, 'סיכומי אירועים')
		})
	}
	async navigateToTipsPage(): Promise<void> {
		await test.step('Navigate to Tips page', async () => {
			const {button, tipsLink} = TOP_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {title} = TIPS_PAGE_LOCATORS
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
				TOP_MENU_MAIN_PAGE_LOCATORS.additionalInformation
			const {title} = IMPORTANT_FACTS_PAGE_LOCATORS
			await this.hoverOnElement(button)
			await this.validateVisibility(importantFactsLink)
			await this.clickOnElement(importantFactsLink)
			await this.validateText(title, 'עובדות שחשוב שתדעו')
		})
	}
	async navigateToQuestionsAndAnswersPage(): Promise<void> {
		await test.step('Navigate to Questions and Answers page', async () => {
			const {button, questionsAndAnswersLink} =
				TOP_MENU_MAIN_PAGE_LOCATORS.additionalInformation
			const {title} = QUESTIONS_AND_ANSWERS_PAGE_LOCATORS
			await this.hoverOnElement(button)
			await this.validateVisibility(questionsAndAnswersLink)
			await this.clickOnElement(questionsAndAnswersLink)
			await this.validateText(title, 'שאלות ותשובות')
		})
	}
	async navigateToInternationalConferencesPage(): Promise<void> {
		await test.step('Navigate to International Conferences page', async () => {
			const {button, internationalConferencesLink} =
				TOP_MENU_MAIN_PAGE_LOCATORS.additionalInformation
			const {title} = INTERNATIONAL_CONFERENCES_PAGE_LOCATORS
			await this.hoverOnElement(button)
			await this.validateVisibility(internationalConferencesLink)
			await this.clickOnElement(internationalConferencesLink)
			await this.validateText(title, 'כנסים בינלאומיים')
		})
	}

	async navigateToBoardOfDirectorsPage(): Promise<void> {
		await test.step('Navigate to Board of Directors page', async () => {
			const {button, boardOfDirectorsLink} =
				TOP_MENU_MAIN_PAGE_LOCATORS.aboutITCB
			const {boardOfDirectorsTitle} = ABOUT_US_PAGE_LOCATORS
			await this.hoverOnElement(button)
			await this.clickOnElement(boardOfDirectorsLink)
			await this.validateText(boardOfDirectorsTitle, 'הוועד המנהל')
		})
	}
	async navigateToAdvisoryBoardPage(): Promise<void> {
		await test.step('Navigate to Advisory Board page', async () => {
			const {button, advisoryBoardLink} = TOP_MENU_MAIN_PAGE_LOCATORS.aboutITCB
			const {advisoryBoardTitle} = ABOUT_US_PAGE_LOCATORS.advisoryBoardSection
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
			const {button, ourPartnersLink} = TOP_MENU_MAIN_PAGE_LOCATORS.aboutITCB
			const {title} = OUR_PARTNERS_PAGE_LOCATORS
			await this.hoverOnElement(button)
			await this.validateVisibility(ourPartnersLink)
			await this.clickOnElement(ourPartnersLink)
			await this.validateText(title, 'מרכזי הדרכה מוסמכים')
		})
	}
}
