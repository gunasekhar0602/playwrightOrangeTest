import{test,expect} from'@playwright/test'

// import Loginpage from provide the Loginpage class path
import { Loginpage } from '../pages/LoginPage'


test('login test using POM',async({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // create a object for LoginPage class
    // through that object we can access the all action methods in the class
    // pass page as parameter
    const loginpage=new Loginpage(page)

    // accessing the action methods through the object
    /* await loginpage.enterusername('Admin');
    await loginpage.enterpassword('admin123');
    await loginpage.clickloginbutton(); */

    await loginpage.login("Admin",'admin 123');
})