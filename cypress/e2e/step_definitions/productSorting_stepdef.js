import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('I select {string} from the sort dropdown', (sorting) => {
    cy.get(".product_sort_container").select("lohi");
  });  

Then("the products should be sorted from cheapest to most expensive", () => {
  let prices = [];
  cy.get(".inventory_item_price").each(($el) => {
    prices.push(parseFloat($el.text().replace("$", "")));
  }).then(() => {
    let sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).to.deep.equal(sortedPrices);
  });
});
