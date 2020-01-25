//how to use inheritence, define classes and initiating them, how to extend etc
// how to parameterised getter?

class Page{
    constructor(){
        this.title1 = 'My Page';
    }
    open(path){
        browser.url(path)
    }
   
    
getSuperPageTitle(title)   {
    switch(title) {
        case "home":
          return "ASOS | Online Shopping for the Latest Clothes & Fashion";
          break;
        case "checkout":
          return 'ASOS | Sign in';
          break;
        default:
          return "Not Tracking"
      }
     
    }
}
module.exports = Page