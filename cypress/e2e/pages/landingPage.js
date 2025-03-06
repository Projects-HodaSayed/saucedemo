class landingPage {
    elements = {
        sortDropdown: () => cy.get(".product_sort_container"),
        price: () => cy.get(".inventory_item_price"),
        product: (item) => cy.get(`[data-test="add-to-cart-${item}"]`),
        shoppingCart: () => cy.get(".shopping_cart_badge"),
        removedProduct: (item) => cy.get(`[data-test="remove-${item}"]`),
        cartButton: (item) => cy.get(".shopping_cart_link"),
        menuBar: () => cy.get("#react-burger-menu-btn"),
        logoutButton: () => cy.get("#logout_sidebar_link")
    }

    AddProducts(product){
        this.elements.product(product).click()
    }

    RemoveProduct(product){
        this.elements.removedProduct(product).click()
    }

    ValidateCartIcon(count){
        this.elements.shoppingCart().should("have.text", count);
    }

    ValidateCartIconIsEmpty(product){
        this.elements.shoppingCart().should("not.exist")
    }

    ClickOnCartButton(){
        this.elements.cartButton().click()
    }

    ClickMenu(){
        this.elements.menuBar().click()
    }

    ClickOnLogoutButton(){
        this.elements.logoutButton().click()
    }
    
    ValidateProductsSorting(){
        let prices = [];
        this.elements.price().each(($el) => {
          prices.push(parseFloat($el.text().replace("$", "")));
        }).then(() => {
          let sortedPrices = [...prices].sort((a, b) => a - b);
          expect(prices).to.deep.equal(sortedPrices);
        });
    }

    SortProducts(){
        this.elements.sortDropdown().select("lohi")
    }
}
export default landingPage