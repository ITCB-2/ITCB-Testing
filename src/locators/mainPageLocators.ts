export const mainPageLocators = {
  title: {
    role: 'heading',
    name: 'עובדות שחשוב שתדע',
  },
  acceptCookiesButton: {
    role: 'button',
    name: 'הבנתי!',
  },
  menuLinks: {
    whyISTQB: {
      button: {parent: '#navbarScroll', role: 'button', name: 'למה ®ISTQB?'},
      decisionMakersSharingLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'מקבלי החלטות משתפים',
      },
      membersOfComunnitySharingLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'חברי הקהילה משתפים',
      },
    },
  },
} as const
