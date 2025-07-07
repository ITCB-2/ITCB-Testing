import test from '@/fixtures/testSetup'
test.describe.serial.only('Sliders Main Page Tests', () => {
  test.describe.configure({timeout: 60000})

  test('should validate the first slider', async ({slidersMainPage}) => {
    await slidersMainPage.slide1Verification()
  })
  test('should validate the second slider', async ({slidersMainPage}) => {
    await slidersMainPage.slide2Verification()
  })
  test('should validate the third slider', async ({slidersMainPage}) => {
    await slidersMainPage.slide3Verification()
  })
  test('should validate the fourth slider', async ({slidersMainPage}) => {
    await slidersMainPage.slide4Verification()
  })
  test('should validate the fifth slider', async ({slidersMainPage}) => {
    await slidersMainPage.slide5Verification()
  })
})
