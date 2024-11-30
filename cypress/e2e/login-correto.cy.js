describe('Pagina de Login', () => {
  beforeEach(() =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

    it('Deve preencher os campos do formulário corretamente para logar usuário', () => {
      cy.get('[data-test="input-loginEmail"]').type('Diogo12@gm.com');
      cy.get('[data-test="input-loginPassword"]').type('D123456a');
      cy.get('[data-test="submit-button"]').click();

    })
})