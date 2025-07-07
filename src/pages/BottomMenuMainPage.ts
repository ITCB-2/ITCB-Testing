import {MainPage} from '@/pages/MainPage'
import test from '@/fixtures/testSetup'
import {ABOUT_US_PAGE_LOCATORS} from '@/locators/About_Us'
import {DECISION_MAKERS_SHARING_PAGE_LOCATORS} from '@/locators/Decision_Makers_Sharing'
import {EVENTS_SUMMARIES_PAGE_LOCATORS} from '@/locators/Events_Summaries'
import {HOW_TO_PREPARE_TO_ISTQB_PAGE_LOCATOR} from '@/locators/How_To_Prepare_To_ISTQB'
import {IMPORTANT_FACTS_PAGE_LOCATORS} from '@/locators/Important_Facts'
import {INTERNATIONAL_CONFERENCES_PAGE_LOCATORS} from '@/locators/International_Conferences'
import {ITCB_MAGAZINE_PAGE_LOCATORS} from '@/locators/ITCB_Magazine'
import {MAIN_PAGE_LOCATORS} from '@/locators/Main_Page'
import {MEMBERS_OF_COMMUNITY_SHARING_PAGE_LOCATORS} from '@/locators/Members_Of_Community_Sharing'
import {OUR_CERTIFICATIONS_PAGE_LOCATOR} from '@/locators/Our_Certification'
import {OUR_PARTNERS_PAGE_LOCATORS} from '@/locators/Our_Partners'
import {PODCASTS_PAGE_LOCATORS} from '@/locators/Podcasts'
import {QUESTIONS_AND_ANSWERS_PAGE_LOCATORS} from '@/locators/Questions_And_Answers'
import {SYLLABUS_INFO_PAGE_LOCATORS} from '@/locators/Syllabus_Info'
import {TERMS_GLOSSARY_PAGE_LOCATORS} from '@/locators/Terms_Glossary'
import {TIPS_PAGE_LOCATORS} from '@/locators/Tips'
import {USEFUL_LINKS_LOCATORS} from '@/locators/Useful_Links'
import {expect, type Page} from '@playwright/test'

