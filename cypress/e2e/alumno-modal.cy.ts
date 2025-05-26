describe('Registrar Sanción - Modal de Alumnos', () => {

  before(() => {
    cy.login();
  });

  beforeEach(() => {
    cy.visit('/seguimiento');
  });

  it('abre el modal de alumnos, busca, selecciona y confirma', () => {
    cy.contains('button', 'Registrar Sanción').click();

    cy.url().should('include', '/registrar-sancion');

    cy.get('[data-cy=abrir-modal-alumno]').click();

    cy.get('.modal-title').should('contain.text', 'Seleccionar alumno');

    cy.get('.list-group-item').should('have.length.greaterThan', 0);

    cy.get('input[placeholder*="Buscar alumno"]').type('Juan');

    cy.get('.list-group-item').each(($el) => {
      expect($el.text().toLowerCase()).to.include('juan');
    });

    cy.get('.list-group-item').first().click().should('have.class', 'active');

    cy.contains('button', 'Seleccionar alumno').click();

    cy.get('.modal-title').should('not.exist');

    cy.get('[data-cy=alumno-seleccionado]').should('contain.text', 'Juan');
  });

});
