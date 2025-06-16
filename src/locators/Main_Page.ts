export const MAIN_PAGE_LOCATORS = {
  title: {
    role: 'heading',
    name: 'עובדות שחשוב שתדע',
  },
  acceptCookiesButton: {
    role: 'button',
    name: 'הבנתי!',
  },
  menuLinks: {
    registerToTestLink: {
      parent: '#navbarScroll',
      role: 'link',
      name: 'הרשמה למבחן',
    },
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
      ourCertificationsLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'ההסמכות שלנו',
      },
      howToPrepareToISTQBTestLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'איך להתכונן למבחן ISTQB®',
      },
    },

    ISTQBContent: {
      button: {parent: '#navbarScroll', role: 'button', name: 'תכני ®ISTQB'},
      SyllabusAndSampleExamsLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'סילבוסים ובחינות לדוגמה',
      },
      termsGlossaryLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'מילון מונחים',
      },
      listOfCertifiedTestersLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'רשימת מוסמכים',
      },
      syllabusInfoLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'כל מה שרציתם לדעת על סילבוס CTFL',
      },
    },
    testingInIsael: {
      button: {parent: '#navbarScroll', role: 'button', name: 'בדיקות בישראל'},
      usefulLinksLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'קישורים שימושיים',
      },
      ITCBMagazineLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'מגזין "עולם הבדיקות"',
      },
      podcatsLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'פודקאסטים',
      },
      eventsSummariesLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'סיכומי אירועים',
      },
      tipsLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'טיפים',
      },
    },
    additionalInformation: {
      button: {parent: '#navbarScroll', role: 'button', name: 'מידע נוסף'},
      importantFactsLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'עובדות שחשוב שתדעו',
      },
      questionsAndAnswersLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'שאלות ותשובות',
      },
      internationalConferencesLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'כנסים בינלאומיים',
      },
    },
    aboutITCB: {
      button: {parent: '#navbarScroll', role: 'button', name: 'אודות ®ITCB'},
      aboutUsLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'קצת עלינו',
      },
      boardOfDirectorsLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'הוועד המנהל',
      },
      advisoryBoardLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'הוועד המייעץ',
      },
      ourPartnersLink: {
        parent: '#navbarScroll',
        role: 'link',
        name: 'השותפים שלנו',
      },
    },
    contactUsLink: {parent: '#navbarScroll', role: 'link', name: 'צור קשר'},
  },
} as const
