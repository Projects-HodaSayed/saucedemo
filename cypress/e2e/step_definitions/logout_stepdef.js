import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

When("I click on the menu button", () => {
  cy.get("#react-burger-menu-btn").click();
});

When("I click the logout button", () => {
  cy.get("#logout_sidebar_link").click();
});

Then("I should be redirected to the login page", () => {
  cy.url().should("eq", "https://www.saucedemo.com/");
  cy.get("#login-button").should("be.visible");
});
