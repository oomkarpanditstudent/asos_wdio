//how to use inheritence, define classes and initiating them, how to extend etc
// how to parameterised getter?
// assert.equal(browser.getTitle(), Common_Tasks.getPageTitle("women"));//WHY IS THIS NOT WORKING
//how to merge master into own branch. I did git pull origin master- it deleted all my files.
//import export of classes and consts? constructors?
//Reports?
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