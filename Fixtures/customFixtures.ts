// import test and enhance test with alias base
// instead of test we can use base for creating the fixture
import{test as base ,expect} from '@playwright/test'

// import the Pageclasses from the pages folder
import { Homepage } from '../pages/HomePage'
import { Productpage } from '../pages/ProductPage'
import { Cartpage } from '../pages/CartPage'
import { Signinpage } from '../pages/SigninPage'

// create interface
interface Pagefixture
{
    // create objects for Pageclasses inside the inerface
    // fixturename:Pageclass
    homepage:Homepage
    productpage:Productpage
    cartpage:Cartpage
    signinpage:Signinpage
}

export const test=base.extend<Pagefixture>
({
    homepage:async({page},use)=>use(new Homepage(page)),
    productpage:async({page},use)=>use(new Productpage(page)),
    cartpage:async({page},use)=>use(new Cartpage(page)),
    signinpage:async({page},use)=>use(new Signinpage(page))
})

export {expect}