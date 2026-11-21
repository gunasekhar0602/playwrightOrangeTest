// if we are using the custom fixture in the test means we need to mention the fixture file path
import{test, expect} from '../Fixtures/customFixtures'

// mention all the fxitures in the async funtion insidde the curly braces
test(" Adding product to cart by Page Object Model by Fixture ", async({page, homepage,cartpage,productpage,signinpage})=>
{
    // navigating to page
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