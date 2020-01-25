class Common_Tasks{

getPageTitle(title)   {
    switch(title) {
        case "home":
          return "ASOS | Online Shopping for the Latest Clothes & Fashion";
          break;
        case "checkout":
          return 'ASOS | Sign in';
          break;
        case "women":
          return "Women's Clothes | Shop for Women's Fashion | ASOS";
          break;
        default:
          return "Not Tracking"
      }
    }
}
module.exports =new Common_Tasks()