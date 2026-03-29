import {expect, test} from '@playwright/test'
import {ROUTES} from '../../constants/routes'
import {ourCertificationsPage} from '../../pages/content-pages/our-certifications.page'
import {mainPage} from '../../pages/main-content/main.page'

test.describe('Our Certifications Page Tests @nightly', () => {
	test.beforeEach(async ({page}) => {
		const main = mainPage(page)
		await page.goto(ROUTES.home, {timeout: 90000})
		await main.acceptCookiesButton.click()
		await expect(main.acceptCookiesButton).not.toBeVisible()
		await expect(main.importantFactsSectionTitle).toBeVisible()
	})

	test('Validate View All Certifications button and all certification content', async ({
		page,
	}) => {
		const main = mainPage(page)
		const certifications = ourCertificationsPage(page)
		await main.allCertificationsLink.click()
		await expect(certifications.title).toContainText('ההסמכות שלנו')

		for (const boxName of certifications.boxNames) {
			await expect(certifications.boxTitle(boxName)).toBeVisible()
			await expect(certifications.boxImage(boxName)).toBeVisible()
		}
	})

	test('Validate Read More button on all certification boxes', async ({
		page,
	}) => {
		for (const boxName of ourCertificationsPage(page).boxNames) {
			const main = mainPage(page)
			const certifications = ourCertificationsPage(page)
			await page.goto(ROUTES.home, {timeout: 90000})
			if (await main.acceptCookiesButton.isVisible()) {
				await main.acceptCookiesButton.click()
				await expect(main.acceptCookiesButton).not.toBeVisible()
			}
			await expect(main.importantFactsSectionTitle).toBeVisible()
			await certifications.readMoreButton(boxName).click()
			await expect(certifications.subBoxTitle(boxName)).toBeVisible()
		}
	})
})
