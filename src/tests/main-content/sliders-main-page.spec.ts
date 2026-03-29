import {expect, type Locator, type Page, test} from '@playwright/test'
import {slidersMainPage} from '../../pages/main-content/sliders-main.page'
import {mainPage} from '../../pages/main-content/main.page'

const clickSlide = async (page: Page, slideTitle: Locator): Promise<void> => {
	const box = await slideTitle.boundingBox()
	if (!box) {
		throw new Error('Slide title bounding box not found')
	}

	await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
	await page.mouse.down()
	await page.mouse.up()
}

test.describe.serial('Sliders Main Page Tests @sanity', () => {
	test.describe.configure({timeout: 180000})

	test('should validate all slides', async ({page}) => {
		const main = mainPage(page)
		const slider = slidersMainPage(page)

		for (const slideName of slider.slideNames) {
			await page.goto(slider.slideRoute(slideName), {timeout: 90000})
			await page.waitForLoadState('domcontentloaded')
			if (await main.acceptCookiesButton.isVisible()) {
				await main.acceptCookiesButton.click()
				await expect(main.acceptCookiesButton).not.toBeVisible()
			}
			const slideTitle = slider.slideTitle(slideName)
			await slideTitle.waitFor({state: 'visible', timeout: 60000})
			await expect(slideTitle).toBeVisible()
			await clickSlide(page, slideTitle)
			await expect(slideTitle).toBeVisible()
			await expect(slideTitle).toContainText(
				slider.slideExpectedText(slideName),
			)
		}
	})
})
