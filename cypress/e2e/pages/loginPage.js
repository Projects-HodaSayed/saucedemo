class loginPage {
    elements = {
        userNameText: () => cy.get('[data-test="username"]'),
        passwordText: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]')
    }

    EnterUserName(username){
        this.elements.userNameText().type(username);
    }

    EnterPassword(password){
        this.elements.passwordText().type(password);
    }

    ClickOnLoginButton(){
        this.elements.loginButton().click()
    }

     ValidateLandingOnInventoryPage(){
        cy.url().should("include", "/inventory.html")
    }

    NavigateToSouceDemo(){
        cy.visit("https://www.saucedemo.com");
    }

    ValidateLandingOnLoginPage(){
        cy.url().should("eq", "https://www.saucedemo.com/");
        this.elements.loginButton().should("be.visible");
    }
}
export default loginPage