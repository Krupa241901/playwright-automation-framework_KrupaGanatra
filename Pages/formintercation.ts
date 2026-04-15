import { expect, Page } from "@playwright/test";
import { faker } from '@faker-js/faker';

export class formintercation{
    readonly page! : Page;

    constructor(page: Page){
        this.page = page
    }

    async signUpfornewUser(){

        await this.page.goto('https://automationexercise.com/signup')
        const name = this.page.getByPlaceholder('Name')
        await name.fill('KrupaTest')
        const email = faker.internet.email();
        const email_signUp = this.page.locator('.signup-form',{hasText:'New User Signup!'}).getByPlaceholder('Email Address')
        await email_signUp.fill(email)
        const btn_signUP = this.page.getByRole('button' , {name:'Signup'})
        await btn_signUP.click()
        await expect(this.page.locator('.login-form')).toContainText('Enter Account Information')
        const radio_gen = this.page.getByRole('radio' , {name :'Mrs.'})
        await radio_gen.check()
        const pssword = this.page.locator('#password')
        await pssword.fill('Test444fsd')
        const checkbox = this.page.getByRole('checkbox' , {name : 'newsletter'})
        await checkbox.check() 
        await this.page.locator('#first_name').fill('User FIrst name')
        await this.page.locator('#last_name').fill('USerlast name')
        await this.page.locator('#address1').fill('Test address')
        await this.page.locator('#country').selectOption('New Zealand');
        await this.page.locator('#state').fill('Test state')
        await this.page.locator('#city').fill('Test city')
        await this.page.locator('#zipcode').fill('000')
        await this.page.locator('#mobile_number').fill('123456789')
        const btnCreateacc = this.page.getByRole('button' , {name : 'Create Account'})
        await btnCreateacc.click()
        await expect(this.page.getByText('Account Created!')).toContainText('Account Created!')
        
        


    }

}