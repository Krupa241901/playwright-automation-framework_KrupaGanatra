import { test as base } from '@playwright/test';
import { UserLoginPage } from '../Pages/UserLoginPage';
import { Productaction } from '../Pages/Productaction';
import { iframetest } from '../Pages/iframetest';
import { formintercation } from '../Pages/formintercation';

type MyFixtures = {
    loginPage: UserLoginPage;
    productPage: Productaction;
    iframetest : iframetest;
    formintercation : formintercation;
};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new UserLoginPage(page));
    },

    productPage: async ({ page }, use) => {
        await use(new Productaction(page));
    },

    iframetest : async({page} , use) =>{
        await use(new iframetest(page))
    },

    formintercation : async ({page} , use) =>{
        await use(new formintercation(page))
    }

});

export { expect } from '@playwright/test';
