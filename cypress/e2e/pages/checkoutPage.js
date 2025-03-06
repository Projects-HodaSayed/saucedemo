class checkoutPage {
    elements = {
        firstName: () => cy.get("#first-name"),
        lastName: () => cy.get("#last-name"),
        zipCode: () => cy.get("#postal-code"),
        continueButton: () => cy.get("#continue"),
        finishButton: () => cy.get("#finish"),
        cancelButton: () => cy.get("#cancel")
    }

FillCheckoutDetails(firstName, lastName, zipCode){
    this.elements.firstName().type(firstName);
    this.elements.lastName().type(lastName);
    this.elements.zipCode().type(zipCode);
    this.elements.continueButton().click();
}

ClickOnFinish(){
    this.elements.finishButton().click()
}

ValidateConfirmationMessage(message){
    cy.contains(message).should("be.visible")
}

ClickOnCancel(){
    this.elements.cancelButton().click()
}

CheckLandingOnCartPage(){
    cy.url().should("include", "/cart.html");
}

ValidateErrorIfUserCheckoutCartEmpty(){
    cy.contains("Error: Your cart is empty").should("be.visible");
}
}
export default checkoutPage
