import {test,expect} from '../Fixtures/customFixtures'

test.describe("Testing orange Application",async()=>
{
    test("Testing Login with fixture", async({page,loginpage})=>
    {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await loginpage.login("Admin",'admin123')
    })
})