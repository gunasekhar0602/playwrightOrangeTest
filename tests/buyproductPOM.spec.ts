import{test,expect} from'@playwright/test'

// importing the Pageclasses from the PageClass files (by mentioning the page file paths)
import { Homepage } from '../pages/HomePage'
import { Productpage } from '../pages/ProductPage'
import { Cartpage } from '../pages/CartPage'
import { Signinpage } from '../pages/SigninPage'


// Creating a test
test('Adding product to cart by Page Object Model', async({page})=>
{
    // creating the objects for all the reqired Pageclasses
    const homepage=new Homepage(page);
    const productpage=new Productpage(page);
    const cartpage=new Cartpage(page);
    const signinpage=new Signinpage(page)

    // Navigating to the page
    // Homepage
    await page.goto('https://www.amazon.in')
    await homepage.searchitem("Apple 17 Lavender");
    await homepage.clicksearchbutton();

    // Productpage
    await expect(productpage.product).toBeVisible();
    const product=await productpage.verifyingproduct();
    console.log("Product name:", product);

    await productpage.clickingaddtocharproductbutton();
    await productpage.clickingcartbutton();

    // Cartpage
    await cartpage.printingproductname();
    await cartpage.clickproceedtobuybutton();

    // Signinpage
    await expect(signinpage.amazonlogo).toBeVisible()
    if(signinpage.amazonlogo)
    {
        console.log("Test Passed")
    }
    else
    {
        console.log("Test Failed")
    }
    await signinpage.verifyingamazonlogo()
})