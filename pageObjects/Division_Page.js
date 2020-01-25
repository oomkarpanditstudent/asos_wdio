class Division_Page {
    
    get clothingHover() { return $('span=Clothing');}
    get subMenuDressesLnk() { return $('[href*="women/dresses"][data-testid="text-link"]');}

    selectSubMenuDresses(){
        this.clothingHover.moveTo();
        this.subMenuDressesLnk.waitForClickable(7000);
        this.subMenuDressesLnk.click();
        } 
}
module.exports = new Division_Page()