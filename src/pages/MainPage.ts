import {BasePage} from '@/core/BasePage'
import {BASE_URL} from '@/data/urls'
import test from '@/fixtures/testSetup'
import {REGISTER_TO_TEST_LOCATORS} from '@/locators/Register_To_Test'
import {DECISION_MAKERS_SHARING_PAGE_LOCATORS} from '@/locators/Decision_Makers_Sharing'
import {MAIN_PAGE_LOCATORS} from '@/locators/Main_Page'
import {MEMBERS_OF_COMMUNITY_SHARING_PAGE_LOCATORS} from '@/locators/Members_Of_Comunnity_Sharing'
import {OUR_CERTIFACTIONS_PAGE_LOCATOR} from '@/locators/Our_Certifactions'
import {HOW_TO_PREPARE_TO_ISTQB_PAGE_LOCATOR} from '@/locators/How_To_Prepare_To_ISTQB'
import {TERMS_GLOSSARY_PAGE_LOCATORS} from '@/locators/Terms_Glossary'
import{LIST_OF_CERTIFIED_TESTERS_PAGE_LOCATORS} from '@/locators/List_Of_Certified_Testers'
import {SYLLABUS_INFO_PAGE_LOCATORS} from '@/locators/Syllabus_Info'
import {USEFUL_LINKS_LOCATORS} from '@/locators/Useful_Links'
import{ITCB_MAGAZINE_PAGE_LOCATORS}from '@/locators/ITCB_Magazine'
import {PODCASTS_PAGE_LOCATORS} from '@/locators/Podcasts'
import{EVENTS_SUMMARIES_PAGE_LOCATORS} from '@/locators/Events_Summaries'
import{TIPS_PAGE_LOCATORS} from '@/locators/Tips'
import {IMPORTTANT_FACTS_PAGE_LOCATORS} from '@/locators/Important_Facts'
import { QUESTIONS_AND_ANSWERS_PAGE_LOCATORS } from '@/locators/Questions_And_Answers'
import {INTERNATIONAL_CONFERENCES_PAGE_LOCATORS} from '@/locators/International_Conferences'
import {ABOUT_US_PAGE_LOCATORS} from '@/locators/About_Us'
import {OUR_PARTNERS_PAGE_LOCATORS} from '@/locators/Our_Partners'
import {CONTACT_US_PAGE_LOCATORS} from '@/locators/Contact_Us'
import {expect, type Page} from '@playwright/test'


