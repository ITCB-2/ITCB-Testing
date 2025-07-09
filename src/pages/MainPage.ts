import {BasePage} from '@/core/BasePage'
import {BASE_URL} from '@/data/urls'
import test from '@/fixtures/testSetup'
import {IMPORTANT_FACTS_PAGE_LOCATORS} from '@/locators/Important_Facts'
import {MAIN_PAGE_LOCATORS} from '@/locators/Main_Page'
import {expect, type Page} from '@playwright/test'
import {OUR_CERTIFICATIONS_PAGE_LOCATOR} from '../locators/Our_Certification'
import {DECISION_MAKERS_SHARING_PAGE_LOCATORS} from '../locators/Decision_Makers_Sharing'

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

  async clickOnAllFactsButton(): Promise<void> {
    await test.step('Click on All Facts Button and Validate Facts Page Content', async () => {
      const {allFactsLink} = MAIN_PAGE_LOCATORS.importantFactsSection
      await this.clickOnElement(allFactsLink)

      const {title} = IMPORTANT_FACTS_PAGE_LOCATORS
      const {fact1, fact2, fact3, fact4} = IMPORTANT_FACTS_PAGE_LOCATORS

      // ולידציה של כותרת העמוד
      await this.validateText(title, 'עובדות שחשוב שתדעו')

      // ולידציה של כל 4 העובדות
      await this.validateText(
        fact1,
        'ISTQB® - International Software Testing Qualification Board',
      )

      await this.validateText(
        fact2,
        'תוכנה בדוקה כהלכה היא התחייבות לאיכות ולמצוינות',
      )

      await this.validateText(
        fact3,
        'להסמכה שלנו 3 רמות: בסיסית, מתקדמת ולמומחים',
      )

      await this.validateText(
        fact4,
        'גם אם אין לך רקע בתחום, בעזרת מבחן ההסמכה שלנו דלתות עולם ההייטק',
      )
    })
  }
  async clickOnViewAllCertificationsButton(): Promise<void> {
    await test.step('Click on View All Certifications Button', async () => {
      const {allCertificationsLink} =
        MAIN_PAGE_LOCATORS.ourCertificationsSection
      const {
        entryLevelTestingProfessionalbox,
        testLeadBox,
        expertTesterBox,
        TestingCertificationForDevelopersBox,
      } = OUR_CERTIFICATIONS_PAGE_LOCATOR

      await this.clickOnElement(allCertificationsLink)

      await this.validateText(
        entryLevelTestingProfessionalbox.boxTitle,
        'מקצוען בדיקות בתחילת קריירה',
      )
      await this.validateVisibility(entryLevelTestingProfessionalbox.boxImage)
      await this.validateText(testLeadBox.boxTitle, 'מוביל בדיקות')
      await this.validateVisibility(testLeadBox.boxImage)
      await this.validateText(expertTesterBox.boxTitle, 'בודק מומחה')
      await this.validateVisibility(expertTesterBox.boxImage)
      await this.validateText(
        TestingCertificationForDevelopersBox.boxTitle,
        'הסמכת בדיקות למפתחים',
      )
      await this.validateVisibility(
        TestingCertificationForDevelopersBox.boxImage,
      )
    })
  }
  async clickOnReadMoreButtonOnEntryLevelTestingProfessionalBox(): Promise<void> {
    await test.step('Click on Read More Button on Entry Level Testing Professional Box', async () => {
      const {entryLevelTestingProfessionalbox} = OUR_CERTIFICATIONS_PAGE_LOCATOR
      const {foundationLevelBox, AgileTesterFoundationLevelBox} =
        OUR_CERTIFICATIONS_PAGE_LOCATOR.readMoreSection
      await this.clickOnElement(entryLevelTestingProfessionalbox.readMoreButton)
      await this.validateText(foundationLevelBox.boxTitle, 'Foundation Level')
      await this.validateText(
        AgileTesterFoundationLevelBox.boxTitle,
        'Agile Tester Foundation level',
      )
    })
  }
  async clickOnReadMoreButtonOnTestLeadBox(): Promise<void> {
    await test.step('Click on Read More Button on Test Lead Box', async () => {
      const {testLeadBox} = OUR_CERTIFICATIONS_PAGE_LOCATOR
      const {managersBox, analystsBox} =
        OUR_CERTIFICATIONS_PAGE_LOCATOR.readMoreSection
      await this.clickOnElement(testLeadBox.readMoreButton)
      await this.validateText(managersBox.boxTitle, 'מנהלים (ATM)')
      await this.validateText(analystsBox.boxTitle, 'אנליסטים (ATA)')
    })
  }
  async clickOnReadMoreButtonOnExpertTesterBox(): Promise<void> {
    await test.step('Click on Read More Button on Expert Tester Box', async () => {
      const {expertTesterBox} = OUR_CERTIFICATIONS_PAGE_LOCATOR
      await this.clickOnElement(expertTesterBox.readMoreButton)
      // כאן תצטרך להוסיף validations לעמוד של Expert Tester
      // לפי התוכן שמופיע אחרי הלחיצה על קרא עוד
    })
  }
  async clickOnReadMoreButtonOnTestingCertificationForDevelopersBox(): Promise<void> {
    await test.step('Click on Read More Button on Testing Certification For Developers Box', async () => {
      const {TestingCertificationForDevelopersBox} =
        OUR_CERTIFICATIONS_PAGE_LOCATOR
      const {foundationLevelBox} =
        OUR_CERTIFICATIONS_PAGE_LOCATOR.readMoreSection
      await this.clickOnElement(
        TestingCertificationForDevelopersBox.readMoreButton,
      )

      await this.validateText(foundationLevelBox.boxTitle, 'Foundation Level')
    })
  }
  async clickOnDecisionMakersSharingButton(): Promise<void> {
    await test.step('Click on Decision Makers Sharing Button', async () => {
      const {decisionMakersSharingLink} =
        MAIN_PAGE_LOCATORS.decisionMakersSharingSection
      const {
        kobiYonasiBox,
        ketyTrachtmanBox,
        michaelTivinBox,
        MorAbazizBox,
        omerPhilipovBox,
      } = DECISION_MAKERS_SHARING_PAGE_LOCATORS

      await this.clickOnElement(decisionMakersSharingLink)
      await this.validateVisibility(kobiYonasiBox.img)
      await this.validateVisibility(ketyTrachtmanBox.img)
      await this.validateVisibility(michaelTivinBox.img)
      await this.validateVisibility(MorAbazizBox.img)
      await this.validateVisibility(omerPhilipovBox.img)
    })
  }
}
;``
