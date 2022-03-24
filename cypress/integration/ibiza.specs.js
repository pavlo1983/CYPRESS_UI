/// <reference types="cypress" />

describe('Test group name', () => {
    it('should configure Ibiza', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('has already been declared')

            return false
          })

        cy.visit('/');
     
        cy.get('#onetrust-accept-btn-handler').click(); 

       function clickElementWithEaxctTextMatch(className,eleText) {
        cy.get(className).each(ele => {
          if (ele.text() === eleText) {
            ele.click();
          }
        });
      };

      clickElementWithEaxctTextMatch('.ng-star-inserted', 'IBIZA');

      function clickFirstElement(className) {
        cy.get(className).each(el => {
          if (el) {
            el.click();
          }
        });
      };

      clickFirstElement('.column-3.row-2.start-config-button-container');

      cy.get('seat-button').contains('Siguiente').click({force: true});
      cy.get('seat-button').contains('Siguiente').click({force: true});
      cy.get('seat-button').contains('Siguiente').click({force: true});
      cy.get('seat-button').contains('Siguiente').click({force: true});

      cy.get('.configuration-key').should('have.text', 'SFEAXVBO');

    });
  });