import {expect, type Page, test} from '@playwright/test'
import {URLS} from '../../data/urls'
import {MainPage} from './MainPage'

export class SlidersMainPage extends MainPage {
	public readonly slider1Title = {
		role: 'heading',
		name: 'חוגגים 10 שנים לתחרות הבדיקות של ישראל!',
	} as const

	public readonly slider2Title = {
		role: 'heading',
		name: 'אנו גאים להציג את אפליקציית ®ISTQB למונחים המקצועיים מעולם בדיקות התוכנה בשפה העברית.',
	} as const

	public readonly slider3Title = {
		role: 'heading' as const,
		name: 'אנו גאים להציג את אפליקציית ®ISTQB למונחים המקצועיים מעולם בדיקות התוכנה בשפה העברית.',
	}

	public readonly slider4Title = {
		role: 'heading' as const,
		name: 'אצלנו תצליח בהייטק, זה בדוק!',
	} as const

	public readonly slider5Title = {
		role: 'heading',
		name: 'אצלנו תצליח בהייטק, זה בדוק!',
	} as const

	constructor(page: Page) {
		super(page)
	}

	async slide1Verification(): Promise<void> {
		await test.step('Verify Slide 1', async () => {
			await this.page.goto(URLS.slide1)
			await this.page.waitForLoadState('domcontentloaded')
			await this.pressOkToCookies()
			const slider = this.page.getByRole(this.slider1Title.role, {
				name: this.slider1Title.name,
			})
			await slider.waitFor({state: 'visible', timeout: 60000})
			await expect(slider).toBeVisible()
			const box = await slider.boundingBox()
			if (box) {
				await this.page.mouse.move(
					box.x + box.width / 2,
					box.y + box.height / 2,
				)
				await this.page.mouse.down()
				await this.page.mouse.up()
			}
			await expect(slider).toBeVisible()
			await expect(slider).toContainText(
				'חוגגים 10 שנים לתחרות הבדיקות של ישראל!',
			)
		})
	}

	async slide2Verification(): Promise<void> {
		await test.step('Verify Slide 2', async () => {
			await this.page.goto(URLS.slide2)
			await this.pressOkToCookies()
			const slider2 = this.page.getByRole(this.slider2Title.role, {
				name: this.slider2Title.name,
			})
			await expect(slider2).toBeVisible({timeout: 60000})
			const box2 = await slider2.boundingBox()
			if (box2) {
				await this.page.mouse.move(
					box2.x + box2.width / 2,
					box2.y + box2.height / 2,
				)
				await this.page.mouse.down()
				await this.page.mouse.up()
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
			const slider3 = this.page.getByRole(this.slider3Title.role, {
				name: this.slider3Title.name,
			})
			await expect(slider3).toBeVisible({timeout: 60000})
			const box3 = await slider3.boundingBox()
			if (box3) {
				await this.page.mouse.move(
					box3.x + box3.width / 2,
					box3.y + box3.height / 2,
				)
				await this.page.mouse.down()
				await this.page.mouse.up()
			}
			await expect(slider3).toBeVisible()
			await expect(slider3).toContainText(
				'אנו גאים להציג את אפליקצית ®ISTQB למונחים המקצועיים מעולם בדיקות התוכנה בשפה העברית.',
			)
		})
	}

	async slide4Verification(): Promise<void> {
		await test.step('Verify Slide 4', async () => {
			await this.page.goto(URLS.slide4)
			await this.pressOkToCookies()
			const slider4 = this.page.getByRole(this.slider4Title.role, {
				name: this.slider4Title.name,
			})
			await expect(slider4).toBeVisible({timeout: 60000})
			const box4 = await slider4.boundingBox()
			if (box4) {
				await this.page.mouse.move(
					box4.x + box4.width / 2,
					box4.y + box4.height / 2,
				)
				await this.page.mouse.down()
				await this.page.mouse.up()
			}
			await expect(slider4).toBeVisible()
			await expect(slider4).toContainText('אצלנו תצליח בהייטק, זה בדוק!')
		})
	}

	async slide5Verification(): Promise<void> {
		await test.step('Verify Slide 5', async () => {
			await this.page.goto(URLS.slide5)
			await this.pressOkToCookies()
			const slider5 = this.page.getByRole(this.slider5Title.role, {
				name: this.slider5Title.name,
			})
			await expect(slider5).toBeVisible({timeout: 60000})
			const box5 = await slider5.boundingBox()
			if (box5) {
				await this.page.mouse.move(
					box5.x + box5.width / 2,
					box5.y + box5.height / 2,
				)
				await this.page.mouse.down()
				await this.page.mouse.up()
			}
			await expect(slider5).toBeVisible()
			await expect(slider5).toContainText('אצלנו תצליח בהייטק, זה בדוק!')
		})
	}
}
