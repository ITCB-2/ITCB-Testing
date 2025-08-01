import {BasePage} from '@/core/BasePage'
import test from '@/fixtures/testSetup'
import {OUR_CERTIFICATIONS_PAGE_LOCATOR} from '@/locators/Our_Certification'
import {type Page} from '@playwright/test'

export class OurCertificationPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }
  async validateBoxTitleAndBoxImage(boxName: string): Promise<void> {
    await test.step(`Validate Box Title and Image of ${boxName}`, async () => {
      const box = OUR_CERTIFICATIONS_PAGE_LOCATOR.boxes.find(
        (b) => b.name === boxName,
      )
      if (!box) {
        throw new Error(`Box with name "${boxName}" not found`)
      }

      await this.validateText(box.boxTitleLocator, box.titleText)
      await this.validateVisibility(box.boxImageLocator)
    })
  }
  async validateReadMoreSection(boxName: string): Promise<void> {
    await test.step(`Validate ${boxName} Read More Section`, async () => {
      const box = OUR_CERTIFICATIONS_PAGE_LOCATOR.boxes.find(
        (b) => b.name === boxName,
      )
      if (!box) {
        throw new Error(`Box with name "${boxName}" not found`)
      }
      await this.validateText(box.subBoxTitle, box.subBoxText)
    })
  }
}
