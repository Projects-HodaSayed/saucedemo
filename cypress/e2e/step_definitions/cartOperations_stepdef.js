import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('I add {string} to the cart', (item) => {
  cy.get(`[data-test="add-to-cart-${item}"]`).click();
});

Then("the cart icon should show {string} item", (count) => {
  cy.get(".shopping_cart_badge").should("have.text", count);
});


When('I remove {string} from the cart', (item) => {
    cy.get(`[data-test="remove-${item}"]`).click();
});

Then("the cart icon should be empty", () => {
  cy.get(".shopping_cart_badge").should("not.exist");
});

Then("the cart should be empty", () => {
    cy.get(".removed_cart_item").should("exist");
  });
  