describe('Consultar sanciones de un alumno', () => {

    beforeEach(() => {
        cy.login();
        cy.visit('/consultar-sanciones');
    });

    it('debería permitir seleccionar un alumno y mostrar sus sanciones', () => {
        cy.intercept('GET', '**/guzpasen/conducta/sancion/alumno/**').as('getSanciones');

        cy.seleccionarAlumno();

        cy.get('table tbody tr').first().click();

        cy.wait('@getSanciones');

        cy.contains('Alumno seleccionado').should('exist');

        cy.get('table tbody tr').should('have.length.at.least', 1);

        cy.get('table tbody tr').first().within(() => {
            cy.get('button[title="Consultar"]').should('exist');
            cy.get('button[title="Modificar"]').should('exist');
        });

        cy.get('table tbody tr').first().within(() => {
            cy.get('button[title="Consultar"]').click();
        });

        cy.get('.modal-content').should('be.visible');

        cy.get('.modal-content').contains('Tipo de Sanción').should('exist');

    });
});
