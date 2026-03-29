import {expect, test} from '@playwright/test'
import {ROUTES} from '../../constants/routes'
import {decisionMakersSharingPage} from '../../pages/content-pages/decision-makers-sharing.page'
import {mainPage} from '../../pages/main-content/main.page'

test.describe('Decision Makers Sharing Page Tests @nightly', () => {
	test.beforeEach(async ({page}) => {
		const main = mainPage(page)
		await page.goto(ROUTES.home, {timeout: 90000})
		await main.acceptCookiesButton.click()
		await expect(main.acceptCookiesButton).not.toBeVisible()
		await expect(main.importantFactsSectionTitle).toBeVisible()
	})

	test('Validate decision makers sharing button and all decision maker content', async ({
		page,
	}) => {
		const main = mainPage(page)
		const decisionMakers = decisionMakersSharingPage(page)
		await main.decisionMakersSharingLink.click()
		await page.waitForLoadState('domcontentloaded')
		await expect(page).toHaveURL(
			new RegExp(`${ROUTES.decisionMakersSharing.replace('?', '\\?')}$`),
		)

		for (const decisionMakerName of decisionMakers.boxNames) {
			const image = decisionMakers.boxImage(decisionMakerName)
			await image.scrollIntoViewIfNeeded()
			await expect(image).toBeVisible()
		}
	})
})
