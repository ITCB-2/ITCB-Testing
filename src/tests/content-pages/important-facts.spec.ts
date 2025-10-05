import {test} from '../../fixtures/testSetup'
import {IMPORTANT_FACTS_PAGE_LOCATORS} from '../../locators/content-pages/Important_Facts'

test.describe('Important Facts Page Tests @regression', () => {
  test.beforeEach(async ({mainPage}) => {
    await mainPage.openMainPage()
  })

  const {facts} = IMPORTANT_FACTS_PAGE_LOCATORS

  facts.forEach((fact) => {
    test(`Validate All Facts button - Important fact #${fact.name}`, async ({
      mainPage,
      importantFactsPage,
    }) => {
      await mainPage.clickOnAllFactsButton()
      await importantFactsPage.validateImportantFact(fact.name)
    })
  })
})
