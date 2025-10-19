export const OUR_CERTIFICATIONS_PAGE_LOCATOR = {
	title: {
		role: 'heading',
		name: 'ההסמכות שלנו, הקריירה שלך',
	},
	tabsMenu: {
		entryLevelTabBtns: {
			role: 'button',
			name: 'מקצוען בדיקות בתחילת קרירה',
		},
		testLeadTab: {
			role: 'button',
			name: 'מוביל בדיקות',
		},
		expertTesterTab: {
			role: 'button',
			name: 'בודק מומחה',
		},
		testingCertificationForDevelopersTab: {
			role: 'button',
			name: 'הסמכת בדיקות למפתחים',
		},
	},
	boxes: [
		{
			name: 'entryLevelTestingProfessional',
			boxTitleLocator: 'p:has-text("מקצוען בדיקות בתחילת קריירה")',
			titleText: 'מקצוען בדיקות בתחילת קריירה',
			boxImageLocator: {
				role: 'img',
				name: 'מקצוען בדיקות בתחילת קריירה',
			},
			readMoreButton: 'a:has-text("קרא עוד") >> nth=0',
			subBoxTitle: 'h3:has-text("Agile Tester Foundation level") >> nth=0',
			subBoxText: 'Agile Tester Foundation level',
		},

		{
			name: 'testLead',
			boxTitleLocator: 'p:has-text("מוביל בדיקות")',
			titleText: 'מוביל בדיקות',
			boxImageLocator: {
				role: 'img',
				name: 'מוביל בדיקות',
			},
			readMoreButton: 'a:has-text("קרא עוד") >> nth=1',
			subBoxTitle: {
				role: 'heading',
				name: 'מנהלים (ATM)',
			},
			subBoxText: 'מנהלים (ATM)',
		},

		{
			name: 'expertTester',
			boxTitleLocator: 'p:has-text("בודק מומחה")',
			titleText: 'בודק מומחה',
			boxImageLocator: {
				role: 'img',
				name: 'בודק מומחה',
			},
			readMoreButton: 'a:has-text("קרא עוד") >> nth=2',
			subBoxTitle: {
				role: 'heading',
				name: 'אנליסטים (ATA)',
			},
			subBoxText: 'אנליסטים (ATA)',
		},
		{
			name: 'testingCertificationForDevelopers',
			boxTitleLocator: 'p:has-text("הסמכת בדיקות למפתחים")',
			titleText: 'הסמכת בדיקות למפתחים',
			boxImageLocator: {
				role: 'img',
				name: 'הסמכת בדיקות למפתחים',
			},
			readMoreButton: 'a:has-text("קרא עוד") >> nth=3',
			subBoxTitle: 'h3:has-text("Foundation Level") >> nth=0',
			subBoxText: 'Foundation Level',
		},
	],
} as const
