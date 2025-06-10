import test from '@/fixtures/testSetup'
import { MainPage } from '@/pages/MainPage';
import { decisionMakersSharingPageLocators } from "@/locators/decisionMakersSharingPageLocators";
import{membersOfComunnittySharringPageLocators} from '@/locators/membersOfComunnittySharringPageLocators'
import { expect } from '@playwright/test';

test('Register to test link test', async ({ mainPage }) => {
    await mainPage.openMainPage();
    await mainPage.gotoRegisterToTestPage();
    
})

//WhyIstqbDropdownMenu Tests
test.describe('WhyIstqbDropdownMenu Tests', () => {


    test('Decision Makers Sharing link test', async ({ mainPage, context }) => {
        await mainPage.openMainPage();
        const newPagePromise = context.waitForEvent('page');
        await mainPage.gotoDecisionMakersSharingPage();
        const newPage = await newPagePromise;
        const newPageTitle = newPage.getByRole(decisionMakersSharingPageLocators.decisionMakersSharingPageTitle.role, { name: decisionMakersSharingPageLocators.decisionMakersSharingPageTitle.name })
        expect(newPageTitle).toHaveText('מקבלי החלטות משתפים');

    });

    test('Members Of comunnitty sharring link test', async ({ mainPage, context }) => {
        await mainPage.openMainPage();
        const newPagePromise = context.waitForEvent('page');
        await mainPage.gotoMembersOfComunnittySharring();
        const newPage = await newPagePromise;
        const newPageTitle = newPage.getByRole(membersOfComunnittySharringPageLocators.membersOfComunnittySharringTitle.role, { name: membersOfComunnittySharringPageLocators.membersOfComunnittySharringTitle.name })
        expect(newPageTitle).toHaveText('חברי הקהילה משתפים');


    })
    



})
//WhyIstqbDropdownMenu Tests end


