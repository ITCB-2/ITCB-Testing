import {expect, type Locator, type Page, test} from '@playwright/test'
import {ROUTES} from '../../constants/routes'
import {importantFactsPage} from '../../pages/content-pages/important-facts.page'
import {ourCertificationsPage} from '../../pages/content-pages/our-certifications.page'
import {howToPrepareToIstqbPage} from '../../pages/content-pages/how-to-prepare-to-istqb.page'
import {internationalConferencesPage} from '../../pages/content-pages/international-conferences.page'
import {itcbMagazinePage} from '../../pages/content-pages/itcb-magazine.page'
import {podcastsPage} from '../../pages/content-pages/podcasts.page'
import {questionsAndAnswersPage} from '../../pages/content-pages/questions-and-answers.page'
import {syllabusInfoPage} from '../../pages/content-pages/syllabus-info.page'
import {termsGlossaryPage} from '../../pages/content-pages/terms-glossary.page'
import {tipsPage} from '../../pages/content-pages/tips.page'
import {usefulLinksPage} from '../../pages/content-pages/useful-links.page'
import {mainPage} from '../../pages/main-content/main.page'
import {topMenuMainPage} from '../../pages/navigation/top-menu-main.page'

type SameTabCase = {
	name: string
	menuButton: (menu: ReturnType<typeof topMenuMainPage>) => Locator
	link: (menu: ReturnType<typeof topMenuMainPage>) => Locator
	target: (page: Page) => Locator
	targetText: string
	waitForDomContentLoaded?: boolean
	hoverDelayMs?: number
}

type PopupCase = {
	name: string
	menuButton: (menu: ReturnType<typeof topMenuMainPage>) => Locator
	link: (menu: ReturnType<typeof topMenuMainPage>) => Locator
	expectedUrl: string
	hoverDelayMs?: number
}

const hoverAndRevealLink = async (
	page: Page,
	menuButton: Locator,
	link: Locator,
	hoverDelayMs = 0,
): Promise<void> => {
	await menuButton.hover()
	if (hoverDelayMs > 0) {
		await page.waitForTimeout(hoverDelayMs)
	}
	await link.waitFor({state: 'visible', timeout: 10_000})
	await expect(link).toBeVisible()
}

