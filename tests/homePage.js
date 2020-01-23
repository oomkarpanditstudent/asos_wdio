describe("Test Suite - Customer Journeys for asos.com", ()=>{
    it("Test Case 1 - Assert asos.com title", ()=>{
        browser.url('/');
        const title=browser.getTitle();
        assert.equal(title,"ASOS | Online Shopping for the Latest Clothes & Fashion");
       

    })

})