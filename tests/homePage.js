describe("Test Suite - Customer Journeys for asos.com", ()=>{
    /*(it("Test Case 1 - Assert asos.com title", ()=>{
        browser.url('/');
        const title=browser.getTitle();
        assert.equal(title,"ASOS | Online Shopping for the Latest Clothes & Fashion");
    })*/
    it("Test Case 2 - Browse to Women/Dresses and Continue Cust Journey", ()=>{
        
        // Variables
        const subMenuDressesLnk=$('[href*="women/dresses"][data-testid="text-link"]');
        const clothingHover=$('span=Clothing');
        const bagIcon=$('[data-testid="bagIcon"]');
        const bagCheckoutBtn=$('span=Checkout')
        //Open site and go to Women Category - From Home Page
        browser.url('/');
        browser.$('[data-testid="women-floor"]').click();
        // Hover to Clothing and go to Dresses - Category Page
        clothingHover.moveTo() ;
        subMenuDressesLnk.waitForClickable(7000);
        subMenuDressesLnk.click();
        //Pick items from the PLP - PLP Page
        browser.$('section > article:nth-of-type(3)').click(); //select 3rd product from list
        //Interactions - Journey Flow - PDP Page 
        browser.$('select#main-size-select-0').selectByIndex(2); //select 2nd indexed item
        browser.$('.aside-action a').click(); //add to bag/
        bagIcon.moveTo(); // hovering to enable mini bag options
        bagCheckoutBtn.waitForClickable(7000); // ensuring the checkout is available to click on bag page
        bagCheckoutBtn.click(); //clicked checkout of mini bag
        assert.equal(browser.getTitle(),'ASOS | Sign in'); // asserted that we are on login page
        //Sign In Page / Checkout Start
        //Progress  - Checkout Flow - "As New to Asos"
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
        browser.pause(10000);
    })

})