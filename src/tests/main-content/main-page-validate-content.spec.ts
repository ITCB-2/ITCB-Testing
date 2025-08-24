import {test} from '@/fixtures'

test.describe('Main Page Validate Content Tests', () => {
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })

  test('should validate the main page content', async ({mainPage}) => {
    await mainPage.validateContactOnMainPage()
  })
})
