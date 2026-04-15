import { Page , expect } from "@playwright/test";

export class UserLoginPage {

    readonly page!: Page;
    constructor(page:Page) {

        this.page = page
        
    }

    async userLoginFloe(){
        await this.page.goto('/login')
        console.log(process.env.BASE_URL) // internal purpose
        const input_emai = this.page.locator('.login-form',{hasText:'Login to your account'}).getByPlaceholder('Email Address')
        const nput_passwd = this.page.getByPlaceholder('Password')
        const btn_login = this.page.getByRole('button' , {name:'Login'})
        await input_emai.fill(process.env.UNAME!)
        console.log(process.env.UNAME)
        await nput_passwd.fill(process.env.PASSWD!)
        await btn_login.click()
        await expect(this.page.getByText('Logged in as Krupa')).toHaveText('Logged in as Krupa')
        console.log("Logged In !!")
        
    }
}