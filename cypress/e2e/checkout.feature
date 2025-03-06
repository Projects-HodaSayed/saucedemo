Feature: Checkout Process

  Scenario: View cart contents
    Given I login to SauceDemo with user: "standard_user" and pass: "secret_sauce"
    When I add "sauce-labs-backpack" to the cart
    When I click on the cart icon
    Then I should see the added product in the cart

  Scenario: Fill the checkout form and complete purchase
    Given I login to SauceDemo with user: "standard_user" and pass: "secret_sauce"
    When I add "sauce-labs-backpack" to the cart
    When I click on the cart icon
    When I proceed to checkout
    And I fill in my details "John" "Doe" "12345"
    And I finish the checkout process
    Then I should see the order confirmation message "Thank you for your order!"

  Scenario: Cancel checkout process
    Given I login to SauceDemo with user: "standard_user" and pass: "secret_sauce"
    When I add "sauce-labs-backpack" to the cart
    When I click on the cart icon
    When I proceed to checkout
    And I click the cancel button
    Then I should return to the cart page

  Scenario: Checkout with an empty cart
    Given I login to SauceDemo with user: "standard_user" and pass: "secret_sauce"
    When I click on the cart icon
    When I click the checkout button
    Then I should see an error message
