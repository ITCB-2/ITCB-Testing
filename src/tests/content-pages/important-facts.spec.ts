import {expect, test} from '@playwright/test'
import {ROUTES} from '../../constants/routes'
import {importantFactsPage} from '../../pages/content-pages/important-facts.page'
import {mainPage} from '../../pages/main-content/main.page'

test.describe('Important Facts Page Tests @nightly', () => {
	test.beforeEach(async ({page}) => {
		const main = mainPage(page)
		await page.goto(ROUTES.home, {timeout: 90000})
		await main.acceptCookiesButton.click()
		await expect(main.acceptCookiesButton).not.toBeVisible()
		await expect(main.importantFactsSectionTitle).toBeVisible()
	})

	test('Validate All Facts button and all important facts', async ({page}) => {
		const main = mainPage(page)
		const importantFactsContent = importantFactsPage(page)
		await main.allFactsLink.click()
		await expect(importantFactsContent.title).toContainText(
			'עובדות שחשוב שתדעו',
		)

		for (const factName of importantFactsContent.factNames) {
			await expect(importantFactsContent.fact(factName)).toBeVisible()
		}
	})
})
