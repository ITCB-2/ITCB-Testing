import test from '@/fixtures/testSetup'
import {COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS} from '@/locators/Community_Members_Sharing_Page'
import {type Page} from '@playwright/test'
import {BasePage} from '../core/BasePage'

export class CommunityMembersSharingPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }

  async validateCommunityMembersSharingBoxImg(boxName: string): Promise<void> {
    await test.step(`Validate ${boxName} Box Image`, async () => {
      const box =
        COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS.communityMembersSharingBoxes.find(
          (b) => b.name === boxName,
        )
      if (!box) {
        throw new Error(`Box with name "${boxName}" not found`)
      }

      await this.validateVisibility(box.img)
    })
  }
}
