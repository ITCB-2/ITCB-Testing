import test from '@/fixtures/testSetup'
import { mainModule } from 'process'

test.describe('Main Page Navigation Menu Tests', () => {
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })
  //צריך וולידציה לעבור את הגנת הבוטים
test('should navigate to Register To Test page and verify content', async ({mainPage})=>{
 await mainPage.navigateToRegisterToTestPage();
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

  test('should navigate to Our Certifications page and verify content',async({mainPage})=>{
  await mainPage.navigateToOurCertificationsPage();
  })


  test('should navigate to How To Prepare To ISTQB Test page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToHowToPrepareToISTQBTestPage()
  })
//צריך להשלים שמבין איך לטפל בפלאפון
  test.skip('should navigate to Syllabus and Sample Exams page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToSyllabusAndSampleExams()
  })

  test('should navigate to Terms Glossary page and verify content',async ({mainPage})=>{
    await mainPage.navigateToTermsGlossaryPage();
  })
  //צריך לעשות וולידציה
  test('should navigate to List of Certified Testers page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToListOfCertifiedTestersPage();
  })
test('should navigate to Syllabus Info page and verify content', async ({mainPage})=>{
  await mainPage.navigateToSyllabusInfoPage();
})
  test('should navigate to Useful Links page and verify content', async ({
    mainPage,
  }) => {
    await mainPage.navigateToUsefulLinksPage()
  })
test('shoud navigate to ITCB Magazine page and verify content', async ({mainPage})=>{
await mainPage.navigateToITCBMagazinePage();
})
test('should navigate to Podcasts page and verify content', async ({mainPage})=>{
  await mainPage.navigateToPodcastsPage();
})
test('should navigate to Events Summaries page and verify content', async ({mainPage})=>{
  await mainPage.navigateToEventsSummariesPage();
})
test('shoud navigate to Tips page and verify content', async ({mainPage})=>{
  await mainPage.navigateToTipsPage();
})
test('should navigate to Important Facts page and verify content', async ({mainPage})=>{
  await mainPage.navigateToImportantFactsPage();
})
test('should navigate to Questions and Answers page and verify content', async ({mainPage})=>{
  await mainPage.navigateToQuestionsAndAnswersPage();
})
test('should navigate to Internation Conferences page and verify content', async ({mainPage})=>{
  await mainPage.navigateToInternationalConferencesPage();
})
test('should navigate to ITCB About Us page and verify URL', async ({mainPage})=>{
  await mainPage.navigateToAboutUsPage();
})
//צריך להשלים וולידציה
test('should navigate to Board Of Directors page section and verify content', async ({mainPage})=>{
  await mainPage.navigateToBoardOfDirectorsPagesection();
  
})
//צריך להשלים וולידציה
test('should navigate to Advisory Board page section and verify content', async ({mainPage})=>{
  await mainPage.navigateToAdvisoryBoardPageSection();
  
})
test('should navigate to Our Partners page section and verify content', async ({mainPage})=>{
  await mainPage.navigateToOurPartnersPage();
})
//להבין איך לעבור את החסימת בוטים
  test('should navigate to Contact Us page section and verify content', async ({mainPage})=>{
    await mainPage.navigateToContactUsPage();
  })




  })
