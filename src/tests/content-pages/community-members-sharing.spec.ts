import {test} from '../../fixtures/testSetup'
import {CommunityMembersSharingPage} from '../../pages/content-pages/CommunityMembersSharingPage'

test.describe('Community Members Sharing Page Tests @regression', () => {
	test.beforeEach(async ({mainPage}) => {
		await mainPage.openMainPage()
	})

	const communityMemberNames =
		CommunityMembersSharingPage.communityMembersSharingBoxes.map(
			(member) => member.name,
		)

	communityMemberNames.forEach((memberName) => {
		test(`Validate community members sharing button and validate ${memberName} content`, async ({
			mainPage,
			communityMembersSharingPage,
		}) => {
			await mainPage.clickOnCommunityMembersSharingButton()
			await communityMembersSharingPage.validateCommunityMembersSharingBoxContent(
				memberName,
			)
		})
	})
})
