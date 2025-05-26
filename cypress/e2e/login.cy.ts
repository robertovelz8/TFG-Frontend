describe('Flujo de login', () => {
  const email = 'roberto2412005@gmail.com';
  const password = 'Robvelz8_!';              

  it('debería iniciar sesión y redirigir al seguimiento', () => {
    cy.visit('/login');

    cy.get('[data-cy="email"]').type(email);
    cy.get('[data-cy="clave"]').type(password);
    cy.get('[data-cy="login-btn"]').click();

    cy.url().should('include', '/seguimiento');

    cy.contains('Sanción').should('exist');
  });
});
