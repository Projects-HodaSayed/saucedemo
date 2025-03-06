Feature: Logout from SauceDemo

  Scenario: Successfully logout from the application
    Given I login to SauceDemo with user: "standard_user" and pass: "secret_sauce"
    When I click on the menu button
    And I click the logout button
    Then I should be redirected to the login page
