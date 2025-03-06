import { When, Then } from "cypress-cucumber-preprocessor/steps";

import landingPage from '../pages/landingPage'
import CartPage from '../pages/cartPage'

const landingpage = new landingPage()
const cartPage = new CartPage()

When('I add {string} to the cart', (item) => {
  landingpage.AddProducts(item)
});

Then("the cart icon should show {string} item", (count) => {
  landingpage.ValidateCartIcon(count);
});


When('I remove {string} from the cart', (item) => {
  landingpage.RemoveProduct(item)
});

Then("the cart icon should be empty", () => {
  landingpage.ValidateCartIconIsEmpty()
});

Then("the cart should be empty", () => {
    cartPage.ValidatCartIsEmpty()
});
  