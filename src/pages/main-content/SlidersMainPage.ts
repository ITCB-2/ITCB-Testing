import {test} from '@/fixtures'
import {SLIDERS_MAIN_PAGE_LOCATORS} from '@/locators'
import {MainPage} from '@/pages'
import {expect, type Page} from '@playwright/test'

export class SlidersMainPage extends MainPage {
  constructor(page: Page) {
    super(page)
  }
  async slide1Verification(): Promise<void> {
    await test.step('Verify Slide 1', async () => {
      const {slider1Btn, slider2Btn} = SLIDERS_MAIN_PAGE_LOCATORS.slidersBtns
      const {slider1Title} = SLIDERS_MAIN_PAGE_LOCATORS.slidersTitles
      await this.gotoURL('https://www.itcb.org.il/#slide-1')
      await this.pressOkToCookies()
      const slider = this.extractLocator(slider1Title)
      await expect(slider).toBeVisible({timeout: 60000})
      const box = await slider.boundingBox()
      if (box) {
        await this.page.mouse.move(
          box.x + box.width / 2,
          box.y + box.height / 2,
        )
        await this.page.mouse.down()
      }
      await this.validateVisibility(slider1Btn)
      await this.validateVisibility(slider2Btn)
      await this.validateVisibility(slider1Title)
      await this.validateText(
        slider1Title,
        'אנו גאים להציג את אפליקצית ®ISTQB למונחים המקצועיים מעולם בדיקות התוכנה בשפה העברית',
      )
    })
  }
  async slide2Verification(): Promise<void> {
    await test.step('Verify Slide 2', async () => {
      await this.gotoURL('https://www.itcb.org.il/#slide-2')
      const {slider1Btn, slider3Btn} = SLIDERS_MAIN_PAGE_LOCATORS.slidersBtns
      const {slider2Title} = SLIDERS_MAIN_PAGE_LOCATORS.slidersTitles
      await this.pressOkToCookies()
      const slider2 = this.extractLocator(slider2Title)
      await expect(slider2).toBeVisible({timeout: 60000})
      const box2 = await slider2.boundingBox()
      if (box2) {
        await this.page.mouse.move(
          box2.x + box2.width / 2,
          box2.y + box2.height / 2,
        )
        await this.page.mouse.down()
      }

      await this.validateVisibility(slider1Btn)
      await this.validateVisibility(slider3Btn)
      await this.validateVisibility(slider2Title)
      await this.validateText(
        slider2Title,
        'המועצה הבינלאומית להסמכת בדיקות תוכנה (ISTQB) הגיעה לאבן דרך יוצאת דופן: מעל מיליון הסמכות הוענקו ברחבי העולם.',
      )
    })
  }
  async slide3Verification(): Promise<void> {
    await test.step('Verify Slide 3', async () => {
      await this.gotoURL('https://www.itcb.org.il/#slide-3')
      const {slider2Btn, slider4Btn} = SLIDERS_MAIN_PAGE_LOCATORS.slidersBtns
      const {slider3Title} = SLIDERS_MAIN_PAGE_LOCATORS.slidersTitles
      await this.pressOkToCookies()

      const slider3 = this.extractLocator(slider3Title)
      await expect(slider3).toBeVisible({timeout: 60000})
      const box3 = await slider3.boundingBox()
      if (box3) {
        await this.page.mouse.move(
          box3.x + box3.width / 2,
          box3.y + box3.height / 2,
        )
        await this.page.mouse.down()
      }
      await this.validateVisibility(slider2Btn)
      await this.validateVisibility(slider4Btn)
      await this.validateVisibility(slider3Title)
      await this.validateText(
        slider3Title,
        'מקומות בהם איכות פוגשת מצוינות כנסים עולמיים לבדוקי תוכנה!!!',
      )
    })
  }
  async slide4Verification(): Promise<void> {
    await test.step('Verify Slide 4', async () => {
      await this.gotoURL('https://www.itcb.org.il/#slide-4')
      const {slider3Btn, slider5Btn} = SLIDERS_MAIN_PAGE_LOCATORS.slidersBtns
      const {slider4Title} = SLIDERS_MAIN_PAGE_LOCATORS.slidersTitles
      await this.pressOkToCookies()
      const slider4 = this.extractLocator(slider4Title)
      await expect(slider4).toBeVisible({timeout: 60000})
      const box4 = await slider4.boundingBox()
      if (box4) {
        await this.page.mouse.move(
          box4.x + box4.width / 2,
          box4.y + box4.height / 2,
        )
        await this.page.mouse.down()
      }

      await this.validateVisibility(slider3Btn)
      await this.validateVisibility(slider5Btn)
      await this.validateVisibility(slider4Title)
      await this.validateText(slider4Title, 'אצלנו תצליח בהייטק, זה בדוק!')
    })
  }
  async slide5Verification(): Promise<void> {
    await test.step('Verify Slide 5', async () => {
      await this.gotoURL('https://www.itcb.org.il/#slide-5')
      const {slider5Btn, slider4Btn} = SLIDERS_MAIN_PAGE_LOCATORS.slidersBtns
      const {slider5Title} = SLIDERS_MAIN_PAGE_LOCATORS.slidersTitles
      await this.pressOkToCookies()
      const slider5 = this.extractLocator(slider5Title)
      await expect(slider5).toBeVisible({timeout: 60000})
      const box5 = await slider5.boundingBox()
      if (box5) {
        await this.page.mouse.move(
          box5.x + box5.width / 2,
          box5.y + box5.height / 2,
        )
        await this.page.mouse.down()
      }
      await this.validateVisibility(slider4Btn)
      await this.validateVisibility(slider5Btn)
      await this.validateVisibility(slider5Title)
      await this.validateText(slider5Title, 'עמותת ITCB')
    })
  }
}
