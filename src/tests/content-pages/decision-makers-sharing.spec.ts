import {test} from '../../fixtures/testSetup'
import {DECISION_MAKERS_SHARING_PAGE_LOCATORS} from '../../locators/content-pages/Decision_Makers_Sharing'

test.describe('Decision Makers Sharing Page Tests @regression', () => {
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
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
})
