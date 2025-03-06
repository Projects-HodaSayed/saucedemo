import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("I click on the cart icon", () => {
  cy.get(".shopping_cart_link").click();
});

Then("I should see the added product in the cart", () => {
  cy.get(".cart_item").should("exist");
});

When("I proceed to checkout", () => {
  cy.get("#checkout").click();
});

When('I fill in my details {string} {string} {string}', (firstName, lastName, zipCode) => {
  cy.get("#first-name").type(firstName);
  cy.get("#last-name").type(lastName);
  cy.get("#postal-code").type(zipCode);
  cy.get("#continue").click();
});

When("I finish the checkout process", () => {
  cy.get("#finish").click();
});

Then("I should see the order confirmation message {string}", (message) => {
  cy.contains(message).should("be.visible");
});

When("I click the cancel button", () => {
  cy.get("#cancel").click();
});

Then("I should return to the cart page", () => {
  cy.url().should("include", "/cart.html");
});

When("I click the checkout button", () => {
  cy.get("#checkout").click();
});

Then("I should see an error message", () => {
  cy.contains("Error: Your cart is empty").should("be.visible");
});
