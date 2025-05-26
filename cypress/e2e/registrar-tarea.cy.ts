describe('Registrar Tarea - Modal de Sanciones', () => {

    before(() => {
        cy.login();
    });

    beforeEach(() => {
        cy.visit('/seguimiento');
    });

    it('abre el modal de sanciones, busca, selecciona y confirma', () => {
        cy.contains('button', 'Registro de tareas durante expulsión').click();

        cy.url().should('include', '/registrar-tarea');

        cy.get('[data-cy=abrir-modal-sancion]').click();

        cy.get('.modal-title').should('contain.text', 'Seleccionar Sanción');

        cy.get('.list-group-item').should('have.length.greaterThan', 0);

        cy.get('input[placeholder*="Buscar por fecha"]').type('1/3/2024');

        cy.get('.list-group-item').each(($el) => {
            expect($el.text().replace(/\s/g, '')).to.include('01/03/2024'.replace(/\s/g, ''));
        });

        cy.get('.list-group-item').first().click().should('have.class', 'active');

        cy.contains('button', 'Seleccionar sanción').click();

        cy.get('.modal-title').should('not.exist');

        cy.get('[data-cy=sancion-seleccionada]').should('contain.text', '01/03/2024');
    });

});
