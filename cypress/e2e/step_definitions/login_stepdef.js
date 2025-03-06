import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import loginPage from '../pages/loginPage'
const loginpage = new loginPage()

Given("I open SauceDemo login page", () => {
  loginpage.NavigateToSouceDemo()
});

When("I enter username {string}", (username) => {
  loginpage.EnterUserName(username)
});

When("I enter password {string}", (password) => {
  loginpage.EnterPassword(password)
});

When("I click the login button", () => {
  loginpage.ClickOnLoginButton()
});

Then("I should be redirected to the inventory page", () => {
  loginpage.ValidateLandingOnInventoryPage()
});

Given("I login to SauceDemo with user: {string} and pass: {string}", (username, password) => {
  loginpage.NavigateToSouceDemo()
  loginpage.EnterUserName(username)
  loginpage.EnterPassword(password)
  loginpage.ClickOnLoginButton()
});


