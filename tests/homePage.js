describe("Test Suite - Customer Journeys for asos.com", ()=>{
    /*(it("Test Case 1 - Assert asos.com title", ()=>{
        browser.url('/');
        const title=browser.getTitle();
        assert.equal(title,"ASOS | Online Shopping for the Latest Clothes & Fashion");
    })*/
    it("Test Case 2 - Browse to Women/Dresses", ()=>{
        browser.url('/');
        browser.$('[data-testid="women-floor"]').click();
        const subMenuDresses=$('[href*="women/dresses"][data-testid="text-link"]');
        const clothingHover=$('#chrome-sticky-header div:nth-of-type(2) > div:nth-of-type(1) .otVu6ZN:nth-of-type(2) .f3gYf7g span');
       // browser.execute(() => { $('._1qgAFfV .f3gYf7g span').mouseover(); });
       //clothingHover.waitForVisibke
       clothingHover.moveTo() ;
       subMenuDresses.waitForClickable(7000);
    /*
        subMenuDresses.waitForExist( 7000 );
       subMenuDresses.waitForDisplayed(7000);
      */
      subMenuDresses.click();
      //browser.$('[href*="women/dresses"][data-testid="text-link"]').click();

    })

})