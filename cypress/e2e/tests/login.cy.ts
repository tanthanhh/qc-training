import LoginPage from "../pages/loginPage";
const loginData = require('../../fixtures/loginData.json');

describe('Login testcase', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false;
        });

        cy.visit('https://demoqa.com/login');
        cy.wait(1000);
        cy.get(LoginPage.loginButton).should('be.visible');
    });

    it('Login with valid credentials - css', () => {
        cy.get(LoginPage.userName).clear().type(loginData.userName);
        cy.get(LoginPage.password).clear().type(loginData.passWord);
        cy.get(LoginPage.loginButton).click();
        cy.get(LoginPage.userNameLabel, {timeout: 4000}).should('be.visible');
    });

    // it('Login with valid credentials - xpath', () => {
    //     cy.xpath(LoginPage.userNameXpath).clear().type(loginData.userName);
    //     cy.xpath(LoginPage.passwordXpath).clear().type(loginData.password);
    //     cy.xpath(LoginPage.loginButtonXpath).click();
    //     cy.xpath(LoginPage.userNameLabelXpath, {timeout: 4000}).should('be.visible');
    // });
});