class Pdp_Page {
        
    get size() { return $('select#main-size-select-0');}
    get bagIcon() { return $('[data-testid="bagIcon"]');}
    get bagCheckoutBtn() { return $('span=Checkout');}
    get addToBagMain() { return $('.aside-action a');}

    pickSize(nbr){
        this.size.selectByIndex(nbr); //select nbr i.e. 2nd indexed item if 2 passed
        }
    addToBag(){ 
        this.addToBagMain.click();//add to bag
        }
    checkout(){

    this.bagIcon.moveTo(); // hovering to enable mini bag options
    this.bagCheckoutBtn.waitForClickable(7000); // ensuring the checkout is available to click on bag page
    this.bagCheckoutBtn.click(); //clicked checkout of mini bag
        }
}
module.exports = new Pdp_Page()