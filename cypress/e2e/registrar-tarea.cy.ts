describe('Registrar Tarea', () => {

    before(() => {
        cy.login();
    });

    beforeEach(() => {
        cy.visit('/seguimiento');
    });

    it('modal de sanciones y registrar la tarea', () => {
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

        cy.get('input[name="titulo"]').type('Tarea de matemáticas');

        const hoy = new Date().toISOString().split('T')[0];
        cy.get('input[name="fecha-limite"]').clear().type(hoy);

        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu li a').eq(1).click();

        cy.get('.dropdown-toggle').should('not.contain.text', 'Selecciona una opción');
        cy.get('textarea[name="descripcion"]').type('Realizar actividades 7 y 8 de la pág 78 del libro de texto.');
        cy.intercept('POST', 'http://localhost:8080/guzpasen/conducta/tarea', {
            statusCode: 201,
            body: { id: 1, message: 'Tarea creada' }
        }).as('createTarea');

        cy.contains('button', 'REGISTRAR TAREA').click();

        cy.wait('@createTarea');

        cy.get('.swal2-popup').should('exist');
        cy.get('.swal2-title').should('contain', 'Tarea registrada');
        cy.get('.swal2-confirm').click();

    });

});
