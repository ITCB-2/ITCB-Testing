import test from '@/fixtures/testSetup'

test.describe('Main Page Navigation Menu Tests', () => {
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })

  test('should navigate to Decision Makers Sharing page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToDecisionMakersSharingPage()
  })

  test('should navigate to Members of Community Sharing page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateTOMembersOfComunnitySharingPage()
  })
})
