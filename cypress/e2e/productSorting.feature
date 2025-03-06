Feature: Sorting Products

  Scenario: Sort products by price (low to high)
    Given I login to SauceDemo with user: "standard_user" and pass: "secret_sauce"
    When I select "Price low to high" from the sort dropdown
    Then the products should be sorted from cheapest to most expensive