export class BottomMenuMainPage extends MainPage {
  constructor(page: Page) {
    super(page)
  }
  //why isqb bottom menu navigation
  async navigateToDecisionMakersSharingPageBottomMenu(): Promise<void> {
    await test.step('Navigate to Decision Makers Sharing Page through bottom menu', async () => {
      const {decisionMakersSharingLink} =
        MAIN_PAGE_LOCATORS.bottomMenuLinks.whyISTQB
      const {title} = DECISION_MAKERS_SHARING_PAGE_LOCATORS
      await this.validateVisibility(decisionMakersSharingLink)
      await this.clickOnElement(decisionMakersSharingLink)
      await this.validateText(title, 'מקבלי ההחלטות משתפים')
    })
  }
  async navigateToMembersOfCommunitySharingPageBottomMenu(): Promise<void> {
    await test.step('Navigate to Members of Community Sharing Page through bottom menu', async () => {
      const {membersOfCommunitySharingLink} =
        MAIN_PAGE_LOCATORS.bottomMenuLinks.whyISTQB
      const {title} = MEMBERS_OF_COMMUNITY_SHARING_PAGE_LOCATORS
      await this.validateVisibility(membersOfCommunitySharingLink)
      await this.clickOnElement(membersOfCommunitySharingLink)
      await this.validateText(title, 'חברי הקהילה משתפים')
    })
  }
  async navigateToOurCertificationsPageBottomMenu(): Promise<void> {
    await test.step('Navigate to Our Certifications Page through bottom menu', async () => {
      const {ourCertificationsLink} =
        MAIN_PAGE_LOCATORS.bottomMenuLinks.whyISTQB
      const {title} = OUR_CERTIFICATIONS_PAGE_LOCATOR
      await this.validateVisibility(ourCertificationsLink)
      await this.clickOnElement(ourCertificationsLink)
      await this.validateText(title, 'ההסמכות שלנו, הקריירה שלך')
    })
  }
  async navigateToHowToPrepareToISTQBTestPageBottomMenu(): Promise<void> {
    await test.step('Navigate to How To Prepare To ISTQB Test Page through bottom menu', async () => {
      const {howToPrepareToISTQBTestLink} =
        MAIN_PAGE_LOCATORS.bottomMenuLinks.whyISTQB
      const {title} = HOW_TO_PREPARE_TO_ISTQB_PAGE_LOCATOR
      await this.validateVisibility(howToPrepareToISTQBTestLink)
      await this.clickOnElement(howToPrepareToISTQBTestLink)
      await this.validateText(title, 'איך להתכונן למבחן ISTQB')
    })
  }
  //istqb content bottom menu navigation
  async navigateToTermsGlossaryPageBottomMenu(): Promise<void> {
    await test.step('Navigate to Terms Glossary page through bottom menu', async () => {
      const {termsGlossaryLink} =
        MAIN_PAGE_LOCATORS.bottomMenuLinks.ISTQBContent
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
      const {syllabusInfoLink} = MAIN_PAGE_LOCATORS.bottomMenuLinks.ISTQBContent
      const {title} = SYLLABUS_INFO_PAGE_LOCATORS
      await this.validateVisibility(syllabusInfoLink)
      await this.clickOnElement(syllabusInfoLink)
      await this.validateText(title, 'כל מה שרציתם לדעת על סילבוס CTFL')
    })
  }
  //testing in israel bottom menu navigation
  async navigateToUsefulLinksPageBottomMenu(): Promise<void> {
    await test.step('Navigate to Useful Links page through bottom menu', async () => {
      const {usefulLinksLink} =
        MAIN_PAGE_LOCATORS.bottomMenuLinks.testingInIsrael
      const {title} = USEFUL_LINKS_LOCATORS
      await this.validateVisibility(usefulLinksLink)
      await this.clickOnElement(usefulLinksLink)
      await this.validateText(title, 'קישורים שימושיים')
    })
  }
  async navigateToITCBMagazinePageBottomMenu(): Promise<void> {
    await test.step('Navigate to ITCB Magazine page through bottom menu', async () => {
      const {ITCBMagazineLink} =
        MAIN_PAGE_LOCATORS.bottomMenuLinks.testingInIsrael
      const {viewAllMagazineIssuesLink} = ITCB_MAGAZINE_PAGE_LOCATORS
      await this.validateVisibility(ITCBMagazineLink)
      await this.clickOnElement(ITCBMagazineLink)
      await this.validateVisibility(viewAllMagazineIssuesLink)
    })
  }
  async navigateToPodcastsPageBottomMenu(): Promise<void> {
    await test.step('Navigate to Podcasts page through bottom menu', async () => {
      const {podcastsLink} = MAIN_PAGE_LOCATORS.bottomMenuLinks.testingInIsrael
      const {officialPodcastLink} = PODCASTS_PAGE_LOCATORS
      await this.validateVisibility(podcastsLink)
      await this.clickOnElement(podcastsLink)
      await this.validateVisibility(officialPodcastLink)
    })
  }
  async navigateToEventsSummariesPageBottomMenu(): Promise<void> {
    await test.step('Navigate to Events Summaries page through bottom menu', async () => {
      const {eventsSummariesLink} =
        MAIN_PAGE_LOCATORS.bottomMenuLinks.testingInIsrael
      const {title} = EVENTS_SUMMARIES_PAGE_LOCATORS
      await this.validateVisibility(eventsSummariesLink)
      await this.clickOnElement(eventsSummariesLink)
      await this.validateText(title, 'סיכומי אירועים')
    })
  }
  async navigateToTipsPageBottomMenu(): Promise<void> {
    await test.step('Navigate to Tips page through bottom menu', async () => {
      const {tipsLink} = MAIN_PAGE_LOCATORS.bottomMenuLinks.testingInIsrael
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
        MAIN_PAGE_LOCATORS.bottomMenuLinks.additionalInformation
      const {title} = IMPORTANT_FACTS_PAGE_LOCATORS
      await this.validateVisibility(importantFactsLink)
      await this.clickOnElement(importantFactsLink)
      await this.validateText(title, 'עובדות שחשוב שתדעו')
    })
  }
  async navigateToQuestionsAndAnswersPageBottomMenu(): Promise<void> {
    await test.step('Navigate to Questions and Answers page through bottom menu', async () => {
      const {questionsAndAnswersLink} =
        MAIN_PAGE_LOCATORS.bottomMenuLinks.additionalInformation
      const {title} = QUESTIONS_AND_ANSWERS_PAGE_LOCATORS
      await this.validateVisibility(questionsAndAnswersLink)
      await this.clickOnElement(questionsAndAnswersLink)
      await this.validateText(title, 'שאלות ותשובות')
    })
  }
  async navigateToInternationalConferencesPageBottomMenu(): Promise<void> {
    await test.step('Navigate to International Conferences page through bottom menu', async () => {
      const {internationalConferencesLink} =
        MAIN_PAGE_LOCATORS.bottomMenuLinks.additionalInformation
      const {title} = INTERNATIONAL_CONFERENCES_PAGE_LOCATORS
      await this.validateVisibility(internationalConferencesLink)
      await this.clickOnElement(internationalConferencesLink)
      await this.validateText(title, 'כנסים בינלאומיים')
    })
  }
  // aboutITCB bottom menu navigation
  async navigateToAboutUsPageBottomMenu(): Promise<void> {
    await test.step('Navigate to About Us page through bottom menu', async () => {
      const {aboutUsLink} = MAIN_PAGE_LOCATORS.bottomMenuLinks.aboutITCB
      await this.validateVisibility(aboutUsLink)
      await this.clickOnElement(aboutUsLink)
      const pageContent = this.page.getByText('ITCB® - Israel Testing')
      await this.validateURL('https://www.itcb.org.il/?todo=about')
      await expect(pageContent).toContainText('ITCB® - Israel Testing')
    })
  }
  async navigateToBoardOfDirectorsPageBottomMenu(): Promise<void> {
    await test.step('Navigate to Board of Directors page through bottom menu', async () => {
      const {boardOfDirectorsLink} =
        MAIN_PAGE_LOCATORS.bottomMenuLinks.aboutITCB
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
      const {advisoryBoardLink} = MAIN_PAGE_LOCATORS.bottomMenuLinks.aboutITCB
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
      const {ourPartnersLink} = MAIN_PAGE_LOCATORS.bottomMenuLinks.aboutITCB
      const {title} = OUR_PARTNERS_PAGE_LOCATORS
      await this.validateVisibility(ourPartnersLink)
      await this.clickOnElement(ourPartnersLink)
      await this.validateText(title, 'מרכזי הדרכה מוסמכים')
    })
  }
}
