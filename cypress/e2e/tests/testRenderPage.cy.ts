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
        cy.get('.element-group').each(($el, index, $list) => {
            cy.wait(1000);
            cy.wrap($el).click().find('.btn-light').then((btn) => {
                cy.wrap(btn).each(($btn, index, $list) => {
                    let text = $btn.text();
                    cy.wrap($btn).click();

                    switch (text) {
                        case 'Book Store':
                            cy.get('#searchBox-wrapper').should('be.visible', {timeout: 4000});
                            break;
                        case 'Profile':
                            cy.get('#notLoggin-wrapper').should('be.visible', {timeout: 4000});
                            break;
                        case 'Book Store API':
                            cy.get('#operations-tag-Account').should('be.visible', {timeout: 10000});
                            break;
                        default:
                            cy.get('h1').should('have.text', text);
                    }

                    cy.wait(1000);
                });
            });
        });
    });
})
