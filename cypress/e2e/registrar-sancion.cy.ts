describe('Registrar Sanción - flujo completo', () => {
    before(() => {
        cy.login();
    });

    it('debe mostrar advertencia si faltan campos obligatorios', () => {
        cy.visit('/seguimiento');
        cy.contains('button', 'Registrar Sanción').click();
        cy.url().should('include', '/registrar-sancion');
        cy.contains('button', 'REGISTRAR SANCIÓN').click();

        cy.get('.swal2-popup').should('exist');
        cy.get('.swal2-title').should('contain', 'Campos incompletos');
        cy.get('.swal2-confirm').click();
    });

    it('debe registrar sanción correctamente con todos los campos completos', () => {
        cy.login();
        cy.visit('/seguimiento');
        cy.contains('button', 'Registrar Sanción').click();
        cy.url().should('include', '/registrar-sancion');
        cy.seleccionarAlumno();
        cy.get('[data-cy=alumno-seleccionado]').should('exist');

        cy.seleccionarParte();
        cy.get('[data-cy=parte-seleccionado]').should('exist');

        const hoy = new Date().toISOString().split('T')[0];
        cy.get('input[name="fecha"]').clear().type(hoy);

        cy.get('input[name="duracion"]').type('5 días');

        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu li a').eq(1).click();

        cy.get('.dropdown-toggle').should('not.contain.text', 'Selecciona una opción');
        cy.intercept('POST', 'http://localhost:8080/guzpasen/conducta/sancion', {
            statusCode: 201,
            body: { id: 1, message: 'Sanción creada' }
        }).as('createSancion');

        cy.contains('button', 'REGISTRAR SANCIÓN').click();

        cy.wait('@createSancion');

        cy.get('.swal2-popup').should('exist');
        cy.get('.swal2-title').should('contain', 'Sanción registrada');
        cy.get('.swal2-confirm').click();
    });
});
