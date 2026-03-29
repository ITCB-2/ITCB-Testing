import type {Page} from '@playwright/test'

export const mainPage = (page: Page) => {
	const logo = page.getByRole('img', {name: 'Logo'})
	const acceptCookiesButton = page.getByRole('button', {name: 'הבנתי!'})
	const importantFactsSectionTitle = page.getByRole('heading', {
		name: 'עובדות שחשוב שתדע',
	})
	const allFactsLink = page.getByRole('link', {name: 'לכל העובדות'})
	const ourCertificationsTitle = page.getByRole('heading', {
		name: 'ההסמכות שלנו, הקריירה שלך',
	})
	const allCertificationsLink = page.getByRole('link', {name: 'לכל ההסמכות'})
	const decisionMakersSharingTitle = page.getByRole('heading', {
		name: 'מקבלי ההחלטות משתפים',
	})
	const decisionMakersSharingLink = page
		.getByRole('link', {name: 'מקבלי החלטות משתפים'})
		.first()
	const communityMembersSharingLink = page
		.getByRole('link', {name: 'חברי הקהילה משתפים'})
		.first()

	return {
		logo,
		acceptCookiesButton,
		importantFactsSectionTitle,
		allFactsLink,
		ourCertificationsTitle,
		allCertificationsLink,
		decisionMakersSharingTitle,
		decisionMakersSharingLink,
		communityMembersSharingLink,
	}
}
