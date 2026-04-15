import { chromium, FullConfig } from '@playwright/test';
async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    await page.goto('https://automationexercise.com/login');
    await page.locator('.login-form', { hasText: 'Login to your account' })
              .getByPlaceholder('Email Address')
              .fill(process.env.UNAME!);
    await page.getByPlaceholder('Password').fill(process.env.PASSWD!);
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Save the logged-in browser state to a file!
    await page.context().storageState({ path: 'utils/authState.json' });
    await browser.close();
}
export default globalSetup;