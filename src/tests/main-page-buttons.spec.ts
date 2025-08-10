import test from '@/fixtures/testSetup'
import {COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS} from '@/locators/Community_Members_Sharing_Page'
import {DECISION_MAKERS_SHARING_PAGE_LOCATORS} from '@/locators/Decision_Makers_Sharing'
import {IMPORTANT_FACTS_PAGE_LOCATORS} from '@/locators/Important_Facts'
import {OUR_CERTIFICATIONS_PAGE_LOCATOR} from '@/locators/Our_Certification'

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

  const {boxes} = OUR_CERTIFICATIONS_PAGE_LOCATOR
  const boxesNames = boxes.map((box) => box.name)

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
  const {decisionMakersSharingBoxes} = DECISION_MAKERS_SHARING_PAGE_LOCATORS
  const decisionMakerNames = decisionMakersSharingBoxes.map(
    (maker) => maker.name,
  )

  decisionMakerNames.forEach((decisionMakerName) => {
    test(`Validate decision makers sharing button and validate ${decisionMakerName} content`, async ({
      mainPage,
      decisionMakerPage,
    }) => {
      await mainPage.clickOnDecisionMakersSharingButton()
      await decisionMakerPage.validateDecisionMakersSharingBoxContent(
        decisionMakerName,
      )
    })
  })
  const {communityMembersSharingBoxes} = COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS
  const communityMemberNames = communityMembersSharingBoxes.map(
    (box) => box.name,
  )

  communityMemberNames.forEach((boxName) => {
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
