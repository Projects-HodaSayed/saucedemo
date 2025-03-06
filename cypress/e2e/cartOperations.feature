Feature: Cart Operations

  Scenario: Add a product from the landing page
    Given I login to SauceDemo with user: "standard_user" and pass: "secret_sauce"
    When I add "sauce-labs-backpack" to the cart
    Then the cart icon should show "1" item

  Scenario: Remove a product from the landing page
    Given I login to SauceDemo with user: "standard_user" and pass: "secret_sauce"
    When I add "sauce-labs-backpack" to the cart
    When I remove "sauce-labs-backpack" from the cart
    Then the cart icon should be empty

  Scenario: Remove a product from cart
    Given I login to SauceDemo with user: "standard_user" and pass: "secret_sauce"
    When I add "sauce-labs-backpack" to the cart
    When I click on the cart icon
    When I remove "sauce-labs-backpack" from the cart
    Then the cart should be empty
