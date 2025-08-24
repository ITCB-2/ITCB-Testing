import {BasePage} from '@/core'
import {test} from '@/fixtures'
import {findItemByProperty} from '@/helpers'
import {COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS} from '@/locators'
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
