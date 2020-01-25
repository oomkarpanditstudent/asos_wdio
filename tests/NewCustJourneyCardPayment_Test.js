var Home_Page = require("../pageObjects/Home_Page.js");
var Division_Page = require("../pageObjects/Division_Page.js");
var Plp_Page = require("../pageObjects/Plp_Page.js");
var Pdp_Page = require("../pageObjects/Pdp_Page.js");
var Checkout_Page = require("../pageObjects/Checkout_Page.js");
var Common_Tasks=require("../utils/Common_Tasks.js");
const testDataProd=require("../Support/testData.js");

describe("Test Suite - Customer Journeys for asos.com", ()=>{
   
   it("Test Case 1 - Browse to Women/Dresses and Continue Cust Journey all the way to processing payment", ()=>{   
    //Open site and go to Women Category - From Home Page
        browser.url('/');
        assert.strictEqual(browser.getTitle(), Common_Tasks.getPageTitle("home"));
        Home_Page.openWomenTopNav(); 
    // Hover to Clothing and go to Dresses - Category Page
        Division_Page.selectSubMenuDresses();
        //Pick items from the PLP - PLP Page
        Plp_Page.pickPlpItem() ; // 3 = third item
    //Interactions - Journey Flow - PDP Page 
        Pdp_Page.pickSize(testDataProd.size);
        Pdp_Page.addToBag() ;
        Pdp_Page.checkout() ;
        assert.equal(browser.getTitle(),Common_Tasks.getPageTitle("checkout")); // asserted that we are on login page
    //Sign In Page / Checkout Start  //Progress  - Checkout Flow - "As New to Asos"
        Checkout_Page.startNewUserCheckout(); 
    //Primary Entry
        Checkout_Page.enterEmailAddress(testDataProd.email); // [Parameterise it please]
        Checkout_Page.addMyEmail();
    //Cust Detail Entry
        Checkout_Page.enterDeliveryAddress(testDataProd.firstName,testDataProd.lastName,testDataProd.mobile,testDataProd.address);
    //Card Payment        
        Checkout_Page.payByCard(testDataProd.cardNumberVisa,testDataProd.cardExpiryMonth,testDataProd.cardExpiryYear,testDataProd.cardName,testDataProd.cvv);
    //Confirm Order
        Checkout_Page.confirmOrder();   
    })

})