export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }
  async openMainPage(): Promise<void> {
    await test.step('Open Main Page', async () => {
      await this.page.goto(BASE_URL)
      await this.pressOkToCookies()
      await this.validateText(MAIN_PAGE_LOCATORS.title, 'עובדות שחשוב שתדע')
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
      const {registerToTestLink} = MAIN_PAGE_LOCATORS.menuLinks;
      const {title} = REGISTER_TO_TEST_LOCATORS;
      await this.validateVisibility(registerToTestLink);
      await this.clickOnElement(registerToTestLink);
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

  async navigateTOMembersOfComunnitySharingPage(): Promise<void> {
    await test.step('Navigate to Members of Community Sharing Page', async () => {
      const {button, membersOfComunnitySharingLink} =
        MAIN_PAGE_LOCATORS.menuLinks.whyISTQB
      const {title} = MEMBERS_OF_COMMUNITY_SHARING_PAGE_LOCATORS
      await this.hoverOnElement(button)
      await this.clickOnElement(membersOfComunnitySharingLink)
      // Wait for the section to be visible after scrolling
      await this.validateText(title, 'חברי הקהילה משתפים')
    })
  }

  async navigateToOurCertificationsPage(): Promise<void> {
    await test.step('Navigate to Our Certifications Page', async () => {
      const {button, ourCertificationsLink} =
        MAIN_PAGE_LOCATORS.menuLinks.whyISTQB
        const {title} = OUR_CERTIFACTIONS_PAGE_LOCATOR
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
  async navigateToSyllabusAndSampleExams():Promise<void>{
    await test.step('Navigate to Syllabus and Sample Exams page', async () => {
      const {button, SyllabusAndSampleExamsLink} = MAIN_PAGE_LOCATORS.menuLinks.ISTQBContent;
      // const {title} = MEMBERS_OF_COMMUNITY_SHARING_PAGE_LOCATORS
      await this.hoverOnElement(button);
      await this.clickOnElement(SyllabusAndSampleExamsLink);
        await this.hoverOnElement(button);
    })
  }

  async navigateToTermsGlossaryPage(): Promise<void> {
    await test.step('Navigate to Terms Glossary page', async () => {
      const {button, termsGlossaryLink} = MAIN_PAGE_LOCATORS.menuLinks.ISTQBContent
      const {ISTQBGlossaryAdvancedSearchTitle} = TERMS_GLOSSARY_PAGE_LOCATORS;
      await this.hoverOnElement(button)
      await this.clickOnElement(termsGlossaryLink)
      await this.pressOkToCookies();
      await this.validateText(ISTQBGlossaryAdvancedSearchTitle, 'מילון המונחים של ISTQB - תכונות חיפוש מתקדמות');
      
    })
  }
  //צריך להבין איך לעשות וולידציה פה
  async navigateToListOfCertifiedTestersPage(): Promise<void> {
    await test.step('Navigate to List of Certified Testers page', async () => {
      const { button, listOfCertifiedTestersLink } = MAIN_PAGE_LOCATORS.menuLinks.ISTQBContent;
      const { SearchByTitle,nameTextBox } = LIST_OF_CERTIFIED_TESTERS_PAGE_LOCATORS;
      await this.hoverOnElement(button);
      await this.validateVisibility(listOfCertifiedTestersLink);
      await this.clickOnElement(listOfCertifiedTestersLink);
    
      // await this.validateText(SearchByTitle, 'Search by name or certificate number');
      // await this.validateVisibility(nameTextBox);
    });
  }
async navigateToSyllabusInfoPage(): Promise<void> {
  await test.step('Navigate to Syllabus Info page', async () => {
    const {button,syllabusInfoLink}= MAIN_PAGE_LOCATORS.menuLinks.ISTQBContent;
    const {title} = SYLLABUS_INFO_PAGE_LOCATORS;
    await this.hoverOnElement(button);
    await this.validateVisibility(syllabusInfoLink);
    await this.clickOnElement(syllabusInfoLink);
    await this.validateText(title, 'כל מה שרציתם לדעת על סילבוס CTFL 4.0');
  })
}
  async navigateToUsefulLinksPage(): Promise<void> {
    await test.step('Navigate to Useful Links page', async () => {
      const {button, usefulLinksLink} = MAIN_PAGE_LOCATORS.menuLinks.testingInIsael;
      const {title} = USEFUL_LINKS_LOCATORS;
      await this.hoverOnElement(button);
      await this.validateVisibility(usefulLinksLink);
      await this.clickOnElement(usefulLinksLink);
      await this.validateText(title, 'קישורים שימושיים');
    })
  }
async navigateToITCBMagazinePage(): Promise<void> {
  await test.step('Navigate to ITCB Magazine page', async () => {
    const {button,ITCBMagazineLink} = MAIN_PAGE_LOCATORS.menuLinks.testingInIsael;
    const {viewAllMagazineIssuesLink} = ITCB_MAGAZINE_PAGE_LOCATORS;
    await this.hoverOnElement(button);
    await this.validateVisibility(ITCBMagazineLink);
    await this.clickOnElement(ITCBMagazineLink);
    await this.pressOkToCookies();
    await this.validateVisibility(viewAllMagazineIssuesLink);
  } )
}
async navigateToPodcastsPage(): Promise<void> {
  await test.step('Navigate to Podcasts page', async () => {
  const {button, podcatsLink} = MAIN_PAGE_LOCATORS.menuLinks.testingInIsael;
  const {officalPodcastLink} = PODCASTS_PAGE_LOCATORS;
  await this.hoverOnElement(button);
  await this.validateVisibility(podcatsLink);
  await this.clickOnElement(podcatsLink);
  await this.pressOkToCookies();
  await this.validateVisibility(officalPodcastLink);
  await this.validateText(officalPodcastLink, 'דף הפודקאסט הרישמי שלנו');
  })
}
async navigateToEventsSummariesPage(): Promise<void> {
  await test.step('navigate to Events Summaries page', async () => {
  const {button, eventsSummariesLink} = MAIN_PAGE_LOCATORS.menuLinks.testingInIsael;
  const {title} = EVENTS_SUMMARIES_PAGE_LOCATORS;
  await this.hoverOnElement(button);
  await this.validateVisibility(eventsSummariesLink);
  await this.clickOnElement(eventsSummariesLink);
  await this.pressOkToCookies();
  await this.validateText(title, 'סיכומי אירועים');
  })
}
async navigateToTipsPage(): Promise<void>{
  await test.step('Navigate to Tips page', async () => {
  const {button, tipsLink} = MAIN_PAGE_LOCATORS.menuLinks.testingInIsael;
  const {title} = TIPS_PAGE_LOCATORS;
  await this.hoverOnElement(button);
  await this.validateVisibility(tipsLink);
  await this.clickOnElement(tipsLink);
  await this.pressOkToCookies();
  await this.validateText(title, 'טיפים לבודקי תכנה - כאן תמצאו טיפים שנכתבו ע"י חברי קהילת הבדיקות בישראל בכדי לח');
  })
}
async navigateToImportantFactsPage(): Promise<void> {
  await test.step('navigate to Important Facts page', async () => {
  const {button, importantFactsLink} = MAIN_PAGE_LOCATORS.menuLinks.additionalInformation;
  const {title} = IMPORTTANT_FACTS_PAGE_LOCATORS;
  await this.hoverOnElement(button);
  await this.validateVisibility(importantFactsLink);
  await this.clickOnElement(importantFactsLink);
  await this.pressOkToCookies();
  await this.validateText(title, 'עובדות שחשוב שתדעו');
  })
}
async navigateToQuestionsAndAnswersPage(): Promise<void> {
  await test.step('Navigate to Questions and Answers page', async () => {
  const {button, questionsAndAnswersLink} = MAIN_PAGE_LOCATORS.menuLinks.additionalInformation;
  const {title} = QUESTIONS_AND_ANSWERS_PAGE_LOCATORS;
  await this.hoverOnElement(button);
  await this.validateVisibility(questionsAndAnswersLink);
  await this.clickOnElement(questionsAndAnswersLink);
  await this.pressOkToCookies();
  await this.validateText(title, 'שאלות ותשובות');
  })
}
async navigateToInternationalConferencesPage(): Promise<void> {
await test.step('Navigate to International Conferences page', async () => {
  const {button, internationalConferencesLink} = MAIN_PAGE_LOCATORS.menuLinks.additionalInformation;
  const {title} = INTERNATIONAL_CONFERENCES_PAGE_LOCATORS;
  await this.hoverOnElement(button);
  await this.validateVisibility(internationalConferencesLink);
  await this.clickOnElement(internationalConferencesLink);
  await this.pressOkToCookies();
  await this.validateText(title, 'כנסים בינלאומיים');
})
}
async navigateToAboutUsPage(): Promise<void> {
  await test.step('navigate to About Us page', async () => {
  const {button, aboutUsLink} = MAIN_PAGE_LOCATORS.menuLinks.aboutITCB;
  await this.hoverOnElement(button);
  await this.validateVisibility(aboutUsLink);
  await this.clickOnElement(aboutUsLink);
  await this.pressOkToCookies();
  await this.validateURL('https://www.itcb.org.il/?todo=about');
  
  })
}
//צריך להשלים וולידציה
async navigateToBoardOfDirectorsPagesection(): Promise<void> {
await test.step('Navigate to Board of Directors page section', async () => {
const {button, boardOfDirectorsLink} = MAIN_PAGE_LOCATORS.menuLinks.aboutITCB
const {boardOfDirectorsTitle} = ABOUT_US_PAGE_LOCATORS;
await this.hoverOnElement(button);
await this.validateVisibility(boardOfDirectorsLink);
await this.clickOnElement(boardOfDirectorsLink);
// await this.validateText(boardOfDirectorsTitle, 'הוועד');

})
}
//צריך להשלים וולידציה
async navigateToAdvisoryBoardPageSection(): Promise<void> {
  await test.step('Navigate to Advisory Board page section', async () => {
const {button, advisoryBoardLink} = MAIN_PAGE_LOCATORS.menuLinks.aboutITCB;
const {michalTalTitle} = ABOUT_US_PAGE_LOCATORS.advisoryBoardSection;
await this.hoverOnElement(button);
await this.validateVisibility(advisoryBoardLink);
await this.clickOnElement(advisoryBoardLink);
await this.validateText(michalTalTitle, 'מיכל טל');
  })
}
async navigateToOurPartnersPage(): Promise<void> {
  await test.step('Navigate to Our Partners page', async () => {
    const {button, ourPartnersLink} = MAIN_PAGE_LOCATORS.menuLinks.aboutITCB;
    const {title} = OUR_PARTNERS_PAGE_LOCATORS;
    await this.hoverOnElement(button);
    await this.validateVisibility(ourPartnersLink);
    await this.clickOnElement(ourPartnersLink);
    await this.pressOkToCookies();
    await this.validateText(title, 'מרכזי הדרכה מוסמכים');
  })}
  //להבין איך עוברים את חסימת הבוטים
  async navigateToContactUsPage(): Promise<void> {
    await test.step('Navigate to Contact Us page', async () => {
      const {contactUsLink} = MAIN_PAGE_LOCATORS.menuLinks;
      const {title} = CONTACT_US_PAGE_LOCATORS;
      await this.validateVisibility(contactUsLink);
      await this.clickOnElement(contactUsLink);
      // await this.pressOkToCookies();
      // await this.validateText(title, 'צור קשר');
    })
  }




}
