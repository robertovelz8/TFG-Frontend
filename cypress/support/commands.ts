declare global {
    namespace Cypress {
        interface Chainable {
            login(): Chainable<void>;
            seleccionarAlumno(): Chainable<void>;
            seleccionarParte(): Chainable<void>;
        }
    }
}

Cypress.Commands.add('login', () => {
    const email = 'roberto2412005@gmail.com';
    const password = 'Robvelz8_!';
    cy.visit('/login');
    cy.get('[data-cy="email"]').type(email);
    cy.get('[data-cy="clave"]').type(password);
    cy.get('[data-cy="login-btn"]').click();

    cy.url().should('include', '/seguimiento');
});

Cypress.Commands.add('seleccionarAlumno', () => {
  cy.get('[data-cy=abrir-modal-alumno]').click();
  cy.get('.list-group-item').first().click();
  cy.contains('button', 'Seleccionar alumno').click();
  cy.get('[data-cy=alumno-seleccionado]').should('exist');
});

Cypress.Commands.add('seleccionarParte', () => {
  cy.get('[data-cy=abrir-modal-parte]').click();
  cy.get('.list-group-item').first().click();
  cy.contains('button', 'Seleccionar parte').click();
  cy.get('[data-cy=parte-seleccionado]').should('exist');
});


export { };
