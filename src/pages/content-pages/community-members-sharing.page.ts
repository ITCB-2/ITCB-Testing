import type {Page} from '@playwright/test'

export const communityMembersSharingPage = (page: Page) => {
	const title = page.getByRole('heading', {name: 'חברי הקהילה משתפים'})

	const communityMembers = {
		'הילה קדוש': {
			imageName: 'מהנדסת בדיקות',
			position: 'מהנדסת בדיקות',
		},
		'רזאן ביראני': {
			imageName: 'בודקת תוכנה ידני ומוסמכת ISTQB',
			position: 'בודקת תוכנה ידני ומוסמכת ISTQB',
		},
		'קובי יונסי': {
			imageName: 'מנהל בדיקות בעיריית ירושלים',
			position: 'מנהל בדיקות בעיריית ירושלים',
		},
		'קטי טרכטמן': {
			imageName: 'Senior Software QA Lead',
			position: 'Senior Software QA Lead',
		},
		'מיכאל טיבין': {
			imageName: 'Director Engineering, Akamai Technologies',
			position: 'Director Engineering, Akamai Technologies',
		},
		'מור אבזיז': {
			imageName: 'מנהלת בדיקות אוטומציה, קווליטסט',
			position: 'מנהלת בדיקות אוטומציה, קווליטסט',
		},
		'עומר פיליפ': {
			imageName: 'Director, Quality & Operational Excellence',
			position: 'Director, Quality & Operational Excellence',
		},
	} as const
	type CommunityMemberName = keyof typeof communityMembers
	const memberNames = Object.keys(communityMembers) as CommunityMemberName[]

	return {
		title,
		memberNames,
		memberImage: (boxName: CommunityMemberName) =>
			page.getByRole('img', {name: communityMembers[boxName].imageName}),
		memberPosition: (boxName: CommunityMemberName) =>
			page.getByText(communityMembers[boxName].position),
	}
}
