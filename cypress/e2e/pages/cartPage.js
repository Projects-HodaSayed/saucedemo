class CartPage {
    elements = {
        cartEmpty: () => cy.get(".removed_cart_item"),
        cartItem: () => cy.get(".cart_item"),
        checkoutButton: () => cy.get("#checkout")
    }

ValidatCartIsEmpty(){
    this.elements.cartEmpty().should("exist")
}
ValidateAddedProducts(){
    this.elements.cartItem().should("exist")
}

ClickOnCheckoutButton(){
    this.elements.checkoutButton().click()
}

}
export default CartPage
