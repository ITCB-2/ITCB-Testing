export const OUR_CERTIFICATIONS_PAGE_LOCATOR = {
  title: {
    role: 'heading',
    name: 'ההסמכות שלנו, הקריירה שלך',
  },
  entryLevelTestingProfessionalbox: {
    boxTitle: 'p:has-text("מקצוען בדיקות בתחילת קריירה")',
    boxImage: {
      role: 'img',
      name: 'מקצוען בדיקות בתחילת קריירה',
    },
    readMoreButton: 'a:has-text("קרא עוד") >> nth=0',
  },
  testLeadBox: {
    boxTitle: 'p:has-text("מוביל בדיקות")',
    boxImage: {
      role: 'img',
      name: 'מוביל בדיקות',
    },
    readMoreButton: 'a:has-text("קרא עוד") >> nth=1',
  },
  expertTesterBox: {
    boxTitle: 'p:has-text("בודק מומחה")',
    boxImage: {
      role: 'img',
      name: 'בודק מומחה',
    },
    readMoreButton: 'a:has-text("קרא עוד") >> nth=2',
  },
  TestingCertificationForDevelopersBox: {
    boxTitle: 'p:has-text("הסמכת בדיקות למפתחים")',
    boxImage: {
      role: 'img',
      name: 'הסמכת בדיקות למפתחים',
    },
    readMoreButton: 'a:has-text("קרא עוד") >> nth=3',
  },
  readMoreSection: {
    foundationLevelBox: {
      boxTitle: 'h3:has-text("Foundation Level") >> nth=0',
    },
    AgileTesterFoundationLevelBox: {
      boxTitle: 'h3:has-text("Agile Tester Foundation level") >> nth=0',
    },
    managersBox: {
      boxTitle: {
        role: 'heading',
        name: 'מנהלים (ATM)',
      },
    },
    analystsBox: {
      boxTitle: {
        role: 'heading',
        name: 'אנליסטים (ATA)',
      },
    },
  },
} as const
