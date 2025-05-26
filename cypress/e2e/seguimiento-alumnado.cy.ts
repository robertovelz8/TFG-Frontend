describe('SeguimientoAlumnadoComponent', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/seguimiento');
  });

  it('debería mostrar 4 botones con los textos y tooltips correctos', () => {
    cy.get('button.btn-caso').should('have.length', 4);

    const botonesEsperados = [
      {
        texto: 'Registrar Sanción',
        tooltip: 'Registra una nueva sanción para un alumno',
        href: '/registrar-sancion'
      },
      {
        texto: 'Consultar Lista de Sanciones',
        tooltip: 'Consulta todas las sanciones registradas',
        href: '/consultar-sanciones'
      },
      {
        texto: 'Registro de tareas durante expulsión',
        tooltip: 'Registra tareas que debe realizar el alumnado expulsado',
        href: '/registrar-tarea'
      },
      {
        texto: 'Consulta de tareas del alumnado expulsado',
        tooltip: 'Consulta las tareas asignadas a un alumno expulsado',
        href: '/consultar-tareas-alumno-expulsado'
      }
    ];

    botonesEsperados.forEach(({ texto, tooltip, href }, index) => {
      cy.get('button.btn-caso')
        .eq(index)
        .should('contain.text', texto)
        .and('have.attr', 'data-tooltip', tooltip);
      cy.get('button.btn-caso').eq(index).click();
      cy.url().should('include', href);
      cy.go('back');
    });
  });
});
