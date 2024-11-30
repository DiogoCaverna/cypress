describe('Pagina de Login', () => {
    beforeEach(() =>{
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
    })
  
      it('Deve preencher os campos do formulário incorretamente e informar o usuário', () => {
        cy.get('[data-test="input-loginEmail"]').type('Diogo12gm.com');
        cy.get('form > :nth-child(3)')
        cy.get('[data-test="input-loginPassword"]').type('123456');
        cy.get('[data-test="submit-button"]').click();
  
      })
  })