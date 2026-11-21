// import Locator and Page types from Playwright
import { Page,Locator } from "@playwright/test";

// creating a class called Homepage
// class Classname
export class Homepage
{
    // we need to define locators as variables
    // all the varaibles are private and readonly and we won't be access them outside the class
    // only through the action methods
    private readonly page:Page
    private readonly searchbar:Locator
    private readonly searchbutton:Locator

    // creating constructor to initalize the values to the variables
    // page is parameter
    // Page is type of the parameter
    constructor(page:Page)
    {
        // this representing the class
        this.page=page;
        this.searchbar=page.getByPlaceholder("Search Amazon.in");
        this.searchbutton=page.locator("#nav-search-submit-button");
    }

    // Actions methods
    // every action method is asynchronous because inside every method we use await
    // this methods will retrun promise
    async searchitem(item:string)
    {
        await this.searchbar.fill(item);
    }
    async clicksearchbutton()
    {
        await this.searchbutton.click();
    }
}