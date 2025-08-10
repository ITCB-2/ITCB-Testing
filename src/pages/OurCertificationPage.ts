import {BasePage} from '@/core/BasePage'
import test from '@/fixtures/testSetup'
import {findItemByProperty} from '@/helpers/arrayUtils'
import {OUR_CERTIFICATIONS_PAGE_LOCATOR} from '@/locators/Our_Certification'
import {type Page} from '@playwright/test'

type OurCertificationBoxName =
  (typeof OUR_CERTIFICATIONS_PAGE_LOCATOR.boxes)[number]['name']

export class OurCertificationPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }
  async validateBoxTitleAndBoxImage(
    boxName: OurCertificationBoxName,
  ): Promise<void> {
    await test.step(`Validate Box Title and Image of ${boxName}`, async () => {
      const box = findItemByProperty(
        OUR_CERTIFICATIONS_PAGE_LOCATOR.boxes,
        'name',
        boxName,
      )

      await this.validateText(box.boxTitleLocator, box.titleText)
      await this.validateVisibility(box.boxImageLocator)
    })
  }
  async validateReadMoreSection(
    boxName: OurCertificationBoxName,
  ): Promise<void> {
    await test.step(`Validate ${boxName} Read More Section`, async () => {
      const box = findItemByProperty(
        OUR_CERTIFICATIONS_PAGE_LOCATOR.boxes,
        'name',
        boxName,
      )
      await this.validateText(box.subBoxTitle, box.subBoxText)
    })
  }
}
