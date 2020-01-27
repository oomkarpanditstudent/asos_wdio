var home_page = require("../pageObjects/home_Page.js");
var division_page = require("../pageObjects/division_Page.js");
var plp_page = require("../pageObjects/plp_Page.js");
var pdp_page = require("../pageObjects/pdp_Page.js");
var checkout_page = require("../pageObjects/checkout_Page.js");
var common_tasks=require("../utils/common_tasks.js");
const testDataProd=require("../Support/testData.js");

describe("Test Suite - Customer Journeys for asos.com", ()=>{
   
   it("Test Case 1 - Browse to Women/Dresses and Continue Cust Journey all the way to processing payment", ()=>{   
    //Open site and go to Women Category - From Home Page
        browser.url('/');
        assert.strictEqual(browser.getTitle(), common_tasks.getPageTitle("home"));
        home_page.openWomenTopNav(); 
    // Hover to Clothing and go to Dresses - Category Page
        division_page.selectSubMenuDresses();
        //Pick items from the PLP - PLP Page
        plp_page.pickPlpItem() ; // 3 = third item
    //Interactions - Journey Flow - PDP Page 
        pdp_page.pickSize(testDataProd.size);
        pdp_page.addToBag() ;
        pdp_page.checkout() ;
        assert.equal(browser.getTitle(),common_tasks.getPageTitle("checkout")); // asserted that we are on login page
    //Sign In Page / Checkout Start  //Progress  - Checkout Flow - "As New to Asos"
        checkout_page.startNewUserCheckout(); 
    //Primary Entry
        checkout_page.enterEmailAddress(testDataProd.email); // [Parameterise it please]
        checkout_page.addMyEmail();
    //Cust Detail Entry
        checkout_page.enterDeliveryAddress(testDataProd.firstName,testDataProd.lastName,testDataProd.mobile,testDataProd.address);
    //Card Payment        
        checkout_page.payByCard(testDataProd.cardNumberVisa,testDataProd.cardExpiryMonth,testDataProd.cardExpiryYear,testDataProd.cardName,testDataProd.cvv);
    //Confirm Order
        checkout_page.confirmOrder();   
    })

})