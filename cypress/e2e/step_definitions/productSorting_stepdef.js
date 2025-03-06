import { When, Then } from "cypress-cucumber-preprocessor/steps";

import landingPage from '../pages/landingPage'
const landingpage = new landingPage()

When('I select {string} from the sort dropdown', (sorting) => {
    landingpage.SortProducts()
  });  

Then("the products should be sorted from cheapest to most expensive", () => {
 landingpage.ValidateProductsSorting()
});
