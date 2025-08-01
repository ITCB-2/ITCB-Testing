import {factNames} from '@/data/importantFactsPageData'
import {boxesNames} from '@/data/ourCertificationPageData'
import {decisionMakerBoxes} from '@/data/decisionMakerPageData'
import {communityMembersSharingBoxes} from '@/data/communityMembersSharingPageData'
import test from '@/fixtures/testSetup'
test.describe('Main Page - Buttons Tests', () => {
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })

  factNames.forEach((factName) => {
    test(`Validate All Facts button - Important fact #${factName}`, async ({
      mainPage,
      importantFactsPage,
    }) => {
      await mainPage.clickOnAllFactsButton()
      await importantFactsPage.validateImportantFact(factName)
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
