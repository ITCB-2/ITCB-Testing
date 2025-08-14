import {test} from '@/fixtures'
import {
  ABOUT_US_PAGE_LOCATORS,
  BOTTOM_MENU_MAIN_PAGE_LOCATORS,
  DECISION_MAKERS_SHARING_PAGE_LOCATORS,
  EVENTS_SUMMARIES_PAGE_LOCATORS,
  HOW_TO_PREPARE_TO_ISTQB_PAGE_LOCATOR,
  IMPORTANT_FACTS_PAGE_LOCATORS,
  INTERNATIONAL_CONFERENCES_PAGE_LOCATORS,
  ITCB_MAGAZINE_PAGE_LOCATORS,
  MEMBERS_OF_COMMUNITY_SHARING_PAGE_LOCATORS,
  OUR_CERTIFICATIONS_PAGE_LOCATOR,
  OUR_PARTNERS_PAGE_LOCATORS,
  PODCASTS_PAGE_LOCATORS,
  QUESTIONS_AND_ANSWERS_PAGE_LOCATORS,
  SYLLABUS_INFO_PAGE_LOCATORS,
  TERMS_GLOSSARY_PAGE_LOCATORS,
  TIPS_PAGE_LOCATORS,
  USEFUL_LINKS_LOCATORS,
} from '@/locators'
import {expect, type Page} from '@playwright/test'
import {MainPage} from './MainPage'

export class BottomMenuMainPage extends MainPage {
  constructor(page: Page) {
    super(page)
  }
  //why isqb bottom menu navigation
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
  //istqb content bottom menu navigation
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
  //testing in israel bottom menu navigation
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
  // additional information bottom menu navigation
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
  // aboutITCB bottom menu navigation
  async navigateToAboutUsPageBottomMenu(): Promise<void> {
    await test.step('Navigate to About Us page through bottom menu', async () => {
      const {aboutUsLink} = BOTTOM_MENU_MAIN_PAGE_LOCATORS.aboutITCB
      await this.validateVisibility(aboutUsLink)
      await this.clickOnElement(aboutUsLink)
      const pageContent = this.page.getByText('ITCB® - Israel Testing')
      await this.validateURL('https://www.itcb.org.il/?todo=about')
      await expect(pageContent).toContainText('ITCB® - Israel Testing')
    })
  }
  async navigateToBoardOfDirectorsPageBottomMenu(): Promise<void> {
    await test.step('Navigate to Board of Directors page through bottom menu', async () => {
      const {boardOfDirectorsLink} = BOTTOM_MENU_MAIN_PAGE_LOCATORS.aboutITCB
      const {boardOfDirectorsTitle} = ABOUT_US_PAGE_LOCATORS
      await this.validateVisibility(boardOfDirectorsLink)

      // Wait for new page before clicking
      const pagePromise = this.page.context().waitForEvent('page')

      await this.clickOnElement(boardOfDirectorsLink)

      // Get the new page that was opened
      const newPage = await pagePromise
      await newPage.waitForLoadState()

      // Create locator based on role/name
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

      // Wait for new page before clicking
      const pagePromise = this.page.context().waitForEvent('page')

      await this.clickOnElement(advisoryBoardLink)

      // Get the new page that was opened
      const newPage = await pagePromise
      await newPage.waitForLoadState()

      // Create locator based on role/name
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
