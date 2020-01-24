describe("Test Suite - Customer Journeys for asos.com", ()=>{
    /*(it("Test Case 1 - Assert asos.com title", ()=>{
        browser.url('/');
        const title=browser.getTitle();
        assert.equal(title,"ASOS | Online Shopping for the Latest Clothes & Fashion");
    })*/
    it("Test Case 2 - Browse to Women/Dresses", ()=>{
        
        // Variables
        const subMenuDresses=$('[href*="women/dresses"][data-testid="text-link"]');
        const clothingHover=$('span=Clothing');
        const bagIcon=$('[data-testid="bagIcon"]');
        const bagCheckout=$('span=Checkout')
        //Open site and go to Women Category - From Home Page
        browser.url('/');
        browser.$('[data-testid="women-floor"]').click();
        // Hover to Clothing and go to Dresses - Category Page
        clothingHover.moveTo() ;
        subMenuDresses.waitForClickable(7000);
        subMenuDresses.click();
        //Pick items from the PLP - PLP Page
        browser.$('section > article:nth-of-type(3)').click(); //select 3rd product from list
        //Interactions - Journey Flow - PDP Page 
        browser.$('select#main-size-select-0').selectByIndex(2); //select 2nd indexed item
        browser.$('.aside-action a').click(); //add to bag/
        bagIcon.moveTo(); // hovering to enable mini bag options
        bagCheckout.waitForClickable(7000); // ensuring the checkout is available to click on bag page
        bagCheckout.click(); //clicked checkout of mini bag
        assert.equal(browser.getTitle(),'ASOS | Sign in'); // asserted that we are on login page
        

   


    })

})