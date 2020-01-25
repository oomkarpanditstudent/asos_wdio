class Home_Page {

    get womenTopNav() { return $('[data-testid="women-floor"]');}

    openWomenTopNav(){
        return this.womenTopNav.click();
    }  
}
module.exports = new Home_Page()