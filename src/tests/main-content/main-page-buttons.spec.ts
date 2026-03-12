import {test} from '../../fixtures/testSetup'

test.describe('Main Page - Core Functionality Tests @sanity', () => {
	test.describe.configure({timeout: 120000})

	test.beforeEach(async ({mainPage}) => {
		await mainPage.openMainPage()
	})

	test('Validate main page content and contact information', async ({
		mainPage,
	}) => {
		await mainPage.validateContactOnMainPage()
	})
})
