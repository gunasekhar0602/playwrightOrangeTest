// import test and enhance test with alias base
// instead of test we can use base for creating the fixture
import{test as base ,expect} from '@playwright/test'

// import the page classes from the pages folder
import { Loginpage } from '../pages/LoginPage'


// create an interface

interface PageFixture
{
    // create objects for page classes inside the interface
    // objectname:Classname
    loginpage:Loginpage
}


export const test=base.extend<PageFixture>
({
    loginpage:async({page},use)=> use(new Loginpage(page))
})


export {expect}