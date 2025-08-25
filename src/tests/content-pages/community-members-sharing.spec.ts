import {test} from '@/fixtures'
import {COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS} from '@/locators'

test.describe('Community Members Sharing Page Tests @regression', () => {
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })

  const {communityMembersSharingBoxes} = COMMUNITY_MEMBERS_SHARING_PAGE_LOCATORS
  const communityMemberNames = communityMembersSharingBoxes.map(
    (box) => box.name,
  )

  communityMemberNames.forEach((boxName) => {
    test(`Click on Community Members Sharing Button and validate ${boxName} content`, async ({
      mainPage,
      communityMembersSharingPage,
    }) => {
      await mainPage.clickOnCommunityMembersSharingButton()
      await communityMembersSharingPage.validateCommunityMembersSharingBoxImg(
        boxName,
      )
    })
  })
})
