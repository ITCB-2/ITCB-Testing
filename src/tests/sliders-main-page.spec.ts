import test from "@/fixtures/testSetup";
test.describe.serial("Sliders Main Page Tests", () => {
  test("should validate the first slider ", async ({ mainPage }) => {
    test.setTimeout(60000);
    await mainPage.slide1Verification();
  });
  test("should validate the second slider", async ({ mainPage }) => {
    test.setTimeout(60000);
    await mainPage.slide2Verification();
  });
  test("should validate the third slider", async ({ mainPage }) => {
    test.setTimeout(60000);
    await mainPage.slide3Verification();
  });
  test("should validate the fourth slider", async ({ mainPage }) => {
    test.setTimeout(60000);
    await mainPage.slide4Verification();
  });
  test("should validate the fifth slider", async ({ mainPage }) => {
    test.setTimeout(60000);
    await mainPage.slide5Verification();
  });
});
