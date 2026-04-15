import {test} from '../utils/myFixtures'

test.use({ storageState: { cookies: [], origins: [] } })


test('LoginPage' , async({loginPage}) =>{

    
    await loginPage.userLoginFloe();

    
})



