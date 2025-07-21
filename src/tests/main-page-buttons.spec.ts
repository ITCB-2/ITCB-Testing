import test from '@/fixtures/testSetup'
import {IMPORTANT_FACTS_PAGE_LOCATORS} from '@/locators/Important_Facts'
import {OUR_CERTIFICATIONS_PAGE_LOCATOR} from '@/locators/Our_Certification'
import {DECISION_MAKERS_SHARING_PAGE_LOCATORS} from '@/locators/Decision_Makers_Sharing'
test.describe('Main Page - Buttons Tests', () => {
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })

  IMPORTANT_FACTS_PAGE_LOCATORS.facts.forEach(({locator, text, name}) => {
    test(`Validate All Facts button - Important fact #${name}`, async ({
      mainPage,
    }) => {
      await mainPage.clickOnAllFactsButton()
      await mainPage.validateFacts(locator, text, name)
    })
  })

  OUR_CERTIFICATIONS_PAGE_LOCATOR.boxes.forEach(
    ({boxTitleLocator, boxImageLocator, name, titleText}) => {
      test(`Validate View All Certifications button and validate: ${name} content`, async ({
        mainPage,
      }) => {
        await mainPage.clickOnViewAllCertificationsButton()
        await mainPage.validateBoxTitleAndImage(
          boxTitleLocator,
          titleText,
          boxImageLocator,
          name,
        )
      })
    },
  )
  OUR_CERTIFICATIONS_PAGE_LOCATOR.boxes.forEach(
    ({readMoreButton, name, subBoxTitle, subBoxText}) => {
      test(`Validate Read More button on ${name} box`, async ({mainPage}) => {
        await mainPage.clickOnReadMoreButton(readMoreButton, name)
        await mainPage.validateReadMoreSection(subBoxTitle, subBoxText)
      })
    },
  )

  DECISION_MAKERS_SHARING_PAGE_LOCATORS.desictionMakersSharingboxes.forEach(
    ({img, name}) => {
      test(`Validate decision makers sharing button and validate ${name} content`, async ({
        mainPage,
      }) => {
        await mainPage.clickOnDecisionMakersSharingButton()
        await mainPage.validateDecisionMakersSharingBoxContent(img, name)
      })
    },
  )
})
