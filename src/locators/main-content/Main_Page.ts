export const MAIN_PAGE_LOCATORS = {
	ITCBLogo: {
		role: 'img',
		name: 'Logo',
	},
	title: {
		role: 'heading',
		name: 'עובדות שחשוב שתדע',
	},
	acceptCookiesButton: {
		role: 'button',
		name: 'הבנתי!',
	},

	importantFactsSection: {
		importantFactsTitle: {
			role: 'heading',
			name: 'עובדות שחשוב שתדע',
		},
		allFactsLink: {
			role: 'link',
			name: 'לכל העובדות',
		},
	},
	ourCertificationsSection: {
		ourCertificationsTitle: {
			role: 'heading',
			name: 'ההסמכות שלנו, הקריירה שלך',
		},
		allCertificationsLink: {
			role: 'link',
			name: 'לכל ההסמכות',
		},
	},
	decisionMakersSharingSection: {
		decisionMakersSharingTitle: {
			role: 'heading',
			name: 'מקבלי ההחלטות משתפים',
		},
		decisionMakersSharingLink:
			'a[href*="recommendations"][href*="type=1"]:not(footer a):not(nav a)',
	},
	communityMembersSharingSection: {
		communityMembersSharingTitle: {
			role: 'heading',
			name: 'חברי הקהילה משתפים',
		},
		communityMembersSharingLink:
			'a[href*="recommendations"][href*="type=0"]:not(footer a):not(nav a)',
	},
} as const
