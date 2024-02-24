it('test', function () {
    cy.visit('https://www.html5tutorial.info/html5-date.php')
    cy.get('input')
      .type('2009-12-12')
      .type('{enter}')
  })