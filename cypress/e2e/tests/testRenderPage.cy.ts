import testRenderPage from "../pages/testRenderPage";

describe('Test render page', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false;
        });

        cy.visit('https://demoqa.com/elements');
        cy.wait(1000);
    });

    it('Test render page', () => {
        cy.get(testRenderPage.mainCate).each(($el, index, $list) => {
            cy.wait(1000);
            cy.wrap($el).click().find(testRenderPage.subCate).then((subCate) => {
                cy.wrap(subCate).each(($sub, index, $list) => {
                    let text = $sub.text();
                    cy.wrap($sub).click();

                    switch (text) {
                        case 'Book Store':
                            cy.get(testRenderPage.searchBoxCate).should('be.visible', {timeout: 4000});
                            break;
                        case 'Profile':
                            cy.get(testRenderPage.profileCate).should('be.visible', {timeout: 4000});
                            break;
                        case 'Book Store API':
                            cy.get(testRenderPage.bookStoreApiCate).should('be.visible', {timeout: 10000});
                            break;
                        default:
                            cy.get(testRenderPage.headerPage).should('have.text', text);
                    }

                    cy.wait(1000);
                });
            });
        });
    });
})
