import { When, Then } from "cypress-cucumber-preprocessor/steps";

import landingPage from '../pages/landingPage'
import CartPage from '../pages/cartPage'
import checkoutPage from '../pages/checkoutPage'

const landingpage = new landingPage()
const cartpage = new CartPage()
const checkoutpage = new checkoutPage()

When("I click on the cart icon", () => {
  landingpage.ClickOnCartButton()
});

Then("I should see the added product in the cart", () => {
  cartpage.ValidateAddedProducts()
});

When("I proceed to checkout", () => {
  cartpage.ClickOnCheckoutButton()
});

When('I fill in my details {string} {string} {string}', (firstName, lastName, zipCode) => {
  checkoutpage.FillCheckoutDetails(firstName, lastName, zipCode)
});

When("I finish the checkout process", () => {
  checkoutpage.ClickOnFinish()
});

Then("I should see the order confirmation message {string}", (message) => {
  checkoutpage.ValidateConfirmationMessage(message)
});

When("I click the cancel button", () => {
  checkoutpage.ClickOnCancel()
});

Then("I should return to the cart page", () => {
  checkoutpage.CheckLandingOnCartPage()
});

Then("I should see an error message", () => {
 checkoutpage.ValidateErrorIfUserCheckoutCartEmpty()
});
