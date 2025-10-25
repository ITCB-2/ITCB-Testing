import {test} from '../../fixtures/testSetup'

test.describe('Main Page - Why ISTQB Menu Tests @regression', () => {
	test.beforeEach(async ({mainPage}) => {
		await mainPage.openMainPage()
	})
	test('should navigate to Decision Makers Sharing page and verify content', async ({
		topMenuMainPage,
	}) => {
		await topMenuMainPage.navigateToDecisionMakersSharingPage()
	})

	test('should navigate to Our Certifications page and verify content', async ({
		topMenuMainPage,
	}) => {
		await topMenuMainPage.navigateToOurCertificationsPage()
	})
})

test.describe('Main Page - Why ISTQB Menu Tests (Comprehensive) @regression', () => {
	test.beforeEach(async ({mainPage}) => {
		await mainPage.openMainPage()
	})

	test('should navigate to Members of Community Sharing page and verify content', async ({
		topMenuMainPage,
	}) => {
		await topMenuMainPage.navigateTOMembersOfCommunitySharingPage()
	})

	test('should navigate to How To Prepare To ISTQB Test page and verify content', async ({
		topMenuMainPage,
	}) => {
		await topMenuMainPage.navigateToHowToPrepareToISTQBTestPage()
	})
})

test.describe('Main Page - ISTQBContent Menu Tests @regression', () => {
	test.beforeEach(async ({mainPage}) => {
		await mainPage.openMainPage()
	})
	test('should navigate to Terms Glossary page and verify content', async ({
		topMenuMainPage,
	}) => {
		await topMenuMainPage.navigateToTermsGlossaryPage()
	})
})

test.describe('Main Page - ISTQBContent Menu Tests (Comprehensive) @regression', () => {
	test.beforeEach(async ({mainPage}) => {
		await mainPage.openMainPage()
	})
	test('should navigate to Syllabus Info page and verify content', async ({
		topMenuMainPage,
	}) => {
		await topMenuMainPage.navigateToSyllabusInfoPage()
	})
})

test.describe('Main Page - testing In Israel Menu Tests @regression', () => {
	test.beforeEach(async ({mainPage}) => {
		await mainPage.openMainPage()
	})
	test('should navigate to ITCB Magazine page and verify content', async ({
		topMenuMainPage,
	}) => {
		await topMenuMainPage.navigateToITCBMagazinePage()
	})
})

test.describe('Main Page - testing In Israel Menu Tests (Comprehensive) @regression', () => {
	test.beforeEach(async ({mainPage}) => {
		await mainPage.openMainPage()
	})
	test('should navigate to Useful Links page and verify content', async ({
		topMenuMainPage,
	}) => {
		await topMenuMainPage.navigateToUsefulLinksPage()
	})
	test('should navigate to Podcasts page and verify content', async ({
		topMenuMainPage,
	}) => {
		await topMenuMainPage.navigateToPodcastsPage()
	})
	test('should navigate to Tips page and verify content', async ({
		topMenuMainPage,
	}) => {
		await topMenuMainPage.navigateToTipsPage()
	})
})

test.describe('Main Page - additional Information Menu Tests @regression', () => {
	test.beforeEach(async ({mainPage}) => {
		await mainPage.openMainPage()
	})
	test('should navigate to Important Facts page and verify content', async ({
		topMenuMainPage,
	}) => {
		await topMenuMainPage.navigateToImportantFactsPage()
	})
})

test.describe('Main Page - additional Information Menu Tests (Comprehensive) @regression', () => {
	test.beforeEach(async ({mainPage}) => {
		await mainPage.openMainPage()
	})
	test('should navigate to Questions and Answers page and verify content', async ({
		topMenuMainPage,
	}) => {
		await topMenuMainPage.navigateToQuestionsAndAnswersPage()
	})
	test('should navigate to international Conferences page and verify content', async ({
		topMenuMainPage,
	}) => {
		await topMenuMainPage.navigateToInternationalConferencesPage()
	})
})
