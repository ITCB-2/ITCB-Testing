import {test} from '@/fixtures'

test.describe('Main Page - Core Functionality Tests', () => {
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })

  test('Validate main page content and contact information', async ({
    mainPage,
  }) => {
    await mainPage.validateContactOnMainPage()
  })
})
