import {expect, test} from '@playwright/test'
import {ROUTES} from '../../constants/routes'
import {communityMembersSharingPage} from '../../pages/content-pages/community-members-sharing.page'
import {mainPage} from '../../pages/main-content/main.page'

test.describe('Community Members Sharing Page Tests @nightly', () => {
	test.beforeEach(async ({page}) => {
		const main = mainPage(page)
		await page.goto(ROUTES.home, {timeout: 90000})
		await main.acceptCookiesButton.click()
		await expect(main.acceptCookiesButton).not.toBeVisible()
		await expect(main.importantFactsSectionTitle).toBeVisible()
	})

	test('Validate community members sharing button and validate all members content', async ({
		page,
	}) => {
		const main = mainPage(page)
		const communityMembers = communityMembersSharingPage(page)
		await main.communityMembersSharingLink.click()
		await page.waitForLoadState('domcontentloaded')
		await expect(page).toHaveURL(
			new RegExp(`${ROUTES.communityMembersSharing.replace('?', '\\?')}$`),
		)
		await expect(communityMembers.title).toBeVisible()

		for (const memberName of communityMembers.memberNames) {
			const image = communityMembers.memberImage(memberName)
			await image.scrollIntoViewIfNeeded()
			await expect(image).toBeVisible()
			await expect(communityMembers.memberPosition(memberName)).toBeVisible()
		}
	})
})
