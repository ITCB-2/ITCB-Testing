import {expect, type Locator, type Page, test} from '@playwright/test'
import {ROUTES} from '../../constants/routes'
import {importantFactsPage} from '../../pages/content-pages/important-facts.page'
import {ourCertificationsPage} from '../../pages/content-pages/our-certifications.page'
import {eventsSummariesPage} from '../../pages/content-pages/events-summaries.page'
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
import {bottomMenuMainPage} from '../../pages/navigation/bottom-menu-main.page'

type SameTabCase = {
	name: string
	link: (menu: ReturnType<typeof bottomMenuMainPage>) => Locator
	target: (page: Page) => Locator
	targetText: string
	waitForDomContentLoaded?: boolean
}

type PopupCase = {
	name: string
	link: (menu: ReturnType<typeof bottomMenuMainPage>) => Locator
	expectedUrl: string
}

test.describe('Main Page - Bottom Menu Navigation @nightly', () => {
	test.beforeEach(async ({page}) => {
		const main = mainPage(page)
		await page.goto(ROUTES.home, {timeout: 90000})
		await main.acceptCookiesButton.click()
		await expect(main.acceptCookiesButton).not.toBeVisible()
		await expect(main.importantFactsSectionTitle).toBeVisible()
	})

	const popupCases: PopupCase[] = [
		{
			name: 'Decision Makers Sharing',
			link: (menu) => menu.whyIstqb.decisionMakersSharingLink,
			expectedUrl: ROUTES.decisionMakersSharing,
		},
		{
			name: 'Community Members Sharing',
			link: (menu) => menu.whyIstqb.membersOfCommunitySharingLink,
			expectedUrl: ROUTES.communityMembersSharing,
		},
	]

	const sameTabCases: SameTabCase[] = [
		{
			name: 'Our Certifications',
			link: (menu) => menu.whyIstqb.ourCertificationsLink,
			target: (page) => ourCertificationsPage(page).title,
			targetText: 'ההסמכות שלנו',
		},
		{
			name: 'How To Prepare To ISTQB Test',
			link: (menu) => menu.whyIstqb.howToPrepareToIstqbTestLink,
			target: (page) => howToPrepareToIstqbPage(page).title,
			targetText: 'איך להתכונן למבחן ISTQB',
			waitForDomContentLoaded: true,
		},
		{
			name: 'Terms Glossary',
			link: (menu) => menu.istqbContent.termsGlossaryLink,
			target: (page) => termsGlossaryPage(page).advancedSearchTitle,
			targetText: 'מילון המונחים של ISTQB',
		},
		{
			name: 'Syllabus Info',
			link: (menu) => menu.istqbContent.syllabusInfoLink,
			target: (page) => syllabusInfoPage(page).title,
			targetText: 'כל מה שרציתם לדעת על סילבוס CTFL',
		},
		{
			name: 'Useful Links',
			link: (menu) => menu.testingInIsrael.usefulLinksLink,
			target: (page) => usefulLinksPage(page).title,
			targetText: 'קישורים שימושיים',
		},
		{
			name: 'ITCB Magazine',
			link: (menu) => menu.testingInIsrael.itcbMagazineLink,
			target: (page) => itcbMagazinePage(page).viewAllMagazineIssuesLink,
			targetText: 'הצג את כל גליונות המגזין',
		},
		{
			name: 'Podcasts',
			link: (menu) => menu.testingInIsrael.podcastsLink,
			target: (page) => podcastsPage(page).officialPodcastLink,
			targetText: 'דף הפודקאסט הרישמי שלנו',
		},
		{
			name: 'Events Summaries',
			link: (menu) => menu.testingInIsrael.eventsSummariesLink,
			target: (page) => eventsSummariesPage(page).title,
			targetText: 'סיכומי אירועים',
		},
		{
			name: 'Tips',
			link: (menu) => menu.testingInIsrael.tipsLink,
			target: (page) => tipsPage(page).title,
			targetText: 'טיפים לבודקי תכנה',
		},
		{
			name: 'Important Facts',
			link: (menu) => menu.additionalInformation.importantFactsLink,
			target: (page) => importantFactsPage(page).title,
			targetText: 'עובדות שחשוב שתדעו',
		},
		{
			name: 'Questions And Answers',
			link: (menu) => menu.additionalInformation.questionsAndAnswersLink,
			target: (page) => questionsAndAnswersPage(page).title,
			targetText: 'שאלות ותשובות',
		},
		{
			name: 'International Conferences',
			link: (menu) => menu.additionalInformation.internationalConferencesLink,
			target: (page) => internationalConferencesPage(page).title,
			targetText: 'כנסים בינלאומיים',
		},
	] as const

	popupCases.forEach(({name, link, expectedUrl}) => {
		test(`should navigate to ${name} page through the bottom menu and verify content`, async ({
			page,
		}) => {
			const menu = bottomMenuMainPage(page)
			const linkLocator = link(menu)
			await expect(linkLocator).toBeVisible()
			const popupPromise = page.context().waitForEvent('page')
			await linkLocator.click()
			const popupPage = await popupPromise
			await popupPage.waitForLoadState()
			await expect(popupPage).toHaveURL(
				new RegExp(`${expectedUrl.replace('?', '\\?')}$`),
			)
		})
	})

	sameTabCases.forEach(
		({name, link, target, targetText, waitForDomContentLoaded}) => {
			test(`should navigate to ${name} page through the bottom menu and verify content`, async ({
				page,
			}) => {
				const menu = bottomMenuMainPage(page)
				const linkLocator = link(menu)
				await expect(linkLocator).toBeVisible()
				await linkLocator.click()
				if (waitForDomContentLoaded) {
					await page.waitForLoadState('domcontentloaded')
				}
				const targetLocator = target(page)
				await expect(targetLocator).toBeVisible()
				await expect(targetLocator).toContainText(targetText)
			})
		},
	)
})
