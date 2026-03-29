import {expect, test} from '@playwright/test'
import {ROUTES} from '../../constants/routes'
import {mainPage} from '../../pages/main-content/main.page'

test.describe('Main Page Validate Content Tests @sanity', () => {
	test.describe.configure({timeout: 120000})

	test.beforeEach(async ({page}) => {
		const main = mainPage(page)
		await page.goto(ROUTES.home, {timeout: 90000})
		await main.acceptCookiesButton.click()
		await expect(main.acceptCookiesButton).not.toBeVisible()
		await expect(main.importantFactsSectionTitle).toBeVisible()
	})

	test('should validate the main page content', async ({page}) => {
		const main = mainPage(page)
		await expect(main.allFactsLink).toBeVisible()
		await expect(main.logo).toBeVisible()
		await expect(main.ourCertificationsTitle).toContainText('ההסמכות שלנו')
		await expect(main.allCertificationsLink).toBeVisible()
		await expect(main.decisionMakersSharingTitle).toContainText(
			'מקבלי ההחלטות משתפים',
		)
	})
})
