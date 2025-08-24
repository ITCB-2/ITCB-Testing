import {BasePage} from '@/core'
import {test} from '@/fixtures'
import {findItemByProperty} from '@/helpers'
import {DECISION_MAKERS_SHARING_PAGE_LOCATORS} from '@/locators'
import {type Page} from '@playwright/test'

type DecisionMakerBoxName =
  (typeof DECISION_MAKERS_SHARING_PAGE_LOCATORS.decisionMakersSharingBoxes)[number]['name']

export class DecisionMakerPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }
  async validateDecisionMakersSharingBoxContent(
    decisionMakerBox: DecisionMakerBoxName,
  ): Promise<void> {
    const {decisionMakersSharingBoxes} = DECISION_MAKERS_SHARING_PAGE_LOCATORS
    await test.step(`Validate ${decisionMakerBox} Box Content`, async () => {
      const decisionMakersSharingBox = findItemByProperty(
        decisionMakersSharingBoxes,
        'name',
        decisionMakerBox,
      )
      await this.validateVisibility(decisionMakersSharingBox.img)
    })
  }
}
