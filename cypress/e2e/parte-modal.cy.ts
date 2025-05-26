describe('Registrar Sanción - Modal de Partes', () => {

  before(() => {
    cy.login();
  });

  beforeEach(() => {
    cy.visit('/seguimiento');
  });

  it('abre el modal de partes, busca, selecciona y confirma', () => {

    cy.contains('button', 'Registrar Sanción').click();

    cy.url().should('include', '/registrar-sancion');

    cy.get('[data-cy=abrir-modal-parte]').click();

    cy.get('.modal-title').should('contain.text', 'Seleccionar parte');

    cy.get('.list-group-item').should('have.length.greaterThan', 0);

    cy.get('input[placeholder*="Buscar parte"]').type('biblioteca');

    cy.get('.list-group-item').each(($el) => {
      const text = $el.text().toLowerCase();
      expect(text).to.satisfy((str: string) => str.includes('biblioteca') || str.includes('motivoEsperado'));
    });

    cy.get('.list-group-item').first().click().should('have.class', 'active');

    cy.contains('button', 'Seleccionar parte').click();

    cy.get('.modal-title').should('not.exist');

    cy.get('[data-cy=parte-seleccionado]').should('exist');
  });

});
