import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open SauceDemo login page", () => {
  cy.visit("https://www.saucedemo.com");
});

When("I enter username {string}", (username) => {
  cy.get('[data-test="username"]').type(username);
});

When("I enter password {string}", (password) => {
  cy.get('[data-test="password"]').type(password);
});

When("I click the login button", () => {
  cy.get('[data-test="login-button"]').click();
});

Then("I should be redirected to the inventory page", () => {
  cy.url().should("include", "/inventory.html");
});

Given("I login to SauceDemo with user: {string} and pass: {string}", (username, password) => {
  cy.visit("https://www.saucedemo.com");
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});


