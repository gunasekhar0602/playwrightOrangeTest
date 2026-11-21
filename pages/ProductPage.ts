import { Page,Locator } from "@playwright/test";
export class Productpage
{
    readonly page:Page
    readonly product:Locator
    readonly addtocartproductbutton:Locator
    readonly cartbutton:Locator

    constructor(page:Page)
    {
        this.page=page
        this.product=page.locator("//span[contains(text(), 'iPhone') and contains(text(),'512') and contains(text(), 'Lavender')]")
        this.addtocartproductbutton=page.locator("//span[contains(text(), 'iPhone') and contains(text(),'512') and contains(text(), 'Lavender')]/ancestor::div[@class='puisg-col-inner']//input[@aria-label='Add to cart']");
        this.cartbutton=page.locator("//span[contains(text(), 'Cart') and @class='nav-line-2']")
    }

    async verifyingproduct()
    {
        await this.product.textContent();
    }
    async clickingaddtocharproductbutton()
    {
        await this.addtocartproductbutton.click();
    }
    async clickingcartbutton()
    {
        await this.cartbutton.click();
    }
}