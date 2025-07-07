import test from '@/fixtures/testSetup'

test.describe('Main Page - Why ISTQB Bottom Menu Tests', () => {
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })
  test('should navigate to Decision Makers Sharing page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToDecisionMakersSharingPageBottomMenu()
  })
  test('should navigate to Community Members Sharing page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToMembersOfCommunitySharingPageBottomMenu()
  })
  test('should navigate to Our Certifications page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToOurCertificationsPageBottomMenu()
  })
  test('should navigate to How To Prepare To ISTQB Test page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToHowToPrepareToISTQBTestPageBottomMenu()
  })
})
test.describe('Main page - ISTQB Content Bottom Menu Tests', () => {
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })
  test('should navigate to Terms Glossary page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToTermsGlossaryPageBottomMenu()
  })
  test('should navigate to Syllabus Info  through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToSyllabusInfoPageBottomMenu()
  })
})
test.describe('Main Page - Testing In Israel Bottom Menu Tests', () => {
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })
  test('should navigate to Useful Links page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToUsefulLinksPageBottomMenu()
  })
  test('should navigate to ITCB Magazine page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToITCBMagazinePageBottomMenu()
  })
  test('should navigate to Podcasts page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToPodcastsPageBottomMenu()
  })
  test('should navigate to Events Summaries page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToEventsSummariesPageBottomMenu()
  })
  test('should navigate to Tips page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToTipsPageBottomMenu()
  })
})
test.describe('Main Page - additional Information Bottom Menu Tests', () => {
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })
  test('should navigate to Important Facts page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToImportantFactsPageBottomMenu()
  })
  test('should navigate to Questions And Answers page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToQuestionsAndAnswersPageBottomMenu()
  })
  test('should navigate to International Conferences page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToInternationalConferencesPageBottomMenu()
  })
})
test.describe('Main Page - aboutITCB Bottom Menu Tests', () => {
  test.describe.configure({timeout: 60 * 1000})
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })
  test('should navigate to ITCB About Us page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToAboutUsPageBottomMenu()
  })
  test('should navigate to Board of Directors page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToBoardOfDirectorsPageBottomMenu()
  })
  test('should navigate to Advisory Board page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToAdvisoryBoardPageBottomMenu()
  })
  test('should navigate to Our Partners page through the bottom menu and verify content', async ({
    bottomMenuMainPage,
  }) => {
    await bottomMenuMainPage.navigateToOurPartnersPageBottomMenu()
  })
})