test.describe('Main Page - Top Menu Navigation @nightly', () => {
	test.beforeEach(async ({page}) => {
		const main = mainPage(page)
		await page.goto(ROUTES.home, {timeout: 90000})
		await main.acceptCookiesButton.click()
		await expect(main.acceptCookiesButton).not.toBeVisible()
		await expect(main.importantFactsSectionTitle).toBeVisible()
	})

	const sameTabCases: SameTabCase[] = [
		{
			name: 'Our Certifications',
			menuButton: (menu) => menu.whyIstqb.button,
			link: (menu) => menu.whyIstqb.ourCertificationsLink,
			target: (page) => ourCertificationsPage(page).title,
			targetText: 'ההסמכות שלנו',
		},
		{
			name: 'How To Prepare To ISTQB Test',
			menuButton: (menu) => menu.whyIstqb.button,
			link: (menu) => menu.whyIstqb.howToPrepareToIstqbTestLink,
			target: (page) => howToPrepareToIstqbPage(page).title,
			targetText: 'איך להתכונן למבחן ISTQB',
		},
		{
			name: 'Terms Glossary',
			menuButton: (menu) => menu.istqbContent.button,
			link: (menu) => menu.istqbContent.termsGlossaryLink,
			target: (page) => termsGlossaryPage(page).advancedSearchTitle,
			targetText: 'מילון המונחים של ISTQB',
		},
		{
			name: 'Syllabus Info',
			menuButton: (menu) => menu.istqbContent.button,
			link: (menu) => menu.istqbContent.syllabusInfoLink,
			target: (page) => syllabusInfoPage(page).title,
			targetText: 'כל מה שרציתם לדעת על סילבוס CTFL',
			waitForDomContentLoaded: true,
		},
		{
			name: 'ITCB Magazine',
			menuButton: (menu) => menu.testingInIsrael.button,
			link: (menu) => menu.testingInIsrael.itcbMagazineLink,
			target: (page) => itcbMagazinePage(page).viewAllMagazineIssuesLink,
			targetText: 'הצג את כל גליונות המגזין',
		},
		{
			name: 'Useful Links',
			menuButton: (menu) => menu.testingInIsrael.button,
			link: (menu) => menu.testingInIsrael.usefulLinksLink,
			target: (page) => usefulLinksPage(page).title,
			targetText: 'קישורים שימושיים',
			waitForDomContentLoaded: true,
		},
		{
			name: 'Podcasts',
			menuButton: (menu) => menu.testingInIsrael.button,
			link: (menu) => menu.testingInIsrael.podcastsLink,
			target: (page) => podcastsPage(page).officialPodcastLink,
			targetText: 'דף הפודקאסט הרישמי שלנו',
			waitForDomContentLoaded: true,
		},
		{
			name: 'Tips',
			menuButton: (menu) => menu.testingInIsrael.button,
			link: (menu) => menu.testingInIsrael.tipsLink,
			target: (page) => tipsPage(page).title,
			targetText: 'טיפים לבודקי תכנה',
			waitForDomContentLoaded: true,
		},
		{
			name: 'Important Facts',
			menuButton: (menu) => menu.additionalInformation.button,
			link: (menu) => menu.additionalInformation.importantFactsLink,
			target: (page) => importantFactsPage(page).title,
			targetText: 'עובדות שחשוב שתדעו',
			hoverDelayMs: 300,
		},
		{
			name: 'Questions and Answers',
			menuButton: (menu) => menu.additionalInformation.button,
			link: (menu) => menu.additionalInformation.questionsAndAnswersLink,
			target: (page) => questionsAndAnswersPage(page).title,
			targetText: 'שאלות ותשובות',
			hoverDelayMs: 300,
		},
		{
			name: 'International Conferences',
			menuButton: (menu) => menu.additionalInformation.button,
			link: (menu) => menu.additionalInformation.internationalConferencesLink,
			target: (page) => internationalConferencesPage(page).title,
			targetText: 'כנסים בינלאומיים',
			hoverDelayMs: 300,
		},
	] as const

	const popupCases: PopupCase[] = [
		{
			name: 'Decision Makers Sharing',
			menuButton: (menu) => menu.whyIstqb.button,
			link: (menu) => menu.whyIstqb.decisionMakersSharingLink,
			expectedUrl: ROUTES.decisionMakersSharing,
		},
		{
			name: 'Members of Community Sharing',
			menuButton: (menu) => menu.whyIstqb.button,
			link: (menu) => menu.whyIstqb.membersOfCommunitySharingLink,
			expectedUrl: ROUTES.communityMembersSharing,
		},
	]

	sameTabCases.forEach(
		({
			name,
			menuButton,
			link,
			target,
			targetText,
			waitForDomContentLoaded,
			hoverDelayMs,
		}) => {
			test(`should navigate to ${name} page and verify content`, async ({
				page,
			}) => {
				const menu = topMenuMainPage(page)
				const menuButtonLocator = menuButton(menu)
				const linkLocator = link(menu)
				await hoverAndRevealLink(
					page,
					menuButtonLocator,
					linkLocator,
					hoverDelayMs,
				)
				await linkLocator.click({timeout: 15_000})
				if (waitForDomContentLoaded) {
					await page.waitForLoadState('domcontentloaded')
				}
				const targetLocator = target(page)
				await expect(targetLocator).toBeVisible()
				await expect(targetLocator).toContainText(targetText)
			})
		},
	)

	popupCases.forEach(({name, menuButton, link, expectedUrl}) => {
		test(`should navigate to ${name} page and verify content`, async ({
			page,
		}) => {
			const menu = topMenuMainPage(page)
			const menuButtonLocator = menuButton(menu)
			const linkLocator = link(menu)
			await hoverAndRevealLink(page, menuButtonLocator, linkLocator)
			const popupPromise = page.context().waitForEvent('page')
			await linkLocator.click()
			const popupPage = await popupPromise
			await popupPage.waitForLoadState()
			await expect(popupPage).toHaveURL(
				new RegExp(`${expectedUrl.replace('?', '\\?')}$`),
			)
		})
	})
})
