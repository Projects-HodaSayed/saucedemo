import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import loginPage from '../pages/loginPage'
const loginpage = new loginPage()

import landingPage from '../pages/landingPage'
const landingpage = new landingPage()

When("I click on the menu button", () => {
  landingpage.ClickMenu()
});

When("I click the logout button", () => {
  landingpage.ClickOnLogoutButton()
});

Then("I should be redirected to the login page", () => {
  loginpage.ValidateLandingOnLoginPage()
});
