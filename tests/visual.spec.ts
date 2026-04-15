import { test, expect } from '@playwright/test';

test('Visual snapshot - Homepage', async ({ page }) => {
    await page.goto('/');
    
    // This takes a screenshot and compares it to a saved baseline!
    await expect(page).toHaveScreenshot('homepage.png');
});
