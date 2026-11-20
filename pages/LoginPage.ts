// import Locator and Page types from Playwright
import{type Locator, type Page} from "@playwright/test";

// creating a class called LoginPage
// class ClassName
export class Loginpage
{
    // we need to define locators as variables
    // all the variables are private and readonly and we won't be access them outside the class
    // only throght the actions methods we will be able to access them
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;  


    // creating constructor to initialize the values of the variables
    // page is parameter name
    // Page is the type of the parameter
    constructor(page:Page)
    {
        // this keyword is representing the class
        this.page = page;
        this.usernameInput = page.getByRole("textbox", { name: "Username" });
        this.passwordInput = page.getByPlaceholder("Password")
        this.loginButton = page.locator("//button[(@type='submit')]")
    }


    // Action methods
    // every action method is asynchronous because inside every method we use await await
    // these methods weill return promises.
    async enterusername(username:string)
    {
        await this.usernameInput.fill(username);
    }

    async enterpassword(password:string)
    {
        await this.passwordInput.fill(password);
    }
    async clickloginbutton()
    {
        await this.loginButton.click()
    }


    async login(username:string, password:string)
    {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}

