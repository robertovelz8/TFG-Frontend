describe('Header después del login', () => {

  beforeEach(() => {
    cy.login();
    cy.visit('/seguimiento');
  });

  it('debería mostrar el header con todos sus elementos', () => {
    cy.get('[data-cy=header]').should('exist');

    cy.get('[data-cy=instituto-link]').should('have.attr', 'href');
    cy.get('[data-cy=home-btn]').should('exist');
    cy.get('[data-cy=volver-btn]').should('exist');

    cy.get('[data-cy=page-title]').should('contain.text', 'Seguimiento');

    cy.get('[data-cy=user-info]').should('contain.text', 'USUARIO');
    cy.get('[data-cy=user-email]').should('not.be.empty');

    cy.get('[data-cy=logout-btn]').should('exist');
  });

  it('debería cerrar sesión al hacer clic en logout y mostrar el login', () => {
    cy.get('[data-cy=logout-btn]').click();
    cy.get('.swal2-confirm').click();
    cy.url().should('include', '/login');
    cy.get('form').should('exist');
  });
});
