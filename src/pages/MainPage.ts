import { BasePage } from "@/core/BasePage";
import { BASE_URL } from "@/data/urls";
import { mainPageLocators } from "@/locators/mainPageLocators";
import { decisionMakersSharingPageLocators } from "@/locators/decisionMakersSharingPageLocators";
import { expect, type Page } from "@playwright/test";
import { registerToTestPageLocators } from "@/locators/registerToTestPageLocators";
import { RegisterToTestPage } from "./RegisterToTestPage";
import type { promises } from "dns";

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  async openMainPage(): Promise<void> {
    await this.page.goto(BASE_URL);
    await this.pressOkToCookies();
    await this.validateText(
      mainPageLocators.importantFactsTitle,
      "עובדות שחשוב שתדע"
    );
  }

  async pressOkToCookies(): Promise<void> {
    const cookiesMsg = this.page.getByRole("button", {
      name: mainPageLocators.okToCookies.name,
    });
    await cookiesMsg.click();
  }

  async gotoRegisterToTestPage(): Promise<void> {
    const registerToTestBtn = this.page
      .getByRole("link", { name: mainPageLocators.registerToTestBtn.name })
      .nth(0);
    await registerToTestBtn.click();
    //מחכה שייסדרו אישור באתר
    // const registerToTestPageTitleChek = this.page.getByRole('heading', { name: registerToTestPageLocators.registerToTestTitle.name });
    // await expect(registerToTestPageTitleChek).toHaveText('הרשמה למבחן')
  }

  async hooverOnWhyIstqbDropdownMenu(): Promise<void> {
    const dropdownMenuBtn = this.page.getByRole(
      mainPageLocators.whyIstqbDropdownMenuBtn.role,
      { name: mainPageLocators.whyIstqbDropdownMenuBtn.name }
    );
    await dropdownMenuBtn.hover();
  }






  async gotoDecisionMakersSharingPage(): Promise<void> {
    await this.hooverOnWhyIstqbDropdownMenu();
    const decisionMakersSharingBtn = this.page
      .getByRole(mainPageLocators.decisionMakersSharingBtnLocator.role, {
        name: mainPageLocators.decisionMakersSharingBtnLocator.name,
      })
      .nth(0);
    
    await decisionMakersSharingBtn.click();

  }





  async gotoMembersOfComunnittySharring(): Promise<void>{
    await this.hooverOnWhyIstqbDropdownMenu();
    const MembersOfComunnittySharringBtn = this.page.getByRole(mainPageLocators.MembersOfComunnittySharringBtnLocator.role, { name: mainPageLocators.MembersOfComunnittySharringBtnLocator.name }).nth(0);
    await MembersOfComunnittySharringBtn.click();
    
  }
}
