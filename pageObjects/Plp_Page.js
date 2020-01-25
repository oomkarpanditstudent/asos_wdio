class Plp_Page {
     
    get thirdPlpItem() { return $('section > article:nth-of-type(3)');}
    
    pickPlpItem(){
        this.thirdPlpItem.click;
        }
}
module.exports = new Plp_Page()