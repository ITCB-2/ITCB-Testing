import {expect, type Page, test} from '@playwright/test'
import {URLS} from '../../data/urls'
import {SLIDERS_MAIN_PAGE_LOCATORS} from '../../locators/main-content/Sliders_Main_Page'
import {MainPage} from './MainPage'

export class SlidersMainPage extends MainPage {
	constructor(page: Page) {
		super(page)
	}

	async slide1Verification(): Promise<void> {
		await test.step('Verify Slide 1', async () => {
			const {slider1Title} = SLIDERS_MAIN_PAGE_LOCATORS.slidersTitles
			await this.page.goto(URLS.slide1)
			await this.pressOkToCookies()
			const slider = this.page.getByRole(slider1Title.role, {
				name: slider1Title.name,
			})
			await expect(slider).toBeVisible({timeout: 60000})
			const box = await slider.boundingBox()
			if (box) {
				await this.page.mouse.move(
					box.x + box.width / 2,
					box.y + box.height / 2,
				)
				await this.page.mouse.down()
			}
			await expect(slider).toBeVisible()
			await expect(slider).toContainText(
				'עמותת ITCB מצדיעה לכל הנשים והגברים הפועלים למען ביטחון והגנת המדינה.',
			)
		})
	}

	async slide2Verification(): Promise<void> {
		await test.step('Verify Slide 2', async () => {
			const {slider2Title} = SLIDERS_MAIN_PAGE_LOCATORS.slidersTitles
			await this.page.goto(URLS.slide2)
			await this.pressOkToCookies()
			const slider2 = this.page.getByRole(slider2Title.role, {
				name: slider2Title.name,
			})
			await expect(slider2).toBeVisible({timeout: 60000})
			const box2 = await slider2.boundingBox()
			if (box2) {
				await this.page.mouse.move(
					box2.x + box2.width / 2,
					box2.y + box2.height / 2,
				)
				await this.page.mouse.down()
			}
			await expect(slider2).toBeVisible()
			await expect(slider2).toContainText(
				'אנו גאים להציג את אפליקצית ®ISTQB למונחים המקצועיים מעולם בדיקות התוכנה בשפה העברית.',
			)
		})
	}

	async slide3Verification(): Promise<void> {
		await test.step('Verify Slide 3', async () => {
			await this.page.goto(URLS.slide3)
			await this.pressOkToCookies()
			const slider3Text =
				'אם אתם מחפשים חשיפה אמיתית, ממוקדת ועתירת ערך – זה המקום.'
			const slider3 = this.page.getByText(slider3Text).first()
			await expect(slider3).toBeVisible({timeout: 60000})
			const box3 = await slider3.boundingBox()
			if (box3) {
				await this.page.mouse.move(
					box3.x + box3.width / 2,
					box3.y + box3.height / 2,
				)
				await this.page.mouse.down()
			}
			await expect(slider3).toBeVisible()
			await expect(slider3).toContainText(slider3Text)
		})
	}

	async slide4Verification(): Promise<void> {
		await test.step('Verify Slide 4', async () => {
			await this.page.goto(URLS.slide4)
			await this.pressOkToCookies()
			const slider4Text =
				'רוצים לסיים את 2025 עם תעודת ISTQB רשמית ולקדם את הקריירה בעולם הבדיקות?'
			const slider4 = this.page.getByText(slider4Text).first()
			await expect(slider4).toBeVisible({timeout: 60000})
			const box4 = await slider4.boundingBox()
			if (box4) {
				await this.page.mouse.move(
					box4.x + box4.width / 2,
					box4.y + box4.height / 2,
				)
				await this.page.mouse.down()
			}
			await expect(slider4).toBeVisible()
			await expect(slider4).toContainText(slider4Text)
		})
	}

	async slide5Verification(): Promise<void> {
		await test.step('Verify Slide 5', async () => {
			const {slider5Title} = SLIDERS_MAIN_PAGE_LOCATORS.slidersTitles
			await this.page.goto(URLS.slide5)
			await this.pressOkToCookies()
			const slider5 = this.page.getByRole(slider5Title.role, {
				name: slider5Title.name,
			})
			await expect(slider5).toBeVisible({timeout: 60000})
			const box5 = await slider5.boundingBox()
			if (box5) {
				await this.page.mouse.move(
					box5.x + box5.width / 2,
					box5.y + box5.height / 2,
				)
				await this.page.mouse.down()
			}
			await expect(slider5).toBeVisible()
			await expect(slider5).toContainText('אצלנו תצליח בהייטק, זה בדוק!')
		})
	}
}
