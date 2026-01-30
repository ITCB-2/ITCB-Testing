import {test} from '../../fixtures/testSetup'
import {OUR_CERTIFICATIONS_PAGE_LOCATOR} from '../../locators/content-pages/Our_Certification'

test.describe('Our Certifications Page Tests @nightly', () => {
	test.beforeEach(async ({mainPage}) => {
		await mainPage.openMainPage()
	})

	const {boxes} = OUR_CERTIFICATIONS_PAGE_LOCATOR
	const boxesNames = boxes.map((box) => box.name)

	boxesNames.forEach((boxName) => {
		test(`Validate View All Certifications button and validate: ${boxName} content`, async ({
			mainPage,
			ourCertificationPage,
		}) => {
			await mainPage.clickOnViewAllCertificationsButton()
			await ourCertificationPage.validateBoxTitleAndBoxImage(boxName)
		})
	})

	boxesNames.forEach((boxName) => {
		test(`Validate Read More button on ${boxName} box`, async ({
			mainPage,
			ourCertificationPage,
		}) => {
			await mainPage.clickOnReadMoreButton(boxName)
			await ourCertificationPage.validateReadMoreSection(boxName)
		})
	})
})
