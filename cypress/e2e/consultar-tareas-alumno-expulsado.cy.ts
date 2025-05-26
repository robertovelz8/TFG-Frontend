describe('Consultar tareas de un alumno expulsado', () => {

  beforeEach(() => {
    cy.login();
    cy.visit('/consultar-tareas-alumno-expulsado');
  });

  it('debería mostrar las tareas del alumno seleccionado', () => {
    cy.seleccionarAlumno();

    cy.get('[data-cy=alumno-seleccionado]')
      .should('exist')
      .and('contain.text', 'Alumno seleccionado');
    cy.get('table.table').should('exist');
    cy.get('table tbody tr').should('have.length.greaterThan', 0);

    cy.get('table tbody tr').first().within(() => {
      cy.get('td').eq(0).should('not.be.empty');
      cy.get('td').eq(1).should('not.be.empty');
      cy.get('td').eq(2).should('not.be.empty');
      cy.get('td').eq(3)
        .invoke('text')
        .should('match', /\d{2}\/\d{2}\/\d{4}/);

      cy.get('td').eq(4)
        .invoke('text')
        .should('match', /\d{2}\/\d{2}\/\d{4}/);

    });
  });

  it('debería mostrar el mensaje de alerta si no se ha seleccionado alumno', () => {
    cy.login();
    cy.visit('/consultar-tareas-alumno-expulsado');
    cy.get('.alert', { timeout: 5000 })
      .invoke('text')
      .should('contain', 'Selecciona primero a un alumno para ver sus tareas durante expulsión.');

  });

});
