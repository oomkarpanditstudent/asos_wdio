var Home_Page = require("../pageObjects/Home_Page.js");
var Plp_Page = require("../pageObjects/Plp_Page.js");
var Pdp_Page = require("../pageObjects/Pdp_Page.js");
var Division_Page = require("../pageObjects/Division_Page.js");
var Common_Tasks=require("../utils/Common_Tasks.js");

describe("Test Suite - Customer Journeys for asos.com", ()=>{
    (it("Test Case 1 - Assert asos.com home page title", ()=>{
        browser.url('/');
        assert.strictEqual(browser.getTitle(), Common_Tasks.getPageTitle("home"));
    }))
   it("Test Case 2 - Browse to Women/Dresses and Continue Cust Journey all the way to processing payment", ()=>{   
        //Open site and go to Women Category - From Home Page
        browser.url('/');
        Home_Page.openWomenTopNav();//womenTopNav.click();
       // assert.equal(browser.getTitle(), Common_Tasks.getPageTitle("women"));//WHY IS THIS NOT WORKING

        // Hover to Clothing and go to Dresses - Category Page
        Division_Page.selectSubMenuDresses();
             
        //Pick items from the PLP - PLP Page
        Plp_Page.pickPlpItem() ; // 3 = third item
        
        //Interactions - Journey Flow - PDP Page 
        Pdp_Page.pickSize(2);
        Pdp_Page.addToBag() ;
        Pdp_Page.checkout() ;
        assert.equal(browser.getTitle(),Common_Tasks.getPageTitle("checkout")); // asserted that we are on login page
        //Sign In Page / Checkout Start
        //Progress  - Checkout Flow - "As New to Asos"
        /*
        const newUserLnk=$('=NEW TO ASOS?');
        const ctnuChkoutBtn=$('input.btn');
        const emailInptBox=$('input#emailAddress');
        const addEmailBtn=$('.btn.primary.submit');
        const firstNameInptBox=$('input#firstName');
        const lastNameInptBox=$('input#lastName');
        const mobileNbrInptBox=$('input#contactNumber');
        const addressInptBox=$('input#address_finder');
        const addressDdownOptns=$('span=24 Sipson Road');
        const addAddressBtn=$('.btn.primary.save-address');
        const payByCardBtn=$('.btn.card.payment-method.secondary');
        const cardNumberInptBox=$('input#cardNumber');
        const selectCardExpiryMonth=$('select#expiryDateMonth');
        const selectCardExpiryYear=$('select#expiryDateYear');//select#expiryDateYear
        const cardNameOnCardInptBox=$('input#nameOnCard');
        const cardCvvInptBox=$('input#securityCode');
        const confirmCardBtn=$('.btn.primary.save-card');
        const confirmOrderBtn=$('.btn.cta.place-order');
      

        //Primary Entry
        newUserLnk.click();
        ctnuChkoutBtn.click();
        emailInptBox.setValue('lolasoftware@gmail.com');
        addEmailBtn.click();
        //Cust Detail Entry
        firstNameInptBox.setValue("Oomkar");
        lastNameInptBox.setValue("Pandit");
        mobileNbrInptBox.setValue("07947454508");
        addressInptBox.setValue("24 Sipson Road");
        addressDdownOptns.click();
        addAddressBtn.click(); 
        //Card Payment        
        payByCardBtn.click();
        cardNumberInptBox.setValue("4444333322221111");
        selectCardExpiryMonth.selectByAttribute('value','10');
        selectCardExpiryYear.selectByAttribute('value','2020');
        cardNameOnCardInptBox.setValue("Oomkar Pandit QA");
        cardCvvInptBox.setValue("123");
        confirmCardBtn.click();
        //Confirm Order
        confirmOrderBtn.waitForClickable();   
        confirmOrderBtn.click();
        browser.pause(10000); */
    })

})