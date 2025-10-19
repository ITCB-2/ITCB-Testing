import {
	BasePage,
	findItemByProperty,
	test,
} from '@netanelh2/playwright-framework'
import type {Page} from '@playwright/test'
import {DECISION_MAKERS_SHARING_PAGE_LOCATORS} from '../../locators/content-pages/Decision_Makers_Sharing'

type DecisionMakerBoxName =
	(typeof DECISION_MAKERS_SHARING_PAGE_LOCATORS.decisionMakersSharingBoxes)[number]['name']

export class DecisionMakerPage extends BasePage {
	constructor(page: Page) {
		super(page)
	}
	async validateDecisionMakersSharingBoxContent(
		decisionMakerBox: DecisionMakerBoxName,
	): Promise<void> {
		const {decisionMakersSharingBoxes} = DECISION_MAKERS_SHARING_PAGE_LOCATORS
		await test.step(`Validate ${decisionMakerBox} Box Content`, async () => {
			const decisionMakersSharingBox = findItemByProperty(
				decisionMakersSharingBoxes,
				'name',
				decisionMakerBox,
			)
			await this.validateVisibility(decisionMakersSharingBox.img)
		})
	}
}
