import {communityMembersSharingBoxes} from '@/data/communityMembersSharingPageData'
import {decisionMakerBoxes} from '@/data/decisionMakerPageData'
import {boxesNames} from '@/data/ourCertificationPageData'
import test from '@/fixtures/testSetup'
import {IMPORTANT_FACTS_PAGE_LOCATORS} from '../locators/Important_Facts'

test.describe('Main Page - Buttons Tests', () => {
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })
  const {facts} = IMPORTANT_FACTS_PAGE_LOCATORS

  facts.forEach((fact) => {
    test(`Validate All Facts button - Important fact #${fact.name}`, async ({
      mainPage,
      importantFactsPage,
    }) => {
      await mainPage.clickOnAllFactsButton()
      await importantFactsPage.validateImportantFact(fact.name)
    })
  })

  boxesNames.forEach((boxName) => {
    test(`Validate View All Certifications button and validate: ${boxName} content`, async ({
      mainPage,
      ourCertificationPage,
    }) => {
      await mainPage.clickOnViewAllCertificationsButton()
      await ourCertificationPage.validateBoxTitleAndBoxImage(boxName)
    })
  })
  boxesNames.forEach((boxName) => {
    test(`Validate Read More button on ${boxName} box`, async ({
      mainPage,
      ourCertificationPage,
    }) => {
      await mainPage.clickOnReadMoreButton(boxName)
      await ourCertificationPage.validateReadMoreSection(boxName)
    })
  })

  decisionMakerBoxes.forEach((decisionMakerBox) => {
    test(`Validate decision makers sharing button and validate ${decisionMakerBox} content`, async ({
      mainPage,
      decisionMakerPage,
    }) => {
      await mainPage.clickOnDecisionMakersSharingButton()
      await decisionMakerPage.validateDecisionMakersSharingBoxContent(
        decisionMakerBox,
      )
    })
  })

  communityMembersSharingBoxes.forEach((boxName) => {
    test(`Click on Community Members Sharing Button and validate ${boxName} content`, async ({
      mainPage,
      communityMembersSharingPage,
    }) => {
      await mainPage.clickOnCommunityMembersSharingButton()
      await communityMembersSharingPage.validateCommunityMembersSharingBoxImg(
        boxName,
      )
    })
  })
})
