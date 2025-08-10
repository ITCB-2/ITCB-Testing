import {BasePage} from '@/core/BasePage'
import test from '@/fixtures/testSetup'
import {findItemByProperty} from '@/helpers/arrayUtils'
import {COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS} from '@/locators/Community_Members_Sharing_Page'
import {type Page} from '@playwright/test'

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
