import type {Page} from '@playwright/test'
import {ROUTES} from '../../constants/routes'

export const slidersMainPage = (page: Page) => {
	const slides = {
		slide1: {
			route: ROUTES.slide1,
			title: 'חוגגים 10 שנים לתחרות הבדיקות של ישראל!',
			expectedText: 'חוגגים 10 שנים לתחרות הבדיקות של ישראל!',
		},
		slide2: {
			route: ROUTES.slide2,
			title:
				'אנו גאים להציג את אפליקצית ®ISTQB למונחים המקצועיים מעולם בדיקות התוכנה בשפה העברית.',
			expectedText:
				'אנו גאים להציג את אפליקצית ®ISTQB למונחים המקצועיים מעולם בדיקות התוכנה בשפה העברית.',
		},
		slide3: {
			route: ROUTES.slide3,
			title:
				'אנו גאים להציג את אפליקצית ®ISTQB למונחים המקצועיים מעולם בדיקות התוכנה בשפה העברית.',
			expectedText:
				'אנו גאים להציג את אפליקצית ®ISTQB למונחים המקצועיים מעולם בדיקות התוכנה בשפה העברית.',
		},
		slide4: {
			route: ROUTES.slide4,
			title: 'אצלנו תצליח בהייטק, זה בדוק!',
			expectedText: 'אצלנו תצליח בהייטק, זה בדוק!',
		},
		slide5: {
			route: ROUTES.slide5,
			title: 'אצלנו תצליח בהייטק, זה בדוק!',
			expectedText: 'אצלנו תצליח בהייטק, זה בדוק!',
		},
	} as const
	type SlideName = keyof typeof slides

	return {
		slideNames: Object.keys(slides) as SlideName[],
		slideRoute: (slideName: SlideName) => slides[slideName].route,
		slideTitle: (slideName: SlideName) =>
			page.getByRole('heading', {name: slides[slideName].title}),
		slideExpectedText: (slideName: SlideName) => slides[slideName].expectedText,
	}
}
