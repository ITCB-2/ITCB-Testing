import test from '@/fixtures/testSetup'
test.describe('Main Page - Buttons Tests', () => {
  // Set timeout for all tests in this describe block
  test.setTimeout(60000)

  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })
  test('Validate All Facts button', async ({mainPage}) => {
    await mainPage.clickOnAllFactsButton()
  })
  test('Validate View All Certifications button', async ({mainPage}) => {
    await mainPage.clickOnViewAllCertificationsButton()
  })
  test('Validate read more button on entry Level Testing Professional box', async ({
    mainPage,
  }) => {
    await mainPage.clickOnReadMoreButtonOnEntryLevelTestingProfessionalBox()
  })
  test('Validate read more button on Test Lead box', async ({mainPage}) => {
    await mainPage.clickOnReadMoreButtonOnTestLeadBox()
  })
  test('Validate read more button on Expert Tester box', async ({mainPage}) => {
    await mainPage.clickOnReadMoreButtonOnExpertTesterBox()
  })
  test('Validate read more button on Testing Certification For Developers box', async ({
    mainPage,
  }) => {
    await mainPage.clickOnReadMoreButtonOnTestingCertificationForDevelopersBox()
  })
  test('Validate decision makers sharing button', async ({mainPage}) => {
    await mainPage.clickOnDecisionMakersSharingButton()
  })
})
