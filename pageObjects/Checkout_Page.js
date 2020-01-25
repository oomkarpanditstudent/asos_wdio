class Checkout_Page {
    get newUserLnk(){ return $('=NEW TO ASOS?');}
    get ctnuChkoutBtn(){ return $('input.btn');}
    get emailInptBox(){ return $('input#emailAddress');}
    get addEmailBtn(){ return $('.btn.primary.submit');}
    get firstNameInptBox(){ return $('input#firstName');}
    get lastNameInptBox(){ return $('input#lastName');}
    get mobileNbrInptBox(){ return $('input#contactNumber');}
    get addressInptBox(){ return $('input#address_finder');}
    get addressDdownOptns(){ return $('span=24 Sipson Road');} // need to parametrise?
    get addAddressBtn(){ return $('.btn.primary.save-address');}
    get payByCardBtn(){ return $('.btn.card.payment-method.secondary');}
    get cardNumberInptBox(){ return $('input#cardNumber');}
    get selectCardExpiryMonth(){ return $('select#expiryDateMonth');}
    get selectCardExpiryYear(){ return $('select#expiryDateYear');}
    get cardNameOnCardInptBox(){ return $('input#nameOnCard');}
    get cardCvvInptBox(){ return $('input#securityCode');}
    get confirmCardBtn(){ return $('.btn.primary.save-card');}
    get confirmOrderBtn(){ return $('.btn.cta.place-order');}

    startNewUserCheckout(){
        this.newUserLnk.click();
        this.ctnuChkoutBtn.click();
        }
    enterEmailAddress(email){
        this.emailInptBox.setValue(email);
         }
    addMyEmail(){
         this.addEmailBtn.click();
         }
    enterDeliveryAddress(firstName,lastName,mobileNumber,addressFindText){
        this.firstNameInptBox.setValue(firstName);
        this.lastNameInptBox.setValue(lastName);
        this.mobileNbrInptBox.setValue(mobileNumber);
        this.addressInptBox.setValue(addressFindText);
        this.addressDdownOptns.click();
        this.addAddressBtn.click(); 
        } 
    payByCard(card,expiryMonth,expiryYear,cardName,cvv){
        this.payByCardBtn.click();
        this.cardNumberInptBox.setValue(card);
        this.selectCardExpiryMonth.selectByAttribute('value',expiryMonth);
        this.selectCardExpiryYear.selectByAttribute('value',expiryYear);
        this.cardNameOnCardInptBox.setValue(cardName);
        this.cardCvvInptBox.setValue(cvv);
        this.confirmCardBtn.click();
        }
        confirmOrder(){
        this.confirmOrderBtn.waitForClickable();   
        this.confirmOrderBtn.click();
        browser.pause(10000); 
        }
}
module.exports = new Checkout_Page()