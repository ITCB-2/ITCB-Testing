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

  test('should navigate to Our Certifications page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToOurCertificationsPage()
  })

  test('should navigate to How To Prepare To ISTQB Test page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToHowToPrepareToISTQBTestPage()
  })
  test('should navigate to Terms Glossary page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToTermsGlossaryPage()
  })
  test('should navigate to Syllabus Info page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToSyllabusInfoPage()
  })
  test('should navigate to Useful Links page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToUsefulLinksPage()
  })
  test('shoud navigate to ITCB Magazine page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToITCBMagazinePage()
  })
  test('should navigate to Podcasts page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToPodcastsPage()
  })
  test('should navigate to Events Summaries page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToEventsSummariesPage()
  })
  test('shoud navigate to Tips page and verify content', async ({mainPage}) => {
    await mainPage.navigateToTipsPage()
  })
  test('should navigate to Important Facts page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToImportantFactsPage()
  })
  test('should navigate to Questions and Answers page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToQuestionsAndAnswersPage()
  })
  test('should navigate to Internation Conferences page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToInternationalConferencesPage()
  })
  test('should navigate to ITCB About Us page and verify URL', async ({
    mainPage,
  }) => {
    await mainPage.navigateToAboutUsPage()
  })
  test('should navigate to Our Partners page section and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToOurPartnersPage()
  })
})
