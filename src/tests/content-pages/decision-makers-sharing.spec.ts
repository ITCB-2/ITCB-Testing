import {test} from '../../fixtures/testSetup'
import {DecisionMakerPage} from '../../pages/content-pages/DesicionMakerPage'

test.describe('Decision Makers Sharing Page Tests @regression', () => {
	test.beforeEach(async ({mainPage}) => {
		await mainPage.openMainPage()
	})

	const decisionMakerNames = DecisionMakerPage.decisionMakersSharingBoxes.map(
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
