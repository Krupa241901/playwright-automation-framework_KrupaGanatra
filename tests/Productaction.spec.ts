import {test} from '../utils/myFixtures'

test('Search and add o card' , async({productPage}) => {
    
    
    await productPage.searchProduct()
    await productPage.addProductToTheCart()
})

