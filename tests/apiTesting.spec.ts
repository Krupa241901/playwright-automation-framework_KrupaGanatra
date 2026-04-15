import { expect, test } from "@playwright/test";
test('APIMocking', async({ page }) => {
    
   
    await page.route('https://automationexercise.com/api/brandsList', async route => {
        const fakeData = { "brands": [{ "id": 1, "brand": "Polo" }] };
        await route.fulfill({
            body: JSON.stringify(fakeData),
        });
    });

    await page.goto('https://automationexercise.com/products');
    await expect(page.locator('.brands_products')).toContainText('Polo');
});

test('PostAPI' , async({request}) => {

    const response = await request.post('https://automationexercise.com/api/verifyLogin' , {
        form : {
            email: 'krupatest2419@gmail.com',
            password: 'ThisispwAssi12'
        }
    })

    const responsebodyy = await response.json()
    expect(responsebodyy.message).toBe('User exists!')
    console.log(responsebodyy)

})

test('getAPI' , async ({request})=> {

    const respons = await request.get('https://automationexercise.com/api/productsList')
    const responseBody = await respons.json()
    expect(respons.status()).toBe(200)
    console.log(responseBody.products[1].name)
})