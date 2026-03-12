import {test} from '../../fixtures/testSetup'

test.describe('Main Page Validate Content Tests @sanity', () => {
	test.describe.configure({timeout: 120000})

	test.beforeEach(async ({mainPage}) => {
		await mainPage.openMainPage()
	})

	test('should validate the main page content', async ({mainPage}) => {
		await mainPage.validateContactOnMainPage()
	})
})
