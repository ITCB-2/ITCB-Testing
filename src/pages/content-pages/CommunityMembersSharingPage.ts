import {
  BasePage,
  findItemByProperty,
  test,
} from '@netanelh2/playwright-framework'
import {type Page} from '@playwright/test'
import {COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS} from '../../locators/content-pages/Community_Members_Sharing'

type CommunityMemberName =
  (typeof COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS.communityMembersSharingBoxes)[number]['name']

export class CommunityMembersSharingPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }

  async validateCommunityMembersSharingBoxImg(
    boxName: CommunityMemberName,
  ): Promise<void> {
    await test.step(`Validate ${boxName} Box Image`, async () => {
      const {img} = findItemByProperty(
        COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS.communityMembersSharingBoxes,
        'name',
        boxName,
      )
      await this.validateVisibility(img)
    })
  }
}
