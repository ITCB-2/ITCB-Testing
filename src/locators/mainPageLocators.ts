export const mainPageLocators = {
  importantFactsTitle: {
    role: "heading",
    name: "עובדות שחשוב שתדע",
  },
  okToCookies: {
    role: "button",
    name: "הבנתי!",
  },
  //menu links locators
  registerToTestBtn: {
    role: "link",
    name: "הרשמה למבחן",
  },
  whyIstqbDropdownMenuBtn: {
    role: "button",
    name: "למה ®ISTQB?",
  },
  decisionMakersSharingBtnLocator: {
    role: "link",
    name: "מקבלי החלטות משתפים",
  },
  MembersOfComunnittySharringBtnLocator: {
    role: 'link',
    name:'חברי הקהילה משתפים'
  }
} as const;
