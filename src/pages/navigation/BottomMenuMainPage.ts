import {test} from '@netanelh2/playwright-framework'
import {expect, type Page} from '@playwright/test'
import {BASE_URL} from '../../data/urls'
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
import {BOTTOM_MENU_MAIN_PAGE_LOCATORS} from '../../locators/navigation/Bottom_Main_Menu'
import {MainPage} from '../main-content/MainPage'

export class BottomMenuMainPage extends MainPage {
	constructor(page: Page) {
		super(page)
	}
	async navigateToDecisionMakersSharingPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Decision Makers Sharing Page through bottom menu', async () => {
			const {decisionMakersSharingLink} =
				BOTTOM_MENU_MAIN_PAGE_LOCATORS.whyISTQB
			const {title} = DECISION_MAKERS_SHARING_PAGE_LOCATORS
			await this.validateVisibility(decisionMakersSharingLink)
			await this.clickOnElement(decisionMakersSharingLink)
			await this.validateText(title, 'מקבלי ההחלטות משתפים')
		})
	}
	async navigateToMembersOfCommunitySharingPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Members of Community Sharing Page through bottom menu', async () => {
			const {membersOfCommunitySharingLink} =
				BOTTOM_MENU_MAIN_PAGE_LOCATORS.whyISTQB
			const {title} = MEMBERS_OF_COMMUNITY_SHARING_PAGE_LOCATORS
			await this.validateVisibility(membersOfCommunitySharingLink)
			await this.clickOnElement(membersOfCommunitySharingLink)
			await this.validateText(title, 'חברי הקהילה משתפים')
		})
	}
	async navigateToOurCertificationsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Our Certifications Page through bottom menu', async () => {
			const {ourCertificationsLink} = BOTTOM_MENU_MAIN_PAGE_LOCATORS.whyISTQB
			const {title} = OUR_CERTIFICATIONS_PAGE_LOCATOR
			await this.validateVisibility(ourCertificationsLink)
			await this.clickOnElement(ourCertificationsLink)
			await this.validateText(title, 'ההסמכות שלנו, הקריירה שלך')
		})
	}
	async navigateToHowToPrepareToISTQBTestPageBottomMenu(): Promise<void> {
		await test.step('Navigate to How To Prepare To ISTQB Test Page through bottom menu', async () => {
			const {howToPrepareToISTQBTestLink} =
				BOTTOM_MENU_MAIN_PAGE_LOCATORS.whyISTQB
			const {title} = HOW_TO_PREPARE_TO_ISTQB_PAGE_LOCATOR
			await this.validateVisibility(howToPrepareToISTQBTestLink)
			await this.clickOnElement(howToPrepareToISTQBTestLink)
			await this.validateText(title, 'איך להתכונן למבחן ISTQB')
		})
	}

	async navigateToTermsGlossaryPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Terms Glossary page through bottom menu', async () => {
			const {termsGlossaryLink} = BOTTOM_MENU_MAIN_PAGE_LOCATORS.ISTQBContent
			const {ISTQBGlossaryAdvancedSearchTitle} = TERMS_GLOSSARY_PAGE_LOCATORS
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
			const {syllabusInfoLink} = BOTTOM_MENU_MAIN_PAGE_LOCATORS.ISTQBContent
			const {title} = SYLLABUS_INFO_PAGE_LOCATORS
			await this.validateVisibility(syllabusInfoLink)
			await this.clickOnElement(syllabusInfoLink)
			await this.validateText(title, 'כל מה שרציתם לדעת על סילבוס CTFL')
		})
	}

	async navigateToUsefulLinksPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Useful Links page through bottom menu', async () => {
			const {usefulLinksLink} = BOTTOM_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {title} = USEFUL_LINKS_LOCATORS
			await this.validateVisibility(usefulLinksLink)
			await this.clickOnElement(usefulLinksLink)
			await this.validateText(title, 'קישורים שימושיים')
		})
	}
	async navigateToITCBMagazinePageBottomMenu(): Promise<void> {
		await test.step('Navigate to ITCB Magazine page through bottom menu', async () => {
			const {ITCBMagazineLink} = BOTTOM_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {viewAllMagazineIssuesLink} = ITCB_MAGAZINE_PAGE_LOCATORS
			await this.validateVisibility(ITCBMagazineLink)
			await this.clickOnElement(ITCBMagazineLink)
			await this.validateVisibility(viewAllMagazineIssuesLink)
		})
	}
	async navigateToPodcastsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Podcasts page through bottom menu', async () => {
			const {podcastsLink} = BOTTOM_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {officialPodcastLink} = PODCASTS_PAGE_LOCATORS
			await this.validateVisibility(podcastsLink)
			await this.clickOnElement(podcastsLink)
			await this.validateVisibility(officialPodcastLink)
		})
	}
	async navigateToEventsSummariesPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Events Summaries page through bottom menu', async () => {
			const {eventsSummariesLink} =
				BOTTOM_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {title} = EVENTS_SUMMARIES_PAGE_LOCATORS
			await this.validateVisibility(eventsSummariesLink)
			await this.clickOnElement(eventsSummariesLink)
			await this.validateText(title, 'סיכומי אירועים')
		})
	}
	async navigateToTipsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Tips page through bottom menu', async () => {
			const {tipsLink} = BOTTOM_MENU_MAIN_PAGE_LOCATORS.testingInIsrael
			const {title} = TIPS_PAGE_LOCATORS
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
				BOTTOM_MENU_MAIN_PAGE_LOCATORS.additionalInformation
			const {title} = IMPORTANT_FACTS_PAGE_LOCATORS
			await this.validateVisibility(importantFactsLink)
			await this.clickOnElement(importantFactsLink)
			await this.validateText(title, 'עובדות שחשוב שתדעו')
		})
	}
	async navigateToQuestionsAndAnswersPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Questions and Answers page through bottom menu', async () => {
			const {questionsAndAnswersLink} =
				BOTTOM_MENU_MAIN_PAGE_LOCATORS.additionalInformation
			const {title} = QUESTIONS_AND_ANSWERS_PAGE_LOCATORS
			await this.validateVisibility(questionsAndAnswersLink)
			await this.clickOnElement(questionsAndAnswersLink)
			await this.validateText(title, 'שאלות ותשובות')
		})
	}
	async navigateToInternationalConferencesPageBottomMenu(): Promise<void> {
		await test.step('Navigate to International Conferences page through bottom menu', async () => {
			const {internationalConferencesLink} =
				BOTTOM_MENU_MAIN_PAGE_LOCATORS.additionalInformation
			const {title} = INTERNATIONAL_CONFERENCES_PAGE_LOCATORS
			await this.validateVisibility(internationalConferencesLink)
			await this.clickOnElement(internationalConferencesLink)
			await this.validateText(title, 'כנסים בינלאומיים')
		})
	}

	async navigateToAboutUsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to About Us page through bottom menu', async () => {
			const {aboutUsLink} = BOTTOM_MENU_MAIN_PAGE_LOCATORS.aboutITCB
			await this.validateVisibility(aboutUsLink)
			await this.clickOnElement(aboutUsLink)
			const pageContent = this.page.getByText('ITCB® - Israel Testing')
			await this.validateURL(`${BASE_URL}/?todo=about`)
			await expect(pageContent).toContainText('ITCB® - Israel Testing')
		})
	}
	async navigateToBoardOfDirectorsPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Board of Directors page through bottom menu', async () => {
			const {boardOfDirectorsLink} = BOTTOM_MENU_MAIN_PAGE_LOCATORS.aboutITCB
			const {boardOfDirectorsTitle} = ABOUT_US_PAGE_LOCATORS
			await this.validateVisibility(boardOfDirectorsLink)

			const pagePromise = this.page.context().waitForEvent('page')

			await this.clickOnElement(boardOfDirectorsLink)

			const newPage = await pagePromise
			await newPage.waitForLoadState()

			const locator = newPage.getByRole(boardOfDirectorsTitle.role, {
				name: boardOfDirectorsTitle.name,
			})

			await expect(locator).toBeVisible({timeout: 10000})
			await expect(locator).toHaveText('הוועד המנהל')
		})
	}
	async navigateToAdvisoryBoardPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Advisory Board page through bottom menu', async () => {
			const {advisoryBoardLink} = BOTTOM_MENU_MAIN_PAGE_LOCATORS.aboutITCB
			const {advisoryBoardTitle} = ABOUT_US_PAGE_LOCATORS.advisoryBoardSection

			await this.validateVisibility(advisoryBoardLink)

			const pagePromise = this.page.context().waitForEvent('page')

			await this.clickOnElement(advisoryBoardLink)

			const newPage = await pagePromise
			await newPage.waitForLoadState()

			const locator = newPage.getByRole(advisoryBoardTitle.role, {
				name: advisoryBoardTitle.name,
			})

			await expect(locator).toBeVisible({timeout: 10000})
			await expect(locator).toHaveText('הוועד המייעץ')
		})
	}
	async navigateToOurPartnersPageBottomMenu(): Promise<void> {
		await test.step('Navigate to Our Partners page through bottom menu', async () => {
			const {ourPartnersLink} = BOTTOM_MENU_MAIN_PAGE_LOCATORS.aboutITCB
			const {title} = OUR_PARTNERS_PAGE_LOCATORS
			await this.validateVisibility(ourPartnersLink)
			await this.clickOnElement(ourPartnersLink)
			await this.validateText(title, 'מרכזי הדרכה מוסמכים')
		})
	}
}
