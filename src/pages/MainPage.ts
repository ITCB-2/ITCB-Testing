import {BasePage} from '@/core/BasePage'
import {BASE_URL} from '@/data/urls'
import test from '@/fixtures/testSetup'
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

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }
  async openMainPage(): Promise<void> {
    await test.step('Open Main Page', async () => {
      const {importantFactsTitle} = MAIN_PAGE_LOCATORS.importantFactsSection
      await this.page.goto(BASE_URL)
      await this.pressOkToCookies()
      await this.validateText(importantFactsTitle, 'עובדות שחשוב שתדע')
    })
  }

  async pressOkToCookies(): Promise<void> {
    await test.step('Accept Cookies', async () => {
      await this.clickOnElement(MAIN_PAGE_LOCATORS.acceptCookiesButton)
      await expect(
        this.extractLocator(MAIN_PAGE_LOCATORS.acceptCookiesButton),
      ).not.toBeVisible()
    })
  }
  //צריך להבין איך לעבור את ההגנת בוטים
  async navigateToRegisterToTestPage(): Promise<void> {
    await test.step('Navigate to Register To Test Page', async () => {
      const {registerToTestLink} = MAIN_PAGE_LOCATORS.menuLinks
      await this.validateVisibility(registerToTestLink)
      await this.clickOnElement(registerToTestLink)
      // await this.validateText(title, 'הרשמה למבחן');
    })
  }
  async navigateToDecisionMakersSharingPage(): Promise<void> {
    await test.step('Navigate to Decision Makers Sharing Page', async () => {
      const {button, decisionMakersSharingLink} =
        MAIN_PAGE_LOCATORS.menuLinks.whyISTQB
      const {title} = DECISION_MAKERS_SHARING_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.validateVisibility(decisionMakersSharingLink)
      await this.clickOnElement(decisionMakersSharingLink)
      // Wait for the section to be visible after scrolling
      await this.validateText(title, 'מקבלי ההחלטות משתפים')
    })
  }

  async navigateTOMembersOfCommunitySharingPage(): Promise<void> {
    await test.step('Navigate to Members of Community Sharing Page', async () => {
      const {button, membersOfCommunitySharingLink} =
        MAIN_PAGE_LOCATORS.menuLinks.whyISTQB
      const {title} = MEMBERS_OF_COMMUNITY_SHARING_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.clickOnElement(membersOfCommunitySharingLink)
      // Wait for the section to be visible after scrolling
      await this.validateText(title, 'חברי הקהילה משתפים')
    })
  }

  async navigateToOurCertificationsPage(): Promise<void> {
    await test.step('Navigate to Our Certifications Page', async () => {
      const {button, ourCertificationsLink} =
        MAIN_PAGE_LOCATORS.menuLinks.whyISTQB
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
        MAIN_PAGE_LOCATORS.menuLinks.whyISTQB
      const {title} = HOW_TO_PREPARE_TO_ISTQB_PAGE_LOCATOR
      await this.hoverOnElement(button)
      await this.validateVisibility(howToPrepareToISTQBTestLink)
      await this.clickOnElement(howToPrepareToISTQBTestLink)
      await this.validateText(title, 'איך להתכונן למבחן ISTQB')
    })
  }

  //צריך לבדוק את עניין הפלאפון לפני שממשיך
  async navigateToSyllabusAndSampleExams(): Promise<void> {
    await test.step('Navigate to Syllabus and Sample Exams page', async () => {
      const {button, SyllabusAndSampleExamsLink} =
        MAIN_PAGE_LOCATORS.menuLinks.ISTQBContent
      // const {title} = MEMBERS_OF_COMMUNITY_SHARING_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.clickOnElement(SyllabusAndSampleExamsLink)
      await this.hoverOnElement(button)
    })
  }

  async navigateToTermsGlossaryPage(): Promise<void> {
    await test.step('Navigate to Terms Glossary page', async () => {
      const {button, termsGlossaryLink} =
        MAIN_PAGE_LOCATORS.menuLinks.ISTQBContent
      const {ISTQBGlossaryAdvancedSearchTitle} = TERMS_GLOSSARY_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.clickOnElement(termsGlossaryLink)
      await this.pressOkToCookies()
      await this.validateText(
        ISTQBGlossaryAdvancedSearchTitle,
        'מילון המונחים של ISTQB - תכונות חיפוש מתקדמות',
      )
    })
  }
  //צריך להבין איך לעשות וולידציה פה
  async navigateToListOfCertifiedTestersPage(): Promise<void> {
    await test.step('Navigate to List of Certified Testers page', async () => {
      const {button, listOfCertifiedTestersLink} =
        MAIN_PAGE_LOCATORS.menuLinks.ISTQBContent
      await this.hoverOnElement(button)
      await this.validateVisibility(listOfCertifiedTestersLink)
      await this.clickOnElement(listOfCertifiedTestersLink)

      // await this.validateText(SearchByTitle, 'Search by name or certificate number');
      // await this.validateVisibility(nameTextBox);
    })
  }
  async navigateToSyllabusInfoPage(): Promise<void> {
    await test.step('Navigate to Syllabus Info page', async () => {
      const {button, syllabusInfoLink} =
        MAIN_PAGE_LOCATORS.menuLinks.ISTQBContent
      const {title} = SYLLABUS_INFO_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.validateVisibility(syllabusInfoLink)
      await this.clickOnElement(syllabusInfoLink)
      await this.validateText(title, 'כל מה שרציתם לדעת על סילבוס CTFL 4.0')
    })
  }
  async navigateToUsefulLinksPage(): Promise<void> {
    await test.step('Navigate to Useful Links page', async () => {
      const {button, usefulLinksLink} =
        MAIN_PAGE_LOCATORS.menuLinks.testingInIsrael
      const {title} = USEFUL_LINKS_LOCATORS
      await this.hoverOnElement(button)
      await this.validateVisibility(usefulLinksLink)
      await this.clickOnElement(usefulLinksLink)
      await this.validateText(title, 'קישורים שימושיים')
    })
  }
  async navigateToITCBMagazinePage(): Promise<void> {
    await test.step('Navigate to ITCB Magazine page', async () => {
      const {button, ITCBMagazineLink} =
        MAIN_PAGE_LOCATORS.menuLinks.testingInIsrael
      const {viewAllMagazineIssuesLink} = ITCB_MAGAZINE_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.validateVisibility(ITCBMagazineLink)
      await this.clickOnElement(ITCBMagazineLink)
      await this.pressOkToCookies()
      await this.validateVisibility(viewAllMagazineIssuesLink)
    })
  }
  async navigateToPodcastsPage(): Promise<void> {
    await test.step('Navigate to Podcasts page', async () => {
      const {button, podcastsLink} =
        MAIN_PAGE_LOCATORS.menuLinks.testingInIsrael
      const {officialPodcastLink} = PODCASTS_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.validateVisibility(podcastsLink)
      await this.clickOnElement(podcastsLink)
      await this.pressOkToCookies()
      await this.validateVisibility(officialPodcastLink)
      await this.validateText(officialPodcastLink, 'דף הפודקאסט הרישמי שלנו')
    })
  }
  async navigateToEventsSummariesPage(): Promise<void> {
    await test.step('navigate to Events Summaries page', async () => {
      const {button, eventsSummariesLink} =
        MAIN_PAGE_LOCATORS.menuLinks.testingInIsrael
      const {title} = EVENTS_SUMMARIES_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.validateVisibility(eventsSummariesLink)
      await this.clickOnElement(eventsSummariesLink)
      await this.pressOkToCookies()
      await this.validateText(title, 'סיכומי אירועים')
    })
  }
  async navigateToTipsPage(): Promise<void> {
    await test.step('Navigate to Tips page', async () => {
      const {button, tipsLink} = MAIN_PAGE_LOCATORS.menuLinks.testingInIsrael
      const {title} = TIPS_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.validateVisibility(tipsLink)
      await this.clickOnElement(tipsLink)
      await this.pressOkToCookies()
      await this.validateText(
        title,
        'טיפים לבודקי תכנה - כאן תמצאו טיפים שנכתבו ע"י חברי קהילת הבדיקות בישראל בכדי לח',
      )
    })
  }
  async navigateToImportantFactsPage(): Promise<void> {
    await test.step('navigate to Important Facts page', async () => {
      const {button, importantFactsLink} =
        MAIN_PAGE_LOCATORS.menuLinks.additionalInformation
      const {title} = IMPORTANT_FACTS_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.validateVisibility(importantFactsLink)
      await this.clickOnElement(importantFactsLink)
      await this.pressOkToCookies()
      await this.validateText(title, 'עובדות שחשוב שתדעו')
    })
  }
  async navigateToQuestionsAndAnswersPage(): Promise<void> {
    await test.step('Navigate to Questions and Answers page', async () => {
      const {button, questionsAndAnswersLink} =
        MAIN_PAGE_LOCATORS.menuLinks.additionalInformation
      const {title} = QUESTIONS_AND_ANSWERS_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.validateVisibility(questionsAndAnswersLink)
      await this.clickOnElement(questionsAndAnswersLink)
      await this.pressOkToCookies()
      await this.validateText(title, 'שאלות ותשובות')
    })
  }
  async navigateToInternationalConferencesPage(): Promise<void> {
    await test.step('Navigate to International Conferences page', async () => {
      const {button, internationalConferencesLink} =
        MAIN_PAGE_LOCATORS.menuLinks.additionalInformation
      const {title} = INTERNATIONAL_CONFERENCES_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.validateVisibility(internationalConferencesLink)
      await this.clickOnElement(internationalConferencesLink)
      await this.pressOkToCookies()
      await this.validateText(title, 'כנסים בינלאומיים')
    })
  }
  async navigateToAboutUsPage(): Promise<void> {
    await test.step('navigate to About Us page', async () => {
      const {button, aboutUsLink} = MAIN_PAGE_LOCATORS.menuLinks.aboutITCB
      await this.hoverOnElement(button)
      await this.validateVisibility(aboutUsLink)
      await this.clickOnElement(aboutUsLink)
      await this.pressOkToCookies()
      await this.validateURL('https://www.itcb.org.il/?todo=about')
    })
  }
  async navigateToOurPartnersPage(): Promise<void> {
    await test.step('Navigate to Our Partners page', async () => {
      const {button, ourPartnersLink} = MAIN_PAGE_LOCATORS.menuLinks.aboutITCB
      const {title} = OUR_PARTNERS_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.validateVisibility(ourPartnersLink)
      await this.clickOnElement(ourPartnersLink)
      await this.pressOkToCookies()
      await this.validateText(title, 'מרכזי הדרכה מוסמכים')
    })
  }

  async validateContactOnMainPage(): Promise<void> {
    await test.step('Validate Contact on Main Page', async () => {
      const {ITCBLogo} = MAIN_PAGE_LOCATORS
      const {allFactsLink} = MAIN_PAGE_LOCATORS.importantFactsSection
      const {ourCertificationsTitle, allCertificationsLink} =
        MAIN_PAGE_LOCATORS.ourCertificationsSection
      const {decisionMakersSharingTitle} =
        MAIN_PAGE_LOCATORS.decisionMakersSharingSection
      await this.validateVisibility(allFactsLink)
      await this.validateVisibility(ITCBLogo)
      await this.validateText(ourCertificationsTitle, 'ההסמכות שלנו')
      await this.validateVisibility(allCertificationsLink)
      await this.validateText(
        decisionMakersSharingTitle,
        'מקבלי ההחלטות משתפים',
      )
    })
  }
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
  async navigateToAboutUsPageBottomMenu(): Promise<void> {
    await test.step('Navigate to About Us page through bottom menu', async () => {
      const {aboutUsLink} = MAIN_PAGE_LOCATORS.bottomMenuLinks.aboutITCB
      await this.validateVisibility(aboutUsLink)
      await this.clickOnElement(aboutUsLink)
      await this.validateURL('https://www.itcb.org.il/?todo=about')
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
  async slide1Verification(): Promise<void> {
    await test.step('Verify Slide 1', async () => {
      const {slider1Btn, slider2Btn} =
        MAIN_PAGE_LOCATORS.sliderSection.slidersBtns
      const {slider1Title} = MAIN_PAGE_LOCATORS.sliderSection.slidersTitles
      await this.gotoURL('https://www.itcb.org.il/#slide-1')
      await this.pressOkToCookies()
      const slider = this.extractLocator(slider1Title)
      await expect(slider).toBeVisible({timeout: 60000})
      const box = await slider.boundingBox()
      if (box) {
        await this.page.mouse.move(
          box.x + box.width / 2,
          box.y + box.height / 2,
        )
        await this.page.mouse.down()
      }
      await this.validateVisibility(slider1Btn)
      await this.validateVisibility(slider2Btn)
      await this.validateVisibility(slider1Title)
      await this.validateText(
        slider1Title,
        'אנו גאים להציג את אפליקצית ®ISTQB למונחים המקצועיים מעולם בדיקות התוכנה בשפה העברית',
      )
    })
  }
  async slide2Verification(): Promise<void> {
    await test.step('Verify Slide 2', async () => {
      await this.gotoURL('https://www.itcb.org.il/#slide-2')
      const {slider1Btn, slider3Btn} =
        MAIN_PAGE_LOCATORS.sliderSection.slidersBtns
      const {slider2Title} = MAIN_PAGE_LOCATORS.sliderSection.slidersTitles
      await this.pressOkToCookies()
      const slider2 = this.extractLocator(slider2Title)
      await expect(slider2).toBeVisible({timeout: 60000})
      const box2 = await slider2.boundingBox()
      if (box2) {
        await this.page.mouse.move(
          box2.x + box2.width / 2,
          box2.y + box2.height / 2,
        )
        await this.page.mouse.down()
      }

      await this.validateVisibility(slider1Btn)
      await this.validateVisibility(slider3Btn)
      await this.validateVisibility(slider2Title)
      await this.validateText(
        slider2Title,
        'המועצה הבינלאומית להסמכת בדיקות תוכנה (ISTQB) הגיעה לאבן דרך יוצאת דופן: מעל מיליון הסמכות הוענקו ברחבי העולם.',
      )
    })
  }
  async slide3Verification(): Promise<void> {
    await test.step('Verify Slide 3', async () => {
      await this.gotoURL('https://www.itcb.org.il/#slide-3')
      const {slider2Btn, slider4Btn} =
        MAIN_PAGE_LOCATORS.sliderSection.slidersBtns
      const {slider3Title} = MAIN_PAGE_LOCATORS.sliderSection.slidersTitles
      await this.pressOkToCookies()

      const slider3 = this.extractLocator(slider3Title)
      await expect(slider3).toBeVisible({timeout: 60000})
      const box3 = await slider3.boundingBox()
      if (box3) {
        await this.page.mouse.move(
          box3.x + box3.width / 2,
          box3.y + box3.height / 2,
        )
        await this.page.mouse.down()
      }
      await this.validateVisibility(slider2Btn)
      await this.validateVisibility(slider4Btn)
      await this.validateVisibility(slider3Title)
      await this.validateText(
        slider3Title,
        'מקומות בהם איכות פוגשת מצוינות כנסים עולמיים לבדוקי תוכנה!!!',
      )
    })
  }
  async slide4Verification(): Promise<void> {
    await test.step('Verify Slide 4', async () => {
      await this.gotoURL('https://www.itcb.org.il/#slide-4')
      const {slider3Btn, slider5Btn} =
        MAIN_PAGE_LOCATORS.sliderSection.slidersBtns
      const {slider4Title} = MAIN_PAGE_LOCATORS.sliderSection.slidersTitles
      await this.pressOkToCookies()
      const slider4 = this.extractLocator(slider4Title)
      await expect(slider4).toBeVisible({timeout: 60000})
      const box4 = await slider4.boundingBox()
      if (box4) {
        await this.page.mouse.move(
          box4.x + box4.width / 2,
          box4.y + box4.height / 2,
        )
        await this.page.mouse.down()
      }

      await this.validateVisibility(slider3Btn)
      await this.validateVisibility(slider5Btn)
      await this.validateVisibility(slider4Title)
      await this.validateText(slider4Title, 'אצלנו תצליח בהייטק, זה בדוק!')
    })
  }
  async slide5Verification(): Promise<void> {
    await test.step('Verify Slide 5', async () => {
      await this.gotoURL('https://www.itcb.org.il/#slide-5')
      const {slider5Btn, slider4Btn} =
        MAIN_PAGE_LOCATORS.sliderSection.slidersBtns
      const {slider5Title} = MAIN_PAGE_LOCATORS.sliderSection.slidersTitles
      await this.pressOkToCookies()
      const slider5 = this.extractLocator(slider5Title)
      await expect(slider5).toBeVisible({timeout: 60000})
      const box5 = await slider5.boundingBox()
      if (box5) {
        await this.page.mouse.move(
          box5.x + box5.width / 2,
          box5.y + box5.height / 2,
        )
        await this.page.mouse.down()
      }
      await this.validateVisibility(slider4Btn)
      await this.validateVisibility(slider5Btn)
      await this.validateVisibility(slider5Title)
      await this.validateText(slider5Title, 'עמותת ITCB')
    })
  }
}
