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
      membersOfCommunitySharingLink: {
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
    testingInIsrael: {
      button: {
        parent: '#navbarScroll',
        role: 'button',
        name: 'בדיקות בישראל',
      },
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
      podcastsLink: {
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
  sliderSection: {
    slidersTitles: {
      slider1Title: {
        role: 'heading',
        name: 'אנו גאים להציג את אפליקצית ®',
      },
      slider2Title: {
        role: 'heading',
        name: 'אבן דרך עולמית באיכות תוכנה: מעל מיליון הסמכות ISTQB',
      },
      slider3Title: {
        role: 'heading',
        name: 'מקומות בהם איכות פוגשת מצוינות כנסים עולמיים לבדוקי תוכנה!!!',
      },
      slider4Title: {
        role: 'heading',
        name: 'אצלנו תצליח בהייטק, זה בדוק!',
      },
      slider5Title: {
        role: 'heading',
        name: 'עמותת ITCB',
      },
    },
    slidersBtns: {
      slider1Btn: {
        role: 'button',
        name: '01',
      },
      slider2Btn: {
        role: 'button',
        name: '02',
      },
      slider3Btn: {
        role: 'button',
        name: '03',
      },
      slider4Btn: {
        role: 'button',
        name: '04',
      },
      slider5Btn: {
        role: 'button',
        name: '05',
      },
    },
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
  },
  bottomMenuLinks: {
    whyISTQB: {
      decisionMakersSharingLink: {
        role: 'link',
        name: 'מקבלי החלטות משתפים',
        parent: 'footer',
      },
      membersOfCommunitySharingLink: {
        role: 'link',
        name: 'חברי הקהילה משתפים',
        parent: 'footer',
      },
      ourCertificationsLink: {
        role: 'link',
        name: 'ההסמכות שלנו',
        parent: 'footer',
      },
      howToPrepareToISTQBTestLink: {
        role: 'link',
        name: 'איך להתכונן למבחן ISTQB®',
        parent: 'footer',
      },
    },
    ISTQBContent: {
      SyllabusAndSampleExamsLink: {
        role: 'link',
        name: 'סילבוסים ובחינות לדוגמה',
        parent: 'footer',
      },
      termsGlossaryLink: {
        role: 'link',
        name: 'מילון מונחים',
        parent: 'footer',
      },
      listOfCertifiedTestersLink: {
        role: 'link',
        name: 'רשימת מוסמכים',
        parent: 'footer',
      },
      syllabusInfoLink: {
        role: 'link',
        name: 'כל מה שרציתם לדעת על סילבוס CTFL',
        parent: 'footer',
      },
    },
    testingInIsrael: {
      usefulLinksLink: {
        role: 'link',
        name: 'קישורים שימושיים',
        parent: 'footer',
      },
      ITCBMagazineLink: {
        role: 'link',
        name: 'מגזין "עולם הבדיקות"',
        parent: 'footer',
      },
      podcastsLink: {
        role: 'link',
        name: 'פודקאסטים',
        parent: 'footer',
      },
      eventsSummariesLink: {
        role: 'link',
        name: 'סיכומי אירועים',
        parent: 'footer',
      },
      tipsLink: {
        role: 'link',
        name: 'טיפים',
        parent: 'footer',
      },
    },
    additionalInformation: {
      importantFactsLink: {
        role: 'link',
        name: 'עובדות שחשוב שתדעו',
        parent: 'footer',
      },
      questionsAndAnswersLink: {
        role: 'link',
        name: 'שאלות ותשובות',
        parent: 'footer',
      },
      internationalConferencesLink: {
        role: 'link',
        name: 'כנסים בינלאומיים',
        parent: 'footer',
      },
    },
    aboutITCB: {
      aboutUsLink: {
        role: 'link',
        name: 'קצת עלינו',
        parent: 'footer',
      },
      boardOfDirectorsLink: {
        role: 'link',
        name: 'הוועד המנהל',
        parent: 'footer',
      },
      advisoryBoardLink: {
        role: 'link',
        name: 'הוועד המייעץ',
        parent: 'footer',
      },
      ourPartnersLink: {
        role: 'link',
        name: 'השותפים שלנו',
        parent: 'footer',
      },
    },
  },
} as const
