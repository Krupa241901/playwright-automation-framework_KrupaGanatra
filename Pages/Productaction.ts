import { expect, Locator, Page } from "@playwright/test";

export class  Productaction{
     readonly page!: Page;
     readonly productCard! : Locator;

     constructor(page:Page){
        this.page = page
        this.productCard = this.page.locator('.productinfo', {hasText: 'Blue Top'})

     }
    
     async searchProduct(){
        await this.page.goto('/')
        await this.page.goto('/products')
        await expect(this.page.getByText('All Products')).toHaveText('All Products')
        const searchbox = this.page.locator('#search_product')
        await searchbox.fill('Blue Top')
        await this.page.locator('#submit_search').click()
        await expect(this.productCard).toContainText('Blue Top')
        
}

async addProductToTheCart(){

        
        await this.productCard.hover()
        await this.productCard.getByText('Add to cart').click();
        await expect(this.page.locator('.modal-content')).toContainText('Added!')
        await this.page.getByText('Continue Shopping').click()
        await this.page.goto('/view_cart')
        await expect(this.page.locator('#product-1 td.cart_description a', { hasText: 'Blue Top' })).toContainText('Blue Top')
        await this.page.getByText('Proceed To Checkout').click()
        await expect(this.page.getByText('Review Your Order')).toBeVisible()


}
}