import {BasePage} from '@/core/BasePage'
import test from '@/fixtures/testSetup'
import {DECISION_MAKERS_SHARING_PAGE_LOCATORS} from '@/locators/Decision_Makers_Sharing'
import {type Page} from '@playwright/test'

export class DecisionMakerPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }
  async validateDecisionMakersSharingBoxContent(
    decisionMakerBox: string,
  ): Promise<void> {
    await test.step(`Validate ${decisionMakerBox} Box Content`, async () => {
      const dsBox =
        DECISION_MAKERS_SHARING_PAGE_LOCATORS.desictionMakersSharingboxes.find(
          (db) => db.name === decisionMakerBox,
        )
      if (!dsBox) {
        throw new Error(
          `Decision Maker Box with name "${decisionMakerBox}" not found`,
        )
      }
      await this.validateVisibility(dsBox.img)
    })
  }
}
