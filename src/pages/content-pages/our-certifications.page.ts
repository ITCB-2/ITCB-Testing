import {type Locator, type Page} from '@playwright/test'

export const ourCertificationsPage = (page: Page) => {
	const title = page.getByRole('heading', {name: 'ההסמכות שלנו, הקריירה שלך'})

	const certifications = {
		entryLevelTestingProfessional: {
			boxTitleLocator: 'p:has-text("מקצוען בדיקות בתחילת קריירה")',
			boxImageName: 'מקצוען בדיקות בתחילת קריירה',
			readMoreButton: 'a:has-text("קרא עוד") >> nth=0',
			subBoxTitle: 'h3:has-text("Agile Tester Foundation level") >> nth=0',
		},
		testLead: {
			boxTitleLocator: 'p:has-text("מוביל בדיקות")',
			boxImageName: 'מוביל בדיקות',
			readMoreButton: 'a:has-text("קרא עוד") >> nth=1',
			subBoxTitle: {role: 'heading', name: 'מנהלים (ATM)'},
		},
		expertTester: {
			boxTitleLocator: 'p:has-text("בודק מומחה")',
			boxImageName: 'בודק מומחה',
			readMoreButton: 'a:has-text("קרא עוד") >> nth=2',
			subBoxTitle: {role: 'heading', name: 'אנליסטים (ATA)'},
		},
		testingCertificationForDevelopers: {
			boxTitleLocator: 'p:has-text("הסמכת בדיקות למפתחים")',
			boxImageName: 'הסמכת בדיקות למפתחים',
			readMoreButton: 'a:has-text("קרא עוד") >> nth=3',
			subBoxTitle: 'h3:has-text("Foundation Level") >> nth=0',
		},
	} as const
	type OurCertificationBoxName = keyof typeof certifications
	const boxNames = Object.keys(certifications) as OurCertificationBoxName[]

	return {
		title,
		boxNames,
		boxTitle: (boxName: OurCertificationBoxName) =>
			page.locator(certifications[boxName].boxTitleLocator),
		boxImage: (boxName: OurCertificationBoxName) =>
			page.getByRole('img', {
				name: certifications[boxName].boxImageName,
			}),
		readMoreButton: (boxName: OurCertificationBoxName) =>
			page.locator(certifications[boxName].readMoreButton),
		subBoxTitle: (boxName: OurCertificationBoxName): Locator => {
			const certification = certifications[boxName]

			if (typeof certification.subBoxTitle === 'string') {
				return page.locator(certification.subBoxTitle)
			}

			return page.getByRole(certification.subBoxTitle.role, {
				name: certification.subBoxTitle.name,
			})
		},
	}
}
