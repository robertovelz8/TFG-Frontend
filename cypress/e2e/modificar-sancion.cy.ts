describe('Modificar una sanción', () => {
    beforeEach(() => {
        cy.login();
        cy.visit('/consultar-sanciones');
    });

    it('debería permitir modificar una sanción de un alumno', () => {
        cy.intercept('GET', '**/guzpasen/conducta/sancion/alumno/**').as('getSanciones');
        cy.intercept('GET', '**/guzpasen/conducta/sancion/**').as('getSancion');
        cy.intercept('PUT', '**/guzpasen/conducta/sancion/**').as('putSancion');

        cy.seleccionarAlumno();

        cy.get('table tbody tr').first().click();
        cy.wait('@getSanciones');

        cy.get('table tbody tr').first().within(() => {
            cy.get('button[title="Modificar"]').click();
        });

        cy.wait('@getSancion');

        const nuevaFecha = '2024-12-01';
        cy.get('input[name="fecha"]').clear().type(nuevaFecha);

        cy.get('input[name="duracion"]').clear().type('3 días');

        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu a').first().click();

        cy.get('form').submit();

        cy.wait('@putSancion').its('response.statusCode').should('eq', 200);

        cy.contains('La sanción se ha modificado correctamente').should('exist');
    });
})
