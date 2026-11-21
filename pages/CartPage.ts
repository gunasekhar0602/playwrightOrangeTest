import { Page,Locator } from "@playwright/test";

export class Cartpage
{
    readonly page:Page
    readonly cartproduct:Locator
    readonly proceedtobuybutton:Locator


    constructor(page:Page)
    {
        this.page=page
        this.cartproduct=page.locator("//span[contains(text(), 'iPhone') and @class='a-truncate-cut']")
        this.proceedtobuybutton=page.locator(" //input[@value='Proceed to checkout']")
    }

    async printingproductname()
    {
        const productname=await this.cartproduct.textContent();
        console.log(productname);
    }

    async clickproceedtobuybutton()
    {
        await this.proceedtobuybutton.click()
    }
}