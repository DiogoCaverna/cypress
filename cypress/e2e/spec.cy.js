describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Diogo');
    cy.get('input[name="email"]').type('Diogo@gm.com');
    cy.get('input[name="password"]').type('D123456a');
    cy.get('input[name="confirm_password"]').type('D123456a');
    cy.contains('button', 'Cadastrar').click();
  })
})






