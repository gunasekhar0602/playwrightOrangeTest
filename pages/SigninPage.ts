import{Page,Locator} from'@playwright/test'

export class Signinpage
{
    readonly page:Page
    readonly amazonlogo:Locator

    constructor(page:Page)
    {
        this.page=page
        this.amazonlogo=page.locator("//i[@aria-label='Amazon']")
    }

    async verifyingamazonlogo()
    {
        await this.amazonlogo.textContent()
    }
}