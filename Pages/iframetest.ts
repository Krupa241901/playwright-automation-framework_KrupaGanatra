import { Page,expect } from "@playwright/test";

export class iframetest{
    readonly page! : Page

    constructor(page:Page){
        this.page = page
    }

    async iframeuitesting(){
        await this.page.goto('https://iframetest.com/')
        await this.page.getByText('wikipedia.org').click()
        await this.page.getByRole('button' , {name : ' Test '}).click()
        const frame =  this.page.frameLocator('iframe[src="https://wikipedia.org"]');
        await frame.locator('#searchInput').fill('playwright')
        await frame.getByRole('button' , {name : 'Search'}).click()
        await expect(frame.locator('#firstHeading')).toContainText('Playwright')
    }
}
