import {test} from '@netanelh2/playwright-framework'
import {expect, type Page} from '@playwright/test'
import {URLS} from '../../data/urls'
import {MainPage} from './MainPage'

export class SlidersMainPage extends MainPage {
	public static readonly slider1Title = {
		role: 'heading',
		name: 'עמותת ITCB מצדיעה לכל הנשים והגברים הפועלים למען ביטחון והגנת המדינה.',
	} as const

	public static readonly slider2Title = {
		role: 'heading',
		name: 'אנו גאים להציג את אפליקצית ®ISTQB למונחים המקצועיים מעולם בדיקות התוכנה בשפה העברית.',
	} as const

	public static readonly slider3Title =
		'אם אתם מחפשים חשיפה אמיתית, ממוקדת ועתירת ערך – זה המקום.' as const

	public static readonly slider4Title =
		'רוצים לסיים את 2025 עם תעודת ISTQB רשמית ולקדם את הקריירה בעולם הבדיקות?' as const

	public static readonly slider5Title = {
		role: 'heading',
		name: 'אצלנו תצליח בהייטק, זה בדוק!',
	} as const

	public static readonly slider1Btn = {
		role: 'button',
		name: '01',
	} as const

	public static readonly slider2Btn = {
		role: 'button',
		name: '02',
	} as const

	public static readonly slider3Btn = {
		role: 'button',
		name: '03',
	} as const

	public static readonly slider4Btn = {
		role: 'button',
		name: '04',
	} as const

	public static readonly slider5Btn = {
		role: 'button',
		name: '05',
	} as const

	constructor(page: Page) {
		super(page)
	}

	async slide1Verification(): Promise<void> {
		await test.step('Verify Slide 1', async () => {
			await this.gotoURL(URLS.slide1)
			await this.pressOkToCookies()
			const slider = this.extractLocator(SlidersMainPage.slider1Title)
			await expect(slider).toBeVisible({timeout: 60000})
			const box = await slider.boundingBox()
			if (box) {
				await this.page.mouse.move(
					box.x + box.width / 2,
					box.y + box.height / 2,
				)
				await this.page.mouse.down()
			}
			await this.validateVisibility(SlidersMainPage.slider1Title)
			await this.validateText(
				SlidersMainPage.slider1Title,
				'עמותת ITCB מצדיעה לכל הנשים והגברים הפועלים למען ביטחון והגנת המדינה.',
			)
		})
	}

	async slide2Verification(): Promise<void> {
		await test.step('Verify Slide 2', async () => {
			await this.gotoURL(URLS.slide2)
			await this.pressOkToCookies()
			const slider2 = this.extractLocator(SlidersMainPage.slider2Title)
			await expect(slider2).toBeVisible({timeout: 60000})
			const box2 = await slider2.boundingBox()
			if (box2) {
				await this.page.mouse.move(
					box2.x + box2.width / 2,
					box2.y + box2.height / 2,
				)
				await this.page.mouse.down()
			}
			await this.validateVisibility(SlidersMainPage.slider2Title)
			await this.validateText(
				SlidersMainPage.slider2Title,
				'אנו גאים להציג את אפליקצית ®ISTQB למונחים המקצועיים מעולם בדיקות התוכנה בשפה העברית.',
			)
		})
	}

	async slide3Verification(): Promise<void> {
		await test.step('Verify Slide 3', async () => {
			await this.gotoURL(URLS.slide3)
			await this.pressOkToCookies()
			// Slide 3 uses strong text instead of heading
			const slider3Text = SlidersMainPage.slider3Title
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
			await this.gotoURL(URLS.slide4)
			await this.pressOkToCookies()
			// Slide 4 uses strong text instead of heading
			const slider4Text = SlidersMainPage.slider4Title
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
			await this.gotoURL(URLS.slide5)
			await this.pressOkToCookies()
			const slider5 = this.extractLocator(SlidersMainPage.slider5Title)
			await expect(slider5).toBeVisible({timeout: 60000})
			const box5 = await slider5.boundingBox()
			if (box5) {
				await this.page.mouse.move(
					box5.x + box5.width / 2,
					box5.y + box5.height / 2,
				)
				await this.page.mouse.down()
			}
			await this.validateVisibility(SlidersMainPage.slider5Title)
			await this.validateText(SlidersMainPage.slider5Title, 'אצלנו תצליח בהייטק, זה בדוק!')
		})
	}
}