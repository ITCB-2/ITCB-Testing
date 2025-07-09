export const IMPORTANT_FACTS_PAGE_LOCATORS = {
  title: {
    role: 'heading',
    name: 'עובדות שחשוב שתדעו',
  },

  // עובדה ראשונה - על ISTQB
  fact1:
    'p:has-text("ISTQB® - International Software Testing Qualification Board")',

  // עובדה שנייה - תוכנה בדוקה
  fact2: 'p:has-text("תוכנה בדוקה כהלכה היא התחייבות לאיכות ולמצוינות")',

  // עובדה שלישית - 3 רמות
  fact3: 'p:has-text("להסמכה שלנו 3 רמות: בסיסית, מתקדמת ולמומחים")',

  // עובדה רביעית - פתיחת דלתות
  fact4:
    'p:has-text("גם אם אין לך רקע בתחום, בעזרת מבחן ההסמכה שלנו דלתות עולם ההייטק")',
} as const
